(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),i=a.n(l),r=(a(16),a(2)),c=a(3),s=a(4),u=a(6),d=a(5),b=a(1),h=a(7),m=a(10),p=(a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={active:"player1",boxes:{box1:"",box2:"",box3:"",box4:"",box5:"",box6:"",box7:"",box8:"",box9:""},winner:!1,gameover:!1},a.handleClick=a.handleClick.bind(Object(b.a)(a)),a.checkWinner=a.checkWinner.bind(Object(b.a)(a)),a.resetGame=a.resetGame.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"resetGame",value:function(){for(var e=["box1","box2","box3","box4","box5","box6","box7","box8","box9"],t=0;t<e.length;t++)document.getElementById("".concat(e[t])).innerText="";this.setState({boxes:{box1:"",box2:"",box3:"",box4:"",box5:"",box6:"",box7:"",box8:"",box9:""},winner:!1,gameover:!1})}},{key:"checkWinner",value:function(){var e=this.state.boxes,t=e.box1,a=e.box2,n=e.box3,o=e.box4,l=e.box5,i=e.box6,r=e.box7,c=e.box8,s=e.box9;""!==t&&t===a&&a===n||""!==o&&o===l&&l===i||""!==r&&r===c&&c===s||""!==t&&t===o&&o===r||""!==a&&a===l&&l===c||""!==n&&n===i&&i===s||""!==t&&t===l&&l===s||""!==n&&n===l&&l===r?this.setState({winner:!0}):""!==t&&""!==a&&""!==n&&""!==o&&""!==l&&""!==i&&""!==r&&""!==c&&""!==s?this.setState({gameover:!0}):this.setState((function(e){return{active:"player1"===e.active?"player2":"player1"}}))}},{key:"handleClick",value:function(e){if(""===e.target.innerText){var t="player1"===this.state.active?"X":"O";e.target.innerText=t;var a=e.target.id;this.setState((function(e){return{boxes:Object(m.a)({},e.boxes,Object(r.a)({},a,t))}}),this.checkWinner)}}},{key:"render",value:function(){var e=this.props,t=e.player1,a=e.player2,n=this.state,l=n.active,i=n.winner,r="player1"===l?t:a,c=n.gameover?o.a.createElement("div",{className:"game-over"},o.a.createElement("span",null,"Game Over"),o.a.createElement("button",{onClick:this.resetGame},"Try Again"),o.a.createElement("button",{onClick:function(){return window.location.reload()}},"Restart Game")):null,s=i?o.a.createElement("div",{className:"winner"},o.a.createElement("span",{className:"winner-name"},r,"-wins!"),o.a.createElement("button",{onClick:this.resetGame},"Try Again"),o.a.createElement("button",{onClick:function(){return window.location.reload()}},"Restart Game")):null;return o.a.createElement("div",{className:"game-page"},o.a.createElement("div",{className:"players"},o.a.createElement("div",{className:"player"},"player1"===l?o.a.createElement("div",{className:"active"}):null,o.a.createElement("span",null,t," - X")),o.a.createElement("div",{className:"player"},"player2"===l?o.a.createElement("div",{className:"active"}):null,o.a.createElement("span",null,a," - O"))),o.a.createElement("div",{className:"play-box"},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{id:"box1",onClick:this.handleClick}),o.a.createElement("td",{id:"box2",onClick:this.handleClick}),o.a.createElement("td",{id:"box3",onClick:this.handleClick})),o.a.createElement("tr",null,o.a.createElement("td",{id:"box4",onClick:this.handleClick}),o.a.createElement("td",{id:"box5",onClick:this.handleClick}),o.a.createElement("td",{id:"box6",onClick:this.handleClick})),o.a.createElement("tr",null,o.a.createElement("td",{id:"box7",onClick:this.handleClick}),o.a.createElement("td",{id:"box8",onClick:this.handleClick}),o.a.createElement("td",{id:"box9",onClick:this.handleClick}))))),s,c)}}]),t}(o.a.Component)),f=(a(18),function(e){var t=e.handleChange,a=e.handleSubmit,l=Object(n.useRef)(null),i=Object(n.useRef)(null),r=Object(n.useRef)(null),c=function(e,t){if(13===t.keyCode&&""!==t.target.value)switch(e){case"player1":i.current.focus();break;case"player2":r.current.focus();break;default:l.current.focus()}};return Object(n.useEffect)((function(){l.current.focus()}),[]),o.a.createElement("div",{className:"landing-page"},o.a.createElement("div",null,o.a.createElement("input",{name:"player1",type:"text",onChange:t,placeholder:"player1",autoComplete:"off",ref:l,onKeyDown:c.bind(void 0,"player1")}),o.a.createElement("input",{name:"player2",type:"text",onChange:t,placeholder:"player2",autoComplete:"off",ref:i,onKeyDown:c.bind(void 0,"player2")}),o.a.createElement("button",{className:"start",type:"submit",onClick:a,ref:r},"Start")))}),v=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={display:"landingPage",player1:"",player2:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(r.a)({},a,n))}},{key:"handleSubmit",value:function(){var e=this.state,t=e.player1,a=e.player2;""!==t&&""!==a&&this.setState({display:"gamePage"})}},{key:"render",value:function(){var e=this.state,t=e.display,a=e.player1,n=e.player2;return o.a.createElement("div",{className:"tic-tac-toe"},o.a.createElement("h1",null,"Tic Tac Toe"),"landingPage"===t?o.a.createElement(f,{handleChange:this.handleChange,handleSubmit:this.handleSubmit}):o.a.createElement(p,{player1:a.toUpperCase(),player2:n.toUpperCase()}))}}]),t}(o.a.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}!function(e){if("serviceWorker"in navigator){if(new URL("/tic-tac-toe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tic-tac-toe","/service-worker.js");x?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}(),i.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9e5e2619.chunk.js.map