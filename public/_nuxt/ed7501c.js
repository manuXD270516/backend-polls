(window.webpackJsonp=window.webpackJsonp||[]).push([[27,11],{455:function(t,e,r){"use strict";r.r(e);var n={props:{breadcrumb:{type:Array,default:function(){return{title:{type:String,default:""},disabled:{type:Boolean,default:!1},to:{type:String,default:""}}}}}},o=r(76),l=r(138),c=r.n(l),d=r(471),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-breadcrumbs",{staticClass:"px-0",attrs:{items:t.breadcrumb}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBreadcrumbs:d.a})},456:function(t,e,r){"use strict";r.r(e);r(55);var n={props:{alert:{type:Object,default:function(){return{type:{type:String,default:""},value:{type:Boolean,default:!1},message:{type:String,default:""}}}}},mounted:function(){this.hideAlert()},methods:{hideAlert:function(){var t=this;this.alert.value&&setTimeout((function(){t.alert.value=!1}),4e3)}}},o=r(76),l=r(138),c=r.n(l),d=r(472),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{staticClass:"main-alert",attrs:{type:t.alert.type,value:t.alert.value,dismissible:""}},[t._v("\n  "+t._s(t.alert.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a})},457:function(t,e,r){"use strict";r.r(e);var n={props:{overlay:{type:Boolean,default:!1}}},o=r(76),l=r(138),c=r.n(l),d=r(213),v=r(180),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overlay",{attrs:{value:t.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VOverlay:d.a,VProgressCircular:v.a})},467:function(t,e,r){"use strict";var n=r(25),o=(r(89),r(91)),l=r.n(o).a.create({baseURL:"http://testing.nannys.com.bo:3004/api",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});e.a={getServicesProgrammed:function(){var t=arguments;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:null,n=null,!r){e.next=8;break}return e.next=5,l.get("serviceProposal/web/1/typeNanny?CityClsId="+r);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,l.get("serviceProposal/web/1/typeNanny");case 10:n=e.sent;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))()},getServiceProgrammedById:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("serviceProposal/"+t+"?TypeNannyId=1");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},getServicesUrgent:function(){var t=arguments;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:null,n=null,!r){e.next=8;break}return e.next=5,l.get("serviceProposal/web/2/typeNanny?CityClsId="+r);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,l.get("serviceProposal/web/2/typeNanny");case 10:n=e.sent;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))()},getServiceUrgentById:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("serviceProposal/"+t+"?TypeNannyId=2");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},getServicesMonthly:function(){var t=arguments;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:null,n=null,!r){e.next=8;break}return e.next=5,l.get("serviceProposal/web/3/typeNanny?CityClsId="+r);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,l.get("serviceProposal/web/3/typeNanny");case 10:n=e.sent;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))()},getServiceMonthlyById:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("serviceProposal/"+t+"?TypeNannyId=3");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},changeServiceStatus:function(data){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("serviceProposal/"+data.serviceId+"/management/"+data.typeNannyId+"/typeNanny?state="+data.status+"&AssignmentNannyId="+data.nannyId);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()},getServicesStatus:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get("serviceProposalState");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()}}},593:function(t,e,r){"use strict";r.r(e);r(4),r(77);var n=r(467),o={name:"DetailServiceProgrammed",data:function(){return{overlay:!1,status:!1,disabledStatus:!1,loadingStatus:!1,data:[],alert:{type:"success",value:!1,message:""},breadcrumb:[{text:"HOME",disabled:!1,to:"/",exact:!0},{text:"SERVICIOS",to:"/services/programmed",exact:!0},{text:"DETALLE",disabled:!0}]}},mounted:function(){this.getServiceProgrammedById()},methods:{getFormatMonth:function(data){var t=new Date(data);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},getFormatHour:function(data){var t=new Date(data);return t.getHours()+":"+t.getMinutes()},getServiceProgrammedById:function(){var t=this;this.overlay=!0;var e=this.$route.params.id;n.a.getServiceProgrammedById(e).then((function(e){t.overlay=!1,t.data=e.data,t.status="Comision Cobrada"===t.data.State&&"Comision Cobrada",t.disabledStatus="Comision Cobrada"===t.status||"Pagada"!==t.data.State,console.log(e.data)})).catch((function(e){t.overlay=!1,console.log(e.response.data)}))},changeStatus:function(){var t=this;if("Pagada"===this.data.State&&"Comision Cobrada"===this.status){this.loadingStatus=!0;var param={serviceId:this.data.ServiceProposalId,nannyId:this.data.AssignmentNannyId,typeNannyId:1,status:this.status.toString()};n.a.changeServiceStatus(param).then((function(e){t.disabledStatus=!0,t.loadingStatus=!1,t.data.State=t.status.toString(),t.alert.type="success",t.alert.value=!0,t.alert.message=e.data.content,console.log(e.data)})).catch((function(e){t.loadingStatus=!1,t.alert.type="error",t.alert.value=!0,t.alert.message=e.response.data.content,console.log(e.response.data)}))}}}},l=r(76),c=r(138),d=r.n(c),v=r(447),m=r(436),f=r(433),y=r(573),h=r(206),x=r(574),_=r(517),S=r(569),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("breadcrumb",{attrs:{breadcrumb:t.breadcrumb}}),t._v(" "),r("overlay",{attrs:{overlay:t.overlay}}),t._v(" "),t.alert.value?r("alert",{attrs:{alert:t.alert}}):t._e(),t._v(" "),r("h2",[t._v("Detalle del Servicio")]),t._v(" "),Object.keys(t.data).length>0?r("v-card",{staticClass:"my-12"},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),r("v-card-title",[t._v("Nanny")]),t._v(" "),r("v-card-text",[t.data.NannyInformation?r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{value:t.data.NannyInformation.Fullname,label:"Nombre",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{value:t.data.NannyInformation.Email,label:"Email",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{value:t.data.NannyInformation.Phone,label:"Teléfono",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{value:t.data.NannyInformation.Address,label:"Dirección",readonly:""}})],1)],1):t._e()],1),t._v(" "),r("v-card-title",[t._v("Padre")]),t._v(" "),r("v-card-text",[t.data.ParentsInformation?r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.data.ParentsInformation.Fullname,label:"Nombre",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.data.ParentsInformation.Email,label:"Email",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.data.ParentsInformation.Phone,label:"Teléfono",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.data.ParentsInformation.EmergencyPhone,label:"Teléfono Emergencia",readonly:""}})],1)],1):t._e()],1),t._v(" "),r("v-card-title",[t._v("Servicio")]),t._v(" "),r("v-card-text",[t.data.Schedule?r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{value:t.getFormatMonth(t.data.Schedule.ServiceDate),label:"Fecha de Ejecución",readonly:""}})],1)],1):t._e(),t._v(" "),t.data.Schedule?r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"text-button font-weight-bold mb-2"},[t._v("\n            Hora Planificada\n          ")]),t._v(" "),r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.getFormatHour(t.data.Schedule.PlannedStartTime),label:"Hora de Inicio",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.getFormatHour(t.data.Schedule.PlannedEndTime),label:"Hora de Finalización",readonly:""}})],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"mb-6",attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"text-button font-weight-bold mb-2"},[t._v("Hora Ejecutada")]),t._v(" "),r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.getFormatHour(t.data.Schedule.ExecutedStartTime),label:"Hora de Inicio",readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.getFormatHour(t.data.Schedule.ExecutedEndTime),label:"Hora de Finalización",readonly:""}})],1)],1)],1)],1)],1):t._e()],1),t._v(" "),r("v-card-title",[t._v(" Detalle del Costo ")]),t._v(" "),r("v-card-text",[t.data.CostDetail&&t.data.CostDetail.length?[r("v-row",t._l(t.data.CostDetail,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"text-button font-weight-bold mb-2"},[t._v("\n              "+t._s(e.Turn)+"\n            ")]),t._v(" "),r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.OfferedCost,label:"Costo Ofertado "+e.CurrencyAbbrev,readonly:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.ExecutedCost,label:"Costo Ejecutado "+e.CurrencyAbbrev,readonly:""}})],1)],1)],1)],1)],1)})),1)]:t._e()],2),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"6"}},[r("p",{staticClass:"text-subtitle-1"},[t._v("\n            Estado Actual:\n            "),r("span",{staticStyle:{color:"#00a7d8"}},[t._v(t._s(t.data.State))])])]),t._v(" "),r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"6"}},[r("v-switch",{attrs:{label:"Comisión Cobrada",disabled:t.disabledStatus,loading:t.loadingStatus,"true-value":"Comision Cobrada",color:"green accent-4","false-value":!1},on:{change:t.changeStatus},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[t.data.Schedule&&t.data.Schedule.TotalCost.value?r("h3",{staticClass:"text-h6"},[t._v("\n            Costo Total:\n            "),r("span",{staticStyle:{color:"#00a7d8"}},[t._v(t._s(t.data.Schedule.TotalCost.Value))]),t._v(" "),r("span",{staticStyle:{color:"#00a7d8"}},[t._v(t._s(t.data.Schedule.TotalCost.Currency))])]):t._e()])],1)],1)],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Breadcrumb:r(455).default,Overlay:r(457).default,Alert:r(456).default}),d()(component,{VApp:v.a,VCard:m.a,VCardText:f.c,VCardTitle:f.d,VCol:y.a,VProgressLinear:h.a,VRow:x.a,VSwitch:_.a,VTextField:S.a})}}]);