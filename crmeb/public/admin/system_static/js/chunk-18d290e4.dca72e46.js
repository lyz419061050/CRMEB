(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-18d290e4"],{"0b439":function(t,e,i){"use strict";i=i("04f8"),t.exports=i&&!!Symbol.for&&!!Symbol.keyFor},"431a":function(t,e,i){},"4db3":function(t,e,i){},"54fd":function(t,e,i){"use strict";i("431a")},"57b9":function(t,e,i){"use strict";var a=i("c65b"),r=i("d066"),s=i("b622"),o=i("cb2d");t.exports=function(){var t=r("Symbol"),e=(t=t&&t.prototype,t&&t.valueOf),i=s("toPrimitive");t&&!t[i]&&o(t,i,(function(t){return a(e,this)}),{arity:1})}},"5a47":function(t,e,i){"use strict";var a=i("23e7"),r=i("04f8"),s=i("d039"),o=i("7418"),n=i("7b0b");a({target:"Object",stat:!0,forced:!r||s((function(){o.f(1)}))},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(n(t)):[]}})},"6ea4":function(t,e,i){"use strict";i("a9e3");var a={name:"",props:{stepList:{type:Array,default:function(){return[]}},isActive:{type:Number,default:0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{lineWidth:function(){var t;switch(this.stepList.length){case 3:t="wd160";case 4:t="wd120";default:t="wd100"}return t},stepActive:function(t){this.$emit("stepActive",t)}}};i("54fd"),i=i("2877"),i=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"steps df-cc"},t._l(t.stepList,(function(i,a){return e("div",{key:a,staticClass:"steps-item",class:a<=t.isActive?"active":"",on:{click:function(e){return t.stepActive(a)}}},[e("div",{staticClass:"dot df-cc"},[t._v(t._s(a+1))]),e("span",{staticClass:"title"},[t._v(t._s(i))]),a<t.stepList.length-1?e("div",{staticClass:"line",class:t.lineWidth()}):t._e()])})),0)}),[],!1,null,"31821268",null);e.a=i.exports},"73e4":function(t,e,i){"use strict";i("4db3")},a4d3:function(t,e,i){"use strict";i("d9f5"),i("b4f8"),i("c513"),i("e9c4"),i("5a47")},b4f8:function(t,e,i){"use strict";var a=i("23e7"),r=i("d066"),s=i("1a2d"),o=i("577e"),n=i("5692"),l=(i=i("0b439"),n("string-to-symbol-registry")),c=n("symbol-to-string-registry");a({target:"Symbol",stat:!0,forced:!i},{for:function(t){var e;t=o(t);return s(l,t)?l[t]:(e=r("Symbol")(t),l[t]=e,c[e]=t,e)}})},b982:function(t,e,i){"use strict";i.r(e),i("b0c0"),i("4e82"),i("a4d3"),i("e01a");var a=i("c7eb"),r=i("1da1"),s=i("2909"),o=i("5530"),n=(i("a434"),i("99af"),i("d3b7"),i("159b"),i("14d9"),i("d81d"),i("2f62")),l=i("c4ad"),c=i("b0e7"),d=i("b7be"),u=i("c4c8"),m=i("5334"),p=i("a069"),f=i("6ea4");l={name:"storeBargainCreate",components:{goodsList:l.default,uploadPictures:c.a,freightTemplate:m.a,WangEditor:p.a,steps:f.a},data:function(){return{templateRadio:0,submitOpen:!1,spinShow:!1,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},stepList:["选择砍价商品","填写基础信息","修改商品详情","修改商品规则"],isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],formValidate:{images:[],info:"",title:"",store_name:"",image:"",unit_name:"",price:0,min_price:0,bargain_max_price:10,bargain_min_price:.01,cost:0,bargain_num:1,people_num:2,stock:1,sales:0,sort:0,num:1,give_integral:0,is_postage:0,is_hot:0,status:0,section_time:[],description:"",rule:"",id:0,product_id:0,temp_id:"",attrs:[],items:[],logistics:[],freight:2,postage:1,is_commission:0},description:"",rule:"",ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入砍价活动名称",trigger:"blur"}],info:[{required:!0,message:"请输入砍价活动简介",trigger:"blur"}],store_name:[{required:!0,message:"请输入砍价商品名称",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入原价",trigger:"blur"}],min_price:[{required:!0,type:"number",message:"请输入最低购买价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],bargain_num:[{required:!0,type:"number",message:"请输入帮砍次数",trigger:"blur"}],people_num:[{required:!0,type:"number",message:"请输入砍价人数",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入单次允许购买数量",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},currentid:0,picTit:"",tableIndex:0,copy:0}},computed:Object(o.a)(Object(o.a)({},Object(n.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"140px"},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){"0"!==this.$route.params.id&&this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{getEditorContent:function(t){this.description=t},getEditorContent2:function(t){this.rule=t},freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},productAttrs:function(t){var e=this;Object(d.fb)(t.id,2).then((function(t){t=t.data.info,e.columns=t.header,e.specsData=t.attrs,e.formValidate.items=t.items,e.$set(e.formValidate,"attrs",[e.specsData[0]])})).catch((function(t){e.$message.error(t.msg)}))},getTemplateRow:function(t){this.currentid=t,this.$set(this.formValidate,"attrs",[this.specsData[t]])},productGetTemplate:function(){var t=this;Object(u.u)().then((function(e){t.templateList=e.data}))},getProductId:function(t){var e=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){e.formValidate={images:t.slider_image,info:t.store_info,title:t.store_name,store_name:t.store_name,image:t.image,unit_name:t.unit_name,price:0,min_price:0,bargain_max_price:10,bargain_min_price:.01,cost:t.cost,bargain_num:1,people_num:2,stock:t.stock,sales:t.sales,sort:t.sort,num:1,give_integral:t.give_integral,is_postage:t.is_postage,is_hot:t.is_hot,status:0,section_time:[],description:t.description,rule:"",id:0,product_id:t.id,temp_id:t.temp_id,logistics:t.temp_id||["1"],freight:t.freight,postage:t.postage,custom_form:t.custom_form,virtual_type:t.virtual_type,is_commission:t.is_commission},e.productAttrs(t)}),500)},cancel:function(){this.modals=!1},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){var i;t.dataTransfer.effectAllowed="move",e!==this.dragging&&(i=(t=Object(s.a)(this.formValidate.images)).indexOf(this.dragging),e=t.indexOf(e),t.splice.apply(t,[e,0].concat(Object(s.a)(t.splice(i,1)))),this.formValidate.images=t)},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(d.d)(this.$route.params.id).then(function(){var e=Object(r.a)(Object(a.a)().mark((function e(i){var r,s,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,s=i.data.info,t.formValidate=s,t.formValidate.rule=null===s.rule?"":s.rule,t.$set(t.formValidate,"items",s.attrs.items),t.description=t.formValidate.description,t.columns=s.attrs.header,t.specsData=s.attrs.value,o=[],s.attrs.value.forEach((function(t,e){t.opt&&(o.push(t),r.$set(r,"currentid",e),r.$set(r,"templateRadio",e),r.$set(r.formValidate,"attrs",o))})),t.spinShow=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$message.error(e.msg)}))},next:function(t){var e=this;3===this.current?(this.formValidate.description=this.description,this.formValidate.rule=this.rule,this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=e.$route.params.id||0,e.submitOpen=!0,Object(d.c)(e.formValidate).then(function(){var t=Object(r.a)(Object(a.a)().mark((function t(i){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$message.success(i.msg),setTimeout((function(){e.$router.push({path:e.$routeProStr+"/marketing/store_bargain/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$message.error(t.msg)}))}))):1===this.current?this.$refs[t].validate((function(t){return t?""===e.currentid?e.$message.error("请选择属性规格"):(e.specsData[e.currentid],e.formValidate.attrs[0].quota<=0?e.$message.error("砍价限量必须大于0"):e.formValidate.attrs[0].quota>e.formValidate.attrs[0].stock?e.$message.error("砍价限量不能超过规格库存"):(e.current+=1,void setTimeout((function(t){e.formValidate.description+=" "}),0))):e.$message.warning("请完善您的信息")})):this.formValidate.image?(this.current+=1,3==this.current&&setTimeout((function(t){e.formValidate.rule+=" "}),0)):this.$message.warning("请选择商品")},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},getRole:function(t){this.formValidate.rule=t},modalPicTap:function(t,e,i){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=i},getPic:function(t){"danFrom"===this.picTit?this.formValidate.image=t.att_dir:(this.specsData[this.tableIndex].pic=t.att_dir,this.formValidate.attrs[0].pic=t.att_dir),this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0,this.$refs.goodslist.formValidate.is_presale=0,this.$refs.goodslist.formValidate.is_virtual=0,this.$refs.goodslist.getList(),this.$refs.goodslist.goodsCategory()},validate:function(t,e,i){!1===e&&this.$message.error(i)},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:this.$routeProStr+"/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});return this.dialog=i,new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}})}),37)}}},i("73e4"),c=i("2877"),m=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("pages-header",{ref:"pageHeader",attrs:{title:t.$route.params.id?"编辑砍价商品":"添加砍价商品",backUrl:t.$routeProStr+"/marketing/store_bargain/index"}}),e("el-card",{staticClass:"mt16",attrs:{bordered:!1,shadow:"never"}},[e("el-row",{staticClass:"mt30 acea-row row-middle row-center"},[e("el-col",{attrs:{span:20}},[e("steps",{attrs:{stepList:t.stepList,isActive:t.current}})],1),e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.spinShow,expression:"spinShow"}],attrs:{span:23}},[e("el-form",{ref:"formValidate",staticClass:"form mt30",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],attrs:{label:"选择商品：",prop:"image_input"}},[e("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t.formValidate.image?e("div",{staticClass:"pictrue"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):e("div",{staticClass:"upLoad acea-row row-center-wrapper"},[e("i",{staticClass:"el-icon-goods",staticStyle:{"font-size":"24px"}})])])]),e("el-row",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}]},[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"商品主图：",prop:"image"}},[e("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[t.formValidate.image?e("div",{staticClass:"pictrue"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):e("div",{staticClass:"upLoad acea-row row-center-wrapper"},[e("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"24px"}})])])])],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"商品轮播图：",prop:"images"}},[e("div",{staticClass:"acea-row"},[t._l(t.formValidate.images,(function(i,a){return e("div",{key:a,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(e){return t.handleDragStart(e,i)},dragover:function(e){return e.preventDefault(),t.handleDragOver(e,i)},dragenter:function(e){return t.handleDragEnter(e,i)},dragend:function(e){return t.handleDragEnd(e,i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i,expression:"item"}]}),e("i",{staticClass:"el-icon-circle-close btndel",on:{click:function(e){return t.handleRemove(a)}}})])})),t.formValidate.images.length<10?e("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("duo")}}},[e("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"24px"}})]):t._e()],2)])],1),e("el-col",{attrs:{span:24}},[e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"砍价活动名称：",prop:"title","label-for":"title"}},[e("el-input",{staticClass:"content_width",attrs:{placeholder:"请输入砍价活动名称"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),e("el-col",{attrs:{span:24}},[e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"砍价活动简介：",prop:"info","label-for":"info"}},[e("el-input",{staticClass:"content_width",attrs:{placeholder:"请输入砍价活动简介",type:"textarea",rows:4},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1)],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"活动时间：",prop:"section_time"}},[e("div",[e("el-date-picker",{staticStyle:{width:"460px"},attrs:{clearable:"",editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.onchangeTime},model:{value:t.formValidate.section_time,callback:function(e){t.$set(t.formValidate,"section_time",e)},expression:"formValidate.section_time"}}),e("div",{staticClass:"grey"},[t._v("设置活动开启结束时间，用户可以在设置时间内发起参与砍价")])],1)])],1),0==t.formValidate.virtual_type?e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"物流方式：",prop:"logistics"}},[e("el-checkbox-group",{model:{value:t.formValidate.logistics,callback:function(e){t.$set(t.formValidate,"logistics",e)},expression:"formValidate.logistics"}},[e("el-checkbox",{attrs:{label:"1"}},[t._v("快递")]),e("el-checkbox",{attrs:{label:"2"}},[t._v("到店核销")])],1)],1)],1):t._e(),0==t.formValidate.virtual_type?e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"运费设置：",prop:1!=t.formValidate.freight?"freight":""}},[e("el-radio-group",{model:{value:t.formValidate.freight,callback:function(e){t.$set(t.formValidate,"freight",e)},expression:"formValidate.freight"}},[e("el-radio",{attrs:{label:2}},[t._v("固定邮费")]),e("el-radio",{attrs:{label:3}},[t._v("运费模板")])],1)],1)],1):t._e(),3!=t.formValidate.freight&&1!=t.formValidate.freight&&0==t.formValidate.virtual_type?e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:""}},[e("div",{staticClass:"acea-row"},[e("el-input-number",{staticClass:"content_width",attrs:{controls:!1,min:0,max:9999999999,placeholder:"请输入金额"},model:{value:t.formValidate.postage,callback:function(e){t.$set(t.formValidate,"postage",e)},expression:"formValidate.postage"}})],1)])],1):t._e(),3==t.formValidate.freight&&0==t.formValidate.virtual_type?e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"",prop:"temp_id"}},[e("div",{staticClass:"acea-row"},[e("el-select",{staticClass:"content_width",attrs:{clearable:"",placeholder:"请选择运费模板"},model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.templateList,(function(t,i){return e("el-option",{key:i,attrs:{value:t.id,label:t.name}})})),1),e("span",{staticClass:"addfont",on:{click:t.freight}},[t._v("新增运费模板")])],1)])],1):t._e(),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"砍价人数：",prop:"people_num","label-for":"people_num"}},[e("div",[e("el-input-number",{staticClass:"content_width",attrs:{controls:!1,placeholder:"请输入砍价人数","element-id":"people_num",min:2,max:1e4,precision:0},model:{value:t.formValidate.people_num,callback:function(e){t.$set(t.formValidate,"people_num",e)},expression:"formValidate.people_num"}}),e("div",{staticClass:"grey"},[t._v("需要多少人砍价成功")])],1)])],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"帮砍次数：",prop:"bargain_num","label-for":"bargain_num"}},[e("div",[e("el-input-number",{staticClass:"content_width",attrs:{controls:!1,placeholder:"请输入帮砍次数",min:1,max:1e4,precision:0},model:{value:t.formValidate.bargain_num,callback:function(e){t.$set(t.formValidate,"bargain_num",e)},expression:"formValidate.bargain_num"}}),e("div",{staticClass:"grey"},[t._v("\n                    单个商品用户可以帮砍的次数，例：次数设置为1，甲和乙同时将商品A的砍价链接发给丙，丙只能帮甲或乙其中一个人砍价\n                  ")])],1)])],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"购买数量限制：",prop:"num"}},[e("div",[e("el-input-number",{staticClass:"content_width",attrs:{controls:!1,placeholder:"购买数量限制",min:1,max:1e4,precision:0},model:{value:t.formValidate.num,callback:function(e){t.$set(t.formValidate,"num",e)},expression:"formValidate.num"}}),e("div",{staticClass:"grey"},[t._v("单个活动每个用户发起砍价次数限制")])],1)])],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[e("el-input",{staticClass:"content_width",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"排序："}},[e("el-input-number",{staticClass:"content_width",attrs:{controls:!1,placeholder:"请输入排序","element-id":"sort",min:0,max:1e4,precision:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"砍价是否参与分销：",props:"is_commission","label-for":"is_commission"}},[e("div",[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,size:"large","active-text":"开启","inactive-text":"关闭"},model:{value:t.formValidate.is_commission,callback:function(e){t.$set(t.formValidate,"is_commission",e)},expression:"formValidate.is_commission"}}),e("div",{staticClass:"grey"},[t._v("商品是否参与商城分销返佣")])],1)])],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"活动状态：",props:"status","label-for":"status"}},[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,size:"large","active-text":"开启","inactive-text":"关闭"},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}})],1)],1),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"规格选择："}},[e("el-table",{attrs:{data:t.specsData,border:""}},[e("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-radio",{attrs:{type:"index",label:i.$index},on:{input:t.getTemplateRow},model:{value:t.templateRadio,callback:function(e){t.templateRadio=e},expression:"templateRadio"}},[t._v(" ")])]}}])}),t._l(t.columns,(function(i,a){return e("el-table-column",{key:a,attrs:{label:i.title,"min-width":i.minWidth},scopedSlots:t._u([{key:"default",fn:function(a){return[i.key?[e("div",[e("span",[t._v(t._s(a.row[i.key]))])])]:"pic"===i.slot?[e("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",a.$index)}}},[a.row.pic?e("div",{staticClass:"pictrue pictrueTab"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.row.pic,expression:"scope.row.pic"}]})]):e("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[e("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"24px"}})])])]:"price"===i.slot?[e("el-input-number",{staticClass:"priceBox",attrs:{controls:!1,min:0,precision:2,"active-change":!1},model:{value:a.row.price,callback:function(e){t.$set(a.row,"price",e)},expression:"scope.row.price"}})]:"min_price"===i.slot?[e("el-input-number",{staticClass:"priceBox",attrs:{controls:!1,min:0,precision:2,"active-change":!1},model:{value:a.row.min_price,callback:function(e){t.$set(a.row,"min_price",e)},expression:"scope.row.min_price"}})]:"quota"===i.slot?[e("el-input-number",{staticClass:"priceBox",attrs:{controls:!1,min:1,"active-change":""},model:{value:a.row.quota,callback:function(e){t.$set(a.row,"quota",e)},expression:"scope.row.quota"}})]:t._e()]}}],null,!0)})}))],2)],1)],1)],1),2===t.current?e("div",[e("el-form-item",{attrs:{label:"内容："}},[e("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.description},on:{editorContent:t.getEditorContent}})],1)],1):t._e(),3===t.current?e("div",[e("el-form-item",{attrs:{label:"规则："}},[e("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.rule},on:{editorContent:t.getEditorContent2}})],1)],1):t._e(),e("el-form-item",[0!==t.current?e("el-button",{staticClass:"submission",attrs:{disabled:t.$route.params.id&&"0"!==t.$route.params.id&&1===t.current||0===t.current},on:{click:t.step}},[t._v("上一步")]):t._e(),e("el-button",{staticClass:"submission",attrs:{type:"primary",disabled:t.submitOpen&&3===t.current},on:{click:function(e){return t.next("formValidate")}}},[t._v(t._s(3===t.current?"提交":"下一步"))])],1)],1)],1)],1)],1),e("el-dialog",{staticClass:"paymentFooter",attrs:{visible:t.modals,title:"商品列表",width:"1000px"},on:{"update:visible":function(e){t.modals=e}}},[e("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}})],1),e("el-dialog",{attrs:{visible:t.modalPic,width:"950px",title:"上传商品图","close-on-click-modal":!1},on:{"update:visible":function(e){t.modalPic=e}}},[t.modalPic?e("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1),e("freight-template",{ref:"template",on:{addSuccess:t.productGetTemplate}})],1)}),[],!1,null,"b599e2e2",null);e.default=m.exports},c513:function(t,e,i){"use strict";var a=i("23e7"),r=i("1a2d"),s=i("d9b5"),o=i("0d51"),n=i("5692"),l=(i=i("0b439"),n("symbol-to-string-registry"));a({target:"Symbol",stat:!0,forced:!i},{keyFor:function(t){if(!s(t))throw new TypeError(o(t)+" is not a symbol");if(r(l,t))return l[t]}})},d9f5:function(t,e,i){"use strict";function a(t,e,i){var a=it(Y,e);a&&delete Y[e],at(t,e,i),a&&t!==Y&&at(Y,e,a)}function r(t,e){var i=nt[t]=$(Z);return K(i,{type:Q,tag:t,description:e}),b||(i.description=e),i}function s(t,e,i){return t===Y&&s(lt,e,i),y(t),e=x(e),y(i),(_(nt,e)?(i.enumerable?(_(t,J)&&t[J][e]&&(t[J][e]=!1),i=$(i,{enumerable:k(0,!1)})):(_(t,J)||at(t,J,k(1,{})),t[J][e]=!0),dt):at)(t,e,i)}function o(t,e){y(t);var i=V(e);e=S(i).concat(d(i));return G(e,(function(e){b&&!p(n,i,e)||s(t,e,i[e])})),t}function n(t){t=x(t);var e=p(st,this,t);return!(this===Y&&_(nt,t)&&!_(lt,t))&&(!(e||!_(this,t)||!_(nt,t)||_(this,J)&&this[J][t])||e)}function l(t,e){var i;t=V(t),e=x(e);if(t!==Y||!_(nt,e)||_(lt,e))return!(i=it(t,e))||!_(nt,e)||_(t,J)&&t[J][e]||(i.enumerable=!0),i}function c(t){t=rt(V(t));var e=[];return G(t,(function(t){_(nt,t)||_(I,t)||ot(e,t)})),e}function d(t){var e=t===Y,i=(t=rt(e?lt:V(t)),[]);return G(t,(function(t){!_(nt,t)||e&&!_(Y,t)||ot(i,nt[t])})),i}var u=i("23e7"),m=i("da84"),p=i("c65b"),f=i("e330"),g=i("c430"),b=i("83ab"),h=i("04f8"),v=i("d039"),_=i("1a2d"),w=i("3a9b"),y=i("825a"),V=i("fc6a"),x=i("a04b"),C=i("577e"),k=i("5c6c"),$=i("7c73"),S=i("df75"),O=i("241c"),P=i("057f"),T=i("7418"),D=i("06cf"),E=i("9bf2"),j=i("37e8"),q=i("d1e7"),L=i("cb2d"),R=i("edd0"),z=i("5692"),A=i("f772"),I=i("d012"),B=i("90e3"),U=i("b622"),N=i("e538"),W=i("e065"),F=i("57b9"),H=i("d44e"),M=i("69f3"),G=i("b727").forEach,J=A("hidden"),Q="Symbol",K=(i="prototype",M.set),X=M.getterFor(Q),Y=Object[i],Z=(A=m.Symbol,A&&A[i]),tt=m.RangeError,et=m.TypeError,it=(M=m.QObject,D.f),at=E.f,rt=P.f,st=q.f,ot=f([].push),nt=z("symbols"),lt=z("op-symbols"),ct=(f=z("wks"),!M||!M[i]||!M[i].findChild),dt=b&&v((function(){return 7!==$(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?a:at;h||(L(Z=(A=function(){if(w(Z,this))throw new et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?C(arguments[0]):void 0,e=B(t),i=function(r){var s=void 0===this?m:this;s===Y&&p(i,lt,r),_(s,J)&&_(s[J],e)&&(s[J][e]=!1),r=k(1,r);try{dt(s,e,r)}catch(t){if(!(t instanceof tt))throw t;a(s,e,r)}};return b&&ct&&dt(Y,e,{configurable:!0,set:i}),r(e,t)})[i],"toString",(function(){return X(this).tag})),L(A,"withoutSetter",(function(t){return r(B(t),t)})),q.f=n,E.f=s,j.f=o,D.f=l,O.f=P.f=c,T.f=d,N.f=function(t){return r(U(t),t)},b&&(R(Z,"description",{configurable:!0,get:function(){return X(this).description}}),g||L(Y,"propertyIsEnumerable",n,{unsafe:!0}))),u({global:!0,constructor:!0,wrap:!0,forced:!h,sham:!h},{Symbol:A}),G(S(f),(function(t){W(t)})),u({target:Q,stat:!0,forced:!h},{useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),u({target:"Object",stat:!0,forced:!h,sham:!b},{create:function(t,e){return void 0===e?$(t):o($(t),e)},defineProperty:s,defineProperties:o,getOwnPropertyDescriptor:l}),u({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:c}),F(),H(A,Q),I[J]=!0},e01a:function(t,e,i){"use strict";var a,r,s,o,n,l,c,d=i("23e7"),u=i("83ab"),m=i("da84"),p=i("e330"),f=i("1a2d"),g=i("1626"),b=i("3a9b"),h=i("577e"),v=i("edd0"),_=(i=i("e893"),m.Symbol),w=_&&_.prototype;!u||!g(_)||"description"in w&&void 0===_().description||(a={},i(m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:h(arguments[0]),e=b(w,this)?new _(t):void 0===t?_():_(t);return""===t&&(a[e]=!0),e},_),(m.prototype=w).constructor=m,r="Symbol(description detection)"===String(_("description detection")),s=p(w.valueOf),o=p(w.toString),n=/^Symbol\((.*)\)[^)]+$/,l=p("".replace),c=p("".slice),v(w,"description",{configurable:!0,get:function(){var t=s(this);return f(a,t)?"":(t=o(t),""===(t=r?c(t,7,-1):l(t,n,"$1"))?void 0:t)}}),d({global:!0,constructor:!0,forced:!0},{Symbol:m}))},e065:function(t,e,i){"use strict";var a=i("428f"),r=i("1a2d"),s=i("e538"),o=i("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});r(e,t)||o(e,t,{value:s.f(t)})}},e538:function(t,e,i){"use strict";i=i("b622"),e.f=i}}]);