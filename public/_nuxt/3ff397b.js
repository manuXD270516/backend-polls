(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{527:function(e,t,n){"use strict";n.r(t);var o={props:["title","rules"],data:function(){return{contacts_data:{phone_number:"",phone_type:"",contact_name:""},items:[{value:2,text:"Celular"},{value:1,text:"Fijo"}]}}},c=n(76),r=n(138),l=n.n(r),d=n(219),_=n(436),m=n(433),v=n(573),f=n(204),x=n(574),h=n(528),C=n(569),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-4 my-6",attrs:{elevation:"2"}},[n("v-card-subtitle",{staticClass:"pb-0"},[e._v(" Contacto de Referencia: ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-text-field",{ref:"contact_name",attrs:{label:"Nombre del Contacto",rules:[e.rules.required,e.rules.max_text],counter:e.rules.counter_text,required:""},model:{value:e.contacts_data.contact_name,callback:function(t){e.$set(e.contacts_data,"contact_name",t)},expression:"contacts_data.contact_name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{ref:"phone",attrs:{type:"number",label:"Numero de Teléfono",rules:[e.rules.required,e.rules.max_phone],counter:e.rules.counter_phone,required:""},model:{value:e.contacts_data.phone_number,callback:function(t){e.$set(e.contacts_data,"phone_number",t)},expression:"contacts_data.phone_number"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-select",{ref:"phone_type",attrs:{label:"Tipo de Teléfono",items:e.items,rules:[e.rules.required],required:""},model:{value:e.contacts_data.phone_type,callback:function(t){e.$set(e.contacts_data,"phone_type",t)},expression:"contacts_data.phone_type"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-btn",{attrs:{color:"error"},on:{click:function(t){return e.$emit("removeReferenceContact")}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-close ")]),e._v("quitar\n        ")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:_.a,VCardSubtitle:m.b,VCardText:m.c,VCol:v.a,VIcon:f.a,VRow:x.a,VSelect:h.a,VTextField:C.a})}}]);