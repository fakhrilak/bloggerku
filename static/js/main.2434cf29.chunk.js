(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/profile1.c59a793c.jpeg"},126:function(e,t,a){e.exports=a.p+"static/media/1.8ec80b68.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/2.f3d801b4.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/3.8e5ed114.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/4.4093bd26.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/you.720f7a67.jpeg"},134:function(e,t,a){e.exports=a(303)},139:function(e,t,a){},140:function(e,t,a){},144:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},180:function(e,t){},182:function(e,t){},197:function(e,t,a){},198:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),o=(a(139),a(9)),i=(a(140),a(7)),u=a(20),s=function(){return r.a.createElement("div",{style:{backgroundColor:"#3399ff",color:"black",textAlign:"center",height:100,bottom:0,width:"100%"}},r.a.createElement("p",null,"\xa9 2020 Zilog-Corporation | Make with \u2764\ufe0f  using ReactJs"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"Foother"},r.a.createElement("a",{href:"https://www.facebook.com/assyroh.kaffah/",target:"_blank"},r.a.createElement(i.a,{icon:u.a,style:{color:"black"}}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/FakhrilAK/",target:"_blank"},r.a.createElement(i.a,{icon:u.c,style:{color:"black"}}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/fakhrilak/",target:"_blank"},r.a.createElement(i.a,{icon:u.b,style:{color:"black"}}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/feed/my_videos/",target:"_blank"},r.a.createElement(i.a,{icon:u.d,style:{color:"black"}}))))))},m=(a(58),a(144),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("ul",{className:"Header"},r.a.createElement("li",{style:{float:"right"}},r.a.createElement("a",{href:"https://www.facebook.com/assyroh.kaffah/",target:"_blank"},r.a.createElement(i.a,{icon:u.a,style:{color:"black"}}))),r.a.createElement("li",{style:{float:"right"}},r.a.createElement("a",{href:"https://twitter.com/FakhrilAK/",target:"_blank"},r.a.createElement(i.a,{icon:u.c,style:{color:"black"}}))),r.a.createElement("li",{style:{float:"right"}},r.a.createElement("a",{href:"https://www.instagram.com/fakhrilak/",target:"_blank"},r.a.createElement(i.a,{icon:u.b,style:{color:"black"}}))),r.a.createElement("li",{style:{float:"right"}},r.a.createElement("a",{href:"https://www.youtube.com/feed/my_videos/",target:"_blank"},r.a.createElement(i.a,{icon:u.d,style:{color:"black"}})))))}),d=(a(80),a(8)),p=a(3),E=Object(p.b)((function(e){return{auths:e.auth}}),{})((function(e){e.loadUser;var t=e.Allcategory,a=e.loading,n=(e.auths.user,Object(d.f)()),l=t.filter((function(e){return e.id>1}));return a?r.a.createElement("div",null,"Loading...."):r.a.createElement("div",{className:"Grid-Home"},l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.img,onClick:function(){return n.push("/category/".concat(e.title))}})),r.a.createElement("div",{className:"Content-Grid-Home"},r.a.createElement("p",null,e.title),r.a.createElement("h5",null,e.text)))})))})),f=a(31),g=a.n(f),b=a(4),h=a.n(b),v=a(10),y=a(122),O=a.n(y).a.create({baseURL:"https://fakhrilak-bloggerku.herokuapp.com/api/bloggerku/"}),N=function(e){e?O.defaults.headers.common.Authorization="Bearer ".concat(e):delete O.defaults.headers.common.Authorization},k=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/category");case 3:a=e.sent,t({type:"GET_CATEGORY_SUCCESS",payload:a.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"GET_CATEGORY_FAIL",payload:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},S=Object(p.b)((function(e){return{categorys:e.category}}),{getCategory:k})((function(e){var t=e.getCategory,a=e.categorys,l=a.Allcategory,c=a.loading;Object(n.useEffect)((function(){t()}),[]);var o=Object(d.f)();return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-pict"},r.a.createElement("img",{src:g.a})),r.a.createElement(m,null),r.a.createElement("div",{className:"Home-content"},r.a.createElement("div",{className:"Home-Left"},r.a.createElement("p",{className:"p"},"Content"),r.a.createElement("div",{className:"Homecontent"},r.a.createElement("div",{style:{paddingRight:20}},r.a.createElement(E,{onClick:function(){o.push("/bloggerku/category")},Allcategory:l,loading:c}))))),r.a.createElement("div",{className:"Home-Foother"}))})),C=(a(165),a(123)),j=a.n(C),T=a(13),w=function(){return r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"profile-desc"},r.a.createElement("div",{className:"profile-data"},r.a.createElement("h2",null,"Profile")),r.a.createElement("div",{className:"profile-data"},r.a.createElement("div",{className:"profile-icon"},r.a.createElement(i.a,{icon:T.h})),r.a.createElement("div",{className:"profile-details"},r.a.createElement("span",null,"Fullname"),r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Fakhril AK"))),r.a.createElement("div",{className:"profile-data"},r.a.createElement("div",{className:"profile-icon"},r.a.createElement(i.a,{icon:T.c})),r.a.createElement("div",{className:"profile-details"},r.a.createElement("span",null,"Email"),r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"fakhrilak23@gmail.com"))),r.a.createElement("div",{className:"profile-data"},r.a.createElement("div",{className:"profile-icon"},r.a.createElement(i.a,{icon:T.f})),r.a.createElement("div",{className:"profile-details"},r.a.createElement("span",null,"Gender"),r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Male"))),r.a.createElement("div",{className:"profile-data"},r.a.createElement("div",{className:"profile-icon"},r.a.createElement(i.a,{icon:T.e})),r.a.createElement("div",{className:"profile-details"},r.a.createElement("span",null,"Phone"),r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"081299243859"))),r.a.createElement("div",{className:"profile-data"},r.a.createElement("div",{className:"profile-icon"},r.a.createElement(i.a,{icon:T.d})),r.a.createElement("div",{className:"profile-details"},r.a.createElement("span",null,"Address"),r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Bojonegoro")))),r.a.createElement("div",{className:"profile-img"},r.a.createElement("img",{src:j.a,alt:"avatar",className:"profile-avatar"}))))},_=(a(166),a(6)),x=a(78),A=a.n(x),L=(a(167),function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&N(localStorage.token),e.prev=1,e.next=4,O.get("/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),R=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_PROFILE"}),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=Object(p.b)((function(e){return{auth:e.auth}}),{handleLogout:R})((function(e){var t=e.handleLogout,a=e.auth,n=a.isAuthenticated,l=a.user;return null===l?null:r.a.createElement("div",null,n&&r.a.createElement("div",{className:"dropdown"},r.a.createElement("li",null,r.a.createElement(i.a,{icon:T.b,style:{color:"black"}})),r.a.createElement("div",{className:"dropdown-content"},1==l.role&&r.a.createElement(_.b,{to:"/bloggerku/private"},"My-Love"),r.a.createElement(_.b,{to:"/bloggerku/write"},"Write"),r.a.createElement(_.b,{to:"/bloggerku/mypost"},"My Post"),1==l.role&&r.a.createElement(_.b,{to:"/bloggerku/users"},"All User"),1==l.role&&r.a.createElement(_.b,{to:"/bloggerku/add-category"},"Add Category"),n&&r.a.createElement("a",{onClick:function(){t()}},"Logout"))))})),U=Object(p.b)((function(e){return{auth:e.auth}}),{handleLogout:R})((function(e){e.handleLogout,e.register;var t=e.login,a=e.auth,n=a.isAuthenticated;a.user;return r.a.createElement("div",{style:{position:"fixed",width:"100%"}},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku"},r.a.createElement("img",{src:A.a,style:{width:40}}))),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku/about",style:{paddingTop:30,fontWeight:"bolder"}},"About")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku/lastupdate",style:{paddingTop:30,fontWeight:"bolder"}},"Last Update")),n&&r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku/private",style:{paddingTop:30}},r.a.createElement(I,null))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku"},r.a.createElement("img",{src:A.a,style:{width:40}}))),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku/about",style:{paddingTop:30,fontWeight:"bolder"}},"About")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bloggerku/lastupdate",style:{paddingTop:30,fontWeight:"bolder"}},"Last Update")),!n&&r.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},r.a.createElement("button",{onClick:t},"Login")))))})),G=a(25),F=a(124),H=a.n(F),D=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/content");case 3:a=e.sent,t({type:"GET_CONTENT_SUCCESS",payload:a.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"GET_CONTENT_FAIL",payload:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},P=Object(p.b)((function(e){return{contents:e.content,auths:e.auth}}),{getContent:D,deletContent:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.delete("/content/".concat(e));case 3:n=t.sent,a({type:"DELETE_CONTENT_SUCCESS",payload:n.data.data}),a(D()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"DELETE_CONTENT_FAIL",payload:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.getContent,l=e.deletContent,c=e.contents,u=c.Allcontent,s=c.loading,p=e.auths.user;Object(n.useEffect)((function(){a()}),[]);var E=Object(n.useState)(!1),f=Object(o.a)(E,2),b=f[0],h=f[1],v=Object(G.a)(u).filter((function(e){return e.categoryId==="".concat(t.params.id)})),y=Object(d.f)();return console.log(t.params.id),null===u||s?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-pict"},r.a.createElement("img",{src:g.a})),r.a.createElement(m,null),r.a.createElement("div",{className:"Home-content"},r.a.createElement("div",{className:"Home-Left"},r.a.createElement("div",null,1===p.role&&r.a.createElement("p",{className:"p",onClick:function(){return h(!b)}},t.params.id),1!==p.role&&r.a.createElement("p",{className:"p"},t.params.id),v.map((function(e){return r.a.createElement("div",null,b&&r.a.createElement("h5",{onClick:function(){return l(e.id)}},r.a.createElement(i.a,{icon:T.g,style:{color:"black",marginRight:20,paddingLeft:20}}),e.title),!b&&r.a.createElement("h5",{style:{paddingLeft:20,cursor:"pointer",color:"black"},onClick:function(){return y.push("/bloggerku/detail/".concat(e.title))}},r.a.createElement(i.a,{icon:T.a,style:{color:"black",marginRight:20}})," ",e.title))}))))),r.a.createElement("div",{className:"Home-Foother"}))})),Y=a(125),W=a.n(Y),M=(a(197),Object(p.b)((function(e){return{contents:e.content}}),{getContent:D})((function(e){var t=e.match,a=e.getContent,l=e.contents,c=l.Allcontent,o=l.loading;Object(n.useEffect)((function(){a()}),[]);var i=Object(G.a)(c).filter((function(e){return e.title===t.params.title}));return o?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"Detail"},i.map((function(e){return r.a.createElement("div",{style:{width:"auto"},className:"Judul"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,e.title)))})),r.a.createElement("div",{style:{paddingTop:20}},i.map((function(e){return r.a.createElement("div",{className:"Container"},W()(e.body))})),i.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"date"},r.a.createElement("div",null,r.a.createElement("h4",null,e.user.fullname)),r.a.createElement("div",{className:"datacontent"},r.a.createElement("button",null,e.date))))}))))}))),B=a(16),J=a(1),z=(a(198),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"modal-wrapper",style:{transform:e.show?"translateY(0vh)":"translateY(-100vh)",opacity:e.show?"1":"0"}},r.a.createElement("div",{className:"modal-body"},e.children)))}),K=Object(p.b)((function(e){return{auth:e.auth}}),{handleLogin:function(e,t,a){return function(){var n=Object(v.a)(h.a.mark((function n(r){var l,c,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,O.post("/login",c,l);case 5:o=n.sent,r({type:"LOGIN_SUCCESS",payload:o.data.data}),r(L()),a(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),r({type:"LOGIN_FAIL",payload:"error"});case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t,a=e.HandleLogin,l=e.handleLogin,c=e.Register,i=e.Loginaksen,u=e.auth,s=u.error,m=(u.loading,Object(n.useState)({email:"",password:""})),d=Object(o.a)(m,2),p=d[0],E=d[1],f=p.email,g=p.password,b=function(e){E(Object(J.a)(Object(J.a)({},p),{},Object(B.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,a?r.a.createElement("div",{onClick:function(){return i()},className:"back-drop"}):null,r.a.createElement(z,{className:"modal",show:a},r.a.createElement("h1",null,"LOGIN"),r.a.createElement("p",null,s),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),l(f,g,i)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Email",value:f,name:"email",onChange:function(e){return b(e)},className:"custom-input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",(t={type:"password",placeholder:"Password",value:g,name:"password",onChange:function(e){return b(e)}},Object(B.a)(t,"placeholder","Password"),Object(B.a)(t,"className","custom-input"),t))),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"LOGIN"))),r.a.createElement("p",{onClick:function(){return c()}},"Dont Have Account? Click Me")))})),q=Object(p.b)((function(e){return{auth:e.auth}}),{handleRegister:function(e,t,a,n,r,l){return function(){var c=Object(v.a)(h.a.mark((function c(o){var i,u,s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i={headers:{"Content-Type":"application/json"}},u=JSON.stringify({email:e,password:t,fullname:a,phone:n,username:r,role:2}),c.prev=2,c.next=5,O.post("/register",u,i);case 5:s=c.sent,o({type:"REGISTER_SUCCESS",payload:s.data.data}),o(L()),l(),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(2),o({type:"REGISTER_FAIL",payload:c.t0.data.data});case 14:case"end":return c.stop()}}),c,null,[[2,11]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.handleRegister,a=e.HandleRegister,l=e.Register,c=e.Login,i=Object(n.useState)({email:"",password:"",fullname:"",phone:"",username:""}),u=Object(o.a)(i,2),s=u[0],m=u[1],d=function(e){m(Object(J.a)(Object(J.a)({},s),{},Object(B.a)({},e.target.name,e.target.value)))},p=s.email,E=s.password,f=s.fullname,g=s.phone,b=s.username;return r.a.createElement("div",null,a?r.a.createElement("div",{onClick:function(){return l()},className:"back-drop"}):null,r.a.createElement(z,{className:"modal",show:a},r.a.createElement("h1",null,"REGISTER"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,E,f,g,b,l)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Full Name",className:"custom-input",value:f,name:"fullname",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email",className:"custom-input",value:p,name:"email",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",className:"custom-input",value:E,name:"password",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"User name",className:"custom-input",value:b,name:"username",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Phone",className:"custom-input",value:g,name:"phone",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"REGISTER"))),r.a.createElement("p",{onClick:function(){return c()}},"Have Account? Click Me")))})),V=a(126),Z=a.n(V),$=a(127),Q=a.n($),X=a(128),ee=a.n(X),te=a(129),ae=a.n(te),ne=a(130),re=(a.n(ne).a,Z.a,Q.a,ee.a,ae.a,function(e){var t=e.category,a=Object(d.f)();return r.a.createElement("div",{className:"Grid-Home"},t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.img,onClick:function(){return a.push("/category/".concat(e.title))}})),r.a.createElement("div",{className:"Content-Grid-Home"},r.a.createElement("p",null,e.title),r.a.createElement("h5",null,e.text),r.a.createElement("h5",null,e.text2)))})))}),le=Object(p.b)((function(e){return{categorys:e.category}}),{getCategory:k})((function(e){var t=e.getCategory,a=e.categorys,l=a.Allcategory;a.loading;Object(n.useEffect)((function(){t()}),[]);var c=Object(d.f)(),o=l.filter((function(e){return 1==e.id}));return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-pict"},r.a.createElement("img",{src:g.a})),r.a.createElement(m,null),r.a.createElement("div",{className:"Home-content"},r.a.createElement("div",{className:"Home-Left"},r.a.createElement("p",{className:"p"},"Content"),r.a.createElement("div",{className:"Homecontent"},r.a.createElement("div",{style:{paddingRight:20}},r.a.createElement(re,{onClick:function(){c.push("/bloggerku/category")},category:o}))))),r.a.createElement("div",{className:"Home-Foother"}))})),ce=a(131),oe=a.n(ce),ie=(a(298),a(299),a(300),Object(p.b)((function(e){return{categorys:e.category,auths:e.auth}}),{getCategory:k,postContent:function(e,t,a,n){return function(){var r=Object(v.a)(h.a.mark((function r(l){var c,o,i,u,s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=H()(),o=c.format("YYYY-MM-DD"),i={headers:{"Content-Type":"application/json"}},u=JSON.stringify({userId:e,categoryId:n,title:t,body:a,date:o}),r.prev=4,r.next=7,O.post("/content",u,i);case 7:s=r.sent,l({type:"POST_CONTENT_SUCCESS",payload:s.data.data}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(4),l({type:"POST_CONTENT_FAIL",payload:r.t0});case 14:case"end":return r.stop()}}),r,null,[[4,11]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.postContent,a=e.auths.user,l=e.getCategory,c=e.categorys,i=c.Allcategory,u=c.loading;Object(n.useEffect)((function(){l()}),[]);var s=Object(n.useState)(""),m=Object(o.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)({title:"",categoryId:""}),f=Object(o.a)(E,2),g=f[0],b=f[1],h=null;if(null===a.id)h=Object(G.a)(i).filter((function(e){return e.id>1}));else if(1===a.role)h=Object(G.a)(i);else{h=Object(G.a)(i).filter((function(e){return e.id>1}))}var v=g.title,y=g.categoryId,O=function(e){b(Object(J.a)(Object(J.a)({},g),{},Object(B.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingTop:100,paddingBottom:100}},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t("".concat(a.id),v,d,y),b({title:"",categoryId:""})}(e)}},r.a.createElement("div",{className:"editor-wrapper"},r.a.createElement("div",{className:"form-editortext"},r.a.createElement("input",{type:"text",placeholder:"Title",value:v,name:"title",onChange:function(e){return O(e)},className:"input-editortext"})),r.a.createElement("div",{className:"form-editortext"},r.a.createElement("select",{className:"custom-select",name:"categoryId",onChange:function(e){O(e)}},r.a.createElement("option",{value:y},"Category"),u?r.a.createElement("option",null,"WIAT FOR LOADING"):h.map((function(e){return r.a.createElement("option",{value:e.title,key:e.id},e.title)})))),r.a.createElement("div",{className:"post-text"},r.a.createElement(oe.a,{theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},formats:["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],placeholder:"Write your story here",onChange:function(e){return p(e)}})),r.a.createElement("div",{className:"btn-editortext"},r.a.createElement("button",null,"POST"))))))}))),ue=a(24),se=a(132),me=a(133),de={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},pe={Allcategory:[],loading:!0,error:null},Ee={Allcontent:[],subcategory:[],loading:!0,error:null},fe={Alluser:[],loading:!0,error:null,deleteduser:null},ge=Object(ue.combineReducers)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_CATEGORY_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{Allcategory:n,loading:!1,error:null});case"GET_CATEGORY_FAIL":return Object(J.a)(Object(J.a)({},e),{},{Allcategory:[],loading:!1,error:n});case"POST_CATEGORY_SUCCESS":case"POST_CATEGORY_FAIL":default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(J.a)(Object(J.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(J.a)(Object(J.a)({},e),{},{isAuthenticated:!0,loading:!1,error:null});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":return Object(J.a)(Object(J.a)({},e),{},{error:n});case"LOGOUT":return localStorage.removeItem("token"),Object(J.a)(Object(J.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_CONTENT_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{Allcontent:n,loading:!1,error:null});case"GET_CONTENT_FAIL":return Object(J.a)(Object(J.a)({},e),{},{Allcontent:[],loading:!1,error:n});case"GET_SUBCATEGORY_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{subcategory:n,loading:!1,error:null});case"POST_SUBCATEGORY_SUCCESS":case"POST_SUBCATEGORY_FAIL":case"POST_CONTENT_SUCCESS":case"POST_CONTENT_FAIL":case"DELETE_CONTENT_FAIL":case"DELETE_CONTENT_SUCCESS":default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{Alluser:n,error:null,loading:!1});case"GET_USER_FAIL":return Object(J.a)(Object(J.a)({},e),{},{Alluser:[],error:n,loading:!1});case"DELET_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{deleteduser:n,error:null,loading:!1});case"DELET_USER_FAIL":return Object(J.a)(Object(J.a)({},e),{},{error:n,deleteduser:null,loading:!1});default:return e}}}),be=[me.a],he=Object(ue.createStore)(ge,{},Object(se.composeWithDevTools)(ue.applyMiddleware.apply(void 0,be))),ve=a(56),ye=Object(p.b)((function(e){return{auth:e.auth}}),{})((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,l=a.user,c=a.loading,o=Object(ve.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},o,{render:function(e){return null===n||c?r.a.createElement(d.a,{to:"/bloggerku"}):n&&1==l.role?r.a.createElement(t,e):(n&&l.role,r.a.createElement(d.a,{to:"/bloggerku"}))}}))})),Oe=Object(p.b)((function(e){return{auth:e.auth}}),{})((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,l=a.loading,c=Object(ve.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},c,{render:function(e){return null===n||l?r.a.createElement(d.a,{to:"/bloggerku"}):n?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/bloggerku"})}}))})),Ne=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingTop:200,textAlign:"center",paddingBottom:200}},r.a.createElement("h1",null,"THANKS FOR VISITING ME..."),r.a.createElement("h1",null,"WAIT FOR DEVELOPMENT")))},ke=(a(301),Object(p.b)((function(e){return{auth:e.auth}}),{postCategory:function(e,t,a){return function(){var n=Object(v.a)(h.a.mark((function n(r){var l,c,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={headers:{"Content-Type":"application/json"}},c=JSON.stringify({title:e,img:t,text:a}),n.prev=2,n.next=5,O.post("/category",c,l);case 5:o=n.sent,r({type:"POST_CATEGORY_SUCCESS",payload:o.data.data}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0),r({type:"POST_CATEGORY_FAIL",payload:n.t0});case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.postCategory,a=e.auth,l=a.loading,c=(a.error,Object(n.useState)({title:"",img:"",text:""})),i=Object(o.a)(c,2),u=i[0],s=i[1],m=u.title,d=u.img,p=u.text,E=function(e){s(Object(J.a)(Object(J.a)({},u),{},Object(B.a)({},e.target.name,e.target.value)))};return l?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("div",{className:"container-addcategory"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(m,d,p),s({title:"",img:"",text:""})}(e)}},r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",placeholder:"Title",value:m,name:"title",onChange:function(e){return E(e)},className:"input"})),r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",placeholder:"Url Gambar",value:d,name:"img",onChange:function(e){return E(e)},className:"input"})),r.a.createElement("div",{className:"form-input"},r.a.createElement("textarea",{type:"text",placeholder:"Caption",value:p,name:"text",onChange:function(e){return E(e)},className:"text-input"})),r.a.createElement("div",{className:"form-input"},r.a.createElement("button",{className:"btn-category"},"POST")))))}))),Se=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/user");case 3:a=e.sent,t({type:"GET_USER_SUCCESS",payload:a.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"GET_USER_FAIL",payload:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},Ce=(a(302),Object(p.b)((function(e){return{users:e.user}}),{getUsers:Se,deletUser:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.delete("/user/".concat(e));case 3:n=t.sent,a({type:"DELET_USER_SUCCESS",payload:n.data.data}),a(Se()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"DELET_USER_FAIL",payload:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getUsers,a=e.deletUser,l=e.users,c=l.Alluser,u=l.loading,s=r.a.useState(!1),m=Object(o.a)(s,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){t()}),[]),u?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"alluser"},r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){return p(!d)}},"ALL USERS")),r.a.createElement("div",{className:"grid-card"},null===c||u?r.a.createElement("div",null,"Loading..."):c.map((function(e){return r.a.createElement("div",{className:"content-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h3",null,e.fullname),d&&r.a.createElement(i.a,{icon:T.g,style:{color:"black",paddingLeft:70,paddingTop:22},onClick:function(){return a(e.id)}})),r.a.createElement("p",null,e.email),r.a.createElement("p",null,e.username),r.a.createElement("p",null,e.role)))}))))})));localStorage.token&&N(localStorage.token);var je=function(){Object(n.useEffect)((function(){he.dispatch(L())}),[]);var e=Object(n.useState)("0"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),u=i[0],m=i[1],E=Object(n.useState)(!1),f=Object(o.a)(E,2),g=f[0],b=f[1],h=function(){b(!g),m(!1)},v=function(){m(!u),b(!1)};return console.log(a,"this is Lock"),r.a.createElement(p.a,{store:he},r.a.createElement("div",{className:"App"},r.a.createElement(_.a,null,r.a.createElement(U,{register:h,login:v,Lock:a}),r.a.createElement("div",{className:"page"},r.a.createElement(d.b,{exact:!0,path:"/bloggerku",component:S}),r.a.createElement(d.b,{exact:!0,path:"/bloggerku/lastupdate",component:Ne}),r.a.createElement(d.b,{exact:!0,path:"/bloggerku/mypost",component:Ne}),r.a.createElement(ye,{exact:!0,path:"/bloggerku/private",component:le}),r.a.createElement(ye,{exact:!0,path:"/bloggerku/users",component:Ce}),r.a.createElement(ye,{exact:!0,path:"/bloggerku/add-category",component:ke}),r.a.createElement(Oe,{exact:!0,path:"/bloggerku/write",component:ie}),r.a.createElement(Oe,{exact:!0,path:"/bloggerku/category/:id",component:P}),r.a.createElement(d.b,{exact:!0,path:"/bloggerku/about",component:w}),r.a.createElement(Oe,{exact:!0,path:"/bloggerku/detail/:title",component:M})),r.a.createElement("div",{className:"foother"},u&&r.a.createElement(K,{HandleLogin:u,setHandleLogin:m,HandleAdmin:function(e,t){l("loveyou"==e&&"iwilltrytofixyou"==t?"1":"2")},Loginaksen:v,Register:h}),g&&r.a.createElement(q,{HandleRegister:g,setHandleRegister:b,Register:h,Login:v}),r.a.createElement(s,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports=a.p+"static/media/header.bf1864e9.png"},58:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/logo.c1cc3d53.png"},80:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.2434cf29.chunk.js.map