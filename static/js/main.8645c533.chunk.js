(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(2),a=n(1),i=(n(12),n(13),n(14),n(0)),l=function(t){var e=t.posts,n=t.selectedPost,c=t.selectPost;return Object(i.jsxs)("div",{className:"PostsList",children:[Object(i.jsx)("h2",{children:"Posts:"}),Object(i.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(i.jsxs)("li",{className:"PostsList__item",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"[User #".concat(t.userId,"] ")}),t.title]}),n!==t.id?Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(t.id)},children:"Open"}):Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(0)},children:"Close"})]},t.id)}))})]})},r=n(7),u=function(t,e){return fetch("".concat("https://mate.academy/students-api").concat(t),e).then((function(t){return t.json()}))},j=(n(16),function(t){var e=t.addComment,n=t.selectedPost,c=Object(a.useState)(""),s=Object(o.a)(c,2),l=s[0],r=s[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),d=j[0],m=j[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),f=O[0],h=O[1];return Object(i.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),e({id:Math.random(),name:f,email:d,body:l,postId:n,createdAt:new Date}),r(""),m(""),h("")},children:[Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"text",name:"name",placeholder:"Your name",value:f,onChange:function(t){return h(t.target.value)},className:"NewCommentForm__input"})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Your email",value:d,onChange:function(t){return m(t.target.value)},className:"NewCommentForm__input"})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("textarea",{name:"body",placeholder:"Type comment here",value:l,onChange:function(t){return r(t.target.value)},className:"NewCommentForm__input"})}),Object(i.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),d=(n(17),function(t){var e=t.selectedPost,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],l=c[1],d=Object(a.useState)([]),m=Object(o.a)(d,2),b=m[0],O=m[1],f=Object(a.useState)(!0),h=Object(o.a)(f,2),p=h[0],x=h[1];Object(a.useEffect)((function(){var t;(t=e,u("/posts/".concat(t))).then((function(t){l(t)}))}),[]),Object(a.useEffect)((function(){var t;(t=e,u("/comments?postId=".concat(t))).then((function(t){return O(t)}))}),[]);var _=function(t){O(b.filter((function(e){return e.id!==t}))),function(t){u("/comments/".concat(t),{method:"DELETE"})}(t)};return Object(i.jsxs)("div",{className:"PostDetails",children:[Object(i.jsx)("h2",{children:"Post details:"}),Object(i.jsx)("section",{className:"PostDetails__post",children:Object(i.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),b.length>0&&Object(i.jsxs)("section",{className:"PostDetails__comments",children:[Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){x((function(t){return!t}))},children:p?"Hide ".concat(b.length," comments"):"Show ".concat(b.length," comments")}),p&&Object(i.jsx)("ul",{className:"PostDetails__list",children:b.map((function(t){return Object(i.jsxs)("li",{className:"PostDetails__list-item",children:[Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return _(t.id)},children:"X"}),Object(i.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(i.jsx)(j,{addComment:function(t){var e;O((function(e){return[].concat(Object(r.a)(e),[t])})),e=t,u("/comments",{method:"POST",body:JSON.stringify(e)})},selectedPost:e})})})]})}),m=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),j=r[0],m=r[1],b=Object(a.useState)(0),O=Object(o.a)(b,2),f=O[0],h=O[1],p=function(t){(function(t){return u(t?"/posts?userId=".concat(t):"/posts")})(t).then((function(t){c(t)}))};Object(a.useEffect)((function(){p()}),[]),Object(a.useEffect)((function(){u("/users").then((function(t){m(t.slice(0,10))}))}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App__header",children:Object(i.jsxs)("label",{children:["Select a user: \xa0",Object(i.jsxs)("select",{className:"App__user-selector",onChange:function(t){p(Number(t.target.value))},children:[Object(i.jsx)("option",{defaultValue:"0",children:"All users"}),j.map((function(t){return Object(i.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),Object(i.jsxs)("main",{className:"App__main",children:[Object(i.jsx)("div",{className:"App__sidebar",children:Object(i.jsx)(l,{posts:n,selectedPost:f,selectPost:h})}),Object(i.jsx)("div",{className:"App__content",children:!!f&&Object(i.jsx)(d,{selectedPost:f})})]})]})};s.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8645c533.chunk.js.map