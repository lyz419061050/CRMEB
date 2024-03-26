require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/orderList/index"],{"548d":function(t,e,n){"use strict";var i=n("8cab"),s=n.n(i);s.a},"5e4b":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("2eee")),u=i(n("c973")),r=n("5171"),a=n("00a0"),o=n("0567"),d={name:"AdminOrderList",components:{Loading:function(){n.e("components/Loading/index").then(function(){return resolve(n("c986"))}.bind(null,n)).catch(n.oe)},PriceChange:function(){n.e("pages/admin/components/PriceChange/index").then(function(){return resolve(n("aeda"))}.bind(null,n)).catch(n.oe)}},data:function(){return{imgHost:a.HTTP_REQUEST_URL,current:"",change:!1,types:0,where:{keywords:"",page:1,limit:10,status:0},list:[],loaded:!1,loading:!1,focus:!1,orderInfo:{},status:"",isRefund:0}},onLoad:function(t){var e=t.types;this.where.status=e},onShow:function(){this.init()},methods:{setValue:function(t){this.$set(this.where,"keywords",t.detail.value)},inputConfirm:function(e){e.detail.value&&(t.hideKeyboard(),this.getIndex())},searchBut:function(){this.focus=!1,this.where.page=1,this.loading=!1,this.loaded=!1,this.$set(this,"list",[]),t.showLoading({title:this.$t("正在搜索中")}),this.getIndex()},getIndex:function(){var e,n=this;n.loading||n.loaded||(n.loading=!0,e=-3==n.where.status?r.orderRefund_order:r.getAdminOrderList,e(n.where).then((function(e){n.loading=!1,n.loaded=e.data.length<n.where.limit,n.list.push.apply(n.list,e.data),n.where.page=n.where.page+1,t.hideLoading()}),(function(e){t.hideLoading(),n.$util.Tips({title:e})})))},init:function(){this.list=[],this.where.page=1,this.loaded=!1,this.loading=!1,this.getIndex(),this.current=""},changeStatus:function(t){this.where.status!=t&&(this.where.status=t,this.init())},modify:function(t,e){this.change=!0,this.status=e.toString(),this.orderInfo=t,2==e&&(this.isRefund=1)},changeclose:function(t){this.change=t},savePrice:function(t){var e=this;return(0,u.default)(s.default.mark((function n(){var i,u,a,d,c,l;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,u={},a=t.price,d=t.refund_price,i.orderInfo.refund_status,c=t.remark,u.order_id=i.orderInfo.order_id,0!=i.status){n.next=9;break}if((0,o.isMoney)(a)){n.next=5;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的金额")}));case 5:u.price=a,(0,r.setAdminOrderPrice)(u).then((function(t){i.change=!1,i.$util.Tips({title:i.$t("改价成功"),icon:"success"}),i.init()}),(function(t){i.change=!1,i.$util.Tips({title:i.$t("改价失败"),icon:"none"})})),n.next=23;break;case 9:if(2!=i.status){n.next=17;break}if((0,o.isMoney)(d)){n.next=12;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的金额")}));case 12:u.price=d,u.type=t.type,(0,r.setOrderRefund)(u).then((function(t){i.change=!1,i.$util.Tips({title:t.msg}),i.init()}),(function(t){i.change=!1,i.$util.Tips({title:t})})),n.next=23;break;case 17:if(c){n.next=19;break}return n.abrupt("return",e.$util.Tips({title:i.$t("请输入备注")}));case 19:u.remark=c,l="",l=-3==i.where.status?(0,r.setAdminRefundRemark)(u):(0,r.setAdminOrderRemark)(u),l.then((function(t){i.change=!1,e.$util.Tips({title:t.msg,icon:"success"}),i.init()}),(function(t){i.change=!1,i.$util.Tips({title:t})}));case 23:case"end":return n.stop()}}),n)})))()},agreeExpress:function(t){var e=this;(0,r.agreeExpress)({id:t.id}).then((function(t){e.$util.Tips({title:t.msg}),e.init()})).catch((function(t){e.$util.Tips({title:t})}))},toDetail:function(e){t.navigateTo({url:"/pages/admin/orderDetail/index?id=".concat(e.order_id,"&types=").concat(this.where.status)})},offlinePay:function(t){var e=this;(0,r.setOfflinePay)({order_id:t.order_id}).then((function(t){e.$util.Tips({title:t.msg,icon:"success"}),e.init()}),(function(t){e.$util.Tips(t)}))}},onReachBottom:function(){this.getIndex()}};e.default=d}).call(this,n("543d")["default"])},"7f4d":function(t,e,n){"use strict";n.r(e);var i=n("b601"),s=n("a432");for(var u in s)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(u);n("548d");var r=n("f0c5"),a=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"4ae06a78",null,!1,i["a"],void 0);e["default"]=a.exports},"8cab":function(t,e,n){},a432:function(t,e,n){"use strict";n.r(e);var i=n("5e4b"),s=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=s.a},b3fc:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4789");i(n("66fd"));var s=i(n("7f4d"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(s.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},b601:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("搜索用户名/订单号/电话")),i=t.$t("搜索"),s=t.$t("待付款"),u=t.$t("待发货"),r=t.$t("待收货"),a=t.$t("待评价"),o=t.$t("已完成"),d=t.$t("退款"),c=t.list.length,l=c?t.__map(t.list,(function(e,n){var i=t.__get_orig(e),s=t.$t("订单号"),u=t.$t("下单时间"),r=0==e.refund_status&&0!=t.where.status&&e.refund.length,a=1==e.refund_status?t.$t("退款中"):null,o=1!=e.refund_status&&2==e.refund_status?t.$t("已退款"):null,d=1!=e.refund_status&&2!=e.refund_status&&3==e.refund_status?t.$t("拒绝退款"):null,c=1!=e.refund_status&&2!=e.refund_status&&3!=e.refund_status?t.$t(e.status_name.status_name):null,l=0==e.refund_status&&0!=t.where.status&&e.refund.length,f=l&&e.is_all_refund?t.$t("退款中"):null,h=l&&!e.is_all_refund?t.$t("部分退款中"):null,p=t.$t("￥"),m=t.__map(e._info,(function(n,i){var s=t.__get_orig(n),u=n.cart_info.refund_num&&-2!=e._status._type?t.$t("件退款中"):null;return{$orig:s,m17:u}})),g=t.$t("共"),_=t.$t("件商品，实付款"),$=t.$t("￥"),b=t.$t("邮费"),v=t.$t("￥"),w=0==t.where.status?t.$t("一键改价"):null,y=t.$t("订单备注"),x=(0==e.refund_type||1==e.refund_type||5==e.refund_type)&&-3==t.where.status&&parseFloat(e.pay_price)>0,k=x?t.$t("立即退款"):null,T=-3==t.where.status&&2==e.refund_type?t.$t("同意退货"):null,I=-3==t.where.status&&4==e.refund_type?t.$t("待用户发货"):null,L="offline"===e.pay_type&&0===e.paid?t.$t("确认付款"):null,O=1==t.where.status&&1===e.shipping_type&&(null===e.pinkStatus||2===e.pinkStatus)&&!e.refund.length,P=O?t.$t("去发货"):null;return{$orig:i,m8:s,m9:u,g1:r,m10:a,m11:o,m12:d,m13:c,g2:l,m14:f,m15:h,m16:p,l0:m,m18:g,m19:_,m20:$,m21:b,m22:v,m23:w,m24:y,m25:x,m26:k,m27:T,m28:I,m29:L,g3:O,m30:P}})):null,f=c||t.loading?null:t.$t("暂无记录");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:s,m3:u,m4:r,m5:a,m6:o,m7:d,g0:c,l1:l,m31:f}})},s=[]}},[["b3fc","common/runtime","common/vendor"]]]);