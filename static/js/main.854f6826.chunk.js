(this["webpackJsonpmy-new-app"]=this["webpackJsonpmy-new-app"]||[]).push([[0],{10:function(e,t,r){e.exports={table:"Packs_table__KZQpX",tableContainer:"Packs_tableContainer__3JuF2",tableItem:"Packs_tableItem__2rZOA",modal:"Packs_modal__1cmsZ"}},23:function(e,t,r){e.exports={navbarBlock:"Navbar_navbarBlock__2wyuz",active:"Navbar_active__3WZo-"}},28:function(e,t,r){e.exports={pagination:"Pagination_pagination___fUNg",currentButton:"Pagination_currentButton__1EqL1",paginationButton:"Pagination_paginationButton__1piUX",navigationButton:"Pagination_navigationButton__1oHVG"}},3:function(e,t,r){e.exports={commonBlock:"Common_commonBlock__1onnh",commonContainer:"Common_commonContainer__VPZFU",title:"Common_title__3AOve",formBlock:"Common_formBlock__1qqQX",error:"Common_error__32O98",registrationError:"Common_registrationError__o7Dr2"}},36:function(e,t,r){e.exports={group:"CommonInput_group__2fckV",bar:"CommonInput_bar__GpAhy",highlight:"CommonInput_highlight__3y1Xi",inputHighlighter:"CommonInput_inputHighlighter__2PJXc"}},42:function(e,t,r){e.exports={cbContainer:"CommonCheckbox_cbContainer__1Rlmv",optionInput:"CommonCheckbox_optionInput__K3vkX","click-wave":"CommonCheckbox_click-wave__2k1RO",radio:"CommonCheckbox_radio__13Kc_"}},53:function(e,t,r){e.exports={btn:"CommonButton_btn__1PMfW"}},54:function(e,t,r){e.exports={profileBlock:"Profile_profileBlock__9MaX2"}},55:function(e,t,r){e.exports={preloaderContainer:"Preloader_preloaderContainer__otx3L"}},58:function(e,t,r){e.exports={checkbox:"Login_checkbox__3ocOq"}},59:function(e,t,r){e.exports={test:"Test_test__1h1Vp"}},66:function(e,t,r){},67:function(e,t,r){},7:function(e,t,r){e.exports={cardsContainer:"cards_cardsContainer__3fBtF",table:"cards_table__1oLsk",table__cell:"cards_table__cell__vPzp2",modal:"cards_modal__3Zn31",btn:"cards_btn__2qGp3",paginationContainer:"cards_paginationContainer__2FZ5n"}},92:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(31),c=r.n(s),o=(r(66),r(67),r(12)),i=r(8),u=r(13),l=r(4),d=r(5),b=r.n(d),j=r(9),p=r(2),m=r(52),O=r.n(m).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),h=function(e,t){return O.get("cards/pack?page=".concat(e,"&pageCount=").concat(t))},f=function(e){return O.post("cards/pack",{cardsPack:Object(p.a)({},e)})},x=function(e){return O.put("cards/pack",{cardsPack:Object(p.a)({},e)})},v=function(e){return O.delete("cards/pack?id=".concat(e))},g=function(e){return O.post("/auth/login",e)},C=function(){return O.post("auth/me")},_=function(e,t,r){return O.put("auth/me",{name:e,avatar:t,userId:r})},w=function(){return O.delete("auth/me")},k={restorePassword:function(){var e=Object(j.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("auth/forgot",{email:t,from:"dreamonaut@mail.ru",message:"<div style=\"background-color: lime; padding: 15px\">\n              password recovery link:\n              <a href='http://localhost:3000/new_project/#/new-password/$token$'>\n              Follow the link to set a new password</a></div>"});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setNewPassword:function(){var e=Object(j.a)(b.a.mark((function e(t,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("auth/set-new-password",{password:t,resetPasswordToken:r});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},N=function(e){return O.post("auth/register",e)},P={getCards:function(){var e=Object(j.a)(b.a.mark((function e(t,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.get("cards/card?cardsPack_id=".concat(t,"&page=").concat(r,"&pageCount=").concat(a)));case 1:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),addCard:function(){var e=Object(j.a)(b.a.mark((function e(t,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.post("cards/card",{card:{cardsPack_id:"".concat(t),question:"".concat(r),answer:"".concat(a)}}));case 1:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),delCard:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.delete("cards/card?id=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateCard:function(){var e=Object(j.a)(b.a.mark((function e(t,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.put("cards/card",{card:{_id:"".concat(t),question:r,answer:a}}));case 1:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),addPack:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.post("/cards/pack",{cardsPack:{}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},S={isLoggedIn:!1,error:null,isFetching:!1,isInitialized:!1,authUserData:{name:"",avatar:"",userId:""}},E=function(e){return{type:"auth/ERROR",error:e}},I=function(e){return{type:"auth/SET-IS-LOGGED-IN",value:e}},T=function(e){return{type:"auth/SET-IS-FETCHING",isFetching:e}},y=function(e,t,r){return{type:"auth/SET-USER-DATA",name:e,avatar:t,userId:r}},R=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,C();case 4:a=e.sent,t(y(a.data.name,a.data.avatar,a.data._id)),t({type:"auth/INITIALIZED",isInitialized:!0}),t(I(!0));case 8:return e.prev=8,t(T(!1)),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,,8,11]])})));return function(t,r){return e.apply(this,arguments)}}()},F=function(e,t,r){return function(){var a=Object(j.a)(b.a.mark((function a(n,s){var c,o;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(T(!0)),a.next=4,_(e,t,r);case 4:c=a.sent,n(y(c.data.updatedUser.name,c.data.updatedUser.avatar,c.data._id)),a.next=14;break;case 8:return a.prev=8,a.t0=a.catch(0),o=a.t0.response?a.t0.response.data.error:a.t0.message+", more details in the console",n(E(o)),console.log("Error: ",Object(p.a)({},a.t0)),a.abrupt("return",console.log(o));case 14:return a.prev=14,n(T(!1)),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[0,8,14,17]])})));return function(e,t){return a.apply(this,arguments)}}()},A=r(26),q=r(53),L=r.n(q),B=r(0),U=function(e){e.red,e.className,e.error;var t=Object(A.a)(e,["red","className","error"]);return Object(B.jsx)("button",Object(p.a)(Object(p.a)({className:L.a.btn},t),{},{children:t.name}))},D=r(54),G=r.n(D),z=r.p+"static/media/avatar.6afeb838.png",V=r.p+"static/media/preloader.259f14e1.svg",Z=r(55),W=r.n(Z),H=function(){return Object(B.jsxs)("div",{className:W.a.preloaderContainer,children:[Object(B.jsx)("div",{children:"Loading:"}),Object(B.jsx)("img",{src:V,alt:"preloader"})]})},K=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),r=t.isInitialized,n=t.isLoggedIn,s=t.authUserData,c=t.isFetching,o=Object(a.useState)(!1),d=Object(u.a)(o,2),p=d[0],m=d[1],O=Object(a.useState)(s.name),h=Object(u.a)(O,2),f=h[0],x=h[1],v=Object(a.useState)(s.avatar),g=Object(u.a)(v,2),C=g[0];g[1];Object(a.useEffect)((function(){n&&r&&e(F(f,C,s.userId)),r||e(R())}),[]);return n?Object(B.jsxs)("div",{className:G.a.profileBlock,children:[Object(B.jsx)("div",{children:s.avatar?Object(B.jsx)("img",{src:z,alt:"user-avatar"}):s.avatar}),Object(B.jsx)("div",{children:p?Object(B.jsx)("input",{type:"text",onChange:function(e){x(e.currentTarget.value)},autoFocus:!0,onBlur:function(){m(!1),e(F(f,C,s.userId))},value:f}):Object(B.jsx)("span",{onDoubleClick:function(){m(!0),x(f)},children:c?Object(B.jsx)(H,{}):s.name})}),Object(B.jsx)("div",{children:Object(B.jsx)(U,{name:"logout",onClick:function(){e(function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,w();case 4:t(I(!1));case 5:return e.prev=5,t(T(!1)),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(t){return e.apply(this,arguments)}}())}})})]}):Object(B.jsx)(i.a,{to:Ke.LOGIN})},M=r(14),X=r(36),$=r.n(X),J=function(e){var t=e.type,r=e.formikFieldsProps,a=e.label;e.error,e.onChange,e.onBlur,e.value,Object(A.a)(e,["type","formikFieldsProps","label","error","onChange","onBlur","value"]);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:$.a.group,children:[Object(B.jsx)("input",Object(p.a)(Object(p.a)({type:t},r),{},{required:!0})),Object(B.jsx)("span",{className:$.a.highlight,children:" "}),Object(B.jsx)("span",{className:$.a.bar,children:" "}),Object(B.jsx)("label",{children:a})]})})},Q=r(3),Y=r.n(Q),ee=r(42),te=r.n(ee),re=function(e){e.type,e.onChange,e.onChangeChecked,e.className,e.spanClassName,e.children;var t=e.formikFieldsProps,r=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","formikFieldsProps"]);return Object(B.jsx)("div",{className:te.a.cbContainer,children:Object(B.jsxs)("label",{children:[Object(B.jsx)("input",Object(p.a)(Object(p.a)({className:te.a.optionInput,type:"checkbox"},t),r))," Remember me"]})})},ae=r(58),ne=r.n(ae),se=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),r=t.isFetching,a=t.error,n=t.isLoggedIn,s=t.isInitialized,c=Object(M.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be 8 characters or more "):t.password="Required",t},onSubmit:function(t){var r;e((r=t,function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,g(r);case 4:t(I(!0)),e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(E(a)),console.log("Error: ",Object(p.a)({},e.t0)),e.abrupt("return",console.log(a));case 13:return e.prev=13,t(T(!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,7,13,16]])})));return function(t){return e.apply(this,arguments)}}()))}});return n?(console.log(n,s),Object(B.jsx)(i.a,{to:"/"})):Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h1",{className:Y.a.title,children:"Login Here"}),Object(B.jsx)("div",{className:Y.a.error,children:a||null}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:c.handleSubmit,children:[Object(B.jsx)(J,{type:"text",label:"Email",formikFieldsProps:Object(p.a)({},c.getFieldProps("email"))}),c.touched.email&&c.errors.email?Object(B.jsx)("div",{className:Y.a.registrationError,children:c.errors.email}):null,Object(B.jsx)(J,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},c.getFieldProps("password"))}),c.touched.password&&c.errors.password?Object(B.jsx)("div",{className:Y.a.registrationError,children:c.errors.password}):null,Object(B.jsx)("div",{className:ne.a.checkbox,children:Object(B.jsx)(re,{type:"checkbox",formikFieldsProps:Object(p.a)({},c.getFieldProps("rememberMe"))})}),r?Object(B.jsx)(H,{}):Object(B.jsx)(U,{type:"submit",name:"Login"})]})]})},ce="restore/SUCCESS_SUBMIT",oe="restore/FAILED_SUBMIT",ie="restore/INIT",ue="restore/SET_IS_PASSWORD_CHANGED",le=function(e){return{type:ce,status:e}},de=function(e,t){return{type:oe,error:e,status:t}},be=function(){return{type:ie}},je={currentEmail:null,error:null,status:null,isPasswordChanged:!1},pe=function(){var e=Object(l.b)(),t=Object(i.g)().resetPasswordToken,r=Object(l.c)((function(e){return e.restore})),n=r.status,s=r.isPasswordChanged,c=Object(l.c)((function(e){return e.auth.isFetching}));Object(a.useEffect)((function(){e(be())}),[]);var o=Object(M.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var t={};return e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be more than 7 characters "):t.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(t.passwordConfirm="Password and Confirm Password must be equal"):t.passwordConfirm="Required",t},onSubmit:function(r){var a,n;r.password===r.passwordConfirm&&e((a=r.password,n=t,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,k.setNewPassword(a,n);case 4:t(T(!1)),t(le("Password has been changed")),setTimeout((function(){return t({type:ue,isPasswordChanged:!0})}),3e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(T(!1)),t(de(e.t0.response.data.error,"Error"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}});return s?Object(B.jsx)(i.a,{to:Ke.LOGIN}):Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h1",{className:Y.a.title,children:"Set new password"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:o.handleSubmit,children:[Object(B.jsx)("div",{className:Y.a.error,children:n&&n}),Object(B.jsx)(J,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},o.getFieldProps("password"))}),o.touched.password&&o.errors.password?Object(B.jsx)("div",{className:Y.a.registrationError,children:o.errors.password}):null,Object(B.jsx)(J,{type:"password",label:"Confirm Password",formikFieldsProps:Object(p.a)({},o.getFieldProps("passwordConfirm"))}),o.touched.passwordConfirm&&o.errors.passwordConfirm?Object(B.jsx)("div",{className:Y.a.registrationError,children:o.errors.passwordConfirm}):null,c?Object(B.jsx)(H,{}):Object(B.jsx)(U,{type:"submit",name:"Send"})]})]})},me={isRegistered:!1,error:null},Oe=function(){var e=Object(l.c)((function(e){return e.registration})),t=e.isRegistered,r=e.error,a=Object(l.c)((function(e){return e.auth.isFetching})),n=Object(l.b)(),s=Object(M.a)({initialValues:{email:"",password:"",passwordConfirm:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length>15?t.password="Password must be 15 characters or less":e.password.length<8&&(t.password="Password must be more than 7 characters "):t.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(t.passwordConfirm="Password and Confirm Password must be equal"):t.passwordConfirm="Required",t},onSubmit:function(e){var t;e.password===e.passwordConfirm&&n((t=e,function(e){e(T(!0)),N(t).then((function(t){e({type:"registration/SET-REGISTRATION",value:!0})})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";console.log("Error: ",Object(p.a)({},t)),e(function(e){return{type:"registration/SET-ERROR",error:e}}(r))})).finally((function(){e(T(!1))}))}))}});return t?Object(B.jsx)(i.a,{to:Ke.LOGIN}):Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h1",{className:Y.a.title,children:"Registration"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:s.handleSubmit,children:[Object(B.jsx)("div",{className:Y.a.error,children:r||null}),Object(B.jsx)(J,{type:"text",label:"Email",error:r||s.errors&&s.touched,formikFieldsProps:Object(p.a)({},s.getFieldProps("email"))}),s.touched.email&&s.errors.email?Object(B.jsx)("div",{className:Y.a.registrationError,children:s.errors.email}):null,Object(B.jsx)(J,{type:"password",label:"Password",formikFieldsProps:Object(p.a)({},s.getFieldProps("password"))}),s.touched.password&&s.errors.password?Object(B.jsx)("div",{className:Y.a.registrationError,children:s.errors.password}):null,Object(B.jsx)(J,{type:"password",label:"Confirm Password",formikFieldsProps:Object(p.a)({},s.getFieldProps("passwordConfirm"))}),s.touched.passwordConfirm&&s.errors.passwordConfirm?Object(B.jsx)("div",{className:Y.a.registrationError,children:s.errors.passwordConfirm}):null,a?Object(B.jsx)(H,{}):Object(B.jsx)(U,{type:"submit",name:"Sign up"})]})]})},he=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.restore})),r=t.currentEmail,n=t.status,s=Object(l.c)((function(e){return e.auth.isFetching})),c=Object(a.useCallback)((function(t){var r;e((r=t,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,k.restorePassword(r);case 4:t(T(!1)),t(le("New password send to your email")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(T(!1)),t(de(e.t0.response.data.error,"Email not found"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[r]);Object(a.useEffect)((function(){e(be())}),[]);var o=Object(M.a)({initialValues:{email:""},validate:function(e){var t={};if(e.email){if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(e.email))return;t.email="Write correct email"}else t.email="Required";return t},onSubmit:function(e){c(e.email)}});return Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h1",{className:Y.a.title,children:"Restore"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:o.handleSubmit,children:[Object(B.jsx)("div",{className:Y.a.error,children:n&&n}),Object(B.jsx)(J,{type:"text",label:"Email",formikFieldsProps:Object(p.a)({},o.getFieldProps("email"))}),o.touched.email&&o.errors.email?Object(B.jsx)("div",{className:Y.a.registrationError,children:o.errors.email}):null,s?Object(B.jsx)(H,{}):Object(B.jsx)(U,{type:"submit",name:"Send request"})]})]})},fe=r(59),xe=r.n(fe),ve=function(){return Object(B.jsxs)("div",{className:xe.a.test,children:[Object(B.jsx)(U,{name:"test"}),Object(B.jsx)(J,{label:"Test"}),Object(B.jsx)(re,{})]})},ge=function(){return Object(B.jsx)("div",{children:"Error404"})},Ce=r(10),_e=r.n(Ce),we={cardsPack:[],pageSize:4,currentPage:1,cardPacksTotalCount:0,portionSize:10,userPackId:""},ke=function(e){return{type:"pack/SET_CURRENT_PAGE",page:e}},Ne=function(e,t){return function(){var r=Object(j.a)(b.a.mark((function r(a){var n,s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a(T(!0)),r.next=4,a(R());case 4:return r.next=6,h(e,t);case 6:n=r.sent,a({type:"pack/SET-PACKS",setPack:n.data.cardPacks}),a({type:"pack/SET_TOTAL_CARD_PACKS_COUNT",totalCardPacksCount:n.data.cardPacksTotalCount}),console.log(n),r.next=18;break;case 12:return r.prev=12,r.t0=r.catch(0),s=r.t0.response?r.t0.response.data.error:r.t0.message+", more details in the console",a(E(s)),console.log("Error: ",Object(p.a)({},r.t0)),r.abrupt("return",console.log(s));case 18:return r.prev=18,setTimeout((function(){a(T(!1))}),1e3),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[0,12,18,21]])})));return function(e){return r.apply(this,arguments)}}()},Pe=function(e){var t=Object(l.b)();return Object(B.jsx)("div",{className:_e.a.table,children:Object(B.jsxs)("div",{className:_e.a.tableContainer,children:[Object(B.jsx)("div",{className:_e.a.tableItem,children:e.name}),Object(B.jsx)("div",{className:_e.a.tableItem,children:e.cardsCount}),Object(B.jsx)("div",{className:_e.a.tableItem,children:e.updated}),Object(B.jsx)("div",{className:_e.a.tableItem,children:e.url}),Object(B.jsxs)("div",{className:_e.a.tableItem,children:[Object(B.jsx)("button",{onClick:function(){var r,a,n;e.id&&t((r=e.id,function(){var e=Object(j.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,v(r);case 4:return t(ke(1)),e.next=7,t(Ne(a,n));case 7:e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(0),s=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Error: ",Object(p.a)({},e.t0)),t(E(s)),e.abrupt("return",console.log(s));case 15:return e.prev=15,t(T(!1)),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,9,15,18]])})));return function(t){return e.apply(this,arguments)}}()))},disabled:e.userAuthId!==e.user_id,children:"del"}),Object(B.jsx)("button",{onClick:function(){e.onUpdate(),e.cb(e.id)},disabled:e.userAuthId!==e.user_id,children:"update"})]}),Object(B.jsxs)("div",{className:_e.a.tableItem,children:[Object(B.jsx)(o.b,{to:Ke.CARDS+"/"+e.id,children:"Cards"}),Object(B.jsx)(o.b,{to:Ke.LEARN+"/"+e.id,children:"Learn"})]})]})})},Se=r(28),Ee=r.n(Se),Ie=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),r=[],n=1;n<=t;n++)r.push(n);var s=Math.ceil(t/e.portionSize),c=Object(a.useState)(1),o=Object(u.a)(c,2),i=o[0],l=o[1],d=(i-1)*e.portionSize+1,b=i*e.portionSize;return Object(B.jsxs)("div",{className:Ee.a.pagination,children:[i>1&&Object(B.jsx)("button",{onClick:function(){return l(i-1)},disabled:e.isFetching,className:Ee.a.navigationButton,children:"Prev"}),r.filter((function(e){return e>=d&&e<=b})).map((function(t){return Object(B.jsxs)("button",{className:e.currentPage===t?Ee.a.currentButton:Ee.a.paginationButton,onClick:function(){return e.onCurrentPage(t)},disabled:e.isFetching,children:[t," "]},t)})),s>i&&Object(B.jsx)("button",{onClick:function(){return l(i+1)},disabled:e.isFetching,className:Ee.a.navigationButton,children:"Next"})]})};function Te(e){var t=Object(a.useState)(e),r=Object(u.a)(t,2),n=r[0],s=r[1],c=Object(a.useRef)(null),o=function(e){"Escape"===e.key&&s(!1)},i=function(e){c.current&&!c.current.contains(e.target)&&s(!1)};return Object(a.useEffect)((function(){return document.addEventListener("keydown",o,!0),document.addEventListener("click",i,!0),function(){document.removeEventListener("keydown",o,!0),document.removeEventListener("click",i,!0)}})),{ref:c,isComponentVisible:n,setIsComponentVisible:s}}var ye=r(7),Re=r.n(ye),Fe=function(e){var t=e.show,r=e.closeCB,a=e.children;e.onShow;return Object(B.jsx)(B.Fragment,{children:t&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("button",{className:Re.a.btn,onClick:r,children:"X"}),a]})})},Ae="",qe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.packs.cardsPack})),r=Object(l.c)((function(e){return e.packs})),n=r.cardPacksTotalCount,s=r.portionSize,c=r.currentPage,o=r.pageSize,i=Object(l.c)((function(e){return e.auth})).isFetching,d=Object(l.c)((function(e){return e.auth.authUserData.userId})),m=function(){P(!0),L(!0)};Object(a.useEffect)((function(){e(Ne(c,o))}),[]);var O=function(e){Ae=e},h=t.map((function(e){return Object(B.jsx)(Pe,{name:e.name,cardsCount:e.cardsCount,updated:e.updated,url:e.user_name,id:e._id,user_id:e.user_id,userAuthId:d,onUpdate:m,cb:O},e._id)})),v=Object(a.useState)(!1),g=Object(u.a)(v,2),C=g[0],_=g[1],w=Object(a.useState)(!1),k=Object(u.a)(w,2),N=k[0],P=k[1],S=Te(!1),I=S.ref,y=S.isComponentVisible,R=S.setIsComponentVisible,F=Te(!1),A=F.ref,q=F.isComponentVisible,L=F.setIsComponentVisible,D=Object(M.a)({initialValues:{packName:"",updatePackName:""},validate:function(e){var t={};return e.packName||(t.packName="Required"),t},onSubmit:function(t){var r,a,n;e((r={name:t.packName},function(){var e=Object(j.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,f(r);case 4:t(ke(1)),t(Ne(a,n)),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),s=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Error: ",Object(p.a)({},e.t0)),t(E(s)),e.abrupt("return",console.log(s));case 14:return e.prev=14,t(T(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,8,14,17]])})));return function(t){return e.apply(this,arguments)}}())),t.packName="",_(!1)}}),G=Object(M.a)({initialValues:{updatePackName:""},validate:function(e){var t={};return e.updatePackName||(t.updatePackName="Required"),t},onSubmit:function(t,r){var a,n,s;e((a={_id:Ae,name:t.updatePackName},function(){var e=Object(j.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T(!0)),e.next=4,x(a);case 4:t(ke(1)),t(Ne(n,s)),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Error: ",Object(p.a)({},e.t0)),t(E(r)),e.abrupt("return",console.log(r));case 14:return e.prev=14,t(T(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,8,14,17]])})));return function(t){return e.apply(this,arguments)}}())),t.updatePackName="",P(!1)}});return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:_e.a.table,children:[Object(B.jsx)("h1",{className:_e.a.title,children:"Packs"}),Object(B.jsx)(Ie,{totalItemsCount:n,pageSize:o,currentPage:c,onCurrentPage:function(t){e(ke(t)),e(Ne(t,o))},portionSize:s,isFetching:i}),Object(B.jsxs)("div",{className:_e.a.tableContainer,children:[Object(B.jsx)("div",{className:_e.a.tableItem,children:"Pack name"}),Object(B.jsx)("div",{className:_e.a.tableItem,children:"Cards count"}),Object(B.jsx)("div",{className:_e.a.tableItem,children:"Updated"}),Object(B.jsx)("div",{className:_e.a.tableItem,children:"Url"}),Object(B.jsx)("div",{className:_e.a.tableItem,children:Object(B.jsx)("button",{onClick:function(){_(!0),R(!0)},children:"add"})}),Object(B.jsx)("div",{className:_e.a.tableItem,children:"Go to link"})]}),i?Object(B.jsx)(H,{}):h]}),Object(B.jsx)("div",{className:_e.a.modal,ref:I,children:y&&Object(B.jsx)(Fe,{show:C,closeCB:function(){_(!1)},children:Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h2",{className:Y.a.title,children:"Add Pack"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:D.handleSubmit,children:[Object(B.jsx)(J,{type:"text",label:"Pack Name",formikFieldsProps:Object(p.a)({},D.getFieldProps("packName"))}),D.touched.packName&&D.errors.packName?Object(B.jsx)("div",{className:Y.a.registrationError,children:D.errors.packName}):null,Object(B.jsx)(U,{type:"submit",name:"Add pack"})]})]})})}),Object(B.jsx)("div",{className:_e.a.modal,ref:A,children:q&&Object(B.jsx)(Fe,{show:N,closeCB:function(){P(!1)},children:Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h2",{className:Y.a.title,children:"Update Pack"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:G.handleSubmit,children:[Object(B.jsx)(J,{type:"text",label:"Pack Name",formikFieldsProps:Object(p.a)({},G.getFieldProps("updatePackName"))}),G.touched.updatePackName&&G.errors.updatePackName?Object(B.jsx)("div",{className:Y.a.registrationError,children:G.errors.updatePackName}):null,Object(B.jsx)(U,{type:"submit",name:"Update pack"})]})]})})})]})},Le=r(61),Be="cards/GET-CARDS",Ue="cards/SET-IS-FETCHING",De={cards:[],options:{},isFetching:!1,cardsTotalCount:0,pageSize:5,currentPage:1,portionSize:4,userId:""},Ge=function(e,t,r){return function(a){try{a({type:"cards/SET-IS-FETCHING"}),P.getCards(e,t,r).then((function(t){console.log(t),a(function(e,t){return{type:Be,packId:e,cards:t}}(e,t.data.cards)),a({type:"SET_TOTAL_CARDS_COUNT",totalCardsCount:t.data.cardsTotalCount}),a({type:"SET_USER_ID",userId:t.data.packUserId}),a({type:"cards/SET-IS-FETCHING"})}))}catch(n){console.log(n)}}},ze=function(e){var t=e.id,r=e.question,n=e.answer,s=e.grade,c=e.updated,o=e.questionImg,i=e.cardsPackId,d=e.userId,b=Object(l.b)(),j=Object(a.useState)(!1),m=Object(u.a)(j,2),O=m[0],h=m[1],f=Object(l.c)((function(e){return e.auth.authUserData.userId})),x=Te(!0),v=x.ref,g=x.isComponentVisible,C=x.setIsComponentVisible,_=Object(M.a)({initialValues:{question:"",answer:""},onSubmit:function(e,r){b(function(e,t,a,n,s,c){return function(o){try{P.updateCard(e,n,a).then((function(){o(Ge(t,s,c))}))}catch(r){console.log(r)}}}(t,i,e.question,e.answer)),e.question="",e.answer="",h(!1)}});return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:Re.a.table__cell,children:r}),Object(B.jsx)("td",{className:Re.a.table__cell,children:n}),Object(B.jsx)("td",{className:Re.a.table__cell,children:s}),Object(B.jsx)("td",{className:Re.a.table__cell,children:c}),Object(B.jsx)("td",{className:Re.a.table__cell,children:o}),Object(B.jsx)("td",{className:Re.a.table__cell,children:Object(B.jsx)("button",{"data-id":t,onClick:function(e){var t=e.currentTarget.dataset.id;t&&b(function(t,r,a,n){return function(s){try{P.delCard(t).then((function(){s(Ge(r,a,n))}))}catch(e){console.log(e)}}}(t,i))},disabled:d!==f,children:"Del"})}),Object(B.jsx)("td",{className:Re.a.table__cell,children:Object(B.jsx)("button",{onClick:function(){h(!0),C(!0)},disabled:d!==f,children:"Update"})})]},t),Object(B.jsx)("div",{className:Re.a.modal,ref:v,children:g&&Object(B.jsx)(Fe,{show:O,closeCB:function(){h(!1)},children:Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h2",{className:Y.a.title,children:"Update Card"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:_.handleSubmit,children:[Object(B.jsx)(J,{type:"text",label:"question",formikFieldsProps:Object(p.a)({},_.getFieldProps("question"))}),Object(B.jsx)(J,{type:"text",label:"answer",formikFieldsProps:Object(p.a)({},_.getFieldProps("answer"))}),Object(B.jsx)(U,{type:"submit",name:"Update Card"})]})]})})})]})},Ve=function(){var e=Object(l.c)((function(e){return e.cards})),t=e.cards,r=e.isFetching,n=e.cardsTotalCount,s=e.currentPage,c=e.pageSize,o=e.portionSize,d=Object(a.useState)(!1),b=Object(u.a)(d,2),j=b[0],m=b[1],O=Object(l.b)(),h=Object(i.g)().cardsPackId;Object(a.useEffect)((function(){O(Ge(h,s,c))}),[O,h]);var f=Object(l.c)((function(e){return e.auth.authUserData.userId})),x=Object(l.c)((function(e){return e.cards.userId})),v=t.map((function(e){return Object(B.jsx)(ze,{id:e._id,userId:e.user_id,question:e.question,answer:e.answer,grade:e.grade,updated:e.updated,cardsPackId:h,questionImg:e.questionImg},e._id)})),g=Object(M.a)({initialValues:{question:"",answer:""},validate:function(e){var t={};return e.question||(t.question="Required"),e.answer||(t.answer="Required"),t},onSubmit:function(e){O(function(e,t,r,a,n){return function(s){try{P.addCard(e,t,r).then((function(){s(Ge(e,a,n))}))}catch(c){console.log(c)}}}(h,e.question,e.answer)),e.question="",e.answer="",m(!1)}}),C=Te(!0),_=C.ref,w=C.isComponentVisible,k=C.setIsComponentVisible;return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:Re.a.cardsContainer,children:[Object(B.jsx)("div",{className:Re.a.paginationContainer,children:Object(B.jsx)(Ie,{totalItemsCount:n,pageSize:c,currentPage:s,onCurrentPage:function(e){O({type:"SET_CURRENT_PAGE",page:e}),O(Ge(h,s,c))},portionSize:o,isFetching:r})}),r?Object(B.jsx)(H,{}):Object(B.jsxs)("table",{className:Re.a.table,children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{className:Re.a.table__row,children:[Object(B.jsx)("td",{className:Re.a.table__cell,children:"question"}),Object(B.jsx)("td",{className:Re.a.table__cell,children:"answer"}),Object(B.jsx)("td",{className:Re.a.table__cell,children:"Grade"}),Object(B.jsx)("td",{className:Re.a.table__cell,children:"updated"}),Object(B.jsx)("td",{className:Re.a.table__cell,children:"url"}),Object(B.jsx)("td",{className:Re.a.table__cell,children:Object(B.jsx)("button",{onClick:function(){m(!0),k(!0)},disabled:x!==f,children:"Add"})})]})}),Object(B.jsx)("tbody",{children:v})]}),Object(B.jsx)("div",{className:Re.a.modal,ref:_,children:w&&Object(B.jsx)(Fe,{show:j,closeCB:function(){m(!1)},children:Object(B.jsxs)("div",{className:Y.a.commonContainer,children:[Object(B.jsx)("h2",{className:Y.a.title,children:"Add Card"}),Object(B.jsxs)("form",{className:Y.a.formBlock,onSubmit:g.handleSubmit,children:[Object(B.jsx)(J,{type:"text",label:"question",formikFieldsProps:Object(p.a)({},g.getFieldProps("question"))}),g.touched.question&&g.errors.question?Object(B.jsx)("div",{className:Y.a.registrationError,children:g.errors.question}):null,Object(B.jsx)(J,{type:"text",label:"answer",formikFieldsProps:Object(p.a)({},g.getFieldProps("answer"))}),g.touched.answer&&g.errors.answer?Object(B.jsx)("div",{className:Y.a.registrationError,children:g.errors.answer}):null,Object(B.jsx)(U,{type:"submit",name:"Add card"})]})]})})})]})})},Ze=["\u043d\u0435 \u0437\u043d\u0430\u043b","\u0437\u0430\u0431\u044b\u043b","\u0434\u043e\u043b\u0433\u043e \u0434\u0443\u043c\u0430\u043b","\u043f\u0435\u0440\u0435\u043f\u0443\u0442\u0430\u043b","\u0437\u043d\u0430\u043b"],We=function(e){var t=e.reduce((function(e,t){return e+(6-t.grade)*(6-t.grade)}),0),r=Math.random()*t,a=e.reduce((function(e,t,a){var n=e.sum+(6-t.grade)*(6-t.grade);return{sum:n,id:n<r?a:e.id}}),{sum:0,id:-1});return console.log("test: ",t,r,a),e[a.id+1]},He=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)(!0),c=Object(u.a)(s,2),o=c[0],d=c[1],b=Object(l.c)((function(e){return e.cards.cards})),j=Object(i.g)().cardsPackId,p=Object(a.useState)(),m=Object(u.a)(p,2),O=m[0],h=m[1],f=Object(l.b)();Object(a.useEffect)((function(){return console.log("LearnContainer useEffect"),o&&(f(Ge(j)),d(!1)),console.log("cards",b),b.length>0&&h(We(b)),function(){console.log("LearnContainer useEffect off")}}),[f,j,b,o]);return Object(B.jsxs)("div",{children:["LearnPage",Object(B.jsx)("div",{children:O&&O.question}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(){return n(!0)},children:"check"})}),r&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{children:O&&O.answer}),Ze.map((function(e,t){return Object(B.jsx)("button",{onClick:function(){},children:e},"grade-"+t)})),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(){n(!1),b.length>0&&h(We(b))},children:"next"})})]})]})},Ke={LOGIN:"/login",NEW_PASSWORD:"/new-password",PROFILE:"/profile",REGISTRATION:"/registration",RESTORE_PASSWORD:"/restore-password",TEST:"/test",PACKS:"/packs",CARDS:"/cards",LEARN:"/learn"},Me=function(){return Object(B.jsx)("div",{className:Y.a.commonBlock,children:Object(B.jsxs)(i.d,{children:[Object(B.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(B.jsx)(i.a,{to:Ke.PROFILE})}}),Object(B.jsx)(i.b,{path:Ke.PROFILE,render:function(){return Object(B.jsx)(K,{})}}),Object(B.jsx)(i.b,{path:Ke.LOGIN,render:function(){return Object(B.jsx)(se,{})}}),Object(B.jsx)(i.b,{path:"".concat(Ke.NEW_PASSWORD,"/:resetPasswordToken"),render:function(){return Object(B.jsx)(pe,{})}}),Object(B.jsx)(i.b,{path:Ke.REGISTRATION,render:function(){return Object(B.jsx)(Oe,{})}}),Object(B.jsx)(i.b,{path:Ke.RESTORE_PASSWORD,render:function(){return Object(B.jsx)(he,{})}}),Object(B.jsx)(i.b,{path:Ke.TEST,render:function(){return Object(B.jsx)(ve,{})}}),Object(B.jsx)(i.b,{path:Ke.PACKS,render:function(){return Object(B.jsx)(qe,{})}}),Object(B.jsx)(i.b,{path:"".concat(Ke.CARDS,"/:cardsPackId"),render:function(){return Object(B.jsx)(Ve,{})}}),Object(B.jsx)(i.b,{path:"".concat(Ke.LEARN,"/:cardsPackId"),render:function(){return Object(B.jsx)(He,{})}}),Object(B.jsx)(i.b,{render:function(){return Object(B.jsx)(ge,{})}})]})})},Xe=r(23),$e=r.n(Xe),Je=function(){return Object(B.jsxs)("div",{className:$e.a.navbarBlock,children:[Object(B.jsx)(o.b,{to:Ke.PROFILE,activeClassName:$e.a.active,children:"Profile"}),Object(B.jsx)(o.b,{to:Ke.REGISTRATION,activeClassName:$e.a.active,children:"Registration"}),Object(B.jsx)(o.b,{to:Ke.RESTORE_PASSWORD,activeClassName:$e.a.active,children:"Restore password"}),Object(B.jsx)(o.b,{to:Ke.NEW_PASSWORD,activeClassName:$e.a.active,children:"New password"}),Object(B.jsx)(o.b,{to:Ke.LOGIN,activeClassName:$e.a.active,children:"Login"}),Object(B.jsx)(o.b,{to:Ke.PACKS,activeClassName:$e.a.active,children:"Packs"}),Object(B.jsx)(o.b,{to:Ke.TEST,activeClassName:$e.a.active,children:"Test"})]})},Qe=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(Je,{}),Object(B.jsx)(Me,{})]})},Ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,93)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},et=r(27),tt=r(60),rt=Object(et.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registration/SET-REGISTRATION":return Object(p.a)(Object(p.a)({},e),{},{isRegistered:t.value});case"registration/SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-IS-LOGGED-IN":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"auth/ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"auth/INITIALIZED":return Object(p.a)(Object(p.a)({},e),{},{isInitialized:t.isInitialized});case"auth/SET-IS-FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case"auth/SET-USER-DATA":return Object(p.a)(Object(p.a)({},e),{},{authUserData:Object(p.a)(Object(p.a)({},e.authUserData),{},{name:t.name,avatar:t.avatar,userId:t.userId})});default:return e}},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(p.a)(Object(p.a)({},e),{},{currentEmail:null,status:t.status});case oe:return Object(p.a)(Object(p.a)({},e),{},{currentEmail:null,error:t.error,status:t.status});case ie:return Object(p.a)(Object(p.a)({},e),{},{status:null,error:null});case ue:return Object(p.a)(Object(p.a)({},e),{},{isPasswordChanged:t.isPasswordChanged});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"pack/SET-PACKS":return Object(p.a)(Object(p.a)({},e),{},{cardsPack:t.setPack});case"pack/SET_TOTAL_CARD_PACKS_COUNT":return Object(p.a)(Object(p.a)({},e),{},{cardPacksTotalCount:t.totalCardPacksCount});case"pack/SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.page});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return Object(p.a)(Object(p.a)({},e),{},{cards:Object(Le.a)(t.cards)});case Ue:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!e.isFetching});case"SET_TOTAL_CARDS_COUNT":return Object(p.a)(Object(p.a)({},e),{},{cardsTotalCount:t.totalCardsCount});case"SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.page});case"SET_USER_ID":return Object(p.a)(Object(p.a)({},e),{},{userId:t.userId});default:return e}}}),at=Object(et.d)(rt,Object(et.a)(tt.a));c.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(o.a,{children:Object(B.jsx)(l.a,{store:at,children:Object(B.jsx)(Qe,{})})})}),document.getElementById("root")),Ye()}},[[92,1,2]]]);
//# sourceMappingURL=main.854f6826.chunk.js.map