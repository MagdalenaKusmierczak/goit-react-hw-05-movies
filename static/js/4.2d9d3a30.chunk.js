"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[4],{9:function(t,n,r){r.d(n,{Df:function(){return i},M1:function(){return f},TP:function(){return p},V0:function(){return o},tx:function(){return d}});var e=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"3747076c06d2013e08cb76571efc36db",language:"en-US"}},i=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},327:function(t,n,r){r.r(n),r.d(n,{default:function(){return M}});var e,a,c,u,s,i,o,p=r(861),f=r(439),d=r(757),h=r.n(d),l=r(791),v=r(689),x=r(9),m=r(168),Z=r(924),g=Z.ZP.ul(e||(e=(0,m.Z)(["\n  padding-left: 0px;\n  margin-left: 20px;\n"]))),b=Z.ZP.li(a||(a=(0,m.Z)(["\n  width: 200px;\n  list-style: none;\n  border-bottom: 0.5px solid black;\n  padding-block: 10px;\n"]))),w=Z.ZP.h3(c||(c=(0,m.Z)([""]))),_=Z.ZP.img(u||(u=(0,m.Z)(["\n  height: 150px;\n"]))),k=Z.ZP.p(s||(s=(0,m.Z)([""]))),y=Z.ZP.div(i||(i=(0,m.Z)([""]))),j=r.p+"static/media/small.0ef6c0a830eb51f5f55d.jpg",P=r(184),C=function(t){var n=t.cast;return(0,P.jsx)(g,{children:n.map((function(t){return(0,P.jsx)(b,{children:(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{src:t.profile_path?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(t.profile_path):"".concat(j),alt:t.original_name}),(0,P.jsx)(w,{children:t.name}),(0,P.jsxs)(k,{children:["Character: ",t.character]})]})},t.id)}))})},U=Z.ZP.div(o||(o=(0,m.Z)([""]))),M=function(){var t=(0,v.UO)().movieId,n=(0,l.useState)([]),r=(0,f.Z)(n,2),e=r[0],a=r[1];return(0,l.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.M1)(t);case 3:r=n.sent,a(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,P.jsxs)(P.Fragment,{children:[0!==e.length&&(0,P.jsx)(C,{cast:e}),0===e.length&&(0,P.jsx)(U,{children:"We don't have any cast for this movie."})]})}}}]);
//# sourceMappingURL=4.2d9d3a30.chunk.js.map