(this["webpackJsonpadmin-infi"]=this["webpackJsonpadmin-infi"]||[]).push([[0],{110:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(10),a=n.n(c),o=(n(110),n(88)),l=n(2),s={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{primary:"#07c",secondary:"tomato",blue:"#07c",lightgray:"#f6f6ff",background:"#fff"},space:[0,4,8,16,32,64,128,256],fonts:{body:"system-ui, sans-serif",heading:"inherit",monospace:"Menlo, monospace"}};function u(e){var t=e.children;return Object(l.jsx)(o.a,{theme:s,children:t})}var j=n(54),d=n(15),b=n(43),f=n(7),x=n(36),O=n(173),m=function(e){return Object(l.jsx)(O.a,Object(f.a)({display:"flex"},e))};function h(e){return Object(l.jsx)(O.a,Object(f.a)({sx:{backgroundColor:"white",p:3,borderRadius:10,boxShadow:"0 0 16px rgba(0, 0, 0, .25)"}},e))}var v=n(171),p=n(12);function y(e){var t=Object.assign({},e),n=Object(p.d)(t),i=Object(b.a)(n,1)[0];return Object(l.jsx)(v.a,Object(f.a)(Object(f.a)({},i),t))}function g(e){return Object(l.jsx)(O.a,Object(f.a)({component:"p"},e))}var k=n(75),S=["name"];function w(e){var t=e.name,n=Object(x.a)(e,S),i=Object(p.d)({name:t}),r=Object(b.a)(i,3),c=r[0],a=(r[1],r[2]);return Object(l.jsx)(O.a,{minWidth:"250px",children:Object(l.jsx)(k.a,Object(f.a)({value:c.value,onChange:function(e){return a.setValue(e)}},n))})}var C=n.p+"static/media/cofidoc-black.ccd491af.png",D=n(28),_=n(175);function I(e){return localStorage.setItem("token",e)}function P(e){return localStorage.setItem("refresh-token",e)}function T(e){var t;P(e.refreshToken),I(e.token),t=e.user,localStorage.setItem("user",JSON.stringify(t))}var q=["children","to"];function N(e){var t=e.children;return Object(l.jsxs)(O.a,{display:"flex",width:"100%",children:[Object(l.jsx)(O.a,{width:"215px",height:"100vh",position:"fixed",children:Object(l.jsxs)(O.a,{display:"flex",height:"100%",flexDirection:"column",sx:{position:"relative"},children:[Object(l.jsx)(O.a,{display:"flex",mt:4,p:4,alignItems:"center",justifyContent:"center",children:Object(l.jsx)("img",{src:C,alt:"logo",width:"100%"})}),Object(l.jsx)(V,{to:"/",children:"Liste des cotations"}),Object(l.jsx)(V,{to:"/linked-act",children:"Association de cotations"}),Object(l.jsx)(V,{to:"/decision",children:"Arbre de d\xe9cision"}),Object(l.jsx)(V,{to:"/key-letter",children:"Lettre Cl\xe9"}),Object(l.jsx)(V,{to:"/coefficient",children:"Coefficient"}),Object(l.jsx)(V,{to:"/increase",children:"Majoration"}),Object(l.jsx)(m,{flexDirection:"column",justifyContent:"flex-end",mb:2,height:"100%",children:Object(l.jsx)(J,{})})]})}),Object(l.jsx)(O.a,{display:"flex",flexDirection:"column",p:3,width:"100%",ml:"200px",mt:2,children:Object(l.jsx)(h,{children:t})})]})}function V(e){var t=e.children,n=e.to,i=Object(x.a)(e,q);return Object(l.jsx)(j.c,Object(f.a)(Object(f.a)({to:n,exact:!0,className:"link",activeStyle:{color:"#f72585",fontWeight:"bold"}},i),{},{children:t}))}function J(){var e=Object(i.useState)(),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(i.useEffect)((function(){var e=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}();r(e)}),[]);return Object(l.jsx)(j.b,{to:"/login",children:Object(l.jsxs)(m,{alignItems:"center",px:2,children:[Object(l.jsx)(_.a,{children:function(){var e,t,i;return null===(e="".concat((null===n||void 0===n||null===(t=n.firstname)||void 0===t?void 0:t[0])||"").concat((null===n||void 0===n||null===(i=n.lastname)||void 0===i?void 0:i[0])||""))||void 0===e?void 0:e.toUpperCase()}()}),Object(l.jsxs)(D.c,{ml:2,children:[null===n||void 0===n?void 0:n.firstname," - ",null===n||void 0===n?void 0:n.lastname]})]})})}var L=n(8),F=n.n(L),A=n(17),W=n(168),M=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var i,r,c,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=localStorage.getItem("token"),e.next=3,fetch("".concat("https://t5gj8q0b96.execute-api.us-east-1.amazonaws.com/staging").concat(t),Object(f.a)({headers:Object(f.a)(Object(f.a)({},n.headers||{}),{},{"Content-Type":"application/json",Accept:"application/json",Authorization:i?"Bearer ".concat(i):null})},n));case 3:if(401!==(r=e.sent).status){e.next=12;break}return c=localStorage.getItem("refresh-token"),e.next=8,R(c);case 8:return I((a=e.sent).body.accessToken),P(a.body.refresh),e.abrupt("return",M(t,n));case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function R(e){return M("/taxi/refreshToken",{method:"POST",body:JSON.stringify({refreshToken:e})})}function B(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(A.a)(F.a.mark((function e(t){var n,i,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,i=t.password,e.next=3,M("/infi/login",{method:"POST",body:JSON.stringify({email:n,password:i})});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){var e=Object(d.f)();return Object(l.jsx)(D.b,{flex:1,height:"100vh",justifyContent:"center",alignItems:"center",children:Object(l.jsx)(p.c,{initialValues:{email:"",password:""},onSubmit:function(){var t=Object(A.a)(F.a.mark((function t(n){var i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(n);case 2:i=t.sent,console.log({data:i}),T(i),e.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(l.jsx)(p.b,{children:Object(l.jsx)(h,{width:456,children:Object(l.jsxs)(D.b,{flexDirection:"column",width:"100%",children:[Object(l.jsx)(D.c,{mb:1,textAlign:"center",fontWeight:"bold",children:"Admin Cofidoc"}),Object(l.jsx)(y,{label:"Email",name:"email"}),Object(l.jsx)(D.b,{my:1}),Object(l.jsx)(y,{label:"Mot de passe",name:"password"}),Object(l.jsx)(D.b,{flex:1,justifyContent:"center",mt:3,children:Object(l.jsx)(W.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})})]})})})})})}var E=n(30),U=n(169),G=n(35),H=n.n(G),K=n(170),X=n(58);function Y(){return Object(X.a)("/infi/quotation",(function(e){return M(e,{method:"POST"}).then((function(e){return e.json()}))}))}function Z(){return Object(X.a)("/infi/key-letters",(function(e){return M(e,{method:"POST"}).then((function(e){return e.json()}))}))}function $(){return Object(X.a)("/infi/coefficients",(function(e){return M(e,{method:"POST"}).then((function(e){return e.json()}))}))}function ee(){return Object(X.a)("/infi/increases",(function(e){return M(e,{method:"POST"}).then((function(e){return e.json()}))}))}var te=["name"],ne=["name"],ie=["name"];function re(e){var t=e.name,n=Object(x.a)(e,te),i=ee().data,r=(null===i||void 0===i?void 0:i.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{label:e.label,value:e._id})})))||[];return Object(l.jsx)(w,Object(f.a)({options:r,name:t},n))}function ce(e){var t=e.name,n=Object(x.a)(e,ne),i=Z().data,r=(null===i||void 0===i?void 0:i.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{label:e.label,value:e._id})})).sort((function(e,t){return e.label.localeCompare(t.label)})))||[];return Object(l.jsx)(w,Object(f.a)({options:r,name:t},n))}function ae(e){var t=e.name,n=Object(x.a)(e,ie),i=$().data,r=(null===i||void 0===i?void 0:i.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{label:e._id,value:e.value})})).sort((function(e,t){return Number(e.value)-Number(t.label)})))||[];return Object(l.jsx)(w,Object(f.a)({options:r,name:t},n))}var oe=n(174);function le(){var e=Y(),t=e.data,n=void 0===t?[]:t,i=e.mutate,r=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var r,c,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,c=Object(oe.a)(),a=Object(f.a)({_id:c,increase:{}},t),i((function(e){return[a].concat(Object(E.a)(e))}),!1),e.next=6,M("/infi/add/quotation",{method:"POST",body:JSON.stringify(a)});case 6:return e.next=8,i();case 8:r();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null===n||void 0===n?void 0:n.filter((function(e){return e._id!==t._id}))),e.next=3,M("/infi/remove/quotation",{method:"POST",body:JSON.stringify({_id:t._id})});case 3:return e.next=5,i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(se,{initialValues:{},onSubmit:r}),Object(l.jsx)(U.a,{}),Object(l.jsx)(ue,{quotations:n,onDelete:c})]})}function se(e){var t=e.initialValues,n=e.onSubmit;return Object(l.jsx)(p.c,{initialValues:t,onSubmit:n,children:Object(l.jsx)(p.b,{children:Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(y,{label:"Nom du soin",name:"name",width:"400px"}),Object(l.jsxs)(m,{flex:1,justifyContent:"space-between",mt:3,mb:3,alignItems:"flex-end",children:[Object(l.jsx)(ce,{name:"keyLetter"}),Object(l.jsx)(ae,{name:"coefficient"}),Object(l.jsx)(re,{name:"increase"}),Object(l.jsx)(O.a,{children:Object(l.jsx)(W.a,{variant:"contained",color:"primary",type:"submit",children:"ajouter"})})]})]})})})}function ue(e){var t=e.quotations,n=e.onDelete;return Object(l.jsx)(m,{flexDirection:"column",mt:2,children:null===t||void 0===t?void 0:t.map((function(e){var t,i;return Object(l.jsxs)(m,{alignItems:"center",justifyContent:"space-between",children:[Object(l.jsxs)(m,{alignItems:"center",children:[Object(l.jsx)(g,{children:e.name}),Object(l.jsx)("div",{children:Object(l.jsxs)(m,{sx:{borderRadius:10,backgroundColor:"#2c7ae0"},px:2,ml:2,alignItems:"center",py:"2px",color:"white",fontWeight:"bold",children:[null===(t=e.keyLetter)||void 0===t?void 0:t.label," ",null===(i=e.coefficient)||void 0===i?void 0:i.value]})})]}),Object(l.jsx)(K.a,{"aria-label":"delete",onClick:function(){return n(e)},children:Object(l.jsx)(H.a,{})})]},e._id)}))})}var je=["name"];function de(e){var t=e.name,n=Object(x.a)(e,je),i=Object(p.d)({name:t}),r=Object(b.a)(i,3),c=r[0],a=(r[1],r[2]),o=Object(p.e)(),s=o.setFieldValue,u=o.values,j=Y().data;return console.log({quotations:j}),Object(l.jsx)(k.a,Object(f.a)({value:c.value,onChange:function(e){var t;a.setValue(e),(null===e||void 0===e?void 0:e.length)>(null===(t=u.quotations)||void 0===t?void 0:t.length)?s("quotations",[].concat(Object(E.a)(u.quotations),[{keyLetter:"",coeff:""}])):(u.quotations.pop(),s("quotations",u.quotations))},options:null===j||void 0===j?void 0:j.map((function(e){var t,n;return Object(f.a)({label:"".concat(e.name," (").concat(null===(t=e.keyLetter)||void 0===t?void 0:t.label," ").concat(null===(n=e.coefficient)||void 0===n?void 0:n.label,")"),value:e._id},e)}))},n))}var be=n(95);function fe(){var e=Object(X.a)("/infi/linked-quotation",(function(e){return M(e,{method:"POST"}).then((function(e){return e.json()}))})),t=e.data,n=void 0===t?[]:t,i=e.mutate,r=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,c=Object(f.a)(Object(f.a)({},t),{},{_id:(a=t.linkedQuotations,null===a||void 0===a?void 0:a.map((function(e){return e._id})).sort((function(e,t){return e.localeCompare(t)})).join("_"))}),console.log({linkedAddToAdd:c}),i((function(e){return[c].concat(Object(E.a)(e))}),!1),e.next=6,M("/infi/add/linked-quotation",{method:"POST",body:JSON.stringify(c)});case 6:return e.next=8,i();case 8:r();case 9:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null===n||void 0===n?void 0:n.filter((function(e){return e._id!==t._id}))),e.next=3,M("/infi/remove/linked-quotation",{method:"POST",body:JSON.stringify({_id:t._id})});case 3:return e.next=5,i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(p.c,{initialValues:{linkedQuotations:[],quotations:[]},onSubmit:r,children:function(e){var t=e.values;return Object(l.jsxs)(p.b,{children:[Object(l.jsx)(de,{name:"linkedQuotations",isSearchable:!0,isClearable:!0,isMulti:!0}),Object(l.jsxs)(m,{flexDirection:"column",justifyContent:"space-between",children:[Object(l.jsx)(p.a,{name:"quotations",children:function(){var e;return Object(l.jsx)("div",{children:null===(e=t.quotations)||void 0===e?void 0:e.map((function(e,t){return Object(l.jsx)(m,{flexDirection:"column",py:2,children:Object(l.jsxs)(m,{children:[Object(l.jsx)(ce,{name:"quotations.".concat(t,".keyLetter"),placeholder:"Lettre Cle"}),Object(l.jsx)(D.a,{px:1}),Object(l.jsx)(ae,{name:"quotations.".concat(t,".coefficient"),placeholder:"Coeff"}),Object(l.jsx)(D.a,{px:1}),Object(l.jsx)(re,{name:"quotations.".concat(t,".increase"),placeholder:"Majoration"})]})},t)}))})}}),Object(l.jsx)(D.a,{mt:2,children:Object(l.jsx)(W.a,{variant:"contained",color:"primary",type:"submit",children:"ajouter"})})]})]})}}),Object(l.jsx)(D.a,{width:"100%",sx:{borderBottom:"1px solid rgba(0,0,0, 0.5)"},mt:3}),Object(l.jsx)(xe,{data:n,onDelete:c})]})}function xe(e){var t=e.data,n=e.onDelete;return Object(l.jsx)(m,{flexDirection:"column",mt:2,children:null===t||void 0===t?void 0:t.map((function(e,t){var i,r,c,a;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(m,{alignItems:"center",justifyContent:"space-between",mb:1,sx:{borderBottom:" 1px solid black"},children:[Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(m,{children:null===(i=e.linkedQuotations)||void 0===i?void 0:i.map((function(e){return Object(l.jsx)(m,{sx:{backgroundColor:"#a8a7a7"},px:1,borderRadius:5,mt:1,mr:1,fontSize:13,fontWeight:"bold",children:e.label},e.value)}))}),Object(l.jsxs)(m,{mt:1,children:[Object(l.jsx)(m,{children:null===(r=e.linkedQuotations)||void 0===r?void 0:r.map((function(e){return"".concat(e.keyLetter.label," ").concat(e.coefficient.label)})).join(" + ")}),Object(l.jsxs)(m,{ml:2,sx:{textDecoration:"line-through"},children:[Oe(e.linkedQuotations),"\u20ac"]}),Object(l.jsx)(m,{mx:2,children:" => "}),Object(l.jsx)(m,{color:"blue",children:null===(c=e.quotations)||void 0===c||null===(a=c.map((function(e){var t,n,i;return(null===(t=e.keyLetter)||void 0===t?void 0:t.label)?"".concat(null===(n=e.keyLetter)||void 0===n?void 0:n.label," ").concat(null===(i=e.coefficient)||void 0===i?void 0:i.label):""})))||void 0===a?void 0:a.filter(Boolean).join(" + ")}),Object(l.jsxs)(m,{ml:2,color:"red",children:[Oe(e.quotations),"\u20ac"]})]})]}),Object(l.jsx)(K.a,{"aria-label":"delete",onClick:function(){return n(e)},children:Object(l.jsx)(H.a,{})})]},t),Object(l.jsx)(U.a,{})]})}))})}function Oe(e){return Object(be.sum)(null===e||void 0===e?void 0:e.map((function(e){var t,n;return(null===(t=e.keyLetter)||void 0===t?void 0:t.unitPrice)+(null===(n=e.coefficient)||void 0===n?void 0:n.value)})))}function me(){var e=Z(),t=e.data,n=void 0===t?[]:t,i=e.mutate,r=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,c=Object(f.a)({_id:t.label},t),i((function(e){return[c].concat(Object(E.a)(e))}),!1),e.next=5,M("/infi/add/key-letter",{method:"POST",body:JSON.stringify(c)});case 5:return e.next=7,i();case 7:r();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null===n||void 0===n?void 0:n.filter((function(e){return e._id!==t._id}))),e.next=3,M("/infi/remove/key-letter",{method:"POST",body:JSON.stringify({_id:t._id})});case 3:return e.next=5,i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(he,{initialValues:{},onSubmit:r}),Object(l.jsx)(U.a,{}),Object(l.jsx)(ve,{keyLetters:null===n||void 0===n?void 0:n.sort((function(e,t){var n;return null===e||void 0===e||null===(n=e.label)||void 0===n?void 0:n.localeCompare(t.label)})),onDelete:c})]})}function he(e){var t=e.initialValues,n=e.onSubmit;return Object(l.jsx)(p.c,{initialValues:t,onSubmit:n,children:Object(l.jsx)(p.b,{children:Object(l.jsx)(m,{flexDirection:"column",children:Object(l.jsxs)(m,{flex:1,justifyContent:"space-between",mt:3,mb:3,alignItems:"flex-end",children:[Object(l.jsx)(y,{name:"label",placeholder:"label"}),Object(l.jsx)(y,{name:"unitPrice",type:"number",placeholder:"prix unitaire"}),Object(l.jsx)(y,{name:"unitPriceDom",type:"number",placeholder:"prix Dom Tom"}),Object(l.jsx)(O.a,{children:Object(l.jsx)(W.a,{variant:"contained",color:"primary",type:"submit",children:"ajouter"})})]})})})})}function ve(e){var t=e.keyLetters,n=e.onDelete;return Object(l.jsx)(m,{flexDirection:"column",mt:2,children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)(m,{alignItems:"center",justifyContent:"space-between",children:[Object(l.jsxs)(m,{alignItems:"center",children:[Object(l.jsx)(g,{children:e.label}),Object(l.jsxs)(m,{children:[Object(l.jsxs)(m,{sx:{borderRadius:10,backgroundColor:"#2c7ae0"},px:2,ml:2,alignItems:"center",py:"2px",color:"white",fontWeight:"bold",children:[e.unitPrice,"\u20ac"]}),Object(l.jsxs)(m,{sx:{borderRadius:10,backgroundColor:"#e08c2c"},px:2,ml:2,alignItems:"center",py:"2px",color:"white",fontWeight:"bold",children:["(DOM) ",e.unitPriceDom,"\u20ac"]})]})]}),Object(l.jsx)(K.a,{"aria-label":"delete",onClick:function(){return n(e)},children:Object(l.jsx)(H.a,{})})]},e._id)}))})}function pe(){var e=$(),t=e.data,n=void 0===t?[]:t,i=e.mutate,r=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,c={_id:String(t.value),value:Number(t.value)},i((function(e){return[c].concat(Object(E.a)(e))}),!1),e.next=5,M("/infi/add/coefficient",{method:"POST",body:JSON.stringify(c)});case 5:return e.next=7,i();case 7:r();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null===n||void 0===n?void 0:n.filter((function(e){return e._id!==t._id}))),e.next=3,M("/infi/remove/coefficient",{method:"POST",body:JSON.stringify({_id:t._id})});case 3:return e.next=5,i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(ye,{initialValues:{},onSubmit:r}),Object(l.jsx)(U.a,{}),Object(l.jsx)(ge,{coefficients:null===n||void 0===n?void 0:n.sort((function(e,t){return Number(e.value)-Number(t.value)})),onDelete:c})]})}function ye(e){var t=e.initialValues,n=e.onSubmit;return Object(l.jsx)(p.c,{initialValues:t,onSubmit:n,children:Object(l.jsx)(p.b,{children:Object(l.jsx)(m,{flexDirection:"column",children:Object(l.jsxs)(m,{flex:1,justifyContent:"space-between",mt:3,mb:3,alignItems:"flex-end",children:[Object(l.jsx)(y,{name:"value",placeholder:"valeur du coefficient"}),Object(l.jsx)(O.a,{children:Object(l.jsx)(W.a,{variant:"contained",color:"primary",type:"submit",children:"ajouter"})})]})})})})}function ge(e){var t=e.coefficients,n=e.onDelete;return Object(l.jsx)(m,{flexDirection:"column",mt:2,children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)(m,{alignItems:"center",justifyContent:"space-between",children:[Object(l.jsx)(m,{alignItems:"center",children:Object(l.jsx)(g,{children:e.value})}),Object(l.jsx)(K.a,{"aria-label":"delete",onClick:function(){return n(e)},children:Object(l.jsx)(H.a,{})})]},e._id)}))})}function ke(){var e=ee(),t=e.data,n=void 0===t?[]:t,i=e.mutate,r=function(){var e=Object(A.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,c=Object(f.a)({_id:t.label},t),i((function(e){return[c].concat(Object(E.a)(e))}),!1),e.next=5,M("/infi/add/increase",{method:"POST",body:JSON.stringify(c)});case 5:return e.next=7,i();case 7:r();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null===n||void 0===n?void 0:n.filter((function(e){return e._id!==t._id}))),e.next=3,M("/infi/remove/increase",{method:"POST",body:JSON.stringify({_id:t._id})});case 3:return e.next=5,i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(m,{flexDirection:"column",children:[Object(l.jsx)(Se,{initialValues:{},onSubmit:r}),Object(l.jsx)(U.a,{}),Object(l.jsx)(we,{increases:null===n||void 0===n?void 0:n.sort((function(e,t){var n;return null===e||void 0===e||null===(n=e.label)||void 0===n?void 0:n.localeCompare(t.label)})),onDelete:c})]})}function Se(e){var t=e.initialValues,n=e.onSubmit;return Object(l.jsx)(p.c,{initialValues:t,onSubmit:n,children:Object(l.jsx)(p.b,{children:Object(l.jsx)(m,{flexDirection:"column",children:Object(l.jsxs)(m,{flex:1,justifyContent:"space-between",mt:3,mb:3,alignItems:"flex-end",children:[Object(l.jsx)(y,{name:"label",placeholder:"label"}),Object(l.jsx)(y,{name:"unitPrice",type:"number",placeholder:"prix unitaire"}),Object(l.jsx)(y,{name:"unitPriceDom",type:"number",placeholder:"prix Dom Tom"}),Object(l.jsx)(O.a,{children:Object(l.jsx)(W.a,{variant:"contained",color:"primary",type:"submit",children:"ajouter"})})]})})})})}function we(e){var t=e.increases,n=e.onDelete;return Object(l.jsx)(m,{flexDirection:"column",mt:2,children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)(m,{alignItems:"center",justifyContent:"space-between",children:[Object(l.jsxs)(m,{alignItems:"center",children:[Object(l.jsx)(g,{children:e.label}),Object(l.jsxs)(m,{children:[Object(l.jsxs)(m,{sx:{borderRadius:10,backgroundColor:"#2c7ae0"},px:2,ml:2,alignItems:"center",py:"2px",color:"white",fontWeight:"bold",children:[e.unitPrice,"\u20ac"]}),Object(l.jsxs)(m,{sx:{borderRadius:10,backgroundColor:"#e08c2c"},px:2,ml:2,alignItems:"center",py:"2px",color:"white",fontWeight:"bold",children:["(DOM) ",e.unitPriceDom,"\u20ac"]})]})]}),Object(l.jsx)(K.a,{"aria-label":"delete",onClick:function(){return n(e)},children:Object(l.jsx)(H.a,{})})]},e._id)}))})}var Ce=function(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)(u,{children:[Object(l.jsx)(d.a,{path:"/login",children:Object(l.jsx)(z,{})}),Object(l.jsx)(N,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/increase",children:Object(l.jsx)(ke,{})}),Object(l.jsx)(d.a,{path:"/coefficient",children:Object(l.jsx)(pe,{})}),Object(l.jsx)(d.a,{path:"/key-letter",children:Object(l.jsx)(me,{})}),Object(l.jsx)(d.a,{path:"/linked-act",children:Object(l.jsx)(fe,{})}),Object(l.jsx)(d.a,{path:"/decision",children:"Arbre de decision"}),Object(l.jsx)(d.a,{path:"/",exact:!0,children:Object(l.jsx)(le,{})})]})})]})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(Ce,{})}),document.getElementById("root")),De()}},[[136,1,2]]]);
//# sourceMappingURL=main.ca178c26.chunk.js.map