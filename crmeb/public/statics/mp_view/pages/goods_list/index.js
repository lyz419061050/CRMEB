(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_list/index"],{"0534":function(t,e,i){"use strict";(function(t){i("62f9");s(i("66fd"));var e=s(i("9b3d"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"1d75":function(t,e,i){"use strict";var s=i("a8db"),o=i.n(s);o.a},"9b3d":function(t,e,i){"use strict";i.r(e);var s=i("b7b4"),o=i("dc1b");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("1d75");var r,c=i("f0c5"),a=Object(c["a"])(o["default"],s["b"],s["c"],!1,null,"76ae739c",null,!1,s["a"],r);e["default"]=a.exports},a8db:function(t,e,i){},b7b4:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var o=function(){var t=this,e=t.$createElement;t._self._c},n=[]},dc1b:function(t,e,i){"use strict";i.r(e);var s=i("f34a"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=o.a},f34a:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("5019"),o=i("26cb"),n=i("1754"),r=c(i("2d3a"));function c(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("c872"))}.bind(null,i)).catch(i.oe)},d=function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("ecac"))}.bind(null,i)).catch(i.oe)},h={computed:(0,o.mapGetters)(["uid"]),components:{recommend:d,home:a},mixins:[r.default],data:function(){return{productList:[],is_switch:!0,where:{sid:0,keyword:"",priceOrder:"",salesOrder:"",news:0,page:1,limit:20,cid:0},price:0,stock:0,nows:!1,loadend:!1,loading:!1,loadTitle:"加载更多",title:"",hostProduct:[],hotPage:1,hotLimit:10,hotScroll:!1}},onLoad:function(t){this.where.cid=t.cid||0,this.$set(this.where,"sid",t.sid||0),this.title=t.title||"",this.$set(this.where,"keyword",t.searchValue||""),this.$set(this.where,"productId",t.productId||""),this.get_product_list()},methods:{godDetail:function(e){(0,n.goShopDetail)(e,this.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},Changswitch:function(){var t=this;t.is_switch=!t.is_switch},searchSubmit:function(t){var e=this;e.$set(e.where,"keyword",t.detail.value),e.loadend=!1,e.$set(e.where,"page",1),this.get_product_list(!0)},get_host_product:function(){var t=this;t.hotScroll||(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},set_where:function(e){switch(e){case 1:return t.navigateBack({delta:1});case 2:0==this.price?this.price=1:1==this.price?this.price=2:2==this.price&&(this.price=0),this.stock=0;break;case 3:0==this.stock?this.stock=1:1==this.stock?this.stock=2:2==this.stock&&(this.stock=0),this.price=0;break;case 4:this.nows=!this.nows;break}this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},setWhere:function(){0==this.price?this.where.priceOrder="":1==this.price?this.where.priceOrder="asc":2==this.price&&(this.where.priceOrder="desc"),0==this.stock?this.where.salesOrder="":1==this.stock?this.where.salesOrder="asc":2==this.stock&&(this.where.salesOrder="desc"),this.where.news=this.nows?1:0},get_product_list:function(t){var e=this,i=this;i.setWhere(),i.loadend||i.loading||(!0===t&&i.$set(i,"productList",[]),i.loading=!0,i.loadTitle="",(0,s.getProductslist)(i.where).then((function(t){var s=t.data,o=i.$util.SplitArray(s,i.productList),n=s.length<i.where.limit;i.loadend=n,i.loading=!1,i.loadTitle=n?"已全部加载":"加载更多",i.$set(i,"productList",o),i.$set(i.where,"page",i.where.page+1),i.productList.length||e.get_host_product()})).catch((function(t){i.loading=!1,i.loadTitle="加载更多"})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.productList.length>0?this.get_product_list():this.get_host_product()}};e.default=h}).call(this,i("543d")["default"])}},[["0534","common/runtime","common/vendor"]]]);