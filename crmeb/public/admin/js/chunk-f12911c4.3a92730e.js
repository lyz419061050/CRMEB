(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f12911c4"],{"3dda":function(e,t){},"433f":function(e,t,n){e.exports=n.p+"img/sw.3ef10e8b.jpg"},7075:function(e,t,n){},a979:function(e,t,n){"use strict";var i=n("b3a7"),r=n.n(i);r.a},b3a7:function(e,t,n){},d666:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper-box"},[n("div",{staticClass:"page-account kf"},[n("div",{staticClass:"container",class:[e.fullWidth>768?"containerSamll":"containerBig"]},[n("div",{staticClass:"index_from page-account-container"},[n("div",{style:{display:e.loginType?"none":"block"}},[e._m(0),n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit("formInline")}}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",placeholder:"请输入用户名",size:"large"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"请输入密码",size:"large"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}})],1),n("FormItem",[n("Button",{staticClass:"btn",attrs:{type:"primary",long:"",size:"large"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登录\n                            ")])],1)],1),e.isMobile?e._e():n("div",{staticClass:"qh_box",on:{click:e.bindScan}},[n("span",{staticClass:"iconfont iconerweima2"})])],1),n("div",{style:{display:e.loginType?"block":"none"}},[e._m(1),n("div",{staticClass:"code-box"},[n("div",{ref:"qrCodeUrl",staticClass:"qrcode"}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.rxpired,expression:"rxpired"}],staticClass:"rxpired-box"},[n("p",[e._v("已过期")]),n("Button",{attrs:{type:"primary"},on:{click:e.bindRefresh}},[e._v("点击刷新")])],1)]),n("div",{staticClass:"qh_box",on:{click:function(t){e.loginType=0}}},[n("span",{staticClass:"iconfont iconzhanghaomima"})])])])])]),n("div",{staticClass:"foot-box"},[e._v("\n        Copyright © 2022 西安众邦网络科技有限公司 | "+e._s(e.version)+" 客服系统\n    ")])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-account-top"},[n("div",{staticClass:"page-account-top-logo"},[e._v("客服登录")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-account-top"},[n("div",{staticClass:"page-account-top-logo"},[e._v("微信扫码登录")])])}],a=(n("a481"),n("96cf"),n("3b8d")),o=(n("7f7f"),n("42e3")),s=n("3dda"),c=n.n(s),u=n("d708"),l=n("c276"),d=n("d044"),f=n.n(d),m={mixins:[c.a],data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},modals:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},errorNum:0,jigsaw:null,login_logo:"",swiperList:[],defaultSwiperList:n("433f"),loginType:0,codeKey:"",scanTime:"",rxpired:!1,isMobile:!1,version:"",isScan:!1,timeNum:0}},created:function(){var e=this;Object(o["p"])().then((function(t){e.version=t.data.version,t.data.site_name&&(document.title=t.data.site_name)})),this.isMobile=this.$store.state.media.isMobile;var t=this;top!=window&&(top.location.href=location.href),document.onkeydown=function(e){if("login"===t.$route.name){var n=window.event.keyCode;13===n&&t.handleSubmit("formInline")}},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}},$route:function(e){this.captchas()}},mounted:function(){this.$nextTick((function(){})),this.captchas()},methods:{bindScan:function(){this.isScan||(this.isScan=!0,this.getSanCodeKey()),this.loginType=1},creatQrCode:function(){var e="".concat(window.location.protocol,"//").concat(window.location.host,"/pages/users/scan_login/index?key=").concat(this.codeKey);new f.a(this.$refs.qrCodeUrl,{text:e,width:160,height:160,colorDark:"#000000",colorLight:"#ffffff",correctLevel:f.a.CorrectLevel.H})},closeModel:function(){var e=this,t=this.$Message.loading({content:"登录中...",duration:0});Object(o["a"])({account:this.formInline.username,password:this.formInline.password,imgcode:this.formInline.code}).then(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(i){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t(),r=e.getExpiresTime(i.data.exp_time),Object(l["q"])("kefu_uuid",i.data.kefuInfo.uid,r),Object(l["q"])("kefu_token",i.data.token,r),Object(l["q"])("kefu_expires_time",i.data.exp_time,r),Object(l["q"])("kefuInfo",i.data.kefuInfo,r),e.$store.commit("kefu/setInfo",i.data.kefuInfo),!e.$store.state.media.isMobile){n.next=11;break}return n.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/mobile_list"}));case 11:return n.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/pc_list"}));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){t();var i=void 0===n?{}:n;e.errorNum++,e.captchas(),e.$Message.error(i.msg||"登录失败"),e.jigsaw&&e.jigsaw.reset()}))},getExpiresTime:function(e){var t=Math.round(new Date/1e3),n=e-t;return parseFloat(parseFloat(parseFloat(n/60)/60)/24)},closefail:function(){this.jigsaw&&this.jigsaw.reset(),this.$Message.error("校验错误")},handleResize:function(e){this.fullWidth=document.documentElement.clientWidth},captchas:function(){this.imgcode=u["a"].apiBaseURL+"/captcha_pro?"+Date.parse(new Date)},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.closeModel()}))},getSanCodeKey:function(){var e=this;Object(o["l"])().then((function(t){e.codeKey=t.data.key,e.creatQrCode(),e.scanTime=setInterval((function(){e.timeNum++,e.timeNum>=60?(e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0):e.getScanStatus()}),1e3)})).catch((function(t){e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0,e.$Message.error(t.msg)}))},getScanStatus:function(){var e=this;Object(o["H"])(this.codeKey).then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0==n.data.status&&(e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0),n.data.status,3!=n.data.status){t.next=15;break}if(window.clearInterval(e.scanTime),i=e.getExpiresTime(n.data.exp_time),Object(l["q"])("kefu_uuid",n.data.kefuInfo.uid,i),Object(l["q"])("kefu_token",n.data.token,i),Object(l["q"])("kefu_expires_time",n.data.exp_time,i),Object(l["q"])("kefuInfo",n.data.kefuInfo,i),e.$store.commit("kefu/setInfo",n.data.kefuInfo),!e.$store.state.media.isMobile){t.next=14;break}return t.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/mobile_list"}));case 14:return t.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/pc_list"}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Modal.error({title:"提示",content:t.msg}),e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0}))},bindRefresh:function(){this.$refs.qrCodeUrl.innerHTML="",this.rxpired=!1,this.getSanCodeKey()}},beforeCreate:function(){},beforeDestroy:function(){this.timeNum=0,this.$refs.qrCodeUrl.innerHTML="",window.clearInterval(this.scanTime),window.removeEventListener("resize",this.handleResize)}},p=m,h=(n("db71"),n("a979"),n("2877")),g=Object(h["a"])(p,i,r,!1,null,"6f5207b6",null);t["default"]=g.exports},db71:function(e,t,n){"use strict";var i=n("7075"),r=n.n(i);r.a}}]);