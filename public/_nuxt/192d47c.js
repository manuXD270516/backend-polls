(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,7,9,11],{434:function(e,t,r){"use strict";var n=r(219);t.a=n.a},455:function(e,t,r){"use strict";r.r(t);var n={props:{breadcrumb:{type:Array,default:function(){return{title:{type:String,default:""},disabled:{type:Boolean,default:!1},to:{type:String,default:""}}}}}},o=r(76),l=r(138),c=r.n(l),d=r(471),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-breadcrumbs",{staticClass:"px-0",attrs:{items:e.breadcrumb}})}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBreadcrumbs:d.a})},456:function(e,t,r){"use strict";r.r(t);r(55);var n={props:{alert:{type:Object,default:function(){return{type:{type:String,default:""},value:{type:Boolean,default:!1},message:{type:String,default:""}}}}},mounted:function(){this.hideAlert()},methods:{hideAlert:function(){var e=this;this.alert.value&&setTimeout((function(){e.alert.value=!1}),4e3)}}},o=r(76),l=r(138),c=r.n(l),d=r(472),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-alert",{staticClass:"main-alert",attrs:{type:e.alert.type,value:e.alert.value,dismissible:""}},[e._v("\n  "+e._s(e.alert.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAlert:d.a})},457:function(e,t,r){"use strict";r.r(t);var n={props:{overlay:{type:Boolean,default:!1}}},o=r(76),l=r(138),c=r.n(l),d=r(213),v=r(180),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VOverlay:d.a,VProgressCircular:v.a})},459:function(e,t,r){var content=r(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("b1bed018",content,!0,{sourceMap:!1})},460:function(e,t,r){var n=r(17)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},461:function(e,t,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("5db1c400",content,!0,{sourceMap:!1})},462:function(e,t,r){var n=r(17)(!1);n.push([e.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),e.exports=n},471:function(e,t,r){"use strict";r(7),r(9),r(12),r(4),r(15),r(8),r(16);var n=r(2),o=(r(93),r(459),r(64)),l=r(6);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(0),h=Object(f.j)("v-breadcrumbs__divider","li"),m=r(23);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(l.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},472:function(e,t,r){"use strict";r(7),r(9),r(12),r(4),r(15),r(8),r(16);var n=r(2),o=(r(40),r(461),r(99)),l=r(434),c=r(115),d=r(43),v=r(23),f=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r(6),m=r(11);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(h.a)(o.a,d.a,f).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"==typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(c.a,{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},483:function(e,t,r){"use strict";var n=r(2),o=(r(40),r(58),r(222),r(12),r(4),r(8),r(55),r(116),r(7),r(9),r(15),r(16),r(6)),l=r(100),c=r(139);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},484:function(e,t,r){"use strict";var n=r(25),o=(r(89),r(91)),l=r.n(o).a.create({baseURL:"http://testing.nannys.com.bo:3004/api",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});t.a={getNannys:function(){var e=arguments;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:null,n=null,!r){t.next=8;break}return t.next=5,l.get("nanny?CityClsId="+r);case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,l.get("nanny");case 10:n=t.sent;case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))()},setNannyStatus:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var param,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return param=0,t||(param=1),r.next=4,l.put("nanny/changeState/"+e+"?currentState="+param);case 4:return n=r.sent,r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})))()},editNannyById:function(e,data){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.put("nanny/"+e,data);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},getNannyById:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get("nanny/"+e+"?entitiesInclude=true");case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},addWorkExperience:function(data,e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("nanny/workExperience/"+e,data);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},527:function(e,t,r){"use strict";r.r(t);var n={props:["title","rules"],data:function(){return{contacts_data:{phone_number:"",phone_type:"",contact_name:""},items:[{value:2,text:"Celular"},{value:1,text:"Fijo"}]}}},o=r(76),l=r(138),c=r.n(l),d=r(219),v=r(436),f=r(433),h=r(573),m=r(204),_=r(574),x=r(528),y=r(569),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"pa-4 my-6",attrs:{elevation:"2"}},[r("v-card-subtitle",{staticClass:"pb-0"},[e._v(" Contacto de Referencia: ")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{ref:"contact_name",attrs:{label:"Nombre del Contacto",rules:[e.rules.required,e.rules.max_text],counter:e.rules.counter_text,required:""},model:{value:e.contacts_data.contact_name,callback:function(t){e.$set(e.contacts_data,"contact_name",t)},expression:"contacts_data.contact_name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{ref:"phone",attrs:{type:"number",label:"Numero de Teléfono",rules:[e.rules.required,e.rules.max_phone],counter:e.rules.counter_phone,required:""},model:{value:e.contacts_data.phone_number,callback:function(t){e.$set(e.contacts_data,"phone_number",t)},expression:"contacts_data.phone_number"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-select",{ref:"phone_type",attrs:{label:"Tipo de Teléfono",items:e.items,rules:[e.rules.required],required:""},model:{value:e.contacts_data.phone_type,callback:function(t){e.$set(e.contacts_data,"phone_type",t)},expression:"contacts_data.phone_type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-btn",{attrs:{color:"error"},on:{click:function(t){return e.$emit("removeReferenceContact")}}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-close ")]),e._v("quitar\n        ")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardSubtitle:f.b,VCardText:f.c,VCol:h.a,VIcon:m.a,VRow:_.a,VSelect:x.a,VTextField:y.a})},591:function(e,t,r){"use strict";r.r(t);r(26),r(4),r(8);var n=r(484),o={data:function(){return{quantity:2,todos:[{id:1}],valid:!1,alert:{type:"success",value:!1,message:""},overlay:!1,fields:{WorkName:"",Description:"",Address:"",ReasonExit:"",StartDate:"",EndDate:"",ContactsReferences:[]},rules:{required:function(e){return!!e||"El Campo es requerido"},min_password:function(e){return(e?e.length:0)>=8||"Mínimo 8 caracteres"},max_phone:function(e){return(e?e.length:0)<=12||"Máximo 12 caracteres"},max_text:function(e){return(e?e.length:0)<=50||"Máximo 50 caracteres"},max_desc:function(e){return(e?e.length:0)<=100||"Máximo 100 caracteres"},email:function(e){return/.+@.+/.test(e)||"El email debe ser válido"},counter_text:50,counter_desc:100,counter_phone:12},breadcrumb:[{text:"HOME",disabled:!1,to:"/",exact:!0},{text:"NANNYS",disabled:!1,to:"/nannys",exact:!0},{text:"REGISTRAR NANNY",disabled:!0}]}},methods:{addReferencesContacts:function(){var e=this;this.$refs.contact_name.forEach((function(t){e.fields.ContactsReferences.push({PhoneNumber:t.$refs.phone.value,PhoneTypeId:t.$refs.phone_type.value,ContactFullname:t.$refs.contact_name.value})})),console.log(this.fields.ContactsReferences.length),console.log(this.fields.ContactsReferences)},addReferenceContactComponent:function(){this.todos.push({id:this.quantity++})},storeWorkExperience:function(){var e=this;if(this.$refs.form.validate()){this.overlay=!0,this.alert.value=!1;var t=this.$route.params.id;this.addReferencesContacts(),n.a.addWorkExperience({WorksExperiences:[this.fields]},t).then((function(t){e.overlay=!1,e.alert.type="success",e.alert.value=!0,e.alert.message=t.data.message,e.reset(),console.log(t.data)})).catch((function(t){e.overlay=!1,e.alert.type="error",e.alert.value=!0,e.alert.message="Ocurrio un error, vuelva intentarlo nuevamente.",console.log(t.response.data)}))}},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},l=r(76),c=r(138),d=r.n(c),v=r(447),f=r(219),h=r(436),m=r(433),_=r(573),x=r(454),y=r(483),O=r(204),j=r(574),w=r(569),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("breadcrumb",{attrs:{breadcrumb:e.breadcrumb}}),e._v(" "),r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100%"}},[r("v-card-title",{staticClass:"mb-2"},[e._v("Registro de Experiencia Laboral")]),e._v(" "),r("v-card-subtitle",{staticClass:"mb-6"},[e._v("\n      Los campos con * son obligatorios\n    ")]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.storeWorkExperience.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{ref:"WorkName",attrs:{rules:[e.rules.required,e.rules.max_text],counter:e.rules.counter_text,label:"Lugar de Trabajo",required:""},model:{value:e.fields.WorkName,callback:function(t){e.$set(e.fields,"WorkName",t)},expression:"fields.WorkName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.max_text],counter:e.rules.counter_text,label:"Descripción de Labor",required:""},model:{value:e.fields.Description,callback:function(t){e.$set(e.fields,"Description",t)},expression:"fields.Description"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.max_desc],counter:e.rules.counter_desc,label:"Motivo de Salida",required:""},model:{value:e.fields.ReasonExit,callback:function(t){e.$set(e.fields,"ReasonExit",t)},expression:"fields.ReasonExit"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.max_desc],counter:e.rules.counter_desc,label:"Dirección",required:""},model:{value:e.fields.Address,callback:function(t){e.$set(e.fields,"Address",t)},expression:"fields.Address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"date",rules:[e.rules.required],label:"Fecha de Inicio",required:""},model:{value:e.fields.StartDate,callback:function(t){e.$set(e.fields,"StartDate",t)},expression:"fields.StartDate"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"date",rules:[e.rules.required],label:"Fecha de Fin",required:""},model:{value:e.fields.EndDate,callback:function(t){e.$set(e.fields,"EndDate",t)},expression:"fields.EndDate"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},e._l(e.todos,(function(t,n){return r("contact-list",{key:t.id,ref:"contact_name",refInFor:!0,attrs:{rules:e.rules},on:{removeReferenceContact:function(t){return e.todos.splice(n,1)}}})})),1)],1),e._v(" "),r("v-row",{staticClass:"mt-4"},[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.addReferenceContactComponent}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v(" referencia\n              ")],1)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"success",disabled:!e.valid}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-content-save ")]),e._v("registrar\n              ")],1),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v("\n                Limpiar\n              ")]),e._v(" "),r("v-btn",{attrs:{color:"warning"},on:{click:e.resetValidation}},[e._v("\n                Limpiar Errores\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),e.alert.value?r("alert",{attrs:{alert:e.alert}}):e._e(),e._v(" "),r("overlay",{attrs:{overlay:e.overlay}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{Breadcrumb:r(455).default,ContactList:r(527).default,Alert:r(456).default,Overlay:r(457).default}),d()(component,{VApp:v.a,VBtn:f.a,VCard:h.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:_.a,VContainer:x.a,VForm:y.a,VIcon:O.a,VRow:j.a,VTextField:w.a})}}]);