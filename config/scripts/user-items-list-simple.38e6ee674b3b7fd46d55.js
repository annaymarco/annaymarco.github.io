"use strict";(self.webpackChunknew_bedford_framework=self.webpackChunknew_bedford_framework||[]).push([[1953],{18141:function(e,t,n){n.r(t),n.d(t,{UserItemsListSimple:function(){return S}});n(92338);var r=n(45301),o=n(92651),i=n(6370),l=n(42379),c=n(1678);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,e);var t,n,r,a=f(m);function m(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),y(d(t=a.call(this)),"loadImage",(function(e){e&&(e.onload=function(){e.dataset.loaded=!0},o.Z.loadLazy(e,{load:!0,useAdvancedPositioning:!0}))})),y(d(t),"getStateFromDOM",(function(){var e=JSON.parse(t.node.dataset.currentContext),n=Object.assign({},e);return n.userItems.forEach((function(e){e.image&&(e.imageId=e.image.id,delete e.image)})),n})),y(d(t),"onResize",(function(){t.loadImages(t.ref.images)})),t.node=e;var n=t.props,r=n.itemSelector,i=n.imageSelector,s=n.contentSelector,u=n.mediaSelector,f=n.mediaInnerSelector,p=n.parentSectionSelector,S=n.listWrapperSelector,b=n.itemTitleSelector,g=n.itemDescriptionSelector,h=n.itemButtonSelector,v=n.itemButtonContainerSelector,_=n.listTitleSelector,A=n.listButtonWrapperSelector,w=n.listButtonSelector;return t.ref={layoutContainer:t.node,userItems:Array.from(t.node.querySelectorAll(r)),images:Array.from(t.node.querySelectorAll(i)),contentContainers:Array.from(t.node.querySelectorAll(s)),mediaContainers:Array.from(t.node.querySelectorAll(u)),mediaInnerContainers:Array.from(t.node.querySelectorAll(f)),itemTitles:Array.from(t.node.querySelectorAll(b)),itemDescriptions:Array.from(t.node.querySelectorAll(g)),itemButtons:Array.from(t.node.querySelectorAll(h)),itemButtonContainers:Array.from(t.node.querySelectorAll(v)),parentNode:t.node.closest(p),listWrapperElement:t.node.closest(S),listTitleElement:t.node.parentElement.querySelector(_),listButtonWrapper:t.node.parentElement.querySelector(A),listButtonElement:t.node.parentElement.querySelector(w)},t.state=t.getStateFromDOM(),t.onResize=(0,l.Z)(t.onResize,c.FY),t.bindListeners(),t.loadImages(t.ref.images),t.destroy=t.destroy.bind(d(t)),t}return t=m,(n=[{key:"loadImages",value:function(e){e.forEach(this.loadImage)}},{key:"bindListeners",value:function(){i.Z.on(this.onResize)}},{key:"unbindListeners",value:function(){i.Z.off(this.onResize)}},{key:"destroy",value:function(){this.unbindListeners()}}])&&s(t.prototype,n),r&&s(t,r),m}(r.Z);y(S,"defaultProps",{itemSelector:".list-item",imageSelector:"img",contentSelector:".list-item-content",mediaSelector:".list-item-media",mediaInnerSelector:".list-item-media-inner",itemTitleSelector:".list-item-content__title",itemDescriptionSelector:".list-item-content__description",itemButtonContainerSelector:".list-item-content__button-container",itemButtonSelector:".list-item-content__button",parentSectionSelector:".user-items-list-section",listWrapperSelector:".user-items-list",hideElementClass:"list-item-content--hidden",listTitleSelector:".list-section-title",listButtonWrapperSelector:".list-section-button-container",listButtonSelector:".list-section-button"}),t.default=function(e){return new S(e)}}}]);