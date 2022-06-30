(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"71c8":function(e,t,a){},e69f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm"},[a("q-card",[a("q-table",{attrs:{title:"Change Request",data:e.data,"hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",grid:"grid"==e.mode,filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[a("q-btn",{staticClass:"q-mr-xs",attrs:{outline:"",color:"primary",label:"Add New"},on:{click:function(t){e.new_customer=!0}}}),a("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n          ")])],1):e._e(),t.inFullscreen?e._e():a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid")+"\n          ")])],1),a("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportTable}})]}},{key:"body-cell-status",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-chip",{staticClass:"text-weight-bolder",staticStyle:{width:"85px"},attrs:{color:"Approved"==t.row.status?"green":"Rejected"==t.row.status?"red":"grey","text-color":"white",dense:"",square:""}},[e._v(e._s(t.row.status)+"\n          ")])],1)]}}])})],1),a("q-dialog",{model:{value:e.new_customer,callback:function(t){e.new_customer=t},expression:"new_customer"}},[a("q-card",{staticStyle:{width:"600px","max-width":"60vw"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("\n          Add new change request\n          "),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"float-right",attrs:{round:"",flat:"",dense:"",icon:"close",color:"grey-8"}})],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",{staticClass:"q-pt-none"},[a("q-form",{staticClass:"q-gutter-md"},[a("q-list",[a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("Change Name")]),a("q-input",{attrs:{dense:"",outlined:"",label:"Change Name"},model:{value:e.customer.name,callback:function(t){e.$set(e.customer,"name",t)},expression:"customer.name"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("Change Type")]),a("q-input",{attrs:{dense:"",outlined:"",label:"Change Type"},model:{value:e.customer.change_type,callback:function(t){e.$set(e.customer,"change_type",t)},expression:"customer.change_type"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("New Address Information")]),a("q-input",{attrs:{dense:"",outlined:"",label:"New Address Information"},model:{value:e.customer.new_address,callback:function(t){e.$set(e.customer,"new_address",t)},expression:"customer.new_address"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("Status")]),a("q-input",{attrs:{dense:"",outlined:"",label:"Status"},model:{value:e.customer.status,callback:function(t){e.$set(e.customer,"status",t)},expression:"customer.status"}})],1)],1)],1)],1)],1),a("q-card-actions",{staticClass:"text-teal",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Save",type:"submit",color:"primary"}})],1)],1)],1)],1)},s=[],i=(a("7f7f"),a("28a5"),a("a357"));function o(e,t){var a=void 0!==t?t(e):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}var r={data:function(){return{filter:"",customer:{},new_customer:!1,mode:"list",columns:[{name:"change_id",align:"left",label:"Change ID",field:"change_id",sortable:!0},{name:"desc",required:!0,label:"Customer Name",align:"left",field:function(e){return e.name},sortable:!0},{name:"change_type",align:"left",label:"Change Type",field:"change_type",sortable:!0},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"creation_date",align:"left",label:"Creation Date",field:"creation_date",sortable:!0}],data:[{change_id:"C001",name:"Dr. Jada Conolly",change_type:"Name Change",status:"Submitted",creation_date:"12-09-2019"},{change_id:"C002",name:"Dr. Kiley Ibbotson",change_type:"Address Change",status:"Approved",creation_date:"09-02-2019"},{change_id:"C003",name:"Dr. Leslie Tecklenburg",change_type:"New Profile",status:"Approved",creation_date:"03-25-2019"},{change_id:"C004",name:"Dr. Lia Whitledge",change_type:"Name Change",status:"Submitted",creation_date:"03-18-2019"},{change_id:"C005",name:"Dr. Sam Wileman",change_type:"Name Change",status:"Rejected",creation_date:"04-09-2019"},{change_id:"C006",name:"Dr. Edgar Colmer",change_type:"Address Change",status:"Approved",creation_date:"09-03-2019"},{change_id:"C007",name:"Dr. Kaiden Rozelle",change_type:"Address Change",status:"Submitted",creation_date:"01-12-2019"},{change_id:"C008",name:"Dr. Leslie Stopher",change_type:"New Profile",status:"Approved",creation_date:"04-15-2019"},{change_id:"C009",name:"Dr. Miguel Subasic",change_type:"New Profile",status:"Approved",creation_date:"11-09-2019"},{change_id:"C010",name:"Dr. Reese Vandygriff",change_type:"New Profile",status:"Rejected",creation_date:"01-01-2019"},{change_id:"C011",name:"Dr. Griffin Troglen",change_type:"New Profile",status:"Approved",creation_date:"04-12-2019"},{change_id:"C012",name:"Dr. Zachary Wehrley",change_type:"Address Change",status:"Submitted",creation_date:"10-09-2019"},{change_id:"C013",name:"Dr. Kyle Wahlert",change_type:"Address Change",status:"Approved",creation_date:"01-02-2019"},{change_id:"C014",name:"Dr. John Subasic",change_type:"Address Change",status:"Approved",creation_date:"07-06-2019"}],pagination:{rowsPerPage:10}}},methods:{exportTable:function(){var e=this,t=[this.columns.map((function(e){return o(e.label)}))].concat(this.data.map((function(t){return e.columns.map((function(e){return o("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})).join(",")}))).join("\r\n"),a=Object(i["a"])("change-request.csv",t,"text/csv");!0!==a&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}},c=r,l=(a("f2bc"),a("2877")),d=a("eebe"),u=a.n(d),p=a("9989"),m=a("f09f"),g=a("eaac"),h=a("9c40"),f=a("27f9"),_=a("0016"),b=a("05c0"),q=a("db86"),C=a("b047"),v=a("24e8"),y=a("a370"),w=a("eb85"),x=a("0378"),S=a("1c1c"),A=a("66e5"),N=a("4074"),Q=a("0170"),k=a("4b7e"),D=a("7f67"),T=Object(l["a"])(c,n,s,!1,null,null,null);t["default"]=T.exports;u()(T,"components",{QPage:p["a"],QCard:m["a"],QTable:g["a"],QBtn:h["a"],QInput:f["a"],QIcon:_["a"],QTooltip:b["a"],QTd:q["a"],QChip:C["a"],QDialog:v["a"],QCardSection:y["a"],QSeparator:w["a"],QForm:x["a"],QList:S["a"],QItem:A["a"],QItemSection:N["a"],QItemLabel:Q["a"],QCardActions:k["a"]}),u()(T,"directives",{ClosePopup:D["a"]})},f2bc:function(e,t,a){"use strict";var n=a("71c8"),s=a.n(n);s.a}}]);