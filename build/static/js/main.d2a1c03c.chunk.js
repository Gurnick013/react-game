(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{39:function(e,t,n){e.exports={wrapper:"HowToPlay_wrapper__3La1D",header:"HowToPlay_header__eHCvR",buttonsContainer:"HowToPlay_buttonsContainer__2H7kk",button:"HowToPlay_button__3qe1y"}},48:function(e,t,n){e.exports={wrapper:"MainMenu_wrapper__2l7Gq",header:"MainMenu_header__PAvX1",menuButtons:"MainMenu_menuButtons__155Fe"}},49:function(e,t,n){e.exports={footer:"Footer_footer__2BtLZ",linksize:"Footer_linksize__2nX5V"}},50:function(e,t,n){e.exports={main:"Cell_main__3BTCv",food:"Cell_food__ZTKBW",snakeBody:"Cell_snakeBody__B3ijd"}},54:function(e,t,n){e.exports={settingsWrapper:"Settings_settingsWrapper__3wFGU",buttonsBlock:"Settings_buttonsBlock__2vr_o"}},65:function(e,t,n){e.exports={header:"Header_header__2038S"}},66:function(e,t,n){e.exports={style:"GameOver_style__HxdD8"}},68:function(e,t,n){e.exports={playMuteButton:"Music_playMuteButton__3wj84"}},82:function(e,t,n){},83:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(17),o=n.n(a),r=(n(82),n(83),n(96)),s=n(48),i=n.n(s),l=n(49),u=n.n(l),d=n.p+"static/media/rs_school_js.ad178c0d.svg",j=n.p+"static/media/github.63e66eae.svg",h=n(2),b=function(){return Object(h.jsx)("div",{className:u.a.footer,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"https://rs.school/js/",children:Object(h.jsx)("img",{src:d,alt:"RSSLogo",className:u.a.linksize})}),Object(h.jsx)("a",{href:"https://github.com/Gurnick013",children:Object(h.jsx)("img",{src:j,alt:"GIT",className:u.a.linksize})})]})})},m=function(){return localStorage.getItem("volume")||localStorage.setItem("volume","0.5"),Object(h.jsxs)("div",{className:i.a.wrapper,children:[Object(h.jsx)("div",{className:i.a.header,children:"SNAKE GAME"}),Object(h.jsxs)("div",{className:i.a.menuButtons,children:[Object(h.jsx)(r.a,{type:"primary",href:"/play",children:"New Game"}),Object(h.jsx)(r.a,{href:"/scoreboard",children:"Scoreboard"}),Object(h.jsx)(r.a,{href:"/settings",children:"Settings"}),Object(h.jsx)(r.a,{href:"/how_to_play",children:"How to play"}),Object(h.jsx)(r.a,{href:"/about",children:"About"}),Object(h.jsx)(b,{})]})]})},f=n(64),x=n(30),O=n(51),p=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},v=n(65),y=n.n(v),g=function(){return Object(h.jsx)("div",{className:y.a.header,children:"Snake Game"})},_=n(66),w=n.n(_),k=function(e){localStorage.getItem("score")||localStorage.setItem("score","[0,0,0,0,0,0,0,0,0,0]");var t=JSON.parse(localStorage.getItem("score"));return t.push(e.count),t.sort((function(e,t){return e-t})).reverse().splice(10),localStorage.setItem("score",JSON.stringify(t)),Object(h.jsxs)("div",{className:w.a.style,children:[Object(h.jsx)("div",{children:"Game Over"}),Object(h.jsxs)("div",{children:["Your Score is ",e.count]})]})},S=n(67),I=n(50),C=n.n(I),N=function(e,t,n,c){if(c.x===e&&c.y===t)return Object(h.jsx)("span",{className:C.a.food,children:"f"});var a,o=Object(S.a)(n);try{for(o.s();!(a=o.n()).done;){var r=a.value;if(r.x===e&&r.y===t)return Object(h.jsx)("span",{className:C.a.snakeBody,children:"s"})}}catch(s){o.e(s)}finally{o.f()}},M=function(e){return Object(h.jsx)("div",{className:C.a.main,children:N(e.x,e.y,e.segments,e.foodItem)||""})},B=function(e){return Object(h.jsxs)("div",{children:["Your score is ",e.count]})},L=n(97),A=n(98),E=n(68),H=n.n(E),G=function(){var e=function(){var e=Object(c.useState)(new Audio("https://mp3hap.net/uploads/files/2020-10/1603377900_elena_zheludok_-_shchuchynshchyna_456485968474499226.mp3")),t=Object(x.a)(e,1)[0],n=Object(c.useState)(!1),a=Object(x.a)(n,2),o=a[0],r=a[1];return t.volume=+localStorage.getItem("volume"),Object(c.useEffect)((function(){o?t.play():t.pause()}),[o]),Object(c.useEffect)((function(){return t.addEventListener("ended",(function(){return r(!1)})),function(){t.removeEventListener("ended",(function(){return r(!1)}))}}),[]),[o,function(){return r(!o)}]}(),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:H.a.playMuteButton,onClick:a,children:n?Object(h.jsx)(L.a,{}):Object(h.jsx)(A.a,{})})})},F=n.p+"static/media/bite_sound.904dad75.mp3",T=16,D=Object(O.a)(new Array(T).keys()),P=new Audio(F),z=!1,R={x:1,y:0},J={x:-1,y:0},W={x:0,y:-1},U={x:0,y:1},V=function(e){if(e>=T&&"hard"===localStorage.getItem("gameMode"))z=!0;else{if(!(e<0&&"hard"===localStorage.getItem("gameMode")))return e>=T?0:e<0?15:e;z=!0}},q={x:Math.floor(Math.random()*T),y:Math.floor(Math.random()*T)},K=0,X=function(e,t){var n=Object(x.a)(e,1)[0],c={x:V(n.x+t.x),y:V(n.y+t.y)};if(function(e,t){return t.x===e.x&&t.y===e.y}(c,q)){if(++K,P.volume=+localStorage.getItem("volume"),P.play(),"easy"!==localStorage.getItem("gameMode")){var a=localStorage.getItem("speed");a=+a-2,localStorage.setItem("speed",a)}return q={x:Math.floor(Math.random()*T),y:Math.floor(Math.random()*T)},e.unshift(n),[c].concat(Object(O.a)(e))}return[c].concat(Object(O.a)(e.slice(0,-1)))},Y=function(){0===K&&localStorage.setItem("speed","150");var e=Object(c.useState)(U),t=Object(x.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([{x:8,y:8},{x:8,y:7},{x:8,y:6}]),s=Object(x.a)(o,2),i=s[0],l=s[1];Object(c.useEffect)((function(){var e=function(e){("w"===e.key.toLowerCase()||"\u0446"===e.key.toLowerCase()||"ArrowUp"===e.key&&"ArrowDown"!==e.key)&&a(W),"s"!==e.key.toLowerCase()&&"\u044b"!==e.key.toLowerCase()&&"ArrowDown"!==e.key||a(U),"a"!==e.key.toLowerCase()&&"\u0444"!==e.key.toLowerCase()&&"ArrowLeft"!==e.key||a(J),"d"!==e.key.toLowerCase()&&"\u0432"!==e.key.toLowerCase()&&"ArrowRight"!==e.key||a(R)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var u,d=Object(f.a)(i),j=d[0],b=d.slice(1).some((function(e){return e.x===j.x&&e.y===j.y}));return p((function(){l((function(e){return X(e,n)}))}),b?null:Number(localStorage.getItem("speed"))),(b||z)&&(u=!0),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(g,{}),Object(h.jsx)(G,{}),u?Object(h.jsx)(k,{count:K}):Object(h.jsx)("div",{className:"miniField",children:D.map((function(e){return Object(h.jsx)("div",{className:"horizontal",children:D.map((function(t){return Object(h.jsx)(M,{x:t,y:e,segments:i,foodItem:q})}))})}))}),Object(h.jsx)(B,{count:K}),Object(h.jsx)(r.a,{onClick:function(){return window.history.back()},children:"Back"})]})},Z=n(94),Q=n(54),$=n.n(Q),ee=function(){var e=+localStorage.getItem("volume");return Object(h.jsx)("div",{className:$.a.settingsWrapper,children:Object(h.jsxs)("div",{className:$.a.buttonsBlock,children:[Object(h.jsxs)("div",{children:["Music Volume",Object(h.jsx)(Z.a,{defaultValue:100*e,onChange:function(e){localStorage.setItem("volume",e/100)}})]}),Object(h.jsx)(r.a,{onClick:function(){localStorage.setItem("gameMode","easy"),localStorage.setItem("speed","150")},children:"Easy"}),Object(h.jsx)(r.a,{onClick:function(){localStorage.setItem("gameMode","medium"),localStorage.setItem("speed","150")},children:"Medium"}),Object(h.jsx)(r.a,{onClick:function(){localStorage.setItem("gameMode","hard"),localStorage.setItem("speed","150")},children:"Hard"}),Object(h.jsx)(r.a,{onClick:function(){return window.history.back()},children:"Back"})]})})},te=JSON.parse(localStorage.getItem("score")),ne=function(){return Object(h.jsxs)("div",{children:[te.map((function(e,t){return Object(h.jsxs)("div",{children:[t+1," ",e]})})),Object(h.jsx)(r.a,{onClick:function(){return window.history.back()},children:"Back"})]})},ce=n(75),ae=n(9),oe=n(39),re=n.n(oe),se=function(){return Object(h.jsxs)("div",{className:re.a.wrapper,children:[Object(h.jsx)("div",{className:re.a.header,children:"How to play"}),Object(h.jsxs)("div",{className:re.a.buttonsContainer,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"Up"}),Object(h.jsx)("div",{children:"Down"}),Object(h.jsx)("div",{children:"Left"}),Object(h.jsx)("div",{children:"Right"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"W / ArrowUp"}),Object(h.jsx)("div",{children:"S / ArrowDown"}),Object(h.jsx)("div",{children:"A / ArrowLeft"}),Object(h.jsx)("div",{children:"D / ArrowRight"})]})]}),Object(h.jsx)("div",{className:re.a.button,children:Object(h.jsx)(r.a,{onClick:function(){return window.history.back()},children:"Back"})})]})},ie=function(){return Object(c.useEffect)((function(){document.title="Snake Game"}),[]),Object(h.jsx)(ce.a,{children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(ae.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(ae.a,{path:"/play",component:Y}),Object(h.jsx)(ae.a,{path:"/settings",component:ee}),Object(h.jsx)(ae.a,{path:"/scoreboard",component:ne}),Object(h.jsx)(ae.a,{path:"/how_to_play",component:se})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};n(90);o.a.render(Object(h.jsx)(ie,{}),document.getElementById("root")),le()}},[[91,1,2]]]);
//# sourceMappingURL=main.d2a1c03c.chunk.js.map