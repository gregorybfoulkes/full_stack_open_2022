(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(18),c=t.n(u),o=t(19),l=t(2),i=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"search names: ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.newName,t=e.newNumber,a=e.handleNameChange,u=e.handleNumberChange,c=e.addPerson;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.persons,t=e.deleteEntry;return r.a.createElement("div",null,n.map(function(e,n){return r.a.createElement("p",{key:n},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))},s=(t(8),function(e){var n=e.message;return""===n?null:n.includes("ERROR")?r.a.createElement("div",null,r.a.createElement("h2",{className:"error"},n)):r.a.createElement("div",null,r.a.createElement("h2",{className:"messageStyle"},n))}),f=t(3),h=t.n(f),E="/api/persons",b={addPerson:function(e){return h.a.post(E,e).then(function(e){return e.data})},allPersons:function(){return h.a.get(E).then(function(e){return e.data})},deletePerson:function(e){return h.a.delete("".concat(E,"/").concat(e)).then(function(e){return e.data})},update:function(e,n){return h.a.put("".concat(E,"/").concat(e),n).then(function(e){return e.data})}},v=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),h=f[0],E=f[1],v=Object(a.useState)(""),p=Object(l.a)(v,2),w=p[0],g=p[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),N=j[0],C=j[1],P=Object(a.useState)(""),y=Object(l.a)(P,2),R=y[0],S=y[1];Object(a.useEffect)(function(){b.allPersons().then(function(e){return u(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{value:R,onChange:function(e){S(e.target.value);var n=t.filter(function(e){return e.name.match(R)});u(n)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(m,{newName:h,newNumber:w,handleNameChange:function(e){E(e.target.value)},handleNumberChange:function(e){g(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.filter(function(e){return e.name===h}),a=Object(o.a)({},n[0],{number:w}),r={name:h,number:w};t.some(function(e){return e.name===r.name})?window.confirm("".concat(h," is already added to phonebook, replace old number with new on ?"))&&b.update(a.id,a).then(function(e){u(t.map(function(n){return n.id!==a.id?n:e})),C("".concat(h," was updated")),setTimeout(function(){C("")},5e3)}).catch(function(e){console.log(e),u(t.filter(function(e){return e.id!==a.id})),E(""),g(""),C("[ERROR] ".concat(a.name," was already deleted from server")),setTimeout(function(){C("")},5e3)}):b.addPerson(r).then(function(e){u(t.concat(e)),C("".concat(r.name," was added")),E(""),g(""),setTimeout(function(){C("")},5e3)})}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,deleteEntry:function(e){var n=t.filter(function(n){return n.id===e});window.confirm("Delete ".concat(n[0].name," ?"))&&b.deletePerson(n[0].id).then(u(t.filter(function(n){return n.id!==e})))}}),r.a.createElement(s,{message:N}))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(v,null))},8:function(e,n,t){}},[[20,2,1]]]);
//# sourceMappingURL=main.7fd0384a.chunk.js.map