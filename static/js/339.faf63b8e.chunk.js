"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[339],{9:function(t,n,e){e.d(n,{Df:function(){return o},M1:function(){return p},TP:function(){return f},V0:function(){return i},tx:function(){return v}});var r=e(861),u=e(757),a=e.n(u),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"3747076c06d2013e08cb76571efc36db",language:"en-US"}},o=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),s);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},339:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var r,u,a,c,s,o,i,f,p=e(861),v=e(439),h=e(757),l=e.n(h),d=e(791),Z=e(87),m=e(9),x=e(168),g=e(924),w=g.ZP.form(r||(r=(0,x.Z)([""]))),b=g.ZP.input(u||(u=(0,x.Z)([""]))),y=g.ZP.button(a||(a=(0,x.Z)([""]))),k=e(184),j=function(t){var n=t.search,e=t.onChange;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{onSubmit:function(t){t.preventDefault()},children:(0,k.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:function(t){return e(t.target.value)}})}),(0,k.jsx)(y,{type:"submit",children:"Search"})]})},P=e(689),_=g.ZP.ul(c||(c=(0,x.Z)([""]))),C=g.ZP.li(s||(s=(0,x.Z)([""]))),S=(0,g.ZP)(Z.rU)(o||(o=(0,x.Z)([""]))),q=function(t){var n=t.movies,e=(0,P.TH)();return(0,k.jsx)(_,{children:n.map((function(t){return(0,k.jsx)(C,{children:(0,k.jsx)(S,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})},U=g.ZP.main(i||(i=(0,x.Z)([""]))),D=g.ZP.h2(f||(f=(0,x.Z)([""]))),F=function(){var t=(0,d.useState)([]),n=(0,v.Z)(t,2),e=n[0],r=n[1],u=(0,Z.lr)(),a=(0,v.Z)(u,2),c=a[0],s=a[1],o=c.get("query")||"";return(0,d.useEffect)((function(){var t=function(){var t=(0,p.Z)(l().mark((function t(){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.V0)(o);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[o]),(0,k.jsxs)(U,{children:[(0,k.jsx)(j,{value:o,onChange:function(t){s(""!==t&&{query:t})}}),0===e.length&&o?(0,k.jsx)(D,{children:"Nothing was found, check your typing"}):(0,k.jsx)(q,{movies:e})]})}}}]);
//# sourceMappingURL=339.faf63b8e.chunk.js.map