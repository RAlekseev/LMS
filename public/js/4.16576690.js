(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{5843:function(t,s,a){},"66f2":function(t,s,a){"use strict";var o=a("5843"),e=a.n(o);e.a},f6c7:function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-card",{staticClass:"login-form",style:t.$q.platform.is.mobile?{width:"80%"}:{width:"30%"}},[a("q-card-section",[a("q-avatar",{staticClass:"absolute",staticStyle:{top:"0",right:"25px",transform:"translateY(-50%)","background-color":"#006432"},attrs:{size:"74px"}},[a("img",{attrs:{src:"/statics/images/white_logo.png"}})]),a("div",{staticClass:"row no-wrap items-center"},[a("div",{staticClass:"col text-h6 ellipsis"},[t._v("\n        Авторизация\n      ")])])],1),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{filled:"",label:"Login","lazy-rules":""},model:{value:t.form.login,callback:function(s){t.$set(t.form,"login",s)},expression:"form.login"}}),a("q-input",{attrs:{type:"password",filled:"",label:"Пароль","lazy-rules":""},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),a("div",{staticClass:"row"},[a("q-checkbox",{attrs:{label:"Запомнить меня"},model:{value:t.form.stay,callback:function(s){t.$set(t.form,"stay",s)},expression:"form.stay"}}),a("router-link",{staticClass:"forgot text",attrs:{to:"/"}},[t._v("Забыли пароль?")])],1),a("div",[a("q-btn",{staticStyle:{width:"100%"},attrs:{label:"Войти",type:"button",color:"primary"},on:{click:t.sendForm}})],1)],1)],1)],1)},e=[],r={name:"Login",metaInfo:{title:"Авторизация"},data:function(){return{form:{login:null,password:null,stay:!1}}},methods:{sendForm:function(){this.$q.notify({message:"Login Successful"}),this.$store.dispatch("login",this.form)}}},i=r,l=(a("66f2"),a("2877")),n=a("eebe"),c=a.n(n),f=a("f09f"),u=a("a370"),m=a("cb32"),d=a("0378"),p=a("27f9"),b=a("8f8e"),g=a("9c40"),w=Object(l["a"])(i,o,e,!1,null,"2c9a3611",null);s["default"]=w.exports;c()(w,"components",{QCard:f["a"],QCardSection:u["a"],QAvatar:m["a"],QForm:d["a"],QInput:p["a"],QCheckbox:b["a"],QBtn:g["a"]})}}]);