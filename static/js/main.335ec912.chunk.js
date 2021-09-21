(this["webpackJsonptinder-for-movies"]=this["webpackJsonptinder-for-movies"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var r,a=t(1),c=t.n(a),o=t(21),i=t.n(o),E=t(15);!function(e){e.FETCH_RECOMMENDATION_REQUEST="FETCH_RECOMMENDATION_REQUEST",e.FETCH_RECOMMENDATION_SUCCESS="FETCH_RECOMMENDATION_SUCCESS",e.FETCH_RECOMMENDATION_FAILUER="FETCH_RECOMMENDATION_FAILUER",e.PUT_RECOMMENDATION_ACCEPT_REQUEST="PUT_RECOMMENDATION_ACCEPT_REQUEST",e.PUT_RECOMMENDATION_ACCEPT_SUCCESS="PUT_RECOMMENDATION_ACCEPT_SUCCESS",e.PUT_RECOMMENDATION_ACCEPT_FAILUER="PUT_RECOMMENDATION_ACCEPT_FAILUER",e.PUT_RECOMMENDATION_REJECT_REQUEST="PUT_RECOMMENDATION_REJECT_REQUEST",e.PUT_RECOMMENDATION_REJECT_SUCCESS="PUT_RECOMMENDATION_REJECT_SUCCESS",e.PUT_RECOMMENDATION_REJECT_FAILUER="PUT_RECOMMENDATION_REJECT_FAILUER"}(r||(r={}));var s,u,O,d,T,C,_,p,b,j,m=function(e){return{type:r.PUT_RECOMMENDATION_REJECT_REQUEST,id:e}},l=function(e){return{type:r.FETCH_RECOMMENDATION_FAILUER,payload:e}},M=t(10),R=t(11),N=Object(R.a)(s||(s=Object(M.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),f=t(7),A=t(47),g=t(4),U=R.b.h1(u||(u=Object(M.a)(["\n  text-align: center;\n  width: 100%;\n"]))),x=R.b.div(O||(O=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n"]))),h=R.b.button(d||(d=Object(M.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid green;\n  color: green;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]))),S=R.b.button(T||(T=Object(M.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid red;\n  color: red;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]))),I=R.b.div(C||(C=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-left: 10%;\n  padding-right: 10%;\n  background-color: smokegrey;\n"]))),v=R.b.div(_||(_=Object(M.a)(["\n  width: 600px;\n  height: 600px;\n  height: auto;\n  float: left;\n  margin: 3px;\n  padding: 3px;\n"]))),D=R.b.img(p||(p=Object(M.a)(["\n  max-width: 100%;\n  height: auto;\n"]))),P=function(e){var n=e.recommendation,t=e.onAcceptButtonClick,r=e.onRejectButtonClick,a=n.id,c=n.title,o=n.rating,i=n.imageURL;return Object(g.jsxs)(I,{children:[Object(g.jsx)(U,{children:"".concat(c," (").concat(o,"/10)")}),Object(g.jsx)(v,{children:Object(g.jsx)(D,{src:i,alt:"movie poster"})}),Object(g.jsxs)(x,{children:[Object(g.jsx)(h,{onClick:function(){return t(a)},children:" accept "}),Object(g.jsx)(S,{onClick:function(){return r(a)},children:" reject "})]})]})},y=t(42),F=t.n(y),w=function(e){var n=e.recommendations,t=Object(a.useState)(0),c=Object(A.a)(t,2),o=c[0],i=c[1],s=Object(a.useRef)(null),u=Object(E.b)(),O=function(){null!==s.current&&s.current.slickNext()},d=function(e){u(function(e){return{type:r.PUT_RECOMMENDATION_ACCEPT_REQUEST,id:e}}(e)),O()},T=function(e){u(m(e)),O()},C={dots:!1,arrows:!1,autoplay:!1,infinite:!1,onSwipe:function(e){"left"===e&&u(m(n[o].id))},afterChange:function(e){return i(e)}};return Object(g.jsx)(F.a,Object(f.a)(Object(f.a)({ref:s},C),{},{children:n.map((function(e){return Object(g.jsx)(P,{recommendation:e,onAcceptButtonClick:d,onRejectButtonClick:T},e.id)}))}))},k=t(43),L=t.n(k),J=R.b.div(b||(b=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  width: 100vw;\n  height: 100vh;\n"]))),B=function(){return Object(g.jsxs)(J,{children:[Object(g.jsx)(L.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(g.jsx)("p",{children:"Loading recommendations..."})]})},Q=R.b.div(j||(j=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  width: 100vw;\n  height: 100vh;\n"]))),z=function(e){var n=e.errorMessage;return Object(g.jsx)(Q,{children:Object(g.jsxs)("p",{children:["Failed to load recommendations. Error message: ",n]})})},H=function(){var e=Object(E.b)(),n=Object(E.c)((function(e){return e.recommendations})),t=n.pending,c=n.recommendations,o=n.error;return Object(a.useEffect)((function(){e({type:r.FETCH_RECOMMENDATION_REQUEST})}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{}),t?Object(g.jsx)(B,{}):o?Object(g.jsx)(z,{errorMessage:o}):Object(g.jsx)(w,{recommendations:c})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))},X=t(14),Z=t(48),Y=t(44),G=t.n(Y),W={pending:!0,recommendations:[],error:null,putError:null},q=Object(X.b)({recommendations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.FETCH_RECOMMENDATION_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{pending:!0});case r.FETCH_RECOMMENDATION_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{pending:!1,recommendations:n.payload.recommendations,error:null});case r.FETCH_RECOMMENDATION_FAILUER:return Object(f.a)(Object(f.a)({},e),{},{pending:!1,recommendations:[],error:n.payload.error});case r.PUT_RECOMMENDATION_ACCEPT_REQUEST:case r.PUT_RECOMMENDATION_ACCEPT_SUCCESS:return Object(f.a)({},e);case r.PUT_RECOMMENDATION_ACCEPT_FAILUER:return Object(f.a)(Object(f.a)({},e),{},{putError:n.payload.error});case r.PUT_RECOMMENDATION_REJECT_REQUEST:case r.PUT_RECOMMENDATION_REJECT_SUCCESS:return Object(f.a)({},e);case r.PUT_RECOMMENDATION_REJECT_FAILUER:return Object(f.a)(Object(f.a)({},e),{},{putError:n.payload.error});default:return Object(f.a)({},e)}}}),K=t(6),$=t.n(K),ee=t(8),ne=t(23),te=t(45),re=t.n(te),ae=t(18),ce=t.n(ae),oe=t(46),ie=new re.a(ce.a);ie.onGet("/recommendations").reply(200,oe.a),ie.onPut(/\/recommendations\/[A-Za-z0-9]*\/accept/).reply(200),ie.onPut(/\/recommendations\/[A-Za-z0-9]*\/reject/).reply(200);var Ee=function(){var e=Object(ne.a)($.a.mark((function e(){var n,t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.a.get("/recommendations");case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(ne.a)($.a.mark((function e(n){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.a.put("/recommendations/".concat(n,"/accept"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(ne.a)($.a.mark((function e(n){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.a.put("/recommendations/".concat(n,"/reject"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Oe=$.a.mark(_e),de=$.a.mark(pe),Te=$.a.mark(be),Ce=$.a.mark(je);function _e(){var e;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ee.b)(Ee);case 3:return e=n.sent,n.next=6,Object(ee.d)((t={recommendations:e},{type:r.FETCH_RECOMMENDATION_SUCCESS,payload:t}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(ee.d)(l({error:n.t0.message}));case 12:case"end":return n.stop()}var t}),Oe,null,[[0,8]])}function pe(e){return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ee.b)(se,e.id);case 3:return n.next=5,Object(ee.d)({type:r.PUT_RECOMMENDATION_ACCEPT_SUCCESS});case 5:n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,Object(ee.d)((t={error:n.t0.message},{type:r.PUT_RECOMMENDATION_ACCEPT_FAILUER,payload:t}));case 11:case"end":return n.stop()}var t}),de,null,[[0,7]])}function be(e){return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ee.b)(ue,e.id);case 3:return n.next=5,Object(ee.d)({type:r.PUT_RECOMMENDATION_REJECT_SUCCESS});case 5:n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,Object(ee.d)((t={error:n.t0.message},{type:r.PUT_RECOMMENDATION_REJECT_FAILUER,payload:t}));case 11:case"end":return n.stop()}var t}),Te,null,[[0,7]])}function je(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.f)(r.FETCH_RECOMMENDATION_REQUEST,_e),Object(ee.e)(r.PUT_RECOMMENDATION_ACCEPT_REQUEST,pe),Object(ee.e)(r.PUT_RECOMMENDATION_REJECT_REQUEST,be)]);case 2:case"end":return e.stop()}}),Ce)}var me=je,le=$.a.mark(Me);function Me(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.c)(me)]);case 2:case"end":return e.stop()}}),le)}var Re=Object(Z.a)(),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,fe=Object(X.d)(q,Ne(Object(X.a)(Re,G.a)));Re.run(Me);var Ae=fe;i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(E.a,{store:Ae,children:Object(g.jsx)(H,{})})}),document.getElementById("root")),V()},46:function(e){e.exports=JSON.parse('{"a":[{"id":"1and3011","imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg","title":"Inferno","summary":"Lorem ipsum\u2026.","rating":5.3},{"id":"2301abc","imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg","title":"Star Wars: Episode VII - The Force Awakens","summary":"Lorem ipsum\u2026.","rating":8.2}]}')}},[[113,1,2]]]);
//# sourceMappingURL=main.335ec912.chunk.js.map