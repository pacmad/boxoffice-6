(this.webpackJsonpboxoffice=this.webpackJsonpboxoffice||[]).push([[0],{57:function(e,n,t){e.exports=t(93)},62:function(e,n,t){},90:function(e,n,t){},92:function(e,n,t){},93:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(22),c=t.n(a),i=(t(62),t(4)),l=t(17),u=t(6),s=t(5);function d(){var e=Object(i.a)(["\n\n"]);return d=function(){return e},e}function p(){var e=Object(i.a)(["\n  border-top: 1px solid #d9d9d9;\n  :last-child {\n    border-bottom: 1px solid #d9d9d9;\n  }\n  padding: 20px 0 20px 20px;\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(["\n  list-style: none;\n"]);return m=function(){return e},e}function f(){var e=Object(i.a)(["\n  width: 80px;\n"]);return f=function(){return e},e}function g(){var e=Object(i.a)(["\n  flex: 1;\n"]);return g=function(){return e},e}function v(){var e=Object(i.a)(["\n  display: flex;\n  height: 80px;\n"]);return v=function(){return e},e}function b(){var e=Object(i.a)(["\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  width: 850px;\n"]);return b=function(){return e},e}function h(){var e=Object(i.a)(["\n  /* grid-column: 1/3; */\n  grid-area: plotContent;\n"]);return h=function(){return e},e}function E(){var e=Object(i.a)(["\n  /* grid-column: 1/3; */\n  grid-area: plot;\n"]);return E=function(){return e},e}function O(){var e=Object(i.a)(["\n  display: table;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  list-style: none;\n  border-top: 1px solid #d9d9d9;\n  border-bottom: 1px solid #d9d9d9;\n  padding-left: 0;\n  grid-area: ul;\n"]);return O=function(){return e},e}function w(){var e=Object(i.a)(["\n  grid-area: title;\n"]);return w=function(){return e},e}function x(){var e=Object(i.a)(["\n  grid-area: img;\n  /* grid-row: 1/3; */\n"]);return x=function(){return e},e}function y(){var e=Object(i.a)(['\n  box-sizing: border-box;\n  width: 1000px;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  grid-template-columns: 230px 1fr;\n  grid-template-rows: repeat(4, fit-content(100%));\n  grid-template-areas:\n    "img title"\n    "img ul"\n    "plot plot"\n    "plotContent plotContent";\n']);return y=function(){return e},e}function j(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return j=function(){return e},e}var k=s.b.div(j()),C=s.b.div(y()),S=s.b.img(x()),I=s.b.h2(w()),N=s.b.ul(O()),D=s.b.h3(E()),L=s.b.p(h()),_=s.b.div(b()),T=s.b.div(v()),M=s.b.textarea(g()),R=s.b.button(f()),G=s.b.ul(m()),P=s.b.li(p()),Y=s.b.button(d()),A=function(e){var n=e.movie,t=e.isLogin,r=e.comment,a=e.onChange,c=e.onClick,i=e.onDelete;return console.log("components/Movie"),o.a.createElement(k,null,o.a.createElement(C,null,o.a.createElement(S,{src:n.poster,alt:n.title}),o.a.createElement(I,null,n.title),o.a.createElement(N,null,o.a.createElement("li",null,"\uac1c\ubd09\uc77c : ",n.openDt),o.a.createElement("li",null,"\uc7a5\ub974 : ",n.genre," / ",n.runtime,"\ubd84"),o.a.createElement("li",null,"\ub4f1\uae09 : ",n.grade),o.a.createElement("li",null,"\uac10\ub3c5 : ",n.director),o.a.createElement("li",null,"\ubc30\uc6b0 : ",n.actors[0],", ",n.actors[1])),o.a.createElement(D,null,"\uc904\uac70\ub9ac"),o.a.createElement(L,null,n.plot)),o.a.createElement(_,null,o.a.createElement(T,null,o.a.createElement(M,{onChange:a,placeholder:t?"\uc601\ud654 \ub9ac\ubdf0\ub97c \uc791\uc131\ud574 \uc8fc\uc138\uc694.":"\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",readOnly:!t}),o.a.createElement(R,{onClick:c},"\uc785\ub825")),o.a.createElement(G,null,r.map((function(e,n){return o.a.createElement(P,{key:n},o.a.createElement("p",null," ",e.text),o.a.createElement(Y,{onClick:i},"\uc0ad\uc81c"))})))))},B=t(47),K=t(3),F=t.n(K),V=t(12),U=t(29),z=t.n(U),H=t(21),W=t.n(H),q=t(30),J=t.n(q);t(85),t(87);J.a.initializeApp({apiKey:"AIzaSyAmkavb2eiHUtQR2sBbL1AQTi2b0hTe_-A",authDomain:"boxoffice-app.firebaseapp.com",databaseURL:"https://boxoffice-app.firebaseio.com",projectId:"boxoffice-app",storageBucket:"boxoffice-app.appspot.com",messagingSenderId:"822311017221",appId:"1:822311017221:web:ff63afb6e105975e53356c",measurementId:"G-HYK51T2ZCN"});var Q=J.a.firestore();function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(t,!0).forEach((function(n){Object(B.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $="SET_HEADER_VISIBILITY",ee="SET_LOGIN",ne="SET_LOGIN_SUCCESS",te="SET_LOGIN_ERROR",re="SET_LOGOUT",oe="GET_MOVIES",ae="GET_MOVIES_SUCCESS",ce="GET_MOVIES_ERROR",ie="GET_MOVIE",le="GET_MOVIE_SUCCESS",ue="GET_MOVIE_ERROR",se="GET_COMMENT_SUCCESS",de="GET_COMMENT_ERROR",pe=function(){return function(e,n,t){t.history.push("/")}},me=function(e){return function(){var n=Object(V.a)(F.a.mark((function n(t){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("modules/setHeaderVisibility"),t({type:$,visible:e});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},fe=function(e,n){return function(){var t=Object(V.a)(F.a.mark((function t(r){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("modules/setLogin");try{Q.collection("users").where("id","==",n).get().then((function(t){t.empty&&Q.collection("users").doc().set({provider:e,id:n},{merge:!0})})),r({type:ne,id:n,provider:e})}catch(o){r({type:te})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(){return function(){var e=Object(V.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("modules/setLogout"),n({type:re});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ve=function(){var e=Object(V.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("///////////setMovies///////////////"),e.abrupt("return",new Promise(function(){var e=Object(V.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp",{params:{ServiceKey:"JIB0YUBGVC07GLD5WFBD",collection:"kmdb_new",title:n.movieNm,releaseDts:n.openDt.replace(/-/gi,"")}}).then((function(e){var r=e.data.Data[0];if(!r.hasOwnProperty("Result"))return n;var o=r.Result[0];console.log(o),o.posters.includes("|")&&(o.posters=o.posters.substring(0,o.posters.indexOf("|"))),Q.collection("movies").doc(n.movieCd).set({id:n.movieCd,title:n.movieNm,poster:o.posters,openDt:W()(n.openDt).format("YYYY\ub144 M\uc6d4 D\uc77c"),grade:o.rating[0].ratingGrade,genre:o.genre,runtime:o.runtime,director:o.director[0].directorNm,actors:[o.actor[0].actorNm,o.actor[1].actorNm],plot:o.plot},{merge:!0}),t(n)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),be=function e(n){return new Promise((function(t){return Q.collection("movies").doc(n.movieCd).get().then(function(){var r=Object(V.a)(F.a.mark((function r(o){var a;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o.exists){r.next=5;break}return r.next=3,ve(n).then((function(n){return t(e(n))}));case 3:r.next=7;break;case 5:a=o.data(),t(a);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}))},he=function(e){return function(){var n=Object(V.a)(F.a.mark((function n(t){var r,o,a,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("modules/getMovies"),t({type:oe}),""===e&&(e=W()().format("YYYYMMDD")-1),n.next=5,z.a.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",{params:{key:"8512edd89b714bf2cf35fcb50adac48d",targetDt:e}});case 5:r=n.sent,o=r.data.boxOfficeResult.dailyBoxOfficeList,a=[],c=0;case 9:if(!(c<o.length)){n.next=15;break}return n.next=12,be(o[c]).then(function(){var e=Object(V.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.push(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 12:c++,n.next=9;break;case 15:t({type:ae,payload:a,date:e});case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Ee=function(e){return function(){var n=Object(V.a)(F.a.mark((function n(t){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("modules/getMovie"),console.log(e),t({type:ie});try{t({type:le,movieID:e})}catch(r){t({type:ue,error:r})}case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Oe=function(e){return function(){var n=Object(V.a)(F.a.mark((function n(t){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("getComment");try{Q.collection("movies").doc(e).get().then((function(e){if(void 0!==e.data().comments){var n=[];e.data().comments.forEach((function(e){n.push(e)})),t({type:se,payload:n})}}))}catch(r){t({type:de,error:r})}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},we=function(e,n){return function(){var t=Object(V.a)(F.a.mark((function t(r){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("addComment");try{Q.collection("movies").doc(n).set({comments:e},{merge:!0}),r(Oe(n))}catch(o){r({type:de,error:o})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},xe={visible:!0,login:{status:!1,id:null,provider:null},movies:{loading:!1,data:null,error:null,date:null},movie:{loading:!1,data:null,error:null},comment:[]};var ye=function(e){var n=e.movieID,t=Object(u.c)((function(e){return e.movies.movie})),a=t.data,c=t.loading,i=t.error,l=Object(u.c)((function(e){return e.movies.login})),s=l.status,d=l.id,p=Object(u.c)((function(e){return e.movies})).comment,m=Object(u.b)();Object(r.useEffect)((function(){m(Ee(n)),m(Oe(n))}),[m,n]);var f=null,g=[];return c&&!a?o.a.createElement("div",null,"\ub85c\ub529\uc911..."):i?o.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):a?o.a.createElement(A,{movie:a,isLogin:s,writer:d,comment:p,onChange:function(e){console.log("handleChange"),f=e.target.value},onClick:function(e){console.log("handleClick"),s?((g=p).push({text:f,writer:d}),m(we(g,n))):alert("\ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694.")}}):o.a.createElement("div",null,"\ub370\uc774\ud130 \uc5c6\uc74c")};var je=function(e){var n=e.match;console.log("pages/MoviePage");var t=n.params.movieID;return console.log(n),o.a.createElement(ye,{movieID:t})},ke=t(13),Ce=(t(90),t(54));var Se=function(e){var n=e.onChange,t=e.onClick,r=e.movies,a=e.date;return console.log("components/MovieList"),o.a.createElement("div",{className:"contents"},o.a.createElement("div",{className:"search"},o.a.createElement("input",{className:"inputData",placeholder:"yyyymmdd",onChange:n}),o.a.createElement("button",{className:"button",onClick:t},o.a.createElement(Ce.a,null))),o.a.createElement("span",{className:"dateInfo"},W()(a.toString()).format("YYYY\ub144 M\uc6d4 D\uc77c"),"\uae30\uc900"),o.a.createElement("div",{className:"movies"},r.map((function(e,n){return o.a.createElement("div",{className:"movie",key:n},o.a.createElement("h1",{className:"rank"},n+1),o.a.createElement(ke.a,{to:"/".concat(e.id)},o.a.createElement("img",{className:"poster",src:e.poster,alt:e.title})),o.a.createElement("span",{className:"title"},e.title))}))))};var Ie=function(){console.log("MovieListContainer");var e=Object(u.c)((function(e){return e.movies.movies})),n=e.data,t=e.loading,a=e.error,c=e.date,i=Object(u.b)(),l="";return Object(r.useEffect)((function(){console.log("************************useEffect/////////"),n||i(he(l))}),[i]),t&&!n?o.a.createElement("div",null,"\ub85c\ub529\uc911..."):a?o.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):n?o.a.createElement(Se,{onChange:function(e){console.log("handleChange"),l=e.target.value},onClick:function(e){console.log("handleClick"),i(he(l))},movies:n,date:c}):o.a.createElement("div",null,"\ub370\uc774\ud130 \uc5c6\uc74c")};var Ne=function(){return console.log("pages/MovieListPage"),o.a.createElement(Ie,null)},De=t(49),Le=t.n(De),_e=t(50),Te=t.n(_e);function Me(){var e=Object(i.a)(["\n  padding: 0;\n  margin: 10px;\n  width: 230px;\n  height: 49px;\n  line-height: 49px;\n  color: #3c1e1e;\n  background-color: white;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return Me=function(){return e},e}function Re(){var e=Object(i.a)(["\n  padding: 0;\n  margin: 10px;\n  width: 230px;\n  height: 49px;\n  line-height: 49px;\n  color: #3c1e1e;\n  background-color: white;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return Re=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ge=function(){return e},e}var Pe=s.b.div(Ge()),Ye=Object(s.b)(Te.a)(Re()),Ae=s.b.button(Me());var Be=function(e){var n=e.responseGoogle,t=e.responseKakao,r=e.responseFail;return console.log("components/Login"),o.a.createElement(Pe,null,o.a.createElement(ke.a,{to:"/",className:"homeLink"},o.a.createElement("span",{className:"homeTitle"},"BOX OFFICE")),o.a.createElement(Le.a,{clientId:"822311017221-vqnjoe6mjbljr9cp1dvoeahjil2mhh9v.apps.googleusercontent.com",render:function(e){return o.a.createElement(Ae,{onClick:e.onClick,disabled:e.disabled},"\uad6c\uae00\ub85c \uc2dc\uc791")},onSuccess:n,onFailure:r}),o.a.createElement(Ye,{jsKey:"09cacdaaabf08e5b95d7d9c603f1361b",buttonText:"\uce74\uce74\uc624\ub85c \uc2dc\uc791",onSuccess:t,onFailure:r}))};var Ke=function(){console.log("containers/LoginContainer");var e=Object(u.b)();Object(r.useEffect)((function(){return e(me(!1)),function(){e(me(!0))}}),[e]);var n=function(n,t){window.sessionStorage.setItem("provider",n),e(pe()),e(fe(n,t))};return o.a.createElement(Be,{responseGoogle:function(e){console.log(e),n("google",e.googleId)},responseKakao:function(e){console.log(e),window.Kakao.API.request({url:"/v2/user/me",success:function(e){console.log(e),n("kakao",e.id)},fail:function(e){console.log(e)}})},responseFail:function(e){console.error(e)}})};var Fe=function(e){return console.log("pages/LoginPage"),console.log(e),o.a.createElement(Ke,null)};t(92);var Ve=function(e){var n=e.loginStatus,t=e.onLogin,r=e.onLogout;return console.log("components/Header"),o.a.createElement("div",{className:"header"},n?o.a.createElement("button",{className:"loginButton",onClick:r},o.a.createElement(ke.a,{to:"/",className:"loginLink"},"\ub85c\uadf8\uc544\uc6c3")):o.a.createElement("button",{className:"loginButton",onClick:t},o.a.createElement(ke.a,{to:"/login",className:"loginLink"},"\ub85c\uadf8\uc778 / \uac00\uc785")),o.a.createElement("h1",{className:"homeTitle"},o.a.createElement(ke.a,{to:"/",className:"homeLink"},"BOX OFFICE")))};var Ue=function(){console.log("/containers/HeaderContainer");var e=Object(u.c)((function(e){return e.movies})).visible,n=Object(u.c)((function(e){return e.movies.login})),t=n.status,a=n.provider,c=n.id,i=Object(u.b)();return Object(r.useEffect)((function(){if(!t){var e=window.sessionStorage.getItem("provider");if(e)if(c)i(fe(e,c));else{var n=null;if("kakao"===e)window.Kakao.hasOwnProperty("Auth")||window.Kakao.init("09cacdaaabf08e5b95d7d9c603f1361b"),window.Kakao.Auth.getStatusInfo((function(t){n=t.user.id,i(fe(e,n))}));else if(window.gapi.hasOwnProperty("auth2"))window.gapi.auth2.getAuthInstance().signOut(),console.log("\uad6c\uae00 \ub85c\uadf8\uc544\uc6c3 \uc131\uacf5"),i(ge()),window.sessionStorage.clear();else window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"822311017221-vqnjoe6mjbljr9cp1dvoeahjil2mhh9v.apps.googleusercontent.com"})}))}}}),[i,c,t]),e?o.a.createElement(Ve,{loginStatus:t,onLogout:function(){(console.log("onLogout"),"kakao"===a)?(window.Kakao.Auth.logout(),console.log("\uce74\uce74\uc624 \ub85c\uadf8\uc544\uc6c3 \uc131\uacf5"),i(ge()),window.sessionStorage.clear()):(window.gapi.auth2.getAuthInstance().signOut(),console.log("\uad6c\uae00 \ub85c\uadf8\uc544\uc6c3 \uc131\uacf5"),i(ge()),window.sessionStorage.clear())}}):null};function ze(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 30px;\n  align-items: center;\n  justify-content: center;\n"]);return ze=function(){return e},e}function He(){var e=Object(i.a)(["\n  body {\n    background-color: #eff3f7;\n   \n  }\n    "]);return He=function(){return e},e}var We=Object(s.a)(He()),qe=s.b.div(ze()),Je=function(){return console.log("App"),o.a.createElement(o.a.Fragment,null,o.a.createElement(We,null),o.a.createElement(qe,null,o.a.createElement(Ue,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",component:Ne,exact:!0}),o.a.createElement(l.a,{path:"/login",component:Fe}),o.a.createElement(l.a,{path:"/:movieID",component:je}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=t(16);console.log("modules/index");var Xe=Object(Qe.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,n=arguments.length>1?arguments[1]:void 0;switch(console.log("modules/movies"),n.type){case $:return Z({},e,{visible:n.visible});case ee:return Z({},e,{login:{status:!1,id:null,type:null}});case ne:return Z({},e,{login:{status:!0,id:n.id,provider:n.provider}});case te:case re:return Z({},e,{login:{status:!1,id:null}});case oe:return Z({},e,{visible:!0,movies:{loading:!0,data:null,error:null,date:n.date}});case ae:return Z({},e,{visible:!0,movies:{loading:!1,data:n.payload,error:null,date:n.date}});case ce:return Z({},e,{visible:!0,movies:{loading:!1,data:null,error:n.error,date:n.date}});case ie:return Z({},e,{movie:{loading:!0,data:null,error:null}});case le:return Z({},e,{movie:{loading:!1,data:e.movies.data.find((function(e){return e.id===n.movieID})),error:null},comment:[]});case ue:return Z({},e,{movie:{loading:!1,data:null,error:n.error}});case se:return Z({},e,{comment:n.payload});case de:return Z({},e,{comment:[]});default:return e}}}),Ze=t(51),$e=t.n(Ze),en=t(52),nn=t(53),tn=t(8),rn=Object(tn.a)({basename:"/boxoffice"}),on=Object(Qe.createStore)(Xe,Object(en.composeWithDevTools)(Object(Qe.applyMiddleware)(nn.a.withExtraArgument({history:rn}),$e.a)));console.log("index2"),c.a.render(o.a.createElement(l.b,{history:rn},o.a.createElement(u.a,{store:on},o.a.createElement(Je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.27561614.chunk.js.map