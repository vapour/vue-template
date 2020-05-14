/**
 * 这是一个用于和native进行交互的工具类
 * ps：项目中的部分代码有使用这个类，但是还有很多部分并没有用上去，有空的话针对那部分进行重构
 */
export default class Bridge {
  constructor(namespace) {
    this.namespace = namespace;
    window[namespace] = window[namespace] || {};
    this.webMethods = [];
  }

  /**
   * 执行一个原生方法，在cb函数中可以接收到原生传入的json数据
   * @param {string} methodName
   * @param {object} data
   * @param {function} cb
   */
  execute(methodName, data, cb) {
    try {
      if (!cb && !data) {
        window[this.namespace][methodName]();
        return;
      }
      if (Object.prototype.toString.call(data) !== '[object Object]') {
        throw new Error('data should be a object');
      }

      // 如果不需要执行回调
      if (!cb) {
        window[this.namespace][methodName](JSON.stringify(data));
        return;
      }
      // 如果cb不是个函数 把它当成回调方法名
      if (Object.prototype.toString.call(cb) !== '[object Function]') {
        window[this.namespace][methodName](
          JSON.stringify({
            ...data,
            callback: cb,
          })
        );
        return;
      }
      // 注册一个回调函数在window上
      let callbackName = methodName + 'Callback';
      let dataStr = JSON.stringify({
        ...data,
        callback: callbackName,
      });
      window[this.namespace][callbackName] = (_data) => {
        try {
          _data = JSON.parse(_data);
          cb(_data);
        } catch (e) {
          cb();
        }
      };
      window[this.namespace][methodName](dataStr);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * 在命名空间上注册一个方法供原生调用 cb中可以接收到原生传入的json数据
   * @param {*} methodName
   * @param {*} cb
   */
  register(methodName, cb) {
    if (!cb) {
      throw new Error('cb should be a function');
    }
    this.webMethods.push(methodName);
    window[this.namespace][methodName] = (data) => {
      try {
        data = JSON.parse(data);
        cb(data);
      } catch (e) {
        cb();
      }
    };
  }

  /**
   * 移除命名空间上已注册的方法， 用于组件销毁的时候
   * @param {array} methodNames
   */
  remove(...methodNames) {
    // eslint-disable-next-line
    for (let methodName of methodNames) {
      if (this.webMethods.indexOf(methodName) < 0) {
        console.warn('the function is not defined by web');
        return;
      }
      delete window[this.namespace][methodName];
    }
  }
}
