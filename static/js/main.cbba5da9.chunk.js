(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/fail.11bd6286.mp3"},20:function(e,t,a){e.exports=a.p+"static/media/good.6e028a88.mp3"},21:function(e,t,a){e.exports=a.p+"static/media/intro.e57bec62.mp3"},23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=(a(28),a(7)),s=a(8),m=a(11),u=a(9),l=a(12),p=(a(29),function(e){for(var t=e.team,a=t.points,n=t.fails,i=[],o=0;o<n;o++)i.push({text:"X",id:o});var c=i.map(function(e){return r.a.createElement("div",{key:e.id,className:"fail"},e.text)});return r.a.createElement("div",{className:"sideBoard"},r.a.createElement("div",{className:"fails"},c),r.a.createElement("div",{className:"points"},a))}),d=(a(30),a(31),a(2)),f=Object(d.b)(function(e){return{surname1:e.surname1,surname2:e.surname2}},function(e){return{change:function(t){e({type:"INPUT_CHANGE",payload:{name:t.target.id,value:t.target.value}})},start:function(t){t.preventDefault(),e({type:"START_GAME"})}}})(function(e){var t=e.start,a=e.surname1,n=e.surname2,i=e.change;return r.a.createElement("form",{className:"startingPage",autoComplete:"off"},r.a.createElement("h1",{className:"familiada"},"Familiada"),r.a.createElement("label",{htmlFor:"surname1"},"Nazwisko 1:",r.a.createElement("input",{type:"text",id:"surname1",value:a,onChange:i})),r.a.createElement("label",{htmlFor:"surname2"},"Nazwisko 2:",r.a.createElement("input",{type:"text",id:"surname2",value:n,onChange:function(e){return i(e)}})),r.a.createElement("button",{className:"btn",onClick:function(e){return t(e)}}," ","Start"))}),h=(a(38),a(22)),w=a(19),y=a.n(w),v=a(20),b=new Audio(a.n(v).a),E=new Audio(y.a),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).checkAnswers=function(e){e.preventDefault();var t=a.props.question.answers,n=t.filter(function(e){return e.name.toUpperCase()===a.props.inputValue.toUpperCase()}),r=a.props.activeTeam;if(n.length>0){var i=t.indexOf.apply(t,Object(h.a)(n));t[i].correct=!0,b.play(),a.props.correctAnswers(n)}else a.props[r].fails<3&&t.filter(function(e){return!0===e.correct}).length!==t.length&&(E.play(),a.props.addFails())},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.question,n=t.value,i=t.activeTeam,o=t.team1,c=t.team2,s=t.change,m=a.answers.map(function(e){return r.a.createElement("div",{className:"answerBox",key:e.id},e.id,". ",e.correct?e.name:"",r.a.createElement("span",{className:"answerPoints"},e.correct?e.points:0))});return r.a.createElement("div",{className:"questionBox"},r.a.createElement("h3",{className:"question"}," ",a.question),r.a.createElement("div",{className:"answers"},m),r.a.createElement("form",{className:"answerForm",autoComplete:"off"},r.a.createElement("label",{htmlFor:"inputValue"},"Podaj odpowiedz:",r.a.createElement("input",{type:"text",id:"inputValue",value:n,onChange:s,placeholder:"odpowiedz"})),r.a.createElement("button",{className:"answerFormBtn",onClick:function(t){return e.checkAnswers(t)}},"Sprawdz"),r.a.createElement("span",{className:"activeTeam"},"Tura: ","team1"===i?o.name:c.name)))}}]),t}(n.Component),j=Object(d.b)(function(e){return{question:e.currentQuestion,value:e.inputValue,activeTeam:e.activeTeam,team1:e.team1,team2:e.team2,inputValue:e.inputValue}},function(e){return{change:function(t){return e({type:"INPUT_CHANGE",payload:{name:t.target.id,value:t.target.value}})},correctAnswers:function(t){e({type:"CORRECT_ANSWERS",payload:{answer:t}})},addFails:function(){e({type:"ADD_FAILS"})}}})(k),N=Object(d.b)(function(e){return{winner:e.winner,team1:e.team1,team2:e.team2}})(function(e){var t=e.winner,a=e.team1,n=e.team2;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("h2",{className:"winner"},"Wygral ","team1"===t?a.name:n.name):r.a.createElement(j,null))}),z=Object(d.b)(function(e){return{gameStarted:e.gameStarted}})(function(e){var t=e.gameStarted;return r.a.createElement("div",{className:"mainBoard"},t?r.a.createElement(N,null):r.a.createElement(f,null))}),O=(a(39),a(40),Object(d.b)(function(e){return{question:e.currentQuestion.question,team1:e.team1,team2:e.team2}},function(e){return{whosFirst:function(t){return e({type:"WHOS_FIRS",payload:t.target.dataset.id})}}})(function(e){var t=e.whosFirst,a=e.question,n=e.team1,i=e.team2;return r.a.createElement("div",{className:"whosFirst",onKeyPress:function(e){return t(e)}},r.a.createElement("h2",{className:"question"},a),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"btn",onClick:function(e){return t(e)},"data-id":"team1"},n.name,": A"),r.a.createElement("button",{className:"btn",onClick:function(e){return t(e)},"data-id":"team2"},i.name,": L")))})),g=a(21),F=a.n(g),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).intro=new Audio(F.a),a.checkFails=function(){var e=a.props,t=e.activeTeam,n=e.team1,r=e.team2,i=e.handleNewWinner,o=e.newQuestion,c=e.handleCheckFails;if(n.fails>2&&r.fails>2){var s=a.checkWinner();""!==s?i(s):setTimeout(o,3e3)}else a.props[t].fails>2&&("team1"===t?c("team2"):"team2"===t&&c("team1"))},a.checkCorrects=function(){var e=a.props,t=e.currentQuestion,n=e.handleNewWinner,r=e.newQuestion;if(0===t.answers.filter(function(e){return!1===e.correct}).length){var i=a.checkWinner();""!==i?n(i):setTimeout(r,3e3)}},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(t){var a=e.props.whosFirst;e.props.handleWhosFirst(t,a)}),this.props.newQuestion(),this.intro.play()}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props.whosFirst;document.removeEventListener("keyup",function(a){return e.props.handleWhosFirst(a,t)})}},{key:"checkWinner",value:function(){var e=this.props,t=e.team1,a=e.team2;return t.points>=250&&a.points>=250?t.points>a.points?"team1":"team2":t.points>=250&&a.points<250?"team1":t.points<250&&a.points>=250?"team2":""}},{key:"componentDidUpdate",value:function(){this.props.gameStarted&&(this.checkFails(),this.checkCorrects())}},{key:"render",value:function(){var e=this.props,t=e.team1,a=e.team2,n=e.whosFirst;return r.a.createElement("main",{className:"app"},r.a.createElement("div",{className:"turnHorizon"},r.a.createElement("h2",null,"Czy mo\u017cesz obr\xf3ci\u0107 sw\xf3j telefon, lub rozci\u0105gn\u0105c przegl\u0105dark\u0119 horyzontalnie? Inaczej wygl\u0105da paskudnie.")),n?r.a.createElement(O,null):null,r.a.createElement(p,{team:t}),r.a.createElement(z,null),r.a.createElement(p,{team:a}))}}]),t}(n.Component),S=Object(d.b)(function(e){return{whosFirst:e.whosFirst,team1:e.team1,team2:e.team2,gameStarted:e.gameStarted,activeTeam:e.activeTeam,winner:e.winner,currentQuestion:e.currentQuestion}},function(e){return{handleWhosFirst:function(t,a){a&&(65===t.keyCode?e({type:"WHOS_FIRS",payload:"team1"}):76===t.keyCode&&e({type:"WHOS_FIRS",payload:"team2"}))},newQuestion:function(){return e({type:"NEW_QUESTION"})},handleNewWinner:function(t){return e({type:"NEW_WINNER",payload:t})},handleCheckFails:function(t){return e({type:"HANDLE_CHECK_FAILS",payload:t})}}})(C),T=a(10),A=a(4),W=a(1),q=[{id:1,question:"Europejskie panstwo wieksze od polski?",answers:[{id:1,name:"francja",points:33,correct:!1},{id:2,name:"wielka brytania",points:21,correct:!1},{id:3,name:"wlochy",points:16,correct:!1},{id:4,name:"niemcy",points:11,correct:!1}]},{id:2,question:"Jakie ciasto kojarzy sie z wizyta u babci?",answers:[{id:1,name:"szarlotka",points:45,correct:!1},{id:2,name:"sernik",points:30,correct:!1},{id:3,name:"makowiec",points:27,correct:!1}]},{id:3,question:"Jakie klawisze oprocz literowych znajduja si\u0119 na klawiaturze?",answers:[{id:1,name:"spacja",points:51,correct:!1},{id:2,name:"enter",points:38,correct:!1},{id:3,name:"shift",points:22,correct:!1},{id:4,name:"alt",points:19,correct:!1}]},{id:4,question:"Jak zabijamy czas podczas jazdy pociagiem?",answers:[{id:1,name:"czytamy",points:51,correct:!1},{id:2,name:"spimy",points:38,correct:!1},{id:3,name:"patrzymy przez okno",points:22,correct:!1},{id:4,name:"rozmyslamy",points:19,correct:!1},{id:5,name:"sluchamy muzyki",points:10,correct:!1}]},{id:5,question:"Co moze poprawic nasz nastroj?",answers:[{id:1,name:"muzyka",points:37,correct:!1},{id:2,name:"zakupy",points:29,correct:!1},{id:3,name:"pogoda",points:25,correct:!1},{id:4,name:"spacer",points:13,correct:!1},{id:5,name:"spotkanie",points:7,correct:!1}]},{id:6,question:"Czesc garderoby na litere S?",answers:[{id:1,name:"spodnie",points:34,correct:!1},{id:2,name:"sweter",points:33,correct:!1},{id:3,name:"sukienka",points:22,correct:!1},{id:4,name:"spodnica",points:19,correct:!1},{id:5,name:"skarpetka",points:12,correct:!1},{id:6,name:"szalik",points:6,correct:!1}]},{id:7,question:"Co zapada przed noca?",answers:[{id:1,name:"zmrok",points:40,correct:!1},{id:2,name:"zmierzch",points:31,correct:!1},{id:3,name:"wieczor",points:20,correct:!1}]},{id:8,question:"Wymien elementy dekoracji wnetrz?",answers:[{id:1,name:"zaslony",points:30,correct:!1},{id:2,name:"firanki",points:20,correct:!1},{id:3,name:"lampa",points:10,correct:!1},{id:4,name:"obraz",points:5,correct:!1}]}],_={currentQuestion:null,questions:q,team1:{name:"team1",points:0,fails:0},team2:{name:"team2",points:0,fails:0},gameStarted:!1,inputValue:"",activeTeam:"team1",winner:null,whosFirst:!1,surname1:"",surname2:""};a.d(t,"store",function(){return I});var I=Object(T.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WHOS_FIRS":return Object(W.a)({},e,{activeTeam:t.payload,whosFirst:!1});case"INPUT_CHANGE":return Object(W.a)({},e,Object(A.a)({},t.payload.name,t.payload.value));case"START_GAME":return Object(W.a)({},e,{team1:Object(W.a)({},e.team1,{name:e.surname1}),team2:Object(W.a)({},e.team2,{name:e.surname2}),whosFirst:!0,gameStarted:!0});case"NEW_QUESTION":var a=e.questions[Math.floor(Math.random()*e.questions.length)],n=q.filter(function(e){return e!==a});return Object(W.a)({},e,{whosFirst:e.gameStarted,currentQuestion:a,questions:n,team1:Object(W.a)({},e.team1,{fails:0}),team2:Object(W.a)({},e.team2,{fails:0})});case"CORRECT_ANSWERS":var r=e.activeTeam;return Object(W.a)({},e,Object(A.a)({inputValue:""},r,Object(W.a)({},e[r],{points:e[r].points+t.payload.answer[0].points})));case"ADD_FAILS":var i=e.activeTeam;return Object(W.a)({},e,Object(A.a)({inputValue:"",activeTeam:i},i,Object(W.a)({},e[i],{fails:e[i].fails+1})));case"HANDLE_CHECK_FAILS":var o=t.payload;return Object(W.a)({},e,Object(A.a)({activeTeam:o},o,Object(W.a)({},e[o],{fails:2})));case"NEW_WINNER":return Object(W.a)({},e,{winner:t.payload});default:return e}});o.a.render(r.a.createElement(d.a,{store:I},r.a.createElement(S,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cbba5da9.chunk.js.map