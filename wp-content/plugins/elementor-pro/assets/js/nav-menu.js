/*! elementor-pro - v3.21.0 - 30-04-2024 */
"use strict";
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[42], {
    9891: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class AnchorLinks {
            followMenuAnchors(e, t) {
                e.each(((e,n)=>{
                    location.pathname === n.pathname && "" !== n.hash && this.followMenuAnchor(jQuery(n), t)
                }
                ))
            }
            followMenuAnchor(e, t) {
                const n = e[0].hash
                  , o = t.activeAnchorItem
                  , s = t.anchorItem
                  , i = e.hasClass(s) ? e : e.closest(`.${s}`);
                let r, l = -300;
                try {
                    r = jQuery(decodeURIComponent(n))
                } catch (e) {
                    return
                }
                if (r.length) {
                    if (!r.hasClass("elementor-menu-anchor")) {
                        const e = jQuery(window).height() / 2;
                        l = -r.outerHeight() + e
                    }
                    elementorFrontend.waypoint(r, (t=>{
                        "down" === t ? (i.addClass(o),
                        e.attr("aria-current", "location")) : (i.removeClass(o),
                        e.attr("aria-current", ""))
                    }
                    ), {
                        offset: "50%",
                        triggerOnce: !1
                    }),
                    elementorFrontend.waypoint(r, (t=>{
                        "down" === t ? (i.removeClass(o),
                        e.attr("aria-current", "")) : (i.addClass(o),
                        e.attr("aria-current", "location"))
                    }
                    ), {
                        offset: l,
                        triggerOnce: !1
                    })
                }
            }
        }
    }
    ,
    7480: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = o(n(9891));
        t.default = elementorModules.frontend.handlers.Base.extend({
            stretchElement: null,
            getDefaultSettings: ()=>({
                selectors: {
                    menu: ".elementor-nav-menu",
                    anchorLink: ".elementor-nav-menu--main .elementor-item-anchor",
                    dropdownMenu: ".elementor-nav-menu__container.elementor-nav-menu--dropdown",
                    menuToggle: ".elementor-menu-toggle"
                },
                classes: {
                    anchorItem: "elementor-item-anchor",
                    activeAnchorItem: "elementor-item-active"
                }
            }),
            getDefaultElements() {
                var e = this.getSettings("selectors")
                  , t = {};
                return t.$menu = this.$element.find(e.menu),
                t.$anchorLink = this.$element.find(e.anchorLink),
                t.$dropdownMenu = this.$element.find(e.dropdownMenu),
                t.$dropdownMenuFinalItems = t.$dropdownMenu.find(".menu-item:not(.menu-item-has-children) > a"),
                t.$menuToggle = this.$element.find(e.menuToggle),
                t.$links = t.$dropdownMenu.find("a.elementor-item"),
                t
            },
            dropdownMenuHeightControllerConfig() {
                const e = this.getSettings("selectors");
                return {
                    elements: {
                        $element: this.$element,
                        $dropdownMenuContainer: this.$element.find(e.dropdownMenu),
                        $menuToggle: this.$element.find(e.menuToggle)
                    },
                    attributes: {
                        menuToggleState: "aria-expanded"
                    },
                    settings: {
                        dropdownMenuContainerMaxHeight: "1000vmax",
                        menuHeightCssVarName: "--menu-height"
                    }
                }
            },
            bindEvents() {
                this.elements.$menu.length && (this.elements.$menuToggle.on("click", this.toggleMenu.bind(this)).on("keyup", this.triggerClickOnEnterSpace.bind(this)),
                this.getElementSettings("full_width") && this.elements.$dropdownMenuFinalItems.on("click", this.toggleMenu.bind(this, !1)).on("keyup", this.triggerClickOnEnterSpace.bind(this)),
                elementorFrontend.addListenerOnce(this.$element.data("model-cid"), "resize", this.stretchMenu),
                elementorFrontend.addListenerOnce(this.$element.data("model-cid"), "scroll", elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250)))
            },
            initStretchElement() {
                this.stretchElement = new elementorModules.frontend.tools.StretchElement({
                    element: this.elements.$dropdownMenu
                })
            },
            toggleNavLinksTabIndex() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.elements.$links.attr("tabindex", e ? 0 : -1)
            },
            toggleMenu(e) {
                var t = this.elements.$menuToggle.hasClass("elementor-active");
                "boolean" != typeof e && (e = !t),
                this.elements.$menuToggle.attr("aria-expanded", e),
                this.elements.$dropdownMenu.attr("aria-hidden", !e),
                this.elements.$menuToggle.toggleClass("elementor-active", e),
                this.toggleNavLinksTabIndex(e),
                this.menuHeightController.reassignMobileMenuHeight(this),
                e && this.getElementSettings("full_width") && this.stretchElement.stretch()
            },
            triggerClickOnEnterSpace(e) {
                13 !== e.keyCode && 32 !== e.keyCode || (e.currentTarget.click(),
                e.stopPropagation())
            },
            stretchMenu() {
                this.getElementSettings("full_width") ? (this.stretchElement.stretch(),
                this.elements.$dropdownMenu.css("top", this.elements.$menuToggle.outerHeight())) : this.stretchElement.reset()
            },
            onInit() {
                if (this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig()),
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments),
                !this.elements.$menu.length)
                    return;
                const e = this.getElementSettings().submenu_icon.value;
                let t = "";
                if (e && (t = e.indexOf("<") > -1 ? e : `<i class="${e}"></i>`),
                this.elements.$menu.smartmenus({
                    subIndicators: "" !== t,
                    subIndicatorsText: t,
                    subIndicatorsPos: "append",
                    subMenusMaxWidth: "1000px"
                }),
                this.initStretchElement(),
                this.stretchMenu(),
                !elementorFrontend.isEditMode()) {
                    const e = this.getSettings("classes");
                    this.anchorLinks = new s.default,
                    this.anchorLinks.followMenuAnchors(this.elements.$anchorLink, e)
                }
            },
            onElementChange(e) {
                "full_width" === e && this.stretchMenu()
            }
        })
    }
}]);
