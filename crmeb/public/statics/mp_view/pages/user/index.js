(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0b50":function(e,t,n){"use strict";n.r(t);var s=n("3b33"),u=n("3c2c");for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("6e51");var o=n("f0c5"),r=Object(o["a"])(u["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],void 0);t["default"]=r.exports},"3b33":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var s=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t("个人中心")),s=e.userInfo.uid?null:e.$t("请点击授权"),u=!e.userInfo.phone&&e.isLogin?e.$t("绑定手机号"):null,i=e.userInfo.balance_func_status?e.$t("余额"):null,o=e.userInfo.balance_func_status?null:e.$t("收藏"),r=e.$t("优惠券"),a=e.$t("积分"),c=e.userInfo.svip_open&&1==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,f=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,l=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,d=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,p=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,m=e.userInfo.svip_open&&1==e.member_style&&1==e.userInfo.vip_status?e.$t("查看会员权益"):null,_=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,h=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,g=e.userInfo.svip_open&&3==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,v=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,b=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,I=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,y=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,$=e.userInfo.svip_open&&3==e.member_style&&1==e.userInfo.vip_status?e.$t("会员可享多项权益"):null,k=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,M=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,j=e.userInfo.svip_open&&2==e.member_style?e.$t("会员可享多项权益"):null,w=e.userInfo.svip_open&&2==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,x=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,P=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,S=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,O=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,T=e.userInfo.svip_open&&2==e.member_style&&1==e.userInfo.vip_status?e.$t("查看会员权益"):null,L=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,U=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,C=e.$t("订单中心"),N=e.$t("查看全部"),R=e.__map(e.orderMenu,(function(t,n){var s=e.__get_orig(t),u=e.$t(t.title);return{$orig:s,m31:u}})),D=e.imgUrls.length>0&&e.my_banner_status,E=e.$t("我的服务"),F=e.__map(e.MyMenus,(function(t,n){var s=e.__get_orig(t),u="#"!=t.url&&"/pages/service/index"!=t.url&&"/pages/extension/customer_list/chat"!=t.url||"/pages/extension/customer_list/chat"==t.url&&0==e.routineContact?e.$t(t.name):null;return{$orig:s,m33:u}})),A=1==e.routineContact?e.$t("联系客服"):null,B=e.storeMenu.length,H=B?e.$t("商家管理"):null,V=B?e.__map(e.storeMenu,(function(t,n){var s=e.__get_orig(t),u="#"!=t.url&&"/pages/service/index"!=t.url?e.$t(t.name):null;return{$orig:s,m36:u}})):null;e.$mp.data=Object.assign({},{$root:{m0:n,m1:s,m2:u,m3:i,m4:o,m5:r,m6:a,m7:c,m8:f,f0:l,m9:d,m10:p,m11:m,m12:_,m13:h,m14:g,m15:v,f1:b,m16:I,m17:y,m18:$,m19:k,m20:M,m21:j,m22:w,m23:x,f2:P,m24:S,m25:O,m26:T,m27:L,m28:U,m29:C,m30:N,l0:R,g0:D,m32:E,l1:F,m34:A,g1:B,m35:H,l2:V}})},u=[]},"3c2c":function(e,t,n){"use strict";n.r(t);var s=n("95ac"),u=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=u.a},"43f1":function(e,t,n){"use strict";(function(e,t){var s=n("4ea4");n("4789");s(n("66fd"));var u=s(n("0b50"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"6e51":function(e,t,n){"use strict";var s=n("e62d"),u=n.n(s);u.a},"95ac":function(e,t,n){"use strict";(function(e){var s=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=s(n("9523")),i=n("d1ea"),o=(n("4e39"),n("86eb")),r=n("26cb"),a=s(n("224b")),c=s(n("69b2")),f=s(n("19b6")),l=n("f9f0");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var p=e.getSystemInfoSync().statusBarHeight+"px",m=(getApp(),{components:{tabBar:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(n("8632"))}.bind(null,n)).catch(n.oe)},pageFooter:function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("605d"))}.bind(null,n)).catch(n.oe)},editUserModal:function(){Promise.all([n.e("common/vendor"),n.e("components/eidtUserModal/index")]).then(function(){return resolve(n("58e7"))}.bind(null,n)).catch(n.oe)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,r.mapGetters)({cartNum:"cartNum",isLogin:"isLogin"})),filters:{coundTime:function(e){var t=1e3*e,n=new Date,s=t-n.getTime(),u=parseInt(s/864e5);return u+this.$t("day")},dateFormat:function(e){return(0,a.default)(1e3*e).format("YYYY-MM-DD")}},mixins:[f.default],data:function(){return{editModal:!1,storeMenu:[],orderMenu:[{img:"icon-daifukuan",title:"待付款",url:"/pages/goods/order_list/index?status=0"},{img:"icon-daifahuo",title:"待发货",url:"/pages/goods/order_list/index?status=1"},{img:"icon-daishouhuo",title:"待收货",url:"/pages/goods/order_list/index?status=2"},{img:"icon-daipingjia",title:"待评价",url:"/pages/goods/order_list/index?status=3"},{img:"icon-a-shouhoutuikuan",title:"售后/退款",url:"/pages/users/user_return_list/index"}],imgUrls:[],autoplay:!0,circular:!0,interval:3e3,duration:500,isAuto:!1,isShowAuth:!1,orderStatusNum:{},userInfo:{},MyMenus:[],sysHeight:p,mpHeight:0,showStatus:1,activeRouter:"",pageHeight:"100%",routineContact:0,footerSee:!1,member_style:1,my_banner_status:1,is_diy:e.getStorageSync("is_diy"),copyRightPic:"/static/images/support.png"}},onLoad:function(t){e.hideTabBar();this.$store.getters.isLogin;var n=getCurrentPages(),s=n[n.length-1].route;this.activeRouter="/"+s,this.getCopyRight()},onReady:function(){var t=this,n=e.createSelectorQuery().select(".sys-head");n.boundingClientRect((function(e){t.mpHeight=e.height})).exec()},onShow:function(){this.isLogin&&(this.getUserInfo(),this.getMyMenus(),this.setVisit()),this.getCopyRight()},onPullDownRefresh:function(){this.onLoadFun()},methods:{getWechatuserinfo:function(){},editSuccess:function(){this.editModal=!1,this.getUserInfo()},closeEdit:function(){this.editModal=!1},setVisit:function(){(0,i.setVisit)({url:"/pages/user/index"}).then((function(e){}))},openAuto:function(){(0,o.toLogin)()},onLoadFun:function(){this.getUserInfo(),this.getMyMenus(),this.setVisit()},Setting:function(){e.openSetting({success:function(e){}})},authColse:function(e){this.isShowAuth=e},bindPhone:function(){e.navigateTo({url:"/pages/users/user_phone/index"})},getphonenumber:function(t){var n=this;"getPhoneNumber:ok"==t.detail.errMsg&&c.default.getCode().then((function(e){var s={code:e,iv:t.detail.iv,encryptedData:t.detail.encryptedData};(0,i.mpBindingPhone)(s).then((function(e){n.getUserInfo(),n.$util.Tips({title:e.msg,icon:"success"})})).catch((function(e){return n.$util.Tips({title:e})}))})).catch((function(t){e.hideLoading()}))},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.orderMenu.forEach((function(e,t){switch(e.title){case"待付款":e.num=n.data.orderStatusNum.unpaid_count;break;case"待发货":e.num=n.data.orderStatusNum.unshipped_count;break;case"待收货":e.num=n.data.orderStatusNum.received_count;break;case"待评价":e.num=n.data.orderStatusNum.evaluated_count;break;case"售后/退款":e.num=n.data.orderStatusNum.refunding_count;break}})),e.stopPullDownRefresh()}))},getUserProfile:function(){(0,o.toLogin)()},switchTab:function(e){this.orderMenu.forEach((function(t,n){switch(t.title){case"待付款":t.img=e.dfk;break;case"待发货":t.img=e.dfh;break;case"待收货":t.img=e.dsh;break;case"待评价":t.img=e.dpj;break;case"售后/退款":t.img=e.sh;break}}))},getMyMenus:function(){var e=this,t=this;(0,i.getMenuList)().then((function(n){var s=[],u=[];n.data.routine_my_menus.forEach((function(e,t,n){"/pages/admin/order/index"==e.url||"/pages/admin/order_cancellation/index"==e.url||"客服接待"==e.name?s.push(e):u.push(e)})),e.member_style=Number(n.data.diy_data.value),e.my_banner_status=n.data.diy_data.my_banner_status;switch(n.data.diy_data.order_status){case 1:e.switchTab({dfk:"icon-daifukuan",dfh:"icon-daifahuo",dsh:"icon-daishouhuo",dpj:"icon-daipingjia",sh:"icon-a-shouhoutuikuan"});break;case 2:e.switchTab({dfk:"icon-daifukuan-lan",dfh:"icon-daifahuo-lan",dsh:"icon-daishouhuo-lan",dpj:"icon-daipingjia-lan",sh:"icon-shouhou-tuikuan-lan"});break;case 3:e.switchTab({dfk:"icon-daifukuan-ju",dfh:"icon-daifahuo-ju",dsh:"icon-daishouhuo-ju",dpj:"icon-daipingjia-ju",sh:"icon-shouhou-tuikuan-ju"});break;case 4:e.switchTab({dfk:"icon-daifukuan-fen",dfh:"icon-daifahuo-fen",dsh:"icon-daishouhuo-fen",dpj:"icon-daipingjia-fen",sh:"icon-a-shouhoutuikuan-fen"});break;case 5:e.switchTab({dfk:"icon-daifukuan-lv",dfh:"icon-daifahuo-lv",dsh:"icon-daishouhuo-lv",dpj:"icon-daipingjia-lv",sh:"icon-shouhou-tuikuan-lv"});break}t.$set(t,"MyMenus",u),t.$set(t,"storeMenu",s),e.imgUrls=n.data.routine_my_banner,e.routineContact=Number(n.data.routine_contact_type)}))},goEdit:function(){if(0==this.isLogin)(0,o.toLogin)();else{if(this.userInfo.is_default_avatar)return void(this.editModal=!0);e.navigateTo({url:"/pages/users/user_info/index"})}},goSignIn:function(){e.navigateTo({url:"/pages/users/user_sgin/index"})},goPages:function(e){this.$util.JumpPath(e)},goMenuPage:function(t,n){if(this.isLogin)if(-1===t.indexOf("http")){if(n&&"联系客服"===n)return(0,l.getCustomer)(t);"#"!=t&&"/pages/users/user_info/index"==t&&e.openSetting({success:function(e){}}),e.navigateTo({url:t,fail:function(n){e.switchTab({url:t})}})}else e.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)});else this.openAuto()},goRouter:function(t){var n=getCurrentPages(),s=n[n.length-1].$page.fullPath;t.link!=s&&e.switchTab({url:t.link,fail:function(n){e.redirectTo({url:t.link})}})},getCopyRight:function(){var t=e.getStorageSync("copyRight");t.copyrightImage&&(this.copyRightPic=t.copyrightImage)}}});t.default=m}).call(this,n("543d")["default"])},e62d:function(e,t,n){}},[["43f1","common/runtime","common/vendor"]]]);