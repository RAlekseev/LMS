(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0e3a":function(t,e,a){},1498:function(t,e,a){"use strict";var r=a("4ca6"),s=a.n(r);s.a},"2da0":function(t,e,a){"use strict";var r=a("92e5"),s=a.n(r);s.a},"404e":function(t,e,a){},4055:function(t,e,a){"use strict";var r=a("0e3a"),s=a.n(r);s.a},"460a":function(t,e,a){},"4ca6":function(t,e,a){},"5a7c":function(t,e,a){"use strict";var r=a("404e"),s=a.n(r);s.a},"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh LpR lFf"}},[a("Header"),a("Sidebar"),a("q-page-container",{style:{paddingLeft:t.show_sidebar?"260px":0}},[a("q-page",{staticClass:"row no-wrap"},[a("div",{staticClass:"col"},[a("div",{staticClass:"full-height"},[a("q-scroll-area",{staticClass:"col q-pr-sm full-height",attrs:{visible:""}},[a("MobileBreadCrumbs"),a("router-view")],1)],1)])])],1)],1)},s=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(i),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",{class:t.$q.dark.isActive?"header_dark":"header_normal",style:{left:t.show_sidebar?"260px":0},attrs:{reveal:""}},[a("q-toolbar",[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){return t.$store.dispatch("sidebarShowToggle")}}}),a("DesktopBreadCrumb"),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",icon:t.$q.dark.isActive?"nights_stay":"wb_sunny"},on:{click:function(e){return t.$q.dark.toggle()}}}),a("q-btn",{staticClass:"q-mr-xs fullscreen-button",attrs:{flat:"",round:"",icon:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}),a("SetLocaleBtn"),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"notifications"}},[a("q-avatar",{staticClass:"absolute",staticStyle:{"background-color":"var(--q-color-primary)","font-size":"20px",right:"5px",top:"5px",width:"12px",height:"12px"},attrs:{size:"10px"}},[a("b",[t._v("2")])]),a("q-menu",[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[t._v("Уведомлений нет")])],1),a("q-separator")],1)],1)],1),a("q-avatar",[a("img",{attrs:{src:"/statics/images/profile.png"}}),a("q-menu",[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6 q-mb-md"},[t._v("Settings")]),a("q-toggle",{attrs:{label:"Use Mobile Data"}}),a("q-toggle",{attrs:{label:"Bluetooth"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column items-center"},[a("q-avatar",{attrs:{size:"72px"}},[a("img",{attrs:{src:"/statics/images/profile.png"}})]),a("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[t._v("John Doe")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:"Logout",push:"",size:"sm",to:"/"},on:{click:t.logoutNotify}})],1)],1)])],1)],1)],1)},o=[],l=a("2f62"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",{staticStyle:{"padding-left":"0"},attrs:{inset:"",id:"toolbar_br"}},[a("q-breadcrumbs",{directives:[{name:"show",rawName:"v-show",value:t.is_active_header_breadcrumbs,expression:"is_active_header_breadcrumbs"}],staticStyle:{"font-size":"16px"},attrs:{"active-color":"white",id:"breadcrumbs"}},[t._l(t.breadcrumbs,(function(t){return[a("q-breadcrumbs-el",{key:t.label,attrs:{label:t.label,to:t.to}})]}))],2)],1)},b=[];function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={data:function(){return{breadcrumbs:[{label:"Главная",to:"/"},{label:"Группы"},{label:"GMM 1-17s"},{label:"Результаты тестов"}]}},methods:{updateWidth:function(){var t=this;setTimeout((function(){var e=document.getElementById("toolbar_br");if(e){var a=e.offsetWidth>t.br_length;a!==t.is_active_header_breadcrumbs&&t.$store.dispatch("IsActiveHeaderBreadcrumbsToggle")}}),50)}},computed:u({},Object(l["b"])(["is_active_header_breadcrumbs"]),{br_length:function(){return this.breadcrumbs.reduce((function(t,e){return t+11*e.label.length}),0)}}),created:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()}},v=d,f=(a("99d3"),a("2877")),q=a("eebe"),g=a.n(q),h=a("65c6"),O=a("ead5"),w=a("079e"),y=Object(f["a"])(v,m,b,!1,null,"65a02476",null),_=y.exports;g()(y,"components",{QToolbar:h["a"],QBreadcrumbs:O["a"],QBreadcrumbsEl:w["a"]});var j=a("9089");function C(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?C(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={computed:P({},Object(l["b"])(["show_sidebar"])),components:{DesktopBreadCrumb:_,SetLocaleBtn:j["a"]},methods:{logoutNotify:function(){this.$q.notify({message:"Logged out"})}}},Q=k,x=(a("4055"),a("e359")),S=a("9c40"),D=a("cb32"),E=a("b498"),N=a("4e73"),$=a("1c1c"),B=a("66e5"),L=a("4074"),M=a("eb85"),I=a("9564"),T=a("7f67"),A=Object(f["a"])(Q,n,o,!1,null,"7afd434e",null),z=A.exports;g()(A,"components",{QHeader:x["a"],QToolbar:h["a"],QBtn:S["a"],QAvatar:D["a"],QColor:E["a"],QMenu:N["a"],QList:$["a"],QItem:B["a"],QItemSection:L["a"],QSeparator:M["a"],QToggle:I["a"]}),g()(A,"directives",{ClosePopup:T["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-drawer",{staticClass:"left-navigation text-white",attrs:{"show-if-above":"",side:"left",elevated:""},model:{value:t.show_sidebar,callback:function(e){t.show_sidebar=e},expression:"show_sidebar"}},[a("div",{staticClass:"full-height",class:t.$q.dark.isActive?"drawer_dark":"drawer_normal"},[a("div",{staticStyle:{height:"calc(100% - 117px)"}},[a("router-link",{staticStyle:{color:"white","text-decoration":"none"},attrs:{to:"/"}},[a("q-toolbar",[a("q-avatar",[a("img",{attrs:{src:"/statics/images/white_logo.png"}})]),a("q-toolbar-title",{staticClass:"sidebar_title"},[t._v("\n            LearnMS\n          ")])],1)],1),a("hr"),a("q-scroll-area",{staticStyle:{height:"100%"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/dashboard",exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[t._v("\n              Dashboard v1\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/dashboard_v2",exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[t._v("\n              Dashboard v2\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/dashboard_v3",exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[t._v("\n              Dashboard v3\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/customer_management",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"star"}})],1),a("q-item-section",[t._v("\n              Customer Management\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/change_request",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"send"}})],1),a("q-item-section",[t._v("\n              Change Request\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/sales_invoices",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"attach_money"}})],1),a("q-item-section",[t._v("\n              Sales Invoices\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/quotes",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"money"}})],1),a("q-item-section",[t._v("\n              Quotes\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/transactions",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"assignment"}})],1),a("q-item-section",[t._v("\n              Transactions\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/employee_salary_list",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"list"}})],1),a("q-item-section",[t._v("\n              Employee Salary List\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/calendar",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"calendar_today"}})],1),a("q-item-section",[t._v("\n              Calendar\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/department",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"business"}})],1),a("q-item-section",[t._v("\n              Department\n            ")])],1),a("q-item",{staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:"/my_profile",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"drafts"}})],1),a("q-item-section",[t._v("\n              My Profile\n            ")])],1)],1)],1)],1)])])},W=[],J=void 0;function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var F={computed:G({},Object(l["b"])(["show_sidebar"]),{left:function(){return!!J.show_sidebar}})},U=F,K=(a("1498"),a("9404")),V=a("6ac5"),X=a("4983"),Y=a("0016"),Z=a("714f"),tt=Object(f["a"])(U,H,W,!1,null,"ec7b9648",null),et=tt.exports;g()(tt,"components",{QDrawer:K["a"],QToolbar:h["a"],QAvatar:D["a"],QToolbarTitle:V["a"],QScrollArea:X["a"],QList:$["a"],QItem:B["a"],QItemSection:L["a"],QIcon:Y["a"],QColor:E["a"]}),g()(tt,"directives",{Ripple:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile-breadcrumbs",class:t.$q.dark.isActive?"breadcrumbs_dark":"breadcrumbs_normal"},[t.is_active_header_breadcrumbs?t._e():a("q-toolbar",{attrs:{inset:""}},[a("q-breadcrumbs",{attrs:{"active-color":"white"}},[t._l(t.breadcrumbs,(function(t){return[a("q-breadcrumbs-el",{key:t.label,attrs:{label:t.label,to:t.to}})]}))],2)],1)],1)},rt=[];function st(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function it(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?st(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ct={data:function(){return{breadcrumbs:[{label:"Главная",to:"/"},{label:"Группы"},{label:"GMM 1-17s"},{label:"Результаты тестов"}]}},computed:it({},Object(l["b"])(["is_active_header_breadcrumbs"]))},nt=ct,ot=(a("5a7c"),Object(f["a"])(nt,at,rt,!1,null,"6352da15",null)),lt=ot.exports;function mt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function bt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?mt(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):mt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}g()(ot,"components",{QToolbar:h["a"],QBreadcrumbs:O["a"],QBreadcrumbsEl:w["a"]});var pt={components:{Header:z,Sidebar:et,MobileBreadCrumbs:lt},computed:bt({},Object(l["b"])(["show_sidebar"]))},ut=pt,dt=(a("2da0"),a("4d5a")),vt=a("09e3"),ft=a("9989"),qt=Object(f["a"])(ut,r,s,!1,null,null,null);e["default"]=qt.exports;g()(qt,"components",{QLayout:dt["a"],QPageContainer:vt["a"],QPage:ft["a"],QScrollArea:X["a"],QDrawer:K["a"]})},9089:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",dense:""}},[a("q-img",{staticClass:"shadow-box shadow-22",staticStyle:{height:"20px",width:"30px"},attrs:{src:"/statics/images/flags/ru.png"}}),a("q-menu",{staticStyle:{height:"100% !important"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-img",{attrs:{src:"/statics/images/flags/ru.png"}})],1)],1),a("q-separator"),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-img",{attrs:{src:"/statics/images/flags/en.png"}})],1)],1)],1)],1)],1)},s=[],i=a("2877"),c=a("eebe"),n=a.n(c),o=a("9c40"),l=a("068f"),m=a("4e73"),b=a("1c1c"),p=a("66e5"),u=a("4074"),d=a("eb85"),v=a("7f67"),f={},q=Object(i["a"])(f,r,s,!1,null,null,null);e["a"]=q.exports;n()(q,"components",{QBtn:o["a"],QImg:l["a"],QMenu:m["a"],QList:b["a"],QItem:p["a"],QItemSection:u["a"],QSeparator:d["a"]}),n()(q,"directives",{ClosePopup:v["a"]})},"92e5":function(t,e,a){},"99d3":function(t,e,a){"use strict";var r=a("460a"),s=a.n(r);s.a}}]);