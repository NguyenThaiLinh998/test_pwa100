(this["webpackJsonpreactjs-base"]=this["webpackJsonpreactjs-base"]||[]).push([[2],{114:function(e){e.exports=JSON.parse('{"common":{"login":"\u0110\u0103ng nh\u1eadp","signUp":"\u0110\u0103ng k\xfd","username":"T\xe0i kho\u1ea3n","password":"M\u1eadt kh\u1ea9u","rememberMe":"Nh\u1edb t\xe0i kho\u1ea3n"},"validate":{"usernameRequired":"Vui l\xf2ng nh\u1eadp t\xe0i kho\u1ea3n","passwordRequired":"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u"}}')},115:function(e){e.exports=JSON.parse('{"common":{"login":"Login","signUp":"Sign up","username":"Username","password":"Password","rememberMe":"Remember me"},"validate":{"usernameRequired":"Username is required","passwordRequired":"Password is required"}}')},118:function(e,t,n){e.exports=n.p+"static/media/avatar.23d5a568.svg"},134:function(e,t,n){e.exports=n(161)},140:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=(n(139),n(140),n(123)),s=n(168),l=n(113),u=n(114),d=n(115);c.a.use(s.e).use(l.a).init({fallbackLng:"vi",debug:!1,interpolation:{escapeValue:!1},resources:{vi:{translation:u},en:{translation:d}}});var m=n(70),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},54:function(e,t,n){"use strict";var a={APP_ENV:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ENV,API_DOMAIN:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_DOMAIN};t.a=a},60:function(e,t,n){e.exports={headerWrapper:"styles_headerWrapper__1dXC3",menuWrapper:"styles_menuWrapper__sYJWz",menuItem:"styles_menuItem__2gQnW",badge:"styles_badge__1MNPi"}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return L}));var a=n(0),r=n.n(a),o=n(22),i=n(15),c=n(27),s=n.n(c),l=n(118),u=n.n(l),d=n(60),m=n.n(d),p=n(165),f=n(166),h=n(76),v=function(){return Object(h.a)("/v1/app/profile").then((function(e){return e.data}))},g=n(38);function E(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(g.useQuery)("profile",v,{enabled:e}),n=t.data,a=t.refetch;return{profile:n,refetchProfile:a}}function _(){var e=Object(g.useQueryClient)(),t=Object(g.useQuery)("showSideNav",(function(){return!1}),{enabled:!1}).data,n=Object(a.useCallback)((function(){e.setQueryData("showSideNav",(function(e){return!e}))}),[e]);return{collapsed:Boolean(t),toggleSideNav:n}}function k(){var e=Object(i.g)(),t=E().profile,n=_().toggleSideNav,a=r.a.createElement(p.a,{style:{minWidth:200}},r.a.createElement(p.a.Item,{key:"1"},"Profile"),r.a.createElement(p.a.Item,{key:"2"},"Change Password"),r.a.createElement(p.a.Item,{key:"3",onClick:function(){s.a.remove("token"),s.a.remove("refreshToken"),e.push("/login")}},"Logout"));return r.a.createElement("div",{className:m.a.headerWrapper},r.a.createElement("svg",{height:"32",width:"32",style:{cursor:"pointer"},onClick:n},r.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"})),r.a.createElement("div",{className:m.a.menuWrapper},r.a.createElement("div",{className:m.a.menuItem},r.a.createElement(f.a,{overlay:a,trigger:["click"]},r.a.createElement("div",null,r.a.createElement("span",null,"Hi ".concat((null===t||void 0===t?void 0:t.fullName)||(null===t||void 0===t?void 0:t.username),"!")),"\xa0",r.a.createElement("img",{className:m.a.icon,src:u.a,alt:""}))))))}var b=n(78),y=n(108),w=n(36),O=n(5),N=n.n(O),P=n(171),S=n(172),W=n(173),C=n(72),j=n.n(C),T=p.a.SubMenu;function A(){var e,t=_().collapsed,n=Object(i.h)(),o=Object(a.useState)("1"),c=Object(y.a)(o,2),s=c[0],l=c[1],u=[{key:"1",text:"Home",url:"/",icon:r.a.createElement(P.a,null)},{key:"2",text:"Tasks",url:"/tasks",icon:r.a.createElement(S.a,null)},{key:"3",text:"Settings",icon:r.a.createElement(W.a,null),children:[{key:"3.1",text:"Setting 1",url:"/settings/setting1"},{key:"3.2",text:"Setting 2",url:"/settings/setting2"}]}];return Object(a.useEffect)((function(){u.forEach((function(e){n.pathname.startsWith(e.url||"###")&&l(e.key),e.children&&e.children.forEach((function(e){n.pathname.startsWith(e.url||"###")&&l(e.key)}))}))}),[n.pathname]),r.a.createElement("div",{className:N()((e={},Object(b.a)(e,j.a.sideNav,!0),Object(b.a)(e,j.a.sideNavCollapsed,t),e)),style:{width:t?80:250,transition:"width 0.3s"}},r.a.createElement(w.a,{className:j.a.logo,to:"/index"},"HOME"),r.a.createElement(p.a,{selectedKeys:[s],defaultOpenKeys:[],mode:"inline",inlineCollapsed:t},u.map((function(e){var t;return e.children?r.a.createElement(T,{key:e.key,icon:e.icon,title:e.text},null===(t=e.children)||void 0===t?void 0:t.map((function(e){return r.a.createElement(p.a.Item,{key:e.key},r.a.createElement(w.a,{to:e.url},e.text))}))):r.a.createElement(p.a.Item,{key:e.key,icon:e.icon},r.a.createElement(w.a,{to:e.url},e.text))}))))}var I=n(73),x=n.n(I),M=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(9)]).then(n.bind(null,328))}));function R(){var e=!!s.a.get("token"),t=E(e).profile;return e?t?r.a.createElement("div",{className:x.a.pageWrapper},r.a.createElement(A,null),r.a.createElement("div",{className:x.a.mainWrapper},r.a.createElement(k,null),r.a.createElement("div",{className:x.a.pageContent},r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/tasks",component:M})))))):null:r.a.createElement(i.a,{to:"/login"})}var D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(7)]).then(n.bind(null,327))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,321))}));function H(){return r.a.createElement("div",{className:"root-wrapper"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",exact:!0,component:D}),r.a.createElement(i.b,{path:"/sign-up",exact:!0,component:U}),r.a.createElement(i.b,{path:"/",component:R})))}var q=n(121),z=n(54),L=Object(o.a)(),K=new g.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,cacheTime:864e5,retry:!1}}});t.a=function(){return r.a.createElement(g.QueryClientProvider,{client:K},r.a.createElement(i.c,{history:L},r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(H,null))),"prod"!==z.a.APP_ENV&&r.a.createElement(q.ReactQueryDevtools,{initialIsOpen:!1}))}},72:function(e,t,n){e.exports={sideNav:"styles_sideNav__2wYqf",logo:"styles_logo__5Hh6e",sideNavCollapsed:"styles_sideNavCollapsed__1hgzk"}},73:function(e,t,n){e.exports={pageWrapper:"styles_pageWrapper__4g74w",mainWrapper:"styles_mainWrapper__39_4P",pageContent:"styles_pageContent__MdTwM"}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p}));var a=n(71),r=n.n(a),o=n(27),i=n.n(o),c=n(70),s=n(54),l=r.a.create({timeout:18e4,baseURL:s.a.API_DOMAIN});l.interceptors.request.use((function(e){var t=i.a.get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=function(){i.a.remove("token"),i.a.remove("refreshToken"),c.b.push("/")};l.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401!==e.response.status)return Promise.reject(e);var n=i.a.get("refreshToken");return n?r.a.post("".concat(s.a.API_DOMAIN,"/v1/app/auth/request-access-token"),{refreshToken:n}).then((function(n){if(200===n.status){var a=n.data.data;return i.a.set("token",a.token),t.headers.Authorization="Bearer ".concat(a.token),r()(t)}return u(),Promise.reject(e)})).catch((function(){return u(),Promise.reject(e)})):(u(),Promise.reject(e))}));var d=function(e,t){return l.get(e,{params:t}).then((function(e){return e.data}))},m=function(e,t,n){return l.post(e,t,{params:n}).then((function(e){return e.data}))},p=function(e,t){return l.put(e,t).then((function(e){return e.data}))}}},[[134,3,4]]]);
//# sourceMappingURL=main.03a5865a.chunk.js.map