(this["webpackJsonppart2-puhluet"]=this["webpackJsonppart2-puhluet"]||[]).push([[0],{17:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(16),l=t.n(c),r=(t(7),t(5)),u=t(2),i=t(3),s=t.n(i),m="/api/persons",f=function(){return s.a.get(m)},d=function(e){return s.a.post(m,e)},b=function(e,n){return s.a.put("".concat(m,"/").concat(e),n)},h=function(e){return s.a.delete("".concat(m,"/").concat(e))},v=function(e){return o.a.createElement("form",{onSubmit:e.function},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.name,onChange:e.personHandler})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.number,onChange:e.numberHandler})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},E=function(e){return o.a.createElement("div",null," Filter shown with: ",o.a.createElement("input",{value:e.value,onChange:e.eventHandler}))},p=function(e){var n=e.persons;return o.a.createElement(o.a.Fragment,null,n.map((function(n){return o.a.createElement("p",{key:n.id},n.name," ",n.number,"  ",o.a.createElement("button",{onClick:function(){e.function(n.id)}},"Delete"))})))},j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(t),i=Object(u.a)(l,2),s=i[0],m=i[1],j=Object(a.useState)(""),w=Object(u.a)(j,2),O=w[0],y=w[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),H=k[0],A=k[1],C=Object(a.useState)(""),L=Object(u.a)(C,2),P=L[0],D=L[1],N=Object(a.useState)(null),T=Object(u.a)(N,2),B=T[0],F=T[1],I=function(e){F(e),setTimeout((function(){F(null)}),5e3)};Object(a.useEffect)((function(){var e,n=[],a=Object(r.a)(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;o.name.includes(P)&&(console.log("found",o.name),console.log("with filter",P),n.push(o),console.log(n))}}catch(c){a.e(c)}finally{a.f()}m(n)}),[P]),Object(a.useEffect)((function(){m(t)}),[t]),Object(a.useEffect)((function(){console.log("effect"),f().then((function(e){c(e.data),console.log("persons",t)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(g,{message:B}),o.a.createElement(E,{value:P,eventHandler:function(e){console.log(e.target.value),D(e.target.value)}}),o.a.createElement("h2",null,"add new:"),o.a.createElement(v,{function:function(e){e.preventDefault();var n,a=0,o={name:O,number:H},l=Object(r.a)(t);try{for(l.s();!(n=l.n()).done;){var u=n.value;u.name===O&&window.confirm("REALLY UPDATE THIS NAME?!"+u.name)&&(b(u.id,o).then((function(e){console.log(e),f().then((function(e){c(e.data)}))})).catch((function(e){I(O+"may not be updated, maby its already removed?")})),a=1)}}catch(i){l.e(i)}finally{l.f()}0===a&&d(o).then((function(e){console.log(e.data),c(t.concat(o)),I("Person "+O+" added")})).catch((function(e){I(O+" can't be created")})),y(""),A(""),console.log(t),console.log("button clicked",e.target)},personHandler:function(e){console.log(e.target.value),y(e.target.value)},name:O,number:H,numberHandler:function(e){console.log(e.target.value),A(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(p,{persons:s,function:function(e){window.confirm("REALLY?!")&&h(e).then((function(n){console.log(n.data),f().then((function(e){c(e.data)})).catch((function(n){I("Person with this id can't be deleted:"+e)}))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.b1d13f3f.chunk.js.map