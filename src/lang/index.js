import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import ElementLocale from 'element-ui/lib/locale'
// 引入element-ui语言包
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
// 引入自有语言包
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  const locale = locales.find(lang => language.indexOf(lang) > -1)
  // 默认语言中文
  return locale || 'zh'
}
const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

// element-ui 国际化设置
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
