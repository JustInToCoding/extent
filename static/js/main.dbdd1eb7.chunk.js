(this.webpackJsonpextent=this.webpackJsonpextent||[]).push([[0],{44:function(e,t,a){e.exports=a(98)},49:function(e,t,a){},50:function(e,t,a){},81:function(e,t){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),i=a.n(o),c=(a(49),a(14)),l=(a(50),a(102)),s=a(100),u=a(103),m=a(101),p=a(40),f=a.n(p),d=a(41),h=a.n(d),g=a(4),y=a.n(g),v=(a(94),l.a.BaseLayer,l.a.Overlay);var E=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(),p=Object(c.a)(i,2),d=p[0],g=p[1],E=[51.84276079,5.18380148];if(d){var b=Object(c.a)(d.geometry.coordinates[0][0],2),w=b[0];E=[b[1],w]}return r.a.createElement("div",{className:"map"},r.a.createElement(s.a,{center:E,zoom:15,className:"leaflet-map"},r.a.createElement(u.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(l.a,{position:"topright"},d&&r.a.createElement(v,{checked:!0,name:"Polygon"},r.a.createElement(m.a,{data:d})),a&&r.a.createElement(v,{name:"Points"},r.a.createElement(m.a,{data:a,pointToLayer:function(e,t){return y.a.circleMarker(t,{radius:2,fillColor:"#ff7800",color:"#ff0000"})}})))),r.a.createElement("input",{type:"file",id:"input",onChange:function(e){var t=new FileReader;t.addEventListener("load",(function(){var e=f.a.parseShp(t.result);o(e);var a=e.map((function(e){return e.coordinates})),n=h()(a);g({type:"Feature",geometry:{type:"Polygon",coordinates:[n]}})}),!1),e.target.files&&t.readAsArrayBuffer(e.target.files[0])}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.dbdd1eb7.chunk.js.map