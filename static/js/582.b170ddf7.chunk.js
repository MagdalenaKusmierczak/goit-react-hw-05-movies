"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[582],{9:function(n,t,r){r.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return o},tx:function(){return v}});var e=r(861),u=r(757),a=r.n(u),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"3747076c06d2013e08cb76571efc36db",language:"en-US"}},i=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",s);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},582:function(n,t,r){r.r(t),r.d(t,{default:function(){return _}});var e,u,a,c,s,i=r(861),o=r(439),f=r(757),p=r.n(f),v=r(791),d=r(9),h=r(168),l=r(924),Z=r(87),m=l.ZP.ul(e||(e=(0,h.Z)([""]))),x=l.ZP.li(u||(u=(0,h.Z)([""]))),w=(0,l.ZP)(Z.rU)(a||(a=(0,h.Z)([""]))),g=r(184),b=function(n){var t=n.movies;return(0,g.jsx)(m,{children:t.map((function(n){return(0,g.jsx)(x,{children:(0,g.jsx)(w,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})},k=l.ZP.main(c||(c=(0,h.Z)(["\n\n"]))),y=l.ZP.h2(s||(s=(0,h.Z)(["\n"]))),_=function(){var n=(0,v.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Df)();case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,g.jsxs)(k,{children:[(0,g.jsx)(y,{children:"Trending today"}),(0,g.jsx)(b,{movies:r})]})}}}]);
//# sourceMappingURL=582.b170ddf7.chunk.js.map