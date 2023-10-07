(()=>{"use strict";var e=jQuery,t=e("body");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l=function(){function l(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),n(this,"xhr",null),n(this,"doingAjax",!1),n(this,"originalSearch",location.search),n(this,"initialized",!1),n(this,"filtered",!1),this.initPopState(),this.initialized=!0}var r,s,o;return r=l,(s=[{key:"initPopState",value:function(){yith_wcan_shortcodes.reload_on_back&&(this.pushUrlToHistory(window.location,document.title,null,!0),e(window).on("popstate",(function(){var e;null!==(e=window.history.state)&&void 0!==e&&e._yithWcan&&window.location.reload(!0)})))}},{key:"doFilter",value:function(t,i,a){var n,l,r=this,s=e(i||"body");return(l=e(document).triggerHandler("yith_wcan_filters_parameters",[t]))&&(t=l),s&&this.block(s),n=this.buildUrl(t),yith_wcan_shortcodes.ajax_filters?(this.doingAjax=!0,this._doAjax(n).done((function(e){n=r.searchAlternativeUrl(e,n),r._beforeFilter(e,t),r.refreshFragments(i,a,e),r.pushUrlToHistory(n,e.pageTitle,t),r.originalSearch=location.search,s&&r.unblock(s),r._afterFilter(e,t),r.doingAjax=!1}))):(this.pushUrlToHistory(n,document.title,t),void(window.location=n))}},{key:"_beforeFilter",value:function(t,i){e(document).trigger("yith-wcan-ajax-loading",[t,i])}},{key:"_afterFilter",value:function(i,a){e(".woocommerce-ordering").on("change","select.orderby",(function(){e(this).closest("form").submit()})),this.filtered=a&&!!Object.keys(a).length,this.filtered?t.addClass("filtered"):t.removeClass("filtered"),e(window).trigger("scroll"),e(document).trigger("yith-wcan-ajax-filtered",[i,a]).trigger("yith_wcwl_reload_fragments")}},{key:"buildUrl",value:function(t){var a,n=this,l=yith_wcan_shortcodes.query_param,r={},s=window.location,o=yith_wcan_shortcodes.base_url?yith_wcan_shortcodes.base_url:(null==s?void 0:s.origin)+(null==s?void 0:s.pathname),c=this,h="object"===i(t)&&Object.keys(t).length;if(yith_wcan_shortcodes.session_param&&(o=o.replace(new RegExp("/"+yith_wcan_shortcodes.session_param+"/[^/]*/"),"")),h&&(r[l]=1),this.originalSearch){var d=this.originalSearch.replace("?","").split("&").reduce((function(e,t){var i=t.split("=");if(2===i.length){if(n.isFilterParam(i[0]))return e;e[i[0]]=i[1]}return e}),{});r=e.extend(r,d)}return h&&(r=e.extend(r,t)),(a=Object.keys(r).reduce((function(e,t){var i=r[t];return i&&t?e+=c._cleanParam(t)+"="+c._cleanParam(i)+"&":e}),"?").replace(/&$/g,"").replace(/%2B/g,"+").replace(/%2C/g,",")).length>1&&(o+=a),o}},{key:"searchAlternativeUrl",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=i;return-1===e.indexOf("yith_wcan:sharing_url")?a:a=(t=e.match(/<meta name="yith_wcan:sharing_url" content="([^"]*)">/))&&1 in t?t[1]:a}},{key:"pushUrlToHistory",value:function(e,t,i,a){if(yith_wcan_shortcodes.change_browser_url&&!navigator.userAgent.match(/msie/i)){var n="pushState";a&&(n="replaceState"),window.history[n]({_yithWcan:!0,pageTitle:t,filters:i},"",e)}}},{key:"refreshFragments",value:function(t,i,a){var n=document.createElement("html"),l=e(n);if(n.innerHTML=a,t){var r,s=e(i),o=e(t);s.length&&(r=l.find(i)).length&&s.replaceWith(r.first()),o.length&&(r=l.find(t)).length&&o.replaceWith(r.first())}else{var c=e(yith_wcan_shortcodes.content);c.length?c.replaceWith(l.find(yith_wcan_shortcodes.content)):e("body").replaceWith(l.find("body"))}e(document).trigger("yith_wcan_init_shortcodes")}},{key:"_cleanParam",value:function(e){var t,i;return null===(t=yith_wcan_shortcodes)||void 0===t||!t.process_sanitize||null!==(i=yith_wcan_shortcodes)&&void 0!==i&&i.skip_sanitize?e:encodeURIComponent(e)}},{key:"_doAjax",value:function(t,i){return this.xhr&&this.xhr.abort(),i=e.extend({url:t,headers:{"X-YITH-WCAN":1}},i),this.xhr=e.ajax(i),this.xhr}},{key:"block",value:function(t){var i;if(void 0!==e.fn.block){var a="#fff center center no-repeat";null!==(i=yith_wcan_shortcodes)&&void 0!==i&&i.loader&&(a="url('".concat(yith_wcan_shortcodes.loader,"') ").concat(a)),t.block({message:null,overlayCSS:{background:a,opacity:.7}})}}},{key:"unblock",value:function(t){void 0!==e.fn.unblock&&t.unblock()}},{key:"isFilterParam",value:function(t){var i,a=["rating_filter","min_price","max_price","price_ranges","onsale_filter","instock_filter","featured_filter","orderby","product-page",yith_wcan_shortcodes.query_param];return(i=e(document).triggerHandler("yith_wcan_supported_filters_parameters",[a]))&&(a=i),-1!==(a=a.concat(yith_wcan_shortcodes.supported_taxonomies.map((function(e){return e.replace("pa_","filter_")})))).indexOf(t)||-1!==t.indexOf("filter_")||-1!==t.indexOf("query_type_")}}])&&a(r.prototype,s),o&&a(r,o),l}();var r=function t(i){var a,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=null,(n="$reset")in(a=this)?Object.defineProperty(a,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[n]=l,this.$reset=i,this.$reset.on("click",(function(t){t.preventDefault(),e(".yith-wcan-filters").each((function(){var t=e(this).data("preset");t.deactivateAllFilters(!0),t.closeModal()}))})),this.$reset.data("reset",this).addClass("enhanced")};function s(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){s=!0,l=e},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function c(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d=function(){function t(i,a){var n,l,r,s;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"$originalSelect",null),h(this,"$_main",null),h(this,"$_label",null),h(this,"$_dropdown",null),h(this,"$_search",null),h(this,"$_showMore",null),h(this,"$_items",null),h(this,"currentPage",1),h(this,"options",{}),this.$originalSelect=i,this.$originalSelect.is("select")){var o=this.$originalSelect.data("per_page"),c=this.$originalSelect.data("order"),d=this.$originalSelect.data("all-label"),u={showSearch:this.$originalSelect.data("show_search"),paginate:this.$originalSelect.data("paginate"),perPage:o||10,order:c||"ASC",getElements:null,labels:{emptyLabel:d||(null===(n=yith_wcan_shortcodes.labels)||void 0===n?void 0:n.empty_option),searchPlaceholder:null===(l=yith_wcan_shortcodes.labels)||void 0===l?void 0:l.search_placeholder,noItemsFound:null===(r=yith_wcan_shortcodes.labels)||void 0===r?void 0:r.no_items,showMore:null===(s=yith_wcan_shortcodes.labels)||void 0===s?void 0:s.show_more}};this.options=e.extend(u,a),this._hideSelect(),this._initTemplate(),this._initActions(),this.$originalSelect.data("dropdown",this).addClass("enhanced")}}var i,a,n;return i=t,(a=[{key:"_hideSelect",value:function(){this.$originalSelect.hide()}},{key:"_initTemplate",value:function(){var t=e("<div/>",{class:"yith-wcan-dropdown closed"}),i=e("<div/>",{class:"dropdown-label",html:this.getLabel()}),a=e("<div>",{class:"dropdown-wrapper"}),n=e("<ul/>",{class:"matching-items filter-items"});a.append(n),t.append(i).append(a),this.options.showSearch&&this._initSearchTemplate(a),this.options.paginate&&this._initShowMoreTemplate(a),this.$originalSelect.after(t),this.$_main=t,this.$_label=i,this.$_dropdown=a,this.$_items=n}},{key:"_initSearchTemplate",value:function(t){var i=e("<div/>",{class:"search-field-container"}),a=e("<input/>",{name:"s",class:"search-field",autocomplete:"off",type:"search",placeholder:this.options.labels.searchPlaceholder});i.append(a).prependTo(t),this.$_search=a}},{key:"_initShowMoreTemplate",value:function(t){var i,a=e("<a/>",{class:"show-more",text:null===(i=this.options.labels.showMore)||void 0===i?void 0:i.replace("%d",this.options.perPage)});a.on("click",this.loadNextPage.bind(this)).hide(),t.append(a),this.$_showMore=a}},{key:"_initActions",value:function(){var t,i,a=this;null===(t=this.$_main)||void 0===t||t.on("click",(function(e){e.stopPropagation(),a.toggleDropdown()})),this.$_dropdown.on("click",(function(e){e.stopPropagation()})),null===(i=this.$_search)||void 0===i||i.on("keyup search",(function(){a._populateItems()})),this.$_items.on("change",":input",(function(){var t,i=e(this).closest("li"),n=i.data("value");if(i.hasClass("disabled")&&!a.isValueSelected(n))return!1;i.toggleClass("active"),t=i.hasClass("active"),a._changeItemStatus(n,t)})),this.$_items.on("click","li:not(.checkbox) a",(function(t){var i,n=e(this).closest("li"),l=n.data("value");if(t.preventDefault(),n.hasClass("disabled")&&!a.isValueSelected(l))return!1;n.toggleClass("active"),(i=n.hasClass("active"))&&n.siblings().removeClass("active"),a._changeItemStatus(l,i)})),this.$_items.on("click","label > a",(function(t){var i=e(this).parent().find(":input");t.preventDefault(),(i.is('[type="radio"]')||i.is('[type="checkbox"]'))&&i.prop("checked",!i.prop("checked")),i.change()})),this.$originalSelect.on("change",(function(t,i){i||(a.$_items.find("li").each((function(){var t=e(this).data("value");a.isValueSelected(t)?a._selectItem(t):a._deselectItem(t)})),a.updateLabel())})),null!==globalThis&&void 0!==globalThis&&globalThis.yith_wcan_dropdown_init||(e(document).on("click",this._closeAllDropdowns),globalThis.yith_wcan_dropdown_init=!0)}},{key:"openDropdown",value:function(){var e;null===(e=this.$_main)||void 0===e||e.addClass("open").removeClass("closed"),this._afterDropdownOpen()}},{key:"closeDropdown",value:function(){var e;null===(e=this.$_main)||void 0===e||e.removeClass("open").addClass("closed")}},{key:"_closeAllDropdowns",value:function(){e(document).find("select.enhanced").filter((function(t,i){return!!e(i).data("dropdown")})).each((function(){e(this).data("dropdown").closeDropdown()}))}},{key:"_closeOtherDropdowns",value:function(){var t=this;e(document).find("select.enhanced").filter((function(i,a){var n=e(a);return!!n.data("dropdown")&&!n.is(t.$originalSelect)})).each((function(){e(this).data("dropdown").closeDropdown()}))}},{key:"toggleDropdown",value:function(){var e,t;null===(e=this.$_main)||void 0===e||e.toggleClass("open").toggleClass("closed"),null!==(t=this.$_main)&&void 0!==t&&t.hasClass("open")&&this._afterDropdownOpen()}},{key:"_afterDropdownOpen",value:function(){var e;this._closeOtherDropdowns(),null!==(e=this.$_search)&&void 0!==e&&e.length&&this.$_search.val(""),this._populateItems()}},{key:"getMatchingElements",value:function(t,i){var a=this,n=[],l=this.getOptions();return new Promise((function(r){l.each((function(){var i=e(this),a=i.val(),l=i.html(),r=new RegExp(".*"+t+".*","i");(!t||r.test(a)||r.test(l))&&n.push({value:a,label:l})})),a.options.getElements?a.options.getElements(t).then((function(t){t&&(t=t.reduce((function(e,t,i){return e.push({label:i,value:t}),e}),[]),n=e.extend(n,t)),r(a._formatItems(n,i))})):r(a._formatItems(n,i))}))}},{key:"_formatItems",value:function(e,t){var i=this,a=[],n=!1;return e.filter((function(e){return-1===a.indexOf(e.value)&&(a.push(e.value),!0)})).sort((function(e,t){var a="ASC"===i.options.order?1:-1;return e.value<t.value?-1*a:e.value>t.value?a:0})),t&&(n=t<Object.keys(e).length,e=e.slice(0,t)),{items:e,hasMore:n}}},{key:"_generateItem",value:function(t,i){var a,n=this.isValueSelected(t),l=this.getOptionByValue(t),r=e("<li/>",{"data-value":t,class:l.length?l.attr("class"):""});if(l.length){var s=l.data("template"),o=l.data("count");i=s||i,o&&(i+=o)}if(a=e("<a/>",{href:l.length?l.data("filter_url"):"#",html:i,rel:"nofollow","data-title":l.length?l.data("title"):""}),this.$originalSelect.prop("multiple")){var c=e("<input/>",{type:"checkbox",value:t}),h=e("<label>");c.prop("checked",n),h.prepend(c).append(a),r.append(h).addClass("checkbox")}else r.append(a);return n?r.addClass("active"):r.removeClass("active"),r}},{key:"_populateItems",value:function(t){var i,a,n=this,l=null!==(i=this.$_search)&&void 0!==i&&i.length?this.$_search.val():"",r=this.options.paginate?this.options.perPage:0;a=(t=t?parseInt(t):1)*r,this.getMatchingElements(l,a).then((function(i){var a=i.items,l=[],r=!1;if(n._emptyItems(),n._hideLoadMore(),a.length){var o,c=s(a);try{for(c.s();!(o=c.n()).done;){var h=o.value;""===h.value?l.unshift(n._generateItem(h.value,h.label)):l.push(n._generateItem(h.value,h.label))}}catch(e){c.e(e)}finally{c.f()}n.currentPage=t,r=i.hasMore}else l.push(e("<li/>",{text:n.options.labels.noItemsFound})),n.currentPage=1;n.$_items.append(l),n.$originalSelect.trigger("yith_wcan_dropdown_updated"),r&&n._showLoadMore()}))}},{key:"loadNextPage",value:function(){var e=this.currentPage+1;this._populateItems(e)}},{key:"_selectItem",value:function(e){return this._changeItemStatus(e,!0)}},{key:"_deselectItem",value:function(e){return this._changeItemStatus(e,!1)}},{key:"_changeItemStatus",value:function(e,t){var i=this.$originalSelect.find('option[value="'.concat(e,'"]'));return!!i.length&&(i.prop("selected",t),this.closeDropdown(),this.updateLabel(),this.$originalSelect.trigger("change",[!0]),!0)}},{key:"_emptyItems",value:function(){this.$_items.html("")}},{key:"_showLoadMore",value:function(){this.$_showMore.show()}},{key:"_hideLoadMore",value:function(){this.$_showMore.hide()}},{key:"getLabel",value:function(){return this.hasSelectedValues()?this.getSelectedLabels().join(", "):this.options.labels.emptyLabel}},{key:"updateLabel",value:function(){var e,t=this.getLabel();null===(e=this.$_label)||void 0===e||e.html(t)}},{key:"getOptions",value:function(){return this.$originalSelect.find("option")}},{key:"hasSelectedValues",value:function(){return this.getSelectedOptions().length}},{key:"isValueSelected",value:function(e){return-1!==this.getSelectedValues().indexOf(e.toString())}},{key:"getSelectedOptions",value:function(){return this.$originalSelect.find("option").filter(":selected")}},{key:"getOptionByValue",value:function(e){return this.$originalSelect.find('option[value="'.concat(e,'"]'))}},{key:"getSelectedLabels",value:function(){var t=[];return this.getSelectedOptions().each((function(){var i=e(this),a=i.data("template");a=a||i.html().replace(/\([0-9]*\)/,""),t.push(a)})),t}},{key:"getSelectedValues",value:function(){var t=[];return this.getSelectedOptions().each((function(){t.push(e(this).val())})),t}},{key:"destroy",value:function(){}}])&&c(i.prototype,a),n&&c(i,n),t}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var v=function(){function t(i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"preset",!1),p(this,"$preset",!1),p(this,"target",!1),p(this,"$target",!1),p(this,"$filters",!1),p(this,"$filterButtons",!1),p(this,"modalElements",{}),p(this,"activeFilters",!1),p(this,"isMobile",!1),p(this,"sliderTimeout",!1),p(this,"originalFilters",null),p(this,"dirty",!1),this.preset="#"+i.attr("id"),this.$preset=i,this.target=this.$preset.data("target"),this.$target=!!this.target&&e(this.target),this._regiterStatus(),this._initFilterButton(),this._initResponsive(),this._initFilters(),this._initActions(),this.$preset.data("preset",this).addClass("enhanced").trigger("yith_wcan_preset_initialized",[this])}var i,a,n;return i=t,(a=[{key:"_initFilters",value:function(){var t=this;this.getFilters().each((function(){var i=e(this);t._initFilter(i)})),this.maybeShowClearAllFilters()}},{key:"_initFilterButton",value:function(){var e=this;this.$filterButtons=this.$preset.find(".apply-filters"),this.$filterButtons.length&&this.$filterButtons.on("click",(function(t){t.preventDefault(),e.filter()})).hide()}},{key:"_initActions",value:function(){this.$preset.find("form").on("submit",(function(e){e.preventDefault()}))}},{key:"_initResponsive",value:function(){var t=this;if(yith_wcan_shortcodes.modal_on_mobile){var i=window.matchMedia("(max-width: ".concat(yith_wcan_shortcodes.mobile_media_query,"px)"));e(window).on("resize",(function(){var e=!!i.matches;e!==t.isMobile&&(t.isMobile=e,t._afterLayoutChange())})).resize()}}},{key:"_initFilter",value:function(t){var i,a=this,n=function(i){var n=e(this),l=n.closest(".yith-wcan-filter"),r=!!l.length&&"yes"===l.data("multiple"),s=n.closest(".filter-item"),o=s.length?l.find(".filter-item").not(s):[];if(s.is(".disabled")&&!s.is(".active"))return i.preventDefault(),!1;i.preventDefault(),o.length&&!r&&o.removeClass("active").children("label").find(":input").prop("checked",!1).parent(".checked").removeClass("checked"),s.length&&s.toggleClass("active"),a.activeFilters=!1,a.maybeFilter(t),a.maybeToggleClearAllFilters(),a.maybeToggleClearFilter(l)};t.find(".filter-item").not(".checkbox").not(".radio").on("click","a",(function(t){var i=e(this).closest(".filter-item");if(!e(null==t?void 0:t.delegateTarget).is(i))return!1;n.call(this,t)})),t.find(":input").on("change",(function(t){var i=e(this),a=i.closest(".filter-item");if(a.is(".disabled")&&!a.is(".active"))return i.prop("checked",!1),!1;n.call(this,t)})),t.find("label > a").on("click",(function(t){var i=e(this),a=i.closest(".filter-item");if(t.preventDefault(),a.is(".disabled")&&!a.is(".active"))return!1;var n=i.parent().find(":input");(n.is('[type="radio"]')||n.is('[type="checkbox"]'))&&n.prop("checked",!n.prop("checked")),n.change()})),this._initTooltip(t),this._initPriceSlider(t),this._initDropdown(t),this._initCollapsable(t),this.maybeShowClearFilter(t),null!==(i=this.$preset)&&void 0!==i&&i.hasClass("custom-style")&&(this._initCustomInput(t),t.on("yith_wcan_dropdown_updated",(function(){var t=e(this).closest(".yith-wcan-filter");a._initCustomInput(t)})))}},{key:"_initTooltip",value:function(t,i){t.find("[data-title]").each((function(){var t=e(this);!t.hasClass("tooltip-added")&&t.data("title")&&(t.on("mouseenter",(function(){var t,a=e(this),n=null,l=a.outerWidth(),r=0;if(!i||"top"!==i&&"right"!==i){var s=a.closest(".filter-item");i=s.hasClass("color")||s.hasClass("label")?"top":"right"}n=e("<span>",{class:"yith-wcan-tooltip",html:a.data("title")}),a.append(n),t=n.outerWidth()+6,n.outerWidth(t),r="top"===i?(l-t)/2:l+15,n.css({left:r.toFixed(0)+"px"}).fadeIn(200),a.addClass("with-tooltip")})).on("mouseleave",(function(){var t=e(this);t.find(".yith-wcan-tooltip").fadeOut(200,(function(){t.removeClass("with-tooltip").find(".yith-wcan-tooltip").remove()}))})),t.addClass("tooltip-added"))}))}},{key:"_initDropdown",value:function(t){var i=t.find("select.filter-dropdown");i.length&&(i.hasClass("select2-hidden-accessible")&&void 0!==e.fn.selectWoo&&i.selectWoo("destroy"),this._initDropdownObject(i,{paginate:!0,perPage:yith_wcan_shortcodes.terms_per_page}))}},{key:"_initDropdownObject",value:function(e,t){return new d(e,t)}},{key:"_initPriceSlider",value:function(e){var t=this;if(e.hasClass("filter-price-slider")){var i=this,a=e.find(".price-slider"),n=a.find(".price-slider-min"),l=a.find(".price-slider-max"),r=parseFloat(a.data("min")),s=parseFloat(a.data("max")),o=parseFloat(n.val()),c=parseFloat(l.val()),h=parseFloat(a.data("step")),d=function(){i.sliderTimeout&&clearTimeout(i.sliderTimeout),i.sliderTimeout=setTimeout((function(){i.maybeFilter(e)}),200)};e.find(".price-slider-ui").ionRangeSlider({skin:"round",type:"double",min:r,max:s,step:h,from:o,to:c,min_interval:h,values_separator:" - ",prettify:function(e){return t.formatPrice(e)},onChange:function(e){n.val(e.from),l.val(e.to)},onFinish:d}),n.add(l).off("change").on("keyup",(function(){n.val()&&l.val()&&d()}))}}},{key:"_initCollapsable",value:function(e){this._initTitleCollapsable(e),this._initHierarchyCollapsable(e)}},{key:"_initTitleCollapsable",value:function(e){var t=e.find(".collapsable");t.length&&this._initToggle(t,t,e.find(".filter-content"))}},{key:"_initHierarchyCollapsable",value:function(t){var i=t.find(".hierarchy-collapsable");if(i.length){var a=this,n=t.find(".active");n.length&&(n.parents(".hierarchy-collapsable").removeClass("closed").addClass("opened"),n.hasClass("hierarchy-collapsable")&&yith_wcan_shortcodes.show_current_children&&n.removeClass("closed").addClass("opened")),i.each((function(){var t=e(this),i=e("<span/>",{class:"toggle-handle"});i.appendTo(t),a._initToggle(i,t,t.children("ul.filter-items"))}))}}},{key:"_initToggle",value:function(e,t,i){t.hasClass("closed")&&i.hide(),e.off("click").on("click",(function(e){e.stopPropagation(),e.preventDefault(),i.slideToggle(400,(function(){t.toggleClass("opened").toggleClass("closed")}))}))}},{key:"_initCustomInput",value:function(t){t.find(":input").each((function(){var t,i=e(this),a=i.attr("type"),n="".concat(a,"button");"checkbox"!==a&&"radio"!==a||i.closest(".".concat(n)).length||(i.is(":checked")&&(n+=" checked"),t=e("<span/>",{class:n}),i.wrap(t).on("change",(function(){var t=e(this);t.prop("checked")?t.parent().addClass("checked"):t.parent().removeClass("checked")})))}))}},{key:"_regiterStatus",value:function(){this.originalFilters=this.getFiltersProperties()}},{key:"_afterLayoutChange",value:function(){var t,i;this.isMobile?(this.$preset.addClass("filters-modal").attr("role","dialog").attr("tabindex","-1").hide(),this._addCloseModalButton(),this._addApplyFiltersModalButton(),this._switchToCollapsables(),null===(t=this.$filterButtons)||void 0===t||t.hide()):(this.$preset.removeClass("filters-modal").removeClass("open").removeAttr("role").removeAttr("tabindex").show(),e("body").css("overflow","auto").removeClass("yith-wcan-preset-modal-open"),this._removeCloseModalButton(),this._removeApplyFiltersModalButton(),this._switchBackCollapsables(),null===(i=this.$filterButtons)||void 0===i||i.show())}},{key:"_addCloseModalButton",value:function(){var t=e("<a/>",{class:"close-button",html:"&times;","data-dismiss":"modal","aria-label":yith_wcan_shortcodes.labels.close});t.prependTo(this.$preset).on("click",this.closeModal.bind(this)),this.modalElements.closeButton=t}},{key:"_removeCloseModalButton",value:function(){var e,t;null===(e=this.modalElements)||void 0===e||null===(t=e.closeButton)||void 0===t||t.remove()}},{key:"_addApplyFiltersModalButton",value:function(){var t=this,i=e("<button/>",{class:"apply-filters main-modal-button",html:yith_wcan_shortcodes.labels.show_results,"data-dismiss":"modal"});i.appendTo(this.$preset).on("click",(function(){t.filter(),t.closeModal()})),this.modalElements.applyFiltersButton=i}},{key:"_removeApplyFiltersModalButton",value:function(){var e,t;null===(e=this.modalElements)||void 0===e||null===(t=e.applyFiltersButton)||void 0===t||t.remove()}},{key:"_switchToCollapsables",value:function(){var t=this;this.getFilters().each((function(){var i=e(this),a=i.find(".filter-title");a.length&&!a.hasClass("collapsable")&&(a.addClass("collapsable").data("disable-collapse",!0),t._initTitleCollapsable(i))}))}},{key:"_switchBackCollapsables",value:function(){this.getFilters().each((function(){var t=e(this),i=t.find(".filter-title");i.length&&i.hasClass("collapsable")&&i.data("disable-collapse")&&(i.removeClass("collapsable").removeData("disable-collapse",!0).off("click"),t.find(".filter-content").show())}))}},{key:"_openAllCollapsables",value:function(){var t=this;this.$filters.not(".no-title").not((function(i,a){return t.isFilterActive(e(a))})).find(".filter-content").show().end().find(".filter-title").removeClass("closed").addClass("opened")}},{key:"_closeAllCollapsables",value:function(){var t=this;this.$filters.not(".no-title").not((function(i,a){return t.isFilterActive(e(a))})).find(".filter-content").hide().end().find(".filter-title").addClass("closed").removeClass("opened")}},{key:"maybeRegisterStatusChange",value:function(){var e=this.getFiltersProperties(),t=JSON.stringify(e),i=JSON.stringify(this.originalFilters);this.dirty=t!==i}},{key:"maybeFilter",value:function(e){if(this.maybeRegisterStatusChange(),yith_wcan_shortcodes.instant_filters&&!this.isMobile)this.filter();else if(yith_wcan_shortcodes.instant_filters||this.isMobile){if(this.isMobile&&this.dirty){var t;this.$preset.addClass("with-filter-button"),null===(t=this.modalElements.applyFiltersButton)||void 0===t||t.show()}}else{var i,a;this.dirty?null===(i=this.$filterButtons)||void 0===i||i.show():null===(a=this.$filterButtons)||void 0===a||a.hide()}}},{key:"filter",value:function(){var t,i,a,n=this,l=null===(t=window)||void 0===t?void 0:t.product_filter;null==l||null===(i=l.doFilter(this.getFiltersProperties(),this.target,this.preset))||void 0===i||i.done((function(){var t=e(n.preset);if(t.length&&yith_wcan_shortcodes.scroll_top){var i=t.offset().top;if(yith_wcan_shortcodes.scroll_target){var a=e(yith_wcan_shortcodes.scroll_target);i=a.length?a.offset().top:i}else n.isMobile&&(i=100);e("body, html").animate({scrollTop:i-100})}n.originalFilters=n.getFiltersProperties(),n.dirty=!1})),this.isMobile&&(this.$preset.removeClass("with-filter-button"),null===(a=this.modalElements.applyFiltersButton)||void 0===a||a.hide(),this.closeModal())}},{key:"getFilters",value:function(){return!1===this.$filters&&(this.$filters=this.$preset.find(".yith-wcan-filter")),this.$filters}},{key:"getActiveFilters",value:function(){return!1===this.activeFilters&&(this.activeFilters=this.getFiltersProperties()),this.activeFilters}},{key:"isAnyFilterActive",value:function(){return!!Object.keys(this.getActiveFilters()).length}},{key:"isFilterActive",value:function(e){var t,i;switch(e.data("filter-type")){case"tax":case"review":case"price_range":var a=e.find(".filter-dropdown");if(a.length){var n=a.val();t="object"===u(n)?!(null==n||!n.length):!!n;break}case"stock_sale":t=e.find(".filter-item").filter(".active").length;break;case"price_slider":var l=parseFloat(e.find(".price-slider").data("step")),r=parseFloat(e.find(".price-slider").data("min")),s=parseFloat(e.find(".price-slider").data("max")),o=parseFloat(e.find(".price-slider-min").val()),c=parseFloat(e.find(".price-slider-max").val());t=Math.abs(o-r)>=l||Math.abs(c-s)>=l;break;case"orderby":t="menu_order"!==e.find(".filter-order-by").val();break;default:t=!1}return t=void 0!==(i=e.triggerHandler("yith_wcan_is_filter_active",[t,this]))?i:t}},{key:"countActiveItems",value:function(e){var t;switch(e.data("filter-type")){case"tax":case"review":case"price_range":var i=e.find(".filter-dropdown");if(i.length){var a=i.val();t="object"===u(a)?null==a?void 0:a.length:+!!a;break}case"stock_sale":t=e.find(".filter-items").find(".active").length;break;case"orderby":this.isFilterActive(e)&&(t=1);break;case"price_slider":default:t=0}return t}},{key:"getFilterProperties",value:function(t){var i,a,n=t.data("filter-type"),l="yes"===t.data("multiple"),r=t.find(".filter-dropdown"),s={};switch(n){case"tax":var o=[],c=t.data("taxonomy"),h=0===c.indexOf("filter"),d=t.data("relation");if(r.length?l?o=r.val():o.push(r.val()):o=(a=t.find(".filter-item").filter(".active").children("a, label")).get().reduce((function(t,i){var a;return(a=(i=e(i)).is("label")?i.find(":input").val():i.data("term-slug"))?(t.push(a),t):t}),o),l){var u=h||"and"!==d?",":"+";s[c]=o.join(u)}else s[c]=o.pop();h&&(s[c.replace("filter_","query_type_")]=d);break;case"review":r.length?s.rating_filter=r.val():(a=t.find(".filter-item").filter(".active").children("a, label"),l?s.rating_filter=a.get().reduce((function(t,i){var a;return(a=(i=e(i)).is("label")?i.find(":input").val():i.data("rating"))?(t.push(a),t):t}),[]).join(","):(a=a.first(),s.rating_filter=a.is("label")?a.find(":input").val():a.data("rating")));break;case"price_range":r.length?l?s.price_ranges=r.val().join(","):(s.min_price=r.val().split("-")[0],s.max_price=r.val().split("-")[1]):(a=t.find(".filter-item").filter(".active").children("a, label"),l?s.price_ranges=a.get().reduce((function(t,i){var a=e(i).data("range-min"),n=e(i).data("range-max");return t+=(n?"".concat(a,"-").concat(n):a)+","}),"").replace(/^(.*),$/,"$1"):(s.min_price=parseFloat(a.first().data("range-min")),s.max_price=parseFloat(a.first().data("range-max"))));break;case"price_slider":s.min_price=parseFloat(t.find(".price-slider-min").val()),s.max_price=parseFloat(t.find(".price-slider-max").val());break;case"stock_sale":t.find(".filter-on-sale").is(".active")&&(s.onsale_filter=1),t.find(".filter-in-stock").is(".active")&&(s.instock_filter=1),t.find(".filter-featured").is(".active")&&(s.featured_filter=1);break;case"orderby":s.orderby=t.find(".filter-order-by").val()}return s=void 0!==(i=t.triggerHandler("yith_wcan_filter_properties",[s,self]))?i:s}},{key:"getFiltersProperties",value:function(){var t={},i=this;return this.getFilters().each((function(){var a=e(this);if(i.isFilterActive(a)){var n=i.getFilterProperties(a);t=i.mergeProperties(t,n,a)}})),t}},{key:"getFiltersByProperties",value:function(t){var i=this;return this.getFilters().filter((function(){var a=e(this);if(i.isFilterActive(a)){var n=i.getFilterProperties(a),l=!1;for(var r in t){if(["min_price","max_price","price_ranges"].includes(r)&&(n.min_price||n.price_ranges)){l=!0;break}if(n[r]){l=!0;break}}return l}return!1}))}},{key:"maybeToggleClearFilter",value:function(e){this.isFilterActive(e)?this.maybeShowClearFilter(e):this.maybeHideClearFilter(e)}},{key:"maybeToggleClearAllFilters",value:function(){this.isAnyFilterActive()?this.maybeShowClearAllFilters():this.maybeHideClearAllFilters()}},{key:"maybeShowClearFilter",value:function(t){var i=this;this.isFilterActive(t)&&yith_wcan_shortcodes.show_clear_filter&&(t.find(".clear-selection").remove(),e("<a/>",{class:"clear-selection",text:yith_wcan_shortcodes.labels.clear_selection,role:"button"}).prependTo(t.find(".filter-content")).on("click",(function(e){e.preventDefault(),i.deactivateFilter(t,!1,yith_wcan_shortcodes.instant_filters),i.maybeHideClearFilter(t),yith_wcan_shortcodes.instant_filters&&i.closeModal()})))}},{key:"maybeShowClearAllFilters",value:function(){var t=this;this.isAnyFilterActive()&&this.isMobile&&(this.$preset.find(".clear-selection").remove(),e("<a/>",{class:"clear-selection",text:yith_wcan_shortcodes.labels.clear_all_selections,role:"button"}).prependTo(this.$preset.find(".filters-container")).on("click",(function(e){e.preventDefault(),t.deactivateAllFilters(yith_wcan_shortcodes.instant_filters),t.maybeHideClearAllFilters(),yith_wcan_shortcodes.instant_filters&&t.closeModal()})))}},{key:"maybeHideClearFilter",value:function(e){!this.isFilterActive(e)&&yith_wcan_shortcodes.show_clear_filter&&e.find(".clear-selection").remove()}},{key:"maybeHideClearAllFilters",value:function(){this.isAnyFilterActive()||this.$preset.find(".filters-container").children(".clear-selection").remove()}},{key:"deactivateFilter",value:function(t,i,a){var n=t.data("filter-type"),l=t.find(".filter-item"),r=l.filter(".active"),s=t.find(".filter-dropdown");switch(n){case"tax":var o=t.data("taxonomy");s.length?(i?s.find("option").each((function(){var t=e(this);t.val().toString()===i[o].toString()&&t.prop("selected",!1)})):s.find("option").prop("selected",!1),s.change()):i?r.each((function(){var t=e(this),a=t.children("label"),n=t.children("a");(a.length?a.find(":input").val():n.data("term-slug")).toString()===i[o].toString()&&(t.children("label").children("a").click(),t.removeClass("active"))})):(r.children("label").children("a").click(),r.removeClass("active"));break;case"review":s.length?(i?s.find("option").each((function(){var t=e(this);t.val()===i.rating_filter&&t.prop("selected",!1)})):s.find("option").prop("selected",!1),s.change()):i?r.each((function(){var t=e(this),a=t.children("label"),n=t.children("a");(a.length?a.find(":input").val():n.data("rating"))===i.rating_filter&&(t.children("label").children("a").click(),t.removeClass("active"))})):(r.children("label").children("a").click(),r.removeClass("active"));break;case"price_range":s.length?(i?s.find("option").each((function(){var t=e(this),a=i.min_price+(i.max_price?"-".concat(i.max_price):"");t.val()===a&&t.prop("selected",!1)})):s.find("option").prop("selected",!1),s.change()):i?r.each((function(){var t,a,n=e(this),l=n.children("label"),r=n.children("a");a=l.length?l.find(":input").val():r.data("min_price")+(r.data("max_price")?"-"+r.data("max_price"):""),i.min_price?t=i.min_price+(i.max_price?"-"+i.max_price:""):i.price_ranges&&(t=i.price_ranges),a===t&&(n.children("label").children("a").click(),n.removeClass("active"))})):(r.children("label").children("a").click(),r.removeClass("active"));break;case"price_slider":var c=t.find(".price-slider");t.find(".price-slider-min").val(c.data("min")),t.find(".price-slider-max").val(c.data("max")).change();break;case"orderby":t.find("select").val("menu_order");break;case"stock_sale":i?(null!=i&&i.instock_filter&&t.find(".filter-in-stock").find(":input").prop("checked",!1).change().closest(".filter-item").removeClass("active"),null!=i&&i.onsale_filter&&t.find(".filter-on-sale").find(":input").prop("checked",!1).change().closest(".filter-item").removeClass("active"),null!=i&&i.featured_filter&&t.find(".filter-featured").find(":input").prop("checked",!1).change().closest(".filter-item").removeClass("active")):(t.find(".filter-in-stock").find(":input").prop("checked",!1).change(),t.find(".filter-on-sale").find(":input").prop("checked",!1).change(),t.find(".filter-featured").find(":input").prop("checked",!1).change(),l.removeClass("active"));break;default:l.removeClass("active")}this.activeFilters=!1,a&&this.filter()}},{key:"deactivateAllFilters",value:function(t){var i=this;return this.getFilters().each((function(){var t=e(this);i.deactivateFilter(t)})),this.activeFilters=!1,t&&this.filter(),!0}},{key:"deactivateFilterByProperties",value:function(t,i){var a=this,n=this.getFiltersByProperties(t);return!!n.length&&(n.each((function(){var n=e(this);a.deactivateFilter(n,t,i)})),!0)}},{key:"openModal",value:function(){var t=this;this.isMobile&&(yith_wcan_shortcodes.toggles_open_on_modal?this._openAllCollapsables():this._closeAllCollapsables(),e("body").css("overflow","hidden").addClass("yith-wcan-preset-modal-open"),this.$preset.show(),setTimeout((function(){t.$preset.addClass("open")}),100))}},{key:"closeModal",value:function(){var t=this;this.isMobile&&(this.$preset.removeClass("open"),setTimeout((function(){t.$preset.hide(),e("body").css("overflow","auto").removeClass("yith-wcan-preset-modal-open")}),300))}},{key:"formatPrice",value:function(e){var t,i,a,n;return"undefined"!=typeof accounting&&(e=accounting.formatMoney(e,{symbol:null===(t=yith_wcan_shortcodes.currency_format)||void 0===t?void 0:t.symbol,decimal:null===(i=yith_wcan_shortcodes.currency_format)||void 0===i?void 0:i.decimal,thousand:null===(a=yith_wcan_shortcodes.currency_format)||void 0===a?void 0:a.thousand,precision:0,format:null===(n=yith_wcan_shortcodes.currency_format)||void 0===n?void 0:n.format})),e}},{key:"mergeProperties",value:function(t,i,a){for(var n in i)if(i.hasOwnProperty(n)&&t[n]){switch(n){case"rating_filter":case"min_price":case"max_price":case"onsale_filter":case"instock_filter":case"orderby":t[n]=i[n];break;default:if(0===n.indexOf("query_type_"))t[n]=i[n];else{var l=0===n.indexOf("filter_"),r=l?",":"+",s=t[n].replace(",",r)+r+i[n].replace(",",r);if(s=s.split(r).filter((function(e,t,i){return i.indexOf(e)===t})).join(r),t[n]=s,l){var o=n.replace("filter_","query_type_");t[o]="and",i[o]="and"}}}delete i[n]}return e.extend(t,i),t}}])&&f(i.prototype,a),n&&f(i,n),t}();jQuery((function(e){e(document).on("yith_wcan_init_shortcodes yith_plugin_fw_gutenberg_success_do_shortcode",(function(){e(".yith-wcan-filters").not(".enhanced").each((function(){new v(e(this))})),e(".yith-wcan-reset-filters").not(".enhanced").each((function(){new r(e(this))}))})).trigger("yith_wcan_init_shortcodes"),globalThis.product_filter=new l}))})();