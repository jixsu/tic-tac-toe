(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),l=(n(13),n(2)),i=n(3),s=n(5),u=n(4),m=n(1),d=(n(14),function(e){return r.createElement("td",{className:"grid-node",onClick:function(){return e.onClick(e._id)}},"x"===e.selected&&r.createElement("div",null,"x"),"o"===e.selected&&r.createElement("div",null,"o"))});function f(e,t){var n=e.map((function(e){return e.split("-").map((function(e){return parseInt(e)}))}));console.log(n);var r,a=[[0,0,0],[0,0,0]],c=Object(m.a)(n);try{for(c.s();!(r=c.n()).done;){var o=r.value;if(a[0][o[0]]+=1,a[1][o[1]]+=1,console.log(a),!0===v(a,o))return!0}}catch(l){c.e(l)}finally{c.f()}return!1}function v(e,t){if(3===e[0][t[0]]||3===e[1][t[1]])return!0;var n,r=Object(m.a)(e);try{for(r.s();!(n=r.n()).done;){var a,c=n.value,o=Object(m.a)(c);try{for(o.s();!(a=o.n()).done;){if(0===a.value)return!1}}catch(l){o.e(l)}finally{o.f()}}}catch(l){r.e(l)}finally{r.f()}return!0}n(15);var h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={turn:"x",x:[],o:[],score:{x:0,o:0},winner:""},e.gridArray=[["0-0","0-1","0-2"],["1-0","1-1","1-2"],["2-0","2-1","2-2"]],e.handleNodeClick=function(t){var n=e.state,r=n.turn,a=n.x,c=n.o,o=n.winner,l=n.score;if(""===o&&""===e.isSelected(t)){if("x"===r){var i=a;if(i.push(t),e.setState({x:i,turn:"o"}),!0===f(i)){var s=l;s.x+=1,e.setState({winner:"x",score:s})}}else{var u=c;if(u.push(t),e.setState({o:u,turn:"x"}),!0===f(u)){var m=l;m.o+=1,e.setState({winner:"o",score:m})}}return!0}return!1},e.handleRestartGame=function(){e.setState({x:[],o:[],turn:"x",winner:""})},e.isSelected=function(t){var n,r=e.state,a=r.x,c=r.o,o=Object(m.a)(a);try{for(o.s();!(n=o.n()).done;){if(t===n.value)return"x"}}catch(s){o.e(s)}finally{o.f()}var l,i=Object(m.a)(c);try{for(i.s();!(l=i.n()).done;){if(t===l.value)return"o"}}catch(s){i.e(s)}finally{i.f()}return""},e.renderNodes=function(){return e.gridArray.map((function(t){return r.createElement("tr",{key:t[0][0]},t.map((function(t){return r.createElement(d,{key:t,_id:t,selected:e.isSelected(t),onClick:e.handleNodeClick})})))}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.score,a=t.turn,c=t.winner;return r.createElement("div",{className:"y-container"},r.createElement("div",{className:"title"},"Tic Tac Toe"),r.createElement("div",{className:"score"},""===c?"Turn: "+a:"Please restart game"),r.createElement("div",{className:"x-container"},r.createElement("div",{className:"player"},r.createElement("div",{className:"player-header"},"x"),r.createElement("div",{className:"separator"}),r.createElement("div",{className:"player-score"},n.x)),r.createElement("table",{className:"grid"},r.createElement("tbody",null,this.renderNodes())),r.createElement("div",{className:"player"},r.createElement("div",{className:"player-header"},"o"),r.createElement("div",{className:"separator"}),r.createElement("div",{className:"player-score"},n.o))),r.createElement("button",{className:"btn btn-primary start",onClick:function(){return e.handleRestartGame()}},"Restart Game"),""!==c&&r.createElement("div",{className:"win-text"},c+" wins!"))}}]),n}(r.Component),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(h,null))}}]),n}(r.Component);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ffd80a40.chunk.js.map