(function(e){function t(t){for(var o,u,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)u=i[l],r[u]&&f.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return i.p+"js/"+({dashboard:"dashboard",roles:"roles"}[e]||e)+"."+{dashboard:"5b915d75",roles:"19c157ab"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e),a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},1619:function(e,t){e.exports={hello:function(e){return"".concat(e," -world")}}},"3b6a":function(e,t){e.exports={color:{bind:function(e,t){e.style.color=t.value}}}},"41f1":function(e,t,n){"use strict";n.r(t);var o=n("e017"),r=n.n(o),a=n("21a1"),u=n.n(a),i=new r.a({id:"icon-js",use:"icon-js-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-js"><defs><style type="text/css"></style></defs><path d="M354.40128 0c-87.04 0-157.44 70.55872-157.44 157.59872v275.68128H78.72c-21.6576 0-39.36256 17.69984-39.36256 39.36256v236.31872c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.24128v118.08256c0 87.04 70.4 157.59872 157.44 157.59872h472.63744c87.04 0 157.59872-70.55872 157.59872-157.59872V315.0336c0-41.74848-38.9888-81.93024-107.52-149.27872l-29.11744-29.12256L818.87744 107.52C751.5392 38.9888 711.39328 0 669.59872 0H354.4064z m0 78.72h287.20128c28.35456 7.0912 27.99616 42.1376 27.99616 76.8v120.16128c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.07744c39.38816 0 78.87872-0.0256 78.87872 39.36256v512c0 43.32032-35.55328 78.87872-78.87872 78.87872H354.4064c-43.32544 0-78.72-35.5584-78.72-78.87872v-118.08256h393.91744c21.66272 0 39.36256-17.69472 39.36256-39.35744V472.64256c0-21.66272-17.69984-39.36256-39.36256-39.36256H275.68128V157.59872c0-43.32032 35.39456-78.87872 78.72-78.87872zM409.7536 501.91872c17.28 0 32.64 3.2 46.08 9.6l-7.68 18.24256c-13.44-5.76-26.24-8.64256-38.4-8.64256-10.24 0-17.92 2.24256-23.04 6.72256s-7.68 10.55744-7.68 18.23744c0 8.96 1.92 15.68256 5.76 20.16256 4.48 3.84 15.04256 9.6 31.68256 17.28 17.28 7.04 28.47744 14.39744 33.59744 22.07744 5.76 7.04 8.64256 16 8.64256 26.88 0 14.72-5.12 26.56256-15.36 35.52256s-24.96 13.44-44.16 13.44c-18.56 0-33.28-2.56-44.16-7.68v-21.12c15.36 6.4 30.08 9.6 44.16 9.6 12.8 0 22.07744-2.24256 27.83744-6.72256 6.4-4.48 9.6-11.52 9.6-21.12 0-7.68-2.23744-14.08-6.71744-19.2-3.2-3.2-15.04256-9.27744-35.52256-18.23744-13.44-6.4-23.04-13.44-28.8-21.12s-8.63744-17.60256-8.63744-29.76256c0-13.44 4.48-23.99744 13.44-31.67744 9.6-8.32 22.71744-12.48256 39.35744-12.48256z m-111.36 1.92h22.08256v172.8c0 16-4.16256 28.16-12.48256 36.48-8.32 8.96-20.15744 13.44-35.51744 13.44-7.04 0-13.12256-0.95744-18.24256-2.87744v-19.2c6.4 1.28 12.8 1.92 19.2 1.92 8.32 0 14.40256-2.24256 18.24256-6.72256 4.48-4.48 6.71744-11.19744 6.71744-20.15744V503.83872z" p-id="894" /></symbol>'});u.a.add(i);t["default"]=i},"56d7":function(e,t,n){"use strict";n.r(t);n("456d"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"app",computed:{loading:function(){return this.$store.state.app.loading}}},i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[e._v("测试显示"),n("span",{directives:[{name:"color",rawName:"v-color",value:"red",expression:"'red'"}]},[e._v("指令")])]),n("div",[e._v("指令测试"+e._s(e._f("hello")(e.text)))]),e._v("\n  svg图标"),n("Icon",{attrs:{type:"js"}}),n("hr"),n("router-link",{attrs:{to:"/erp"}},[e._v("erp系统")]),n("router-link",{attrs:{to:"/admin"}},[e._v("admin系统")])],1)},p=[],g=n("781b"),m={name:"home",data:function(){return{text:"开始测试"}},mounted:function(){console.log("test3",g),this.$axios.get("/code/fresh").then(function(e){var t=e.data;console.log(t)})}},v=m,h=Object(s["a"])(v,f,p,!1,null,null,null),b=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[e._v("Header")]),n("el-main",[n("router-view")],1)],1)},w=[],x={name:"default-layout"},_=x,O=(n("7298"),Object(s["a"])(_,y,w,!1,null,null,null)),j=O.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{attrs:{width:"200px"}},[e._v("Aside")]),n("el-container",[n("el-header",[e._v("Header")]),n("el-main",[n("router-view")],1),n("el-footer",[e._v("Footer")])],1)],1)},B=[],E={name:"admin-layout",data:function(){return{name:"vapour"}}},S=E,T=Object(s["a"])(S,L,B,!1,null,null,null),k=T.exports;o["default"].use(d["a"]);var J,R=new d["a"]({routes:[{path:"/",name:"home",component:b},{path:"/erp",name:"erp",redirect:"/erp/dashboard",component:j,children:[{path:"dashboard",name:"dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"325f"))}}]},{path:"/admin",name:"admin",redirect:"/admin/roles",component:k,children:[{path:"roles",name:"roles",component:function(){return n.e("roles").then(n.bind(null,"d411"))}}]}]}),$=n("2f62"),M={state:{loading:!1},mutations:{showLoading:function(e){e.loading=!0},hideLoading:function(e){e.loading=!1}},actions:{showLoading:function(e){J&&clearTimeout(J),e.commit("showLoading")},hideLoading:function(e){J&&clearTimeout(J),J=setTimeout(function(){e.commit("hideLoading")},300)}}},D={state:{},mutations:{}};o["default"].use($["a"]);var N=new $["a"].Store({state:{},mutations:{},actions:{},modules:{app:M,user:D}}),C=(n("0fb7"),n("450d"),n("f529")),A=n.n(C),H=(n("46a1"),n("e5f2")),P=n.n(H),z=(n("9e1f"),n("6ed5")),U=n.n(z),I=(n("be4f"),n("896a")),V=n.n(I),q=(n("bdc7"),n("aa2f")),F=n.n(q),K=(n("de31"),n("c69e")),Q=n.n(K),G=(n("a769"),n("5cc3")),W=n.n(G),X=(n("a673"),n("7b31")),Y=n.n(X),Z=(n("adec"),n("3d2d")),ee=n.n(Z),te=(n("6762"),n("dd3d")),ne=n.n(te),oe=(n("a586"),n("7464")),re=n.n(oe),ae=(n("28b2"),n("c7ad")),ue=n.n(ae),ie=(n("b0ee"),n("d180")),se=n.n(ie),ce=(n("a335"),n("c0bb")),le=n.n(ce),de=(n("186a"),n("301f")),fe=n.n(de),pe=(n("96dc"),n("9cea")),ge=n.n(pe),me=(n("9c49"),n("6640")),ve=n.n(me),he=(n("d2ac"),n("95b0")),be=n.n(he),ye=(n("78a7"),n("33ca")),we=n.n(ye),xe=(n("b8e0"),n("a4c4")),_e=n.n(xe),Oe=(n("e2f3"),n("06f9")),je=n.n(Oe),Le=(n("6b30"),n("c284")),Be=n.n(Le),Ee=(n("f225"),n("89a9")),Se=n.n(Ee),Te=(n("f4f9"),n("c2cc")),ke=n.n(Te),Je=(n("7a0f"),n("0f6c")),Re=n.n(Je),$e=(n("aaa5"),n("a578")),Me=n.n($e),De=(n("b5c2"),n("20cf")),Ne=n.n(De),Ce=(n("915d"),n("e04d")),Ae=n.n(Ce),He=(n("5e32"),n("6721")),Pe=n.n(He),ze=(n("cbb5"),n("8bbc")),Ue=n.n(ze),Ie=(n("e612"),n("dd87")),Ve=n.n(Ie),qe=(n("075a"),n("72aa")),Fe=n.n(qe),Ke=(n("eca7"),n("3787")),Qe=n.n(Ke),Ge=(n("425f"),n("4105")),We=n.n(Ge),Xe=(n("b84d"),n("c216")),Ye=n.n(Xe),Ze=(n("8f24"),n("76b9")),et=n.n(Ze),tt=(n("0c67"),n("299c")),nt=n.n(tt),ot=(n("06f1"),n("6ac9")),rt=n.n(ot),at=(n("4ffc"),n("946e")),ut=n.n(at),it=(n("d624"),n("3e9c")),st=n.n(it),ct=(n("826b"),n("c263")),lt=n.n(ct),dt=(n("5466"),n("ecdf")),ft=n.n(dt),pt=(n("38a0"),n("ad41")),gt=n.n(pt),mt=(n("ae26"),n("845f")),vt=n.n(mt),ht=(n("1951"),n("eedf")),bt=n.n(ht),yt=(n("016f"),n("486c")),wt=n.n(yt),xt=(n("6611"),n("e772")),_t=n.n(xt),Ot=(n("1f1a"),n("4e4b")),jt=n.n(Ot),Lt=(n("e960"),n("b35b")),Bt=n.n(Lt),Et=(n("d4df"),n("7fc1")),St=n.n(Et),Tt=(n("c526"),n("1599")),kt=n.n(Tt),Jt=(n("560b"),n("dcdc")),Rt=n.n(Jt),$t=(n("3c52"),n("0d7b")),Mt=n.n($t),Dt=(n("fe07"),n("6ac5")),Nt=n.n(Dt),Ct=(n("b5d8"),n("f494")),At=n.n(Ct),Ht=(n("9d4c"),n("e450")),Pt=n.n(Ht),zt=(n("10cb"),n("f3ad")),Ut=n.n(zt),It=(n("34db"),n("3803")),Vt=n.n(It),qt=(n("8bd8"),n("4cb2")),Ft=n.n(qt),Kt=(n("ce18"),n("f58e")),Qt=n.n(Kt),Gt=(n("4ca3"),n("443e")),Wt=n.n(Gt),Xt=(n("bd49"),n("18ff")),Yt=n.n(Xt),Zt=(n("960d"),n("defb")),en=n.n(Zt),tn=(n("cb70"),n("b370")),nn=n.n(tn),on=(n("3db2"),n("58b8")),rn=n.n(on),an=(n("a7cc"),n("df33")),un=n.n(an),sn=(n("672e"),n("101e")),cn=n.n(sn);o["default"].use(cn.a),o["default"].use(un.a),o["default"].use(rn.a),o["default"].use(nn.a),o["default"].use(en.a),o["default"].use(Yt.a),o["default"].use(Wt.a),o["default"].use(Qt.a),o["default"].use(Ft.a),o["default"].use(Vt.a),o["default"].use(Ut.a),o["default"].use(Pt.a),o["default"].use(At.a),o["default"].use(Nt.a),o["default"].use(Mt.a),o["default"].use(Rt.a),o["default"].use(kt.a),o["default"].use(St.a),o["default"].use(Bt.a),o["default"].use(jt.a),o["default"].use(_t.a),o["default"].use(wt.a),o["default"].use(bt.a),o["default"].use(vt.a),o["default"].use(gt.a),o["default"].use(ft.a),o["default"].use(lt.a),o["default"].use(st.a),o["default"].use(ut.a),o["default"].use(rt.a),o["default"].use(nt.a),o["default"].use(et.a),o["default"].use(Ye.a),o["default"].use(We.a),o["default"].use(Qe.a),o["default"].use(Fe.a),o["default"].use(Ve.a),o["default"].use(Ue.a),o["default"].use(Pe.a),o["default"].use(Ae.a),o["default"].use(Ne.a),o["default"].use(Me.a),o["default"].use(Re.a),o["default"].use(ke.a),o["default"].use(Se.a),o["default"].use(Be.a),o["default"].use(je.a),o["default"].use(_e.a),o["default"].use(we.a),o["default"].use(be.a),o["default"].use(ve.a),o["default"].use(ge.a),o["default"].use(fe.a),o["default"].use(le.a),o["default"].use(se.a),o["default"].use(ue.a),o["default"].use(re.a),o["default"].use(ne.a),o["default"].use(ee.a),o["default"].use(Y.a),o["default"].use(W.a),o["default"].use(Q.a),o["default"].use(F.a),o["default"].use(V.a.directive),o["default"].prototype.$loading=V.a.service,o["default"].prototype.$msgbox=U.a,o["default"].prototype.$alert=U.a.alert,o["default"].prototype.$confirm=U.a.confirm,o["default"].prototype.$prompt=U.a.prompt,o["default"].prototype.$notify=P.a,o["default"].prototype.$message=A.a;var ln=n("bc3a"),dn=n.n(ln),fn=0,pn={start:function(){fn+=1,N.dispatch("showLoading")},end:function(){fn-=1,fn<=0&&N.dispatch("hideLoading")}},gn=dn.a.create({timeout:5e4});gn.interceptors.request.use(function(e){return!1!==e.globalLoading&&pn.start(),e},function(e){return!1!==e.config.globalLoading&&pn.start(),Promise.reject(e)}),gn.interceptors.response.use(function(e){var t=e.config;!1!==t.globalLoading&&pn.end();var n=e.data;if(!1!==t.autoHandleError&&!0!==n.success){var o=(n.code?"["+n.code+"] ":"")+(n.msg||"未知错误");return A()({type:"error",message:o,duration:8e3}),Promise.reject(new Error(o))}return e},function(e){var t=e.config;if(!1!==t.globalLoading&&pn.end(),!1!==t.autoHandleError){var n=e.message||"未知错误";A()({type:"error",message:n,duration:8e3})}return Promise.reject(e)}),o["default"].axios=gn,o["default"].prototype.axios=gn,o["default"].prototype.$axios=gn;var mn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:"svg-icon "+e.className,style:e.styles,attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-"+e.type}})])},vn=[],hn=(n("c5f6"),function(e){e.keys().map(e)}),bn=n("ce50");hn(bn);var yn={name:"Icon",props:{type:{type:String,required:!0},color:{type:String,default:"#5c6b77"},size:{type:Number,default:14},className:{type:String,default:""}},computed:{styles:function(){return{fill:"currentColor",overflow:"hidden",width:"1em",height:"1em",verticalAlign:"middle",fontSize:"".concat(this.size,"px"),color:this.color}}}},wn=yn,xn=Object(s["a"])(wn,mn,vn,!1,null,null,null),_n=xn.exports,On={Icon:_n},jn=n("1619"),Ln=n.n(jn),Bn=n("3b6a"),En=n.n(Bn),Sn=n("c968"),Tn=n.n(Sn),kn=(n("28a5"),n("7f7f"),n("a481"),n("4917"),n("7618")),Jn=(n("6b54"),window),Rn=[],$n={},Mn={id:0,uin:0,url:"//track.mangoerp.com/badjs",offline_url:"",offline_auto_url:"",ext:null,level:4,ignore:[],random:1,delay:1e3,submit:null,repeat:5,offlineLog:!1,offlineLogExp:5,offlineLogAuto:!1,windowOnError:!0},Dn={db:null,ready:function(e){var t=this;if(!window.indexedDB||!Mn.offlineLog)return Mn.offlineLog=!1,e();if(this.db)setTimeout(function(){e(null,t)},0);else{var n=1,o=window.indexedDB.open("badjs",n);if(!o)return Mn.offlineLog=!1,e();o.onerror=function(t){return e(t),Mn.offlineLog=!1,console.log("indexdb request error"),!0},o.onsuccess=function(n){t.db=n.target.result,setTimeout(function(){e(null,t)},500)},o.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("logs")||t.createObjectStore("logs",{autoIncrement:!0})}}},insertToDB:function(e){var t=this.getStore();t.add(e)},addLog:function(e){this.db&&this.insertToDB(e)},addLogs:function(e){if(this.db)for(var t=0;t<e.length;t++)this.addLog(e[t])},getLogs:function(e,t){if(this.db){var n=this.getStore(),o=n.openCursor(),r=[];o.onsuccess=function(n){var o=n.target.result;o?(o.value.time>=e.start&&o.value.time<=e.end&&o.value.id==e.id&&o.value.uin==e.uin&&r.push(o.value),o["continue"]()):t(null,r)},o.onerror=function(e){return t(e),!0}}},clearDB:function(e){if(this.db){var t=this.getStore();if(e){var n=Date.now()-24*(e||2)*3600*1e3,o=t.openCursor();o.onsuccess=function(e){var o=e.target.result;o&&(o.value.time<n||!o.value.time)&&(t["delete"](o.primaryKey),o["continue"]())}}else t.clear()}},getStore:function(){var e=this.db.transaction("logs","readwrite");return e.objectStore("logs")}},Nn={isOBJByType:function(e,t){return Object.prototype.toString.call(e)==="[object "+(t||"Object")+"]"},isOBJ:function(e){var t=Object(kn["a"])(e);return"object"===t&&!!e},isEmpty:function(e){return null===e||!Nn.isOBJByType(e,"Number")&&!e},extend:function(e,t){for(var n in t)e[n]=t[n];return e},processError:function(e){try{if(e.stack){var t=Nn.processStackMsg(e),n=t.match("https?://[^@]+");n=n?n[0]:"";var o=n.match(":(\\d+):(\\d+)");return o||(o=[0,0,0]),{msg:t,rowNum:o[1],colNum:o[2],target:n.replace(o[0],""),_orgMsg:e.toString()}}return e.name&&e.message&&e.description?{msg:JSON.stringify(e)}:e}catch(r){return e}},processStackMsg:function(e){var t=e.stack,n=e.toString(),o=-1!==t.indexOf(n);return t=t.replace(/blob:(https?:\/\/[^:]+)/,function(e,t){return Fn[t]}).replace(/\n/gi,"").split(/\bat\b/).slice(0,9).join("@").replace(/([^\?])\?[^\?][^:]+/gi,"$1"),o||(t=n+"@"+t),e.cause&&(t=e.cause+"@"+t),t},isRepeat:function(e){if(!Nn.isOBJ(e))return!0;var t=e.msg,n=$n[t]=(parseInt($n[t],10)||0)+1;return n>Mn.repeat}},Cn=Jn.onerror;Jn.onerror=function(e,t,n,o,r){var a=e;Mn.windowOnError&&(r&&r.stack&&(a=Nn.processStackMsg(r)),Nn.isOBJByType(a,"Event")&&(a+=a.type?"--"+a.type+"--"+(a.target?a.target.tagName+"::"+a.target.src:""):""),Kn.push({msg:a,target:t,rowNum:n,colNum:o,_orgMsg:e}),qn()),Cn&&Cn.apply(Jn,arguments)};var An=function(e,t){var n=[],o=[],r=[];if(Nn.isOBJ(e))for(var a in e.level=e.level||Mn.level,e){var u=e[a];if(!Nn.isEmpty(u)){if(Nn.isOBJ(u))try{u=JSON.stringify(u)}catch(i){u="[BJ_REPORT detect value stringify error] "+i.toString()}r.push(a+":"+u),n.push(a+"="+encodeURIComponent(u)),o.push(a+"["+t+"]="+encodeURIComponent(u))}}return[o.join("&"),r.join(","),n.join("&")]},Hn=[],Pn=function(e,t){t=Nn.extend({id:Mn.id,uin:Mn.uin,time:new Date-0},t),Dn.db?Dn.addLog(t):(Dn.db||Hn.length||Dn.ready(function(e,t){t&&Hn.length&&(t.addLogs(Hn),Hn=[])}),Hn.push(t))},zn=function(){var e=document.createElement("script");e.src=Mn.offline_auto_url||Mn.url.replace(/badjs$/,"offlineAuto")+"?id="+Mn.id+"&uin="+Mn.uin,window._badjsOfflineAuto=function(e){e&&BJ_REPORT.reportOfflineLog()},document.head.appendChild(e)},Un=[],In=0,Vn=function(){if(clearTimeout(In),In=0,Un.length){var e=Mn._reportUrl+Un.join("&")+"&count="+Un.length+"&_t="+ +new Date;if(Mn.submit)Mn.submit(e,Un);else{var t=new Image;t.src=e}Un=[]}},qn=function(e){if(Mn._reportUrl){var t=Math.random()>=Mn.random;while(Rn.length){var n=!1,o=Rn.shift();if(o.msg=(o.msg+""||"").substr(0,800),!Nn.isRepeat(o)){var r=An(o,Un.length);if(Nn.isOBJByType(Mn.ignore,"Array"))for(var a=0,u=Mn.ignore.length;a<u;a++){var i=Mn.ignore[a];if(Nn.isOBJByType(i,"RegExp")&&i.test(r[1])||Nn.isOBJByType(i,"Function")&&i(o,r[1])){n=!0;break}}n||(Mn.offlineLog&&Pn("badjs_"+Mn.id+Mn.uin,o),t||20==o.level||(Un.push(r[0]),Mn.onReport&&Mn.onReport(Mn.id,o)))}}e?Vn():In||(In=setTimeout(Vn,Mn.delay))}},Fn={},Kn={createObjectURL:function(e,t){var n=new Blob([e]),o=URL.createObjectURL(n);return Fn[o.slice("5")]=t,o},push:function(e){var t=Nn.isOBJ(e)?Nn.processError(e):{msg:e};if(Mn.ext&&!t.ext&&(t.ext=Mn.ext),t.from||(t.from=location.href),t._orgMsg){t._orgMsg;delete t._orgMsg,t.level=4,Rn.push(t)}else Rn.push(t);return qn(),Kn},report:function(e,t){return e&&Kn.push(e),t&&qn(!0),Kn},info:function(e){return e?(Nn.isOBJ(e)?e.level=2:e={msg:e,level:2},Kn.push(e),Kn):Kn},debug:function(e){return e?(Nn.isOBJ(e)?e.level=1:e={msg:e,level:1},Kn.push(e),Kn):Kn},reportOfflineLog:function(){window.indexedDB?Dn.ready(function(e,t){if(t){var n=new Date-0-24*Mn.offlineLogExp*3600*1e3,o=new Date-0;t.getLogs({start:n,end:o,id:Mn.id,uin:Mn.uin},function(e,t){var r=document.createElement("iframe");r.name="badjs_offline_"+(new Date-0),r.frameborder=0,r.height=0,r.width=0,r.src="javascript:false;",r.onload=function(){var e=document.createElement("form");e.style.display="none",e.target=r.name,e.method="POST",e.action=Mn.offline_url||Mn.url.replace(/badjs$/,"offlineLog"),e.enctype.method="multipart/form-data";var a=document.createElement("input");a.style.display="none",a.type="hidden",a.name="offline_log",a.value=JSON.stringify({logs:t,userAgent:navigator.userAgent,startDate:n,endDate:o,id:Mn.id,uin:Mn.uin}),r.contentDocument.body.appendChild(e),e.appendChild(a),e.submit(),setTimeout(function(){document.body.removeChild(r)},1e4),r.onload=null},document.body.appendChild(r)})}}):BJ_REPORT.info("unsupport offlineLog")},offlineLog:function(e){return e?(Nn.isOBJ(e)?e.level=20:e={msg:e,level:20},Kn.push(e),Kn):Kn},init:function(e){Nn.isOBJ(e)&&Nn.extend(Mn,e);var t=parseInt(Mn.id,10);return t&&(Mn._reportUrl=(Mn.url||"/badjs")+"?id="+t+"&uin="+Mn.uin+"&"),Rn.length&&qn(),Dn._initing||(Dn._initing=!0,Dn.ready(function(e,t){t&&setTimeout(function(){t.clearDB(Mn.offlineLogExp),setTimeout(function(){Mn.offlineLogAuto&&zn()},5e3)},1e3)})),Kn},__onerror__:Jn.onerror};"undefined"!==typeof console&&console.error&&setTimeout(function(){var e=((location.hash||"").match(/([#&])BJ_ERROR=([^&$]+)/)||[])[2];e&&console.error("BJ_ERROR",decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g,"$1\n"))},0);var Qn=Kn,Gn="production";Object.keys(On).forEach(function(e){o["default"].component(e,On[e])}),Object.keys(Ln.a).forEach(function(e){o["default"].filter(e,Ln.a[e])}),Object.keys(En.a).forEach(function(e){o["default"].directive(e,En.a[e])}),o["default"].config.productionTip="production"!==Gn,Qn.init({id:2,uin:"test4444",random:1,windowOnError:!1,offlineLog:!1,offlineLogAuto:!1}),o["default"].config.errorHandler=function(e,t,n){n&&(e.cause=n),console.error(e),"development"!==Gn&&Qn.report(e)},o["default"].prototype.helper=Tn.a,new o["default"]({router:R,store:N,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},7298:function(e,t,n){"use strict";var o=n("de00"),r=n.n(o);r.a},"781b":function(e,t){(function(){e.exports=window["jQuery"]})()},bbde:function(e,t,n){"use strict";n.r(t);var o=n("e017"),r=n.n(o),a=n("21a1"),u=n.n(a),i=new r.a({id:"icon-folder",use:"icon-folder-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-folder"><defs><style type="text/css"></style></defs><path d="M149.333333 896h725.333334a64 64 0 0 0 64-64v-469.333333A64 64 0 0 0 874.666667 298.666667H426.666667L317.44 189.44A64 64 0 0 0 272.128 170.666667H149.333333A64 64 0 0 0 85.333333 234.666667v597.333333A64 64 0 0 0 149.333333 896z" fill="#000000" p-id="1012" /></symbol>'});u.a.add(i);t["default"]=i},c968:function(e,t){e.exports={toJson:function(e){return JSON.stringify(e)}}},ce50:function(e,t,n){var o={"./css.svg":"fe2c","./folder.svg":"bbde","./js.svg":"41f1"};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="ce50"},de00:function(e,t,n){},fe2c:function(e,t,n){"use strict";n.r(t);var o=n("e017"),r=n.n(o),a=n("21a1"),u=n.n(a),i=new r.a({id:"icon-css",use:"icon-css-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-css"><defs><style type="text/css"></style></defs><path d="M354.40128 0c-87.04 0-157.44 70.55872-157.44 157.59872v275.68128H78.72c-21.6576 0-39.36256 17.69984-39.36256 39.36256v236.31872c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.24128v118.08256c0 87.04 70.4 157.59872 157.44 157.59872h472.63744c87.04 0 157.59872-70.55872 157.59872-157.59872V315.0336c0-41.74848-38.9888-81.93024-107.52-149.27872l-29.11744-29.12256L818.87744 107.52C751.5392 38.9888 711.39328 0 669.59872 0H354.4064z m0 78.72h287.20128c28.35456 7.0912 27.99616 42.1376 27.99616 76.8v120.16128c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.07744c39.38816 0 78.87872-0.0256 78.87872 39.36256v512c0 43.32032-35.55328 78.87872-78.87872 78.87872H354.4064c-43.32544 0-78.72-35.5584-78.72-78.87872v-118.08256h393.91744c21.66272 0 39.36256-17.69472 39.36256-39.35744V472.64256c0-21.66272-17.69984-39.36256-39.36256-39.36256H275.68128V157.59872c0-43.32032 35.39456-78.87872 78.72-78.87872zM246.55872 505.44128c17.92 0 33.28 3.2 46.08 9.6l-9.6 19.2c-12.16-6.4-24.32-9.6-36.48-9.6-16.64 0-30.39744 6.4-41.27744 19.2-10.24 12.16-15.36 29.44-15.36 51.84 0 23.04 4.79744 40.63744 14.39744 52.79744 9.6 11.52 23.68 17.28 42.24 17.28 10.24 0 23.36256-2.23744 39.36256-6.71744v19.2c-11.52 4.48-25.92256 6.71744-43.20256 6.71744-23.68 0-42.24-7.35744-55.68-22.07744-13.44-15.36-20.15744-38.08256-20.15744-68.16256 0-28.16 7.04-49.92 21.12-65.28 14.72-16 34.23744-23.99744 58.55744-23.99744z m120.00256 0c17.28 0 32.64 3.2 46.08 9.6l-7.68 18.23744c-13.44-5.76-26.24-8.63744-38.4-8.63744-10.24 0-17.92 2.23744-23.04 6.71744s-7.68 10.56256-7.68 18.24256c0 8.96 1.92 15.67744 5.76 20.15744 4.48 3.84 15.03744 9.6 31.67744 17.28 17.28 7.04 28.48256 14.40256 33.60256 22.08256 5.76 7.04 8.63744 16 8.63744 26.88 0 14.72-5.12 26.55744-15.36 35.51744s-24.96 13.44-44.16 13.44c-18.56 0-33.28-2.56-44.16-7.68v-21.12c15.36 6.4 30.08 9.6 44.16 9.6 12.8 0 22.08256-2.23744 27.84256-6.71744 6.4-4.48 9.6-11.52 9.6-21.12 0-7.68-2.24256-14.08-6.72256-19.2-3.2-3.2-15.03744-9.28256-35.51744-18.24256-13.44-6.4-23.04-13.44-28.8-21.12s-8.64256-17.59744-8.64256-29.75744c0-13.44 4.48-24.00256 13.44-31.68256 9.6-8.32 22.72256-12.47744 39.36256-12.47744z m127.67744 0c17.28 0 32.64 3.2 46.08 9.6l-7.68 18.23744c-13.44-5.76-26.24-8.63744-38.4-8.63744-10.24 0-17.92 2.23744-23.04 6.71744s-7.68 10.56256-7.68 18.24256c0 8.96 1.92 15.67744 5.76 20.15744 4.48 3.84 15.04256 9.6 31.68256 17.28 17.28 7.04 28.47744 14.40256 33.59744 22.08256 5.76 7.04 8.64256 16 8.64256 26.88 0 14.72-5.12 26.55744-15.36 35.51744s-24.96 13.44-44.16 13.44c-18.56 0-33.28-2.56-44.16-7.68v-21.12c15.36 6.4 30.08 9.6 44.16 9.6 12.8 0 22.07744-2.23744 27.83744-6.71744 6.4-4.48 9.6-11.52 9.6-21.12 0-7.68-2.23744-14.08-6.71744-19.2-3.2-3.2-15.04256-9.28256-35.52256-18.24256-13.44-6.4-23.04-13.44-28.8-21.12s-8.63744-17.59744-8.63744-29.75744c0-13.44 4.48-24.00256 13.44-31.68256 9.6-8.32 22.71744-12.47744 39.35744-12.47744z" p-id="776" /></symbol>'});u.a.add(i);t["default"]=i}});
//# sourceMappingURL=app.2ac0d35e.js.map