(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(t,e,r){var content=r(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("1b7833da",content,!0,{sourceMap:!1})},492:function(t,e,r){t.exports=r.p+"img/merryChristmas.0a83656.jpeg"},493:function(t,e,r){"use strict";r(464)},494:function(t,e,r){var o=r(19)(!1);o.push([t.i,'.center-screen{display:flex;justify-content:center;align-items:center;text-align:center;min-height:50vh}.title{color:#fff;font-family:"Lucida Console","Courier New",monospace}.vue-typer .custom.char.selected,.vue-typer .custom.char.typed{color:#fd6b6b}.vue-typer .custom.caret{color:#e57373}.icon{color:#fff!important;margin-top:20px}.vcard{margin:auto}',""]),t.exports=o},509:function(t,e,r){"use strict";r.r(e);r(60);var o={layout:"simpleview",data:function(){return{text:["Kaja","baby","my love","słodzenie"],dialogMerryChristmas:!1,alreadyOpened:!1}},created:function(){this.alreadyOpened=this.$store.getters["store/getOpened"]},mounted:function(){this.timeout()},methods:{timeout:function(){setTimeout(this.openDialog,2e3)},openDialog:function(){this.dialogMerryChristmas=!0,this.$store.dispatch("store/updateOpened",!0)}}},n=(r(493),r(59)),c=r(73),l=r.n(c),d=r(447),v=r(407),h=r(500),m=r(503),f=r(183),y=r(159),C=r(501),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-10"},[o("h1",{staticStyle:{color:"white","font-size":"40px"}},[t._v("\n    Bonjour\n    "),o("vue-typer",{attrs:{text:t.text,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":100,"pre-erase-delay":3e3,"erase-delay":500,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"blink"}})],1),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"center-screen mt-10"},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-card",{staticClass:"vcard",staticStyle:{"background-image":"linear-gradient(to right, #6666ff , #ccccff)"},attrs:{hover:"",width:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/todo")}}},[o("v-card-title",{staticClass:"title"},[t._v("\n            Things to do\n          ")]),t._v(" "),o("v-icon",{staticClass:"icon",attrs:{size:"500%"}},[t._v("\n            mdi-playlist-check\n          ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-card",{staticClass:"vcard",staticStyle:{"background-image":"linear-gradient(to right, #993366 , #e6b3cc)"},attrs:{hover:"",width:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/movies")}}},[o("v-card-title",{staticClass:"title",attrs:{size:"800%"}},[t._v("\n            Movies to watch\n          ")]),t._v(" "),o("v-icon",{staticClass:"icon",attrs:{size:"500%"}},[t._v("\n            mdi-movie-open\n          ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-card",{staticClass:"vcard",staticStyle:{"background-image":"linear-gradient(to right, #993300 , #ffbb99)"},attrs:{hover:"",width:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/places")}}},[o("v-card-title",{staticClass:"title"},[t._v("\n            Places to visit\n          ")]),t._v(" "),o("v-icon",{staticClass:"icon",attrs:{size:"500%"}},[t._v("\n            mdi-earth\n          ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-card",{staticClass:"vcard mt-7",staticStyle:{"background-image":"linear-gradient(to right, #996633 , #e6ccb3)"},attrs:{hover:"",width:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/pictures")}}},[o("v-card-title",{staticClass:"title"},[t._v("\n            Favorite pictures\n          ")]),t._v(" "),o("v-icon",{staticClass:"icon",attrs:{size:"500%"}},[t._v("\n            mdi-panorama-variant\n          ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-card",{staticClass:"vcard mt-7",staticStyle:{"background-image":"linear-gradient(to right, #339933 , #b3e6b3)"},attrs:{hover:"",width:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/restaurants")}}},[o("v-card-title",{staticClass:"title"},[t._v("\n            Restaurants to try\n          ")]),t._v(" "),o("v-icon",{staticClass:"icon",attrs:{justify:"center",size:"500%"}},[t._v("\n            mdi-silverware\n          ")])],1)],1)],1)],1),t._v(" "),t.alreadyOpened?t._e():o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogMerryChristmas,callback:function(e){t.dialogMerryChristmas=e},expression:"dialogMerryChristmas"}},[o("v-img",{attrs:{src:r(492)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardTitle:v.a,VCol:h.a,VDialog:m.a,VIcon:f.a,VImg:y.a,VRow:C.a})}}]);