(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3383bac4"],{"0b33":function(t,i,e){"use strict";var n=e("c31d"),s=e("d282"),r=e("9884"),a=e("48f4"),o=Object(s["a"])("tab"),l=o[0],c=o[1];i["a"]=l({mixins:[Object(r["a"])("vanTabs")],props:Object(n["a"])({},a["b"],{name:[Number,String],title:String,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return this.name||this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()}},mounted:function(){this.slots("title")&&this.parent.renderTitle(this.$refs.title,this.index)},render:function(t){var i=this.slots,e=this.isActive,n=this.inited||!this.parent.lazyRender,s=[n?i():t()];return i("title")&&s.push(t("div",{ref:"title"},[i("title")])),this.parent.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!e},class:c("pane-wrapper",{inactive:!e})},[t("div",{class:c("pane")},[s])]):t("div",{directives:[{name:"show",value:e}],attrs:{role:"tabpanel"},class:c("pane")},[s])}})},"48f4":function(t,i,e){"use strict";function n(t,i){var e=i.to,n=i.url,s=i.replace;if(e&&t){var r=t[s?"replace":"push"](e);r&&r.catch&&r.catch(function(t){if(t&&"NavigationDuplicated"!==t.name)throw t})}else n&&(s?location.replace(n):location.href=n)}e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s});var s={url:String,replace:Boolean,to:[String,Object]}},"5e46":function(t,i,e){"use strict";var n=e("d282"),s=e("a142"),r=e("ea8e"),a=e("4598");function o(t,i,e){var n=0,s=t.scrollLeft,r=0===e?1:Math.round(1e3*e/16);function o(){t.scrollLeft+=(i-s)/r,++n<r&&Object(a["b"])(o)}o()}var l=e("48f4");function c(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}var h=e("9884"),d=e("5fbe"),u="van-hairline",f=u+"--top-bottom",p=e("a8c1"),v=Object(n["a"])("tab")[1],b={props:{type:String,color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},i=this.color,e=this.isActive,n="card"===this.type;i&&n&&(t.borderColor=i,this.disabled||(e?t.backgroundColor=i:t.color=i));var s=e?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},renderTitle:function(t){var i=this.$refs.title;i.innerHTML="",i.appendChild(t)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:v({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),style:this.style,on:{click:this.onClick}},[t("span",{ref:"title",class:{"van-ellipsis":this.ellipsis}},[this.title])])}},m=e("c31d"),g=e("3875"),w=Object(n["a"])("tabs"),x=w[0],C=w[1],y=50,k=x({mixins:[g["a"]],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,i=this.deltaX,e=this.currentIndex;"horizontal"===t&&this.offsetX>=y&&(i>0&&0!==e?this.$emit("change",e-1):i<0&&e!==this.count-1&&this.$emit("change",e+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:C("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:C("content",{animated:this.animated}),on:Object(m["a"])({},this.listeners)},[this.genChildren()])}}),_=Object(n["a"])("sticky"),I=_[0],L=_[1],S=I({mixins:[Object(d["a"])(function(t){this.scroller||(this.scroller=Object(p["b"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(s["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var i=this.container,e=this.offsetTop,n=Object(p["c"])(window),s=Object(p["a"])(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(i){var a=s+i.offsetHeight;if(n+e+this.height>a){var o=this.height+n-a;return o<this.height?(this.fixed=!0,this.transform=-(o+e)):this.fixed=!1,void r()}}n+e>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],i=this.fixed,e={height:i?this.height+"px":null};return t("div",{style:e},[t("div",{class:L({fixed:i}),style:this.style},[this.slots()])])}}),T=Object(n["a"])("tabs"),O=T[0],$=T[1];i["a"]=O({mixins:[Object(h["b"])("vanTabs"),Object(d["a"])(function(t){t(window,"resize",this.setLine,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&Object(p["d"])(Math.ceil(Object(p["a"])(this.$el)-this.offsetTop))}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.scrollIntoView(!0)})},setLine:function(){var t=this,i=this.inited;this.$nextTick(function(){var e=t.$refs.titles;if(e&&e[t.currentIndex]&&"line"===t.type&&!c(t.$el)){var n=e[t.currentIndex].$el,a=t.lineWidth,o=t.lineHeight,l=Object(s["b"])(a)?a:n.offsetWidth/2,h=n.offsetLeft+n.offsetWidth/2,d={width:Object(r["a"])(l),backgroundColor:t.color,transform:"translateX("+h+"px) translateX(-50%)"};if(i&&(d.transitionDuration=t.duration+"s"),Object(s["b"])(o)){var u=Object(r["a"])(o);d.height=u,d.borderRadius=u}t.lineStyle=d}})},setCurrentIndexByName:function(t){var i=this.children.filter(function(i){return i.computedName===t}),e=(this.children[0]||{}).index||0;this.setCurrentIndex(i.length?i[0].index:e)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(s["b"])(t)&&t!==this.currentIndex){var i=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),i&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var i=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=i}},onClick:function(t){var i=this.children[t],e=i.title,n=i.disabled,s=i.computedName;n?this.$emit("disabled",s,e):(this.setCurrentIndex(t),this.$emit("click",s,e))},scrollIntoView:function(t){var i=this.$refs.titles;if(this.scrollable&&i&&i[this.currentIndex]){var e=this.$refs.nav,n=i[this.currentIndex].$el,s=n.offsetLeft-(e.offsetWidth-n.offsetWidth)/2;o(e,s,t?0:this.duration)}},renderTitle:function(t,i){var e=this;this.$nextTick(function(){e.$refs.titles[i].renderTitle(t)})},onScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)}},render:function(){var t,i=this,e=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,a=this.scrollable,o=this.children.map(function(t,r){return e(b,{ref:"titles",refInFor:!0,attrs:{type:n,title:t.title,color:i.color,isActive:r===i.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:a,activeColor:i.titleActiveColor,inactiveColor:i.titleInactiveColor,swipeThreshold:i.swipeThreshold},on:{click:function(){i.onClick(r),Object(l["a"])(t.$router,t)}}})}),c=e("div",{ref:"wrap",class:[$("wrap",{scrollable:a}),(t={},t[f]="line"===n&&this.border,t)]},[e("div",{ref:"nav",attrs:{role:"tablist"},class:$("nav",[n]),style:this.navStyle},[this.slots("nav-left"),o,"line"===n&&e("div",{class:$("line"),style:this.lineStyle}),this.slots("nav-right")])]);return e("div",{class:$([n])},[this.sticky?e(S,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onScroll}},[c]):c,e(k,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},9884:function(t,i,e){"use strict";e.d(i,"a",function(){return r}),e.d(i,"b",function(){return a});var n=e("2b0e");function s(t){var i=[];function e(t){t.forEach(function(t){i.push(t),t.children&&e(t.children)})}return e(t),i}function r(t,i){var e,r;void 0===i&&(i={});var a=i.indexKey||"index";return n["default"].extend({inject:(e={},e[t]={default:null},e),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[a]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter(function(i){return i!==t}))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),i=s(this.parent.slots());t.sort(function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)}),this.parent.children=t}}}})}function a(t){return{provide:function(){var i;return i={},i[t]=this,i},data:function(){return{children:[]}}}}},ae9e:function(t,i,e){},b807:function(t,i,e){},bda7:function(t,i,e){"use strict";e("68ef"),e("ae9e"),e("b807")},da3c:function(t,i,e){"use strict";e("68ef"),e("f319")},dae1:function(t,i,e){t.exports=e.p+"h5/img/noNews.5f227afa.png"},e3f6:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"container",staticClass:"newsList"},[t.imgUrls.length>0?n("div",{staticClass:"slider-banner swiperNews"},[n("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.swiperNew}},t._l(t.imgUrls,function(t,i){return n("swiperSlide",{key:i,staticClass:"swiper-slide"},[n("img",{staticClass:"slide-image",attrs:{src:t.image_input[0]}})])}),1),n("div",{staticClass:"swiper-pagination"})],1):t._e(),n("Tabs",{staticClass:"newsSwitch",attrs:{"line-height":"0.04rem","line-width":"0.24rem",color:"#e93323",animated:"","title-inactive-color":"2","nav-right":"0.46rem",sticky:""},on:{click:t.onClick},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.navLsit,function(i,s){return n("Tab",{key:s,attrs:{title:i.title,"title-inactive-color":"#999","title-active-color":"#282828"}},[t._l(t.articleList,function(i,e){return n("div",{key:e,staticClass:"list"},[1===i.image_input.length?n("router-link",{staticClass:"item acea-row row-between-wrapper",attrs:{to:{path:"/news_detail/"+i.id}}},[n("div",{staticClass:"text acea-row row-column-between"},[n("div",{staticClass:"name line2"},[t._v(t._s(i.title))]),n("div",[t._v(t._s(i.add_time))])]),n("div",{staticClass:"pictrue"},[n("img",{attrs:{src:i.image_input[0]}})])]):t._e(),2===i.image_input.length?n("router-link",{staticClass:"item",attrs:{to:{path:"/news_detail/"+i.id}}},[n("div",{staticClass:"title line1"},[t._v("\n            "+t._s(i.title)+"\n          ")]),n("div",{staticClass:"picList acea-row row-between-wrapper"},t._l(i.image_input,function(t,i){return n("div",{key:i,staticClass:"pictrue"},[n("img",{attrs:{src:t}})])}),0),n("div",{staticClass:"time"},[t._v(t._s(i.add_time))])]):t._e(),3===i.image_input.length?n("router-link",{staticClass:"item",attrs:{to:{path:"/news_detail/"+i.id}}},[n("div",{staticClass:"title line1"},[t._v("\n            "+t._s(i.title)+"\n          ")]),n("div",{staticClass:"picList on acea-row row-between-wrapper"},t._l(i.image_input,function(t,i){return n("div",{key:i,staticClass:"pictrue"},[n("img",{attrs:{src:t}})])}),0),n("div",{staticClass:"time"},[t._v(t._s(i.add_time))])]):t._e()],1)}),s>0&&t.articleList.length>0?n("Loading",{attrs:{loaded:t.loadend,loading:t.loading}}):t._e(),0===t.articleList.length&&t.page>1?n("div",{staticClass:"noCommodity"},[n("div",{staticClass:"noPictrue"},[n("img",{staticClass:"image",attrs:{src:e("dae1")}})])]):t._e()],2)}),1)],1)},s=[],r=(e("7f7f"),e("bda7"),e("5e46")),a=(e("da3c"),e("0b33")),o=e("7212"),l=(e("e5d0"),e("e876")),c=e("3a5e"),h={name:"NewsList",components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"],Tab:a["a"],Tabs:r["a"],Loading:c["a"]},props:{},data:function(){return{page:1,limit:20,loadTitle:"",loading:!1,loadend:!1,imgUrls:[],navLsit:[],articleList:[],active:0,cid:0,swiperNew:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0}}},mounted:function(){var t=this;this.articleBanner(),this.articleCategory(),this.articleHotList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getArticleLists()})},methods:{articleBanner:function(){var t=this;Object(l["b"])().then(function(i){t.imgUrls=i.data})},articleCategory:function(){var t=this;Object(l["c"])().then(function(i){t.navLsit=i.data})},articleHotList:function(){var t=this;Object(l["e"])().then(function(i){t.articleList=i.data})},getArticleLists:function(){var t=this;if(!t.loading&&!t.loadend){t.loading=!0;var i={page:t.page,limit:t.limit};Object(l["f"])(i,t.cid).then(function(i){t.loading=!1,t.articleList.push.apply(t.articleList,i.data),t.loadend=i.data.length<t.limit,t.page=t.page+1})}},onClick:function(t){0===t?this.articleHotList():(this.cid=this.navLsit[t].id,this.articleList=[],this.page=1,this.loadend=!1,this.loading=!1,this.getArticleLists(t))}}},d=h,u=e("2877"),f=Object(u["a"])(d,n,s,!1,null,null,null);i["default"]=f.exports},f319:function(t,i,e){}}]);
//# sourceMappingURL=chunk-3383bac4.03ec2010.js.map