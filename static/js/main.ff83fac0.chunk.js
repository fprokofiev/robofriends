(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(4),c=n.n(s),o=n(8),i=n(2),l=n(17),u=n(18),h=(n(28),n(5)),E=n(6),d=n(9),m=n(7),p=n(10),g=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search User",onChange:t}))},f=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:n,src:"https://robohash.org/".concat(t,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},b=function(e){var t=e.users;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(f,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},S=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops! That's not good."):this.props.children}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}}]),t}(r.Component),O=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.users,s=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"tc"},"Loading")):a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"tc"},a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement("h1",{className:"f2"},"RoboFriends"))),a.a.createElement(g,{searchChange:n})),a.a.createElement("main",{className:"tc"},a.a.createElement(S,null,a.a.createElement(v,null,a.a.createElement(b,{users:c})))))}},{key:"componentDidMount",value:function(){this.props.onRequestUsers()}}]),t}(r.Component)),U=Object(o.b)((function(e){return{searchField:e.searchUsers.searchField,users:e.requestUsers.users,isPending:e.requestUsers.isPending,error:e.requestUsers.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestUsers:function(){return e((function(e){e({type:"REQUEST_USERS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_USERS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_USERS_FAILED",payload:t})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},_={isPending:!1,users:[],error:""},j=(n(30),Object(l.createLogger)()),C=Object(i.c)({searchUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_USERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_USERS_SUCCESS":return Object.assign({},e,{users:t.payload,isPending:!1});case"REQUEST_USERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,R=Object(i.e)(C,w(Object(i.a)(u.a,j)));c.a.render(a.a.createElement(o.a,{store:R},a.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ff83fac0.chunk.js.map