!function o(l,a,s){function u(t,e){if(!a[t]){if(!l[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(n)return n(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=a[t]={exports:{}},l[t][0].call(r.exports,function(e){return u(l[t][1][e]||e)},r,r.exports,o,l,a,s)}return a[t].exports}for(var n="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.options=void 0;var o=oceanwpLocalize;r.options=o},{}],2:[function(e,t,r){"use strict";var o=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var l=o(e("@babel/runtime/helpers/classCallCheck")),a=o(e("@babel/runtime/helpers/defineProperty"));r.default=function e(){(0,l.default)(this,e),(0,a.default)(this,"focus",function(e,t){var r=1e3*parseFloat(getComputedStyle(e).transitionDuration.replace("s",""));(r=r||600)&&setTimeout(function(){e.querySelector(t).focus()},r)})}},{"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/defineProperty":11,"@babel/runtime/helpers/interopRequireDefault":14}],3:[function(e,t,r){"use strict";var o=e("@babel/runtime/helpers/interopRequireDefault"),l=o(e("@babel/runtime/helpers/classCallCheck")),a=o(e("@babel/runtime/helpers/assertThisInitialized")),s=o(e("@babel/runtime/helpers/inherits")),u=o(e("@babel/runtime/helpers/possibleConstructorReturn")),n=o(e("@babel/runtime/helpers/getPrototypeOf")),i=o(e("@babel/runtime/helpers/classPrivateFieldSet")),f=o(e("@babel/runtime/helpers/classPrivateFieldGet")),c=e("../../constants"),e=o(e("./base"));function d(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=(0,n.default)(r);return t=o?(e=(0,n.default)(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),(0,u.default)(this,t)}}var p=new WeakMap,h=new WeakMap,b=new WeakMap,x=new WeakMap,m=new WeakMap,v=new WeakMap,y=new WeakMap,e=function(e){(0,s.default)(o,e);var t=d(o);function o(){var r;return(0,l.default)(this,o),r=t.call(this),p.set((0,a.default)(r),{writable:!0,value:void 0}),h.set((0,a.default)(r),{writable:!0,value:function(){(0,i.default)((0,a.default)(r),p,{toggleSearchBtn:document.querySelector("a.search-header-replace-toggle"),closeBtn:document.querySelector("#searchform-header-replace-close"),form:document.querySelector("#searchform-header-replace"),topLeftSide:document.querySelector("#site-header.top-header .header-top .left"),topRightSide:document.querySelector("#site-header.top-header .header-top .right"),nav:document.querySelector("#site-header.header-replace #site-navigation"),menu:document.querySelector(".main-menu"),header:document.querySelector("#site-header")})}}),b.set((0,a.default)(r),{writable:!0,value:function(){var e;null!==(e=(0,f.default)((0,a.default)(r),p).toggleSearchBtn)&&void 0!==e&&e.addEventListener("click",(0,f.default)((0,a.default)(r),x)),null!==(e=(0,f.default)((0,a.default)(r),p).closeBtn)&&void 0!==e&&e.addEventListener("click",(0,f.default)((0,a.default)(r),m)),document.addEventListener("click",(0,f.default)((0,a.default)(r),v))}}),x.set((0,a.default)(r),{writable:!0,value:function(e){e.preventDefault(),e.stopPropagation();var t=(0,f.default)((0,a.default)(r),p).form;t.classList.toggle("show"),(0,f.default)((0,a.default)(r),y).call((0,a.default)(r))?((0,f.default)((0,a.default)(r),p).topLeftSide.classList.toggle("hide"),(0,f.default)((0,a.default)(r),p).topRightSide.classList.toggle("hide")):((0,f.default)((0,a.default)(r),p).nav.classList.contains("hide")||((0,f.default)((0,a.default)(r),p).menu.style.minWidth="370px"),(0,f.default)((0,a.default)(r),p).nav.classList.toggle("hide"),t.style.maxWidth=(null===(e=document.querySelector("#site-navigation > ul.dropdown-menu"))||void 0===e?void 0:e.offsetWidth)+60+"px"),r.focus(t,'input[type="search"]')}}),m.set((0,a.default)(r),{writable:!0,value:function(e){e.preventDefault(),(0,f.default)((0,a.default)(r),p).form.classList.remove("show"),(0,f.default)((0,a.default)(r),y).call((0,a.default)(r))?((0,f.default)((0,a.default)(r),p).topLeftSide.classList.remove("hide"),(0,f.default)((0,a.default)(r),p).topRightSide.classList.remove("hide")):((0,f.default)((0,a.default)(r),p).nav.classList.remove("hide"),setTimeout(function(){(0,f.default)((0,a.default)(r),p).menu.style.minWidth=""},250))}}),v.set((0,a.default)(r),{writable:!0,value:function(e){var t;e.target.closest("#searchform-header-replace.show")||(null!==(e=(0,f.default)((0,a.default)(r),p).form)&&void 0!==e&&e.classList.remove("show"),(0,f.default)((0,a.default)(r),y).call((0,a.default)(r))?(null!==(t=(0,f.default)((0,a.default)(r),p).topLeftSide)&&void 0!==t&&t.classList.remove("hide"),null!==(t=(0,f.default)((0,a.default)(r),p).topRightSide)&&void 0!==t&&t.classList.remove("hide")):null!==(t=(0,f.default)((0,a.default)(r),p).nav)&&void 0!==t&&t.classList.remove("hide"))}}),y.set((0,a.default)(r),{writable:!0,value:function(){var e;return null===(e=(0,f.default)((0,a.default)(r),p).header)||void 0===e?void 0:e.classList.contains("top-header")}}),"header_replace"!==c.options.menuSearchStyle?(0,u.default)(r):((0,f.default)((0,a.default)(r),h).call((0,a.default)(r)),(0,f.default)((0,a.default)(r),b).call((0,a.default)(r)),r)}return o}(e.default);window.oceanwp=window.oceanwp||{},oceanwp.headerReplaceSearch=new e},{"../../constants":1,"./base":2,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/classPrivateFieldGet":9,"@babel/runtime/helpers/classPrivateFieldSet":10,"@babel/runtime/helpers/getPrototypeOf":12,"@babel/runtime/helpers/inherits":13,"@babel/runtime/helpers/interopRequireDefault":14,"@babel/runtime/helpers/possibleConstructorReturn":15}],4:[function(e,t,r){t.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},t.exports.default=t.exports,t.exports.__esModule=!0},{}],5:[function(e,t,r){t.exports=function(e,t){return t.get?t.get.call(e):t.value},t.exports.default=t.exports,t.exports.__esModule=!0},{}],6:[function(e,t,r){t.exports=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],7:[function(e,t,r){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},{}],8:[function(e,t,r){t.exports=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)},t.exports.default=t.exports,t.exports.__esModule=!0},{}],9:[function(e,t,r){var o=e("./classApplyDescriptorGet.js"),l=e("./classExtractFieldDescriptor.js");t.exports=function(e,t){return t=l(e,t,"get"),o(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorGet.js":5,"./classExtractFieldDescriptor.js":8}],10:[function(e,t,r){var o=e("./classApplyDescriptorSet.js"),l=e("./classExtractFieldDescriptor.js");t.exports=function(e,t,r){return t=l(e,t,"set"),o(e,t,r),r},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorSet.js":6,"./classExtractFieldDescriptor.js":8}],11:[function(e,t,r){t.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},t.exports.default=t.exports,t.exports.__esModule=!0},{}],12:[function(e,t,r){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t.exports.default=t.exports,t.exports.__esModule=!0,o(e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},{}],13:[function(e,t,r){var o=e("./setPrototypeOf.js");t.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0},{"./setPrototypeOf.js":16}],14:[function(e,t,r){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],15:[function(e,t,r){var o=e("@babel/runtime/helpers/typeof").default,l=e("./assertThisInitialized.js");t.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?l(e):t},t.exports.default=t.exports,t.exports.__esModule=!0},{"./assertThisInitialized.js":4,"@babel/runtime/helpers/typeof":17}],16:[function(e,r,t){function o(e,t){return r.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r.exports.default=r.exports,r.exports.__esModule=!0,o(e,t)}r.exports=o,r.exports.default=r.exports,r.exports.__esModule=!0},{}],17:[function(e,t,r){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(e){return typeof e}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.default=t.exports,t.exports.__esModule=!0,o(e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},{}]},{},[3]);