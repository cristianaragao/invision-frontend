(this.webpackJsonpinvision=this.webpackJsonpinvision||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},104:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(27),c=n.n(s),i=(n(100),n(101),n(34)),o=n(12),l=n(15),u=n.n(l),d=n(30),p=n(11),j=n(19),m=(n(61),n(171)),b={user:{},logged:!1,signIn:function(e){var t=this;return Object(d.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e,t.logged=!0,setTimeout(e,100);case 3:case"end":return n.stop()}}),n)})))()},signOut:function(e){var t=this;return Object(d.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user={},t.logged=!1,setTimeout(e,100);case 3:case"end":return n.stop()}}),n)})))()}},h=n(165),g=n(172),x=n(173),O="#FFFFFF 0% 0% no-repeat padding-box",f="#A9C5BA",v={error:{color:"red",borderColor:"red"},normal:{color:"black",borderColor:"black"},label:{textAlign:"right",height:"3px",marginTop:"5px",color:"red",font:"normal normal normal 14px/18px Muli"},labelField:{marginTop:"20px",color:"#707070",font:"normal normal normal 14px/18px Muli"}},y={registerContainer:{height:"100vh",background:O,display:"flex",flexDirection:"row"},contentCarousel:{background:f,width:"50%"},contentSignin:{width:"50%"}},w={registerContainer:{background:O,display:"flex",flexDirection:"column"},contentCarousel:{background:f,width:"100%"},content:{width:"100%"}},k=n(2);function I(e){var t=e.error,n=e.id,a=e.placeholder,s=e.value,c=e.onChange,i=e.type,o=n.split("-");return Object(k.jsxs)(r.Fragment,{children:[Object(k.jsx)("label",{style:v.labelField,children:a}),Object(k.jsx)("input",{style:t===o[1]?v.error:v.normal,id:n,type:i,placeholder:a,value:s,onChange:c}),t===o[1]&&""===s?Object(k.jsx)("label",{style:v.label,children:"This field cannot be empty!"}):Object(k.jsx)("label",{style:v.label})]})}n(104);var N,C=n(77),S=n.n(C).a.create({baseURL:"http://localhost:7000"}),E=n(45),F=n.p+"static/media/Data.3b09a15d.png";function B(){var e=Object(r.useState)({open:!1,text:"Ol\xe1",type:"success"}),t=Object(j.a)(e,2),n=t[0],a=t[1],s=n.text,c=n.vertical,i=n.horizontal,o=n.open,l=n.type;Object(r.useEffect)((function(){N=function(e){var t=e.msg,n=e.tp;a({open:!0,text:t,type:n})}}));var u=function(){a({open:!1,text:"",type:"error"})};function d(e){return Object(k.jsx)(x.a,Object(p.a)({elevation:6,variant:"filled"},e))}return Object(k.jsx)(g.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,open:o,onClose:u,children:Object(k.jsx)(d,{onClose:u,severity:l,children:s})},c+i)}function T(e){var t=e.msg,n=e.tp;N({msg:t,tp:n})}var A=function(e,t){t.dispatch;var n=Object(r.useState)({open:!1,message:"",type:"",vertical:"top",horizontal:"center"}),a=Object(j.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(window.innerWidth>1300?y:w),l=Object(j.a)(i,2),O=l[0],f=l[1],v=s.text,N=s.vertical,C=s.horizontal,B=s.open,A=s.type,z=Object(r.useState)(""),M=Object(j.a)(z,2),L=M[0],P=M[1],D=Object(r.useState)(""),W=Object(j.a)(D,2),G=W[0],_=W[1],U=Object(r.useState)(""),R=Object(j.a)(U,2),H=R[0],J=R[1],Q=Object(o.g)();Object(r.useEffect)((function(){f(window.innerWidth>1300?y:w)}),[]);var q=[{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."}];function K(e){return Object(k.jsx)(x.a,Object(p.a)({elevation:6,variant:"filled"},e))}function V(){c(Object(p.a)(Object(p.a)({},s),{},{open:!1}))}function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ft.Qt,r={email:n,password:"",account_google:!0},e.prev=2,e.next=5,S.post("signin",r);case 5:(a=e.sent).data.logged?(T({msg:"Logged in!",tp:"success"}),b.signIn(a.data.user),Q.push("/home")):T({msg:"User without account!",tp:"error"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),T({msg:"Server off.",tp:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function Z(){return(Z=Object(d.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=L.split("@"),""!==L){e.next=6;break}return J("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 6:if(!(n.length<=1)){e.next=11;break}return T({msg:"Invalid email.",tp:"error"}),J("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 11:if(!(n[1].split(".").length<=1)){e.next=17;break}return T({msg:"Invalid email.",tp:"error"}),J("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 17:if(""!==G){e.next=21;break}return J("password"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 21:return r={email:L,password:G},e.prev=22,e.next=25,S.post("signin",r);case 25:(a=e.sent).data.logged?(T({msg:"Logged in!",tp:"success"}),b.signIn(a.data.user),Q.push("/home")):T({msg:"Email or Password is incorrect!",tp:"error"}),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(22),T({msg:"Server off.",tp:"error"});case 32:case"end":return e.stop()}}),e,null,[[22,29]])})))).apply(this,arguments)}return Object(k.jsxs)("div",{className:"register-container",style:O.registerContainer,children:[Object(k.jsx)(g.a,{anchorOrigin:{vertical:N,horizontal:C},autoHideDuration:3e3,open:B,onClose:V,children:Object(k.jsx)(K,{onClose:V,severity:A,children:v})},N+C),Object(k.jsx)("div",{className:"content-carousel",style:O.contentCarousel,children:Object(k.jsx)(m.a,{className:"caurosel",autoplay:!0,children:q.map((function(e,t){return Object(k.jsxs)("div",{className:"div",children:[Object(k.jsx)("img",{width:window.innerWidth<=450?"350px":{},src:e.src,alt:e.alt}),Object(k.jsxs)("section",{className:"section",style:window.innerWidth<=411?{width:"350px"}:{width:"100%"},children:[Object(k.jsx)("h3",{className:"h3",children:e.h3}),Object(k.jsx)("p",{className:"p",children:e.p})]})]},t)}))})}),Object(k.jsxs)("div",{className:"content-signin",style:O.content,children:[Object(k.jsx)("h1",{children:"Invision"}),Object(k.jsxs)("div",{className:"forms",children:[Object(k.jsx)("section",{children:Object(k.jsx)("h2",{children:"Welcome to Invision"})}),Object(k.jsxs)("form",{onSubmit:function(e){return Z.apply(this,arguments)},children:[Object(k.jsx)(I,{id:"input-email",error:H,type:"email",placeholder:"Users name or Email",value:L,onChange:function(e){P(e.target.value),J("")}}),Object(k.jsx)(I,{id:"input-password",error:H,type:"password",placeholder:"Password",value:G,onChange:function(e){_(e.target.value),J("")}}),Object(k.jsx)("a",{href:"/signin",children:"Forgot password?"}),Object(k.jsx)("button",{className:"button",type:"submit",children:"Sign In"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(h.a,{className:"hr"}),Object(k.jsx)("p",{children:"Or"}),Object(k.jsx)(h.a,{className:"hr"})]}),Object(k.jsx)(E.GoogleLogin,{clientId:"444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com",className:"btnGoogle",onSuccess:X,onFailure:X,cookiePolicy:"single_host_origin",children:Object(k.jsx)("p",{children:"Sign in with Google"})}),Object(k.jsx)("p",{children:Object(k.jsxs)("a",{href:"/signup",children:["New ",Object(k.jsx)("b",{children:"Invision"}),"? ",Object(k.jsx)("u",{children:"Create Account"})]})})]})]})]})};n(141);function z(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(j.a)(s,2),i=c[0],l=c[1],b=Object(r.useState)(""),O=Object(j.a)(b,2),f=O[0],v=O[1],N=Object(r.useState)(""),C=Object(j.a)(N,2),B=C[0],A=C[1],z=Object(o.g)(),M=Object(r.useState)({open:!1,text:"",vertical:"top",horizontal:"center",type:""}),L=Object(j.a)(M,2),P=L[0],D=L[1],W=[{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:F,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."}],G=P.text,_=P.vertical,U=P.horizontal,R=P.open,H=P.type,J=Object(r.useState)(window.innerWidth>1300?y:w),Q=Object(j.a)(J,2),q=Q[0],K=Q[1];function V(){D(Object(p.a)(Object(p.a)({},P),{},{open:!1}))}function X(e){return Object(k.jsx)(x.a,Object(p.a)({elevation:6,variant:"filled"},e))}function Y(){return(Y=Object(d.a)(u.a.mark((function e(t){var r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n){e.next=6;break}return D(Object(p.a)(Object(p.a)({},P),{},{text:"Name field cannot be empty.",open:!0,type:"error"})),A("name"),document.getElementById("input-name").style.color="red",e.abrupt("return");case 6:if(1!==n.split(" ").length){e.next=12;break}return D(Object(p.a)(Object(p.a)({},P),{},{text:"Enter your full name.",open:!0,type:"error"})),A("name"),document.getElementById("input-name").style.color="red",e.abrupt("return");case 12:if(!((r=i.split("@")).length<=1)){e.next=18;break}return D(Object(p.a)(Object(p.a)({},P),{},{text:"Invalid email!",open:!0,type:"error"})),A("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 18:if(!(r[1].split(".").length<=1)){e.next=24;break}return D(Object(p.a)(Object(p.a)({},P),{},{text:"Invalid email!",open:!0,type:"error"})),A("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 24:if(!(f.length<6)){e.next=29;break}return D(Object(p.a)(Object(p.a)({},P),{},{text:"Password field cannot be less than 6 characters.",open:!0,type:"error"})),A("password"),document.getElementById("input-password").style.color="red",e.abrupt("return");case 29:return a={name:n,email:i,password:f},e.prev=30,e.next=33,S.post("signup",a);case 33:s=e.sent,s.data.created?(T({msg:"Registration completed!",tp:"success"}),z.push("/signin")):T({msg:"Email already registered!",tp:"error"}),e.next=41;break;case 38:e.prev=38,e.t0=e.catch(30),T({msg:"Server off.",tp:"error"});case 41:case"end":return e.stop()}}),e,null,[[30,38]])})))).apply(this,arguments)}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(d.a)(u.a.mark((function e(t){var n,r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ft.Qt,r=t.ft.Te,a={name:r,email:n,password:""},e.prev=3,e.next=6,S.post("signup",a);case 6:s=e.sent,s.data.created?(T({msg:"Registration completed!",tp:"success"}),z.push("/signin")):T({msg:"Email already registered!",tp:"error"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),T({msg:"Server off.",tp:"error"});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){K(window.innerWidth>1300?y:w)}),[]),Object(k.jsxs)("div",{className:"register-container",style:q.registerContainer,children:[Object(k.jsx)(g.a,{anchorOrigin:{vertical:_,horizontal:U},autoHideDuration:3e3,open:R,onClose:V,children:Object(k.jsx)(X,{onClose:V,severity:H,children:G})},_+U),Object(k.jsx)("div",{className:"content-carousel",style:q.contentCarousel,children:Object(k.jsx)(m.a,{className:"caurosel",autoplay:!0,children:W.map((function(e){return Object(k.jsxs)("div",{className:"div",children:[Object(k.jsx)("img",{width:window.innerWidth<=450?"350px":{},src:e.src,alt:e.alt}),Object(k.jsxs)("section",{className:"section",style:window.innerWidth<=411?{width:"350px"}:{width:"100%"},children:[Object(k.jsx)("h3",{className:"h3",children:e.h3}),Object(k.jsx)("p",{className:"p",children:e.p})]})]})}))})}),Object(k.jsxs)("div",{className:"content-signup",style:q.content,children:[Object(k.jsx)("h1",{children:"Invision"}),Object(k.jsxs)("div",{className:"forms",children:[Object(k.jsx)("section",{children:Object(k.jsx)("h2",{children:"Getting Started"})}),Object(k.jsxs)("form",{onSubmit:function(e){return Y.apply(this,arguments)},children:[Object(k.jsx)(I,{id:"input-name",error:B,type:"text",placeholder:"Full Name",value:n,onChange:function(e){a(e.target.value),A("")}}),Object(k.jsx)(I,{id:"input-email",error:B,type:"email",placeholder:"Users name or Email",value:i,onChange:function(e){l(e.target.value),A("")}}),Object(k.jsx)(I,{id:"input-password",error:B,type:"password",placeholder:"Password",value:f,onChange:function(e){v(e.target.value),A("")}}),Object(k.jsx)("button",{className:"button",type:"submit",children:"Sign Up"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(h.a,{className:"hr"}),Object(k.jsx)("p",{children:"Or"}),Object(k.jsx)(h.a,{className:"hr"})]}),Object(k.jsx)(E.GoogleLogin,{clientId:"444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com",className:"btnGoogle",onSuccess:Z,onFailure:Z,cookiePolicy:"single_host_origin",children:Object(k.jsx)("p",{children:"Sign up with Google"})}),Object(k.jsxs)("p",{className:"p",children:["By signing up, you agree to Invision ",Object(k.jsx)("u",{children:"Terms of Conditions"})," and ",Object(k.jsx)("u",{children:"Privacy Policy"})]}),Object(k.jsx)("p",{children:Object(k.jsxs)("a",{href:"/signin",children:["Already on ",Object(k.jsx)("b",{children:"Invision"}),"? ",Object(k.jsx)("u",{children:"Log in"})]})})]})]})]})}var M=n(166),L=n(167),P=n(168),D=n(169),W=n(170),G=n(164),_=n(84),U=n.n(_),R=Object(M.a)((function(){return{root:{flexGrow:"1"},header:{background:"#A9C5BA",color:"#000"},menuButton:{marginRight:"20px"},title:{flexGrow:"1"},h1:{textAlign:"center",marginTop:"35vh",fontSize:"50px",color:"#707070"},h1_1:{textAlign:"center",marginTop:"45vh",fontSize:"30px",color:"#707070"}}})),H=function(e,t){t.dispatch;var n=R(),r=Object(o.g)(),a=e.user,s=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T({msg:"Logged out!",tp:"success"}),r.push("/signin"),b.signOut();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:n.root,children:[Object(k.jsx)(L.a,{className:n.header,position:"static",children:Object(k.jsxs)(P.a,{children:[Object(k.jsx)(G.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",children:Object(k.jsx)(U.a,{})}),Object(k.jsx)(D.a,{variant:"h6",className:n.title,children:a.name}),Object(k.jsx)(W.a,{onClick:s,color:"inherit",children:"Log out"})]})}),Object(k.jsx)("h1",{className:window.innerWidth>1300?n.h1:n.h1_1,children:Object(k.jsxs)("b",{children:["Logged in as ",a.email]})})]})},J=n(85),Q=n.n(J),q={background:{height:"100vh",backgroundColor:"#A9C5BA"},div:{height:"100vh",display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",justifyContent:"center"},divError:{marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center"},h1:{textAlign:"right",color:"#000",font:"normal normal 900 35px/48px Muli"},h2:{margin:"auto 0",color:"#FFF",fontSize:"40px"},icon:{margin:"auto 0 auto 2%",color:"#FFF",fontSize:"70px"}};function K(){var e=Object(o.g)();return Object(r.useEffect)((function(){var t=setTimeout((function(){console.log("AuthService: ",b),b.logged?e.push("/home"):e.push("/signin")}),2e3);return function(){return clearTimeout(t)}})),Object(k.jsx)("div",{style:q.background,children:Object(k.jsxs)("div",{style:q.div,children:[Object(k.jsx)("h1",{style:q.h1,children:"Invision"}),Object(k.jsxs)("div",{style:q.divError,children:[Object(k.jsx)("h2",{style:q.h2,children:Object(k.jsx)("b",{children:"Error 404 - Not Found Page"})}),Object(k.jsx)(Q.a,{style:q.icon})]})]})})}var V=n(86),X=function(e){var t=e.component,n=Object(V.a)(e,["component"]);return Object(k.jsx)(o.b,Object(p.a)({render:function(e){return b.logged&&(e.user=b.user),b.logged?Object(k.jsx)(t,Object(p.a)({},e)):Object(k.jsx)(o.a,{to:"/signin"})}},n))},Y=function(e){return Object(k.jsx)(i.a,{children:Object(k.jsxs)(o.d,{children:[Object(k.jsx)(X,{exact:!0,path:"/home",component:H}),Object(k.jsx)(o.b,{exact:!0,path:"/signin",component:A}),Object(k.jsx)(o.b,{exact:!0,path:"/signup",component:z}),Object(k.jsx)(o.b,{exact:!0,component:K})]})})};var Z=function(){return b.signOut(),Object(k.jsxs)(r.Fragment,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(Y,{})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Z,{})}),document.getElementById("root")),$()}},[[142,1,2]]]);
//# sourceMappingURL=main.a8a86038.chunk.js.map