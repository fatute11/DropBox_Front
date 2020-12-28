(this.webpackJsonpdrop_front=this.webpackJsonpdrop_front||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),r=a(51),c=a.n(r),i=a(11),o=a(4),l=a(5),d=a(7),h=a(9),u=a(8),j=a(16),m=(a(62),a(63),a(14)),b=a.n(m),g="http://localhost:8020/api/auth/",O=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"login",value:function(e,t){return b.a.post(g+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return b.a.post(g+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),v=a(23),f=a.n(v),p=a(17),x=a.n(p),N=a(24),k=a.n(N),w=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleLogin=s.handleLogin.bind(Object(d.a)(s)),s.onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.state={username:"",password:"",loading:!1,message:""},s}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?O.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(f.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[w]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)(x.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[w]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(s.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(s.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(s.jsx)(k.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),a}(n.Component),C=a(52),S=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},U=function(e){if(!Object(C.isEmail)(e))return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},B=function(e){if(e.length<3||e.length>20)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},P=function(e){if(e.length<6||e.length>40)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleRegister=s.handleRegister.bind(Object(d.a)(s)),s.onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.state={username:"",email:"",password:"",successful:!1,message:""},s}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&O.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(f.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[S,B]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[S,U]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)(x.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[S,P]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(s.jsx)(k.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),a}(n.Component);function E(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var A="http://localhost:8020/api/test/",M=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getPublicContent",value:function(){return b.a.get(A+"all")}},{key:"getUserBoard",value:function(){return b.a.get(A+"user",{headers:E()})}},{key:"getModeratorBoard",value:function(){return b.a.get(A+"mod",{headers:E()})}},{key:"getAdminBoard",value:function(){return b.a.get(A+"admin",{headers:E()})}}]),e}()),L=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={content:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:this.state.content})})})}}]),a}(n.Component),R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={currentUser:O.getCurrentUser()},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.currentUser;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsxs)("h3",{children:[Object(s.jsx)("strong",{children:e.username})," Profile"]})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(s.jsx)("strong",{children:"Authorities:"}),Object(s.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))})]})}}]),a}(n.Component),_=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={content:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:this.state.content})})})}}]),a}(n.Component),D=a(53),I=a.n(D),F=a(54),J=a.n(F),q=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).logOut=s.logOut.bind(Object(d.a)(s)),s.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){O.logout()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showModeratorBoard,n=e.showAdminBoard;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(s.jsx)(i.b,{to:"/",className:"navbar-brand",children:"bezKoder"}),Object(s.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/home",className:"nav-link",children:"Home"})}),a&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),n&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(s.jsx)("div",{className:"container mt-3",children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:["/","/home"],component:L}),Object(s.jsx)(j.a,{exact:!0,path:"/login",component:y}),Object(s.jsx)(j.a,{exact:!0,path:"/register",component:T}),Object(s.jsx)(j.a,{exact:!0,path:"/profile",component:R}),Object(s.jsx)(j.a,{path:"/user",component:_}),Object(s.jsx)(j.a,{path:"/mod",component:I.a}),Object(s.jsx)(j.a,{path:"/admin",component:J.a})]})})]})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(i.a,{children:Object(s.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t){},54:function(e,t){},63:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.2e106c4f.chunk.js.map