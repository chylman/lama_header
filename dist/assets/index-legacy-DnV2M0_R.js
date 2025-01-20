System.register([],(function(t,e){"use strict";return{execute:function(){var t=document.createElement("style");t.textContent='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-display:swap;font-family:Roboto;font-weight:300;src:local("Roboto-Thin"),url(src/assets/fonts/Roboto-Thin.woff2) format("woff2"),url(src/assets/fonts/Roboto-Thin.woff) format("woff")}@font-face{font-display:swap;font-family:Roboto;font-weight:400;src:local("Roboto-Regular"),url(src/assets/fonts/Roboto-Regular.woff2) format("woff2"),url(src/assets/fonts/Roboto-Regular.woff) format("woff")}@font-face{font-display:swap;font-family:Roboto;font-weight:600;src:local("Roboto-Medium"),url(src/assets/fonts/Roboto-Medium.woff2) format("woff2"),url(src/assets/fonts/Roboto-Medium.woff) format("woff")}@font-face{font-display:swap;font-family:Roboto;font-weight:900;src:local("Roboto-Bold"),url(src/assets/fonts/Roboto-Bold.woff2) format("woff2"),url(src/assets/fonts/Roboto-Bold.woff) format("woff")}*,:after,:before{box-sizing:border-box}body,html{margin:0;min-height:100vh;padding:0}html{color:#000;font-family:Roboto,Arial,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:24px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}body{background-color:gray;height:100%;width:100%}a{color:#000;text-decoration:none}img,video{display:block;height:auto;max-width:100%}textarea{resize:none}input:-webkit-autofill{box-shadow:inset 0 0 0 1000px #fff;-webkit-text-fill-color:#000}input,textarea{border-radius:0}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1}input::placeholder,textarea::placeholder{opacity:1}input:invalid,textarea:invalid{box-shadow:none}select{border-radius:0}input::-ms-clear,input::-ms-reveal{display:none}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}input:matches([type=email],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url]),select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.wrapper{display:flex;flex-direction:column;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);position:relative}.wrapper .footer,.wrapper .header{flex-shrink:0}.wrapper main{flex-grow:1}.rouble{font-family:Rouble,Arial,sans-serif;font-weight:400!important;text-transform:lowercase!important}.visually-hidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(100%);clip-path:inset(100%)}.scroll-lock-ios{overflow:hidden;position:fixed}.scroll-lock{overflow:hidden}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.no-scrollbar::-webkit-scrollbar{display:none}.no-transition{transition:none!important}.overlay{background-color:rgba(37,40,48,.5);bottom:0;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .6s ease,visibility .6s ease;visibility:hidden;width:100%;z-index:10}.is-menu-open .overlay{opacity:1;visibility:initial}.container{margin:0 auto;max-width:1440px;padding:0 122px;width:100%}@media (max-width:1023px){.container{padding:0 22px}}@media (max-width:767px){.container{padding:0 11px}}.header{-webkit-backdrop-filter:drop-shadow(0 4px 4px #131417);backdrop-filter:drop-shadow(0 4px 4px #131417);background-color:#131417;color:#fafafa}@media (max-width:1023px){.header{position:relative;z-index:20}}.header .container{display:flex}.header .menu-toggle-btn{display:none}@media (max-width:1023px){.header .menu-toggle-btn{display:flex}}.header__logo{flex-shrink:0;height:52px;margin:17px 62px 0 0;width:48px}@media (max-width:1439px){.header__logo{margin:16px auto 16px 0}}.header__logo img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.header__buttons{align-items:center;display:flex;padding-right:10px}@media (max-width:1023px){.header__buttons{flex-grow:1}}.header__phone{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}@media (max-width:1023px){.header__phone{margin:0 auto}}@media (max-width:767px){.header__phone{margin:0 20px 0 auto}.header__phone .link__text{display:none}}.nav{font-size:18px;font-weight:400;line-height:24px;margin:0 auto}@media (max-width:1023px){.nav{background-color:#131417;-webkit-clip-path:polygon(0 0,100% 0,100% 0,0 0);clip-path:polygon(0 0,100% 0,100% 0,0 0);font-size:16px;min-height:calc(var(--vh, 1vh)*100 - var(--header-height));pointer-events:none;position:absolute;right:0;top:var(--header-height);transition:-webkit-clip-path .6s ease;transition:clip-path .6s ease;transition:clip-path .6s ease,-webkit-clip-path .6s ease;width:374px}}@media (max-width:767px){.nav{width:100%}}@media (max-width:1023px){.is-menu-open .nav{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%);pointer-events:auto}}.nav__list{align-items:center;-moz-column-gap:58px;column-gap:58px;display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0 10px}@media (max-width:1023px){.nav__list{align-items:flex-start;flex-direction:column;padding:0}}.nav__item{align-items:center;color:#fafafa;display:flex;height:100%;margin-right:20px;padding:28px 0 29px;transition:color .3s ease}@media (hover:hover){.nav__item:hover:not(.focus-visible){color:#eb5757}}.nav__item.focus-visible:focus{color:#eb5757}@media (max-width:1023px){.nav__item{align-items:flex-start;flex-direction:column;padding:0;width:100%}}.nav__inner-list{display:flex;flex-direction:column;font-size:16px;list-style:none;margin:0;padding:0;position:relative;width:320px}@media (max-width:1023px){.nav__inner-list{display:block;font-size:16px;width:100%}}.nav__inner-list:before{background-color:#252830;-webkit-clip-path:polygon(50% 0,0 100%,100% 100%);clip-path:polygon(50% 0,0 100%,100% 100%);content:"";display:block;height:14px;left:47px;position:absolute;top:-13px;width:28px;z-index:99}@media (max-width:1023px){.nav__inner-list:before{display:none}}.nav__inner-list--arrow-left:before{bottom:17px;left:2px;top:auto;transform:rotate(-90deg)}.nav__inner-list--full-rounded .nav__inner-item:first-child{border-radius:8px 8px 0 0;border-top:1px solid #252830}@media (max-width:1023px){.nav__inner-list--full-rounded .nav__inner-item:first-child{border:none;border-radius:initial}}.nav__inner-list--w-180{width:210px}@media (max-width:1023px){.nav__inner-list--w-180{width:100%}}.nav__inner-item{background-color:#252830;display:flex;overflow:hidden}.nav__inner-item:not(:last-child){border-bottom:1px solid hsla(0,0%,100%,.1)}@media (max-width:1023px){.nav__inner-item:not(:last-child){border:none}}.nav__inner-item:last-child{border-bottom:1px solid #252830;border-radius:0 0 8px 8px}@media (max-width:1023px){.nav__inner-item:last-child{border:none;border-radius:initial}.nav__inner-item{background-color:initial;flex-direction:column}}.nav__inner-link{background-color:transparent;color:#fafafa;overflow:hidden;padding:7px 18px;text-overflow:ellipsis;transition:background-color .3s ease;white-space:nowrap;width:100%}@media (hover:hover){.nav__inner-link:hover:not(.focus-visible){background-color:#131417}}.nav__inner-link.focus-visible:focus{background-color:#131417}@media (max-width:1023px){.nav__inner-link{background-color:#252830;border-bottom:1px solid #131417;padding:20px}}.nav__link{color:inherit;cursor:pointer;display:flex}@media (max-width:1023px){.nav__link{background-color:#252830;border-bottom:1px solid #131417;padding:20px;width:100%}}.nav__toggle{display:none}.footer{padding:40px 0}.modal{bottom:0;display:flex;flex-direction:column;left:0;overflow-y:auto;position:fixed;right:0;top:0;z-index:1000;-webkit-overflow-scrolling:touch;background-color:rgba(0,0,0,.8);opacity:0;pointer-events:none;transform:scale(1.2);transition:opacity .6s cubic-bezier(.55,0,.1,1),transform .6s cubic-bezier(.55,0,.1,1),visibility .6s cubic-bezier(.55,0,.1,1);visibility:hidden;-ms-overflow-style:none;scrollbar-width:none}.modal::-webkit-scrollbar{display:none}.modal__wrapper{align-items:center;display:flex;flex-shrink:0;justify-content:center;min-height:100%;padding:60px 40px;position:relative;width:100%}@media (max-width:767px){.modal__wrapper{padding:60px 16px}}.modal__overlay{cursor:pointer;height:100%;left:0;position:absolute;top:0;width:100%}.modal__content{background-color:#fff;padding:40px;position:relative;width:600px}@media (max-width:767px){.modal__content{padding:20px;width:100%}}.modal__close-btn{background:rgba(255,255,255,0);border:none;cursor:pointer;height:40px;padding:0;position:absolute;right:22px;top:22px;width:40px;z-index:1}.modal--responsive .modal__content{width:100%}.modal--fit-content .modal__content{width:auto}@media (max-width:767px){.modal--fit-content .modal__content{width:100%}}.modal--no-scale{transform:none}.modal--preload{transition:none}.modal.is-active{opacity:1;pointer-events:auto;transform:scale(1);visibility:visible}.btn{border:none;color:#fff;cursor:pointer;display:inline-flex;padding:10px 20px;transition:opacity .3s ease}.btn:disabled{opacity:.5;pointer-events:none}@media (hover:hover){.btn:hover:not(.focus-visible){opacity:.8}}.btn.focus-visible:focus{opacity:.8}.dropdown{cursor:pointer;position:relative}@media (hover:hover){.dropdown:hover:not(.focus-visible) .dropdown__content{opacity:1;pointer-events:auto;transition:opacity .3s ease}.dropdown:hover:not(.focus-visible):after{transform:rotate(0)}}.dropdown.focus-visible:focus .dropdown__content{opacity:1;pointer-events:auto;transition:opacity .3s ease}.dropdown.focus-visible:focus:after{transform:rotate(0)}.dropdown:after{background-color:#f2994a;-webkit-clip-path:polygon(50% 0,0 100%,100% 100%);clip-path:polygon(50% 0,0 100%,100% 100%);content:"";display:block;height:6px;margin:0 0 0 8px;position:absolute;right:-20px;transform:rotate(180deg);transition:transform .3s ease;width:8px}@media (max-width:1023px){.dropdown:after{display:none}}.dropdown__wrapper{bottom:0;position:absolute;width:100%}@media (max-width:1023px){.dropdown__wrapper{position:static}}.dropdown__content,.dropdown__sub-content{opacity:0;pointer-events:none;position:absolute}@media (max-width:1023px){.dropdown__content,.dropdown__sub-content{opacity:1;position:static}}.dropdown__content{left:-19px;top:0}.dropdown__sub-content{bottom:0;left:100%;padding-left:22px}@media (max-width:1023px){.dropdown__sub-content{padding:0}}@media (hover:hover){.dropdown__sub:hover:not(.focus-visible) .dropdown__sub-content{opacity:1;pointer-events:auto;transition:opacity .3s ease}}.dropdown__sub.focus-visible:focus .dropdown__sub-content{opacity:1;pointer-events:auto;transition:opacity .3s ease}.dropdown__text{align-items:center;display:flex}@media (max-width:1023px){.dropdown__text{background-color:#252830;border-bottom:1px solid #131417;padding:20px;width:100%}.dropdown__text:after{background-color:#f2994a;-webkit-clip-path:polygon(50% 0,0 100%,100% 100%);clip-path:polygon(50% 0,0 100%,100% 100%);content:"";display:block;height:6px;margin:0 0 0 8px;transform:rotate(180deg);transition:transform .3s ease;width:8px}}.is-active.dropdown .dropdown__text{background-color:#131417}@media (max-width:1023px){.dropdown.is-active .dropdown__text:after{transform:rotate(0)}.is-active.dropdown__sub-wrapper .dropdown__sub-text{background-color:#131417}.dropdown__sub-wrapper.is-active .dropdown__sub-text:after{transform:rotate(180deg)}}.dropdown__sub-wrapper{overflow:hidden}.dropdown__sub-text{display:block;position:relative}@media (max-width:1023px){.dropdown__sub-text{align-items:center;display:flex}}.dropdown__sub-text:after{background-color:#f2994a;-webkit-clip-path:polygon(50% 0,0 100%,100% 100%);clip-path:polygon(50% 0,0 100%,100% 100%);content:"";display:block;height:6px;margin:0 0 0 8px;position:absolute;right:18px;top:16px;transform:rotate(-90deg);transition:transform .3s ease;width:8px}@media (max-width:1023px){.dropdown__sub-text:after{position:static;transform:none}}@media (hover:hover){.dropdown__sub-text:hover:not(.focus-visible):after{transform:rotate(90deg)}}.dropdown__sub-text.focus-visible:focus:after{transform:rotate(90deg)}@media (max-width:1023px) and (hover:hover){.dropdown__sub-text:hover:not(.focus-visible):after{transform:none}}@media (max-width:1023px){.dropdown__sub-text.focus-visible:focus:after{transform:none}}.link{align-items:center;color:#fff;display:flex;font-size:18px;font-weight:500;line-height:24px;transition:color .3s ease}@media (hover:hover){.link:hover:not(.focus-visible){color:#eb5757}}.link.focus-visible:focus{color:#eb5757}.link__icon{display:block;height:24px;margin-right:10px;width:24px}.link__icon svg{height:100%;width:100%}.menu-toggle-btn{align-items:center;background:none;border:none;display:flex;height:24px;justify-content:center;margin:0;padding:0;width:44px}.menu-toggle-btn svg{height:12px;width:22px}@media (max-width:1023px){[data-accordion=element].is-active>[data-accordion=content]{max-height:100%}[data-accordion=parent].no-transition [data-accordion=content]{transition:none}[data-accordion=content]{max-height:0;overflow:hidden;transition:max-height .3s}}.main__img,.main__img img{height:auto;width:100%}.main__img img{-o-object-fit:cover;object-fit:cover}\n/*$vite$:1*/',document.head.appendChild(t);const e=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;class o{constructor(){this._iosChecker=e,this._lockClass=this._iosChecker()?"scroll-lock-ios":"scroll-lock",this._scrollTop=null,this._fixedBlockElements=document.querySelectorAll("[data-fix-block]")}_getScrollbarWidth(){return window.innerWidth-document.documentElement.clientWidth}_getBodyScrollTop(){return self.pageYOffset||document.documentElement&&document.documentElement.ScrollTop||document.body&&document.body.scrollTop}disableScrolling(){this._scrollTop=document.body.dataset.scroll=document.body.dataset.scroll?document.body.dataset.scroll:this._getBodyScrollTop(),this._getScrollbarWidth()&&(document.body.style.paddingRight=`${this._getScrollbarWidth()}px`,this._fixedBlockElements.forEach((t=>{t.style.paddingRight=`${this._getScrollbarWidth()}px`}))),document.body.style.top=`-${this._scrollTop}px`,document.body.classList.add(this._lockClass)}enableScrolling(){document.body.classList.remove(this._lockClass),window.scrollTo(0,+document.body.dataset.scroll),document.body.style.paddingRight=null,document.body.style.top=null,this._fixedBlockElements.forEach((t=>{t.style.paddingRight=null})),document.body.removeAttribute("data-scroll"),this._scrollTop=null}}window.scrollLock=new o;class i{constructor(){this._openHeight=0,this._windowWidth=window.innerWidth,this._documentClickHandler=this._documentClickHandler.bind(this),this._windowResizeHandler=this._windowResizeHandler.bind(this),this._init()}_init(){this.fullUpdate(),document.addEventListener("click",this._documentClickHandler),window.addEventListener("resize",this._windowResizeHandler)}_documentClickHandler(t){const e=t.target;if(!e.closest('[data-accordion="button"]'))return;t.preventDefault();const o=e.closest('[data-accordion="parent"]');if(o.dataset.destroy&&!window.matchMedia(o.dataset.destroy).matches)return;const i=e.closest('[data-accordion="element"]');i.classList.contains("is-active")?this.closeAccordion(i):this.openAccordion(i)}_windowResizeHandler(){this._windowWidth!==window.innerWidth&&(this._windowWidth=window.innerWidth,this.updateAccordionsHeight())}closeAllAccordion(t){t.querySelectorAll('[data-accordion="element"]').forEach((e=>{e.closest('[data-accordion="parent"]')===t&&this.closeAccordion(e)}))}updateAccordionsHeight(t=null){if(t){const e=t.querySelector('[data-accordion="content"]');return e.style.transition="none",e.style.maxHeight=`${e.scrollHeight}px`,void setTimeout((()=>{e.style.transition=null}))}document.querySelectorAll('[data-accordion="element"]:not(.is-active)').forEach((t=>{const e=t.closest('[data-accordion="parent"]'),o=t.querySelector('[data-accordion="content"]');if(e.dataset.destroy&&!window.matchMedia(e.dataset.destroy).matches)return o.style.maxHeight="100%",void(o.style.maxHeight=null);o.style.maxHeight=null})),document.querySelectorAll('[data-accordion="element"].is-active').forEach((t=>{const e=t.querySelector('[data-accordion="content"]'),o=t.closest('[data-accordion="parent"]');!o.dataset.destroy||window.matchMedia(o.dataset.destroy).matches?(e.style.transition="none",e.style.maxHeight=`${e.scrollHeight}px`,setTimeout((()=>{e.style.transition=null}))):e.style.maxHeight="100%"}))}fullUpdate(t=null,e=!1){let o;o=t?t.querySelectorAll('[data-accordion="element"].is-active'):document.querySelectorAll('[data-accordion="element"].is-active'),o.forEach((t=>{t.querySelector('[data-accordion="parent"]')||this.openAccordion(t,e)})),this.updateAccordionsHeight()}openAccordion(t,e=!0){const o=t.closest('[data-accordion="parent"]'),i=t.querySelector('[data-accordion="content"]');this._openHeight+=i.scrollHeight,o.hasAttribute("data-single")&&this.closeAllAccordion(o),t.classList.add("is-active"),e?i.style.maxHeight=`${this._openHeight}px`:(i.style.transition="none",i.style.maxHeight=`${this._openHeight}px`,setTimeout((()=>{i.style.transition=null}))),o.closest('[data-accordion="element"]')?this.openAccordion(o.closest('[data-accordion="element"]'),e):this._openHeight=0}closeAccordion(t,e=!0){const o=t.querySelector('[data-accordion="content"]');o&&(t.classList.remove("is-active"),e?o.style.maxHeight="0":(o.style.transition="none",o.style.maxHeight="0",setTimeout((()=>{o.style.transition=null}))))}}let n;window.addEventListener("DOMContentLoaded",(()=>{(()=>{if((!window.MSInputMethodContext||!document.documentMode)&&e()){let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`),window.addEventListener("resize",(function(){t=.01*window.innerHeight,document.documentElement.style.setProperty("--vh",`${t}px`)}))}})(),window.addEventListener("load",(()=>{(()=>{const t=new o,e=document.querySelector("[data-menu-toggle-btn]"),i=document.querySelector("body"),n=document.querySelector("[data-header]"),a=document.querySelector(":root");e&&((()=>{if(!n)return;const t=n.offsetHeight;a.style.setProperty("--header-height",`${t}px`)})(),e.addEventListener("click",(()=>{i.classList.contains("scroll-lock")?t.enableScrolling():t.disableScrolling(),i.classList.toggle("is-menu-open")})))})(),n=new i,window.accordions=n}))}))}}}));
