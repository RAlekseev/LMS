(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{b71a:function(e,r,o){"use strict";o.r(r);var a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("q-page",[o("q-toolbar",[o("q-btn",{staticClass:"q-mr-md bg-blue text-white",attrs:{flat:"",dense:"",label:"Today"},on:{click:function(r){return e.setToday()}}}),o("q-btn",{staticClass:"q-mr-sm bg-blue text-white",attrs:{flat:"",dense:"",round:"",icon:"keyboard_arrow_left"},on:{click:function(r){return e.onPrev()}}}),o("q-btn",{staticClass:"bg-blue text-white",attrs:{flat:"",dense:"",round:"",icon:"keyboard_arrow_right"},on:{click:e.onNext}}),o("span",{staticClass:"q-mr-xl text-black q-toolbar__title nowrap"},[e._v(e._s(e.title()))]),o("q-select",{staticClass:"float-right",class:e.$q.dark.isActive?"bg-black":"bg-white",staticStyle:{width:"130px"},attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change theme",options:e.themesList},model:{value:e.theme,callback:function(r){e.theme=r},expression:"theme"}})],1),o("div",{staticClass:"bg-white",staticStyle:{width:"100%"}},[o("q-calendar",{ref:"calendar",staticStyle:{height:"550px",border:"1px solid #e0e0e0"},attrs:{view:e.view_name,locale:"en-us","enable-theme":"",theme:e.theme},scopedSlots:e._u([{key:"day",fn:function(r){var a=r.date;return[e._l(e.getEvents(a),(function(r,a){return[o("q-badge",{key:a,staticClass:"q-event",class:e.badgeClasses(r,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"16px","max-height":"16px"},style:e.badgeStyles(r,"day")},[r.icon?o("q-icon",{staticClass:"q-mr-xs",attrs:{name:r.icon}}):e._e(),o("span",{staticClass:"ellipsis"},[e._v(e._s(r.title))])],1)]}))]}}]),model:{value:e.selectedDate,callback:function(r){e.selectedDate=r},expression:"selectedDate"}})],1)],1)},t=[],l=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("4917"),o("c47a")),d=o.n(l),n=(o("7f7f"),o("a481"),o("fe7a"));function u(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?u(Object(o),!0).forEach((function(r){d()(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}new Date;var i=/^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;function g(e){if("string"!==typeof e)throw new TypeError("Expected a string");var r=i.exec(e);if(r){var o={r:Math.min(255,parseInt(r[2],10)),g:Math.min(255,parseInt(r[3],10)),b:Math.min(255,parseInt(r[4],10))};return r[1]&&(o.a=Math.min(1,parseFloat(r[5]))),o}return b(e)}function b(e){if("string"!==typeof e)throw new TypeError("Expected a string");e=e.replace(/^#/,""),3===e.length?e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:4===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var r=parseInt(e,16);return e.length>6?{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:Math.round((255&r)/2.55)}:{r:r>>16,g:r>>8&255,b:255&r}}function s(e){if("string"!==typeof e&&(!e||void 0===e.r))throw new TypeError("Expected a string or a {r, g, b} object as color");var r="string"===typeof e?g(e):e,o=r.r/255,a=r.g/255,t=r.b/255,l=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),d=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),n=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4);return.2126*l+.7152*d+.0722*n}Date.prototype.addDays=function(e){var r=new Date(this.valueOf());return r.setDate(r.getDate()+e),r};var y={data:function(){return{selectedDate:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),titleFormatter:null,dateFormatter:null,view_name:"month",events:[{title:"Conference call",date:"2020-04-14",bgcolor:"orange"},{title:"Conference call with Jack",date:"2020-04-24",bgcolor:"orange"},{title:"Conference call",date:"2020-05-15",bgcolor:"orange"},{title:"Conference call with Jack",date:"2020-04-03",bgcolor:"orange"},{title:"Give feedback",details:"Buy a nice present",date:"2020-04-20",bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:"2020-04-12",bgcolor:"blue",icon:"fas fa-handshake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:(new Date).addDays(5).toISOString().slice(0,10),bgcolor:"blue",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:(new Date).addDays(3).toISOString().slice(0,10),bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Leave",details:"Always a nice chat with mom",date:"2020-04-28",bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Leave",details:"Always a nice chat with mom",date:(new Date).addDays(7).toISOString().slice(0,10),bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Leave",details:"Always a nice chat with mom",date:"2020-05-25",bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference call",details:"Teaching Javascript 101",date:(new Date).toISOString().slice(0,10),bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Conference call",details:"Teaching Javascript 101",date:"2020-04-07",bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Rowing",details:"Time for some weekend R&R",date:(new Date).addDays(9).toISOString().slice(0,10),bgcolor:"purple",icon:"rowing",days:1},{title:"Meeting",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:"2020-04-09",bgcolor:"blue",icon:"fas fa-handshake",days:2}],theme:{name:"default"},themes:[{name:"default"},{name:"dark",colorBody:"grey-2",backgroundBody:"blue-grey-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-grey-9",colorBodyPast:"grey-11",backgroundBodyPast:"blue-grey-10",colorBodyCurrent:"blue-grey-2",backgroundBodyCurrent:"blue-grey-10",colorBodyFuture:"blue-grey-2",backgroundBodyFuture:"blue-grey-10",colorHeader:"blue-grey-2",backgroundHeader:"blue-grey-10",colorHeaderOutside:"blue-grey-2",backgroundHeaderOutside:"blue-grey-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-grey-10",colorHeaderCurrent:"blue-grey-2",backgroundHeaderCurrent:"blue-grey-10",colorHeaderFuture:"blue-grey-2",backgroundHeaderFuture:"blue-grey-10",colorWorkWeekPast:"blue-grey-8",backgroundWorkWeekPast:"blue-grey-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-grey-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-grey-10",colorDayLabelOutside:"blue-grey-2",backgroundDayLabelOutside:"blue-grey-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"blue-grey-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-grey-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-grey-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-grey-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-grey-10",colorIntervalText:"grey-2",backgroundIntervalText:"blue-grey-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"blue-grey-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"blue-grey-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"blue-grey-10"},{name:"teal",colorBody:"grey-2",backgroundBody:"teal-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"teal-9",colorBodyPast:"grey-11",backgroundBodyPast:"teal-10",colorBodyCurrent:"teal-2",backgroundBodyCurrent:"teal-10",colorBodyFuture:"teal-2",backgroundBodyFuture:"teal-10",colorHeader:"teal-2",backgroundHeader:"teal-10",colorHeaderOutside:"teal-2",backgroundHeaderOutside:"teal-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"teal-10",colorHeaderCurrent:"teal-2",backgroundHeaderCurrent:"teal-10",colorHeaderFuture:"teal-2",backgroundHeaderFuture:"teal-10",colorWorkWeekPast:"teal-8",backgroundWorkWeekPast:"teal-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"teal-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"teal-10",colorDayLabelOutside:"teal-2",backgroundDayLabelOutside:"teal-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"teal-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"teal-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"teal-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"teal-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"teal-10",colorIntervalText:"grey-2",backgroundIntervalText:"teal-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"teal-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"teal-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"teal-10"},{name:"brown",colorBody:"brown-2",backgroundBody:"brown-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"brown-9",colorBodyPast:"grey-11",backgroundBodyPast:"brown-10",colorBodyCurrent:"brown-2",backgroundBodyCurrent:"brown-10",colorBodyFuture:"brown-2",backgroundBodyFuture:"brown-10",colorHeader:"brown-2",backgroundHeader:"brown-10",colorHeaderOutside:"brown-2",backgroundHeaderOutside:"brown-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"brown-10",colorHeaderCurrent:"brown-2",backgroundHeaderCurrent:"brown-10",colorHeaderFuture:"brown-2",backgroundHeaderFuture:"brown-10",colorWorkWeekPast:"brown-8",backgroundWorkWeekPast:"brown-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"brown-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"brown-10",colorDayLabelOutside:"brown-2",backgroundDayLabelOutside:"brown-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"brown-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"brown-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"brown-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"brown-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"brown-10",colorIntervalText:"grey-2",backgroundIntervalText:"brown-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"brown-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"brown-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"brown-10"},{name:"deep purple",colorBody:"grey-2",backgroundBody:"deep-purple-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"deep-purple-9",colorBodyPast:"grey-11",backgroundBodyPast:"deep-purple-10",colorBodyCurrent:"deep-purple-2",backgroundBodyCurrent:"deep-purple-10",colorBodyFuture:"deep-purple-2",backgroundBodyFuture:"deep-purple-10",colorHeader:"deep-purple-2",backgroundHeader:"deep-purple-10",colorHeaderOutside:"deep-purple-2",backgroundHeaderOutside:"deep-purple-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"deep-purple-10",colorHeaderCurrent:"deep-purple-2",backgroundHeaderCurrent:"deep-purple-10",colorHeaderFuture:"deep-purple-2",backgroundHeaderFuture:"deep-purple-10",colorWorkWeekPast:"deep-purple-8",backgroundWorkWeekPast:"deep-purple-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"deep-purple-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"deep-purple-10",colorDayLabelOutside:"deep-purple-2",backgroundDayLabelOutside:"deep-purple-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"deep-purple-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"deep-purple-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"deep-purple-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"deep-purple-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"deep-purple-10",colorIntervalText:"grey-2",backgroundIntervalText:"deep-purple-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"deep-purple-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"deep-purple-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"deep-purple-10"},{name:"indigo",colorBody:"grey-2",backgroundBody:"indigo-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"indigo-9",colorBodyPast:"grey-11",backgroundBodyPast:"indigo-10",colorBodyCurrent:"indigo-2",backgroundBodyCurrent:"indigo-10",colorBodyFuture:"indigo-2",backgroundBodyFuture:"indigo-10",colorHeader:"indigo-2",backgroundHeader:"indigo-10",colorHeaderOutside:"indigo-2",backgroundHeaderOutside:"indigo-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"indigo-10",colorHeaderCurrent:"indigo-2",backgroundHeaderCurrent:"indigo-10",colorHeaderFuture:"indigo-2",backgroundHeaderFuture:"indigo-10",colorWorkWeekPast:"indigo-8",backgroundWorkWeekPast:"indigo-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"indigo-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"indigo-10",colorDayLabelOutside:"indigo-2",backgroundDayLabelOutside:"indigo-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"indigo-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"indigo-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"indigo-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"indigo-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"indigo-10",colorIntervalText:"grey-2",backgroundIntervalText:"indigo-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"indigo-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"indigo-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"indigo-10"},{name:"blue",colorBody:"grey-2",backgroundBody:"blue-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-9",colorBodyPast:"grey-11",backgroundBodyPast:"blue-10",colorBodyCurrent:"blue-2",backgroundBodyCurrent:"blue-10",colorBodyFuture:"blue-2",backgroundBodyFuture:"blue-10",colorHeader:"blue-2",backgroundHeader:"blue-10",colorHeaderOutside:"blue-2",backgroundHeaderOutside:"blue-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-10",colorHeaderCurrent:"blue-2",backgroundHeaderCurrent:"blue-10",colorHeaderFuture:"blue-2",backgroundHeaderFuture:"blue-10",colorWorkWeekPast:"blue-8",backgroundWorkWeekPast:"blue-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-10",colorDayLabelOutside:"blue-2",backgroundDayLabelOutside:"blue-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"blue-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-10",colorIntervalText:"grey-2",backgroundIntervalText:"blue-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"blue-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"blue-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"blue-10"}]}},created:function(){this.updateFormatters()},computed:{themesList:function(){var e=[];return this.themes.forEach((function(r){e.push({label:r.name,value:c({},r)})})),this.$q.dark.isActive?this.theme=this.themes.filter((function(e){return"dark"==e.name}))[0]:this.theme={name:"default"},e}},methods:{onPrev:function(){this.$refs.calendar.prev()},onNext:function(){this.$refs.calendar.next()},setToday:function(){this.selectedDate=(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate()},title:function(){if(this.selectedDate){var e=new Date(this.selectedDate);return this.titleFormatter.format(e)}return""},isCssColor:function(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)},badgeClasses:function(e,r){var o,a=this.isCssColor(e.bgcolor),t="header"===r;return o={},d()(o,"text-white bg-".concat(e.bgcolor),!a),d()(o,"full-width",!t&&(!e.side||"full"===e.side)),d()(o,"left-side",!t&&"left"===e.side),d()(o,"right-side",!t&&"right"===e.side),o},badgeStyles:function(e,r,o,a){var t={};return this.isCssColor(e.bgcolor)&&(t["background-color"]=e.bgcolor,t.color=s(e.bgcolor)>.5?"black":"white"),o&&(t.top=o(e.time)+"px"),a&&(t.height=a(e.duration)+"px"),t["align-items"]="flex-start",t},updateFormatters:function(){try{this.dateFormatter=new Intl.DateTimeFormat(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}),this.titleFormatter=new Intl.DateTimeFormat(void 0,{month:this.shortMonthLabel?"short":"long",year:"numeric",timeZone:"UTC"})}catch(e){this.dateFormatter=void 0,this.titleFormatter=void 0}},getEvents:function(e){for(var r=n["a"].parseTimestamp(e),o=[],a=0;a<this.events.length;++a){var t=!1;if(this.events[a].date===e){if(this.events[a].time&&o.length>0)for(var l=n["a"].parseTimestamp(this.events[a].date+" "+this.events[a].time),d=n["a"].addToDate(l,{minute:this.events[a].duration}),u=0;u<o.length;++u){var c=n["a"].parseTimestamp(o[u].date+" "+o[u].time),i=n["a"].addToDate(c,{minute:o[u].duration});if(n["a"].isBetweenDates(l,c,i)||n["a"].isBetweenDates(d,c,i)){o[u].side="left",this.events[a].side="right",o.push(this.events[a]),t=!0;break}}t||(this.events[a].side=void 0,o.push(this.events[a]))}else if(this.events[a].days){var g=n["a"].parseTimestamp(this.events[a].date),b=n["a"].addToDate(g,{day:this.events[a].days});n["a"].isBetweenDates(r,g,b)&&(o.push(this.events[a]),t=!0)}}return o}}},k=y,p=o("2877"),h=o("eebe"),w=o.n(h),f=o("9989"),m=o("65c6"),v=o("9c40"),D=o("ddd8"),B=o("58a8"),H=o("0016"),C=Object(p["a"])(k,a,t,!1,null,null,null);r["default"]=C.exports;w()(C,"components",{QPage:f["a"],QToolbar:m["a"],QBtn:v["a"],QSelect:D["a"],QBadge:B["a"],QIcon:H["a"]})}}]);