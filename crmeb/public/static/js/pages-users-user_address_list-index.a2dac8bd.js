(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_address_list-index"],{"0882":function(t,e,i){"use strict";i.r(e);var n=i("67e8"),a=i("ccc8");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("1aaa");var o,d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"48e60b9a",null,!1,n["a"],o);e["default"]=r.exports},1731:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-a68dde36]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-a68dde36]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-a68dde36]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-a68dde36]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-a68dde36]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-a68dde36]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-a68dde36]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"1aaa":function(t,e,i){"use strict";var n=i("7fa6"),a=i.n(n);a.a},"27e1":function(t,e,i){"use strict";var n=i("d2b9"),a=i.n(n);a.a},"393d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".address-management.fff[data-v-48e60b9a]{background-color:#fff;height:%?1300?%}.address-management .line[data-v-48e60b9a]{width:100%;height:%?3?%}.address-management .line uni-image[data-v-48e60b9a]{width:100%;height:100%;display:block}.address-management .item[data-v-48e60b9a]{background-color:#fff;padding:0 %?30?%;margin-bottom:%?12?%}.address-management .item .address[data-v-48e60b9a]{padding:%?30?% 0;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.address-management .item .address .consignee[data-v-48e60b9a]{font-size:%?28?%;font-weight:700;margin-bottom:%?8?%}.address-management .item .address .consignee .phone[data-v-48e60b9a]{margin-left:%?25?%}.address-management .item .operation[data-v-48e60b9a]{height:%?83?%;font-size:%?28?%;color:#282828}.address-management .item .operation .radio uni-text[data-v-48e60b9a]{margin-left:%?13?%}.address-management .item .operation .iconfont[data-v-48e60b9a]{color:#2c2c2c;font-size:%?35?%;vertical-align:%?-2?%;margin-right:%?10?%}.address-management .item .operation .iconfont.icon-shanchu[data-v-48e60b9a]{margin-left:%?40?%;font-size:%?38?%}.address-management .footer[data-v-48e60b9a]{position:fixed;width:100%;background-color:#fff;bottom:0;height:%?106?%;padding:0 %?30?%;box-sizing:border-box}.address-management .footer .addressBnt[data-v-48e60b9a]{width:%?330?%;height:%?76?%;border-radius:%?50?%;text-align:center;line-height:%?76?%;font-size:%?30?%;color:#fff;background-color:var(--view-theme)}.address-management .footer .addressBnt.on[data-v-48e60b9a]{width:%?690?%;margin:0 auto}.address-management .footer .addressBnt .iconfont[data-v-48e60b9a]{font-size:%?35?%;margin-right:%?8?%;vertical-align:%?-1?%}.address-management .footer .addressBnt.wxbnt[data-v-48e60b9a]{background-color:#fe960f}",""]),t.exports=e},"67e8":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"address-management",class:t.addressList.length<1&&t.page>1?"fff":""},[n("v-uni-view",{staticClass:"line"},[t.addressList.length?n("v-uni-image",{attrs:{src:i("d87d")}}):t._e()],1),t.addressList.length?n("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.addressList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"address",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrder(e.id)}}},[n("v-uni-view",{staticClass:"consignee"},[t._v("收货人："+t._s(e.real_name)),n("v-uni-text",{staticClass:"phone"},[t._v(t._s(e.phone))])],1),n("v-uni-view",[t._v("收货地址："+t._s(e.province)+t._s(e.city)+t._s(e.district)+t._s(e.detail))])],1),n("v-uni-view",{staticClass:"operation acea-row row-between-wrapper"},[n("v-uni-radio",{staticClass:"radio",attrs:{value:i.toString(),checked:!!e.is_default}},[n("v-uni-text",[t._v("设为默认")])],1),n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddress(e.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("编辑")],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delAddress(i)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu"}),t._v("删除")],1)],1)],1)],1)})),1):t._e(),t.addressList.length?n("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[n("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),t.addressList.length<1&&t.page>1?n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i("88f7")}})],1)],1):t._e(),n("v-uni-view",{staticStyle:{height:"120rpx"}}),n("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"addressBnt",class:this.$wechat.isWeixin()?"wxbnt":"on",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-tianjiadizhi"}),t._v("添加新地址")],1),n("v-uni-view",{}),this.$wechat.isWeixin()?n("v-uni-view",{staticClass:"addressBnt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-weixin2"}),t._v("导入微信地址")],1):t._e()],1)],1),n("home")],1)},s=[]},"7fa6":function(t,e,i){var n=i("393d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5fc3cb38",n,!0,{sourceMap:!1,shadowMode:!1})},"88f7":function(t,e,i){t.exports=i.p+"static/img/noAddress.9fbcd830.png"},"8b7a":function(t,e,i){"use strict";i.r(e);var n=i("c6df"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"9f7b":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},s=[]},a8a4:function(t,e,i){"use strict";var n=i("4ea4");i("a434"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("56ec"),s=i("858e"),o=i("26cb"),d=n(i("c872")),r=n(i("2d3a")),c={components:{home:d.default},mixins:[r.default],data:function(){return{addressList:[],cartId:"",pinkId:0,couponId:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,news:"",noCoupon:0}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?(this.cartId=t.cartId||"",this.noCoupon=t.noCoupon||0,this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.news=t.news||0,this.getAddressList(!0)):(0,s.toLogin)()},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(e){uni.chooseAddress({success:function(e){var i={};i.province=e.provinceName,i.city=e.cityName,i.district=e.countyName,(0,a.editAddress)({address:i,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e})}))},fail:function(e){if("chooseAddress:cancel"==e.errMsg)return t.$util.Tips({title:"取消选择"})}})},fail:function(e){uni.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(e){(0,a.editAddress)({real_name:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName},detail:e.detailInfo,post_code:e.postalCode,is_default:1,type:1}).then((function(){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e||"添加失败"})}))}))},getAddressList:function(t){var e=this;t&&(e.loadend=!1,e.page=1,e.$set(e,"addressList",[])),e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,a.getAddressList)({page:e.page,limit:e.limit}).then((function(t){var i=t.data,n=i.length<e.limit;e.addressList=e.$util.SplitArray(i,e.addressList),e.$set(e,"addressList",e.addressList),e.loadend=n,e.loadTitle=n?"我也是有底线的":"加载更多",e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))},radioChange:function(t){var e=parseInt(t.detail.value),i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:"您设置的默认地址不存在!"});(0,a.setAddressDefault)(n.id).then((function(t){for(var n=0,a=i.addressList.length;n<a;n++)i.addressList[n].is_default=n==e;i.$util.Tips({title:"设置成功",icon:"success"},(function(){i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},editAddress:function(t){var e=this.cartId,i=this.pinkId,n=this.couponId;this.cartId="",this.pinkId="",this.couponId="",uni.navigateTo({url:"/pages/users/user_address/index?id="+t+"&cartId="+e+"&pinkId="+i+"&couponId="+n+"&new="+this.news})},delAddress:function(t){var e=this,i=this.addressList[t];if(void 0==i)return e.$util.Tips({title:"您删除的地址不存在!"});(0,a.delAddress)(i.id).then((function(i){e.$util.Tips({title:"删除成功",icon:"success"},(function(){e.addressList.splice(t,1),e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},addAddress:function(){var t=this.cartId,e=this.pinkId,i=this.couponId;this.cartId="",this.pinkId="",this.couponId="",uni.navigateTo({url:"/pages/users/user_address/index?cartId="+t+"&pinkId="+e+"&couponId="+i+"&new="+this.news})},goOrder:function(t){var e="",i="",n="";this.cartId&&t&&(e=this.cartId,i=this.pinkId,n=this.couponId,this.cartId="",this.pinkId="",this.couponId="",uni.redirectTo({url:"/pages/users/order_confirm/index?is_address=1&new="+this.news+"&cartId="+e+"&addressId="+t+"&pinkId="+i+"&couponId="+n+"&noCoupon="+this.noCoupon}))}},onReachBottom:function(){this.getAddressList()}};e.default=c},c6df:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),s=n(i("2d3a")),o={name:"Home",props:{},mixins:[s.default],data:function(){return{top:"545"}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=o},c872:function(t,e,i){"use strict";i.r(e);var n=i("9f7b"),a=i("8b7a");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("27e1");var o,d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"a68dde36",null,!1,n["a"],o);e["default"]=r.exports},ccc8:function(t,e,i){"use strict";i.r(e);var n=i("a8a4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},d2b9:function(t,e,i){var n=i("1731");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("54aa8b40",n,!0,{sourceMap:!1,shadowMode:!1})},d87d:function(t,e,i){t.exports=i.p+"static/img/line.05bf1c84.jpg"}}]);