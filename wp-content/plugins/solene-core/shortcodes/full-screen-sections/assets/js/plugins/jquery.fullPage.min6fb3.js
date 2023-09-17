/*!
 * fullPage 2.9.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var a="fullpage-wrapper",l="."+a,r="fp-responsive",s="fp-notransition",c="fp-destroyed",d="fp-enabled",f="fp-viewing",u="active",h="."+u,p="fp-completely",v="."+p,g=".section",m="fp-section",w="."+m,y=w+h,S=w+":first",b=w+":last",x="fp-tableCell",C="."+x,T="fp-auto-height",k="fp-normal-scroll",L="fp-nav",A="#"+L,O="fp-tooltip",I="."+O,E="fp-show-active",M=".slide",B="fp-slide",R="."+B,z=R+h,H="fp-slides",D="."+H,P="fp-slidesContainer",q="."+P,F="fp-table",V="fp-slidesNav",j="."+V,Y=j+" a",N="fp-controlArrow",X="."+N,U="fp-prev",W="."+U,K=N+" "+U,_=X+W,Q="fp-next",G="."+Q,J=N+" "+Q,Z=X+G,$=e(n),ee=e(t);e.fn.fullpage=function(N){function W(n,t){n||Zn(0),ot("autoScrolling",n,t);var o=e(y);N.autoScrolling&&!N.scrollBar?(lt.css({overflow:"hidden",height:"100%"}),Q(Rt.recordHistory,"internal"),gt.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&Zn(o.position().top)):(lt.css({overflow:"visible",height:"initial"}),Q(!1,"internal"),gt.css({"-ms-touch-action":"","touch-action":""}),o.length&&lt.scrollTop(o.position().top))}function Q(e,n){ot("recordHistory",e,n)}function G(e,n){ot("scrollingSpeed",e,n)}function ne(e,n){ot("fitToSection",e,n)}function te(e){N.lockAnchors=e}function oe(e){e?(Xn(),Un()):(Nn(),Wn())}function ie(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){et(n,t,"m")})):(et(n,"all","m"),n?(oe(!0),Kn()):(oe(!1),_n()))}function ae(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){et(n,t,"k")})):(et(n,"all","k"),N.keyboardScrolling=n)}function le(){var n=e(y).prev(w);n.length||!N.loopTop&&!N.continuousVertical||(n=e(w).last()),n.length&&Ne(n,null,!0)}function re(){var n=e(y).next(w);n.length||!N.loopBottom&&!N.continuousVertical||(n=e(w).first()),n.length&&Ne(n,null,!1)}function se(e,n){G(0,"internal"),ce(e,n),G(Rt.scrollingSpeed,"internal")}function ce(e,n){var t=Rn(e);"undefined"!=typeof n?Hn(e,n):t.length>0&&Ne(t)}function de(e){Ve("right",e)}function fe(e){Ve("left",e)}function ue(n){if(!gt.hasClass(c)){wt=!0,mt=$.height(),e(w).each(function(){var n=e(this).find(D),t=e(this).find(R);N.verticalCentered&&e(this).find(C).css("height",Mn(e(this))+"px"),e(this).css("height",mt+"px"),t.length>1&&mn(n,n.find(z))}),N.scrollOverflow&&Ct.createScrollBarForAll();var t=e(y),o=t.index(w);o&&se(o+1),wt=!1,e.isFunction(N.afterResize)&&n&&N.afterResize.call(gt),e.isFunction(N.afterReBuild)&&!n&&N.afterReBuild.call(gt)}}function he(n){var t=rt.hasClass(r);n?t||(W(!1,"internal"),ne(!1,"internal"),e(A).hide(),rt.addClass(r),e.isFunction(N.afterResponsive)&&N.afterResponsive.call(gt,n)):t&&(W(Rt.autoScrolling,"internal"),ne(Rt.autoScrolling,"internal"),e(A).show(),rt.removeClass(r),e.isFunction(N.afterResponsive)&&N.afterResponsive.call(gt,n))}function pe(){N.css3&&(N.css3=Yn()),N.scrollBar=N.scrollBar||N.hybrid,ge(),me(),ie(!0),W(N.autoScrolling,"internal"),xn(),jn(),"complete"===t.readyState&&nn(),$.on("load",nn)}function ve(){$.on("scroll",Ie).on("hashchange",tn).blur(fn).resize(bn),ee.keydown(an).keyup(rn).on("click touchstart",A+" a",un).on("click touchstart",Y,hn).on("click",I,ln),e(w).on("click touchstart",X,dn),N.normalScrollElements&&(ee.on("mouseenter touchstart",N.normalScrollElements,function(){ie(!1)}),ee.on("mouseleave touchend",N.normalScrollElements,function(){ie(!0)}))}function ge(){var n=gt.find(N.sectionSelector);N.anchors.length||(N.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),N.navigationTooltips.length||(N.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function me(){gt.css({height:"100%",position:"relative"}),gt.addClass(a),e("html").addClass(d),mt=$.height(),gt.removeClass(c),be(),e(w).each(function(n){var t=e(this),o=t.find(R),i=o.length;t.data("fp-styles",t.attr("style")),ye(t,n),Se(t,n),i>0?we(t,o,i):N.verticalCentered&&En(t)}),N.fixedElements&&N.css3&&e(N.fixedElements).appendTo(rt),N.navigation&&Ce(),Te(),N.scrollOverflow?Ct=N.scrollOverflowHandler.init(N):Ae()}function we(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+P+'" />'),t.parent().wrap('<div class="'+H+'" />'),n.find(q).css("width",i+"%"),o>1&&(N.controlArrows&&xe(n),N.slidesNavigation&&Pn(n,o)),t.each(function(n){e(this).css("width",a+"%"),N.verticalCentered&&En(e(this))});var l=n.find(z);l.length&&(0!==e(y).index(w)||0===e(y).index(w)&&0!==l.index())?Jn(l,"internal"):t.eq(0).addClass(u)}function ye(n,t){t||0!==e(y).length||n.addClass(u),ut=e(y),n.css("height",mt+"px"),N.paddingTop&&n.css("padding-top",N.paddingTop),N.paddingBottom&&n.css("padding-bottom",N.paddingBottom),"undefined"!=typeof N.sectionsColor[t]&&n.css("background-color",N.sectionsColor[t]),"undefined"!=typeof N.anchors[t]&&n.attr("data-anchor",N.anchors[t])}function Se(n,t){"undefined"!=typeof N.anchors[t]&&n.hasClass(u)&&An(N.anchors[t],t),N.menu&&N.css3&&e(N.menu).closest(l).length&&e(N.menu).appendTo(rt)}function be(){gt.find(N.sectionSelector).addClass(m),gt.find(N.slideSelector).addClass(B)}function xe(e){e.find(D).after('<div class="'+K+'"></div><div class="'+J+'"></div>'),"#fff"!=N.controlArrowColor&&(e.find(Z).css("border-color","transparent transparent transparent "+N.controlArrowColor),e.find(_).css("border-color","transparent "+N.controlArrowColor+" transparent transparent")),N.loopHorizontal||e.find(_).hide()}function Ce(){rt.append('<div id="'+L+'"><ul></ul></div>');var n=e(A);n.addClass(function(){return N.showActiveTooltip?E+" "+N.navigationPosition:N.navigationPosition});for(var t=0;t<e(w).length;t++){var o="";N.anchors.length&&(o=N.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=N.navigationTooltips[t];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+O+" "+N.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(A).css("margin-top","-"+e(A).height()/2+"px"),e(A).find("li").eq(e(y).index(w)).find("a").addClass(u)}function Te(){gt.find('iframe[src*="youtube.com/embed/"]').each(function(){ke(e(this),"enablejsapi=1")})}function ke(e,n){var t=e.attr("src");e.attr("src",t+Le(t)+n)}function Le(e){return/\?/.test(e)?"&":"?"}function Ae(){var n=e(y);n.addClass(p),Ge(n),Je(n),N.scrollOverflow&&N.scrollOverflowHandler.afterLoad(),Oe()&&e.isFunction(N.afterLoad)&&N.afterLoad.call(n,n.data("anchor"),n.index(w)+1),e.isFunction(N.afterRender)&&N.afterRender.call(gt)}function Oe(){var e=Rn(on().section);return!e||e.length&&e.index()===ut.index()}function Ie(){var n;if(!N.autoScrolling||N.scrollBar){var o=$.scrollTop(),i=Be(o),a=0,l=o+$.height()/2,r=rt.height()-$.height()===o,s=t.querySelectorAll(w);if(r)a=s.length-1;else if(o)for(var c=0;c<s.length;++c){var d=s[c];d.offsetTop<=l&&(a=c)}else a=0;if(Me(i)&&(e(y).hasClass(p)||e(y).addClass(p).siblings().removeClass(p)),n=e(s).eq(a),!n.hasClass(u)){zt=!0;var f,h,v=e(y),g=v.index(w)+1,m=On(n),S=n.data("anchor"),b=n.index(w)+1,x=n.find(z);x.length&&(h=x.data("anchor"),f=x.index()),St&&(n.addClass(u).siblings().removeClass(u),e.isFunction(N.onLeave)&&N.onLeave.call(v,g,b,m),e.isFunction(N.afterLoad)&&N.afterLoad.call(n,S,b),$e(v),Ge(n),Je(n),An(S,b-1),N.anchors.length&&(ct=S),qn(f,h,S,b)),clearTimeout(At),At=setTimeout(function(){zt=!1},100)}N.fitToSection&&(clearTimeout(Ot),Ot=setTimeout(function(){N.fitToSection&&e(y).outerHeight()<=mt&&Ee()},N.fitToSectionDelay))}}function Ee(){St&&(wt=!0,Ne(e(y)),wt=!1)}function Me(n){var t=e(y).position().top,o=t+$.height();return"up"==n?o>=$.scrollTop()+$.height():t<=$.scrollTop()}function Be(e){var n=e>Ht?"down":"up";return Ht=e,jt=e,n}function Re(n){if(xt.m[n]){var t="down"===n?re:le;if(N.scrollOverflow){var o=N.scrollOverflowHandler.scrollable(e(y)),i="down"===n?"bottom":"top";if(o.length>0){if(!N.scrollOverflowHandler.isScrolled(i,o))return!0;t()}else t()}else t()}}function ze(e){var n=e.originalEvent;N.autoScrolling&&De(n)&&e.preventDefault()}function He(n){var t=n.originalEvent,i=e(t.target).closest(w);if(De(t)){N.autoScrolling&&n.preventDefault();var a=Gn(t);qt=a.y,Ft=a.x,i.find(D).length&&o.abs(Pt-Ft)>o.abs(Dt-qt)?!ht&&o.abs(Pt-Ft)>$.outerWidth()/100*N.touchSensitivity&&(Pt>Ft?xt.m.right&&de(i):xt.m.left&&fe(i)):N.autoScrolling&&St&&o.abs(Dt-qt)>$.height()/100*N.touchSensitivity&&(Dt>qt?Re("down"):qt>Dt&&Re("up"))}}function De(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Pe(e){var n=e.originalEvent;if(N.fitToSection&&lt.stop(),De(n)){var t=Gn(n);Dt=t.y,Pt=t.x}}function qe(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function Fe(t){var i=(new Date).getTime(),a=e(v).hasClass(k);if(N.autoScrolling&&!ft&&!a){t=t||n.event;var l=t.wheelDelta||-t.deltaY||-t.detail,r=o.max(-1,o.min(1,l)),s="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,c=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!s;bt.length>149&&bt.shift(),bt.push(o.abs(l)),N.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var d=i-Vt;if(Vt=i,d>200&&(bt=[]),St){var f=qe(bt,10),u=qe(bt,70),h=f>=u;h&&c&&Re(r<0?"down":"up")}return!1}N.fitToSection&&lt.stop()}function Ve(n,t){var o="undefined"==typeof t?e(y):t,i=o.find(D),a=i.find(R).length;if(!(!i.length||ht||a<2)){var l=i.find(z),r=null;if(r="left"===n?l.prev(R):l.next(R),!r.length){if(!N.loopHorizontal)return;r="left"===n?l.siblings(":last"):l.siblings(":first")}ht=!0,mn(i,r,n)}}function je(){e(z).each(function(){Jn(e(this),"internal")})}function Ye(e){var n=e.position(),t=n.top,o=n.top>jt,i=t-mt+e.outerHeight(),a=N.bigSectionsDestination;return e.outerHeight()>mt?(o||a)&&"bottom"!==a||(t=i):(o||wt&&e.is(":last-child"))&&(t=i),jt=t,t}function Ne(n,t,o){if("undefined"!=typeof n){var i,a,l=Ye(n),r={element:n,callback:t,isMovementUp:o,dtop:l,yMovement:On(n),anchorLink:n.data("anchor"),sectionIndex:n.index(w),activeSlide:n.find(z),activeSection:e(y),leavingSection:e(y).index(w)+1,localIsResizing:wt};r.activeSection.is(n)&&!wt||N.scrollBar&&$.scrollTop()===r.dtop&&!n.hasClass(T)||(r.activeSlide.length&&(i=r.activeSlide.data("anchor"),a=r.activeSlide.index()),e.isFunction(N.onLeave)&&!r.localIsResizing&&N.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement)===!1||(N.autoScrolling&&N.continuousVertical&&"undefined"!=typeof r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&(r=We(r)),r.localIsResizing||$e(r.activeSection),N.scrollOverflow&&N.scrollOverflowHandler.beforeLeave(),n.addClass(u).siblings().removeClass(u),Ge(n),N.scrollOverflow&&N.scrollOverflowHandler.onLeave(),St=!1,qn(a,i,r.anchorLink,r.sectionIndex),Xe(r),ct=r.anchorLink,An(r.anchorLink,r.sectionIndex)))}}function Xe(n){if(N.css3&&N.autoScrolling&&!N.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";Bn(t,!0),N.scrollingSpeed?(clearTimeout(kt),kt=setTimeout(function(){_e(n)},N.scrollingSpeed)):_e(n)}else{var i=Ue(n);e(i.element).animate(i.options,N.scrollingSpeed,N.easing).promise().done(function(){N.scrollBar?setTimeout(function(){_e(n)},30):_e(n)})}}function Ue(e){var n={};return N.autoScrolling&&!N.scrollBar?(n.options={top:-e.dtop},n.element=l):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function We(n){return n.isMovementUp?e(y).before(n.activeSection.nextAll(w)):e(y).after(n.activeSection.prevAll(w).get().reverse()),Zn(e(y).position().top),je(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=On(n.element),n.leavingSection=n.activeSection.index(w)+1,n.sectionIndex=n.element.index(w),n}function Ke(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(S).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),Zn(e(y).position().top),je())}function _e(n){Ke(n),e.isFunction(N.afterLoad)&&!n.localIsResizing&&N.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),N.scrollOverflow&&N.scrollOverflowHandler.afterLoad(),n.localIsResizing||Je(n.element),n.element.addClass(p).siblings().removeClass(p),St=!0,e.isFunction(n.callback)&&n.callback.call(this)}function Qe(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function Ge(n){if(N.lazyLoading){var t,o=en(n);o.find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(t=e(this),e.each(["src","srcset"],function(e,n){var o=t.attr("data-"+n);"undefined"!=typeof o&&o&&Qe(t,n)}),t.is("source")){var n=t.closest("video").length?"video":"audio";t.closest(n).get(0).load()}})}}function Je(n){var t=en(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&Ze(n),n.onload=function(){n.hasAttribute("data-autoplay")&&Ze(n)}})}function Ze(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function $e(n){var t=en(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function en(n){var t=n.find(z);return t.length&&(n=e(t)),n}function nn(){var e=on(),n=e.section,t=e.slide;n&&(N.animateAnchor?Hn(n,t):se(n,t))}function tn(){if(!zt&&!N.lockAnchors){var e=on(),n=e.section,t=e.slide,o="undefined"==typeof ct,i="undefined"==typeof ct&&"undefined"==typeof t&&!ht;n.length&&(n&&n!==ct&&!o||i||!ht&&dt!=t)&&Hn(n,t)}}function on(){var e,t,o=n.location.hash;if(o.length){var i=o.replace("#","").split("../index.html"),a=o.indexOf("#/")>-1;e=a?"/"+i[1]:decodeURIComponent(i[0]);var l=a?i[2]:i[1];l&&l.length&&(t=decodeURIComponent(l))}return{section:e,slide:t}}function an(n){clearTimeout(It);var t=e(":focus"),o=n.which;if(9===o)vn(n);else if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&N.keyboardScrolling&&N.autoScrolling){var i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),ft=n.ctrlKey,It=setTimeout(function(){pn(n)},150)}}function ln(){e(this).prev().trigger("click")}function rn(e){yt&&(ft=e.ctrlKey)}function sn(e){2==e.which&&(Yt=e.pageY,gt.on("mousemove",gn))}function cn(e){2==e.which&&gt.off("mousemove")}function dn(){var n=e(this).closest(w);e(this).hasClass(U)?xt.m.left&&fe(n):xt.m.right&&de(n)}function fn(){yt=!1,ft=!1}function un(n){n.preventDefault();var t=e(this).parent().index();Ne(e(w).eq(t))}function hn(n){n.preventDefault();var t=e(this).closest(w).find(D),o=t.find(R).eq(e(this).closest("li").index());mn(t,o)}function pn(n){var t=n.shiftKey;if(St||!([37,39].indexOf(n.which)<0))switch(n.which){case 38:case 33:xt.k.up&&le();break;case 32:if(t&&xt.k.up){le();break}case 40:case 34:xt.k.down&&re();break;case 36:xt.k.up&&ce(1);break;case 35:xt.k.down&&ce(e(w).length);break;case 37:xt.k.left&&fe();break;case 39:xt.k.right&&de();break;default:return}}function vn(n){function t(e){return e.preventDefault(),s.first().focus()}var o=n.shiftKey,i=e(":focus"),a=e(y),l=a.find(z),r=l.length?l:a,s=r.find(Bt);i.length?i.closest(y,z).length||(i=t(n)):t(n),(!o&&i.is(s.last())||o&&i.is(s.first()))&&n.preventDefault()}function gn(e){St&&(e.pageY<Yt&&xt.m.up?le():e.pageY>Yt&&xt.m.down&&re()),Yt=e.pageY}function mn(n,t,o){var i=n.closest(w),a={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(w),anchorLink:i.data("anchor"),slidesNav:i.find(j),slideAnchor:Vn(t),prevSlide:i.find(z),prevSlideIndex:i.find(z).index(),localIsResizing:wt};return a.xMovement=In(a.prevSlideIndex,a.slideIndex),a.localIsResizing||(St=!1),N.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&e.isFunction(N.onSlideLeave)&&N.onSlideLeave.call(a.prevSlide,a.anchorLink,a.sectionIndex+1,a.prevSlideIndex,a.direction,a.slideIndex)===!1?void(ht=!1):(t.addClass(u).siblings().removeClass(u),a.localIsResizing||($e(a.prevSlide),Ge(t)),!N.loopHorizontal&&N.controlArrows&&(i.find(_).toggle(0!==a.slideIndex),i.find(Z).toggle(!t.is(":last-child"))),i.hasClass(u)&&!a.localIsResizing&&qn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),void yn(n,a,!0))}function wn(n){Sn(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(N.afterSlideLoad)&&N.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),St=!0,Je(n.destiny)),ht=!1}function yn(e,n,t){var i=n.destinyPos;if(N.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";Cn(e.find(q)).css($n(a)),Lt=setTimeout(function(){t&&wn(n)},N.scrollingSpeed,N.easing)}else e.animate({scrollLeft:o.round(i.left)},N.scrollingSpeed,N.easing,function(){t&&wn(n)})}function Sn(e,n){e.find(h).removeClass(u),e.find("li").eq(n).find("a").addClass(u)}function bn(){if(xn(),pt){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=$.height();o.abs(i-Nt)>20*o.max(Nt,i)/100&&(ue(!0),Nt=i)}}else clearTimeout(Tt),Tt=setTimeout(function(){ue(!0)},350)}function xn(){var e=N.responsive||N.responsiveWidth,n=N.responsiveHeight,t=e&&$.outerWidth()<e,o=n&&$.height()<n;e&&n?he(t||o):e?he(t):n&&he(o)}function Cn(e){var n="all "+N.scrollingSpeed+"ms "+N.easingcss3;return e.removeClass(s),e.css({"-webkit-transition":n,transition:n})}function Tn(e){return e.addClass(s)}function kn(n,t){N.navigation&&(e(A).find(h).removeClass(u),n?e(A).find('a[href="#'+n+'"]').addClass(u):e(A).find("li").eq(t).find("a").addClass(u))}function Ln(n){N.menu&&(e(N.menu).find(h).removeClass(u),e(N.menu).find('[data-menuanchor="'+n+'"]').addClass(u))}function An(e,n){Ln(e),kn(e,n)}function On(n){var t=e(y).index(w),o=n.index(w);return t==o?"none":t>o?"up":"down"}function In(e,n){return e==n?"none":e>n?"left":"right"}function En(e){e.hasClass(F)||e.addClass(F).wrapInner('<div class="'+x+'" style="height:'+Mn(e)+'px;" />')}function Mn(e){var n=mt;if(N.paddingTop||N.paddingBottom){var t=e;t.hasClass(m)||(t=e.closest(w));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=mt-o}return n}function Bn(e,n){n?Cn(gt):Tn(gt),gt.css($n(e)),setTimeout(function(){gt.removeClass(s)},10)}function Rn(n){var t=gt.find(w+'[data-anchor="'+n+'"]');if(!t.length){var o="undefined"!=typeof n?n-1:0;t=e(w).eq(o)}return t}function zn(e,n){var t=n.find(R+'[data-anchor="'+e+'"]');return t.length||(e="undefined"!=typeof e?e:0,t=n.find(R).eq(e)),t}function Hn(e,n){var t=Rn(e);if(t.length){var o=zn(n,t);e===ct||t.hasClass(u)?Dn(o):Ne(t,function(){Dn(o)})}}function Dn(e){e.length&&mn(e.closest(D),e)}function Pn(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var t=e.find(j);t.addClass(N.slidesNavPosition);for(var o=0;o<n;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(u)}function qn(e,n,t,o){var i="";N.anchors.length&&!N.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),dt=n,Fn(i+"/"+n)):"undefined"!=typeof e?(dt=n,Fn(t)):Fn(t)),jn()}function Fn(e){if(N.recordHistory)location.hash=e;else if(pt||vt)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function Vn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function jn(){var n=e(y),t=n.find(z),o=Vn(n),i=Vn(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("../index.html","-").replace("#","");var l=new RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");rt[0].className=rt[0].className.replace(l,""),rt.addClass(f+"-"+a)}function Yn(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var l in a)o.style[l]!==i&&(o.style[l]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[l]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function Nn(){t.addEventListener?(t.removeEventListener("mousewheel",Fe,!1),t.removeEventListener("wheel",Fe,!1),t.removeEventListener("MozMousePixelScroll",Fe,!1)):t.detachEvent("onmousewheel",Fe)}function Xn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",Fe,!1):t[e](o+a,Fe,!1)}function Un(){gt.on("mousedown",sn).on("mouseup",cn)}function Wn(){gt.off("mousedown",sn).off("mouseup",cn)}function Kn(){(pt||vt)&&(N.autoScrolling&&rt.off(Mt.touchmove).on(Mt.touchmove,ze),e(l).off(Mt.touchstart).on(Mt.touchstart,Pe).off(Mt.touchmove).on(Mt.touchmove,He))}function _n(){(pt||vt)&&(N.autoScrolling&&rt.off(Mt.touchmove),e(l).off(Mt.touchstart).off(Mt.touchmove))}function Qn(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Gn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,vt&&De(e)&&(N.scrollBar||!N.autoScrolling)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function Jn(e,n){G(0,"internal"),"undefined"!=typeof n&&(wt=!0),mn(e.closest(D),e),"undefined"!=typeof n&&(wt=!1),G(Rt.scrollingSpeed,"internal")}function Zn(e){var n=o.round(e);if(N.css3&&N.autoScrolling&&!N.scrollBar){var t="translate3d(0px, -"+n+"px, 0px)";Bn(t,!1)}else N.autoScrolling&&!N.scrollBar?gt.css("top",-n):lt.scrollTop(n)}function $n(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function et(n,t,o){"all"!==t?xt[o][t]=n:e.each(Object.keys(xt[o]),function(e,t){xt[o][t]=n})}function nt(n){W(!1,"internal"),ie(!1),ae(!1),gt.addClass(c),clearTimeout(Lt),clearTimeout(kt),clearTimeout(Tt),clearTimeout(At),clearTimeout(Ot),$.off("scroll",Ie).off("hashchange",tn).off("resize",bn),ee.off("click touchstart",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click touchstart",Y).off("mouseover",N.normalScrollElements).off("mouseout",N.normalScrollElements),e(w).off("click touchstart",X),clearTimeout(Lt),clearTimeout(kt),n&&tt()}function tt(){Zn(0),gt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){Qe(e(this),"src")}),gt.find("img[data-srcset]").each(function(){Qe(e(this),"srcset")}),e(A+", "+j+", "+X).remove(),e(w).css({height:"","background-color":"",padding:""}),e(R).css({width:""}),gt.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),lt.css({overflow:"",height:""}),e("html").removeClass(d),rt.removeClass(r),e.each(rt.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(f)&&rt.removeClass(n)}),e(w+", "+R).each(function(){N.scrollOverflowHandler&&N.scrollOverflowHandler.remove(e(this)),e(this).removeClass(F+" "+u),e(this).attr("style",e(this).data("fp-styles"))}),Tn(gt),gt.find(C+", "+q+", "+D).each(function(){e(this).replaceWith(this.childNodes)}),gt.css({"-webkit-transition":"none",transition:"none"}),lt.scrollTop(0);var n=[m,B,P];e.each(n,function(n,t){e("."+t).removeClass(t)})}function ot(e,n,t){N[e]=n,"internal"!==t&&(Rt[e]=n)}function it(){var n=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];return e("html").hasClass(d)?void at("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(N.continuousVertical&&(N.loopTop||N.loopBottom)&&(N.continuousVertical=!1,at("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),N.scrollBar&&N.scrollOverflow&&at("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!N.continuousVertical||!N.scrollBar&&N.autoScrolling||(N.continuousVertical=!1,at("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),N.scrollOverflow&&!N.scrollOverflowHandler&&(N.scrollOverflow=!1,at("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),e.each(n,function(e,n){N[n]&&at("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),void e.each(N.anchors,function(n,t){var o=ee.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=ee.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(at("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&at("error",'"'+t+'" is is being used by another element `id` property'),o.length&&at("error",'"'+t+'" is is being used by another element `name` property'))}))}function at(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(d))return void it();var lt=e("html, body"),rt=e("body"),st=e.fn.fullpage;N=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fn.fp_scrolloverflow?e.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:g,slideSelector:M,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},N);var ct,dt,ft,ut,ht=!1,pt=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),vt="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,gt=e(this),mt=$.height(),wt=!1,yt=!0,St=!0,bt=[],xt={};xt.m={up:!0,down:!0,left:!0,right:!0},xt.k=e.extend(!0,{},xt.m);var Ct,Tt,kt,Lt,At,Ot,It,Et=Qn(),Mt={touchmove:"ontouchmove"in n?"touchmove":Et.move,touchstart:"ontouchstart"in n?"touchstart":Et.down},Bt='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Rt=e.extend(!0,{},N);it(),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(st.version="2.9.5",st.setAutoScrolling=W,st.setRecordHistory=Q,st.setScrollingSpeed=G,st.setFitToSection=ne,st.setLockAnchors=te,st.setMouseWheelScrolling=oe,st.setAllowScrolling=ie,st.setKeyboardScrolling=ae,st.moveSectionUp=le,st.moveSectionDown=re,st.silentMoveTo=se,st.moveTo=ce,st.moveSlideRight=de,st.moveSlideLeft=fe,st.fitToSection=Ee,st.reBuild=ue,st.setResponsive=he,st.destroy=nt,st.shared={afterRenderActions:Ae},pe(),ve());var zt=!1,Ht=0,Dt=0,Pt=0,qt=0,Ft=0,Vt=(new Date).getTime(),jt=0,Yt=0,Nt=mt}});