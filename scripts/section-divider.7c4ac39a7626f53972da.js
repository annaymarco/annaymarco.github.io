"use strict";(self.webpackChunknew_bedford_framework=self.webpackChunknew_bedford_framework||[]).push([[135],{7e4:function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,function(t){t.SQUARE="square",t.ROUND="round"}(n||(n={}));var o=n;e.default=o,t.exports=e.default},10894:function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,function(t){t.NONE="none",t.SOFT_CORNERS="soft-corners",t.ROUNDED="rounded",t.SLANTED="slanted",t.SCALLOPED="scalloped",t.WAVY="wavy",t.POINTED="pointed",t.JAGGED="jagged"}(n||(n={}));var o=n;e.default=o,t.exports=e.default},1426:function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,function(t){t.NONE="none",t.SOLID="solid",t.DASHED="dashed"}(n||(n={}));var o=n;e.default=o,t.exports=e.default},32768:function(t,e,n){n.d(e,{Kx:function(){return g},yF:function(){return b}});n(92338);var o=n(87475);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a="SITE_PALETTE_COLOR",s="CUSTOM_COLOR",l="THEME_COLOR";var u=function(t){return t&&t.type===l},d=function(t){return t&&t.type===a},f=function(t){return t&&t.type===s},v=function(t){var e,n,c,r=(e=t.customColor.hslaValue,n=e.saturation,c=e.lightness,n*=100,c*=100,i(i({},e),{},{saturation:n,lightness:c})),a={userFormat:t.customColor.userFormat,values:r},l=(0,o.xQ)(a);return{type:s,customColor:l}},h=function(t){var e,n,o;return{colorName:null!==(e=t.id)&&void 0!==e?e:t.colorName,alphaModifier:null!==(n=null!==(o=t.alpha)&&void 0!==o?o:t.alphaModifier)&&void 0!==n?n:1}},p=new WeakMap;function y(t){if(p.has(t))return p.get(t);var e=getComputedStyle(t);return p.set(t,e),e}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.documentElement;if(!t||!n)return null;var c=t.customColor,i=t.sitePaletteColor,r=y(n);if(u(t)&&e)return r.getPropertyValue(e);if(d(t)){var a=h(i),s=a.colorName,l=a.alphaModifier,p=r.getPropertyValue("--".concat(s,"-hsl"));return"hsla(".concat(p,",").concat(l,")")}if(f(t)){var b=(null==c?void 0:c.hslaValue)?v(t):t;return(0,o.xQ)(b.customColor)}return null}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return null;var n=t.customColor,c=t.sitePaletteColor;if(u(t)&&e)return"var(".concat(e,")");if(d(t)){var i=h(c),r=i.colorName,a=i.alphaModifier;return"hsla(var(--".concat(r,"-hsl),").concat(a,")")}if(f(t)){var s=(null==n?void 0:n.hslaValue)?v(t):t;return(0,o.xQ)(s.customColor)}return null}},6704:function(t,e,n){n.r(e),n.d(e,{SectionDivider:function(){return N},default:function(){return x}});n(92338);var o=n(6370),c=n(10894),i=n.n(c),r=n(1426),a=n.n(r),s=n(7e4),l=n.n(s),u=n(45301),d=function(t){var e=t.value,n=t.unit,o=t.clientWidth,c=t.clientHeight;return"vw"===n||"%"===n?o*(.01*e):"vh"===n?c*(.01*e):"vmax"===n?Math.max(o,c)*(.01*e):"vmin"===n?Math.min(o,c)*(.01*e):e},f=n(32768);function v(){return Array.from(document.querySelectorAll(".page-section, [data-course-item-footer]")).filter((function(t){var e;return"none"!==(null===(e=window.getComputedStyle(t.parentElement))||void 0===e?void 0:e.display)}))}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=f?1:1-c,h=.5*n,p=f?-c:c,y=["l0,0","c0,0 ".concat(.5*h,",").concat(p," ").concat(h,",").concat(p),"s".concat(h,",").concat(-p," ").concat(h,",").concat(-p),"l0,0"].join(" "),b=y.repeat(u),g=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(v),b,"L1, -1","L0, -1","z"].join(" "),O=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(v),b].join(" ");return{shape:g,stroke:O}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=t.isFlipY,h=void 0!==v&&v,p=h?r:1-r,y=f?1-c:1,b=h?n:-n,g=f?c:-c,O=["l0,0","c".concat(.25*b,",0 ").concat(.5*b,",0 ").concat(b,",").concat(g),"l0,".concat(-g)].join(" "),w=O.repeat(u),j=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w,"L".concat(1-p,", -1"),"L".concat(p,", -1"),"z"].join(" "),m=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w].join(" ");return{shape:j,stroke:m}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=.5*n,h=.64*c*(f?-1:1),p=["c".concat(.5*v,",").concat(-h," ").concat(.5*v,",").concat(-h," ").concat(v,",0"),"s".concat(.5*v,",").concat(h," ").concat(v,",0")].join(" "),y=p.repeat(u),b=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(1-.5*c),y,"L1, -1","L0, -1","z"].join(" "),g=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(1-.5*c),y].join(" ");return{shape:b,stroke:g}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=t.isFlipY,h=void 0!==v&&v,p=h?1-r:r,y=f?1-c:1,b=h?-n:n,g=f?c:-c,O=["l0,0","l".concat(b,",").concat(g),"l0,".concat(-g)].join(" "),w=O.repeat(u),j=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w,"L".concat(1-p,", -1"),"L".concat(p,", -1"),"z"].join(" "),m=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w].join(" ");return{shape:j,stroke:m}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=f?1-c:1,h=f?c:-c,p=.5*n,y=["l0,0","l".concat(p,",").concat(h),"l".concat(p,",").concat(-h)].join(" "),b=y.repeat(u),g=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(v),b,"L1, -1","L0, -1","z"].join(" "),O=["M".concat(r,", ").concat(s),"L".concat(r,", ").concat(v),b].join(" ");return{shape:g,stroke:O}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1:e,o=t.height,c=void 0===o?1:o,i=t.offsetX,r=void 0===i?0:i,a=t.offsetY,s=void 0===a?0:a,l=t.iterations,u=void 0===l?1:l,d=t.isFlipX,f=void 0!==d&&d,v=t.isFlipY,h=void 0!==v&&v,p=h?1-r:r,y=f?1:1-c,b=h?-n:n,g=f?-c:c,O=["l0,0","l".concat(.75*b,",").concat(g),"l".concat(.25*b,",").concat(-g)].join(" "),w=O.repeat(u),j=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w,"L".concat(1-p,", -1"),"L".concat(p,", -1"),"z"].join(" "),m=["M".concat(p,", ").concat(s),"L".concat(p,", ").concat(y),w].join(" ");return{shape:j,stroke:m}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.aspect,n=void 0===e?1:e,o=t.width,c=void 0===o?1:o,i=t.height,r=void 0===i?1:i,a=t.offsetX,s=void 0===a?0:a,l=(t.offsetY,t.isFlipX),u=void 0!==l&&l,d=u?1:1-r,f=u?-r:r,v=Math.min(.5*c,n),h=.75*r,p=.75*v,y=u?-1:1,b=c-2*v,g=["l0,0","c0,".concat(h*y," ").concat(v-p,",").concat(f," ").concat(v,",").concat(f),"h".concat(b),"c".concat(p,",0 ").concat(v,",").concat(h*y-f," ").concat(v,",").concat(-f),"l0,0"].join(" "),O=["M".concat(s,", ").concat(d),g,"L1, -1","L0, -1","z"].join(" "),w=["M".concat(s,", ").concat(d),g].join(" ");return{shape:O,stroke:w}},j={rounded:h,scalloped:p,wavy:y,slanted:b,pointed:g,jagged:O,"soft-corners":w};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=D(t);if(e){var c=D(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return E(this,n)}}function E(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _="sections:change",N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(s,t);var e,n,c,r=M(s);function s(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),R(C(e=r.call(this)),"resizeObserver",null),R(C(e),"onResize",(function(){e.isDestroyed||(e.update(),e.refreshStyles())})),e.node=t,e.section=e.node.closest("section"),e.display=e.section.querySelector(".section-divider-display");var n=e.section.dataset.currentContext;e.currentContext=JSON.parse(n),e.currentContext.divider&&e.setState(P({},e.currentContext.divider));var o=e.section.dataset.sectionId;return e.sectionId=o,e.ref={style:e.display.querySelector("[data-section-divider-style]"),block:e.display.querySelector(".section-divider-block"),svgClipPath:e.display.querySelector("clipPath"),svgPath:e.display.querySelector(".section-divider-clip"),svgPathStroke:e.display.querySelector(".section-divider-stroke")},e.bindListeners(),e}return e=s,(n=[{key:"bindListeners",value:function(){o.Z.on(this.onResize,10),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.section),window.Y&&window.Y.Global&&window.Y.Global.on(_,this.refreshStyles,this),this.onResize()}},{key:"unbindListeners",value:function(){this.resizeObserver&&this.resizeObserver.disconnect(),o.Z.off(this.onResize),window.Y&&window.Y.Global&&window.Y.Global.detach(_,this.refreshStyles,this)}},{key:"refreshStyles",value:function(){var t=this,e=this.state,n=e.type,o=e.height,c=e.stroke,r=n===i().NONE?"0px":"".concat(o.value).concat(o.unit),s=v(),u=s.findIndex((function(e){return e===t.section})),d=s.length-u,h=(null==c?void 0:c.style)!==a().NONE?"".concat(c.thickness.value).concat(c.thickness.unit):0,p=c.style===a().DASHED?"".concat(c.dashLength.value).concat(c.dashLength.unit," calc(").concat(c.thickness.value).concat(c.thickness.unit," + ").concat(c.gapLength.value).concat(c.gapLength.unit,")"):0,y=c.style===a().DASHED?c.linecap:l().SQUARE;this.display.style.setProperty("--section-divider-stroke-color",(0,f.Kx)(c.color)),this.display.style.setProperty("--stroke-thickness",h),this.display.style.setProperty("--stroke-dasharray",p),this.display.style.setProperty("--stroke-linecap",y);var b=function(t){var e,n=v(),o=n.findIndex((function(e){return e===t}));if(-1!==o||!document.contains(t)){var c=n[o+1];return(null==c||null===(e=c.dataset)||void 0===e?void 0:e.sectionId)?'[data-section-id="'.concat(c.dataset.sectionId,'"]'):(null==c?void 0:c.hasAttribute("data-course-item-footer"))?"[data-course-item-footer]":void(c&&console.error("Invalid page element was found"))}console.error("The divider page element was not found within the visible page elements")}(this.section),g='\n      [data-section-id="'.concat(this.sectionId,'"] { \n        --divider-height: ').concat(r,"; \n        --z-index: ").concat(d,";\n      }\n    ");b&&(g+="\n        ".concat(b," {\n          --previous-section-divider-offset: ").concat(r,";\n        }\n      ")),this.ref.style.innerHTML=g}},{key:"update",value:function(){var t=this.state.type,e=this.state,n=e.width,o=e.offset,c=e.stroke,r=e.isFlipY,s=e.isFlipX,l="M-100,0.5 L-100,1.5";if(t!==i().NONE){var u=this.node.getBoundingClientRect(),f=u.width,v=document.documentElement.clientHeight,h=this.ref.block.getBoundingClientRect(),p=j[t];if(!(f<=0||v<=0)){var y=c.style!==a().NONE?d(P(P({},c.thickness),{},{clientWidth:f,clientHeight:v})):0,b=0,g=f,O=1;t!==i().SOFT_CORNERS&&(b=d(P(P({},o),{},{clientWidth:f,clientHeight:v})),g=d(P(P({},n),{},{clientWidth:f,clientHeight:v})),O=(O=Math.ceil((h.width+Math.abs(b))/g))%2==0?O+1:O+2),g+=g===f?y:0;var w=1/u.width,m=1/u.height,L=h.height/g,S=Math.round(g*w*1e3)/1e3,k=Math.round(Math.floor(h.height-.5)*m*1e3)/1e3,M=p({width:S,height:k,aspect:L,offsetX:-Math.round(b*w*1e3)/1e3*.5+.5-S*O*.5,offsetY:1-k,iterations:O,isFlipX:s,isFlipY:r}),E=M.shape,C=M.stroke;this.ref.svgPath.setAttribute("d",E),this.ref.svgPathStroke.setAttribute("d","".concat(l," ").concat(C))}}else this.ref.svgPathStroke.setAttribute("d","".concat(l," M0,1 L1,1"))}},{key:"destroy",value:function(){this.isDestroyed=!0,this.unbindListeners(),delete this.ref}}])&&S(e.prototype,n),c&&S(e,c),s}(u.Z),x=function(t){return new N(t)}}}]);