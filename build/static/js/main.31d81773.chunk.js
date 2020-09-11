(this.webpackJsonpTheTube=this.webpackJsonpTheTube||[]).push([[0],{26:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){e.exports=a(90)},54:function(e,t,a){},73:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),c=a.n(i),o=(a(54),a(6)),l=a(7),s=a(2),u=a.n(s),d=a(10),m=a(15),v=a(16),f=a(18),p=a(17),E=a(13),b=a(20),h=a.n(b),g=(a(73),a(27)),k=a.n(g),y=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"AppTitle"},"The Tube")),r.a.createElement("div",{className:"dateTime"},r.a.createElement(k.a,{className:"Time",format:"HH:mm",ticking:!0}),r.a.createElement(k.a,{className:"Date",format:"DD-MMM-YYYY",ticking:!0})))},S=a(19),N=a(91);function w(e){var t=e.replace("Underground Station",""),a=t.indexOf("(")+2;return 0!==a&&(t=t.slice(0,a-2)),t}function O(e,t){var a=e.findIndex((function(e){return e.id===t}));return e[a].name}a(83);var j=a(12),T=a(46),x=a(48),A=[],L=a(22),R={lineStatuses:[],lineStations:[],stations:[],allArrivals:[],lines:[],index:"",loading:!0,error:{}},I=Object(j.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(l.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},tube:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_STATUSES":return Object(L.a)({},e,{lineStatuses:n,loading:!1});case"GET_LINESTATIONS":return Object(L.a)({},e,{stations:n.stations,lineStations:[].concat(Object(l.a)(e.lineStations),[n.lineStations]),loading:!1});case"GET_STATIONARRIVALS":return Object(L.a)({},e,{allArrivals:n,loading:!1});case"STATUS_ERROR":return Object(L.a)({},e,{error:n,loading:!1});default:return e}}}),C=[x.a],_=Object(j.createStore)(I,{},Object(T.composeWithDevTools)(j.applyMiddleware.apply(void 0,C))),B=function(e){var t,a=e.station,n=_.getState();return t=a.lines.map((function(e){var t="";["hammersmith-city","waterloo-city","circle"].includes(e)&&(t="lightColor");var a=O(n.tube.lineStatuses,e);return r.a.createElement(o.b,{key:Object(N.a)(),to:"/line/".concat(e)},r.a.createElement("div",{className:"lineCell ".concat(e," ").concat(t)},a))})),r.a.createElement("div",{className:"row lineStop"},r.a.createElement(o.b,{className:"w50 lineName",to:"/station/".concat(a.url)},a.name),r.a.createElement("div",{className:"column w50 linesBlock"},t))},D=a(9),G="app_id=".concat("962fdb33","&app_key=").concat("b3f162b49250feb509d5823ae3a89262"),M=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r,i,c,o,s,d,m,v;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("--------------------------"),n=_.getState(),r=n.tube.stations,i=[],t.prev=4,t.next=7,h.a.get("https://api.tfl.gov.uk/Line/".concat(e,"/StopPoints?tflOperatedNationalRailStationsOnly=false&").concat(G),{headers:{Accept:"application/json"}});case 7:c=t.sent,console.log("Got",e,"line Stations:",c.data.length),c.data.map((function(t){var a,n=[],r=["no","0"],c=["TaxiRankOutsideStation"],o=[];[{key:"Address",value:void 0},{key:"PhoneNo",value:void 0}].forEach((function(e){var a=t.additionalProperties.find((function(t){return t.key===e.key}));if(a&&!r.includes(a.value))return e.value=a.value,void o.push(e)})),[{key:"Ticket Halls",value:void 0},{key:"Toilets",value:void 0},{key:"Lifts",value:void 0},{key:"Escalators",value:void 0},{key:"WiFi",value:void 0},{key:"Help Points",value:void 0},{key:"Payphones",value:void 0},{key:"Boarding Ramp",value:void 0},{key:"Cash Machines",value:void 0},{key:"Euro Cash Machines",value:void 0},{key:"Waiting Room",value:void 0},{key:"TaxiRankOutsideStation",value:void 0},{key:"Car park",value:void 0},{key:"Left Luggage",value:void 0},{key:"Photo Booths",value:void 0},{key:"Amazon Lockers",value:void 0},{key:"ASDA Click and Collect",value:void 0}].forEach((function(e){var a=t.additionalProperties.find((function(t){return t.key===e.key}));if(a&&c.includes(e.key)&&(e.key="Taxi Rank"),a&&!r.includes(a.value))return e.value=a.value,void n.push(e)})),i.push({key:t.id,id:t.id,url:(a=w(t.commonName),a.toLowerCase().replace(/ /g,"-").replace(/'/g,"")),name:w(t.commonName),lines:[e],lat:t.lat,lng:t.lon,contact:[].concat(o),facilities:n})})),o=i.filter((function(e){return!r.find((function(t){return e.id===t.id}))})),s=r.filter((function(e){return!i.find((function(t){return e.id===t.id}))})),d=r.filter((function(e){return i.find((function(t){return e.id===t.id}))})),m=d.map((function(t){return t.lines=Object(l.a)(new Set([].concat(Object(l.a)(t.lines),[e]).sort())),t})),v={lineStations:{id:e,stations:i},stations:[].concat(Object(l.a)(o),Object(l.a)(m),Object(l.a)(s))},a({type:"GET_LINESTATIONS",payload:v}),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(4),console.log("GET_LINESTATIONS error:",t.t0),a({type:"STATUS_ERROR",payload:t.t0});case 23:case"end":return t.stop()}}),t,null,[[4,19]])})));return function(e){return t.apply(this,arguments)}}()},F=function(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,i,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting statuses..."),a=performance.now(),n=[],r="app_id=".concat("962fdb33","&app_key=").concat("b3f162b49250feb509d5823ae3a89262"),e.prev=4,e.next=7,h.a.get("https://api.tfl.gov.uk/line/mode/tube/status?".concat(r),{headers:{Accept:"application/json"}});case 7:i=e.sent,(c=i.data).map((function(e){return n.push({key:e.id,id:e.id,name:e.name,status:e.lineStatuses[0].statusSeverityDescription,reason:e.lineStatuses[0].reason})})),console.log("Got statuses:"),console.log(c),o=performance.now(),console.log("took "+((o-a)/1e3).toFixed(3)+"s"),t({type:"GET_STATUSES",payload:n}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),t({type:"STATUS_ERROR",payload:e.t0});case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}()},J=(a(26),a(85),Object(D.b)((function(e){return{tube:e.tube}}),{getStatuses:F,getLineStations:M})((function(e){var t=e.getLineStations,a=e.getStatuses,i=e.tube,c=i.lineStations,o=i.lineStatuses,l=i.stations,s=Object(S.a)(e,["getLineStations","getStatuses","tube"]);Object(n.useEffect)((function(){0===o.length&&(console.log("Getting statuses (LineStops).."),a())}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<o.length)){e.next=10;break}return r=performance.now(),e.next=5,t(o[n].id);case 5:i=performance.now(),console.log("That took "+((i-r)/1e3).toFixed(3)+"s");case 7:n++,e.next=1;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();0===c.length&&e()}),[o,c]);var m=s.match.params.id,v=void 0,f="Loading...",p=[];0!==o.length&&(f=O(o,m)),c.length===o.length&&0!==o.length&&(v=c.findIndex((function(e){return e.id===m})),p=c[v].stations);var E="";return["hammersmith-city","waterloo-city","circle"].includes(m)&&(E="lightColor"),console.log("Rendering: ",m),r.a.createElement("section",null,r.a.createElement("div",{className:"CardSingle"},r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"row lineColor ".concat(m)},r.a.createElement("div",{className:"".concat(E)},f)),0===p.length?"Loading...":r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column w100 indent1"},r.a.createElement("h2",null,"Stations Served (",p.length,")"),r.a.createElement("div",{className:"LineStops dataBlock indent2"},p.map((function(e){var t=l.find((function(t){return t.id===e.id}));return r.a.createElement(B,{key:t.id,station:t})})))))))))}))),P=(a(44),function(e){var t=e.line,a="";if(t.reason){var n=(a=t.reason).indexOf(":")+1;a=a.substring(n)}var i="";return["hammersmith-city","waterloo-city","circle"].includes(t.id)&&(i="lightColor"),r.a.createElement("div",{className:"LineStatus"},r.a.createElement(o.b,{to:"/line/".concat(t.id)},r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"row lineColor ".concat(t.id)},r.a.createElement("div",{className:"".concat(i)},t.name)),r.a.createElement("div",{className:"cardBody"},r.a.createElement("div",{className:"row titleRow"},r.a.createElement("div",{className:"status"},t.status)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"data"},a))))))}),W=function(e){return r.a.createElement("div",{className:"LineStatus"},r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"row lineColor ".concat(e)},r.a.createElement("div",null,"Line Statuses")),r.a.createElement("div",{className:"row titleRow"},r.a.createElement("div",{className:"loading"},"Loading..."))))},U=Object(D.b)((function(e){return{tube:e.tube}}),{getStatuses:F})((function(e){var t=e.getStatuses,a=e.tube,i=a.lineStatuses,c=a.loading;return Object(n.useEffect)((function(){t()}),[t]),r.a.createElement("section",null,r.a.createElement("div",{className:"sectionBody CardGrid"},c?r.a.createElement(n.Fragment,null,r.a.createElement(W,{color:"piccadilly"})):r.a.createElement(n.Fragment,null,i.map((function(e){return r.a.createElement(P,{key:e.id,line:e})})))))})),H=a(31),Y=a.n(H);Y.a.accessToken="pk.eyJ1Ijoib3Jqb24iLCJhIjoiY2s5bnh3eDdjMDZqajNvcHA5MHZ6bWZxdiJ9.tuIb9BBBqKJfRW6Otc4RYw";var q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={lng:n.props.lng,lat:n.props.lat,zoom:15},n.markers=[],n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){new Y.a.Map({container:this.mapDiv,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row map",ref:function(t){return e.mapDiv=t}})}}]),a}(r.a.Component),Z=(a(86),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.facilities;return e=e.map((function(e){return r.a.createElement("div",{key:e.key,className:"w25 column"},e.key)})),r.a.createElement("div",{className:"Facilities dataBlock indent2"},e)}}]),a}(n.Component));Z.defaultProps={facilities:[]};var z=Z,V=(a(87),Object(D.b)((function(e){return{tube:e.tube}}),{})((function(e){var t=e.tube.allArrivals,a=Object(S.a)(e,["tube"]).line;console.log("Line",a),console.log("LineArrivals: ",t);var n=t.filter((function(e){return e.lineId===a.id})).map((function(e){return r.a.createElement("div",{className:"row",key:Object(N.a)()},r.a.createElement("div",null,e.towards),r.a.createElement("div",{className:"end"},e.expected))})),i="";if(a.reason){var c=(i=a.reason).indexOf(":")+1;i=i.substring(c)}console.log("arrivals: ",n);var l=!1;0===n.length&&(l=!0);var s="";return["hammersmith-city","waterloo-city","circle"].includes(a.id)&&(s="lightColor"),r.a.createElement("div",{className:"column dataBlock indent0"},r.a.createElement(o.b,{className:"row",to:"/line/".concat(a.id)},r.a.createElement("div",{className:"column w100 b1"},r.a.createElement("div",{key:a.id,className:"row lineColor ".concat(a.id)},r.a.createElement("div",{className:"".concat(s)},a.name)),r.a.createElement("div",{className:"row titleRow linkTo"},r.a.createElement("div",{className:"status"},a.status)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"data"},i)))),!l&&r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"infoLabel"},"Towards"),r.a.createElement("h4",{className:"infoLabel end"},"Expected Arrival")),n)}))),K=(a(88),"app_id=".concat("962fdb33","&app_key=").concat("b3f162b49250feb509d5823ae3a89262"),Object(D.b)((function(e){return{tube:e.tube}}),{getStatuses:F,getLineStations:M,getStationArrivals:function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=[],t.prev=2,t.next=5,h.a.get("https://api.tfl.gov.uk/StopPoint/".concat(n,"/Arrivals?").concat(G),{headers:{Accept:"application/json"}});case 5:t.sent.data.map((function(e){return r.push({lineName:e.lineName,lineId:e.lineId,platform:e.platformName,desintation:e.destination,towards:e.towards,expected:e.expectedArrival})})),i=r,console.log("Payload:",i),a({type:"GET_STATIONARRIVALS",payload:i}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("GET_STATIONARRIVALS error:",t.t0),a({type:"STATUS_ERROR",payload:t.t0});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getLineStations,a=e.getStatuses,i=e.getStationArrivals,c=e.tube,o=c.lineStations,l=c.lineStatuses,s=c.stations,m=c.arrivals,v=Object(S.a)(e,["getLineStations","getStatuses","getStationArrivals","tube"]);Object(n.useEffect)((function(){0===l.length&&(console.log("Getting statuses (LineStops).."),a())}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<l.length)){e.next=10;break}return r=performance.now(),e.next=5,t(l[n].id);case 5:i=performance.now(),console.log("That took "+((i-r)/1e3).toFixed(3)+"s");case 7:n++,e.next=1;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();0===o.length&&e()}),[l,o]),Object(n.useEffect)((function(){b&&i(b)}),[s]);var f,p,E=v.match.params.url,b=s.find((function(e){return e.url===E})),h="",g="",k="",y="";return b&&(console.log("station:",b.name),h=function(e){return e=(e=e.split(",")).map((function(e){return r.a.createElement("div",{key:Object(N.a)()},e)}))}(h=b.contact[0].value),g=b.contact[1].value,f=b.lat,(p=b.lng)>=0?p+="\xb0E":p=-p+"\xb0W",k={lat:f+="\xb0N",lng:p},y=b.lines.map((function(e){return r.a.createElement(V,{key:e,line:(t=e,l.find((function(e){return e.id===t}))),arrivals:m});var t}))),r.a.createElement("section",null,r.a.createElement("div",{className:"CardSingle"},r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"row"},b?r.a.createElement("h1",null,b.name):r.a.createElement("h1",null,"Loading...")),b?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column w100 indent1"},r.a.createElement("h2",null,"Arrivals"),y)),r.a.createElement("div",{className:"row address"},r.a.createElement("div",{className:"column w50 indent1"},r.a.createElement("h2",null,"Address"),r.a.createElement("div",{className:"column dataBlock indent2"},h)),r.a.createElement("div",{className:"column w50 indent1"},r.a.createElement("h2",null,"Telephone"),r.a.createElement("div",{className:"column dataBlock indent2"},g))),r.a.createElement("div",{className:"row facilities"},r.a.createElement("div",{className:"column w100 indent1"},r.a.createElement("h2",null,"Facilities"),r.a.createElement(z,{facilities:b.facilities}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column w100 indent1"},r.a.createElement(q,{lat:b.lat,lng:b.lng}),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,k.lat," ",k.lng),r.a.createElement("div",{className:"code"},"Station ID: ",b.id))))):"")))}))),$=(a(89),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).findLine=function(e){return n.state.tubeLines.find((function(t){return t.id===e}))},n.findStationFromUrl=function(e){return n.state.stations.find((function(t){return t.url===e}))},n.findStationFromId=function(e){return n.state.stations.findIndex((function(t){return t.id===e}))},n.findLineIndex=function(e){return n.state.tubeLines.findIndex((function(t){return t.id===e}))},n.state={tubeLines:[],stations:[]},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.state.tubeLines.length}},{key:"getStopOrder",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.apiString,e.next=3,h.a.get("https://api.tfl.gov.uk/Line/".concat(t,"/Route/Sequence/all?").concat(a),{headers:{Accept:"application/json"}});case 3:return n=e.sent,r=n.data.orderedLineRoutes,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"checkProperties",value:function(e){return e=e?e.value:void 0}},{key:"addStation",value:function(e,t){var a=t.findIndex((function(t){return t.id===e.id}));return-1!==a?t[a].lines.push(e.lines[0]):t=[].concat(Object(l.a)(t),[e]),t}},{key:"compare",value:function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}},{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{store:_},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/line/:id",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(E.a,{exact:!0,path:"/station/:url",render:function(t){return r.a.createElement(K,Object.assign({},t,{station:e.findStationFromUrl(t.match.params.url)}))}}),r.a.createElement(E.a,{path:"/",component:U})),r.a.createElement("footer",{className:"right"},r.a.createElement("a",{href:"http://www.orjon.com"},"orjon.com"))))}}]),a}(n.Component));$.defaultProps={apiString:"app_id=".concat("962fdb33","&app_key=").concat("b3f162b49250feb509d5823ae3a89262"),mapboxToken:"pk.eyJ1Ijoib3Jqb24iLCJhIjoiY2s5bnh3eDdjMDZqajNvcHA5MHZ6bWZxdiJ9.tuIb9BBBqKJfRW6Otc4RYw"};var Q=$;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.31d81773.chunk.js.map