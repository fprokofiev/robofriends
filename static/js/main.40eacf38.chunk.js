(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(13),a(1)),s=a(2),i=a(4),u=a(3),h=a(5),m=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search User",onChange:t}))},d=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:a,src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},f=function(e){var t=e.users;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(d,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})})))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops! That's not good."):this.props.children}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}}]),t}(n.Component),b=(a(14),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={users:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.users,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"tc"},r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"f2"},"RoboFriends"))),r.a.createElement(m,{searchChange:this.onSearchChange})),r.a.createElement("main",{className:"tc"},r.a.createElement(E,null,r.a.createElement(p,null,r.a.createElement(f,{users:n}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"tc"},"Loading"))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.40eacf38.chunk.js.map