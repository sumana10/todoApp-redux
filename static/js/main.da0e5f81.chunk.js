(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),a=n.n(r),i=(n(25),n(5)),u=(n(26),n(27),n(16)),d="ADD_TODO",s="REMOVE_TODO",l=n(7),j=n(3),b=Object(l.b)((function(t){return{todos:t.todos}}),(function(t){return{markComplete:function(e){t(function(t){return{type:s,payload:t}}(e))}}}))((function(t){var e=t.todos,n=t.markComplete;return Object(j.jsx)(i.g,{className:"mt-5 mb-2 items",children:e.map((function(t){return Object(j.jsxs)(i.h,{children:[t.title,Object(j.jsx)("span",{onClick:function(){return n(t.id)},className:"float-end",children:Object(j.jsx)(u.a,{})})]},t.id)}))})})),f=n(17),O=n(42),p=Object(l.b)((function(t){return{}}),(function(t){return{addTodo:function(e){t(function(t){return{type:d,payload:t}}(e))}}}))((function(t){var e=t.addTodo,n=Object(c.useState)(""),o=Object(f.a)(n,2),r=o[0],a=o[1],u=function(t){if(t.preventDefault(),""===r)return alert("Please add a todo");var n={title:r,id:Object(O.a)()};e(n),a("")};return Object(j.jsx)(i.c,{onSubmit:u,children:Object(j.jsx)(i.d,{children:Object(j.jsxs)(i.f,{children:[Object(j.jsx)(i.e,{type:"text",name:"todo",id:"todo",placeholder:"Your next Todo",value:r,onChange:function(t){return a(t.target.value)}}),Object(j.jsx)(i.a,{color:"info",onClick:u,children:"ADD"})]})})})})),h=n.p+"static/media/logo.6ce24c58.svg",x=n(12),g=n(18),m=[],v=Object(x.a)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return[].concat(Object(g.a)(t),[e.payload]);case s:return t.filter((function(t){return t.id!==e.payload}));default:return t}}}),y=Object(x.b)(v);var C=function(){return Object(j.jsx)(l.a,{store:y,children:Object(j.jsxs)(i.b,{fluid:!0,children:[Object(j.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(j.jsx)("h1",{children:"Todo with local storage"}),Object(j.jsx)(p,{}),Object(j.jsx)(b,{})]})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.da0e5f81.chunk.js.map