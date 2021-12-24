(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{408:function(t,e,o){var content=o(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("8783de80",content,!0,{sourceMap:!1})},433:function(t,e,o){"use strict";o(408)},434:function(t,e,o){var n=o(19)(!1);n.push([t.i,".done{text-decoration:line-through}.headline{font-weight:700!important}",""]),t.exports=n},439:function(t,e,o){"use strict";o.r(e);o(5),o(10);var n=o(107),r=o.n(n),d={data:function(){return{todos:[],newTodo:{title:"",done:!1,date:(new Date).toISOString().substr(0,10)+" 00:00:00"},day:this.todoDay(),date:(new Date).getDate(),ord:this.nth((new Date).getDate()),year:(new Date).getFullYear()}},mounted:function(){this.getAllToDos()},methods:{getAllToDos:function(){var t=this;r.a.get("https://api-noe-workspace.com/backend-kn/todos",{}).then((function(e){t.todos=e.data,t.todos.forEach((function(element){var t=element.date,e=element.date,o=element.date;element.date=o.substring(8,10)+"-"+e.substring(5,7)+"-"+t.substring(0,4)}))})).catch((function(t){return console.log(t)}))},addNewTodo:function(){var t=new FormData;t.append("title",this.newTodo.title),t.append("done",this.newTodo.done),t.append("date",this.newTodo.date),r()({url:"https://api-noe-workspace.com/backend-kn/todos/create",method:"POST",data:t}).then((function(t){window.location.reload()})).catch((function(t){var e=t.response;window.alert("in catch"+JSON.stringify(e.data.errors))}))},editTodo:function(t){var e=new FormData;e.append("id",t.id),e.append("title",t.title),e.append("done",t.done),r()({url:"https://api-noe-workspace.com/backend-kn/todos/edit_todo",method:"PUT",headers:{"Content-Type":"multipart/form-data"},data:e}).then((function(t){window.location.reload()})).catch((function(t){console.log("in catch"),window.alert("An error occurred. Please try again!");var e=t.response;console.log(JSON.stringify(e.data.errors))}))},removeTodo:function(t){var e=new FormData;e.append("id",t.id),r()({url:"https://api-noe-workspace.com/backend-kn/todos/delete_todo",method:"DELETE",headers:{"Content-Type":"multipart/form-data"},data:e}).then((function(t){window.location.reload()})).catch((function(t){console.log("in catch"),window.alert("An error occurred. Please try again!");var e=t.response;console.log(JSON.stringify(e.data.errors))}))},nth:function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},todoDay:function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}}},l=(o(433),o(57)),c=o(72),v=o.n(c),h=o(268),w=o(412),f=o(497),m=o(488),_=o(399),y=o(182),T=o(183),k=o(120),V=o(184),D=o(84),C=o(186),x=o(489),S=o(396),I=o(490),L=o(498),O=o(49),A=o(191),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",[o("v-card",{staticClass:"pa-5",attrs:{elevation:"10"}},[o("v-toolbar",{attrs:{color:"transparent",elevation:"0"}},[o("v-toolbar-title",{staticClass:"headline"},[t._v("\n            All the things we want to do! "),o("span",{staticStyle:{"font-size":"100%",color:"red"}},[t._v("♥")])]),t._v(" "),o("v-spacer"),t._v(" "),o("v-subheader",{staticClass:"headline"},[t._v("\n            "+t._s(t.day)+", "+t._s(t.date)+t._s(t.ord)+" "+t._s(t.year)+"\n          ")])],1),t._v(" "),o("br"),t._v(" "),o("v-list",{attrs:{"two-line":"",subheader:""}},[o("p",{staticClass:"mx-12 text-right"},[o("b",[t._v(t._s(t.todos.length))]),t._v(" todos\n          ")]),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{id:"newTodo",outlined:"",name:"newTodo",label:"Type your todo"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTodo.apply(null,arguments)}},model:{value:t.newTodo.title,callback:function(e){t.$set(t.newTodo,"title",e)},expression:"newTodo.title"}})],1)],1)],1),t._v(" "),o("v-list",{attrs:{subheader:"","two-line":"",flat:""}},[0==t.todos.length?o("v-subheader",{staticClass:"subheading"},[t._v("\n            We have 0 Todos, add some\n          ")]):o("v-subheader",{staticClass:"subheading"},[t._v("\n            Our todos\n          ")]),t._v(" "),o("v-list-item-group",t._l(t.todos,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-action",[o("v-checkbox",{on:{change:function(o){return t.editTodo(e)}},model:{value:e.done,callback:function(o){t.$set(e,"done",o)},expression:"todo.done"}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{class:{done:e.done}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),o("v-list-item-subtitle",[t._v("Added on: "+t._s(e.date))])],1),t._v(" "),o("v-btn",{attrs:{fab:"",ripple:"",small:"",color:"red"},on:{click:function(o){return t.removeTodo(e)}}},[o("v-icon",{staticClass:"white--text"},[t._v("\n                  mdi-close\n                ")])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:w.a,VCheckbox:f.a,VCol:m.a,VContainer:_.a,VIcon:y.a,VList:T.a,VListItem:k.a,VListItemAction:V.a,VListItemContent:D.a,VListItemGroup:C.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VRow:x.a,VSpacer:S.a,VSubheader:I.a,VTextField:L.a,VToolbar:O.a,VToolbarTitle:A.a})}}]);