(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_list/index"],{"1dc4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5019"),o=c(n("2d3a")),u=n("858e"),a=n("26cb");function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("components/userEvaluation/index").then(function(){return resolve(n("f458"))}.bind(null,n)).catch(n.oe)},l={components:{userEvaluation:r},mixins:[o.default],computed:(0,a.mapGetters)(["isLogin"]),data:function(){return{replyData:{},product_id:0,reply:[],type:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20}},onLoad:function(t){var e=this;if(!t.product_id)return e.$util.Tips({title:"缺少参数"},{tab:3,url:1});e.product_id=t.product_id},onShow:function(){this.isLogin?(this.getProductReplyCount(),this.getProductReplyList()):(0,u.toLogin)()},methods:{getProductReplyCount:function(){var t=this;(0,i.getReplyConfig)(t.product_id).then((function(e){t.$set(t,"replyData",e.data)}))},getProductReplyList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,i.getReplyList)(t.product_id,{page:t.page,limit:t.limit,type:t.type}).then((function(e){var n=e.data,i=n.length<t.limit;t.reply=t.$util.SplitArray(n,t.reply),t.$set(t,"reply",t.reply),t.loading=!1,t.loadend=i,t.loadTitle=i?"人家是有底线的~":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},changeType:function(t){var e=parseInt(t);e!=this.type&&(this.type=e,this.page=1,this.loadend=!1,this.$set(this,"reply",[]),this.getProductReplyList())}},onReachBottom:function(){this.getProductReplyList()}};e.default=l},"8f53":function(t,e,n){"use strict";var i=n("9c6c"),o=n.n(i);o.a},"9c6c":function(t,e,n){},"9ccc":function(t,e,n){"use strict";n.r(e);var i=n("e622"),o=n("dde6");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("8f53");var a,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=r.exports},ab64:function(t,e,n){"use strict";(function(t){n("62f9");i(n("66fd"));var e=i(n("9ccc"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},dde6:function(t,e,n){"use strict";n.r(e);var i=n("1dc4"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},e622:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["ab64","common/runtime","common/vendor"]]]);