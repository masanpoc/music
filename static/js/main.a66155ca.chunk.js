(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(7),i=n.n(a),o=(n(13),n(2)),h=n(3),l=n(5),u=n(4),j=function(e){return Object(r.jsxs)("div",{className:"tc shadow-2 grow br3 near-black bg-lightest-blue pa3 ma2",style:{maxWidth:"300px",justifySelf:"center"},children:[Object(r.jsx)("img",{alt:"album",src:"/music"+e.reference}),Object(r.jsxs)("div",{className:"o-90 system-sans-serif",children:[Object(r.jsx)("h1",{children:e.author}),Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.year})]})]})},d=function(e){var t=e.Items;return Object(r.jsx)("div",{className:"singles",children:t.map((function(e,n){return Object(r.jsx)(j,{reference:t[n].reference,title:t[n].title,author:t[n].author,year:t[n].year},t[n].author.toString())}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"tc searchbox",children:Object(r.jsx)("input",{type:"search",placeholder:"search song",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{height:"80vh",padding:"3em 10%",overflowY:"scroll",borderTop:"5px solid black"},children:e.children})},m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"There was an error. Sorry, we are trying to fix the code."}):this.props.children}}]),n}(c.Component),O=(n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={Items:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/masanpoc/music/albums").then((function(e){return e.json()})).then((function(t){return e.setState({Items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Items,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"elements",children:[Object(r.jsx)("h1",{className:"tc header",children:"Welcome"}),Object(r.jsx)(b,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(m,{children:Object(r.jsx)(d,{Items:c})})})]}):Object(r.jsx)("h1",{className:"tc header",children:"Loading"})}}]),n}(c.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.a66155ca.chunk.js.map