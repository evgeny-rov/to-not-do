(this.webpackJsonpin24=this.webpackJsonpin24||[]).push([[0],{37:function(e,n,t){e.exports=t(63)},63:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t.n(a),c=t(4),l=t(21),u=t(11),s=t(35);l.a.use(u.e).use(s.a).init({resources:{en:{translation:{add_action:"Add",input_placeholder:"New todo...",info_hover:"Info",info_1:"Your todos will be reset in 24 hours.",info_2:"Try to complete all of them in time!",info_3:"To remove todo swipe in to the right",info_4:"or click twice on the checkbox.",info_5:"Use recycle to remove all complete todos.",info_6:"You can turn off/on timer by clicking on it",recycle_hover:"Recycle Progress",reset_hover:"Reset Progress",reset_message:"Reset all of your progress?",confirm:"Yes",deny:"No",completion_done:"Good job! You deserve a cup of \u2615",completion_empty:"Add some todos"}},ru:{translation:{add_action:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",input_placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c...",info_hover:"\u0418\u043d\u0444\u043e",info_1:"\u0421\u043f\u0438\u0441\u043e\u043a \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043e\u0448\u0435\u043d \u0447\u0435\u0440\u0435\u0437 24 \u0447\u0430\u0441\u0430.",info_2:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0451 \u0432\u043e\u0432\u0440\u0435\u043c\u044f!",info_3:"\u0427\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c \u0441\u043c\u0430\u0445\u043d\u0438 \u0435\u0435 \u0432\u043f\u0440\u0430\u0432\u043e",info_4:"\u0438\u043b\u0438 \u0449\u0435\u043b\u043a\u043d\u0438 \u0434\u0432\u0430\u0436\u0434\u044b \u043d\u0430 \u0433\u0430\u043b\u043e\u0447\u043a\u0443.",info_5:"\u0423\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0447\u0438\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438.",info_6:"\u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0432\u043a\u043b/\u0432\u044b\u043a\u043b \u0442\u0430\u0439\u043c\u0435\u0440 \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043d\u0435\u0433\u043e.",recycle_hover:"\u0423\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c",reset_hover:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",reset_message:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u0441\u043f\u0438\u0441\u043e\u043a?",confirm:"\u0414\u0430",deny:"\u041d\u0435\u0442",completion_done:"\u042d\u0439! \u0442\u044b \u0437\u0430\u0441\u043b\u0443\u0436\u0438\u043b \u0447\u0430\u0448\u0435\u0447\u043a\u0443 \u2615",completion_empty:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442, \u0434\u043e\u0431\u0430\u0432\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c"}}},fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});l.a;var f=t(2),d=t(1);function b(){var e=Object(f.a)(["\n  width: 20%;\n  background: rgb(231, 71, 106);\n  color: #fff;\n  z-index: 5;\n  box-shadow: 0 0 4px rgb(231, 71, 106);\n  transition: all 0.6s;\n\n  &:disabled {\n    background: rgb(107, 74, 74);\n    color: #aaa;\n    box-shadow: inset 1px 0 3px rgb(36, 36, 36);\n  }\n"]);return b=function(){return e},e}function p(){var e=Object(f.a)(["\n  width: 80%;\n  z-index: 4;\n"]);return p=function(){return e},e}function m(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  padding: 0.5rem;\n  border: none;\n  height: 100%;\n"]);return m=function(){return e},e}function v(){var e=Object(f.a)(["\n  &:hover "," {\n    display: block;\n  }\n"]);return v=function(){return e},e}function g(){var e=Object(f.a)(["\n  display: none;\n  position: absolute;\n  background: rgb(20, 20, 20);\n  color: #fff;\n  bottom: 100%;\n  right: 2.5rem;\n  padding: 0.8rem;\n  border-radius: 8px 8px 0;\n  text-align: left;\n  font-size: 0.9rem;\n\n  & span {\n    display: block;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  height: 60%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1.3rem;\n"]);return h=function(){return e},e}function O(){var e=Object(f.a)(["\n  width: 100%;\n"]);return O=function(){return e},e}function y(){var e=Object(f.a)(["\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 5rem;\n  bottom: 0;\n  opacity: 0.9;\n  z-index: 2;\n"]);return y=function(){return e},e}var j=d.b.div(y()),E=d.b.div(O()),w=Object(d.b)(E)(h()),x=d.b.div(g()),k=d.b.div(v(),x),C=d.b.input(m()),_=Object(d.b)(C)(p()),R=Object(d.b)(C)(b()),S=function(e){var n=e.children;return o.a.createElement(j,null,n)};function I(){var e=Object(f.a)(["\n  color: ",";\n"]);return I=function(){return e},e}function T(){var e=Object(f.a)(["\n  height: 100%;\n  width: ",";\n  background: rgb(231, 71, 106);\n  transition: all 0.7s;\n"]);return T=function(){return e},e}function z(){var e=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 0.3rem;\n  background: rgba(255, 255, 255, 0.1);\n"]);return z=function(){return e},e}function A(){var e=Object(f.a)(["\n  text-decoration: ",";\n  color: ",";\n"]);return A=function(){return e},e}function D(){var e=Object(f.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  user-select: none;\n  width: 100%;\n  height: 4rem;\n  top: 0;\n  opacity: 0.9;\n  z-index: 2;\n\n  & span {\n    font-size: 0.95rem;\n    padding: 1.5rem;\n    transition: all 0.5s;\n  }\n"]);return D=function(){return e},e}var P=d.b.div(D()),B=d.b.span(A(),(function(e){return e.active?"none":"line-through"}),(function(e){return e.active?"inherit":"#555"})),L=d.b.div(z()),M=d.b.div(T(),(function(e){var n=e.size;return"".concat(n,"%")})),N=d.b.span(I(),(function(e){return e.complete?"rgb(231, 71, 106)":"white"})),G=function(e){var n=e.children;return o.a.createElement(P,null,n)},W=function(e){var n=e.children;return o.a.createElement(w,null,n)},U=t(5),Y=function(){return Date.now()+864e5},J=t(13),V=t(33),Z=t.n(V),H=t(10),$=t(23),q=t(3),F=t(12),K={todosById:{0:{id:0,text:"Make a to-do app just like everyone else",isComplete:!0},1:{id:1,text:"Add third to-do",isComplete:!1}},allIds:[0,1],expires:Y(),isCountdownActive:!0},Q=function(){try{var e=localStorage.getItem("state");if(null===e)return;var n=JSON.parse(e);return n.isCountdownActive&&n.expires-Date.now()<1e3?void 0:n}catch(t){return}}(),X=Object(J.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TODO":var t=n.payload,r=t.text,o=t.id;return Object(q.a)(Object(q.a)({},e),{},{allIds:[].concat(Object($.a)(e.allIds),[o]),todosById:Object(q.a)(Object(q.a)({},e.todosById),{},Object(H.a)({},o,{id:o,text:r,isComplete:!1}))});case"TOGGLE_TODO":var a=n.payload,i=a.id,c=a.nextStatus;return Object(q.a)(Object(q.a)({},e),{},{todosById:Object(q.a)(Object(q.a)({},e.todosById),{},Object(H.a)({},i,Object(q.a)(Object(q.a)({},e.todosById[i]),{},{isComplete:c})))});case"REMOVE_TODO":var l=n.payload.id;return Object(q.a)(Object(q.a)({},e),{},{allIds:Object(F.filter)(e.allIds,(function(e){return e!==l})),todosById:Object(F.omit)(e.todosById,[l])});case"RECYCLE_PROGRESS":var u=n.payload.expires,s=Object(F.filter)(e.allIds,(function(n){return!e.todosById[n].isComplete})),f=Object(F.pick)(e.todosById,Object($.a)(s));return Object(q.a)(Object(q.a)({},e),{},{allIds:s,todosById:f,expires:u});case"RESET_APP":var d=n.payload.expires;return Object(q.a)(Object(q.a)({},e),{},{allIds:[],todosById:{},expires:d});case"TOGGLE_COUNTDOWN":var b=n.payload.expires;return Object(q.a)(Object(q.a)({},e),{},{expires:b,isCountdownActive:!e.isCountdownActive});default:return e}}),Q);X.subscribe(Z()((function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}(X.getState())}),1e3));var ee=X,ne=function(){return localStorage.removeItem("state"),{type:"RESET_APP",payload:{expires:Y()}}},te=t(22);function re(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-right: 0.9rem;\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background: ",";\n  border: ",";\n  box-shadow: ",";\n  transition: all 0.2s;\n\n  input {\n    display: none;\n    appearance: none;\n  }\n\n  input:checked ~ svg {\n    visibility: visible;\n  }\n\n  svg {\n    visibility: hidden;\n    position: relative;\n    pointer-events: none;\n    fill: none;\n    stroke-width: 3px;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke: #fff;\n    width: 100%;\n    height: 100%;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(f.a)(["\n  display: flex;\n  align-items: baseline;\n  border-radius: 5px;\n  padding: 0 0.5rem;\n  cursor: pointer;\n  text-decoration: ",";\n  color: ",";\n\n  &:hover, &:focus {\n    background: rgba(150, 150, 150, 0.1);\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  }\n\n  span {\n    transition: all 0.4s;\n    word-break: break-word;\n  }\n\n  span::first-letter {\n    text-transform: uppercase;\n  }\n"]);return oe=function(){return e},e}function ae(){var e=Object(f.a)(["\n  list-style: none;\n  box-sizing: border-box;\n  width: 85%;\n  height: 70%;\n  text-align: left;\n  overflow-y: auto;\n  overflow-x: hidden;\n  line-height: 2rem;\n  z-index: 2;\n  padding-inline-start: 0;\n\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.452);\n    border-radius: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: grey;\n  }\n\n  @media(max-height: 450px) {\n    height: 50%;\n  }\n"]);return ae=function(){return e},e}var ie=Object(d.b)(te.a.ul)(ae()),ce=Object(d.b)(te.a.li)(oe(),(function(e){return e.isComplete?"line-through":"none"}),(function(e){return e.isComplete?"grey":"white"})),le=d.b.label(re(),(function(e){return e.isComplete?"rgb(231, 71, 106)":"none"}),(function(e){return e.isComplete?"1px solid rgb(231, 71, 106)":"1px solid rgba(150, 150, 150, 0.3)"}),(function(e){return e.isComplete?"0 0 4px rgb(231, 71, 106)":"none"}));function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function se(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var fe=o.a.createElement("polyline",{points:"5 10.75 8.5 14.25 16 6"}),de=function(e){var n=e.svgRef,t=e.title,r=se(e,["svgRef","title"]);return o.a.createElement("svg",ue({id:"checkmark",viewBox:"0 0 21 21",ref:n},r),t?o.a.createElement("title",null,t):null,fe)},be=o.a.forwardRef((function(e,n){return o.a.createElement(de,ue({svgRef:n},e))})),pe=(t.p,Object(c.b)(null,{toggleTodo:function(e,n){return{type:"TOGGLE_TODO",payload:{id:e,nextStatus:n}}},removeTodo:function(e){return{type:"REMOVE_TODO",payload:{id:e}}}})((function(e){var n=e.id,t=e.text,a=e.isComplete,i=e.toggleTodo,c=e.removeTodo,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=Object(r.useState)(0),t=Object(U.a)(n,2),o=t[0],a=t[1];return function(n){Date.now()-o<e?n():a(Date.now())}}(300),u=function(){return c(n)};return o.a.createElement(ce,{isComplete:a,variants:{hidden:{x:Math.round(Math.random())>0?100:-100,opacity:0},show:{x:0,opacity:1}},role:"presentation",onClick:function(){return i(n,!a)},onDragEnd:function(e,t){return t.offset.x>150&&c(n)},drag:"x",dragDirectionLock:!0,dragElastic:1,dragConstraints:{left:0,right:0}},o.a.createElement(le,{isComplete:a},o.a.createElement("input",{type:"checkbox",name:"complete",readOnly:!0,checked:a,onClick:function(){return l(u)}}),o.a.createElement(be,null)),o.a.createElement("span",null,t))}))),me=t(17),ve=function(e){return e.allIds},ge=Object(me.a)([ve,function(e){return e.todosById}],(function(e,n){return e.map((function(e){return n[e]}))})),he=Object(me.a)(ge,(function(e){return e.filter((function(e){return e.isComplete}))})),Oe=Object(me.a)([ve,he],(function(e,n){return{complete:n.length,total:e.length}})),ye={show:{transition:{staggerChildren:.1}}},je=Object(c.b)((function(e){return{todos:ge(e)}}))((function(e){var n,t=e.todos,a=Object(r.useRef)(null),i=(n=a,function(e,t){var r="mouse"===e.pointerType,o=t.delta.y;r||(o<0?n.current.scrollTop+=Math.abs(o):o>0&&(n.current.scrollTop-=o))}),c=function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current=e})),n.current}(t.length);return Object(r.useEffect)((function(){t.length>c&&(a.current.scrollTop=a.current.scrollHeight)}),[t.length,c]),o.a.createElement(ie,{ref:a,variants:ye,initial:"hidden",animate:"show",onPan:i},t.map((function(e){var n=e.id,t=e.text,r=e.isComplete;return o.a.createElement(pe,{key:n,id:n,text:t,isComplete:r})})))})),Ee=Object(c.b)((function(e){return Oe(e)}))((function(e){var n,t,r=e.total,a=e.complete;return o.a.createElement(L,null,o.a.createElement(M,{size:(n=a,t=r,t<1?0:Math.floor(n/t*100)).toString()}))})),we=Object(c.b)((function(e){var n=e.expires,t=e.isCountdownActive;return{countAmount:n-Date.now(),isCountdownActive:t,key:n}}),{resetApp:ne,toggleCountdown:function(){return{payload:{expires:Y()},type:"TOGGLE_COUNTDOWN"}}})((function(e){var n=e.countAmount,t=e.isCountdownActive,a=e.resetApp,i=e.toggleCountdown,c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(r.useState)(e),a=Object(U.a)(o,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){if(!t){if(!(i<1e3)){var e=setTimeout((function(){return c(i-1e3)}),995);return function(){return clearTimeout(e)}}n()}}),[i,n,t]),i}(n,a,!t);return o.a.createElement(B,{active:t,role:"button",onClick:i},t?new Date(c).toUTCString().slice(-12,-4):"00:00:00")})),xe=t(64),ke=function(){var e=Object(xe.a)().t;return function(n){return e(n)}},Ce=Object(c.b)((function(e){return Oe(e)}))((function(e){var n=e.total,t=e.complete,r=ke();return o.a.createElement(N,{complete:n-t===0},function(e,n){return e<1?r("completion_empty"):e-n===0?r("completion_done"):"".concat(n,"/").concat(e)}(n,t))}));function _e(){return(_e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Re(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Se=o.a.createElement("path",{d:"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"}),Ie=function(e){var n=e.svgRef,t=e.title,r=Re(e,["svgRef","title"]);return o.a.createElement("svg",_e({width:20,height:20,viewBox:"0 0 24 24",ref:n},r),t?o.a.createElement("title",null,t):null,Se)},Te=o.a.forwardRef((function(e,n){return o.a.createElement(Ie,_e({svgRef:n},e))}));t.p;function ze(){var e=Object(f.a)(["\n  position: absolute;\n  font-family: 'Bebas Neue', cursive;\n  font-size: 20rem;\n  bottom: -8rem;\n  color: #000;\n  opacity: 0.04;\n  z-index: 1;\n  user-select: none;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(f.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 30rem;\n  height: 40rem;\n  background: rgb(45, 45, 45);\n  border-radius: 0.5em;\n  box-shadow: 0 0 20px 5px rgb(35, 35, 35);\n  overflow: hidden;\n\n  @media (max-width: 600px), (max-height: 600px) {\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n"]);return Ae=function(){return e},e}function De(){var e=Object(f.a)(["\n  background: linear-gradient(-45deg, rgb(31, 31, 31) 0%, rgb(48, 48, 48) 100%);\n  color: white;\n  z-index: 1;\n"]);return De=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]);return Pe=function(){return e},e}function Be(){var e=Object(f.a)(["\n  body {\n    margin: 0;\n    font-family: 'Ubuntu Mono', monospace;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  svg:not(#checkmark) {\n    fill: rgb(143, 143, 143);\n    transition: all 1s;\n\n    & path {\n      fill: rgb(143, 143, 143);\n      transition: all 1s;\n    }\n\n    &:hover {\n      transform: rotate(-180deg);\n    }\n\n    &:hover path {\n      fill: rgb(231, 71, 106);\n    }\n  }\n"]);return Be=function(){return e},e}var Le=Object(d.a)(Be()),Me=d.b.div(Pe()),Ne=Object(d.b)(Me)(De()),Ge=d.b.div(Ae()),We=d.b.span(ze());function Ue(){var e=Object(f.a)(["\n  height: 2.5rem;\n  width: 6rem;\n  margin: 0.5rem;\n  border: none;\n  background: rgb(107, 74, 74);\n  color: #fff;\n  border-radius: 3px;\n  transition: all 0.5s;\n\n  &:hover {\n    background: rgb(231, 71, 106);\n  }\n"]);return Ue=function(){return e},e}function Ye(){var e=Object(f.a)(["\n  font-size: 1.3rem;\n  margin: 1rem;\n"]);return Ye=function(){return e},e}function Je(){var e=Object(f.a)(["\n  background: rgba(0, 0, 0, 0.938);\n  flex-direction: column;\n  z-index: 1000;\n  color: #fff;\n"]);return Je=function(){return e},e}var Ve=Object(d.b)(Me)(Je()),Ze=d.b.span(Ye()),He=d.b.input(Ue()),$e=document.getElementById("modal-root"),qe=function(e){var n=e.message,t=e.onAccept,r=e.onRefuse,a=ke(),c=o.a.createElement(Ve,null,o.a.createElement(Ze,null,n),o.a.createElement("div",null,o.a.createElement(He,{type:"button",value:a("confirm"),onClick:t}),o.a.createElement(He,{type:"button",value:a("deny"),onClick:r})));return i.a.createPortal(c,$e)},Fe=Object(c.b)(null,{resetApp:ne})((function(e){var n=e.resetApp,t=Object(r.useState)(!1),a=Object(U.a)(t,2),i=a[0],c=a[1],l=ke(),u=function(){c(!1),n()};return o.a.createElement("div",null,i&&o.a.createElement(qe,{message:l("reset_message"),onAccept:u,onRefuse:function(){return c(!1)}}),o.a.createElement(Te,{title:l("reset_hover"),onClick:function(){return c(!0)}}))}));function Ke(){return(Ke=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Qe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Xe=o.a.createElement("title",null,"Info"),en=o.a.createElement("desc",null,"Created with Sketch."),nn=o.a.createElement("g",{id:"Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.a.createElement("g",{id:"Rounded",transform:"translate(-850.000000, -332.000000)"},o.a.createElement("g",{id:"Action",transform:"translate(100.000000, 100.000000)"},o.a.createElement("g",{id:"-Round-/-Action-/-info",transform:"translate(748.000000, 230.000000)"},o.a.createElement("g",null,o.a.createElement("polygon",{id:"Path",points:"0 0 24 0 24 24 0 24"}),o.a.createElement("path",{d:"M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,17 C11.45,17 11,16.55 11,16 L11,12 C11,11.45 11.45,11 12,11 C12.55,11 13,11.45 13,12 L13,16 C13,16.55 12.55,17 12,17 Z M13,9 L11,9 L11,7 L13,7 L13,9 Z",id:"\\uD83D\\uDD39Icon-Color",fill:"#1D1D1D"})))))),tn=function(e){var n=e.svgRef,t=e.title,r=Qe(e,["svgRef","title"]);return o.a.createElement("svg",Ke({width:"20px",height:"20px",viewBox:"0 0 20 20",ref:n},r),void 0===t?Xe:t?o.a.createElement("title",null,t):null,en,nn)},rn=o.a.forwardRef((function(e,n){return o.a.createElement(tn,Ke({svgRef:n},e))})),on=(t.p,function(){var e=ke();return o.a.createElement(k,null,o.a.createElement(x,null,o.a.createElement("span",null,e("info_1")),o.a.createElement("span",null,e("info_2")),o.a.createElement("hr",null),o.a.createElement("span",null,e("info_3")),o.a.createElement("span",null,e("info_4")),o.a.createElement("hr",null),o.a.createElement("span",null,e("info_5")),o.a.createElement("span",null,e("info_6"))),o.a.createElement(rn,{title:e("info_hover")}))}),an=Object(c.b)(null,{addTodo:function(e){return{type:"ADD_TODO",payload:{id:Date.now(),text:e}}}})((function(e){var n=e.addTodo,t=Object(r.useState)(""),a=Object(U.a)(t,2),i=a[0],c=a[1],l=ke();return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(i),c("")}},o.a.createElement(_,{className:"input field",type:"text",placeholder:"".concat(l("input_placeholder")),value:i,onChange:function(e){return c(e.target.value)}}),o.a.createElement(R,{className:"input sbmt-btn",type:"submit",value:"".concat(l("add_action")),disabled:i.length<2}))}));function cn(){return(cn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ln(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var un=o.a.createElement("g",null,o.a.createElement("path",{d:"m166.023 112.557 30.13-8.81 7.435 30.499 5.585 22.907 27.614-48.009c4.262-7.409 11.739-11.115 19.217-11.115 7.468 0 14.936 3.696 19.202 11.091l65.848 114.15-42.538 24.568 121.008 35.363 29.843-122.486-42.687 24.654-85.049-147.435c-13.689-23.744-38.224-37.925-65.631-37.934h-.025c-27.396 0-51.931 14.166-65.63 37.892l-46.712 81.212z"}),o.a.createElement("path",{d:"m501.34 349.12-47.11-81.62-12.991 53.303-52.628-15.38 27.898 48.337c8.54 14.78-2.13 33.25-19.19 33.25h-131.9v-49.21l-91.14 87.1 91.14 87.1v-49.21h170.29c27.4 0 51.93-14.16 65.63-37.89 13.701-23.73 13.701-52.06.001-75.78z"}),o.a.createElement("path",{d:"m77.319 462.791h93.183l-16.952-16.201-22.69-21.69 22.69-21.69 16.954-16.203h-55.81c-17.067 0-27.732-18.477-19.196-33.255l66.156-114.542 42.649 24.624-29.861-122.482-121.003 35.38 42.583 24.585-85.363 147.798c-13.743 23.804-13.699 52.241.134 76.014 13.704 23.554 39.276 37.662 66.526 37.662z"})),sn=function(e){var n=e.svgRef,t=e.title,r=ln(e,["svgRef","title"]);return o.a.createElement("svg",cn({id:"Capa_1",enableBackground:"new 0 0 512 512",height:20,viewBox:"0 0 512 512",width:20,ref:n},r),t?o.a.createElement("title",null,t):null,un)},fn=o.a.forwardRef((function(e,n){return o.a.createElement(sn,cn({svgRef:n},e))})),dn=(t.p,Object(c.b)(null,{recycle:function(){return{type:"RECYCLE_PROGRESS",payload:{expires:Y()}}}})((function(e){var n=e.recycle,t=ke();return o.a.createElement(fn,{title:t("recycle_hover"),onClick:n})})));var bn=function(){return o.a.createElement(Ne,null,o.a.createElement(Ge,null,o.a.createElement(G,null,o.a.createElement(Ee,null),o.a.createElement(we,null),o.a.createElement(Ce,null)),o.a.createElement(je,null),o.a.createElement(S,null,o.a.createElement(W,null,o.a.createElement(Fe,null),o.a.createElement(dn,null),o.a.createElement(on,null)),o.a.createElement(an,null)),o.a.createElement(We,null,"in24")))},pn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:ee},o.a.createElement(Le,null),o.a.createElement(bn,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");pn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):mn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):mn(n,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.c045f696.chunk.js.map