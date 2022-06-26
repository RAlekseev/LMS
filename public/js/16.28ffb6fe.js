(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"360b":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[o("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[o("q-card",{attrs:{flat:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v("Add Deposit")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",[o("q-form",[o("q-list",[o("q-item",[o("q-item-section",[o("q-item-label",{staticClass:"q-pb-xs"},[e._v("Account")]),o("q-select",{attrs:{dense:"",label:"Account",outlined:"",options:e.options,"stack-label":"","options-dense":""},model:{value:e.deposit.account,callback:function(t){e.$set(e.deposit,"account",t)},expression:"deposit.account"}})],1)],1),o("q-item",[o("q-item-section",[o("q-item-label",{staticClass:"q-pb-xs"},[e._v("Deposit Date")]),o("q-input",{attrs:{dense:"",outlined:"",mask:"date",label:"Deposit Date"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{ref:"depositDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[o("q-date",{on:{input:function(){return e.$refs.depositDateProxy.hide()}},model:{value:e.deposit.date,callback:function(t){e.$set(e.deposit,"date",t)},expression:"deposit.date"}})],1)],1)]},proxy:!0}]),model:{value:e.deposit.date,callback:function(t){e.$set(e.deposit,"date",t)},expression:"deposit.date"}})],1)],1),o("q-item",[o("q-item-section",[o("q-item-label",{staticClass:"q-pb-xs"},[e._v("Description")]),o("q-input",{attrs:{dense:"",outlined:"",label:"Description"},model:{value:e.deposit.description,callback:function(t){e.$set(e.deposit,"description",t)},expression:"deposit.description"}})],1)],1),o("q-item",[o("q-item-section",[o("q-item-label",{staticClass:"q-pb-xs"},[e._v("Amount")]),o("q-input",{attrs:{dense:"",type:"number",outlined:"",label:"Amount"},model:{value:e.deposit.amount,callback:function(t){e.$set(e.deposit,"amount",t)},expression:"deposit.amount"}})],1)],1),o("q-item",[o("q-item-section",[o("q-item-label",{staticClass:"q-pb-xs"},[e._v("Phone")]),o("q-input",{attrs:{dense:"",type:"number",outlined:"",label:"Phone"},model:{value:e.deposit.phone,callback:function(t){e.$set(e.deposit,"phone",t)},expression:"deposit.phone"}})],1)],1)],1),o("q-card-actions",{staticClass:"text-teal",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Save",type:"submit",color:"primary"}})],1)],1)],1)],1)],1),o("div",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[o("q-card",{attrs:{flat:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v("Recent Deposits")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",[o("q-table",{attrs:{data:e.data,"hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",grid:"grid"==e.mode,filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[o("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[o("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n                ")])],1):e._e(),t.inFullscreen?e._e():o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[o("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid")+"\n                ")])],1),o("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportDepositsTable}})]}}])})],1)],1)],1)])])},a=[],n=(o("7f7f"),o("28a5"),o("a357"));function s(e,t){var o=void 0!==t?t(e):e;return o=void 0===o||null===o?"":String(o),o=o.split('"').join('""'),'"'.concat(o,'"')}var l={data:function(){return{filter:"",mode:"list",deposit:{},pagination:{rowsPerPage:10},options:["National Bank","Bank of Asia","Corporate Bank","Public Bank"],columns:[{name:"description",align:"left",label:"Description",field:"description",sortable:!0},{name:"amount",label:"Amount",align:"left",field:"amount",sortable:!0}],data:[{description:"Invoice 10 Payment",amount:"$ 200"},{description:"Pvt Ltd Invoice",amount:"$ 300"},{description:"Invoice 6 Payment",amount:"$ 250"},{description:"Invoice 18 Payment",amount:"$ 400"},{description:"John and company Payment",amount:"$ 500"}]}},methods:{exportDepositsTable:function(){var e=this,t=[this.columns.map((function(e){return s(e.label)}))].concat(this.data.map((function(t){return e.columns.map((function(e){return s("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})).join(",")}))).join("\r\n"),o=Object(n["a"])("deposits.csv",t,"text/csv");!0!==o&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},showLoading:function(){var e=this;this.$q.loading.show({message:"<b>Demo loading screen, replace your message here<b>"}),this.timer=setTimeout((function(){e.$q.loading.hide(),e.timer=void 0}),3e3)},beforeDestroy:function(){void 0!==this.timer&&(clearTimeout(this.timer),this.$q.loading.hide())}},beforeMount:function(){this.showLoading()}},r=l,c=o("2877"),d=o("eebe"),p=o.n(d),u=o("9989"),m=o("f09f"),f=o("a370"),b=o("eb85"),q=o("0378"),v=o("1c1c"),g=o("66e5"),h=o("4074"),x=o("0170"),y=o("ddd8"),k=o("27f9"),_=o("0016"),w=o("7cbe"),$=o("52ee"),Q=o("4b7e"),C=o("9c40"),D=o("eaac"),P=o("05c0"),S=o("7f67"),I=Object(c["a"])(r,i,a,!1,null,"3d2ccfea",null);t["default"]=I.exports;p()(I,"components",{QPage:u["a"],QCard:m["a"],QCardSection:f["a"],QSeparator:b["a"],QForm:q["a"],QList:v["a"],QItem:g["a"],QItemSection:h["a"],QItemLabel:x["a"],QSelect:y["a"],QInput:k["a"],QIcon:_["a"],QPopupProxy:w["a"],QDate:$["a"],QCardActions:Q["a"],QBtn:C["a"],QTable:D["a"],QTooltip:P["a"]}),p()(I,"directives",{ClosePopup:S["a"]})}}]);