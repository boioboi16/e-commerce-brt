(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{141:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),n=c(18),a=c.n(n),r=(c(75),c(25)),j=c(26),l=c(8),o=c(63),b=c.n(o),d=c(3),x=i.a.createContext(),O=function(e){var t=e.children,c=Object(s.useState)([]),i=Object(l.a)(c,2),n=i[0],a=i[1],r=Object(s.useState)([]),j=Object(l.a)(r,2),o=j[0],O=(j[1],Object(s.useState)(0)),m=Object(l.a)(O,2),h=m[0],u=m[1],f=Object(s.useState)([]),p=Object(l.a)(f,2),g=p[0],v=p[1],w=Object(s.useState)([]),N=Object(l.a)(w,2),C=N[0],k=N[1],M=Object(s.useState)([]),H=Object(l.a)(M,2),T=H[0],y=H[1];return Object(s.useEffect)((function(){b.a.get("https://fakestoreapi.com/products").then((function(e){console.log(e),a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)(x.Provider,{value:{products:n,carousel:o,count:h,itemTitle:g,itemPrice:C,itemRating:T,setcount:u,setitemTitle:v,setitemPrice:k,setitemRating:y},children:t})},m=c(19),h=function(){var e=Object(s.useContext)(x),t=e.count;e.setcount;return Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"brand",style:{color:"#fff"},children:"E-Commerce"}),Object(d.jsx)("span",{className:"p1","data-count":t,children:Object(d.jsx)(m.b,{to:"/cart",style:{color:"#fff"},children:Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(r.a,{icon:j.c,transform:"shrink-3","data-count":t,size:"lg"})})})})]})},u=(c(104),c(16)),f=(c(143),c(140),function(){Object(s.useContext)(x).carousel;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{style:{display:"block",width:"100%",padding:30},children:Object(d.jsxs)(u.a,{children:[Object(d.jsxs)(u.a.Item,{interval:2500,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",alt:"Image One"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"60% OFF on T-shirts"}),Object(d.jsx)("p",{children:"ZARA"})]})]}),Object(d.jsxs)(u.a.Item,{interval:2500,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1058&q=80",alt:"Image Two"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"80% OFF on sneakers"}),Object(d.jsx)("p",{children:"NIKE"})]})]}),Object(d.jsxs)(u.a.Item,{interval:2500,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",alt:"Image Three"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"Flat 50% OFF on Jackets"}),Object(d.jsx)("p",{})]})]}),Object(d.jsxs)(u.a.Item,{interval:2500,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"  https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:"Image Three"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"Buy 1 get 1 Free on Plain T's"}),Object(d.jsx)("p",{})]})]})]})})})}),p=function(e){var t=e.title,c=e.image,i=e.price,n=e.rating,a=(e.description,Object(s.useContext)(x)),r=a.count,j=a.setcount,l=a.setitemTitle,o=a.setitemPrice,b=(a.setitemRating,a.itemTitle),O=a.itemPrice;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c,alt:"product"}),Object(d.jsx)("h5",{children:t}),Object(d.jsxs)("div",{className:"price-rating",children:[Object(d.jsxs)("p",{children:["Rs.",i," "]}),Object(d.jsxs)("span",{className:"rate",children:[n.rate,"/5"]})]}),Object(d.jsx)("button",{onClick:function(){return console.log(r),b.push(t),O.push(i),console.log(O),l(b),o(O),void j(r+1)},className:"cart",children:"Add to Cart"})]})},g=function(){var e=Object(s.useContext)(x).products;return Object(d.jsx)("div",{className:"grid",children:e.map((function(e){var t=e.id,c=e.title,s=e.image,i=e.price,n=e.rating,a=e.description;return Object(d.jsx)(p,{title:c,price:i,image:s,rating:n,description:a},t)}))})},v=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(f,{}),Object(d.jsx)(g,{})]})},w=function(e){var t=e.element,c=e.price,i=Object(s.useContext)(x),n=(i.count,i.setcount,i.setitemTitle,i.setitemPrice,i.setitemRating,i.itemTitle,i.itemPrice,Object(s.useState)(1)),a=Object(l.a)(n,2),o=a[0],b=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cartItem",children:[Object(d.jsx)("div",{className:"itemName",children:Object(d.jsx)("p",{children:t})}),Object(d.jsx)("div",{className:"price",children:Object(d.jsx)("p",{children:c*o})}),Object(d.jsx)("div",{className:"quantity",children:Object(d.jsx)("p",{children:o})}),Object(d.jsxs)("div",{className:"incdec",children:[Object(d.jsx)("button",{onClick:function(){b(o+1)},className:"arrow",children:Object(d.jsx)("i",{children:Object(d.jsx)(r.a,{icon:j.b})})}),Object(d.jsx)("button",{onClick:function(){b(o-1)},className:"arrow",children:Object(d.jsx)("i",{children:Object(d.jsx)(r.a,{icon:j.a})})})]})]})})},N=function(){var e=Object(s.useContext)(x),t=(e.count,e.itemTitle),c=e.itemPrice,i=(e.itemRating,Object(s.useState)(0)),n=Object(l.a)(i,2),a=n[0];n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"cart-title",children:"Cart"}),t.map((function(e,t){return Object(d.jsx)(w,{element:e,price:c[t],item:!0})})),Object(d.jsx)("div",{className:"total",children:Object(d.jsx)("p",{children:a})})]})},C=(c(141),c(7));var k=function(){return Object(d.jsx)(O,{children:Object(d.jsx)(m.a,{children:Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{exact:!0,path:"/",children:Object(d.jsx)(v,{})}),Object(d.jsx)(C.a,{exact:!0,path:"/cart",children:Object(d.jsx)(N,{})})]})})})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},75:function(e,t,c){}},[[142,1,2]]]);
//# sourceMappingURL=main.950a43d5.chunk.js.map