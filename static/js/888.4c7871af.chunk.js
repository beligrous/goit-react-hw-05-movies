"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{6888:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r,a=n(5861),c=n(9439),u=n(4687),s=n.n(u),i=n(4317),o=n(2791),p=n(7689),f=n(168),h=n(7402).Z.ul(r||(r=(0,f.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(5, 1fr);\ngap 20px;\n"]))),l=n(184);var d=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,o.useState)(!1),f=(0,c.Z)(u,2),d=f[0],v=f[1],g=(0,o.useState)(null),m=(0,c.Z)(g,2),x=m[0],w=m[1],b=(0,p.UO)().id;(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,(0,i.IQ)(e);case 4:n=t.sent,r(n.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),w(t.t0.message);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();t(b)}),[b]);var y=n.map((function(t){var e=t.cast_id,n=t.profile_path,r=t.name,a=t.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n),alt:"Actor name",width:100}),(0,l.jsx)("p",{children:r}),(0,l.jsxs)("p",{children:["Character: ",a]})]},e)}));return(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)("p",{children:"please wait, loading..."}),(0,l.jsx)(h,{children:y}),x&&(0,l.jsx)("p",{children:x})]})}},4317:function(t,e,n){n.d(e,{IQ:function(){return m},Jh:function(){return v},Zh:function(){return i},n4:function(){return l},ts:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1912),s=u.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c23d7755b502540a74ef819e02a6a593",language:"en-US"}});function i(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,s.get("/trending/movie/week",{page:e});case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h="c23d7755b502540a74ef819e02a6a593";function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(h,"&query=").concat(e,"&language=en-US&page=").concat(1)).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=888.4c7871af.chunk.js.map