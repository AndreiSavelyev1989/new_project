(this["webpackJsonpmy-new-app"]=this["webpackJsonpmy-new-app"]||[]).push([[0],{20:function(e,r,t){e.exports={navbarBlock:"Navbar_navbarBlock__2wyuz",active:"Navbar_active__3WZo-"}},3:function(e,r,t){e.exports={commonBlock:"Common_commonBlock__1onnh",commonContainer:"Common_commonContainer__VPZFU",title:"Common_title__3AOve",formBlock:"Common_formBlock__1qqQX",error:"Common_error__32O98",registrationError:"Common_registrationError__o7Dr2"}},30:function(e,r,t){e.exports={group:"CommonInput_group__2fckV",bar:"CommonInput_bar__GpAhy",highlight:"CommonInput_highlight__3y1Xi",inputHighlighter:"CommonInput_inputHighlighter__2PJXc"}},35:function(e,r,t){e.exports={cbContainer:"CommonCheckbox_cbContainer__1Rlmv",optionInput:"CommonCheckbox_optionInput__K3vkX","click-wave":"CommonCheckbox_click-wave__2k1RO",radio:"CommonCheckbox_radio__13Kc_"}},49:function(e,r,t){e.exports={btn:"CommonButton_btn__1PMfW"}},50:function(e,r,t){e.exports={checkbox:"Login_checkbox__3ocOq"}},51:function(e,r,t){e.exports={test:"Test_test__1h1Vp"}},57:function(e,r,t){},58:function(e,r,t){},83:function(e,r,t){"use strict";t.r(r);var s=t(0),a=t.n(s),n=t(26),o=t.n(n),c=(t(57),t(58),t(10)),i=t(5),l=t(1),d=function(){return Object(l.jsx)("div",{children:"Profile"})},u=t(2),b=t(7),j=t(15),m=t.n(j),p=t(24),O=t(34),h=t.n(O),f=(h.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),h.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"})),w=function(e){return f.post("/auth/login",e)},x={restorePassword:function(){var e=Object(p.a)(m.a.mark((function e(r){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("auth/forgot",{email:r,from:"dreamonaut@mail.ru",message:"<div style=\"background-color: lime; padding: 15px\">\n              password recovery link: \t\n              <a href='https://andreisavelyev1989.github.io/new_project/new_project/#/new-password/$token$'>\t\n              link</a></div>"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),setNewPassword:function(){var e=Object(p.a)(m.a.mark((function e(r,t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("auth/set-new-password",{password:r,resetPasswordToken:t});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},v=function(e){return f.post("auth/register",e)},g={isLoggedIn:!1,error:null},C=t(18),_=t(22),N=t(30),P=t.n(N),E=function(e){var r=e.type,t=e.formikFieldsProps,s=e.label;e.error,Object(_.a)(e,["type","formikFieldsProps","label","error"]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:P.a.group,children:[Object(l.jsx)("input",Object(u.a)(Object(u.a)({type:r},t),{},{required:!0})),Object(l.jsx)("span",{className:P.a.highlight,children:" "}),Object(l.jsx)("span",{className:P.a.bar,children:" "}),Object(l.jsx)("label",{children:s})]})})},k=t(49),R=t.n(k),S=function(e){e.red,e.className,e.error;var r=Object(_.a)(e,["red","className","error"]);return Object(l.jsx)("button",Object(u.a)(Object(u.a)({className:R.a.btn},r),{},{children:r.name}))},y=t(3),I=t.n(y),T=t(35),F=t.n(T),A=function(e){e.type,e.onChange,e.onChangeChecked,e.className,e.spanClassName,e.children;var r=e.formikFieldsProps,t=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","formikFieldsProps"]);return Object(l.jsx)("div",{className:F.a.cbContainer,children:Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(u.a)(Object(u.a)({className:F.a.optionInput,type:"checkbox"},r),t))," Remember me"]})})},L=t(50),B=t.n(L),G=function(){var e=Object(b.b)(),r=Object(b.c)((function(e){return e.login.isLoggedIn})),t=Object(b.c)((function(e){return e.login.error})),s=Object(C.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?e.password.length>15?r.password="Password must be 15 characters or less":e.password.length<8&&(r.password="Password must be more than 7 characters "):r.password="Required",r},onSubmit:function(r){var t;e((t=r,function(e){w(t).then((function(){e({type:"login/SET-IS-LOGGED-IN",value:!0})})).catch((function(r){var t=r.response?r.response.data.error:r.message+", more details in the console";return e(function(e){return{type:"login/ERROR",error:e}}(t)),console.log("Error: ",Object(u.a)({},r)),console.log(t)}))}))}});return r?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsxs)("div",{className:I.a.commonContainer,children:[Object(l.jsx)("h1",{className:I.a.title,children:"Login Here"}),Object(l.jsx)("div",{className:I.a.error,children:t||null}),Object(l.jsxs)("form",{className:I.a.formBlock,onSubmit:s.handleSubmit,children:[Object(l.jsx)(E,{type:"text",label:"Email",formikFieldsProps:Object(u.a)({},s.getFieldProps("email"))}),s.touched.email&&s.errors.email?Object(l.jsx)("div",{className:I.a.registrationError,children:s.errors.email}):null,Object(l.jsx)(E,{type:"password",label:"Password",formikFieldsProps:Object(u.a)({},s.getFieldProps("password"))}),s.touched.password&&s.errors.password?Object(l.jsx)("div",{className:I.a.registrationError,children:s.errors.password}):null,Object(l.jsx)("div",{className:B.a.checkbox,children:Object(l.jsx)(A,{type:"checkbox",formikFieldsProps:Object(u.a)({},s.getFieldProps("rememberMe"))})}),Object(l.jsx)(S,{type:"submit",name:"Login"})]})]})},q="restore/SUCCESS_SUBMIT",D="restore/FAILED_SUBMIT",W="restore/LOADING",Z="restore/CLEAR_STATUS",U="restore/INIT",V="restore/SET_IS_PASSWORD_CHANGED",M=function(e){return{type:q,status:e}},$=function(e,r){return{type:D,error:e,status:r}},z=function(){return{type:U}},H={currentEmail:null,error:null,status:null,isPasswordChanged:!1},X=function(){var e=Object(b.b)(),r=Object(i.g)().resetPasswordToken,t=Object(b.c)((function(e){return e.restore})),a=t.error,n=t.status,o=t.isPasswordChanged;Object(s.useEffect)((function(){e(z())}),[]);var c=Object(C.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var r={};return e.password?e.password.length>15?r.password="Password must be 15 characters or less":e.password.length<8&&(r.password="Password must be more than 7 characters "):r.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(r.passwordConfirm="Password and Confirm Password must be equal"):r.passwordConfirm="Required",r},onSubmit:function(t){var s,a;t.password===t.passwordConfirm&&e((s=t.password,a=r,function(){var e=Object(p.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:W}),e.next=4,x.setNewPassword(s,a);case 4:r(M("Password has been changed")),setTimeout((function(){return r({type:V})}),3e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r($(e.t0.response.data.error,"Error"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()))}});return o?Object(l.jsx)(i.a,{to:se.LOGIN}):Object(l.jsxs)("div",{className:I.a.commonContainer,children:[Object(l.jsx)("h1",{className:I.a.title,children:"Set new password"}),Object(l.jsxs)("form",{className:I.a.formBlock,onSubmit:c.handleSubmit,children:[Object(l.jsx)("div",{className:I.a.error,children:n&&n}),Object(l.jsx)(E,{type:"password",label:"Password",error:a||c.errors,formikFieldsProps:Object(u.a)({},c.getFieldProps("password"))}),c.touched.password&&c.errors.password?Object(l.jsx)("div",{className:I.a.registrationError,children:c.errors.password}):null,Object(l.jsx)(E,{type:"password",label:"Confirm Password",formikFieldsProps:Object(u.a)({},c.getFieldProps("passwordConfirm"))}),c.touched.passwordConfirm&&c.errors.passwordConfirm?Object(l.jsx)("div",{className:I.a.registrationError,children:c.errors.passwordConfirm}):null,Object(l.jsx)(S,{type:"submit",name:"Send"})]})]})},J={isRegistered:!1,error:null},K=function(){var e=Object(b.c)((function(e){return e.registration.isRegistered})),r=Object(b.c)((function(e){return e.registration.error})),t=Object(b.b)(),s=Object(C.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?e.password.length>15?r.password="Password must be 15 characters or less":e.password.length<8&&(r.password="Password must be more than 7 characters "):r.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(r.passwordConfirm="Password and Confirm Password must be equal"):r.passwordConfirm="Required",r},onSubmit:function(e){var r;e.password===e.passwordConfirm&&t((r=e,function(e){v(r).then((function(r){e({type:"registration/SET-REGISTRATION",value:!0})})).catch((function(r){var t=r.response?r.response.data.error:r.message+", more details in the console";console.log("Error: ",Object(u.a)({},r)),e(function(e){return{type:"registration/SET-ERROR",error:e}}(t))}))}))}});return e?Object(l.jsx)(i.a,{to:se.LOGIN}):Object(l.jsxs)("div",{className:I.a.commonContainer,children:[Object(l.jsx)("h1",{className:I.a.title,children:"Registration"}),Object(l.jsxs)("form",{className:I.a.formBlock,onSubmit:s.handleSubmit,children:[Object(l.jsx)("div",{className:I.a.error,children:r||null}),Object(l.jsx)(E,{type:"text",label:"Email",error:r||s.errors&&s.touched,formikFieldsProps:Object(u.a)({},s.getFieldProps("email"))}),s.touched.email&&s.errors.email?Object(l.jsx)("div",{className:I.a.registrationError,children:s.errors.email}):null,Object(l.jsx)(E,{type:"password",label:"Password",formikFieldsProps:Object(u.a)({},s.getFieldProps("password"))}),s.touched.password&&s.errors.password?Object(l.jsx)("div",{className:I.a.registrationError,children:s.errors.password}):null,Object(l.jsx)(E,{type:"password",label:"Confirm Password",formikFieldsProps:Object(u.a)({},s.getFieldProps("passwordConfirm"))}),s.touched.passwordConfirm&&s.errors.passwordConfirm?Object(l.jsx)("div",{className:I.a.registrationError,children:s.errors.passwordConfirm}):null,Object(l.jsx)(S,{type:"submit",name:"Sign up"})]})]})},Q=function(){var e=Object(b.b)(),r=Object(b.c)((function(e){return e.restore})),t=r.error,a=r.currentEmail,n=r.status,o=Object(s.useCallback)((function(r){var t;e((t=r,function(){var e=Object(p.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:W}),e.next=4,x.restorePassword(t);case 4:r(M("New password send to ur email")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r($(e.t0.response.data.error,"Email not found"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()))}),[a]);Object(s.useEffect)((function(){e(z())}),[]);var c=Object(C.a)({initialValues:{email:""},validate:function(e){var r={};if(e.email){if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(e.email))return;r.email="Write correct email"}else r.email="Required";return r},onSubmit:function(e){o(e.email)}});return Object(l.jsxs)("div",{className:I.a.commonContainer,children:[Object(l.jsx)("h1",{className:I.a.title,children:"Restore"}),Object(l.jsxs)("form",{className:I.a.formBlock,onSubmit:c.handleSubmit,children:[Object(l.jsx)("div",{className:I.a.error,children:n&&n}),Object(l.jsx)(E,{type:"text",label:"email",error:t||c.errors,formikFieldsProps:Object(u.a)({},c.getFieldProps("email"))}),c.touched.email&&c.errors.email?Object(l.jsx)("div",{className:I.a.registrationError,children:c.errors.email}):null,Object(l.jsx)(S,{type:"submit",name:"Send request"})]})]})},Y=t(51),ee=t.n(Y),re=function(){return Object(l.jsxs)("div",{className:ee.a.test,children:[Object(l.jsx)(S,{name:"test"}),Object(l.jsx)(E,{label:"Test"}),Object(l.jsx)(A,{})]})},te=function(){return Object(l.jsx)("div",{children:"Error404"})},se={LOGIN:"/login",NEW_PASSWORD:"/new-password",PROFILE:"/profile",REGISTRATION:"/registration",RESTORE_PASSWORD:"/restore-password",TEST:"/test"},ae=function(){return Object(l.jsx)("div",{className:I.a.commonBlock,children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(i.a,{to:se.PROFILE})}}),Object(l.jsx)(i.b,{path:se.PROFILE,render:function(){return Object(l.jsx)(d,{})}}),Object(l.jsx)(i.b,{path:se.LOGIN,render:function(){return Object(l.jsx)(G,{})}}),Object(l.jsx)(i.b,{path:"".concat(se.NEW_PASSWORD,"/:resetPasswordToken"),render:function(){return Object(l.jsx)(X,{})}}),Object(l.jsx)(i.b,{path:se.REGISTRATION,render:function(){return Object(l.jsx)(K,{})}}),Object(l.jsx)(i.b,{path:se.RESTORE_PASSWORD,render:function(){return Object(l.jsx)(Q,{})}}),Object(l.jsx)(i.b,{path:se.TEST,render:function(){return Object(l.jsx)(re,{})}}),Object(l.jsx)(i.b,{render:function(){return Object(l.jsx)(te,{})}})]})})},ne=t(20),oe=t.n(ne),ce=function(){return Object(l.jsxs)("div",{className:oe.a.navbarBlock,children:[Object(l.jsx)(c.b,{to:se.PROFILE,activeClassName:oe.a.active,children:"Profile"}),Object(l.jsx)(c.b,{to:se.REGISTRATION,activeClassName:oe.a.active,children:"Registration"}),Object(l.jsx)(c.b,{to:se.RESTORE_PASSWORD,activeClassName:oe.a.active,children:"Restore password"}),Object(l.jsx)(c.b,{to:se.NEW_PASSWORD,activeClassName:oe.a.active,children:"New password"}),Object(l.jsx)(c.b,{to:se.LOGIN,activeClassName:oe.a.active,children:"Login"}),Object(l.jsx)(c.b,{to:se.TEST,activeClassName:oe.a.active,children:"Test"})]})},ie=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(ce,{}),Object(l.jsx)(ae,{})]})},le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(r){var t=r.getCLS,s=r.getFID,a=r.getFCP,n=r.getLCP,o=r.getTTFB;t(e),s(e),a(e),n(e),o(e)}))},de=t(23),ue=t(52),be=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return r.type,e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return r.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"registration/SET-REGISTRATION":return Object(u.a)(Object(u.a)({},e),{},{isRegistered:r.value});case"registration/SET-ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:r.error});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"login/SET-IS-LOGGED-IN":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:r.value});case"login/ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:r.error});default:return e}},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case q:return Object(u.a)(Object(u.a)({},e),{},{currentEmail:null,status:r.status});case D:return Object(u.a)(Object(u.a)({},e),{},{currentEmail:null,error:r.error,status:r.status});case W:return Object(u.a)(Object(u.a)({},e),{},{status:"loading"});case Z:return Object(u.a)(Object(u.a)({},e),{},{status:null});case U:return Object(u.a)(Object(u.a)({},e),{},{status:null,error:null});case V:return Object(u.a)(Object(u.a)({},e),{},{isPasswordChanged:!e.isPasswordChanged});default:return e}}}),je=Object(de.d)(be,Object(de.a)(ue.a));o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(c.a,{children:Object(l.jsx)(b.a,{store:je,children:Object(l.jsx)(ie,{})})})}),document.getElementById("root")),le()}},[[83,1,2]]]);
//# sourceMappingURL=main.f5578421.chunk.js.map