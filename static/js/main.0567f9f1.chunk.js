(this.webpackJsonpinvision=this.webpackJsonpinvision||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(22),s=n.n(a),c=(n(156),n(157),n(52)),i=n(17),o=n(25),l=n.n(o),u=n(40),d=n(9),p=(n(104),n(251)),m={user:{},logged:!1,signIn:function(e){var t=this;return Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e,t.logged=!0,setTimeout(e,100);case 3:case"end":return n.stop()}}),n)})))()},signOut:function(e){var t=this;return Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user={},t.logged=!1,setTimeout(e,100);case 3:case"end":return n.stop()}}),n)})))()}},j=n(245),b="#FFFFFF 0% 0% no-repeat padding-box",g="#A9C5BA",h={error:{color:"red",borderColor:"red"},normal:{color:"black",borderColor:"black"},label:{textAlign:"right",height:"3px",marginTop:"5px",color:"red",font:"normal normal normal 14px/18px Muli"},labelField:{marginTop:"20px",marginBottom:"5px",color:"#707070",font:"normal normal normal 14px/18px Muli"}},x={registerContainer:{background:b,display:"flex",flexDirection:"row"},contentCarousel:{background:g,width:"50%"},contentSignin:{width:"50%"}},f={registerContainer:{background:b,display:"flex",flexDirection:"column"},contentCarousel:{background:g,width:"100%",height:"90vh"},slidesCarousel:{margin:"40px auto auto auto"},section:{width:"90%"},div:{marginTop:"10px"},h1:{margin:"40px 15% auto auto"},h3:{margin:"auto 15px"},p:{marginTop:"20px",margin:"auto 15px"},content:{width:"100%",margin:"auto auto",padding:"0 15px 0 15px"}},O=n(3);function v(e){var t=e.error,n=e.id,a=e.label,s=e.placeholder,c=e.value,i=e.onChange,o=e.type,l=n.split("-");return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)("label",{"aria-label":a,style:h.labelField,children:a}),Object(O.jsx)("input",{"aria-placeholder":s,style:t===l[1]?h.error:h.normal,id:n,type:o,placeholder:s||"",value:c,onChange:i})]})}var y,w=n(254),k=n(255),E=n(242);function I(){var e=Object(r.useState)({open:!1,text:"Ol\xe1",type:"success",vertical:"vertical",horizontal:"horizontal"}),t=Object(d.a)(e,2),n=t[0],a=t[1],s=n.text,c=n.vertical,i=n.horizontal,o=n.open,l=n.type;Object(r.useEffect)((function(){y=function(e){var t=e.msg,n=e.tp;a({open:!0,text:t,type:n})}}));var u=function(){a({open:!1,text:s,type:l})};return Object(O.jsx)(w.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,open:o,onClose:u,children:Object(O.jsxs)(k.a,{status:l,children:[Object(O.jsx)(k.b,{}),Object(O.jsx)("p",{style:{marginTop:"4px",fontSize:"16px",fontFamily:"Muli"},children:Object(O.jsx)("b",{children:s})}),Object(O.jsx)(E.a,{onClick:u})]})},c+i)}function N(e){var t=e.msg,n=e.tp;y({msg:t,tp:n})}var C,S=n(243),F=n(252),B=n(244),T=(n(165),Object(S.a)((function(){return{background:{color:"#FFF",marginRight:"20px"},font:{margin:"auto",color:"#FFF",fontSize:"30px"}}})));function P(e){var t=T(),n=Object(r.useState)(!1),a=Object(d.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){C=function(e){c(e)}})),Object(O.jsx)("div",{children:Object(O.jsxs)(F.a,{open:s,className:t.div,children:[Object(O.jsx)(B.a,{className:t.background}),Object(O.jsx)("h1",{className:t.font,children:"Please wait..."})]})})}function M(e){C(e)}n(166);var A=n(129),L=n.n(A).a.create({baseURL:"https://invision-backend.herokuapp.com"}),z=n(83),G=n.p+"static/media/Data.3b09a15d.png",W=function(e){var t=Object(r.useState)(window.innerWidth>1300?x:f),n=Object(d.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(""),o=Object(d.a)(c,2),b=o[0],g=o[1],h=Object(r.useState)(""),y=Object(d.a)(h,2),w=y[0],k=y[1],E=Object(r.useState)(""),I=Object(d.a)(E,2),C=I[0],S=I[1],F=Object(i.g)();Object(r.useEffect)((function(){s(window.innerWidth>1300?x:f),document.getElementsByClassName("slick-dots slick-dots-bottom").style=f.listButtonsSlide}),[]);var B=[{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."}];function T(){return(T=Object(u.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=b.split("@"),""!==b){e.next=7;break}return N({msg:"Name field cannot be empty.",tp:"error"}),S("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 7:if(!(n.length<=1)){e.next=12;break}return N({msg:"Invalid email.",tp:"error"}),S("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 12:if(!(n[1].split(".").length<=1)){e.next=18;break}return N({msg:"Invalid email.",tp:"error"}),S("email"),document.getElementById("input-email").style.color="red",e.abrupt("return");case 18:if(""!==w){e.next=23;break}return N({msg:"Password field cannot be empty.",tp:"error"}),S("password"),document.getElementById("input-password").style.color="red",e.abrupt("return");case 23:return r={email:b,password:w},M(!0),e.prev=25,e.next=28,L.post("signin",r);case 28:a=e.sent,M(!1),a.data.logged?(N({msg:"Logged in!",tp:"success"}),m.signIn(a.data.user),F.replace("/home")):N({msg:"Email or Password is incorrect!",tp:"error"}),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(25),M(!1),N({msg:"Server off.",tp:"error"});case 37:case"end":return e.stop()}}),e,null,[[25,33]])})))).apply(this,arguments)}function P(e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ft.Qt,r={email:n,password:"",account_google:!0},M(!0),e.prev=3,e.next=6,L.post("signin",r);case 6:a=e.sent,M(!1),a.data.logged?(N({msg:"Logged in!",tp:"success"}),m.signIn(a.data.user),console.log("replace"),F.replace("/home")):N({msg:"User without account!",tp:"error"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),M(!1),N({msg:"Server off.",tp:"error"});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"signin-container",style:a.registerContainer,children:[Object(O.jsx)("div",{className:"content-carousel",style:a.contentCarousel,children:Object(O.jsx)(p.a,{className:"caurosel",style:a.slidesCarousel,autoplay:!0,children:B.map((function(e,t){return Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("img",{width:window.innerWidth<=500?"300px":{},src:e.src,alt:e.alt}),Object(O.jsxs)("section",{className:"section",style:a.section,children:[Object(O.jsx)("h3",{className:"h3",style:a.p,children:e.h3}),Object(O.jsx)("p",{className:"p",style:a.p,children:e.p})]})]},t)}))})}),Object(O.jsxs)("div",{className:"content-signin",style:a.content,children:[Object(O.jsx)("h1",{style:a.h1,children:"Invision"}),Object(O.jsxs)("div",{className:"forms",children:[Object(O.jsx)("section",{children:Object(O.jsx)("h2",{children:"Welcome to Invision"})}),Object(O.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(O.jsx)(v,{id:"input-email",label:"Users name or Email",error:C,type:"email",placeholder:"Ex: username@gmail.com",value:b,onChange:function(e){g(e.target.value),S("")}}),Object(O.jsx)(v,{id:"input-password",label:"Password",error:C,type:"password",placeholder:"Ex: username123",value:w,onChange:function(e){k(e.target.value),S("")}}),Object(O.jsx)("a",{href:"/signin",children:"Forgot password?"}),Object(O.jsx)("button",{className:"button",type:"submit",children:"Sign In"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{className:"hr"}),Object(O.jsx)("p",{children:"Or"}),Object(O.jsx)(j.a,{className:"hr"})]}),Object(O.jsx)(z.GoogleLogin,{clientId:"444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com",className:"btnGoogle",onSuccess:P,onFailure:P,cookiePolicy:"single_host_origin",children:Object(O.jsx)("p",{children:"Sign in with Google"})}),Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:"/signup",children:["New ",Object(O.jsx)("b",{children:"Invision"}),"? ",Object(O.jsx)("u",{children:"Create Account"})]})})]})]})]})};n(199);function _(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(d.a)(s,2),o=c[0],m=c[1],b=Object(r.useState)(""),g=Object(d.a)(b,2),h=g[0],y=g[1],w=Object(r.useState)(""),k=Object(d.a)(w,2),E=k[0],I=k[1],C=Object(i.g)(),S=[{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."},{src:G,alt:"Image",h3:"Marcenas mattis egestas",p:"Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."}],F=Object(r.useState)(window.innerWidth>1300?x:f),B=Object(d.a)(F,2),T=B[0],P=B[1];function A(){return(A=Object(u.a)(l.a.mark((function e(t){var r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n){e.next=6;break}return I("name"),N({msg:"Name cannot be empty.",tp:"error"}),document.getElementById("input-name").style.color="red",e.abrupt("return");case 6:if(1!==n.split(" ").length){e.next=12;break}return I("name"),N({msg:"Enter your full name.",tp:"error"}),document.getElementById("input-name").style.color="red",e.abrupt("return");case 12:if(""!==o){e.next=17;break}return I("email"),N({msg:"Email cannot be empty.",tp:"error"}),document.getElementById("input-email").style.color="red",e.abrupt("return");case 17:if(!((r=o.split("@")).length<=1)){e.next=23;break}return I("email"),N({msg:"Invalid email!",tp:"error"}),document.getElementById("input-email").style.color="red",e.abrupt("return");case 23:if(!(r[1].split(".").length<=1)){e.next=29;break}return I("email"),N({msg:"Invalid email!",tp:"error"}),document.getElementById("input-email").style.color="red",e.abrupt("return");case 29:if(0!==h.length){e.next=34;break}return N({msg:"Password cannot be empty.",tp:"error"}),I("password"),document.getElementById("input-password").style.color="red",e.abrupt("return");case 34:if(!(h.length<=6)){e.next=39;break}return N({msg:"Password field cannot be less than 6 characters.",tp:"error"}),I("password"),document.getElementById("input-password").style.color="red",e.abrupt("return");case 39:return a={name:n,email:o,password:h,account_google:!1},M(!0),e.prev=41,e.next=44,L.post("signup",a);case 44:s=e.sent,M(!1),s.data.created?(N({msg:"Registration completed!",tp:"success"}),C.replace("/signin")):N({msg:"Email already registered!",tp:"error"}),e.next=54;break;case 50:e.prev=50,e.t0=e.catch(41),M(!1),N({msg:"Server off.",tp:"error"});case 54:case"end":return e.stop()}}),e,null,[[41,50]])})))).apply(this,arguments)}function W(e){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(t){var n,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ft.Qt,r=t.ft.Te,a={name:r,email:n,password:"",account_google:!0},M(!0),e.prev=4,e.next=7,L.post("signup",a);case 7:s=e.sent,M(!1),s.data.created?(N({msg:"Registration completed!",tp:"success"}),C.replace("/signin")):N({msg:"Email already registered!",tp:"error"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),M(!1),N({msg:"Server off.",tp:"error"});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){P(window.innerWidth>1300?x:f)}),[]),Object(O.jsxs)("div",{className:"register-container",style:T.registerContainer,children:[Object(O.jsx)("div",{className:"content-carousel",style:T.contentCarousel,children:Object(O.jsx)(p.a,{className:"caurosel",autoplay:!0,children:S.map((function(e){return Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("img",{width:window.innerWidth<=450?"350px":{},src:e.src,alt:e.alt}),Object(O.jsxs)("section",{className:"section",style:window.innerWidth<=411?{width:"350px"}:{width:"100%"},children:[Object(O.jsx)("h3",{className:"h3",children:e.h3}),Object(O.jsx)("p",{className:"p",children:e.p})]})]})}))})}),Object(O.jsxs)("div",{className:"content-signup",style:T.content,children:[Object(O.jsx)("h1",{children:"Invision"}),Object(O.jsxs)("div",{className:"forms",children:[Object(O.jsx)("section",{children:Object(O.jsx)("h2",{children:"Getting Started"})}),Object(O.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},children:[Object(O.jsx)(v,{id:"input-name",error:E,type:"text",label:"Full Name",placeholder:"Ex: Cristian Arag\xe3o",value:n,onChange:function(e){a(e.target.value),I("")}}),Object(O.jsx)(v,{id:"input-email",error:E,type:"email",label:"Users name or Email",placeholder:"Ex: username@gmail.com",value:o,onChange:function(e){m(e.target.value),I("")}}),Object(O.jsx)(v,{id:"input-password",error:E,type:"password",label:"Password",placeholder:"Ex: username123",value:h,onChange:function(e){y(e.target.value),I("")}}),Object(O.jsx)("button",{className:"button",type:"submit",children:"Sign Up"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{className:"hr"}),Object(O.jsx)("p",{children:"Or"}),Object(O.jsx)(j.a,{className:"hr"})]}),Object(O.jsx)(z.GoogleLogin,{clientId:"444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com",className:"btnGoogle",onSuccess:W,onFailure:W,cookiePolicy:"single_host_origin",children:Object(O.jsx)("p",{children:"Sign up with Google"})}),Object(O.jsxs)("p",{className:"p",children:["By signing up, you agree to Invision ",Object(O.jsx)("u",{children:"Terms of Conditions"})," and ",Object(O.jsx)("u",{children:"Privacy Policy"})]}),Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:"/signin",children:["Already on ",Object(O.jsx)("b",{children:"Invision"}),"? ",Object(O.jsx)("u",{children:"Log in"})]})})]})]})]})}var D=n(246),R=n(247),U=n(249),J=n(250),Q=n(248),H=n(133),q=n.n(H),K=(n(200),{root:{flexGrow:"1"},header:{color:"#000"},menuButton:{marginRight:"20px"},title:{flexGrow:"1"},h1:{textAlign:"center",marginTop:"35vh",fontSize:"50px",color:"#707070"},h1_1:{textAlign:"center",marginTop:"45vh",fontSize:"30px",color:"#707070"}}),V=function(e){var t=K,n=Object(i.g)(),r=e.user,a=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N({msg:"Logged out!",tp:"success"}),n.replace("/signin"),m.signOut();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(D.a,{style:t.header,position:"static",children:Object(O.jsxs)(R.a,{children:[Object(O.jsx)(Q.a,{edge:"start",style:t.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(q.a,{})}),Object(O.jsx)(U.a,{variant:"h6",style:t.title,children:r.name}),Object(O.jsx)(J.a,{onClick:a,color:"inherit",children:"Log out"})]})}),Object(O.jsx)("h1",{style:window.innerWidth>1300?t.h1:t.h1_1,children:Object(O.jsxs)("b",{children:["Logged in as ",r.email]})})]})},X=n(134),Y=n.n(X),Z={background:{height:"100vh",backgroundColor:"#A9C5BA"},div:{height:"100vh",display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",justifyContent:"center"},divError:{marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center"},h1:{textAlign:"right",color:"#000",font:"normal normal 900 35px/48px Muli"},h2:{margin:"auto 0",color:"#FFF",fontSize:"40px"},icon:{margin:"auto 0 auto 2%",color:"#FFF",fontSize:"70px"}};function $(){var e=Object(i.g)();return Object(r.useEffect)((function(){var t=setTimeout((function(){m.logged?e.replace("/home"):e.replace("/signin")}),2e3);return function(){return clearTimeout(t)}})),Object(O.jsx)("div",{style:Z.background,children:Object(O.jsxs)("div",{style:Z.div,children:[Object(O.jsx)("h1",{style:Z.h1,children:"Invision"}),Object(O.jsxs)("div",{style:Z.divError,children:[Object(O.jsx)("h2",{style:Z.h2,children:Object(O.jsx)("b",{children:"Error 404 - Not Found Page"})}),Object(O.jsx)(Y.a,{style:Z.icon})]})]})})}var ee=n(98),te=n(139),ne=function(e){var t=e.component,n=Object(te.a)(e,["component"]);return Object(O.jsx)(i.b,Object(ee.a)({render:function(e){return m.logged&&(e.user=m.user),m.logged?Object(O.jsx)(t,Object(ee.a)({},e)):Object(O.jsx)(i.a,{to:"/signin"})}},n))},re=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(ne,{exact:!0,path:"/home",component:V}),Object(O.jsx)(i.b,{exact:!0,path:"/signin",component:W}),Object(O.jsx)(i.b,{exact:!0,path:"/signup",component:_}),Object(O.jsx)(i.b,{exact:!0,component:$})]})})},ae=n(253);var se=function(){return m.signOut(),Object(O.jsxs)(ae.a,{children:[Object(O.jsx)(I,{}),Object(O.jsx)(P,{}),Object(O.jsx)(re,{})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,257)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};s.a.render(Object(O.jsx)(se,{}),document.getElementById("root")),ce()}},[[201,1,2]]]);
//# sourceMappingURL=main.0567f9f1.chunk.js.map