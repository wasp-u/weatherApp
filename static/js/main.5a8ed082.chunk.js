(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,t){e.exports={currentWeather:"CurrentWeather_currentWeather__WsHjg",city:"CurrentWeather_city__lwL6V",time:"CurrentWeather_time__TxPCp",temperature:"CurrentWeather_temperature__36nZ9",forecastDay:"CurrentWeather_forecastDay__1aLx6",nowWeather:"CurrentWeather_nowWeather__22AX_",active:"CurrentWeather_active__m4kGX",bg_video:"CurrentWeather_bg_video__3lbTm"}},15:function(e,a,t){e.exports={forecastDay:"ForecastDay_forecastDay__yJvom",weatherImg:"ForecastDay_weatherImg__-pfdp",time:"ForecastDay_time__1ln5O",active:"ForecastDay_active__1HVAk"}},21:function(e,a,t){e.exports={toggle_block:"TemperatureToggle_toggle_block__1FcGN",selected:"TemperatureToggle_selected__Z2Awd"}},23:function(e,a,t){e.exports={header_block:"Header_header_block__8_0n1",logo:"Header_logo__3_SJs"}},24:function(e,a,t){e.exports={search:"Search_search__3imIs",input:"Search_input__lsW11"}},36:function(e,a,t){e.exports={forecastItem:"ForecastItem_forecastItem__3_eRb"}},37:function(e,a,t){e.exports={itemsLabels:"ForecastWeather_itemsLabels__kHzIc"}},4:function(e,a,t){e.exports={nowInfo:"NowInfo_nowInfo__23spG",info:"NowInfo_info__1iiKo",value:"NowInfo_value__20Tpy",title:"NowInfo_title__acqrv"}},44:function(e,a,t){},45:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t(11),n=t.n(r),s=(t(44),t(45),t(8)),i=t(7),o=t(5),l=t(14),u=function(e){var a=[];if(e.searchData.forecastWeatherData){var t=+e.searchData.forecastWeatherData.location.localtime.split(" ")[1].split(":")[0];(a=e.searchData.forecastWeatherData.forecast.forecastday[0].hour.filter((function(e){return+e.time.split(" ")[1].split(":")[0]>t&&+e.time.split(" ")[1].split(":")[0]<=t+5}))).length<5&&(a=[].concat(Object(l.a)(a),Object(l.a)(e.searchData.forecastWeatherData.forecast.forecastday[1].hour.filter((function(e,t,c){return t<=4-a.length})))))}return a},d=t(9),h=t.n(d),p=t(13),j=t(2),f=t(17),m=t.n(f),b=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/search.json",params:{q:"".concat(e)},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return m.a.request(a)},_=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/forecast.json",params:{q:"".concat(e),days:"3"},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return m.a.request(a)},O=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/current.json",params:{q:"".concat(e)},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return m.a.request(a)},g=function(){return Object(p.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://geolocation-db.com/json/");case 2:return a=e.sent,e.abrupt("return",a.data.IPv4);case 4:case"end":return e.stop()}}),e)})))()},x="search_reducer/SET_SEARCHING_VALUE",v="search_reducer/SET_AUTOCOMPLETE_DATA",D="search_reducer/SET_FORECAST_WEATHER_DATA",y="search_reducer/SET_DATA_IS_FETCHING",T="search_reducer/SET_SEARCHING_IS_FETCHING",W="search_reducer/SET_REALTIME_WEATHER",N={forecastWeatherData:null,autocompleteData:null,realTimeWeatherData:null,searchingValue:"",dataIsFetching:!1,searchingIsFetching:!1},C=function(e){return{type:y,payload:e}},w=function(e){return{type:T,payload:e}},I=function(e){return function(){var a=Object(p.a)(h.a.mark((function a(t){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(C(!0)),a.next=3,_(e);case 3:c=a.sent,t(C(!1)),t((r=c.data,{type:D,payload:r})),t(E(e));case 7:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},E=function(e){return function(){var a=Object(p.a)(h.a.mark((function a(t){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(e);case 2:c=a.sent,t((r=c.data,{type:W,payload:r}));case 4:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return Object(j.a)(Object(j.a)({},e),{},{searchingValue:a.payload});case v:return Object(j.a)(Object(j.a)({},e),{},{autocompleteData:a.payload});case D:return Object(j.a)(Object(j.a)({},e),{},{forecastWeatherData:a.payload});case y:return Object(j.a)(Object(j.a)({},e),{},{dataIsFetching:a.payload});case T:return Object(j.a)(Object(j.a)({},e),{},{searchingIsFetching:a.payload});case W:return Object(j.a)(Object(j.a)({},e),{},{realTimeWeatherData:a.payload});default:return e}},k=t(10),A=t.n(k),S=t(15),H=t.n(S),L=t(1),V=function(e){var a=e.time,t=e.img,c=e.temperature,r=e.onClick,n=e.selected;return console.log(n),Object(L.jsxs)("div",{className:H.a.forecastDay+" "+(a==n?H.a.active:""),onClick:function(e){r(a)},children:[Object(L.jsx)("div",{className:H.a.time,children:a}),Object(L.jsx)("div",{className:H.a.weatherImg,children:Object(L.jsx)("img",{src:t,alt:""})}),Object(L.jsx)("div",{className:H.a.temperature,children:c})]})},G=t.p+"static/media/Cloud.9a707b40.mp4",R=Object(o.c)(Object(i.b)((function(e){return{forecastWeatherData:e.searchData.forecastWeatherData,forecast4Hours:u(e),cfToggle:e.app.cfToggle}}),{getForecastWeatherData:I}))((function(e){var a=Object(c.useState)(""),t=Object(s.a)(a,2),r=t[0],n=t[1];Object(c.useEffect)((function(){e.forecastWeatherData&&n(e.forecastWeatherData.location.localtime.split(" ")[1])}),[e.forecastWeatherData]);var i=function(e){n(e)};return Object(L.jsxs)("div",{className:"wrapper",children:[e.forecastWeatherData?Object(L.jsxs)("div",{className:A.a.currentWeather,children:[Object(L.jsx)("div",{className:A.a.nowWeather+" "+(e.forecastWeatherData.location.localtime.split(" ")[1]==r?A.a.active:""),onClick:function(){return i(e.forecastWeatherData.location.localtime.split(" ")[1])},children:Object(L.jsxs)("div",{children:[Object(L.jsx)("video",{className:A.a.bg_video,id:"1",src:G,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,defaultMuted:!0}),Object(L.jsx)("div",{className:A.a.city,children:e.forecastWeatherData.location.name}),Object(L.jsx)("div",{className:A.a.time,children:e.forecastWeatherData.location.localtime}),Object(L.jsx)("div",{className:A.a.temperature,children:"\xb0C"===e.cfToggle?"".concat(e.forecastWeatherData.current.temp_c,"\xb0C"):"".concat(e.forecastWeatherData.current.temp_f,"\xb0F")})]})}),Object(L.jsx)("div",{className:A.a.forecastDay,children:e.forecast4Hours.map((function(a){return Object(L.jsx)(V,{selected:r,time:a.time.split(" ")[1],img:"https://"+a.condition.icon,temperature:"\xb0C"===e.cfToggle?a.temp_c+"\xb0C":a.temp_f+"\xb0F",onClick:i},a.time.split(" ")[1])}))})]}):Object(L.jsx)("span",{children:"loading..."})," "]})})),P=t(36),q=t.n(P),K=function(e){return Object(L.jsxs)("div",{className:q.a.forecastItem,children:[Object(L.jsx)("p",{children:e.date}),Object(L.jsxs)("p",{children:[e.daily_chance_of_rain,"%"]}),Object(L.jsxs)("p",{children:[e.avghumidity,"%"]}),Object(L.jsxs)("p",{children:[e.maxwind_kph," Km/h"]}),Object(L.jsx)("p",{children:e.avgtemp})]})},M=t(37),J=t.n(M),U=Object(o.c)(Object(i.b)((function(e){return{forecastWeatherData:e.searchData.forecastWeatherData,cfToggle:e.app.cfToggle}}),{}))((function(e){return Object(L.jsxs)("div",{className:"wrapper",children:[Object(L.jsxs)("div",{className:J.a.itemsLabels,children:[Object(L.jsx)("p",{children:"DAY"}),Object(L.jsx)("p",{children:"CHANCE OF RAIN"}),Object(L.jsx)("p",{children:"HUMIDITY"}),Object(L.jsx)("p",{children:"WIND"}),Object(L.jsx)("p",{children:"TEMPERATURE"})]}),e.forecastWeatherData?e.forecastWeatherData.forecast.forecastday.map((function(a){return Object(L.jsx)(K,{date:a.date,daily_chance_of_rain:a.day.daily_chance_of_rain,avghumidity:a.day.avghumidity,maxwind_kph:a.day.maxwind_kph,avgtemp:"\xb0C"===e.cfToggle?"".concat(a.day.avgtemp_c,"\xb0C"):"".concat(a.day.avgtemp_f,"\xb0F")},a.date)})):Object(L.jsx)("div",{children:"Loading..."})]})})),B=t(23),X=t.n(B),Y=t.p+"static/media/Logo.ebc92bde.svg",Z=t(24),z=t.n(Z),Q=t.p+"static/media/Search_icon.9e6496c8.svg",$=t(39),ee=function(e){var a=Object(c.useState)(e.searchingValue),t=Object(s.a)(a,2),r=t[0],n=t[1],i=Object(c.useState)([]),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(""),h=Object(s.a)(d,2),p=h[0],j=h[1],f=["Kiev","Moscow","Konotop","London","Paris","Berlin"].map((function(e){return{value:e,label:e}}));Object(c.useEffect)((function(){g().then((function(a){e.getForecastWeatherData(a)})),u(f)}),[]),Object(c.useEffect)((function(){if(e.autocompleteData&&e.autocompleteData.length>0){var a=e.autocompleteData.map((function(e){return{value:e.name,label:e.name}}));u(a)}}),[e.autocompleteData]);return Object(L.jsxs)("div",{className:z.a.search,children:[Object(L.jsx)($.a,{className:z.a.input,onInputChange:function(a){j(a),a.length>1&&(n(a),e.getAutocompleteData(a))},onChange:function(a){n(a.value),u(f),j(r),e.getForecastWeatherData(a.value)},placeholder:"Enter your city...",options:l,inputValue:p,blurInputOnSelect:!0}),Object(L.jsx)("button",{onClick:function(){e.getForecastWeatherData(r),u(f),j(r)},children:Object(L.jsx)("img",{src:Q,alt:""})})]})},ae=t(21),te=t.n(ae),ce=function(e){var a=function(a){e.setCfToggle(a.target.innerText)};return Object(L.jsxs)("div",{className:te.a.toggle_block,children:[Object(L.jsx)("span",{onClick:a,className:"\xb0C"===e.cfToggle?te.a.selected:"",children:"\xb0C"}),Object(L.jsx)("span",{children:"/"}),Object(L.jsx)("span",{onClick:a,className:"\xb0F"===e.cfToggle?te.a.selected:"",children:"\xb0F"})]})},re="app/SET_CF_TOGGLE ",ne={cfToggle:"\xb0C"},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;return a.type===re?Object(j.a)(Object(j.a)({},e),{},{cfToggle:a.payload}):e},ie=Object(o.c)(Object(i.b)((function(e){return{cfToggle:e.app.cfToggle,autocompleteData:e.searchData.autocompleteData,searchingValue:e.searchData.searchingValue}}),{setCfToggle:function(e){return{type:re,payload:e}},getAutocompleteData:function(e){return function(){var a=Object(p.a)(h.a.mark((function a(t){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(w(!0)),a.next=3,b(e);case 3:c=a.sent,t(w(!1)),t((r=c.data,{type:v,payload:r}));case 6:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},setSearchingValue:function(e){return{type:x,payload:e}},getForecastWeatherData:I}))((function(e){return Object(L.jsx)("header",{children:Object(L.jsx)("div",{className:"wrapper",children:Object(L.jsxs)("div",{className:X.a.header_block,children:[Object(L.jsxs)("div",{className:X.a.logo,children:[Object(L.jsx)("img",{src:Y,alt:""}),Object(L.jsx)("span",{children:"WeatherApp"})]}),Object(L.jsx)(ee,{autocompleteData:e.autocompleteData,searchingValue:e.searchingValue,getAutocompleteData:e.getAutocompleteData,setSearchingValue:e.setSearchingValue,getForecastWeatherData:e.getForecastWeatherData}),Object(L.jsx)(ce,{cfToggle:e.cfToggle,setCfToggle:e.setCfToggle})]})})})})),oe=t(4),le=t.n(oe),ue=Object(o.c)(Object(i.b)((function(e){return{realTimeWeatherData:e.searchData.realTimeWeatherData}}),{}))((function(e){return Object(L.jsx)("div",{className:le.a.nowInfo,children:e.realTimeWeatherData?Object(L.jsxs)("div",{className:"wrapper",children:[Object(L.jsx)("span",{children:"Additional"}),Object(L.jsxs)("div",{className:le.a.info,children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:le.a.title,children:"Chance of Rain"}),Object(L.jsxs)("p",{className:le.a.value,children:[e.realTimeWeatherData.current.cloud,"%"]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:le.a.title,children:"Humidity"}),Object(L.jsxs)("p",{className:le.a.value,children:[e.realTimeWeatherData.current.humidity,"%"]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:le.a.title,children:"Wind Speed"}),Object(L.jsxs)("p",{className:le.a.value,children:[e.realTimeWeatherData.current.wind_kph," Km/h"]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:le.a.title,children:"Visibility"}),Object(L.jsxs)("p",{className:le.a.value,children:[e.realTimeWeatherData.current.vis_km," Km"]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:le.a.title,children:"Pressure"}),Object(L.jsxs)("p",{className:le.a.value,children:[e.realTimeWeatherData.current.pressure_mb," hPa"]})]})]})]}):Object(L.jsx)("div",{children:"Loading..."})})}));var de=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(ie,{}),Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(R,{}),Object(L.jsx)(ue,{}),Object(L.jsx)(U,{})]})]})},he=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),c(e),r(e),n(e),s(e)}))},pe=t(38),je=Object(o.b)({searchData:F,app:se}),fe=Object(o.d)(je,Object(o.a)(pe.a));n.a.render(Object(L.jsx)(i.a,{store:fe,children:Object(L.jsx)(de,{})}),document.getElementById("root")),he()}},[[86,1,2]]]);
//# sourceMappingURL=main.5a8ed082.chunk.js.map