(this["webpackJsonpmy-new-app"]=this["webpackJsonpmy-new-app"]||[]).push([[0],{11:function(e,t,r){e.exports={table:"Packs_table__KZQpX",tableContainer:"Packs_tableContainer__3JuF2",tableItem:"Packs_tableItem__2rZOA"}},12:function(e,t,r){e.exports={table:"cards_table__1oLsk",table__cell:"cards_table__cell__vPzp2"}},20:function(e,t,r){e.exports={navbarBlock:"Navbar_navbarBlock__2wyuz",active:"Navbar_active__3WZo-"}},34:function(e,t,r){e.exports={group:"CommonInput_group__2fckV",bar:"CommonInput_bar__GpAhy",highlight:"CommonInput_highlight__3y1Xi",inputHighlighter:"CommonInput_inputHighlighter__2PJXc"}},41:function(e,t,r){e.exports={cbContainer:"CommonCheckbox_cbContainer__1Rlmv",optionInput:"CommonCheckbox_optionInput__K3vkX","click-wave":"CommonCheckbox_click-wave__2k1RO",radio:"CommonCheckbox_radio__13Kc_"}},5:function(e,t,r){e.exports={commonBlock:"Common_commonBlock__1onnh",commonContainer:"Common_commonContainer__VPZFU",title:"Common_title__3AOve",formBlock:"Common_formBlock__1qqQX",error:"Common_error__32O98",registrationError:"Common_registrationError__o7Dr2"}},52:function(e,t,r){e.exports={btn:"CommonButton_btn__1PMfW"}},53:function(e,t,r){e.exports={profileBlock:"Profile_profileBlock__9MaX2"}},56:function(e,t,r){e.exports={checkbox:"Login_checkbox__3ocOq"}},57:function(e,t,r){e.exports={preloaderContainer:"Preloader_preloaderContainer__otx3L"}},58:function(e,t,r){e.exports={test:"Test_test__1h1Vp"}},65:function(e,t,r){},66:function(e,t,r){},91:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(29),c=r.n(s),o=(r(65),r(66),r(10)),i=r(7),l=r(35),u=r(4),d=r(3),b=r.n(d),j=r(9),p=r(2),m=r(51),h=r.n(m).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),O=function(){return h.get("cards/pack")},f=function(e){return h.post("cards/pack",{cardsPack:Object(p.a)({},e)})},x=function(e){return h.delete("cards/pack?id=".concat(e))},v=function(e){return h.post("/auth/login",e)},w=function(){return h.post("auth/me")},g=function(e,t){return h.put("auth/me",{name:e,avatar:t})},_=function(){return h.delete("auth/me")},C={restorePassword:function(){var e=Object(j.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("auth/forgot",{email:t,from:"dreamonaut@mail.ru",message:"<div style=\"background-color: lime; padding: 15px\">\n              password recovery link: \t\n              <a href='http://localhost:3000/new_project/#/new-password/$token$'>\t\n              Follow the link to set a new password</a></div>"});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setNewPassword:function(){var e=Object(j.a)(b.a.mark((function e(t,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("auth/set-new-password",{password:t,resetPasswordToken:r});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},k=function(e){return h.post("auth/register",e)},N={getCards:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("cards/card?cardsPack_id=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addCard:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("cards/card",{card:{cardsPack_id:"".concat(t)}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delCard:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.delete("cards/card?id=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateCard:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put("cards/card",{card:{_id:"".concat(t),question:"Updated",comments:"Updated"}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addPack:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/cards/pack",{cardsPack:{}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},P={isLoggedIn:!1,error:null,isFetching:!1,isInitialized:!1,authUserData:{name:"",avatar:""}},I=function(e){return{type:"auth/ERROR",error:e}},E=function(e){return{type:"auth/SET-IS-LOGGED-IN",value:e}},S=function(e){return{type:"auth/SET-IS-FETCHING",isFetching:e}},y=function(e,t){return{type:"auth/SET-USER-DATA",name:e,avatar:t}},R=function(e,t){return function(){var r=Object(j.a)(b.a.mark((function r(a,n){var s,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,g(e,t);case 3:s=r.sent,a(y(s.data.updatedUser.name,s.data.updatedUser.avatar)),r.next=13;break;case 7:return r.prev=7,r.t0=r.catch(0),c=r.t0.response?r.t0.response.data.error:r.t0.message+", more details in the console",a(I(c)),console.log("Error: ",Object(p.a)({},r.t0)),r.abrupt("return",console.log(c));case 13:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,t){return r.apply(this,arguments)}}()},T=r(25),F=r(52),A=r.n(F),D=r(0),L=function(e){e.red,e.className,e.error;var t=Object(T.a)(e,["red","className","error"]);return Object(D.jsx)("button",Object(p.a)(Object(p.a)({className:A.a.btn},t),{},{children:t.name}))},G=r(53),q=r.n(G),B=r.p+"static/media/avatar.6afeb838.png",U=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),r=t.isInitialized,n=t.isLoggedIn,s=t.authUserData,c=Object(a.useState)(!1),o=Object(l.a)(c,2),d=o[0],p=o[1],m=Object(a.useState)(s.name),h=Object(l.a)(m,2),O=h[0],f=h[1],x=Object(a.useState)(s.avatar),v=Object(l.a)(x,2),g=v[0];v[1];Object(a.useEffect)((function(){n&&r&&e(R(O,g)),r||e(function(){var e=Object(j.a)(b.a.mark((function e(t,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(S(!0)),e.next=4,w();case 4:a=e.sent,t(y(a.data.name,a.data.avatar)),t({type:"auth/INITIALIZED",isInitialized:!0}),t(E(!0));case 8:return e.prev=8,t(S(!1)),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,,8,11]])})));return function(t,r){return e.apply(this,arguments)}}())}),[]);return n?Object(D.jsxs)("div",{className:q.a.profileBlock,children:[Object(D.jsx)("div",{children:s.avatar?Object(D.jsx)("img",{src:B,alt:"user-avatar"}):s.avatar}),Object(D.jsx)("div",{children:d?Object(D.jsx)("input",{type:"text",onChange:function(e){f(e.currentTarget.value)},autoFocus:!0,onBlur:function(){p(!1),e(R(O,g))},value:O}):Object(D.jsx)("span",{onDoubleClick:function(){p(!0),f(O)},children:s.name})}),Object(D.jsx)("div",{children:Object(D.jsx)(L,{name:"logout",onClick:function(){e(function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(S(!0)),e.next=4,_();case 4:t(E(!1));case 5:return e.prev=5,t(S(!1)),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(t){return e.apply(this,arguments)}}())}})})]}):Object(D.jsx)(i.a,{to:Ae.LOGIN})},Z=r(22),W=r(34),z=r.n(W),H=function(e){var t=e.type,r=e.formikFieldsProps,a=e.label;e.error,Object(T.a)(e,["type","formikFieldsProps","label","error"]);return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:z.a.group,children:[Object(D.jsx)("input",Object(p.a)(Object(p.a)({type:t},r),{},{required:!0})),Object(D.jsx)("span",{className:z.a.highlight,children:" "}),Object(D.jsx)("span",{className:z.a.bar,children:" "}),Object(D.jsx)("label",{children:a})]})})},K=r(5),M=r.n(K),V=r(41),X=r.n(V),$=function(e){e.type,e.onChange,e.onChangeChecked,e.className,e.spanClassName,e.children;var t=e.formikFieldsProps,r=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","formikFieldsProps"]);return Object(D.jsx)("div",{className:X.a.cbContainer,children:Object(D.jsxs)("label",{children:[Object(D.jsx)("input",Object(p.a)(Object(p.a)({className:X.a.optionInput,type:"checkbox"},t),r))," Remember me"]})})},J=r(56),Q=r.n(J),Y=r.p+"static/media/preloader.259f14e1.svg",ee=r(57),te=r.n(ee),re=function(){return Object(D.jsxs)("div",{className:te.a.preloaderContainer,children:[Object(D.jsx)("div",{children:"Loading:"}),Object(D.jsx)("img",{src:Y,alt:"preloader"})]})},ae=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),r=t.isFetching,a=t.error,n=t.isLoggedIn,s=t.isInitialized,c=Object(Z.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be 8 characters or more "):t.password="Required",t},onSubmit:function(t){var r;e((r=t,function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(S(!0)),e.next=4,v(r);case 4:t(E(!0)),e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(I(a)),console.log("Error: ",Object(p.a)({},e.t0)),e.abrupt("return",console.log(a));case 13:return e.prev=13,t(S(!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,7,13,16]])})));return function(t){return e.apply(this,arguments)}}()))}});return n?(console.log(n,s),Object(D.jsx)(i.a,{to:"/"})):Object(D.jsxs)("div",{className:M.a.commonContainer,children:[Object(D.jsx)("h1",{className:M.a.title,children:"Login Here"}),Object(D.jsx)("div",{className:M.a.error,children:a||null}),Object(D.jsxs)("form",{className:M.a.formBlock,onSubmit:c.handleSubmit,children:[Object(D.jsx)(H,{type:"text",label:"Email",formikFieldsProps:Object(p.a)({},c.getFieldProps("email"))}),c.touched.email&&c.errors.email?Object(D.jsx)("div",{className:M.a.registrationError,children:c.errors.email}):null,Object(D.jsx)(H,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},c.getFieldProps("password"))}),c.touched.password&&c.errors.password?Object(D.jsx)("div",{className:M.a.registrationError,children:c.errors.password}):null,Object(D.jsx)("div",{className:Q.a.checkbox,children:Object(D.jsx)($,{type:"checkbox",formikFieldsProps:Object(p.a)({},c.getFieldProps("rememberMe"))})}),r?Object(D.jsx)(re,{}):Object(D.jsx)(L,{type:"submit",name:"Login"})]})]})},ne="restore/SUCCESS_SUBMIT",se="restore/FAILED_SUBMIT",ce="restore/INIT",oe="restore/SET_IS_PASSWORD_CHANGED",ie=function(e){return{type:ne,status:e}},le=function(e,t){return{type:se,error:e,status:t}},ue=function(){return{type:ce}},de={currentEmail:null,error:null,status:null,isPasswordChanged:!1},be=function(){var e=Object(u.b)(),t=Object(i.g)().resetPasswordToken,r=Object(u.c)((function(e){return e.restore})),n=r.status,s=r.isPasswordChanged,c=Object(u.c)((function(e){return e.auth.isFetching}));Object(a.useEffect)((function(){e(ue())}),[]);var o=Object(Z.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var t={};return e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be more than 7 characters "):t.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(t.passwordConfirm="Password and Confirm Password must be equal"):t.passwordConfirm="Required",t},onSubmit:function(r){var a,n;r.password===r.passwordConfirm&&e((a=r.password,n=t,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(S(!0)),e.next=4,C.setNewPassword(a,n);case 4:t(S(!1)),t(ie("Password has been changed")),setTimeout((function(){return t({type:oe,isPasswordChanged:!0})}),3e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(S(!1)),t(le(e.t0.response.data.error,"Error"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}});return s?Object(D.jsx)(i.a,{to:Ae.LOGIN}):Object(D.jsxs)("div",{className:M.a.commonContainer,children:[Object(D.jsx)("h1",{className:M.a.title,children:"Set new password"}),Object(D.jsxs)("form",{className:M.a.formBlock,onSubmit:o.handleSubmit,children:[Object(D.jsx)("div",{className:M.a.error,children:n&&n}),Object(D.jsx)(H,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},o.getFieldProps("password"))}),o.touched.password&&o.errors.password?Object(D.jsx)("div",{className:M.a.registrationError,children:o.errors.password}):null,Object(D.jsx)(H,{type:"password",label:"Confirm Password",formikFieldsProps:Object(p.a)({},o.getFieldProps("passwordConfirm"))}),o.touched.passwordConfirm&&o.errors.passwordConfirm?Object(D.jsx)("div",{className:M.a.registrationError,children:o.errors.passwordConfirm}):null,c?Object(D.jsx)(re,{}):Object(D.jsx)(L,{type:"submit",name:"Send"})]})]})},je={isRegistered:!1,error:null},pe=function(){var e=Object(u.c)((function(e){return e.registration})),t=e.isRegistered,r=e.error,a=Object(u.c)((function(e){return e.auth.isFetching})),n=Object(u.b)(),s=Object(Z.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be more than 7 characters "):t.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(t.passwordConfirm="Password and Confirm Password must be equal"):t.passwordConfirm="Required",t},onSubmit:function(e){var t;e.password===e.passwordConfirm&&n((t=e,function(e){e(S(!0)),k(t).then((function(t){e({type:"registration/SET-REGISTRATION",value:!0})})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";console.log("Error: ",Object(p.a)({},t)),e(function(e){return{type:"registration/SET-ERROR",error:e}}(r))})).finally((function(){e(S(!1))}))}))}});return t?Object(D.jsx)(i.a,{to:Ae.LOGIN}):Object(D.jsxs)("div",{className:M.a.commonContainer,children:[Object(D.jsx)("h1",{className:M.a.title,children:"Registration"}),Object(D.jsxs)("form",{className:M.a.formBlock,onSubmit:s.handleSubmit,children:[Object(D.jsx)("div",{className:M.a.error,children:r||null}),Object(D.jsx)(H,{type:"text",label:"Email",error:r||s.errors&&s.touched,formikFieldsProps:Object(p.a)({},s.getFieldProps("email"))}),s.touched.email&&s.errors.email?Object(D.jsx)("div",{className:M.a.registrationError,children:s.errors.email}):null,Object(D.jsx)(H,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},s.getFieldProps("password"))}),s.touched.password&&s.errors.password?Object(D.jsx)("div",{className:M.a.registrationError,children:s.errors.password}):null,Object(D.jsx)(H,{type:"password",label:"Confirm Password",formikFieldsProps:Object(p.a)({},s.getFieldProps("passwordConfirm"))}),s.touched.passwordConfirm&&s.errors.passwordConfirm?Object(D.jsx)("div",{className:M.a.registrationError,children:s.errors.passwordConfirm}):null,a?Object(D.jsx)(re,{}):Object(D.jsx)(L,{type:"submit",name:"Sign up"})]})]})},me=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.restore})),r=t.currentEmail,n=t.status,s=Object(u.c)((function(e){return e.auth.isFetching})),c=Object(a.useCallback)((function(t){var r;e((r=t,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(S(!0)),e.next=4,C.restorePassword(r);case 4:t(S(!1)),t(ie("New password send to your email")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(S(!1)),t(le(e.t0.response.data.error,"Email not found"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[r]);Object(a.useEffect)((function(){e(ue())}),[]);var o=Object(Z.a)({initialValues:{email:""},validate:function(e){var t={};if(e.email){if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(e.email))return;t.email="Write correct email"}else t.email="Required";return t},onSubmit:function(e){c(e.email)}});return Object(D.jsxs)("div",{className:M.a.commonContainer,children:[Object(D.jsx)("h1",{className:M.a.title,children:"Restore"}),Object(D.jsxs)("form",{className:M.a.formBlock,onSubmit:o.handleSubmit,children:[Object(D.jsx)("div",{className:M.a.error,children:n&&n}),Object(D.jsx)(H,{type:"text",label:"Email",formikFieldsProps:Object(p.a)({},o.getFieldProps("email"))}),o.touched.email&&o.errors.email?Object(D.jsx)("div",{className:M.a.registrationError,children:o.errors.email}):null,s?Object(D.jsx)(re,{}):Object(D.jsx)(L,{type:"submit",name:"Send request"})]})]})},he=r(58),Oe=r.n(he),fe=function(){return Object(D.jsxs)("div",{className:Oe.a.test,children:[Object(D.jsx)(L,{name:"test"}),Object(D.jsx)(H,{label:"Test"}),Object(D.jsx)($,{})]})},xe=function(){return Object(D.jsx)("div",{children:"Error404"})},ve=r(11),we=r.n(ve),ge={cardsPack:[]},_e=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:r=e.sent,t({type:"pack/SET-PACKS",setPack:r.data.cardPacks}),console.log(r),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(I(a)),console.log("Error: ",Object(p.a)({},e.t0)),e.abrupt("return",console.log(a));case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Ce=function(e){var t=Object(u.b)();return Object(D.jsx)("div",{className:we.a.table,children:Object(D.jsxs)("div",{className:we.a.tableContainer,children:[Object(D.jsx)("div",{className:we.a.tableItem,children:e.name}),Object(D.jsx)("div",{className:we.a.tableItem,children:e.cardsCount}),Object(D.jsx)("div",{className:we.a.tableItem,children:e.updated}),Object(D.jsx)("div",{className:we.a.tableItem,children:e.url}),Object(D.jsx)("div",{className:we.a.tableItem}),Object(D.jsx)("button",{onClick:function(){var r;e.id&&t((r=e.id,function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(r);case 3:return e.next=5,t(_e());case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Error: ",Object(p.a)({},e.t0)),t(I(a)),e.abrupt("return",console.log(a));case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},children:"del"}),Object(D.jsx)(o.b,{to:Ae.CARDS+"/"+e.id,children:"CARDS"})]})})},ke=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.packs.cardsPack}));Object(a.useEffect)((function(){e(_e())}),[]);var r=t.map((function(e){return console.log(e._id),Object(D.jsx)(Ce,{name:e.name,cardsCount:e.cardsCount,updated:e.updated,url:e.user_name,id:e._id},e._id)}));return Object(D.jsxs)("div",{className:we.a.table,children:[Object(D.jsx)("h1",{className:we.a.title,children:"Packs"}),Object(D.jsxs)("div",{className:we.a.tableContainer,children:[Object(D.jsx)("div",{className:we.a.tableItem,children:"Pack name"}),Object(D.jsx)("div",{className:we.a.tableItem,children:"Cards count"}),Object(D.jsx)("div",{className:we.a.tableItem,children:"Updated"}),Object(D.jsx)("div",{className:we.a.tableItem,children:"Url"}),Object(D.jsx)("div",{className:we.a.tableItem,children:Object(D.jsx)("button",{onClick:function(){var t;e((t={name:"new hardcode pack"},function(){var e=Object(j.a)(b.a.mark((function e(r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:r(_e()),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Error: ",Object(p.a)({},e.t0)),r(I(a)),e.abrupt("return",console.log(a));case 12:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()))},children:"add"})})]}),r]})},Ne=r(60),Pe="cards/GET-CARDS",Ie="cards/SET-IS-FETCHING",Ee={cards:[],options:{},isFetching:!1},Se=function(e){return function(t){try{t({type:"cards/SET-IS-FETCHING"}),N.getCards(e).then((function(r){var a,n;t((a=e,n=r.data.cards,{type:Pe,packId:a,cards:n})),t({type:"cards/SET-IS-FETCHING"})}))}catch(r){console.log(r)}}},ye=r(12),Re=r.n(ye),Te=function(e){var t=e.id,r=e.question,a=e.answer,n=e.grade,s=e.updated,c=e.questionImg,o=e.cardsPackId,i=Object(u.b)(),l=function(e){var t=e.target.dataset.id;i(function(t,r){return function(a){try{N.delCard(t).then((function(){a(Se(r))}))}catch(e){console.log(e)}}}(t,o))},d=function(e){var t=e.target.dataset.id;i(function(t,r){return function(a){try{N.updateCard(t).then((function(){a(Se(r))}))}catch(e){console.log(e)}}}(t,o))};return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{className:Re.a.table__cell,children:r}),Object(D.jsx)("td",{className:Re.a.table__cell,children:a}),Object(D.jsx)("td",{className:Re.a.table__cell,children:n}),Object(D.jsx)("td",{className:Re.a.table__cell,children:s}),Object(D.jsx)("td",{className:Re.a.table__cell,children:c}),Object(D.jsx)("td",{className:Re.a.table__cell,children:Object(D.jsx)("button",{"data-id":t,onClick:function(e){return l(e)},children:"Del"})}),Object(D.jsx)("td",{className:Re.a.table__cell,children:Object(D.jsx)("button",{"data-id":t,onClick:function(e){return d(e)},children:"Update"})})]},t)},Fe=function(){var e=Object(u.c)((function(e){return e.cards})),t=e.cards,r=e.isFetching,n=Object(u.b)(),s=Object(i.g)().cardsPackId;Object(a.useEffect)((function(){n(Se(s))}),[]);var c=function(e){n(function(t){return function(r){try{N.addCard(t).then((function(){r(Se(t))}))}catch(e){console.log(e)}}}(s))},o=t.map((function(e){return Object(D.jsx)(Te,{id:e._id,question:e.question,answer:e.answer,grade:e.grade,updated:e.updated,cardsPackId:s,questionImg:e.questionImg},e._id)}));return Object(D.jsx)(D.Fragment,{children:r?Object(D.jsx)(re,{}):Object(D.jsxs)("table",{className:Re.a.table,children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{className:Re.a.table__row,children:[Object(D.jsx)("td",{className:Re.a.table__cell,children:"question"}),Object(D.jsx)("td",{className:Re.a.table__cell,children:"answer"}),Object(D.jsx)("td",{className:Re.a.table__cell,children:"Grade"}),Object(D.jsx)("td",{className:Re.a.table__cell,children:"updated"}),Object(D.jsx)("td",{className:Re.a.table__cell,children:"url"}),Object(D.jsx)("td",{className:Re.a.table__cell,children:Object(D.jsx)("button",{onClick:function(e){return c()},children:"Add"})})]})}),Object(D.jsx)("tbody",{children:o})]})})},Ae={LOGIN:"/login",NEW_PASSWORD:"/new-password",PROFILE:"/profile",REGISTRATION:"/registration",RESTORE_PASSWORD:"/restore-password",TEST:"/test",PACKS:"/packs",CARDS:"/cards"},De=function(){return Object(D.jsx)("div",{className:M.a.commonBlock,children:Object(D.jsxs)(i.d,{children:[Object(D.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(D.jsx)(i.a,{to:Ae.PROFILE})}}),Object(D.jsx)(i.b,{path:Ae.PROFILE,render:function(){return Object(D.jsx)(U,{})}}),Object(D.jsx)(i.b,{path:Ae.LOGIN,render:function(){return Object(D.jsx)(ae,{})}}),Object(D.jsx)(i.b,{path:"".concat(Ae.NEW_PASSWORD,"/:resetPasswordToken"),render:function(){return Object(D.jsx)(be,{})}}),Object(D.jsx)(i.b,{path:Ae.REGISTRATION,render:function(){return Object(D.jsx)(pe,{})}}),Object(D.jsx)(i.b,{path:Ae.RESTORE_PASSWORD,render:function(){return Object(D.jsx)(me,{})}}),Object(D.jsx)(i.b,{path:Ae.TEST,render:function(){return Object(D.jsx)(fe,{})}}),Object(D.jsx)(i.b,{path:Ae.PACKS,render:function(){return Object(D.jsx)(ke,{})}}),Object(D.jsx)(i.b,{path:"".concat(Ae.CARDS,"/:cardsPackId"),render:function(){return Object(D.jsx)(Fe,{})}}),Object(D.jsx)(i.b,{render:function(){return Object(D.jsx)(xe,{})}})]})})},Le=r(20),Ge=r.n(Le),qe=function(){return Object(D.jsxs)("div",{className:Ge.a.navbarBlock,children:[Object(D.jsx)(o.b,{to:Ae.PROFILE,activeClassName:Ge.a.active,children:"Profile"}),Object(D.jsx)(o.b,{to:Ae.REGISTRATION,activeClassName:Ge.a.active,children:"Registration"}),Object(D.jsx)(o.b,{to:Ae.RESTORE_PASSWORD,activeClassName:Ge.a.active,children:"Restore password"}),Object(D.jsx)(o.b,{to:Ae.NEW_PASSWORD,activeClassName:Ge.a.active,children:"New password"}),Object(D.jsx)(o.b,{to:Ae.LOGIN,activeClassName:Ge.a.active,children:"Login"}),Object(D.jsx)(o.b,{to:Ae.PACKS,activeClassName:Ge.a.active,children:"Packs"}),Object(D.jsx)(o.b,{to:Ae.CARDS,activeClassName:Ge.a.active,children:"Cards"}),Object(D.jsx)(o.b,{to:Ae.TEST,activeClassName:Ge.a.active,children:"Test"})]})},Be=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(qe,{}),Object(D.jsx)(De,{})]})},Ue=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,92)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},Ze=r(26),We=r(59),ze=Object(Ze.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registration/SET-REGISTRATION":return Object(p.a)(Object(p.a)({},e),{},{isRegistered:t.value});case"registration/SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-IS-LOGGED-IN":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"auth/ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"auth/INITIALIZED":return Object(p.a)(Object(p.a)({},e),{},{isInitialized:t.isInitialized});case"auth/SET-IS-FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case"auth/SET-USER-DATA":return Object(p.a)(Object(p.a)({},e),{},{authUserData:Object(p.a)(Object(p.a)({},e.authUserData),{},{name:t.name,avatar:t.avatar})});default:return e}},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(p.a)(Object(p.a)({},e),{},{currentEmail:null,status:t.status});case se:return Object(p.a)(Object(p.a)({},e),{},{currentEmail:null,error:t.error,status:t.status});case ce:return Object(p.a)(Object(p.a)({},e),{},{status:null,error:null});case oe:return Object(p.a)(Object(p.a)({},e),{},{isPasswordChanged:t.isPasswordChanged});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"pack/SET-PACKS":return Object(p.a)(Object(p.a)({},e),{},{cardsPack:t.setPack});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(p.a)(Object(p.a)({},e),{},{cards:Object(Ne.a)(t.cards)});case Ie:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!e.isFetching});default:return e}}}),He=Object(Ze.d)(ze,Object(Ze.a)(We.a));c.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(o.a,{children:Object(D.jsx)(u.a,{store:He,children:Object(D.jsx)(Be,{})})})}),document.getElementById("root")),Ue()}},[[91,1,2]]]);
//# sourceMappingURL=main.e5956a14.chunk.js.map