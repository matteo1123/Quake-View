(this.webpackJsonpearthquake=this.webpackJsonpearthquake||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(0),n=a(17),u=a.n(n),o=(a(63),a(55)),c=(a(64),a(65),a(5));var i=function(){var e=Object(c.b)();return Object(s.jsx)("div",{className:"quake_period",children:Object(s.jsxs)("select",{className:"ui dropdown selection multiple",onChange:function(t){return e({type:"CHANGE_PERIOD",payload:t.target.value})},name:"Period",children:[Object(s.jsx)("option",{className:"option",value:"HOUR",children:"Last Hour (time of report)"}),Object(s.jsx)("option",{className:"option",value:"DAY",children:"Last Day"}),Object(s.jsx)("option",{className:"option",value:"7",children:"Last 7 Days"}),Object(s.jsx)("option",{className:"option",value:"30",children:"Last 30 Days"})]})})};a(71);var l=function(){var e=Object(c.b)();return Object(s.jsx)("div",{className:"mag_filter",children:Object(s.jsxs)("select",{className:"ui dropdown selection multiple",onChange:function(t){return e({type:"CHANGE_MAG",payload:t.target.value})},name:"Period",children:[Object(s.jsx)("option",{className:"option",value:"ALL",children:"All Magnitudes"}),Object(s.jsx)("option",{className:"option",value:"1.0",children:"Magnitude 1.0+"}),Object(s.jsx)("option",{className:"option",value:"2.5",children:"Magnitude 2.5+"}),Object(s.jsx)("option",{className:"option",value:"4.5",children:"Magnitude 4.5+"})]})})},h=a(51),v=a(52),d=a(57),p=a(56),f=(a(72),a(53)),m=a.n(f),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return m()('\n      <div id="map"></div>\n      ')}}]),a}(r.Component);var j=a(54),k=a.n(j);var b=function(){var e=Object(r.useState)("false"),t=Object(o.a)(e,2),a=t[0],n=t[1];console.log(typeof a);var u=Object(c.c)((function(e){return e.period})),h=Object(c.c)((function(e){return e.mag}));return k.a.get(function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ALL";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HOUR"){case"HOUR":if("ALL"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";if("1.0"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.csv";if("2.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.csv";if("4.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.csv";break;case"DAY":if("ALL"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv";if("1.0"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.csv";if("2.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.csv";if("4.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.csv";break;case"7":if("ALL"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv";if("1.0"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.csv";if("2.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";if("4.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.csv";break;case"30":if("ALL"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv";if("1.0"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.csv";if("2.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.csv";if("4.5"===e)return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv";break;default:return"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv"}}(u,h)).then((function(e){var t=[];e.data.split("\n").forEach((function(e,a){var s=e.split(",");a>0&&t.push({lat:s[1],lon:s[2],mag:s[4],place:s[13],time:s[0]})})),"true"!==a?window.loadMap(t):window.loadGlobe(t)})).catch((function(e){return console.log("ajax request failed",e)})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("select",{className:"ui dropdown selection multiple",onChange:function(e){return n(e.target.value)},children:[Object(s.jsx)("option",{value:"false",children:"Map"}),Object(s.jsx)("option",{value:"true",children:"3D Globe"})]}),Object(s.jsx)(l,{}),Object(s.jsx)(g,{endpoint:!0}),Object(s.jsx)(i,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,u=t.getTTFB;a(e),s(e),r(e),n(e),u(e)}))},q=a(11),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Hour",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_PERIOD"===t.type?t.payload:e},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_MAG"===t.type?t.payload:e},x=Object(q.b)({period:y,mag:_}),L=Object(q.c)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(Object(s.jsx)(c.a,{store:L,children:Object(s.jsx)(b,{})}),document.getElementById("root")),O()},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},85:function(e,t){},87:function(e,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.2657d3ed.chunk.js.map