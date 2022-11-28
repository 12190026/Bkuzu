"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[820],{820:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(3430),r=n(2791),s=n(6828),i=n(1606),o=n(6513),l=n(5720),c=n(7166),d=n(3032),u=n(8489),p=n(1044),x=n(1876),g=n(9538),m=n(4664),h=(p.ZP.create({baseURL:"https://bkuzuauth.herokuapp.com/"}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=(0,r.useContext)(x.QE),n=t.uiDispatch,s=(0,r.useContext)(x.St),i=s.userDispatch,o=(0,g.k6)(),l=(0,r.useState)(!1),h=(0,a.Z)(l,2),f=h[0],v=h[1],Z=(0,r.useState)(null),b=(0,a.Z)(Z,2),y=b[0],w=b[1],S=(0,r.useState)({email:"",password:""}),k=(0,a.Z)(S,2),j=k[0],C=k[1];(0,r.useEffect)((function(){return C((0,u.Z)((0,u.Z)({},j),{},{email:e?e.email:""})),function(){}}),[]);var E=function(e){C((0,u.Z)((0,u.Z)({},j),{},{password:e.target.value})),w((0,u.Z)((0,u.Z)({},y),{},{password:""}))},W=function(e){C((0,u.Z)((0,u.Z)({},j),{},{email:e.target.value})),w((0,u.Z)((0,u.Z)({},y),{},{email:""}))};function T(e){return _.apply(this,arguments)}function _(){return(_=(0,d.Z)((0,c.Z)().mark((function e(t){var a,r,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.prev=2,e.next=5,p.ZP.post("https://bkuzuauth.herokuapp.com/api/auth/login",j);case 5:return a=e.sent,r=a.data,localStorage.setItem("token",JSON.stringify(r.data.token)),e.next=10,(0,m.k)();case 10:s=e.sent,v(!1),i({type:"SET_CURRENT_USER",payload:s.data.user}),n({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:r.message}}),o.push("/home"),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),v(!1),console.log(e.t0),e.t0&&e.t0.response&&(422===e.t0.response.status&&w((0,u.Z)({},e.t0.response.data.error)),400===e.t0.response.status&&n({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:e.t0.response.data.error}}));case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}return{loading:f,error:y,handleLoginUser:T,handleEmailChange:W,handlePasswordChange:E}}),f=n(184);var v=function(){var e=h(),t=e.loading,n=e.error,a=e.handleLoginUser,c=e.handlePasswordChange,d=e.handleEmailChange;return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("form",{onSubmit:a,children:[(0,f.jsx)(s.Z,{style:{width:"100%"},children:(0,f.jsx)(i.Z,{onChange:d,label:"Email",variant:"outlined",error:!(!n||!n.email),helperText:n&&n.email?n.email:null})}),(0,f.jsx)(s.Z,{style:{width:"100%"},children:(0,f.jsx)(i.Z,{error:!(!n||!n.password),helperText:n&&n.password?n.password:null,onChange:c,label:"Password",variant:"outlined",style:{marginTop:"16px"},type:"password"})}),(0,f.jsx)(o.Z,{type:"submit",disabled:t,style:{width:"100%",background:"rgb(24,119,242)",color:"#fff",marginTop:"16px"},variant:"contained",children:t?(0,f.jsx)(l.Z,{variant:"indeterminate",size:25,style:{color:"#fff"}}):" Log In"})]})})},Z=function(){var e=(0,r.useContext)(x.QE).uiDispatch,t=(0,r.useContext)(x.St).userDispatch,n=(0,g.k6)(),s=(0,r.useState)(!1),i=(0,a.Z)(s,2),o=i[0],l=i[1],h=(0,r.useState)(null),f=(0,a.Z)(h,2),v=f[0],Z=f[1],b=(0,r.useState)({name:"",email:"",password:""}),y=(0,a.Z)(b,2),w=y[0],S=y[1];function k(){return(k=(0,d.Z)((0,c.Z)().mark((function a(r){var s,i,o;return(0,c.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),l(!0),a.prev=2,a.next=5,p.ZP.post("https://bkuzuauth.herokuapp.com/api/auth/signup",w);case 5:return s=a.sent,i=s.data,localStorage.setItem("token",JSON.stringify(i.data.token)),a.next=10,(0,m.k)();case 10:o=a.sent,l(!1),t({type:"SET_CURRENT_USER",payload:o.data.user}),e({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:i.message}}),n.push("/home"),a.next=22;break;case 17:a.prev=17,a.t0=a.catch(2),l(!1),console.log(a.t0),a.t0&&a.t0.response&&(422===a.t0.response.status&&Z((0,u.Z)({},a.t0.response.data.error)),400===a.t0.response.status&&e({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:a.t0.response.data.error}}));case 22:case"end":return a.stop()}}),a,null,[[2,17]])})))).apply(this,arguments)}return{loading:o,error:v,handleSignupUser:function(e){return k.apply(this,arguments)},handleNameChange:function(e){Z((0,u.Z)((0,u.Z)({},v),{},{name:""})),S((0,u.Z)((0,u.Z)({},w),{},{name:e.target.value}))},handleEmailChange:function(e){Z((0,u.Z)((0,u.Z)({},v),{},{email:""})),S((0,u.Z)((0,u.Z)({},w),{},{email:e.target.value}))},handlePasswordChange:function(e){S((0,u.Z)((0,u.Z)({},w),{},{password:e.target.value})),Z((0,u.Z)((0,u.Z)({},v),{},{password:""}))}}};var b=function(){var e=Z(),t=e.loading,n=e.error,a=e.handleSignupUser,c=e.handleNameChange,d=e.handlePasswordChange,u=e.handleEmailChange;return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("form",{onSubmit:a,children:[(0,f.jsx)(s.Z,{style:{width:"100%"},children:(0,f.jsx)(i.Z,{error:!(!n||!n.name),helperText:n&&n.name?n.name:null,onChange:c,label:"Name",variant:"outlined",style:{marginTop:"16px"}})}),(0,f.jsx)(s.Z,{style:{width:"100%"},children:(0,f.jsx)(i.Z,{onChange:u,label:"Email",variant:"outlined",error:!(!n||!n.email),helperText:n&&n.email?n.email:null,style:{marginTop:"16px"}})}),(0,f.jsx)(s.Z,{style:{width:"100%"},children:(0,f.jsx)(i.Z,{error:!(!n||!n.password),helperText:n&&n.password?n.password:null,onChange:d,label:"Password",variant:"outlined",style:{marginTop:"16px"},type:"password"})}),(0,f.jsx)(o.Z,{type:"submit",disabled:t,style:{width:"100%",background:"rgb(24,119,242)",color:"#fff",marginTop:"16px"},variant:"contained",children:t?(0,f.jsx)(l.Z,{variant:"indeterminate",size:25,style:{color:"#fff"}}):" Sign up"})]})})},y=n(3712),w=n(1288),S=n(9526),k=n(7447),j=function(){var e=(0,r.useState)(!0),t=(0,a.Z)(e,2),n=t[0],s=t[1];(0,r.useContext)(x.QE).uiState;return(0,f.jsxs)("div",{className:"login_wrap",children:[(0,f.jsx)("div",{className:"login_1",children:(0,f.jsx)("img",{src:"../../icons/bkuzulogo.png",alt:"",class:"responsive"})}),(0,f.jsx)("div",{className:"login_2",children:(0,f.jsxs)(y.Z,{children:[(0,f.jsx)("span",{children:"Login"}),(0,f.jsx)(w.Z,{container:!0,spacing:3,style:{marginTop:"20px"},children:(0,f.jsx)(w.Z,{item:!0,xs:12,sm:6,md:10,children:(0,f.jsxs)(S.Z,{elevation:8,style:{padding:"16px",display:"flex",flexDirection:"column"},children:[n?(0,f.jsx)(v,{}):(0,f.jsx)(b,{}),(0,f.jsx)(k.Z,{}),(0,f.jsx)(o.Z,{onClick:function(){return s(!n)},style:{marginTop:"24px",background:"rgb(74,183,43)",color:"#fff"},children:n?"Create New Account":" Already have an Account"})]})})})]})})]})}},3712:function(e,t,n){var a=n(7462),r=n(5987),s=n(4942),i=n(2791),o=(n(2007),n(8182)),l=n(8317),c=n(1122),d=i.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.component,d=void 0===l?"div":l,u=e.disableGutters,p=void 0!==u&&u,x=e.fixed,g=void 0!==x&&x,m=e.maxWidth,h=void 0===m?"lg":m,f=(0,r.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,(0,a.Z)({className:(0,o.Z)(n.root,s,g&&n.fixed,p&&n.disableGutters,!1!==h&&n["maxWidth".concat((0,c.Z)(String(h)))]),ref:t},f))}));t.Z=(0,l.Z)((function(e){return{root:(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:(0,s.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,s.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,s.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,s.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,s.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},1288:function(e,t,n){var a=n(5987),r=n(7462),s=n(2791),i=(n(2007),n(8182)),o=n(8317),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=s.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,u=e.className,p=e.component,x=void 0===p?"div":p,g=e.container,m=void 0!==g&&g,h=e.direction,f=void 0===h?"row":h,v=e.item,Z=void 0!==v&&v,b=e.justify,y=e.justifyContent,w=void 0===y?"flex-start":y,S=e.lg,k=void 0!==S&&S,j=e.md,C=void 0!==j&&j,E=e.sm,W=void 0!==E&&E,T=e.spacing,_=void 0===T?0:T,N=e.wrap,z=void 0===N?"wrap":N,M=e.xl,R=void 0!==M&&M,G=e.xs,D=void 0!==G&&G,L=e.zeroMinWidth,I=void 0!==L&&L,P=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),U=(0,i.Z)(d.root,u,m&&[d.container,0!==_&&d["spacing-xs-".concat(String(_))]],Z&&d.item,I&&d.zeroMinWidth,"row"!==f&&d["direction-xs-".concat(String(f))],"wrap"!==z&&d["wrap-xs-".concat(String(z))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(b||w)&&d["justify-content-xs-".concat(String(b||w))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==C&&d["grid-md-".concat(String(C))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==R&&d["grid-xl-".concat(String(R))]);return s.createElement(x,(0,r.Z)({className:U,ref:t},P))})),p=(0,o.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.Z=p}}]);
//# sourceMappingURL=820.9f487426.chunk.js.map