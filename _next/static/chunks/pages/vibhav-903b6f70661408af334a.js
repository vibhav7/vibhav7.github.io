_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"4eV+":function(e,t,n){"use strict";var r=n("nKUr"),o=n("g4pe"),i=n.n(o);t.a=function(e){var t=e.title,n=e.favicon,o=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:t||"Home"}),Object(r.jsx)("link",{rel:"icon",href:n||"/favicon.ico"})]}),Object(r.jsx)("div",{children:o})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,s=l.length;c<s;c++){var f=l[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var d=o.props[f],p=r[f]||new Set;"name"===f&&a||!p.has(d)?(p.add(d),r[f]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},D2FD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vibhav",function(){return n("Ik3H")}])},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Ik3H:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),o=n("q1tI"),i=n("4eV+");function a(e){return Object(o.useEffect)((function(){var e,t,n,r=window.innerWidth,o=window.innerHeight,i=1,a=.5*r,u=.5*o,c=!1;function s(e){a=e.clientX-.5*(window.innerWidth-r),u=e.clientY-.5*(window.innerHeight-o)}function f(e){c=!0}function d(e){c=!1}function l(e){1==e.touches.length&&(e.preventDefault(),a=e.touches[0].pageX-.5*(window.innerWidth-r),u=e.touches[0].pageY-.5*(window.innerHeight-o))}function p(e){1==e.touches.length&&(e.preventDefault(),a=e.touches[0].pageX-.5*(window.innerWidth-r),u=e.touches[0].pageY-.5*(window.innerHeight-o))}function h(){r=window.innerWidth,o=window.innerHeight,e.width=r,e.height=o}function y(){c?i+=.02*(1.5-i):i-=.02*(i-1),i=Math.min(i,1.5),t.fillStyle="rgba(0,0,0,0.05)",t.fillRect(0,0,t.canvas.width,t.canvas.height);for(var e=0,s=n.length;e<s;e++){var f=n[e],d={x:f.position.x,y:f.position.y};f.offset.x+=f.speed,f.offset.y+=f.speed,f.shift.x+=(a-f.shift.x)*f.speed,f.shift.y+=(u-f.shift.y)*f.speed,f.position.x=f.shift.x+Math.cos(e+f.offset.x)*(f.orbit*i),f.position.y=f.shift.y+Math.sin(e+f.offset.y)*(f.orbit*i),f.position.x=Math.max(Math.min(f.position.x,r),0),f.position.y=Math.max(Math.min(f.position.y,o),0),f.size+=.05*(f.targetSize-f.size),Math.round(f.size)==Math.round(f.targetSize)&&(f.targetSize=1+7*Math.random()),t.beginPath(),t.fillStyle=f.fillColor,t.strokeStyle=f.fillColor,t.lineWidth=f.size,t.moveTo(d.x,d.y),t.lineTo(f.position.x,f.position.y),t.stroke(),t.arc(f.position.x,f.position.y,f.size/2,0,2*Math.PI,!0),t.fill()}}window.onload=function(){(e=document.getElementById("world"))&&e.getContext&&(t=e.getContext("2d"),window.addEventListener("mousemove",s,!1),window.addEventListener("mousedown",f,!1),window.addEventListener("mouseup",d,!1),document.addEventListener("touchstart",l,!1),document.addEventListener("touchmove",p,!1),window.addEventListener("resize",h,!1),function(){n=[];for(var e=0;e<25;e++){var t={size:1,position:{x:a,y:u},offset:{x:0,y:0},shift:{x:a,y:u},speed:.01+.04*Math.random(),targetSize:1,fillColor:"#"+(4210752*Math.random()+11184810|0).toString(16),orbit:35+35*Math.random()};n.push(t)}}(),h(),setInterval(y,1e3/60))}}),[]),Object(r.jsx)(i.a,{title:"vibhav",children:Object(r.jsx)("canvas",{id:"world"})})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["D2FD",0,1]]]);