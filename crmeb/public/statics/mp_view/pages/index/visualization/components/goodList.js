(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/goodList"],{"100c":function(t,e,i){"use strict";var n=i("e941"),s=i.n(n);s.a},"477b":function(t,e,i){"use strict";i.r(e);var n=i("9d3e"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},4947:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},a=[]},5528:function(t,e,i){"use strict";i.r(e);var n=i("4947"),s=i("477b");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("100c");var o,c=i("f0c5"),u=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"fa412636",null,!1,n["a"],o);e["default"]=u.exports},"9d3e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),s=i("1754"),a=i("5019"),o=getApp(),c={name:"goodList",computed:(0,n.mapGetters)(["uid"]),props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.productslist())}}},data:function(){return{bastList:[],name:this.$options.name,isIframe:!1,isShow:!0,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0}},created:function(){this.isIframe=o.globalData.isIframe},mounted:function(){},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,a.getHomeProducts)(e).then((function(e){t.bastList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},goDetail:function(e){var i=this;(0,s.goPage)().then((function(n){(0,s.goShopDetail)(e,i.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=c}).call(this,i("543d")["default"])},e941:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/goodList-create-component',
    {
        'pages/index/visualization/components/goodList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5528"))
        })
    },
    [['pages/index/visualization/components/goodList-create-component']]
]);
