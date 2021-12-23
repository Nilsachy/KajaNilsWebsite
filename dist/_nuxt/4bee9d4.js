(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{405:function(e,t,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("015ab15c",content,!0,{sourceMap:!1})},410:function(e,t,n){"use strict";n(405)},411:function(e,t,n){var o=n(19)(!1);o.push([e.i,".done{text-decoration:line-through}.headline{font-weight:700!important}",""]),e.exports=o},435:function(e,t,n){"use strict";n.r(t);n(5),n(10);var o=n(107),r=n.n(o),l={data:function(){return{movies:[],newMovie:{title:"",watched:!1,date:(new Date).toISOString().substr(0,10)+" 00:00:00"},day:this.movieDay(),date:(new Date).getDate(),ord:this.nth((new Date).getDate()),year:(new Date).getFullYear()}},mounted:function(){this.getAllMovies()},methods:{getAllMovies:function(){var e=this;r.a.get("http://35.180.251.134:8765/backend-kn/movies",{}).then((function(t){e.movies=t.data,e.movies.forEach((function(element){var e=element.date,t=element.date,n=element.date;element.date=n.substring(8,10)+"-"+t.substring(5,7)+"-"+e.substring(0,4)}))})).catch((function(e){return console.log(e)}))},addNewMovie:function(){var e=new FormData;e.append("title",this.newMovie.title),e.append("watched",this.newMovie.watched),e.append("date",this.newMovie.date),r()({url:"http://35.180.251.134:8765/backend-kn/movies/create",method:"POST",data:e}).then((function(e){window.location.reload()})).catch((function(e){var t=e.response;window.alert("in catch"+JSON.stringify(t.data.errors))}))},editMovie:function(e){var t=new FormData;t.append("id",e.id),t.append("title",e.title),t.append("watched",e.watched),r()({url:"http://35.180.251.134:8765/backend-kn/movies/edit_movie",method:"PUT",headers:{"Content-Type":"multipart/form-data"},data:t}).then((function(e){window.location.reload()})).catch((function(e){console.log("in catch"),window.alert("An error occurred. Please try again!");var t=e.response;console.log(JSON.stringify(t.data.errors))}))},removeMovie:function(e){var t=new FormData;t.append("id",e.id),r()({url:"http://35.180.251.134:8765/backend-kn/movies/delete_movie",method:"DELETE",headers:{"Content-Type":"multipart/form-data"},data:t}).then((function(e){window.location.reload()})).catch((function(e){console.log("in catch"),window.alert("An error occurred. Please try again!");var t=e.response;console.log(JSON.stringify(t.data.errors))}))},nth:function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},movieDay:function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}}},c=(n(410),n(57)),d=n(72),v=n.n(d),h=n(268),m=n(412),w=n(497),f=n(488),_=n(399),y=n(182),k=n(183),M=n(120),V=n(184),C=n(84),x=n(186),D=n(489),T=n(396),S=n(490),O=n(498),I=n(49),L=n(191),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",[n("v-card",{staticClass:"pa-5",attrs:{elevation:"10"}},[n("v-toolbar",{attrs:{color:"transparent",elevation:"0"}},[n("v-toolbar-title",{staticClass:"headline"},[e._v("\n            All the movies we want to watch! "),n("span",{staticStyle:{"font-size":"100%",color:"red"}},[e._v("♥")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-subheader",{staticClass:"headline"},[e._v("\n            "+e._s(e.day)+", "+e._s(e.date)+e._s(e.ord)+" "+e._s(e.year)+"\n          ")])],1),e._v(" "),n("br"),e._v(" "),n("v-list",{attrs:{"two-line":"",subheader:""}},[n("p",{staticClass:"mx-12 text-right"},[n("b",[e._v(e._s(e.movies.length))]),e._v(" movies\n          ")]),e._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{id:"newMovie",outlined:"",name:"newMovie",label:"Type your movie"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNewMovie.apply(null,arguments)}},model:{value:e.newMovie.title,callback:function(t){e.$set(e.newMovie,"title",t)},expression:"newMovie.title"}})],1)],1)],1),e._v(" "),n("v-list",{attrs:{subheader:"","two-line":"",flat:""}},[0==e.movies.length?n("v-subheader",{staticClass:"subheading"},[e._v("\n            We have 0 movies, add some\n          ")]):n("v-subheader",{staticClass:"subheading"},[e._v("\n            Our movies\n          ")]),e._v(" "),n("v-list-item-group",e._l(e.movies,(function(t,i){return n("v-list-item",{key:i},[n("v-list-item-action",[n("v-checkbox",{on:{change:function(n){return e.editMovie(t)}},model:{value:t.watched,callback:function(n){e.$set(t,"watched",n)},expression:"movie.watched"}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{class:{done:t.watched}},[e._v("\n                  "+e._s(t.title)+"\n                ")]),e._v(" "),n("v-list-item-subtitle",[e._v("Added on: "+e._s(t.date))])],1),e._v(" "),n("v-btn",{attrs:{fab:"",ripple:"",small:"",color:"red"},on:{click:function(n){return e.removeMovie(t)}}},[n("v-icon",{staticClass:"white--text"},[e._v("\n                  mdi-close\n                ")])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:m.a,VCheckbox:w.a,VCol:f.a,VContainer:_.a,VIcon:y.a,VList:k.a,VListItem:M.a,VListItemAction:V.a,VListItemContent:C.a,VListItemGroup:x.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VRow:D.a,VSpacer:T.a,VSubheader:S.a,VTextField:O.a,VToolbar:I.a,VToolbarTitle:L.a})},491:function(e,t,n){"use strict";n.r(t);var o={components:{movie:n(435).default},layout:"simpleview"},r=n(57),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("movie")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Movie:n(435).default})}}]);