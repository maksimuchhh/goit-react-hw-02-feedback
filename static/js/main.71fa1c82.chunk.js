(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),r=c.n(a),s=c(9),i=c.n(s),o=(c(15),c(2)),j=c(8),b=c(3),d=c(4),l=c(6),h=c(5);var u=function(t){var e=t.good,c=t.bad,a=t.neutral,r=t.total,s=t.percentage;return Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Good:",e]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Neutral:",a]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Bad:",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Total:",r]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Postitive feedback:",s,"%"]})})]})},O=function(t){Object(l.a)(c,t);var e=Object(h.a)(c);function c(){return Object(b.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var t=this.props.feedbackAction;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{name:"good",onClick:t,children:"Good"}),Object(n.jsx)("button",{name:"neutral",onClick:t,children:"Neutral"}),Object(n.jsx)("button",{name:"bad",onClick:t,children:"Bad"})]})}}]),c}(a.Component);var x=function(t){var e=t.children,c=t.title;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:c}),e]})};var f=function(t){var e=t.message;return Object(n.jsx)("p",{children:e})},g=function(t){Object(l.a)(c,t);var e=Object(h.a)(c);function c(){var t;Object(b.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.feedbackAction=function(e){var c=e.target.name;t.setState((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(o.a)({},c,t[c]+1))}))},t}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{title:"Please leave feedback",children:Object(n.jsx)(O,{feedbackAction:this.feedbackAction})}),Object(n.jsx)(x,{title:"Statistics",children:this.state.good+this.state.neutral+this.state.bad!==0?Object(n.jsx)(u,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.good+this.state.neutral+this.state.bad,percentage:Math.floor(100*this.state.good/(this.state.good+this.state.neutral+this.state.bad))}):Object(n.jsx)(f,{message:"No feedback given"})})]})}}]),c}(a.Component);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.71fa1c82.chunk.js.map