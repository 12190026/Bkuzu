"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[326],{7635:function(e,t,r){r.d(t,{Z:function(){return q}});var n=r(8489),a=r(3738),i=r(3430),o=r(2791),s=r(9526),c=r(1288),l=r(7447),u=r(8167),d=r(8192),p=r(1370),f=r(1971),h=r(8596),x=r(8302),m=r(4364),v=r(7025),g=r(272),Z=r(3837),j=r(5159),k=r(4026),b=r(269),y=r(6513),S=r(9538),C=r(6364),w=r(7166),_=r(3032),P=r(1044),U=r(1876),z=r(5032),D="http://localhost:5000",E=function(e){var t=e.profile_pic,r=e.cover_pic,n=e.history,a=(0,o.useState)(!1),s=(0,i.Z)(a,2),c=s[0],l=s[1],u=(0,o.useContext)(U.St),d=u.userState,p=u.userDispatch,f=(0,o.useContext)(U.QE).uiDispatch,h=function(){var e=(0,_.Z)((0,w.Z)().mark((function e(t){var r,a;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,r=JSON.parse(localStorage.getItem("token")),e.next=5,P.ZP.put("".concat(D,"/api/user/profile_pic/update"),{profile_url:t},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent).data&&(f({type:"SET_MESSAGE",payload:{text:a.data.message,color:"success",display:!0}}),p({type:"UPDATE_USER",payload:a.data.user})),l(!1),n.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),l(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,_.Z)((0,w.Z)().mark((function e(t){var r,a;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,r=JSON.parse(localStorage.getItem("token")),e.next=5,P.ZP.put("".concat(D,"/api/user/cover_pic/update"),{cover_url:t},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent).data&&(f({type:"SET_MESSAGE",payload:{text:a.data.message,color:"success",display:!0}}),p({type:"UPDATE_USER",payload:a.data.user})),l(!1),n.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),l(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return{updateProfilePic:function(){var e="profile_pic/".concat(d.currentUser.name,"-").concat(Date.now(),"-").concat(t.name);z.t.ref("images/".concat(e)).put(t).on("state_changed",(function(){l(!0)}),(function(e){console.log("error from firebase"),l(!1)}),(function(){z.t.ref("images").child(e).getDownloadURL().then((function(e){h(e)}))}))},updateCoverPic:function(){var e="cover_pic/".concat(d.currentUser.name,"-").concat(Date.now(),"-").concat(r.name);z.t.ref("images/".concat(e)).put(r).on("state_changed",(function(){l(!0)}),(function(e){console.log("error from firebase"),l(!1)}),(function(){z.t.ref("images").child(e).getDownloadURL().then((function(e){x(e)}))}))},loading:c}},A=r(7780),I=r(3713),R=r(184);var T=function(e){var t=e.user,r=(0,o.useContext)(U.St).userState,n=(0,S.k6)(),a=(0,o.useState)(null),s=(0,i.Z)(a,2),c=s[0],l=s[1],u=(0,o.useState)(null),d=(0,i.Z)(u,2),p=d[0],f=d[1],h=(0,o.useState)(!1),x=(0,i.Z)(h,2),w=x[0],_=x[1],P=(0,o.useRef)(null),z=E({profile_pic:c,history:n}),D=z.updateProfilePic,T=z.loading,B=function(){l(null),f(null),_(!1)};return(0,R.jsxs)("div",{children:[(0,R.jsx)(m.Z,{overlap:"rectangular",badgeContent:r.currentUser.id==t.id&&(0,R.jsx)(v.Z,{style:{bottom:-140,left:-20},onClick:function(){P.current.click()},children:(0,R.jsx)(g.Z,{children:(0,R.jsx)(A.Z,{style:{color:"black"}})})}),style:{position:"absolute",bottom:-30,width:"170px",height:"170px",zIndex:2,left:"40%"},children:t.profile_pic?(0,R.jsx)(g.Z,{style:{width:"170px",height:"170px"},children:(0,R.jsx)("img",{src:t.profile_pic,width:"100%",height:"100%",alt:t.name})}):(0,R.jsx)(C.Z,{text:t.name,bg:t.active?"seagreen":"tomato",fontSize:"40px",size:"170px"})}),(0,R.jsx)("input",{style:{display:"none"},type:"file",accept:"image/*",ref:P,onChange:function(e){l(e.target.files[0]);var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=function(){f(t.result),_(!0)}}}),(0,R.jsxs)(Z.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,scroll:"body",maxWidth:"sm",open:w,onClose:function(){return _(!1)},style:{width:"100%"},children:[(0,R.jsx)(j.Z,{children:"Profile Picture"}),(0,R.jsx)(k.Z,{children:p&&(0,R.jsx)("img",{src:p,width:"100%",height:"400px",alt:""})}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(y.Z,{variant:"contained",onClick:function(){D(),B()},color:"primary",children:"Upload"}),(0,R.jsx)(y.Z,{variant:"contained",onClick:B,style:{backgroundColor:"tomato",color:"#fff"},children:"Cancel"})]})]}),T&&(0,R.jsx)(I.Z,{loading:T,text:"Uploading Profile Pic..."})]})};var B=function(){var e=(0,S.k6)(),t=(0,o.useState)(null),r=(0,i.Z)(t,2),n=r[0],a=r[1],s=(0,o.useState)(null),c=(0,i.Z)(s,2),l=c[0],u=c[1],d=(0,o.useState)(!1),p=(0,i.Z)(d,2),f=p[0],h=p[1],x=(0,o.useRef)(null),m=E({cover_pic:n,history:e}),C=m.updateCoverPic,w=m.loading,_=function(){a(null),u(null),h(!1)};return(0,R.jsxs)("div",{children:[(0,R.jsx)(v.Z,{onClick:function(){x.current.click()},style:{position:"absolute",bottom:30,left:20,zIndex:2},children:(0,R.jsx)(g.Z,{children:(0,R.jsx)(A.Z,{style:{color:"blue"}})})}),w&&(0,R.jsx)(I.Z,{loading:w,text:"Uploading Cover  Pic..."}),(0,R.jsx)("input",{style:{display:"none"},type:"file",accept:"image/*",ref:x,onChange:function(e){a(e.target.files[0]);var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=function(){u(t.result),h(!0)}}}),(0,R.jsxs)(Z.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,scroll:"body",maxWidth:"sm",open:f,onClose:function(){return h(!1)},style:{width:"100%"},children:[(0,R.jsx)(j.Z,{children:"Cover Picture"}),(0,R.jsx)(k.Z,{children:l&&(0,R.jsx)("img",{src:l,width:"100%",height:"400px",alt:"preview"})}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(y.Z,{variant:"contained",onClick:function(){C(),_()},color:"primary",children:"Upload"}),(0,R.jsx)(y.Z,{variant:"contained",onClick:_,style:{backgroundColor:"tomato",color:"#fff"},children:"Cancel"})]})]})]})},N=(0,h.Z)((function(e){return{paper:{width:"100%",height:"40vh",marginTop:"60px",position:"relative",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100% 40vh"},overlay:{position:"absolute",background:"rgba(0,0,0,0.5)",width:"100%",height:"40vh",top:0}}}));var M=function(e){var t=e.user,r=(0,o.useContext)(U.St).userState,n=N();return(0,R.jsxs)("div",{children:[(0,R.jsx)(c.Z,{container:!0,justifyContent:"center",alignItems:"center",children:(0,R.jsx)(c.Z,{item:!0,xs:12,sm:12,md:6,children:(0,R.jsxs)(s.Z,{elevation:10,className:n.paper,style:{backgroundImage:t.cover_image?"url("+t.cover_image+")":null},children:[(0,R.jsx)(T,{user:t,type:"profile"}),r.currentUser.id==t.id&&(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(B,{})}),(0,R.jsx)("div",{className:n.overlay})]})})}),(0,R.jsx)(c.Z,{container:!0,justifyContent:"center",alignItems:"center",style:{marginTop:"30px"},children:(0,R.jsx)(c.Z,{item:!0,xs:12,sm:12,md:6,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"16px"},children:(0,R.jsx)(x.Z,{style:{fontSize:"30px",fontWeight:"800"},children:t.name})})})]})},J=r(6414),O=r(9948);var W=function(e){var t=e.user,r=(0,o.useContext)(U.St).userState,n=(0,o.useContext)(U.W5).postState;return(0,R.jsx)(c.Z,{container:!0,justify:"center",style:{marginTop:"25px"},spacing:2,children:(0,R.jsxs)(c.Z,{item:!0,xs:12,sm:12,md:8,children:[r.currentUser.id==t.id&&(0,R.jsx)(J.Z,{}),(0,R.jsx)(O.Z,{posts:n.posts.filter((function(e){return e.user.id==t.id}))})]})})};var F=function(e){var t=e.user;return(0,R.jsx)(c.Z,{container:!0,spacing:2,children:t.friends&&t.friends.map((function(e){return(0,R.jsx)(c.Z,{item:!0,xs:12,sm:6,md:6,children:(0,R.jsxs)(s.Z,{style:{padding:"16px",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.profile_pic?(0,R.jsx)(g.Z,{src:e.profile_pic,variant:"square"}):(0,R.jsx)(C.Z,{bg:e.active?"seagreen":"tomato",text:e.name,size:70}),(0,R.jsx)(x.Z,{style:{marginTop:"16px",flexGrow:1},variant:"h5",color:"inherit",children:e.name}),(0,R.jsx)(x.Z,{style:{marginTop:"6px",flexGrow:1},variant:"h6",color:"inherit",children:e.email}),(0,R.jsx)(y.Z,{variant:"contained",style:{backgroundColor:"tomato",color:"#fff",marginTop:"16px"},children:"Unfriend"})]})},e.id)}))})},G=["children","value","index"];function L(e){var t=e.children,r=e.value,i=e.index,o=(0,a.Z)(e,G);return(0,R.jsx)("div",(0,n.Z)((0,n.Z)({hidden:r!==i},o),{},{children:r===i&&(0,R.jsx)(f.Z,{p:3,children:t})}))}var q=function(e){var t=e.user,r=e.conScreen,n=(0,o.useContext)(U.QE).uiState,a=o.useState(0),f=(0,i.Z)(a,2),h=f[0],x=f[1];return(0,R.jsxs)("div",{style:{minHeight:"100vh"},children:[(0,R.jsxs)(s.Z,{style:{width:"100%",backgroundColor:n.darkMode&&"rgb(36,37,38)"},children:[(0,R.jsx)(M,{user:t}),(0,R.jsx)(c.Z,{container:!0,justify:"center",alignItems:"center",children:(0,R.jsxs)(c.Z,{item:!0,xs:12,sm:12,md:6,children:[(0,R.jsx)(l.Z,{}),(0,R.jsx)(u.Z,{position:"static",style:{background:n.darkMode?"rgb(36,37,38)":"#fff",color:n.darkMode?"#fff":"black",alignItems:"center"},elevation:0,children:(0,R.jsxs)(d.Z,{value:h,onChange:function(e,t){x(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",children:[(0,R.jsx)(p.Z,{label:"Timeline"}),(0,R.jsx)(p.Z,{label:"Friends"})]})})]})})]}),(0,R.jsx)(c.Z,{container:!0,justify:"center",children:(0,R.jsxs)(c.Z,{item:!0,xs:12,sm:12,md:r?12:6,children:[(0,R.jsx)(L,{value:h,index:0,children:(0,R.jsx)(W,{user:t})}),(0,R.jsx)(L,{value:h,index:1,children:(0,R.jsx)(F,{user:t})})]})})]})}},6470:function(e,t,r){r.d(t,{$_:function(){return s},HM:function(){return l},Mi:function(){return o},QF:function(){return c}});var n=r(7166),a=r(3032),i=r(1044),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(localStorage.token),e.prev=1,e.next=4,i.ZP.get("https://bkuzuauth.herokuapp.com/api/user/".concat(t),{headers:{Authorization:"Bearer ".concat(r)}});case 4:if(a=e.sent,!(o=a.data)){e.next=8;break}return e.abrupt("return",{data:o});case 8:e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(1),!e.t0||!e.t0.response){e.next=14;break}return e.abrupt("return",{error:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.token),e.prev=1,e.next=4,i.ZP.get("https://bkuzuauth.herokuapp.com/api/user/recommanded_users",{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(r=e.sent,!(a=r.data)){e.next=8;break}return e.abrupt("return",{data:a});case 8:e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(1),!e.t0||!e.t0.response){e.next=14;break}return e.abrupt("return",{error:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.token),e.prev=1,e.next=4,i.ZP.get("https://bkuzuauth.herokuapp.com/api/user/friend_request/received",{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(r=e.sent,!(a=r.data)){e.next=8;break}return e.abrupt("return",{data:a});case 8:e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(1),!e.t0||!e.t0.response){e.next=14;break}return e.abrupt("return",{error:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.token),e.prev=1,e.next=4,i.ZP.get("https://bkuzuauth.herokuapp.com/api/user/friend_request/sended",{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(r=e.sent,!(a=r.data)){e.next=8;break}return e.abrupt("return",{data:a});case 8:e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(1),!e.t0||!e.t0.response){e.next=14;break}return e.abrupt("return",{error:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=326.2ee7159a.chunk.js.map