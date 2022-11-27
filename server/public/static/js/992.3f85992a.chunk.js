"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[992],{3075:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2791),a=n(1876),c=n(8596),i=n(1205),o=n(7690),l=n(6513),s="100vw",u=(0,c.Z)((function(e){return{root:{display:"flex"},drawer:{width:s,flexShrink:0,color:"rgb(86,84,255)"},drawerPaper:function(e){return{width:s,backgroundColor:"rgb(36,37,38)"}}}}));function d(e){var t=e.children,n=(0,r.useContext)(a.QE),c=n.uiState,s=n.uiDispatch,d=u(c.darkMode);return r.createElement("div",{className:d.root},r.createElement(i.ZP,{open:c.drawer,className:d.drawer,variant:"persistent",classes:{paper:d.drawerPaper},onClose:function(){return s({type:"SET_DRAWER",payload:!1})}},r.createElement(o.Z,null),r.createElement("div",{className:d.drawerContainer},t),r.createElement(l.Z,{variant:"contained",color:"primary",onClick:function(){return s({type:"SET_DRAWER",payload:!c.drawer})}},"Close")))}},3520:function(e,t,n){var r=n(2791),a=n(3364),c=n(8154),i=n(1205),o=n(7690),l=n(1876);t.Z=function(e){var t=e.children,n=e.anchor,s=void 0===n?"left":n,u=e.background,d=void 0===u?"white":u,p=e.boxShadow,E=void 0===p||p,m=e.drawerWidth,f=void 0===m?380:m,h=(0,a.Z)(),y=(0,c.Z)(h.breakpoints.between(960,1400)),g=(0,r.useContext)(l.QE).uiState;return r.createElement(i.ZP,{elevation:0,variant:"permanent",PaperProps:{style:{width:y?f-120:f,backgroundColor:d,boxShadow:E?g.darkMode?"1px 1px 3px rgb(36,37,38)":"1px 1px 3px rgba(0,0,0,0.1)":null,border:"none"}},anchor:s},r.createElement(o.Z,null),r.createElement("div",{style:{overflow:"auto"}},t))}},4992:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(7166),a=n(3032),c=n(6222),i=n(2791),o=n(8596),l=n(8302),s=n(4697),u=n(6513),d=n(1288),p=n(272),E=n(3520),m=n(283),f=n(4589),h=n(2953),y=n(1876),g=n(6364),v=(0,o.Z)((function(e){return{container:{paddingLeft:"6px",paddingTop:"6px",paddingBottom:"8px","&:hover":{background:"whitesmoke",cursor:"pointer"}}}}));var S=function(e){var t=e.user,n=e.children,r=(0,i.useContext)(y.St).userDispatch,a=(0,i.useContext)(y.QE),c=a.uiState,o=a.uiDispatch;return v(),i.createElement(i.Fragment,null,i.createElement(m.Z,{elevation:0,style:{width:"100%",backgroundColor:c.darkMode?"rgb(36,37,38)":null}},i.createElement(f.Z,{onClick:function(){r({type:"ADD_SELECTED_USER_PROFILE",payload:t}),o({type:"SET_DRAWER",payload:!1})}},i.createElement(h.Z,{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},t.profile_pic?i.createElement(p.Z,{style:{width:"60px",height:"60px"}},i.createElement("img",{alt:"",src:t.profile_pic,style:{width:"100%",height:"100%"}})):i.createElement(g.Z,{text:t.name,bg:t.active?"seagreen":" tomato"}),i.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"8px"}},i.createElement(l.Z,{variant:"subtitle1",style:{marginBottom:"4px",fontWeight:"600"}},t.name),i.createElement(l.Z,{variant:"body2"})))),n))},x=n(3430),Z=n(1044),b="http://localhost:5000",k=function(){var e=(0,i.useState)(!1),t=(0,x.Z)(e,2),n=t[0],c=t[1],o=(0,i.useContext)(y.St).userDispatch,l=(0,i.useContext)(y.QE).uiDispatch,s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("token")),e.prev=1,c(!0),e.next=5,Z.ZP.get("".concat(b,"/api/user/friend_request/").concat(t,"/accept"),{headers:{Authorization:"Bearer ".concat(n)}});case 5:a=e.sent,i=a.data,c(!1),i&&(o({type:"ADD_FRIEND",payload:i.user}),o({type:"REMOVE_FRIENDS_REQUEST_RECEIVED",payload:t}),l({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:i.message}})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c(!1),e.t0&&e.t0.response&&l({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:e.t0.response.data.error}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("token")),e.prev=1,c(!0),e.next=5,Z.ZP.get("".concat(b,"/api/user/friend_request/").concat(t,"/decline"),{headers:{Authorization:"Bearer ".concat(n)}});case 5:a=e.sent,i=a.data,c(!1),i&&(o({type:"REMOVE_FRIENDS_REQUEST_RECEIVED",payload:t}),l({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:i.message}})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c(!1),e.t0&&e.t0.response&&l({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:e.t0.response.data.error}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("token")),e.prev=1,c(!0),e.next=5,Z.ZP.get("".concat(b,"/api/user/friend_request/").concat(t,"/send"),{headers:{Authorization:"Bearer ".concat(n)}});case 5:a=e.sent,i=a.data,c(!1),i&&(o({type:"ADD_FRIENDS_REQUEST_SENDED",payload:i.friend}),l({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:i.message}})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c(!1),e.t0&&e.t0.response&&l({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:e.t0.response.data.error}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.token),e.prev=1,e.next=4,Z.ZP.get("".concat(b,"/api/user/friend_request/").concat(t,"/cancel"),{headers:{Authorization:"Bearer ".concat(n)}});case 4:a=e.sent,(c=a.data)&&(o({type:"REMOVE_FRIENDS_REQUEST_SENDED",payload:t}),l({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:c.message}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0&&e.t0.response&&l({type:"SET_MESSAGE",payload:{color:"error",display:!0,text:e.t0.response.data.error}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return{sendFriendRequest:d,declineFriendRequest:u,acceptFriendRequest:s,cancelFriendRequest:p,loading:n}},C=n(7025),w=n(3837),A=n(4026),F=n(1606),R=n(5720),D=n(2067),N=n(8096),T=n(1969),_=n(159),q=n(269),O=n(1523);var P=function(){var e=(0,i.useState)([]),t=(0,x.Z)(e,2),n=t[0],c=t[1],o=(0,i.useState)(!1),l=(0,x.Z)(o,2),s=l[0],u=l[1],d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,Z.ZP.get("".concat("http://localhost:5000","/api/user/search?name=").concat(t));case 4:n=e.sent,c(n.data.users),u(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return{searchFriends:d,friends:n,loading:s}},I=n(5919);var Q=function(){var e=(0,i.useState)(null),t=(0,x.Z)(e,2),n=t[0],r=t[1],a=(0,i.useState)(""),c=(0,x.Z)(a,2),o=c[0],s=c[1],d=P(),E=d.searchFriends,m=d.friends,f=d.loading,h=function(){r(!1)};return i.createElement("div",null,i.createElement(C.Z,{onClick:function(){r(!0)}},i.createElement(I.Z,null)),i.createElement(w.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:h},i.createElement(A.Z,null,i.createElement(F.Z,{style:{width:"100%"},value:o,onChange:function(e){return s(e.target.value)},variant:"outlined",placeholder:"Enter Friends Name"}),i.createElement(u.Z,{style:{width:"100%",marginTop:"16px"},variant:"contained",color:"primary",onClick:function(){E(o)}},"Search"),m.length?i.createElement(l.Z,{variant:"h4",style:{marginTop:"20px"}},"Search Friends (",m.length,")"):null,f?i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}},i.createElement(R.Z,null)):i.createElement(D.Z,null,m&&m.map((function(e){return i.createElement(N.Z,{button:!0,onClick:h,component:O.rU,to:"/profile/".concat(e.id),key:e.id},i.createElement(T.Z,null,e.profile_pic?i.createElement(p.Z,{style:{width:"60px",height:"60px"}},i.createElement("img",{src:e.profile_pic,width:"100%",height:"100%",alt:e.name})):i.createElement(g.Z,{text:e.name,bg:e.active?"seagreen":"tomato"})),i.createElement(_.Z,{style:{marginLeft:"8px"}},i.createElement(l.Z,{style:{fontSize:"17px",fontWeight:"700"}},e.name),i.createElement(l.Z,null,e.email)))})))),i.createElement(q.Z,null,i.createElement(u.Z,{onClick:h},"Cancel"))))};var U=function(e){var t=e.users,n=(0,i.useContext)(y.St).userState,r=k().sendFriendRequest;return i.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",marginLeft:"8px",marginRight:"6px"}},i.createElement(Q,null),i.createElement(l.Z,{style:{fontWeight:"700",fontSize:"16px",marginTop:"8px",marginBottom:"8px"}},"People You May Know"),t&&t.length?t.map((function(e){return i.createElement("div",{key:e.id,style:{width:"100%"}},function(e){var t=n.sendedFriendRequests.findIndex((function(t){return t.user.id==e.id})),r=n.receivedFriendRequests.findIndex((function(t){return t.user.id==e.id})),a=n.currentUser.friends.findIndex((function(t){return t.id==e.id})),c=n.currentUser.id==e.id;return-1===t&&-1===r&&-1===a&&!c}(e)&&i.createElement(S,{user:e},i.createElement(s.Z,null,i.createElement(u.Z,{onClick:function(){return t=e.id,void r(t);var t},variant:"contained",style:{background:"rgb(1,133,243)",color:"white"}},"Add Friend"))))})):null)},J=n(3075),H=n(7635),V=n(6470),M=(0,o.Z)((function(e){return{sidebarContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"16px"},noRequest:{marginLeft:"32px",marginTop:"16px",color:"grey"},divider:{width:"90%",height:"1px",marginTop:"16px"},main:(0,c.Z)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",marginLeft:"320px"},e.breakpoints.between("xs","sm"),{marginLeft:0}),avatar:{width:"112px",height:"112px",background:"transparent"},image:{width:"100%",height:"100%"},selectText:{color:"#65676B",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"700"}}}));var W=function(){var e=M(),t=(0,i.useContext)(y.QE),c=t.uiState,o=t.uiDispatch,m=(0,i.useContext)(y.St),f=m.userState,h=m.userDispatch;(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.HM)();case 2:(t=e.sent).data&&h({type:"SET_FRIENDS_REQUEST_SENDED",payload:t.data.friends});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.QF)();case 2:(t=e.sent)&&t.data&&h({type:"SET_FRIENDS_REQUEST_RECEIVED",payload:t.data.friends});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.$_)();case 2:(t=e.sent)&&t.data&&h({type:"SET_USERS",payload:t.data.users});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o({type:"SET_NAV_MENU",payload:!0}),function(){n.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){e.apply(this,arguments)}(),function(){h({type:"REMOVE_SELECTED_USER_PROFILE",payload:null}),o({type:"SET_NAV_MENU",payload:!1})}}),[]);var g=k(),v=g.acceptFriendRequest,x=g.declineFriendRequest,Z=g.cancelFriendRequest,b=i.createElement("div",{className:e.sidebarContainer},i.createElement(l.Z,{variant:"h6"},"Friends"),f.sendedFriendRequests.length?i.createElement(i.Fragment,null,i.createElement(l.Z,{variant:"h6"},"Sended Friend Request"),f.sendedFriendRequests.map((function(e){return i.createElement(S,{user:e.user,key:e.id},i.createElement(s.Z,null,i.createElement(u.Z,{onClick:function(){return t=e.id,void Z(t);var t},variant:"contained",style:{background:"tomato",color:"white"}},"Cancel")))}))):null,f.receivedFriendRequests.length?i.createElement(i.Fragment,null,i.createElement(l.Z,{variant:"h6"},"Incomming Friend Requests"),f.receivedFriendRequests.map((function(e){return i.createElement("div",null,i.createElement(S,{user:e.user,key:e.id},i.createElement(s.Z,null,i.createElement(u.Z,{onClick:function(){return t=e.id,void v(t);var t},variant:"contained",style:{background:"seagreen",color:"white"}},"Accept"),i.createElement(u.Z,{variant:"contained",style:{background:"tomato",color:"white"},onClick:function(){return t=e.id,void x(t);var t}},"Decline"))))}))):null);return i.createElement("div",null,c.mdScreen?i.createElement(d.Z,{container:!0,spacing:0},i.createElement(d.Z,{item:!0,md:3},i.createElement(E.Z,{background:c.darkMode&&"rgb(36,37,38)"},b,i.createElement(U,{users:f.users}))),i.createElement(d.Z,{item:!0,md:8,style:{margin:"auto"}},f.selectedUserProfile&&i.createElement(H.Z,{user:f.selectedUserProfile,conScreen:!0}))):i.createElement(i.Fragment,null,i.createElement(J.Z,null,b,i.createElement(U,{users:f.users})),f.selectedUserProfile&&i.createElement(H.Z,{user:f.selectedUserProfile})),!f.selectedUserProfile&&i.createElement("div",{className:e.main,style:{backgroundColor:c.darkMode?"rgb(24,25,26)":null}},i.createElement(p.Z,{variant:"square",className:e.avatar},i.createElement("img",{src:n(3563),className:e.image,alt:""})),i.createElement(l.Z,{className:e.selectText},"Select people's names to preview their profile.")))}},3563:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFRklEQVR4Ae2WA9AkOxDHk5lZn+1n27Zt27Zt28bZtm3btr/DcmbSL6n5V2pe6vbDoXhd1ZWOOr90enuW7aLslb3Cd8caCO1pIG7YFpSHAASUdhcYL2scEM5BbdbdzlLV7ua2c4QaJN+bybIlTeffXKe17HoAK6/QTgEBJnJQp/SvLJq4hxEmOZcmBW7dbNP516ceVRagsJ/ZqoUS1C8rmlYxGLTWvn/Mv4TZEsYPjiNBjHxiqk+yr+bUmhCAde6550a/nDPplR+Xzpr048q5G3+QreqrcZxZNCC8jOhED2yzvYuMzsWsNClk+y24tdL1ylJgn8+b/Es0Hr9XeSJSEQ3curncPy8ddOxjiCbtKEpOsSeDRpgVOUhFhvRzwQsWqHHizkHwJZ7q0PRQKxG/2yPCUYCSHR6P3fNs53bff3vdzTPMH0NZQDoPSNj1lEcinTuw4Y2U7dTDkznJ+g1OdYVvBQ6C9WgVgpVoUPsUOTUH0cQ5jMoGglChsJQ50UODXQLHKJsCQAXrFZbgiW0eset7BAjkuLIYoJhtNzCSHVI+IBK5bZN5osaheoQTE4iQIAq85jJT4Jxt21yyJFa7Fo4ngDG8EJfzmxQ8N6HKC+TnRrT9NnHBY9dKO0FBMugnwN2z2eEtv8OJYlqPvmPOemb/bdxildU8QHA7f9uMPgNGV7AOgRw1SGqq4QcT74o1POpTwVg0dCW1oJBfOf3VlW+d0IJJMAzHHhrQ+eEa++37MTNk0+Ilr/9x4XW/STNtFFMqq3pbSNKY1CpS69Z7+N8rmny/ts++v6XXKFV2vYebX6HmpFZVEVTKsP72jv8+/PSMUZOenz9+69PTRk1SfaytLDVqFM7y1SEDLA5HEcy7+KXk0Ipw/QJcDPt9qXlEUbW+UbWL/sp4kWhxOPDQwomysQZirC8wiLFWGAmtbV4Exlba6OOFV1iJGrcyO3oq53YdYizGUX3Vfs6sPJG3jvmFsf7WVe1OOXbChpr7H/AEjzinMm7VUdEM1pPicBmJdb6bH7Nt1frv211yw9gdfJSJwwi3dsPnh+9nNTqmKbcjp/6fVxdFtLgYpFr1NB11zHIei+V1jdLCUb+IpGkJL5NpOrtd+5fGffJTSRiKmzB1nx58SHTfkwfJbm1AmNEFjTFHwaHRmMuOP3UeSyRdPa+jaiSDl8m1aXX8effrHDSA7BqnXJZMXd92DFnOYVy7g+DGxjgwwQfYZOUsO/7suWDGKlCh1R7yGzY+3PHsq5ri+YiHoJwGby1+1ErV+U52QycSLq+B4BTjsJWEDzvg2KWsTuON4WF9mfBzkudN6HDMuefi1yqc0HNFuFP1JiYYqrAZIkQnZIdFJzoP9q9fVp3VbLwBG5A7uCgJoW1uW4eFa5ITjpDsHk4+eriphjO+3MgOyQ/n2EOw05vjzBUCNIgKCdNmlmUlQkAsHCGLhFUDJQIHiFBSIjacNK+0kc/YowS26zvMZxSOHvbBNX4IIpudbH5cuYYSfomErUZEOkmVjYQO/x8Csx5HIEiPOTGPubLViSxCeSaEavMinZu4vu/gF5DQOjI2qmeq3nNLv+XJGvewogKScojYtrrV2u8Pfh+boFoENC81B3WR1HqhV9LlvneqXvGLx5N1rmKWXYcZvwhcEH2IuUb46yi9pmdJ57s+k73tuL0JRADyoPiuIXegCi4OjaJvsYqJgOMCbu9izITRUIaSE6L34QihxEeyYqJ9hZRKATKVOQati5YbWqaYNzdaKnNPkW+ZqWyngKDGWHmEuHlgxUHKvnVFoHg5x3YFrELyH4+psE5bV4QBAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=992.3f85992a.chunk.js.map