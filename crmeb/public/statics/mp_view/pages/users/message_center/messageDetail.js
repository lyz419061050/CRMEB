(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/message_center/messageDetail"],{1004:function(e,t,n){"use strict";n.r(t);var c=n("86b6"),a=n("c6b5");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("7950");var o,i=n("f0c5"),r=Object(i["a"])(a["default"],c["b"],c["c"],!1,null,"bc68ae4c",null,!1,c["a"],o);t["default"]=r.exports},"5cd4":function(e,t,n){},"65e8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("56ec"),a=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("c872"))}.bind(null,n)).catch(n.oe)},u={components:{home:a},data:function(){return{msgData:{}}},onLoad:function(e){this.getMsgDetails(e.id)},methods:{getMsgDetails:function(t){var n=this;e.showLoading({title:"获取详情中"}),(0,c.getMsgDetails)(t).then((function(t){e.hideLoading(),n.msgData=t.data})).catch((function(t){return e.hideLoading(),n.$util.Tips({title:t})}))}}};t.default=u}).call(this,n("543d")["default"])},7950:function(e,t,n){"use strict";var c=n("5cd4"),a=n.n(c);a.a},"86b6":function(e,t,n){"use strict";var c;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},c6b5:function(e,t,n){"use strict";n.r(t);var c=n("65e8"),a=n.n(c);for(var u in c)"default"!==u&&function(e){n.d(t,e,(function(){return c[e]}))}(u);t["default"]=a.a},e1e5:function(e,t,n){"use strict";(function(e){n("62f9");c(n("66fd"));var t=c(n("1004"));function c(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["e1e5","common/runtime","common/vendor"]]]);