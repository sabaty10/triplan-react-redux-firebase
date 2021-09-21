(this.webpackJsonptriplan=this.webpackJsonptriplan||[]).push([[0],{147:function(e,t,n){},171:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),r=n.n(a),s=n(30),i=n(78),l=n(120),o=n(43),u={allTrips:[],tripsDetails:[]},j={allCountriesData:[],allCountriesNames:[]},d=Object(i.b)({allTrips:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRIPS":return Object(o.a)(Object(o.a)({},e),{},{allTrips:t.payload});case"SET_COUNTRY_TO_PLAN":case"SET_TRIP_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{tripsDetails:t.payload});default:return e}},allCountries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL_COUNTRIES_DATA":return Object(o.a)(Object(o.a)({},e),{},{allCountriesData:t.payload});case"FETCH_ALL_COUNTRIES":return Object(o.a)(Object(o.a)({},e),{},{allCountriesNames:t.payload});default:return e}}}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,p=Object(i.d)(d,b(Object(i.a)(l.a))),O=n(47),h=n(28),f=(n(147),n(2)),m=function(){return Object(f.jsx)("nav",{className:"navigation-bar",children:Object(f.jsx)(O.b,{to:"/",children:Object(f.jsx)("div",{className:"logo"})})})},x=n(15),y=n(56),_=n.n(y),v=n(37),N=n(72),T=n(124),g=n.n(T),S=n(99),C=(n(186),"triplan-1cab8"),E={apiKey:"AIzaSyCs3eyZ_wHYtq4OJj3GY5a0KDVb9vuT88E",authDomain:"".concat(C,".firebaseapp.com"),databaseURL:"https://".concat(C,"-default-rtdb.firebaseio.com"),projectId:C};S.a.initializeApp(E);var w=S.a.database(),A=function(e){var t=[];return function(n){fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){e&&(t=Object.values(e).map((function(t,n){return t.key=Object.keys(e)[n],t}))),n(e?{type:"SET_TRIP_DETAILS",payload:t}:{type:"SET_TRIP_DETAILS",payload:[]})}))}},I=function(){var e=[];return function(t){fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json").then((function(e){return e.json()})).then((function(n){n&&(e=Object.values(n).map((function(e,t){return e.key=Object.keys(n)[t],e}))),t(n?{type:"SET_TRIPS",payload:e}:{type:"SET_TRIPS",payload:[]})}))}},D=n(259),k=n(247),L=(n(171),n(260)),P=n(258),R=n(261),F=n(256),U=Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},div:{display:"block",padding:"6px 16px"}}})),K=function(e){var t=e.setAddNewTrip,n=e.setIsExist,a=Object(h.f)(),r=U(),i=Object(s.c)((function(e){return e.allTrips.allTrips})),l=Object(s.c)((function(e){return e.allCountries.allCountriesNames})),o=Object(c.useState)(""),u=Object(x.a)(o,2),j=u[0],d=u[1],b=function(e){var c;e.preventDefault(),i.map((function(e){return e.country})).includes(j)?(console.log("country already exist"),t(!1),n(!0),setTimeout((function(){n(!1),a.push("/".concat(j))}),3e3),setTimeout((function(){console.log("cancel")}),0)):(c=j,fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json",{method:"POST",body:JSON.stringify({country:c})}),a.push("/".concat(j)))};return Object(f.jsxs)("div",{className:"new-trip__container",children:[Object(f.jsx)("div",{className:"close-from-outside",onClick:function(){return t(!1)}}),Object(f.jsxs)("div",{className:"new-trip__form-container",children:[Object(f.jsx)("i",{className:"window close icon",onClick:function(){return t(!1)}}),Object(f.jsx)("h1",{className:"new-trip__form-header",children:"Start to Plan!"}),Object(f.jsxs)("form",{className:"new-trip__form",onSubmit:function(e){return b(e)},children:[Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:Object(f.jsx)("h1",{className:"new-trip__form-country",htmlFor:"country",children:"Country: "})}),Object(f.jsx)("th",{className:"th",children:Object(f.jsxs)(R.a,{sx:{m:1,minWidth:120},children:[Object(f.jsx)(L.a,{id:"demo-simple-select-helper-label",children:"Country"}),Object(f.jsx)(F.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:j,label:"Country Name",onChange:function(e){d(e.target.value),console.log(e.target.value)},children:l.map((function(e){return Object(f.jsx)(P.a,{className:r.div,value:e,children:e},e)}))})]})})]})})}),Object(f.jsx)("br",{}),Object(f.jsx)(D.a,{type:"submit",variant:"contained",color:"primary",children:"Send"})]})]})]})},H=(n(175),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.allTrips.allTrips}));return Object(f.jsx)("div",{className:"trips-list__container",children:t.map((function(t){return Object(f.jsxs)("div",{className:"trip__container",children:[Object(f.jsx)(O.b,{to:"/".concat(t.country),children:Object(f.jsx)("div",{className:"trip_details",children:Object(f.jsx)("span",{className:"trip_details__country-name ".concat(t.country.split(" ").length>1?"multiple-words":null," "),children:t.country.toUpperCase()})})}),Object(f.jsx)("button",{className:"trip_delete-button",onClick:function(){return e((n=t.key,c=t.country,function(e){w.ref("all-trips/".concat(n)).remove(),w.ref(c).remove(),setTimeout((function(){e(I())}),800)}));var n,c},children:"DELETE"})]},t.key)}))})}),J=(n(176),function(){return Object(f.jsx)("div",{className:"already-exist__container",children:Object(f.jsx)("div",{className:"already-exist",children:Object(f.jsx)("h1",{children:" There is already country with that name..."})})})}),W=(n(177),function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(s.c)((function(e){return e.allTrips.allTrips})),i=Object(s.c)((function(e){return e.allTrips.countryKey})),l=Object(c.useState)(!1),o=Object(x.a)(l,2),u=o[0],j=o[1],d=Object(s.b)(),b=Object(c.useState)(""),p=Object(x.a)(b,2),O=p[0],h=p[1];return Object(c.useEffect)((function(){d(I());!function(){var e="Lets  start ! choose your first Country that you  want to plan...".split(""),t=0,n=setInterval((function(){t!==e.length?(h(e.slice(0,t+1)),++t):clearInterval(n)}),50)}()}),[]),Object(f.jsxs)("div",{className:"all-trips__container",children:[0===r.length?null:Object(f.jsx)("h2",{className:"all-trips__header",children:"Another country? Add it!"}),Object(f.jsx)("button",{onClick:function(){return a(!0)},className:"add-trip__icon",children:Object(f.jsx)("h2",{className:"all-trips__second",children:"Add Country "})}),n?Object(f.jsx)(K,{setAddNewTrip:a,setIsExist:j}):null,r?Object(f.jsx)(H,{countryKey:i}):null,u?Object(f.jsx)(J,{}):null,0===r.length?Object(f.jsx)("h1",{className:"all-trips_message",children:O}):null]})}),M=n(263),Y=n(257),z=n(264),V=(n(178),Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}))),X=function(e){var t=e.setAddPlan,n=V(),a=Object(h.g)().countryName,r=Object(c.useState)(""),s=Object(x.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)("Sunday"),u=Object(x.a)(o,2),j=u[0],d=u[1],b=Object(c.useState)(!1),p=Object(x.a)(b,2),O=p[0],m=p[1],y=function(e){e.preventDefault(),""===i?m(!0):(O&&t(!1),t(!1),function(e,t,n){var c={};c[t]=n,fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/".concat(e,".json"),{method:"POST",body:JSON.stringify(c)})}(a,j,i))};return Object(f.jsx)("div",{className:"new-plan__container",children:Object(f.jsxs)("div",{className:"new-plan__form-container",children:[Object(f.jsx)("i",{className:"window close icon",onClick:function(){return t(!1)}}),Object(f.jsx)("h2",{className:"new-plan__header",children:"New Plan"}),Object(f.jsxs)("form",{className:"new-trip__form",onSubmit:function(e){return y(e)},children:[Object(f.jsx)("table",{children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:Object(f.jsx)("h1",{className:"new-plan__h1",htmlFor:"country",children:"Day: "})}),Object(f.jsx)("th",{className:"days-options",children:Object(f.jsxs)(M.a,{variant:"filled",className:n.formControl,children:[Object(f.jsx)(z.a,{htmlFor:"filled-age-native-simple",children:"Day"}),Object(f.jsxs)(Y.a,{native:!0,value:j,onChange:function(e){d(e.target.value)},inputProps:{name:"Sunday"},children:[Object(f.jsx)("option",{value:"Sunday",children:"Sunday"}),Object(f.jsx)("option",{value:"Monday",children:"Monday"}),Object(f.jsx)("option",{value:"Tuesday",children:"Tuesday"}),Object(f.jsx)("option",{value:"Wednesday",children:"Wednesday"}),Object(f.jsx)("option",{value:"Thursday",children:"Thursday"}),Object(f.jsx)("option",{value:"Friday",children:"Friday"}),Object(f.jsx)("option",{value:"Saturday",children:"Saturday"})]})]})})]}),Object(f.jsx)("br",{})]})}),Object(f.jsxs)("div",{className:"text-area",children:[Object(f.jsx)("h1",{className:"new-plan__h1",htmlFor:"country",children:"Plan: "}),Object(f.jsx)("textarea",{className:"textarea-container",rows:"10",column:"100",onChange:function(e){return l(e.target.value)}})]}),O&&!i?Object(f.jsx)("span",{className:"error_message",children:"Cannot be empty"}):null,Object(f.jsx)("br",{}),Object(f.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",children:"Send"})]})]})})},q=(n(180),function(e){var t=e.plan,n=e.id,c=e.countryName,a=e.planKey,r=Object(s.b)();return Object(f.jsxs)("div",{className:"plan__container",children:[Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{className:"plan__day",children:n}),Object(f.jsx)("h2",{className:"plan__plan-details",children:t})]}),Object(f.jsxs)("button",{className:"plan__delete-button",onClick:function(){var e,t;r((e=c,t=a,function(n){w.ref("".concat(e,"/").concat(t)).remove(),setTimeout((function(){n(A(e))}),800)}))},children:[Object(f.jsx)("p",{children:"DELETE"}),Object(f.jsx)("i",{className:"x icon"})]})]})}),B=(n(181),function(){var e=Object(s.b)(),t=Object(h.g)().countryName,n=Object(s.c)((function(e){return e.allTrips.tripsDetails})),a=Object(c.useState)(!1),r=Object(x.a)(a,2),i=r[0],l=r[1],o=Object(s.c)((function(e){return e.allCountries.allCountriesData})),u=[];Object(c.useEffect)((function(){setTimeout((function(){e(A(t))}),300)}),[i]);return u=o.filter((function(e){return e.name===t})),Object(f.jsxs)("div",{className:"trip-details__container",children:[0!==u.length&&Object(f.jsxs)("div",{className:"trip-details__header",children:[Object(f.jsx)("h1",{className:"trip-details__country",children:t.toUpperCase()}),Object(f.jsx)("img",{src:u[0].flag,alt:"flag of ".concat(u[0].name),className:"country-flag"}),Object(f.jsx)("br",{}),u[0].capital&&Object(f.jsxs)("span",{className:"country-capital",children:[Object(f.jsx)("h2",{children:"Capital:"})," ",Object(f.jsx)("p",{children:u[0].capital})]})]}),Object(f.jsx)("div",{}),Object(f.jsx)("button",{className:"add-trip__icon",onClick:function(){return l(!i)},children:Object(f.jsxs)("h2",{className:"all-trips__second",children:["Add Plan ",i?Object(f.jsx)("i",{className:"x icon"}):Object(f.jsx)("i",{className:"plus icon"})," "]})}),i?Object(f.jsx)(X,{setAddPlan:l}):null,0!==n.length?n.map((function(e){var n=Object.keys(e)[0],c=Object.values(e)[0];return Object(f.jsx)(q,{id:n,planKey:e.key,plan:c,countryName:t},n)})):null]})});n(182),n(183);var G=function(){var e=Object(s.b)();return Object(c.useEffect)((function(){e((function(e){!function(){var t=Object(N.a)(_.a.mark((function t(){var n,c,a,r,s;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://restcountries.eu/rest/v2/all").catch((function(e){return console.log("error occur",e)}));case 2:n=t.sent,e({type:"FETCH_ALL_COUNTRIES_DATA",payload:n.data}),c=[],a=Object(v.a)(n.data);try{for(a.s();!(r=a.n()).done;)s=r.value,c.push(s.name)}catch(i){a.e(i)}finally{a.f()}e({type:"FETCH_ALL_COUNTRIES",payload:c});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{}),Object(f.jsx)("div",{className:"page-container",children:Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/",exact:!0,component:W}),Object(f.jsx)(h.a,{path:"/:countryName",exact:!0,component:B})]})})]})};n(184);r.a.render(Object(f.jsx)(s.a,{store:p,children:Object(f.jsx)(O.a,{basename:"/triplan-react-redux-firebase",children:Object(f.jsx)(G,{})})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.82f32bb3.chunk.js.map