(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1kkQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var o=function(e,t){var n,o,a,i,c,u,s,l,f,d,p,m,h,g,y,v,b,w,C=(o=(void 0===n?{}:n).liveMeasure,a=void 0===o||o,i=Object(r.useState)({}),c=i[0],u=i[1],s=Object(r.useState)(null),l=s[0],f=s[1],d=Object(r.useCallback)((function(e){f(e)}),[]),Object(r.useLayoutEffect)((function(){if(l){var e=function(){return window.requestAnimationFrame((function(){return u(function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:"x"in t?t.x:t.top,left:"y"in t?t.y:t.left,x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top,right:t.right,bottom:t.bottom}}(l))}))};if(e(),a)return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[l]),[d,c,l]),E=C[0],T=C[1].height,k=(p=[!1,!0],m=!1,h="undefined"!=typeof window&&window,g=["(min-width: 900px)","(max-width: 900px)"].map((function(e){return h&&h.matchMedia(e)})),y=function(){var e=g.findIndex((function(e){return e.matches}));return void 0!==p[e]?p[e]:m},v=r.useState(y),b=v[0],w=v[1],r.useEffect((function(){var e=function(){return w(y)};return g.forEach((function(t){return t.addListener(e)})),function(){return g.forEach((function(t){return t.removeListener(e)}))}}),[]),b)?0:0-T/3;return{wave:r.createElement("svg",{className:"waveSvg",viewBox:"0 0 1152 256",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:E,style:"top"===t?{top:"10px",transformOrigin:"top"}:{bottom:"-10px",transformOrigin:"bottom"}},r.createElement("path",{d:"M328 5.24949C120.01 -26.8156 0 91.8827 0 255.749L1152 255.75V79.7495C1152 409.749 568 42.2495 328 5.24949Z",fill:e})),waveHeight:T,marginTopBelow:k}}},"1lH/":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r,o,a,i=n("q1tI"),c=function(e,t){this.light=e,this.dark=t},u={blue:(r={},r[300]="#8AB0FC",r[600]="#133EEC",r),pink:(o={},o[300]="#FFA3C5",o[600]="#DA2F84",o),slate:(a={},a[900]="#121926",a)},s={primary_dark:u.blue[300],error_dark:u.pink[300],highEmphasis_dark:"#D9E1F2",mediumEmphasis_dark:"rgba(217, 225, 242, 0.64)",lowEmphasis_dark:"rgba(217, 225, 242, 0.32)",neutralRipple_dark:"rgba(217, 225, 242, 0.24)",on_surface_01_dark:"rgba(217, 225, 242, 0.16)",on_surface_02_dark:"rgba(217, 225, 242, 0.08)",on_surface_03_dark:"rgba(217, 225, 242, 0.04)",base_dark:u.slate[900],primary_ripple_dark:"rgba(138, 176, 252, 0.3)",primary_light:u.blue[600],error_light:u.pink[600],highEmphasis_light:"rgba(42, 55, 81, 1)",mediumEmphasis_light:"rgba(42, 55, 81, 0.64)",lowEmphasis_light:"rgba(42, 55, 81, 0.32)",neutralRipple_light:"rgba(42, 55, 81, 0.24)",on_surface_01_light:"rgba(42, 55, 81, 0.16)",on_surface_02_light:"rgba(42, 55, 81, 0.08)",on_surface_03_light:"rgba(42, 55, 81, 0.04)",base_light:"white",primary_ripple_light:"rgba(19, 62, 236, 0.3)"},l={colors:{primary:new c(s.primary_light,s.primary_dark),error:new c(s.error_light,s.error_dark),highEmphasis:new c(s.highEmphasis_light,s.highEmphasis_dark),mediumEmphasis:new c(s.mediumEmphasis_light,s.mediumEmphasis_dark),lowEmphasis:new c(s.lowEmphasis_light,s.lowEmphasis_dark),neutralRipple:new c(s.neutralRipple_light,s.neutralRipple_dark),on_surface_01:new c(s.on_surface_01_light,s.on_surface_01_dark),on_surface_02:new c(s.on_surface_02_light,s.on_surface_02_dark),on_surface_03:new c(s.on_surface_03_light,s.on_surface_03_dark),base:new c(s.base_light,s.base_dark),primary_ripple:new c(s.primary_ripple_light,s.primary_ripple_dark)}},f=i.createContext({colorMode:void 0,setColorMode:function(){}}),d=function(e){var t=e.children,n=i.useState(void 0),r=n[0],o=n[1];i.useEffect((function(){var e=window.document.documentElement.style.getPropertyValue("--initial-color-mode");o(e)}),[]);var a=i.useMemo((function(){return{colorMode:r,setColorMode:function(e){var t=window.document.documentElement;Object.entries(l.colors).forEach((function(n){var r=n[0],o=n[1],a="--"+r;t.style.setProperty(a,o[e])})),o(e)}}}),[r,o]);return i.useEffect((function(){function e(e){a.setColorMode(e.matches?"dark":"light")}var t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),function(){return t.removeListener(e)}}),[a]),i.createElement(f.Provider,{value:a},t)}},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8oQk":function(e,t,n){},A5mV:function(e,t,n){e.exports={topContainer:"footer-module--topContainer--3GU5G",mainBG:"footer-module--mainBG--1t7vR",contents:"footer-module--contents--py0Iz",findUs:"footer-module--findUs--1lAl0",icon:"footer-module--icon--1a0q_",linkText:"footer-module--linkText--2NnRC"}},"I/Ru":function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n("q1tI"),o=n("1lH/"),a=n("o9+5"),i=n.n(a),c=n("OH5e"),u=n.n(c),s=n("kFWz"),l=n.n(s),f=n("A5mV"),d=n.n(f),p=n("1kkQ"),m=function(e){var t=e.waveFooter,n=Object(p.a)("var(--primary)","top"),o=n.wave,a=n.waveHeight,c=n.marginTopBelow,s=r.createElement("div",{className:d.a.contents},r.createElement("h3",{className:d.a.findUs},"Find us"),r.createElement("a",{href:"https://twitter.com/oceanbit_dev",className:d.a.linkText},r.createElement(i.a,{className:d.a.icon}),"oceanbit_dev"),r.createElement("a",{href:"mailto:contact@oceanbit.dev",className:d.a.linkText},r.createElement(l.a,{className:d.a.icon}),"contact@oceanbit.dev"),r.createElement("a",{href:"https://github.com/oceanbit-dev",className:d.a.linkText},r.createElement(u.a,{className:d.a.icon}),"oceanbit-dev"));return r.createElement("div",{className:d.a.topContainer},t&&r.createElement(r.Fragment,null,o,r.createElement("div",{style:{paddingTop:t?a:0}})),r.createElement("div",{className:d.a.mainBG},r.createElement("div",{className:"mainContents",style:{position:"relative",marginTop:t?c:0}},s)))},h=function(e,t){var n=t[0],o=t[1],a=t[2],i=r.useCallback((function(e){n.current.contains(e.target)||a()}),[n,n.current,a]);r.useEffect((function(){if(o)return document.addEventListener(e,i),function(){document.removeEventListener(e,i)}}),[o,i,a,e])},g=n("Wbzz"),y=n("Wmhb"),v=n.n(y),b=n("VTAW"),w=n.n(b),C=function(e){var t=e.title,n=Object(g.useStaticQuery)("592702988"),o=r.useState(!1),a=o[0],i=o[1],c=r.useRef(),u=r.useRef();!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];h("focusin",t)}(c,a,(function(){return i(!1)})),r.useEffect((function(){a||u.current.focus()}),[a,u]),r.useEffect((function(){if(a){var e=function(e){27===e.keyCode&&i(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[a]);var s=r.createElement("nav",{className:v.a.linkContainer},r.createElement(g.Link,{to:"/",className:v.a.headerLink,activeClassName:v.a.activeLink},"Home",r.createElement(w.a,null)),r.createElement(g.Link,{to:"/contributions",className:v.a.headerLink,activeClassName:v.a.activeLink},"Contributions",r.createElement(w.a,null)),r.createElement(g.Link,{to:"/blog",partiallyActive:!0,className:v.a.headerLink,activeClassName:v.a.activeLink},"Blog",r.createElement(w.a,null)));return r.createElement("header",{ref:c,className:v.a.bothHeader},r.createElement("div",{className:v.a.desktopHeader},r.createElement(g.Link,{to:"/",className:v.a.logoContainer},r.createElement("img",{height:"48",width:"48",className:v.a.logoImg,src:n.file.childImageSharp.fixed.src,alt:""}),r.createElement("span",{className:v.a.logoText},"OceanBit")),r.createElement("hr",{className:v.a.hr}),s),r.createElement("div",{className:v.a.mobileHeader},r.createElement("button",{"aria-label":a?"Close the navigation menu":"Open the navigation menu",onClick:function(){return i((function(e){return!e}))},"aria-controls":"mobileDropdownContents","aria-expanded":a,ref:u,className:v.a.menuClose+" "+(a?v.a.close:v.a.menu)}),r.createElement("h1",{className:v.a.pageTitle},t),r.createElement(g.Link,{to:"/","aria-label":"Home"},r.createElement("img",{height:"36",width:"36",src:n.file.childImageSharp.fixed.src,alt:""}))),r.createElement("div",{id:"mobileDropdownContents",className:v.a.mobileExpandedContainer,style:{top:a?"100%":"-100vh"}},s),r.createElement("div",{className:v.a.scrim+" "+(a?v.a.activeScrim:""),onClick:function(){return i(!1)}}))},E=n("hwdJ"),T=n.n(E),k=(n("8oQk"),function(e){var t=e.children,n=e.title,a=e.waveFooter,i=void 0===a||a;return r.createElement(o.b,null,r.createElement("div",{className:T.a.parentContainer},r.createElement(C,{title:n}),r.createElement("main",{className:T.a.contentContain},t),r.createElement(m,{waveFooter:i})))})},OH5e:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M44.7343 11.9407C42.5903 8.26737 39.6822 5.35916 36.0092 3.21545C32.3356 1.07164 28.3251 0 23.975 0C19.6253 0 15.6136 1.07196 11.9407 3.21545C8.26737 5.35905 5.35938 8.26737 3.21545 11.9407C1.07185 15.614 0 19.6252 0 23.9743C0 29.1985 1.52419 33.8963 4.57334 38.0688C7.62216 42.2416 11.5608 45.1291 16.3889 46.7314C16.9509 46.8358 17.3669 46.7624 17.6374 46.5132C17.908 46.2637 18.0432 45.9512 18.0432 45.577C18.0432 45.5146 18.0378 44.9529 18.0274 43.8914C18.0167 42.8298 18.0117 41.9037 18.0117 41.1135L17.2937 41.2377C16.8359 41.3216 16.2583 41.3571 15.5611 41.347C14.8641 41.3373 14.1406 41.2643 13.3916 41.1285C12.6422 40.9939 11.9451 40.6817 11.2999 40.1926C10.655 39.7035 10.1972 39.0634 9.9266 38.2731L9.61443 37.5547C9.40636 37.0764 9.07878 36.5452 8.63125 35.9628C8.18373 35.3799 7.73117 34.9848 7.27337 34.7767L7.0548 34.6202C6.90916 34.5163 6.77401 34.3909 6.64904 34.2453C6.52417 34.0998 6.43069 33.9542 6.36826 33.8083C6.30571 33.6623 6.35754 33.5426 6.52428 33.4487C6.69103 33.3548 6.99236 33.3092 7.42961 33.3092L8.05372 33.4024C8.46998 33.4859 8.98486 33.735 9.59902 34.1515C10.2128 34.5677 10.7174 35.1087 11.1129 35.7743C11.5918 36.6278 12.1688 37.2782 12.8455 37.7257C13.5217 38.1732 14.2034 38.3966 14.8901 38.3966C15.5767 38.3966 16.1698 38.3446 16.6694 38.241C17.1686 38.1369 17.6369 37.9805 18.0741 37.7725C18.2614 36.3775 18.7714 35.3059 19.6036 34.5568C18.4175 34.4322 17.3511 34.2444 16.4039 33.9948C15.4572 33.7449 14.4789 33.3392 13.4697 32.7768C12.46 32.2151 11.6223 31.5176 10.9566 30.6856C10.2907 29.8531 9.74422 28.7601 9.31791 27.4077C8.89137 26.0547 8.67805 24.494 8.67805 22.7251C8.67805 20.2065 9.50028 18.0632 11.1444 16.2941C10.3742 14.4005 10.4469 12.2778 11.3628 9.92616C11.9663 9.73864 12.8614 9.87936 14.0475 10.3474C15.2338 10.8157 16.1024 11.2169 16.6541 11.5495C17.2059 11.882 17.6479 12.1638 17.981 12.3923C19.9168 11.8514 21.9146 11.5809 23.9747 11.5809C26.0349 11.5809 28.0331 11.8514 29.9691 12.3923L31.1553 11.6434C31.9665 11.1438 32.9244 10.6859 34.0268 10.2696C35.1298 9.85356 35.9732 9.73897 36.5562 9.92649C37.4924 12.2783 37.5758 14.4009 36.8054 16.2944C38.4494 18.0635 39.272 20.2073 39.272 22.7254C39.272 24.4943 39.0579 26.06 38.632 27.4233C38.2056 28.7869 37.6544 29.8787 36.9783 30.7012C36.3013 31.5235 35.4583 32.2155 34.4491 32.7771C33.4397 33.3391 32.4611 33.7448 31.5145 33.9947C30.5674 34.2447 29.501 34.4325 28.3149 34.5574C29.3967 35.4935 29.9377 36.9713 29.9377 38.9899V45.5762C29.9377 45.9503 30.0678 46.2627 30.3282 46.5123C30.5884 46.7615 30.9991 46.8349 31.5612 46.7305C36.3899 45.1283 40.3285 42.2408 43.3772 38.0679C46.4256 33.8954 47.9504 29.1977 47.9504 23.9734C47.9493 19.6249 46.8769 15.614 44.7343 11.9407Z",fill:"currentColor"}))}o.defaultProps={viewBox:"0 0 48 47",fill:"none"},e.exports=o,o.default=o},VTAW:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var r=n(1),o=Math.sqrt(2),a=Math.cos,i=Math.max,c=Math.min;function u(e){return c(e.duration,Date.now()-e.mouseDown)}function s(e){return e.mouseUp>0?Date.now()-e.mouseUp:0}function l(e){var t=e.duration,n=e.radius,o=.85*r(u(e),0,n,t),c=.15*r(s(e),0,n,t),l=.02*n*a(Date.now()/t);return i(0,o+c+l)}e.exports={getMaxRadius:function(e,t,n){return c(.5*i(e,t),n)},getBlotOpacity:function(e,t){return r(s(e),t,-t,e.duration)},getBlotOuterOpacity:function(e,t){return c(this.getBlotOpacity(e,t),r(u(e),0,.3,3*e.duration))},getBlotShiftX:function(e,t,n){return c(1,l(e)/t*2/o)*(n/2-e.x)},getBlotShiftY:function(e,t,n){return c(1,l(e)/t*2/o)*(n/2-e.y)},getBlotScale:function(e){return l(e)/e.radius}}},function(e,t){e.exports=function(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t}},function(e,t,n){var r=n(0),o=function(e){var t=e.mouseUp,n=e.duration;return!t||Date.now()-t<n};e.exports=function(e){var t=[],n=!1,a=void 0,i={each:function(e,n){for(var r=0,o=t.length;r<o;r++)e.call(n,t[r])},play:function(){n||(n=!0,i.update())},stop:function(){n=!1,cancelAnimationFrame(a)},getTotalOpacity:function(e){for(var n=0,o=0,a=t.length;o<a;o++)n+=r.getBlotOuterOpacity(t[o],e);return n},update:function(){(t=t.filter(o)).length?a=requestAnimationFrame(i.update):i.stop(),e()},add:function(e){t.push(e),i.play()},release:function(e){for(var n=t.length-1;n>=0;n--)if(!t[n].mouseUp)return t[n].mouseUp=e}};return i}},function(e,t){e.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"}},function(e,t){e.exports=n("q1tI")},function(e,t){e.exports=function(e){return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}},function(e,t){var n=!1;"undefined"!=typeof window&&(n="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),e.exports=n},function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(6),a=n(5),i=n(4),c=n(3),u=n(2),s=2*Math.PI,l=n(0),f=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments));return r.tick=function(){var e=r.state,t=e.ctx,n=e.color,o=e.density,a=e.height,i=e.width,c=e.store;t.save(),t.scale(o,o),t.clearRect(0,0,i,a),t.fillStyle=n,r.props.background&&(t.globalAlpha=c.getTotalOpacity(r.props.opacity),t.fillRect(0,0,i,a)),c.each(r.makeBlot,r),t.restore()},r._onPress=function(e){var t=e.button,n=e.ctrlKey,o=e.clientX,a=e.clientY,i=e.changedTouches,c=Date.now();if(i)for(var u=0;u<i.length;u++){var s=i[u],l=s.clientX,f=s.clientY;r.pushBlot(c,l,f)}else 0!==t||n||r.pushBlot(c,o,a)},r._onRelease=function(){r.state.store.release(Date.now())},r.state={color:"transparent",density:1,height:0,store:u(r.tick),touchEvents:r.touchEvents(),width:0},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.touchEvents=function(){return this.props.hasTouch?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},t.prototype.makeBlot=function(e){var t=this.state,n=t.ctx,r=t.height,o=t.width,a=e.x,i=e.y,c=e.radius;if(n.globalAlpha=l.getBlotOpacity(e,this.props.opacity),n.beginPath(),this.props.recenter){var u=Math.max(r,o);a+=l.getBlotShiftX(e,u,o),i+=l.getBlotShiftY(e,u,r)}n.arc(a,i,c*l.getBlotScale(e),0,s),n.closePath(),n.fill()},t.prototype.componentWillUnmount=function(){this.state.store.stop()},t.prototype.pushBlot=function(e,t,n){var r=this,o=this.canvas;o.getDOMNode&&"function"==typeof o.getDOMNode&&(o=o.getDOMNode());var i=o.getBoundingClientRect(),c=i.top,u=i.bottom,s=i.left,f=i.right,d=window.getComputedStyle(o).color,p=this.state.ctx||o.getContext("2d"),m=a(p),h=u-c,g=f-s,y=l.getMaxRadius(h,g,this.props.radius);this.setState({color:d,ctx:p,density:m,height:h,width:g},(function(){r.state.store.add({duration:r.props.duration,mouseDown:e,mouseUp:0,radius:y,x:t-s,y:n-c})}))},t.prototype.setCanvas=function(e){this.canvas=e},t.prototype.render=function(){var e=this.state,t=e.className,n=e.density,o=e.height,a=e.width,u=e.touchEvents;return i.createElement("canvas",r({className:t,ref:this.setCanvas.bind(this),style:r({},c,this.props.style),height:o*n,width:a*n,onDragOver:this._onRelease},u))},t}(i.PureComponent);f.defaultProps={background:!0,className:"ink",duration:1e3,opacity:.25,radius:150,recenter:!0,hasTouch:o},e.exports=f}])},Wmhb:function(e,t,n){e.exports={bothHeader:"header-module--bothHeader--fPhui",desktopHeader:"header-module--desktopHeader--kUD9-",mobileHeader:"header-module--mobileHeader--1v65f",logoContainer:"header-module--logoContainer--1ND_O",logoImg:"header-module--logoImg--2Iktw",logoText:"header-module--logoText--3GcFw",hr:"header-module--hr--2Kxvv",linkContainer:"header-module--linkContainer--LBcet",pageTitle:"header-module--pageTitle--215_b",headerLink:"header-module--headerLink--GfVTg",activeLink:"header-module--activeLink--3hx5n",mobileExpandedContainer:"header-module--mobileExpandedContainer--2zzvP",scrim:"header-module--scrim--31iMS",activeScrim:"header-module--activeScrim--2ogJW",menuClose:"header-module--menuClose--CDbXD",close:"header-module--close--M9Ck5",toClose:"header-module--toClose--2SpH4",menu:"header-module--menu--2TQHH",toMenu:"header-module--toMenu--1pKu1"}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],i[s[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},hwdJ:function(e,t,n){e.exports={parentContainer:"layout-module--parentContainer--2CQk2",contentContain:"layout-module--contentContain--Vj_BJ"}},kFWz:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}))}o.defaultProps={viewBox:"0 0 24 24"},e.exports=o,o.default=o},"o9+5":function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",fill:"currentColor"}))}o.defaultProps={version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=o,o.default=o},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,o,a,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),d=n.n(f),p=n("q1tI"),m=n.n(p),h=n("6qGY"),g=n.n(h),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",T="href",k="http-equiv",_="innerHTML",O="itemprop",x="name",S="property",A="rel",L="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",I="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,w.TITLE),n=Z(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,M);return t||r||void 0},G=function(e){return Z(e,R)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==_&&c!==E&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=g()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,d);var p={baseTag:se(w.BASE,n),linkTags:se(w.LINK,a),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===_)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===_||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===_||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(v,o,r),link:de(w.LINK,a,r),meta:de(w.META,i,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,u,r),style:de(w.STYLE,s,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:J([T,j],e),bodyAttributes:Q(y,e),defer:Z(e,N),encode:Z(e,I),htmlAttributes:Q(v,e),linkTags:X(w.LINK,[A,T],e),metaTags:X(w.META,[x,C,k,S,O],e),noscriptTags:X(w.NOSCRIPT,[_],e),onChangeClientState:G(e),scriptTags:X(w.SCRIPT,[L,_],e),styleTags:X(w.STYLE,[E],e),title:K(e),titleAttributes:Q(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return F(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return z({},o,((t={})[r.type]=i,t.titleAttributes=z({},a),t));case w.BODY:return z({},o,{bodyAttributes:z({},a)});case w.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((n={})[r.type]=z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,u=Object(i.useStaticQuery)("3000541721").site,s=c||u.siteMetadata.title,l=t||u.siteMetadata.description;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:s,titleTemplate:c?"%s | "+u.siteMetadata.title:"",meta:[{property:"og:title",content:s},{name:"description",content:l},{property:"og:description",content:l},{name:"twitter:description",content:l},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:s},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@oceanbit_dev"},{property:"og:image",content:"https://gitshark.dev/share_image.png"},{name:"twitter:image",content:"https://gitshark.dev/share_image.png"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-5fd1143d9251f2262ccf.js.map