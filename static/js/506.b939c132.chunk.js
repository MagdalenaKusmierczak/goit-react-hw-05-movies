"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[506],{9:function(r,t,n){n.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return o},tx:function(){return v}});var e=n(861),u=n(757),a=n.n(u),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"3747076c06d2013e08cb76571efc36db",language:"en-US"}},i=function(){var r=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(t),s);case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t),s);case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits?"),s);case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},322:function(r,t,n){n.r(t),n.d(t,{default:function(){return _}});var e,u,a,c,s,i=n(861),o=n(439),f=n(757),p=n.n(f),v=n(791),h=n(689),d=n(9),l=n(168),Z=n(924),x=Z.ZP.div(e||(e=(0,l.Z)([""]))),w=Z.ZP.ul(u||(u=(0,l.Z)([""]))),m=Z.ZP.li(a||(a=(0,l.Z)([""]))),g=Z.ZP.h3(c||(c=(0,l.Z)([""]))),b=Z.ZP.p(s||(s=(0,l.Z)([""]))),k=n(184),y=function(r){var t=r.reviews;return(0,k.jsx)(w,{children:t.map((function(r){return(0,k.jsxs)(m,{children:[(0,k.jsxs)(g,{children:["Author: ",r.author]}),(0,k.jsx)(b,{children:r.content})]},r.id)}))})},_=function(){var r=(0,h.UO)().movieId,t=(0,v.useState)([]),n=(0,o.Z)(t,2),e=n[0],u=n[1];return(0,v.useEffect)((function(){var t=function(){var t=(0,i.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.tx)(r);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,k.jsxs)(k.Fragment,{children:[0!==e.length&&(0,k.jsx)(y,{reviews:e}),0===e.length&&(0,k.jsx)(x,{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=506.b939c132.chunk.js.map