(this["webpackJsonpcrypto-converter"]=this["webpackJsonpcrypto-converter"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(75),o=n.n(r),i=(n(86),n(87),n(14)),s=n(55),l=n.n(s),u=n(33),j=n.n(u),b=n(7),d=Object(c.createContext)({});function p(e){var t=e.children,n=Object(c.useState)(!1),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)("BTC"),l=Object(i.a)(s,2),u={showChartModal:r,tokenForChart:l[0],setTokenForChart:l[1],openModal:function(){o(!0)},closeModal:function(){o(!1)}};return Object(b.jsx)(d.Provider,{value:u,children:t})}var h=function(e){var t=e.name,n=e.rank,a=e.price,r=e.symbol,o=e.marketcap,i=e.volume,s=e.image,l=e.priceChange,u=(e.openChartModal,Object(c.useContext)(d)),p=u.setTokenForChart,h=u.openModal;return Object(b.jsx)("div",{className:j.a["coin-container"],onClick:function(){h();var e=r.toUpperCase();p(e)},children:Object(b.jsxs)("div",{className:j.a.coinRow,children:[Object(b.jsx)("p",{className:j.a.coinRank,children:n}),Object(b.jsx)("img",{className:j.a.img,src:s,alt:"crypto"}),Object(b.jsx)("p",{className:j.a.coinName,children:t}),Object(b.jsx)("p",{className:j.a.coinSymbol,children:r}),Object(b.jsxs)("p",{className:j.a.coinPrice,children:["$",a]}),l<0?Object(b.jsxs)("p",{className:j.a.coinPercentRed,children:[l.toFixed(2),"%"]}):Object(b.jsxs)("p",{className:j.a.coinPercentGreen,children:[l.toFixed(2),"%"]}),Object(b.jsxs)("p",{className:j.a.coinVolume,children:["$",i.toLocaleString()]}),Object(b.jsxs)("p",{className:j.a.coinMarketCap,children:["$",o.toLocaleString()]})]})})},O=n(56),x=n.n(O),f=n(47),m=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.pageYOffset>300?a(!0):a(!1)}))}),[]);return Object(b.jsx)("div",{className:x.a["scroll-button"],children:n&&Object(b.jsx)("button",{onClick:function(){window.scrollTo(0,0)},className:x.a["scroll-button"],children:Object(b.jsx)(f.a,{})})})},_=n(28),g=n.n(_),v=n(35),w=n(2),k=n.n(w),C=n(4),N=n(76),y=(n(108),n(110),n(36)),P=N.a.initializeApp({apiKey:"AIzaSyAL4ZLlCbQ1O8rAUIgWDjOYCFa_8TZ125Y",authDomain:"crypto-ab3c3.firebaseapp.com",projectId:"crypto-ab3c3",storageBucket:"crypto-ab3c3.appspot.com",messagingSenderId:"331809294614",appId:"1:331809294614:web:ff74054808bc320799a837"}),S=Object(y.e)(P),M=P.auth(),I=Object(c.createContext)({});function D(e){var t=e.children,n=Object(c.useState)(null),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(null),l=Object(i.a)(s,2),u=l[0],j=l[1],d=Object(c.useState)(!1),p=Object(i.a)(d,2),h=p[0],O=p[1];Object(c.useEffect)((function(){return M.onAuthStateChanged((function(e){o(e),console.log(e),e?(j(e.uid),O(!0),console.log(e.uid)):O(!1)}))}),[]);var x={currentUser:r,login:function(e,t){return M.signInWithEmailAndPassword(e,t)},signup:function(e,t){return M.createUserWithEmailAndPassword(e,t)},logout:function(){return M.signOut()},userUID:u,isLoggedIn:h};return Object(b.jsx)(I.Provider,{value:x,children:t})}var L=Object(c.createContext)({}),A=["btc","eth","usdt","bnb","usdc","xrp","sol","luna","ada","ust"];function F(e){var t=e.children,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(!1),u=Object(i.a)(s,2),j=u[0],d=u[1],p=Object(c.useState)(""),h=Object(i.a)(p,2),O=h[0],x=h[1],f=Object(c.useState)(null),m=Object(i.a)(f,2),_=m[0],g=m[1],w=Object(c.useState)(null),N=Object(i.a)(w,2),P=N[0],M=N[1],D=Object(c.useState)(null),F=Object(i.a)(D,2),R=F[0],E=F[1],T=Object(c.useState)(0),U=Object(i.a)(T,2),B=U[0],V=U[1],W=Object(c.useState)([]),H=Object(i.a)(W,2),G=H[0],z=H[1],Y=Object(c.useState)([]),q=Object(i.a)(Y,2),Q=q[0],X=q[1],Z=Object(c.useContext)(I).userUID;function $(){return($=Object(C.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.map((function(e){return e.symbol})),M(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("The error is:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}Object(c.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){o(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);function J(){return(J=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(y.a)(Object(y.b)(S,Z),{token:_,amount:O});case 4:n=e.sent,console.log("Document written with ID:",n.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error adding doc:",t);case 11:x("");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function K(){return(K=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)(Object(y.d)(S,Z,t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z){e.next=4;break}return t=Object(y.g)(Object(y.b)(S,Z)),n=Object(y.f)(t,(function(e){var t=[],n=[];e.forEach((function(e){t.push(Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id})),n.push(e.data().token.toUpperCase()),console.log(n)})),E(t),X(n),console.log("This is coinArry:",t),ne(t)})),e.abrupt("return",(function(){return n()}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(C.a)(k.a.mark((function e(t){var n,c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){var t=e;return r.forEach((function(n){e.token===n.symbol&&(t.current_price=n.current_price)})),t}));case 2:return n=e.sent,console.log(n),c=[],e.next=7,n.map((function(e){c.push(e.amount*e.current_price)}));case 7:e.sent,console.log(c),z(c),a=c.reduce((function(e,t){return e+t}),0),V(a.toFixed(2));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae={labels:Q,datasets:[{label:"Portfolio Breakdown",data:G,backgroundColor:["rgba(255, 236, 33, 1)","rgba(55, 138, 255, 1)","rgba(255, 163, 47, 1)","rgba(245, 79, 82, 1)","rgba(147, 240, 59, 1)","rgba(149, 82, 234, 1)","rgba(185, 230, 39, 1)","rgba(39, 160, 230, 1)","rgba(173, 39, 230, 1)","rgba(222, 49, 89, 1)"],hoverOffset:10,borderWidth:0,cutout:"65%"}]};Object(c.useEffect)((function(){ee(),function(){$.apply(this,arguments)}()}),[]);var re={coinData:r,isEditActive:j,amount:O,selected:_,totalValue:B,valueArray:G,labelArray:Q,chartData:ae,chartOptions:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"white",font:{size:20,fontColor:"white"}}}}},portfolio:R,coinOptions:P,newCoinOptions:A,getPortfolio:ee,onChangeAmount:function(e){x(e.target.value)},onChangeCoin:function(e){g(e.target.value)},addCoinHandler:function(e){return J.apply(this,arguments)},deleteCoinHandler:function(e){return K.apply(this,arguments)},editStateHandler:function(){d((function(e){return!e}))}};return Object(b.jsx)(L.Provider,{value:re,children:t})}var R=n(44),E=n(57),T=n.n(E);var U=function(){var e,t,n=Object(c.useContext)(d),a=n.tokenForChart,r=n.closeModal;return window.screen.width>820?(t=.9*window.screen.width,e=.7*window.screen.height):(t=.8*window.screen.width,e=.6*window.screen.height),Object(b.jsx)("div",{className:T.a.backdrop,onClick:function(e){return r()},children:Object(b.jsxs)("div",{className:T.a.parent,onClick:function(e){return e.stopPropagation()},children:[Object(b.jsxs)("h3",{children:[a,"/USDT - 1 min"]}),Object(b.jsx)(R.a,{interval:"30m",containerStyle:{minHeight:e,minWidth:t},chartLayout:{layout:{backgroundColor:"#161A25",textColor:"white"},grid:{vertLines:{color:"#454545"},horzLines:{color:"#454545"}},priceScale:{borderColor:"#485c7b"},timeScale:{borderColor:"#485c7b",timeVisible:!0,secondsVisible:!1}},pair:"".concat(a,"USDT")})]})})};var B=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(L).coinData,o=Object(c.useContext)(d).showChartModal,s=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(b.jsxs)("div",{className:g.a["main-div"],children:[o&&Object(b.jsx)(U,{}),Object(b.jsxs)("div",{className:g.a["coin-app"],children:[Object(b.jsxs)("div",{className:g.a["coin-search"],children:[Object(b.jsx)("h1",{className:g.a["coin-text"],children:"CoinWatch"}),Object(b.jsx)("form",{children:Object(b.jsx)("input",{className:g.a["coin-input"],type:"text",onChange:function(e){a(e.target.value)},placeholder:"Search"})})]}),Object(b.jsxs)("div",{className:g.a.labels,children:[Object(b.jsx)("p",{className:g.a["rank-label"],children:"#"}),Object(b.jsx)("p",{className:g.a["coin-label"],children:"Coin"}),Object(b.jsx)("p",{className:g.a["token-label"],children:"Token"}),Object(b.jsx)("p",{className:g.a["price-label"],children:"Price"}),Object(b.jsx)("p",{className:g.a["change-label"],children:"Change"}),Object(b.jsx)("p",{className:g.a["volume-label"],children:"Volume"}),Object(b.jsx)("p",{className:g.a["mktcap-label"],children:"Mkt Cap"})]}),r&&s.map((function(e){return Object(b.jsx)(h,{rank:e.market_cap_rank,name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]}),Object(b.jsx)(m,{})]})},V=n(34),W=n.n(V),H=n(21),G=n(59),z=n(60);var Y=function(){var e=Object(c.useContext)(I),t=e.logout,n=e.currentUser,a=Object(c.useState)(!1),r=Object(i.a)(a,2);return r[0],r[1],Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:W.a.navbar,children:[Object(b.jsx)("p",{className:W.a["nav-1"],children:"CoinWatch"}),Object(b.jsx)(H.b,{style:{textDecoration:"none",backgroundColor:"cornflowerblue"},to:"/crypto-watch",children:Object(b.jsx)("p",{children:"Market"})}),Object(b.jsx)(H.b,{style:{textDecoration:"none",backgroundColor:"cornflowerblue"},to:"/news",children:Object(b.jsx)("p",{className:W.a["nav-3"],children:"News"})}),Object(b.jsx)(H.b,{style:{textDecoration:"none",backgroundColor:"cornflowerblue"},to:"/portfolio",children:Object(b.jsx)("p",{children:"Portfolio"})}),n?Object(b.jsx)(H.b,{style:{textDecoration:"none",backgroundColor:"cornflowerblue"},onClick:t,to:"/crypto-watch",children:Object(b.jsx)("p",{children:"Logout"})}):Object(b.jsx)(H.b,{style:{textDecoration:"none",backgroundColor:"cornflowerblue"},to:"/login",children:Object(b.jsx)("p",{children:"Login"})})]}),Object(b.jsxs)("div",{className:W.a.mobileNavbar,children:[Object(b.jsx)("p",{className:W.a["nav-1"],children:"CoinWatch"}),Object(b.jsxs)("div",{className:W.a.footerMenu,children:[Object(b.jsx)(H.b,{className:W.a.footerMenuItem,to:"/crypto-watch",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(f.b,{}),Object(b.jsx)("p",{children:"Market"})]})}),Object(b.jsx)(H.b,{className:W.a.footerMenuItem,to:"/news",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(G.b,{}),Object(b.jsx)("p",{children:"News"})]})}),Object(b.jsx)(H.b,{className:W.a.footerMenuItem,to:"/portfolio",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(G.a,{}),Object(b.jsx)("p",{children:"Portfolio"})]})}),n?Object(b.jsx)(H.b,{className:W.a.footerMenuItem,onClick:t,to:"/crypto-watch",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(z.b,{}),Object(b.jsx)("p",{children:"Logout"})]})}):Object(b.jsx)(H.b,{className:W.a.footerMenuItem,to:"/login",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(z.a,{}),Object(b.jsx)("p",{children:"Login"})]})})]})]})]})},q=n(20),Q=(n(116),n(80)),X=n(24),Z=n.n(X),$=n(79);q.e.register(q.a,q.n,q.g);var J=function(){var e=Object(c.useContext)(I),t=(e.currentUser,e.userUID,e.isLoggedIn),n=Object(c.useContext)(L),a=n.coinData,r=n.isEditActive,o=n.amount,i=n.selected,s=n.totalValue,l=(n.valueArray,n.labelArray,n.chartData),u=n.chartOptions,j=n.portfolio,d=n.coinOptions,p=(n.newCoinOptions,n.onChangeAmount),h=n.onChangeCoin,O=n.addCoinHandler,x=n.deleteCoinHandler,f=n.editStateHandler,m=n.getPortfolio;Object(c.useEffect)((function(){m()}),[]);var _=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(s);return Object(b.jsx)("div",{className:Z.a.wrapper,children:Object(b.jsxs)("div",{className:t?Z.a.portfolioLoggedIn:Z.a.portfolioLoggedOut,children:[!t&&Object(b.jsxs)("div",{className:Z.a.loginText,children:[Object(b.jsx)("h2",{children:"Please log in to view your portfolio."}),Object(b.jsx)(H.b,{to:"/login",children:"Log In"})]}),t&&Object(b.jsxs)(b.Fragment,{children:[!j&&Object(b.jsx)("p",{className:Z.a.emptyPortfolio,children:"Add cryptocurrencies to start tracking your portfolio"}),Object(b.jsxs)("div",{className:Z.a.left,children:[Object(b.jsxs)("form",{className:Z.a.addForm,onSubmit:O,children:[d&&Object(b.jsx)("select",{name:"",id:"coinOptions",value:i,onChange:h,children:d.map((function(e){return Object(b.jsx)("option",{value:e,children:e.toUpperCase()},e)}))}),Object(b.jsx)("input",{type:"text",placeholder:"Amount",value:o,onChange:p}),Object(b.jsx)("button",{children:"Add"})]}),Object(b.jsx)("div",{className:Z.a.portfolioList,children:Object(b.jsxs)("div",{className:Z.a.coinList,children:[Object(b.jsxs)("div",{className:Z.a.labels,children:[Object(b.jsx)("h3",{children:"Coin"}),Object(b.jsx)("h3",{children:"Amount"}),Object(b.jsx)("h3",{children:"Value"}),Object(b.jsx)("div",{className:Z.a.buttonDiv,children:Object(b.jsx)("button",{className:Z.a.editButton,onClick:f,children:"Edit"})})]}),j&&j.map((function(e){var t;return Object(b.jsxs)("div",{className:Z.a.coinRow,children:[Object(b.jsx)("p",{children:e.token.toUpperCase()}),Object(b.jsx)("p",{children:e.amount}),Object(b.jsxs)("p",{children:["$",((null===(t=a.filter((function(t){return t.symbol===e.token}))[0])||void 0===t?void 0:t.current_price)*e.amount).toFixed(2)]}),r&&Object(b.jsx)("div",{className:Z.a.deleteButton,children:Object(b.jsx)($.a,{onClick:function(){return x(e.id)}})})]})}))]})})]}),Object(b.jsxs)("div",{className:Z.a.right,children:[Object(b.jsxs)("h1",{children:["Total Value: ",_]}),Object(b.jsxs)("div",{className:Z.a.breakDown,children:[Object(b.jsx)("h2",{children:"Portfolio Breakdown"}),j&&Object(b.jsx)("div",{className:Z.a.chartWrapper,children:Object(b.jsx)(Q.a,{data:l,options:u})})]})]})]})]})})},K=n(61),ee=n.n(K),te=n(19);var ne=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useContext)(I).signup,r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],u=Object(te.f)();function j(){return(j=Object(C.a)(k.a.mark((function c(r){return k.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",l("Passwords do not match"));case 3:return c.prev=3,l(""),c.next=7,a(e.current.value,t.current.value);case 7:u.push("/home"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(3),l("Failed to create an account, try again");case 13:case"end":return c.stop()}}),c,null,[[3,10]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:ee.a.wrapper,children:Object(b.jsxs)("div",{className:ee.a.signupPage,children:[s&&alert(s),Object(b.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"text",id:"email",ref:e}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"text",id:"password",ref:t}),Object(b.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(b.jsx)("input",{type:"text",id:"confirmPassword",ref:n}),Object(b.jsx)("button",{children:"Sign Up"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Already have an acount?",Object(b.jsx)(H.b,{to:"/login",children:"Log In"})]})})]})})},ce=n(62),ae=n.n(ce);var re=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useContext)(I).login,a=Object(c.useState)(""),r=Object(i.a)(a,2),o=r[0],s=r[1],l=Object(c.useState)(!1),u=Object(i.a)(l,2),j=(u[0],u[1]),d=Object(te.f)();function p(){return(p=Object(C.a)(k.a.mark((function c(a){return k.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,s(""),j(!0),c.next=6,n(e.current.value,t.current.value);case 6:d.push("/portfolio"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),s("Failed to log in");case 12:j(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:ae.a.wrapper,children:Object(b.jsxs)("div",{className:ae.a.loginPage,children:[o&&alert(o),Object(b.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(b.jsx)("label",{htmlFor:"loginEmail",children:"Email"}),Object(b.jsx)("input",{type:"text",id:"loginEmail",ref:e}),Object(b.jsx)("label",{htmlFor:"loginPassword",children:"Password"}),Object(b.jsx)("input",{type:"text",id:"loginPassword",ref:t}),Object(b.jsx)("button",{children:"Login"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Don't have an account? ",Object(b.jsx)(H.b,{to:"/signup",children:"Sign up"})]})})]})})},oe=n(63),ie=n.n(oe),se=n(51),le=n.n(se);var ue=function(e){var t=e.date.substring(0,10);return Object(b.jsxs)("div",{className:le.a.newsItem,children:[Object(b.jsx)("a",{href:e.url,target:"_blank",children:Object(b.jsxs)("h3",{children:[e.title," ",Object(b.jsx)("span",{children:"|"})," ",e.source]})}),Object(b.jsx)("div",{className:le.a.tagContainer,children:e.tags.map((function(e){return Object(b.jsx)("div",{className:le.a.tag,children:e})}))}),Object(b.jsx)("p",{children:t})]})};var je=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];function r(){return(r=Object(C.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.messari.io/api/v1/news");case 2:if((t=e.sent).ok){e.next=6;break}throw n="An error occured: ".concat(t.status),new Error(n);case 6:return e.next=8,t.json();case 8:c=e.sent,a(c.data),console.log(c.data);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:ie.a.wrapper,children:[Object(b.jsxs)("div",{className:ie.a.newsPage,children:[Object(b.jsx)("h1",{children:"CryptoWatch News"}),n.map((function(e){return Object(b.jsx)(ue,{url:e.url,title:e.title,date:e.published_at,source:e.author.name,tags:e.tags})}))]}),Object(b.jsx)(m,{})]})};var be=function(){return Object(b.jsx)(D,{children:Object(b.jsx)(F,{children:Object(b.jsx)(p,{children:Object(b.jsx)(H.a,{children:Object(b.jsxs)("div",{style:{backgroundColor:"#332e2d",minHeight:"100vh"},children:[Object(b.jsx)(Y,{}),Object(b.jsxs)(te.c,{children:[Object(b.jsx)(te.a,{path:"/crypto-watch",component:B}),Object(b.jsx)(te.a,{path:"/news",component:je}),Object(b.jsx)(te.a,{path:"/portfolio",component:J}),Object(b.jsx)(te.a,{path:"/login",component:re}),Object(b.jsx)(te.a,{path:"/signup",component:ne})]})]})})})})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(be,{})}),document.getElementById("root"))},24:function(e,t,n){e.exports={wrapper:"Portfolio_wrapper__2zDFw",portfolioLoggedIn:"Portfolio_portfolioLoggedIn__1Nda0",portfolioLoggedOut:"Portfolio_portfolioLoggedOut__3ANzi",emptyPortfolio:"Portfolio_emptyPortfolio__1lhWn",loginText:"Portfolio_loginText__39BRv",left:"Portfolio_left__sRsiF",addForm:"Portfolio_addForm__30cPt",portfolioList:"Portfolio_portfolioList__3ohR_",labels:"Portfolio_labels__2p-t0",buttonDiv:"Portfolio_buttonDiv__1q5_7",editButton:"Portfolio_editButton__1DhGl",deleteButton:"Portfolio_deleteButton__4lu5q",coinRow:"Portfolio_coinRow__1YMHS",right:"Portfolio_right__2LD61",chartWrapper:"Portfolio_chartWrapper__3y2kl",breakDown:"Portfolio_breakDown__2VuJ8"}},28:function(e,t,n){e.exports={"coin-app":"Market_coin-app__G8GOR","coin-search":"Market_coin-search__GFZKX","coin-text":"Market_coin-text__29KAA","coin-input":"Market_coin-input__xTI6l","main-div":"Market_main-div__2xCwI",labels:"Market_labels__1X0No","rank-label":"Market_rank-label__3CrX7","coin-label":"Market_coin-label__3oPDk","token-label":"Market_token-label__2En0-","price-label":"Market_price-label__95qSy","change-label":"Market_change-label__57Qm7","volume-label":"Market_volume-label__1uB0g","mktcap-label":"Market_mktcap-label__23t1Y"}},33:function(e,t,n){e.exports={"coin-container":"Coin_coin-container__SxTpl",coinRow:"Coin_coinRow__2Zl-H",coinRank:"Coin_coinRank__3rC74",img:"Coin_img__3a_D3",coinSymbol:"Coin_coinSymbol__1gqaA",coinPrice:"Coin_coinPrice__1Vrk-",coinVolume:"Coin_coinVolume__fMXcn",coinMarketCap:"Coin_coinMarketCap__Ggwww",coinPercentGreen:"Coin_coinPercentGreen__27VsN",coinPercentRed:"Coin_coinPercentRed__33z45",coinName:"Coin_coinName__1B9jt"}},34:function(e,t,n){e.exports={navbar:"Nav_navbar__2PCQo",mobileNavbar:"Nav_mobileNavbar__31ngu","nav-1":"Nav_nav-1__38Gcl",menuButton:"Nav_menuButton__1gzmv",footerMenu:"Nav_footerMenu__2QiYf",footerMenuItem:"Nav_footerMenuItem__2wuHG"}},51:function(e,t,n){e.exports={newsItem:"NewsItem_newsItem__2Tb0b",tag:"NewsItem_tag__2LWcY",tagContainer:"NewsItem_tagContainer__SxTT4"}},56:function(e,t,n){e.exports={"scroll-button":"Scroll_scroll-button__3R8hp"}},57:function(e,t,n){e.exports={chartContainer:"ChartModal_chartContainer__BaRIc",parent:"ChartModal_parent__319H9",backdrop:"ChartModal_backdrop__1-2V3"}},61:function(e,t,n){e.exports={wrapper:"SignUp_wrapper__1O9Vd",signupPage:"SignUp_signupPage__38gOh"}},62:function(e,t,n){e.exports={wrapper:"Login_wrapper__25fzs",loginPage:"Login_loginPage__3_IYf"}},63:function(e,t,n){e.exports={wrapper:"News_wrapper__2OptB",newsPage:"News_newsPage__2Ijco"}},86:function(e,t,n){},87:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.8ce73aa5.chunk.js.map