(this.webpackJsonptriplan=this.webpackJsonptriplan||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(13),r=n.n(a),i=n(23),s=n(51),l=n(71),o=n(42),j={allTrips:[],tripsDetails:[]},u=Object(s.b)({allTrips:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRIPS":return Object(o.a)(Object(o.a)({},e),{},{allTrips:t.payload});case"SET_COUNTRY_TO_PLAN":case"SET_TRIP_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{tripsDetails:t.payload});default:return e}}}),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,b=Object(s.d)(u,d(Object(s.a)(l.a))),O=n(31),h=n(19),p=(n(94),n(3)),f=function(){return Object(p.jsx)("nav",{className:"navigation-bar",children:Object(p.jsx)(O.b,{to:"/",children:Object(p.jsx)("div",{className:"logo"})})})},x=n(22),m=n(64),y=(n(113),"triplan-1cab8"),v={apiKey:"AIzaSyCs3eyZ_wHYtq4OJj3GY5a0KDVb9vuT88E",authDomain:"".concat(y,".firebaseapp.com"),databaseURL:"https://".concat(y,"-default-rtdb.firebaseio.com"),projectId:y};m.a.initializeApp(v);var _=m.a.database(),N=function(e){var t=[];return function(n){fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){e&&(t=Object.values(e).map((function(t,n){return t.key=Object.keys(e)[n],t}))),n(e?{type:"SET_TRIP_DETAILS",payload:t}:{type:"SET_TRIP_DETAILS",payload:[]})}))}},T=function(){var e=[];return function(t){fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json").then((function(e){return e.json()})).then((function(n){n&&(e=Object.values(n).map((function(e,t){return e.key=Object.keys(n)[t],e}))),t(n?{type:"SET_TRIPS",payload:e}:{type:"SET_TRIPS",payload:[]})}))}};n(101);var S=function(e){var t=e.input;return Object(p.jsx)(p.Fragment,{children:"invalidString"===t?Object(p.jsxs)("div",{className:"error__container",children:[" Wrong inputs.",Object(p.jsx)("br",{}),"Please try again.."]}):null})},g=n(147),E=n(148),w=n(140),C=(n(102),Object(w.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}))),P=function(e){var t=e.setAddNewTrip,n=e.setIsExist,a=Object(h.f)(),r=(C(),Object(c.useState)("")),s=Object(x.a)(r,2),l=s[0],o=s[1],j=Object(i.c)((function(e){return e.allTrips.allTrips})),u=Object(c.useState)(!1),d=Object(x.a)(u,2),b=d[0],O=d[1],f=function(e){var c;e.preventDefault(),/^[a-zA-Z]+$/.test(l)?j.map((function(e){return e.country})).includes(l)?(console.log("country already exist"),t(!1),n(!0),setTimeout((function(){n(!1),a.push("/".concat(l))}),3e3),setTimeout((function(){console.log("cancel")}),0)):(c=l,fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json",{method:"POST",body:JSON.stringify({country:c})}),a.push("/".concat(l))):(O(!0),setTimeout((function(){O(!1)}),4e3))};return Object(p.jsxs)("div",{className:"new-trip__container",children:[Object(p.jsx)("div",{className:"close-from-outside",onClick:function(){return t(!1)}}),Object(p.jsxs)("div",{className:"new-trip__form-container",children:[Object(p.jsx)("i",{className:"window close icon",onClick:function(){return t(!1)}}),Object(p.jsx)("h1",{children:"Going to Explore!"}),Object(p.jsxs)("form",{className:"new-trip__form",onSubmit:function(e){return f(e)},children:[Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("h1",{htmlFor:"country",children:"Country: "})}),Object(p.jsx)("th",{children:Object(p.jsx)(E.a,{size:"small",id:"outlined-basic",label:"Country",variant:"outlined",value:l,onChange:function(e){return o(e.target.value)}})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{}),Object(p.jsx)("div",{className:"input_note",children:"*Please insert only letters"})]})]})}),Object(p.jsx)("br",{}),Object(p.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Send"})]}),b?Object(p.jsx)(S,{input:"invalidString"}):null]})]})},k=(n(104),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.allTrips.allTrips}));return Object(p.jsx)("div",{className:"trips-list__container",children:t.map((function(t){return Object(p.jsxs)("div",{className:"trip__container",children:[Object(p.jsx)(O.b,{to:"/".concat(t.country),children:Object(p.jsx)("div",{className:"trip_details",children:Object(p.jsx)("span",{children:t.country.toUpperCase()})})}),Object(p.jsx)("button",{className:"trip_delete-button",onClick:function(){return e((n=t.key,c=t.country,function(e){_.ref("all-trips/".concat(n)).remove(),_.ref(c).remove(),setTimeout((function(){e(T())}),600)}));var n,c},children:"DELETE"})]},t.key)}))})}),I=(n(105),function(){return Object(p.jsx)("div",{className:"already-exist__container",children:Object(p.jsx)("div",{className:"already-exist",children:Object(p.jsx)("h1",{children:" There is already country with that name..."})})})}),D=(n(106),function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(i.c)((function(e){return e.allTrips.allTrips})),s=Object(i.c)((function(e){return e.allTrips.countryKey})),l=Object(c.useState)(!1),o=Object(x.a)(l,2),j=o[0],u=o[1],d=Object(i.b)(),b=Object(c.useState)(""),O=Object(x.a)(b,2),h=O[0],f=O[1];return Object(c.useEffect)((function(){d(T());!function(){var e="Lets  start ! choose your first Country that you  want to plan...".split(""),t=0,n=setInterval((function(){t!==e.length?(f(e.slice(0,t+1)),++t):clearInterval(n)}),50)}()}),[]),Object(p.jsxs)("div",{className:"all-trips__container",children:[0===r.length?null:Object(p.jsx)("h2",{className:"all-trips__header",children:"Another country? Add it!"}),Object(p.jsx)("button",{onClick:function(){return a(!0)},className:"add-trip__icon",children:Object(p.jsx)("i",{className:"plus icon"})}),Object(p.jsx)("h2",{children:"Add country"}),n?Object(p.jsx)(P,{setAddNewTrip:a,setIsExist:u}):null,r?Object(p.jsx)(k,{countryKey:s}):null,j?Object(p.jsx)(I,{}):null,0===r.length?Object(p.jsx)("h1",{className:"all-trips_message",children:h}):null]})}),A=n(149),L=n(146),R=n(150),F=(n(107),Object(w.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}))),K=function(e){var t=e.setAddPlan,n=F(),a=Object(h.g)().countryName,r=Object(c.useState)(""),i=Object(x.a)(r,2),s=i[0],l=i[1],o=Object(c.useState)("Sunday"),j=Object(x.a)(o,2),u=j[0],d=j[1],b=Object(c.useState)(!1),O=Object(x.a)(b,2),f=O[0],m=O[1],y=function(e){e.preventDefault(),""===s?m(!0):(f&&t(!1),t(!1),function(e,t,n){var c={};c[t]=n,fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/".concat(e,".json"),{method:"POST",body:JSON.stringify(c)})}(a,u,s))};return Object(p.jsx)("div",{className:"new-plan__container",children:Object(p.jsxs)("div",{className:"new-plan__form-container",children:[Object(p.jsx)("i",{className:"window close icon",onClick:function(){return t(!1)}}),Object(p.jsx)("h2",{children:"New Plan"}),Object(p.jsxs)("form",{className:"new-trip__form",onSubmit:function(e){return y(e)},children:[Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("h1",{htmlFor:"country",children:"Day: "})}),Object(p.jsx)("th",{children:Object(p.jsxs)(A.a,{variant:"filled",className:n.formControl,children:[Object(p.jsx)(R.a,{htmlFor:"filled-age-native-simple",children:"Day"}),Object(p.jsxs)(L.a,{native:!0,value:u,onChange:function(e){d(e.target.value)},inputProps:{name:"Sunday"},children:[Object(p.jsx)("option",{value:"Sunday",children:"Sunday"}),Object(p.jsx)("option",{value:"Monday",children:"Monday"}),Object(p.jsx)("option",{value:"Tuesday",children:"Tuesday"}),Object(p.jsx)("option",{value:"Wednesday",children:"Wednesday"}),Object(p.jsx)("option",{value:"Thursday",children:"Thursday"}),Object(p.jsx)("option",{value:"Friday",children:"Friday"}),Object(p.jsx)("option",{value:"Saturday",children:"Saturday"})]})]})})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("h1",{htmlFor:"country",children:"Plan: "})}),Object(p.jsx)("th",{children:Object(p.jsx)("textarea",{className:"textarea-container",rows:"4",column:"50",onChange:function(e){return l(e.target.value)}})}),Object(p.jsx)("th",{children:f?Object(p.jsx)("span",{className:"error_message",children:"Cannot be empty"}):null})]})]})}),Object(p.jsx)("br",{}),Object(p.jsx)(g.a,{variant:"contained",color:"primary",type:"submit",children:"Send"})]})]})})},J=(n(108),function(e){var t=e.plan,n=e.id,c=e.countryName,a=e.planKey,r=Object(i.b)();return Object(p.jsxs)("div",{className:"plan__container",children:[Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{className:"plan__day",children:n}),Object(p.jsx)("h2",{className:"plan__plan-details",children:t})]}),Object(p.jsx)("button",{className:"plan__delete-button",onClick:function(){var e,t;r((e=c,t=a,function(n){_.ref("".concat(e,"/").concat(t)).remove(),setTimeout((function(){n(N(e))}),800)}))},children:"DELETE"})]})}),U=(n(109),function(){var e=Object(i.b)(),t=Object(h.g)().countryName,n=Object(i.c)((function(e){return e.allTrips.tripsDetails})),a=Object(c.useState)(!1),r=Object(x.a)(a,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){setTimeout((function(){e(N(t))}),300)}),[s]),Object(p.jsxs)("div",{className:"trip-details__container",children:[Object(p.jsx)("div",{className:"trip-details__header",children:Object(p.jsx)("h1",{className:"trip-details__country",children:t.toUpperCase()})}),Object(p.jsx)("button",{className:"add-trip__icon",onClick:function(){return l(!s)},children:s?Object(p.jsx)("i",{className:"x icon"}):Object(p.jsx)("i",{className:"plus icon"})}),Object(p.jsx)("h2",{children:"Add Plan"}),s?Object(p.jsx)(K,{setAddPlan:l}):null,0!==n.length?n.map((function(e){var n=Object.keys(e)[0],c=Object.values(e)[0];return Object(p.jsx)(J,{id:n,planKey:e.key,plan:c,countryName:t},n)})):null]})});n(110);var W=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"page-container",children:Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{path:"/",exact:!0,component:D}),Object(p.jsx)(h.a,{path:"/:countryName",exact:!0,component:U})]})})]})};n(111);r.a.render(Object(p.jsx)(i.a,{store:b,children:Object(p.jsx)(O.a,{basename:"/triplan-react-redux-firebase",children:Object(p.jsx)(W,{})})}),document.getElementById("root"))},94:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.2201f493.chunk.js.map