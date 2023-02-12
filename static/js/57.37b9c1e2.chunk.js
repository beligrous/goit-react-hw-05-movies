"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[57],{5077:function(e,t,n){var r=n(7689),a=n(1087),u=n(184);t.Z=function(e){var t=e.items,n=e.loading,c=e.error,s=(0,r.TH)(),i=t.map((function(e){var t=e.id,n=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:s},to:"/movies/".concat(t),children:n})},t)}));return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)("p",{children:"please wait, loading..."}),(0,u.jsx)("ul",{children:i}),c&&(0,u.jsx)("p",{children:c})]})}},2057:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(1087),o=n(4317),p=n(5077),f=n(184);function h(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,s.useState)(""),l=(0,a.Z)(h,2),v=l[0],d=l[1],m=(0,s.useState)(!1),g=(0,a.Z)(m,2),x=g[0],w=g[1],b=(0,s.useState)(null),Z=(0,a.Z)(b,2),y=Z[0],k=Z[1],j=(0,i.lr)({search:""}),_=(0,a.Z)(j,2),S=_[0],U=_[1],C=S.get("search");(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,o.n4)(C);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),k(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();C&&e()}),[C]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),U({search:v})},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",required:!0,value:v,onChange:function(e){return d(e.target.value)}})}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)(p.Z,{items:n,loading:x,error:y})]})}t.default=h,h.preventDefaultProps={items:[]}},4317:function(e,t,n){n.d(t,{IQ:function(){return g},Jh:function(){return d},Zh:function(){return i},n4:function(){return l},ts:function(){return p}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1912),s=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c23d7755b502540a74ef819e02a6a593",language:"en-US"}});function i(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,s.get("/trending/movie/week",{page:t});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h="c23d7755b502540a74ef819e02a6a593";function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(h,"&query=").concat(t,"&language=en-US&page=").concat(1)).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=57.37b9c1e2.chunk.js.map