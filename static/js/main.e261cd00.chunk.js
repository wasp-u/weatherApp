(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,a,t){e.exports={currentWeather:"CurrentWeather_currentWeather__WsHjg",city:"CurrentWeather_city__lwL6V",time:"CurrentWeather_time__TxPCp",temperature:"CurrentWeather_temperature__36nZ9",forecastDay:"CurrentWeather_forecastDay__1aLx6"}},16:function(e,a,t){e.exports={forecastDay:"ForecastDay_forecastDay__yJvom",weatherImg:"ForecastDay_weatherImg__-pfdp",time:"ForecastDay_time__1ln5O"}},20:function(e,a,t){e.exports={toggle_block:"TemperatureToggle_toggle_block__1FcGN",selected:"TemperatureToggle_selected__Z2Awd"}},22:function(e,a,t){e.exports={forecastWeather:"ForecastWeather_forecastWeather__nR6p2",itemsLabels:"ForecastWeather_itemsLabels__kHzIc"}},23:function(e,a,t){e.exports={header_block:"Header_header_block__8_0n1",logo:"Header_logo__3_SJs"}},24:function(e,a,t){e.exports={search:"Search_search__3imIs",input:"Search_input__lsW11"}},36:function(e,a,t){e.exports={forecastItem:"ForecastItem_forecastItem__3_eRb"}},4:function(e,a,t){e.exports={nowInfo:"NowInfo_nowInfo__23spG",info:"NowInfo_info__1iiKo",value:"NowInfo_value__20Tpy",title:"NowInfo_title__acqrv"}},43:function(e,a,t){},44:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t(10),n=t.n(r),s=(t(43),t(44),t(7)),i=t(5),o=function(e){var a=[];if(e.searchData.forecastWeatherData){var t=e.searchData.forecastWeatherData.location.localtime.split(" ")[1].split(":")[0];if((a=e.searchData.forecastWeatherData.forecast.forecastday[0].hour.filter((function(e){return e.time.split(" ")[1].split(":")[0]>=t&&e.time.split(" ")[1].split(":")[0]<+t+5}))).length<5)for(var c=0;c<=5-a.length;c++)a.push(e.searchData.forecastWeatherData.forecast.forecastday[1].hour[c])}return a},l=t(8),u=t.n(l),h=t(13),d=t(2),p=t(15),j=t.n(p),f=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/search.json",params:{q:"".concat(e)},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return j.a.request(a)},m=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/forecast.json",params:{q:"".concat(e),days:"3"},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return j.a.request(a)},b=function(e){var a={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/current.json",params:{q:"".concat(e)},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09"}};return j.a.request(a)},g=function(){return Object(h.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://geolocation-db.com/json/");case 2:return a=e.sent,e.abrupt("return",a.data.IPv4);case 4:case"end":return e.stop()}}),e)})))()},O="search_reducer/SET_SEARCHING_VALUE",_="search_reducer/SET_AUTOCOMPLETE_DATA",x="search_reducer/SET_FORECAST_WEATHER_DATA",v="search_reducer/SET_DATA_IS_FETCHING",D="search_reducer/SET_SEARCHING_IS_FETCHING",y="search_reducer/SET_REALTIME_WEATHER",T={forecastWeatherData:null,autocompleteData:null,realTimeWeatherData:null,searchingValue:"",dataIsFetching:!1,searchingIsFetching:!1},W=function(e){return{type:v,payload:e}},N=function(e){return{type:D,payload:e}},w=function(e){return function(){var a=Object(h.a)(u.a.mark((function a(t){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(W(!0)),a.next=3,m(e);case 3:c=a.sent,t(W(!1)),t((r=c.data,{type:x,payload:r})),t(C(e));case 7:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},C=function(e){return function(){var a=Object(h.a)(u.a.mark((function a(t){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(e);case 2:c=a.sent,t((r=c.data,{type:y,payload:r}));case 4:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(d.a)(Object(d.a)({},e),{},{searchingValue:a.payload});case _:return Object(d.a)(Object(d.a)({},e),{},{autocompleteData:a.payload});case x:return Object(d.a)(Object(d.a)({},e),{},{forecastWeatherData:a.payload});case v:return Object(d.a)(Object(d.a)({},e),{},{dataIsFetching:a.payload});case D:return Object(d.a)(Object(d.a)({},e),{},{searchingIsFetching:a.payload});case y:return Object(d.a)(Object(d.a)({},e),{},{realTimeWeatherData:a.payload});default:return e}},E=t(11),F=t.n(E),A=t(16),S=t.n(A),k=t(1),H=function(e){var a=e.time,t=e.img,c=e.temperature;return Object(k.jsxs)("div",{className:S.a.forecastDay,children:[Object(k.jsx)("div",{className:S.a.time,children:a}),Object(k.jsx)("div",{className:S.a.weatherImg,children:Object(k.jsx)("img",{src:t,alt:""})}),Object(k.jsx)("div",{className:S.a.temperature,children:c})]})},L=Object(i.c)(Object(s.b)((function(e){return{forecastWeatherData:e.searchData.forecastWeatherData,forecast4Hours:o(e),cfToggle:e.app.cfToggle}}),{getForecastWeatherData:w}))((function(e){return Object(k.jsx)("div",{className:"wrapper",children:e.forecastWeatherData?Object(k.jsxs)("div",{className:F.a.currentWeather,children:[Object(k.jsx)("div",{className:F.a.nowWeather,children:Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:F.a.city,children:e.forecastWeatherData.location.name}),Object(k.jsx)("div",{className:F.a.time,children:e.forecastWeatherData.location.localtime}),Object(k.jsx)("div",{className:F.a.temperature,children:"\xb0C"===e.cfToggle?"".concat(e.forecastWeatherData.current.temp_c,"\xb0C"):"".concat(e.forecastWeatherData.current.temp_f,"\xb0F")})]})}),Object(k.jsx)("div",{className:F.a.forecastDay,children:e.forecast4Hours.map((function(a){return Object(k.jsx)(H,{time:a.time.split(" ")[1],img:"https://"+a.condition.icon,temperature:"\xb0C"===e.cfToggle?a.temp_c+"\xb0C":a.temp_f+"\xb0F"},a.time.split(" ")[1])}))})]}):Object(k.jsx)("span",{children:"loading..."})})})),V=t(36),R=t.n(V),G=function(e){return Object(k.jsxs)("div",{className:R.a.forecastItem,children:[Object(k.jsx)("p",{children:e.date}),Object(k.jsxs)("p",{children:[e.daily_chance_of_rain,"%"]}),Object(k.jsxs)("p",{children:[e.avghumidity,"%"]}),Object(k.jsxs)("p",{children:[e.maxwind_kph," Km/h"]}),Object(k.jsx)("p",{children:e.avgtemp})]})},P=t(22),q=t.n(P),K=Object(i.c)(Object(s.b)((function(e){return{forecastWeatherData:e.searchData.forecastWeatherData,cfToggle:e.app.cfToggle}}),{}))((function(e){return Object(k.jsxs)("div",{className:q.a.forecastWeather,children:[Object(k.jsxs)("div",{className:q.a.itemsLabels,children:[Object(k.jsx)("p",{children:"DAY"}),Object(k.jsx)("p",{children:"CHANCE OF RAIN"}),Object(k.jsx)("p",{children:"HUMIDITY"}),Object(k.jsx)("p",{children:"WIND"}),Object(k.jsx)("p",{children:"TEMPERATURE"})]}),e.forecastWeatherData?e.forecastWeatherData.forecast.forecastday.map((function(a){return Object(k.jsx)(G,{date:a.date,daily_chance_of_rain:a.day.daily_chance_of_rain,avghumidity:a.day.avghumidity,maxwind_kph:a.day.maxwind_kph,avgtemp:"\xb0C"===e.cfToggle?"".concat(a.day.avgtemp_c,"\xb0C"):"".concat(a.day.avgtemp_f,"\xb0F")},a.date)})):Object(k.jsx)("div",{children:"Loading..."})]})})),M=t(23),J=t.n(M),U=t.p+"static/media/Logo.ebc92bde.svg",B=t(9),Y=t(24),Z=t.n(Y),z=t.p+"static/media/Search_icon.9e6496c8.svg",Q=t(38),X=function(e){var a=Object(c.useState)(e.searchingValue),t=Object(B.a)(a,2),r=t[0],n=t[1],s=Object(c.useState)([]),i=Object(B.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(""),h=Object(B.a)(u,2),d=h[0],p=h[1],j=["Kiev","Moscow","Konotop","London","Paris","Berlin"].map((function(e){return{value:e,label:e}}));Object(c.useEffect)((function(){g().then((function(a){e.getForecastWeatherData(a)})),l(j)}),[]),Object(c.useEffect)((function(){if(e.autocompleteData&&e.autocompleteData.length>0){var a=e.autocompleteData.map((function(e){return{value:e.name,label:e.name}}));l(a)}}),[e.autocompleteData]);return Object(k.jsxs)("div",{className:Z.a.search,children:[Object(k.jsx)(Q.a,{className:Z.a.input,onInputChange:function(a){p(a),a.length>1&&(n(a),e.getAutocompleteData(a))},onChange:function(a){n(a.value),l(j),p(r),e.getForecastWeatherData(a.value)},placeholder:"Enter your city...",options:o,inputValue:d,blurInputOnSelect:!0}),Object(k.jsx)("button",{onClick:function(){e.getForecastWeatherData(r),l(j),p(r)},children:Object(k.jsx)("img",{src:z,alt:""})})]})},$=t(20),ee=t.n($),ae=function(e){var a=function(a){e.setCfToggle(a.target.innerText)};return Object(k.jsxs)("div",{className:ee.a.toggle_block,children:[Object(k.jsx)("span",{onClick:a,className:"\xb0C"===e.cfToggle?ee.a.selected:"",children:"\xb0C"}),Object(k.jsx)("span",{children:"/"}),Object(k.jsx)("span",{onClick:a,className:"\xb0F"===e.cfToggle?ee.a.selected:"",children:"\xb0F"})]})},te="app/SET_CF_TOGGLE ",ce={cfToggle:"\xb0C"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;return a.type===te?Object(d.a)(Object(d.a)({},e),{},{cfToggle:a.payload}):e},ne=Object(i.c)(Object(s.b)((function(e){return{cfToggle:e.app.cfToggle,autocompleteData:e.searchData.autocompleteData,searchingValue:e.searchData.searchingValue}}),{setCfToggle:function(e){return{type:te,payload:e}},getAutocompleteData:function(e){return function(){var a=Object(h.a)(u.a.mark((function a(t){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(N(!0)),a.next=3,f(e);case 3:c=a.sent,t(N(!1)),t((r=c.data,{type:_,payload:r}));case 6:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}()},setSearchingValue:function(e){return{type:O,payload:e}},getForecastWeatherData:w}))((function(e){return Object(k.jsx)("header",{children:Object(k.jsx)("div",{className:"wrapper",children:Object(k.jsxs)("div",{className:J.a.header_block,children:[Object(k.jsxs)("div",{className:J.a.logo,children:[Object(k.jsx)("img",{src:U,alt:""}),Object(k.jsx)("span",{children:"WeatherApp"})]}),Object(k.jsx)(X,{autocompleteData:e.autocompleteData,searchingValue:e.searchingValue,getAutocompleteData:e.getAutocompleteData,setSearchingValue:e.setSearchingValue,getForecastWeatherData:e.getForecastWeatherData}),Object(k.jsx)(ae,{cfToggle:e.cfToggle,setCfToggle:e.setCfToggle})]})})})})),se=t(4),ie=t.n(se),oe=Object(i.c)(Object(s.b)((function(e){return{realTimeWeatherData:e.searchData.realTimeWeatherData}}),{}))((function(e){return Object(k.jsxs)("div",{className:ie.a.nowInfo,children:[Object(k.jsx)("span",{children:"Now"}),e.realTimeWeatherData?Object(k.jsx)("div",{className:"wrapper",children:Object(k.jsxs)("div",{className:ie.a.info,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:ie.a.title,children:"Chance of Rain"}),Object(k.jsxs)("p",{className:ie.a.value,children:[e.realTimeWeatherData.current.cloud,"%"]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:ie.a.title,children:"Humidity"}),Object(k.jsxs)("p",{className:ie.a.value,children:[e.realTimeWeatherData.current.humidity,"%"]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:ie.a.title,children:"Wind Speed"}),Object(k.jsxs)("p",{className:ie.a.value,children:[e.realTimeWeatherData.current.wind_kph," Km/h"]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:ie.a.title,children:"Visibility"}),Object(k.jsxs)("p",{className:ie.a.value,children:[e.realTimeWeatherData.current.vis_km," Km"]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:ie.a.title,children:"Pressure"}),Object(k.jsxs)("p",{className:ie.a.value,children:[e.realTimeWeatherData.current.pressure_mb," hPa"]})]})]})}):Object(k.jsx)("div",{children:"Loading..."})]})}));var le=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(ne,{}),Object(k.jsxs)("div",{className:"App wrapper",children:[Object(k.jsx)(L,{}),Object(k.jsx)(oe,{}),Object(k.jsx)(K,{})]})]})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),c(e),r(e),n(e),s(e)}))},he=t(37),de=Object(i.b)({searchData:I,app:re}),pe=Object(i.d)(de,Object(i.a)(he.a));n.a.render(Object(k.jsx)(s.a,{store:pe,children:Object(k.jsx)(le,{})}),document.getElementById("root")),ue()}},[[85,1,2]]]);
//# sourceMappingURL=main.e261cd00.chunk.js.map