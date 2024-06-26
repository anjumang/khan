/*! elementor-pro - v3.21.0 - 30-04-2024 */
"use strict";
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[102], {
    2083: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        container: ".elementor-menu-cart__container",
                        main: ".elementor-menu-cart__main",
                        toggle: ".elementor-menu-cart__toggle",
                        toggleButton: "#elementor-menu-cart__toggle_button",
                        toggleWrapper: ".elementor-menu-cart__toggle_wrapper",
                        closeButton: ".elementor-menu-cart__close-button, .elementor-menu-cart__close-button-custom",
                        productList: ".elementor-menu-cart__products"
                    },
                    classes: {
                        isShown: "elementor-menu-cart--shown"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $container: this.$element.find(e.container),
                    $main: this.$element.find(e.main),
                    $toggleWrapper: this.$element.find(e.toggleWrapper),
                    $closeButton: this.$element.find(e.closeButton)
                }
            }
            toggleCart() {
                this.isCartOpen ? this.hideCart() : this.showCart()
            }
            showCart() {
                if (this.isCartOpen)
                    return;
                const e = this.getSettings("classes")
                  , t = this.getSettings("selectors");
                this.isCartOpen = !0,
                this.$element.addClass(e.isShown),
                this.$element.find(t.toggleButton).attr("aria-expanded", !0),
                this.elements.$main.attr("aria-hidden", !1),
                this.elements.$container.attr("aria-hidden", !1)
            }
            hideCart() {
                if (!this.isCartOpen)
                    return;
                const e = this.getSettings("classes")
                  , t = this.getSettings("selectors");
                this.isCartOpen = !1,
                this.$element.removeClass(e.isShown),
                this.$element.find(t.toggleButton).attr("aria-expanded", !1),
                this.elements.$main.attr("aria-hidden", !0),
                this.elements.$container.attr("aria-hidden", !0)
            }
            automaticallyOpenCart() {
                "yes" === this.getElementSettings().automatically_open_cart && this.showCart()
            }
            refreshFragments(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (elementorFrontend.isEditMode() && elementorPro.modules.woocommerce.didManuallyTriggerAddToCartEvent(t))
                    return !1;
                const n = [];
                jQuery.each(elementorFrontend.documentsManager.documents, (e=>{
                    n.push(e)
                }
                )),
                jQuery.ajax({
                    type: "POST",
                    url: elementorProFrontend.config.ajaxurl,
                    context: this,
                    data: {
                        action: "elementor_menu_cart_fragments",
                        templates: n,
                        _nonce: ElementorProFrontendConfig.woocommerce.menu_cart.fragments_nonce,
                        is_editor: elementorFrontend.isEditMode()
                    },
                    success(e) {
                        e?.fragments && jQuery.each(e.fragments, ((e,t)=>{
                            jQuery(e).replaceWith(t)
                        }
                        ))
                    },
                    complete() {
                        "added_to_cart" === e && this.automaticallyOpenCart()
                    }
                })
            }
            bindEvents() {
                const e = elementorProFrontend.config.woocommerce.menu_cart
                  , t = -1 === e.cart_page_url.indexOf("?") ? window.location.origin + window.location.pathname : window.location.href
                  , n = e.cart_page_url
                  , r = e.cart_page_url === t
                  , o = e.checkout_page_url === t
                  , s = this.getSettings("selectors");
                if (r && o)
                    return void this.$element.find(s.toggleButton).attr("href", n);
                const i = this.getSettings("classes");
                this.isCartOpen = this.$element.hasClass(i.isShown);
                "mouseover" === this.getElementSettings().open_cart ? (this.elements.$toggleWrapper.on("mouseover click", s.toggleButton, (e=>{
                    e.preventDefault(),
                    this.showCart()
                }
                )),
                this.elements.$toggleWrapper.on("mouseleave", (()=>this.hideCart()))) : this.elements.$toggleWrapper.on("click", s.toggleButton, (e=>{
                    e.preventDefault(),
                    this.toggleCart()
                }
                )),
                elementorFrontend.elements.$document.on("click", (e=>{
                    if (!this.isCartOpen)
                        return;
                    const t = jQuery(e.target);
                    t.closest(this.elements.$main).length || t.closest(s.toggle).length || this.hideCart()
                }
                )),
                this.elements.$closeButton.on("click", (e=>{
                    e.preventDefault(),
                    this.hideCart()
                }
                )),
                elementorFrontend.elements.$document.on("keyup", (e=>{
                    27 === e.keyCode && this.hideCart()
                }
                )),
                elementorFrontend.elements.$body.on("wc_fragments_refreshed removed_from_cart added_to_cart", ((e,t)=>this.refreshFragments(e.type, t))),
                elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "_window_resize_dropdown", "resize", (()=>this.governDropdownHeight())),
                elementorFrontend.elements.$body.on("wc_fragments_loaded wc_fragments_refreshed", (()=>this.governDropdownHeight()))
            }
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID() + "_window_resize_dropdown", "resize")
            }
            onInit() {
                super.onInit(),
                elementorProFrontend.config.woocommerce.productAddedToCart && this.automaticallyOpenCart(),
                this.governDropdownHeight()
            }
            governDropdownHeight() {
                if ("mini-cart" !== this.getElementSettings().cart_type)
                    return;
                const e = this.getSettings("selectors")
                  , t = this.$element.find(e.productList)
                  , n = this.$element.find(e.toggle);
                if (!t.length || !n.length)
                    return;
                this.$element.find(e.productList).css("max-height", "");
                const r = document.documentElement.clientHeight
                  , o = n.height() + parseInt(this.elements.$main.css("margin-top"))
                  , s = n[0].getBoundingClientRect().top
                  , i = t.height()
                  , a = r - s - o - (this.elements.$main.prop("scrollHeight") - i) - 30
                  , l = Math.max(120, a);
                t.css("max-height", l)
            }
        }
        t.default = _default
    }
}]);
