(this["webpackJsonpinspiration-board"]=this["webpackJsonpinspiration-board"]||[]).push([[0],{22:function(e,t,a){e.exports=a(55)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),r=a.n(c),i=(a(27),a(28),a(20)),l=a(4),s=a(6),m=a.n(s),d=(a(46),a(2)),u=a.n(d),f=(a(53),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("section",{className:"card__content"},o.a.createElement("p",{className:"card__content-text"},e.text),e.emoji?o.a.createElement("p",{className:"card__content-emoji"},u.a.getUnicode(e.emoji)):""),o.a.createElement("button",{className:"card__delete",onClick:function(){return e.onClickCallback(e.id)}},"Delete"))}),g=a(21),h=(a(54),["","heart_eyes","beer","clap","sparkling_heart","heart_eyes_cat","dog"]),p=function(e){var t=Object(n.useState)({text:"",emoji:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],i=function(e){var t=Object(g.a)({},c);t[e.target.name]=e.target.value,r(t)};return o.a.createElement("form",{className:"new-card-form",onSubmit:function(t){t.preventDefault(),e.onSubmitCallback(c),r({text:"",emoji:""})}},o.a.createElement("div",{className:"new-card-form__header"},o.a.createElement("label",{className:"new-card-form__form-label"},"Input your message"),o.a.createElement("input",{className:"new-card-form__form-textarea",name:"text",value:c.text,onChange:i,type:"text"})),o.a.createElement("div",{className:"new-card-form__header"},o.a.createElement("p",null,o.a.createElement("label",{className:"new-card-form__form-select"},"Select Emoji"),o.a.createElement("select",{className:"new-card-form__form-select",name:"emoji",onChange:i},o.a.createElement("option",{value:h[0]},u.a.getUnicode(h[0])),o.a.createElement("option",{value:h[1]},u.a.getUnicode(h[1])),o.a.createElement("option",{value:h[2]},u.a.getUnicode(h[2])),o.a.createElement("option",{value:h[3]},u.a.getUnicode(h[3])),o.a.createElement("option",{value:h[4]},u.a.getUnicode(h[4])),o.a.createElement("option",{value:h[5]},u.a.getUnicode(h[5])),o.a.createElement("option",{value:h[6]},u.a.getUnicode(h[6]))))),o.a.createElement("div",null,o.a.createElement("button",{className:"new-card-form__form-button"},"Add Card")))},v=function(e){var t="".concat(e.url).concat(e.bordName,"/cards"),a=Object(n.useState)([]),c=Object(l.a)(a,2),r=c[0],s=c[1],d=Object(n.useState)(null),u=Object(l.a)(d,2),g=u[0],h=u[1],v=function(e){var t=r.filter((function(t){return t.card.id!==e}));t.length<r.length&&(m.a.delete("https://inspiration-board.herokuapp.com/cards/".concat(e)).then((function(t){h("Card ".concat(e," deleted")),console.log(g)})).catch((function(t){h("Unable to delete card ".concat(e)),console.log(g)})),s(t))};Object(n.useEffect)((function(){m.a.get(t).then((function(e){var t=e.data;s(t)})).catch((function(e){h(e.message),console.log(e.message)}))}),[t]);var b=r.map((function(e){return o.a.createElement(f,{key:e.card.id,id:e.card.id,text:e.card.text,emoji:e.card.emoji,onClickCallback:v})}));return o.a.createElement("div",{className:"board"},b,o.a.createElement(p,{onSubmitCallback:function(e){var a=Object(i.a)(r);m.a.post(t,e).then((function(t){var n=t.data;a.push({card:{id:n.card.id,text:e.text,emoji:e.emoji}}),s(a)})).catch((function(e){h(e.message),console.log(e.message)}))}}))},b=function(){return o.a.createElement("section",null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__h1"},o.a.createElement("span",{className:"header__text"},"Inspiration Board"))),o.a.createElement(v,{url:"https://inspiration-board.herokuapp.com/boards/",boardName:"Jeta-Yieni"}))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/yieknee/yieknee.github.io.git",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/yieknee/yieknee.github.io.git","/service-worker.js");E?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.ab54513b.chunk.js.map