(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{3874:function(t,e,n){Promise.resolve().then(n.bind(n,6848))},6848:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(9268),i=n(5355),o=n(6006);let l=[{url:"https://github.com/8bitAlex",src:"../img/github_64.png",alt:"Github icon"},{url:"https://www.linkedin.com/in/8bitalex/",src:"../img/linkedin_64.png",alt:"LinkedIn icon"},{url:"https://www.twitch.tv/8bitalex",src:"../img/Twitch_64.png",alt:"Twitch Icon"},{url:"https://www.instagram.com/8bitalex/",src:"../img/Instagram_64.png",alt:"Instagram Icon"}];function s(t){return(0,r.jsx)("div",{style:t.style,children:l.map(t=>{let{url:e,src:n,alt:o}=t;return(0,r.jsx)(i.Z,{style:c,onClick:()=>{window.open(e,"_newtab")},children:(0,r.jsx)("img",{src:n,alt:o})})})})}let c={display:"inline-block",margin:"4px"};var a=n(5891);let u=[{title:"Blog",url:"/blog"},{title:"Code Examples",url:"https://github.com/8bitAlex/alex-salerno-portfolio"},{title:"Alderman RPG",url:"https://aldermanrpg.com/"},{title:"Pixelated Realms",url:"https://www.pixelatedrealms.org/"}];function p(){let[t,e]=(0,o.useState)(!1);return(0,r.jsxs)("div",{style:d,children:[(0,r.jsx)("h1",{style:{paddingTop:"128px",paddingBottom:"24px"},children:"Alex Salerno"}),u.map(t=>{let{title:e,url:n}=t;return(0,r.jsx)(i.Z,{to:n,children:(0,r.jsx)("p",{children:e})})}),(0,r.jsx)(s,{style:m}),(0,r.jsx)(i.Z,{style:f,onClick:()=>void((0,a.we)(!t),e(!t)),children:(0,r.jsx)("img",{src:t?"../img/SpeakerMuted.png":"../img/Speaker.png",alt:t?"Muted Speaker Icon":"Speaker Icon"})})]})}let d={padding:"16px",marginBottom:"96px"},m={position:"fixed",right:"32px",bottom:"32px"},f={position:"fixed",left:"32px",bottom:"32px"}},5355:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(9268),i=n(5891),o=n(6008);function l(t){let e=(0,o.useRouter)();return(0,r.jsx)("div",{className:"button "+t.className,...t,onMouseOver:()=>(function(t){let e=new Audio("/sound/hightlight.mp3");t.mute||(0,i.CG)()||!navigator.userActivation.hasBeenActive||e.play()})(t),onClick:()=>(function(t,e){var n;let r=new Audio("/sound/select.mp3");!(0,i.CG)()&&navigator.userActivation.hasBeenActive&&r.play(),null===(n=t.onClick)||void 0===n||n.call(t),t.to&&(0,i.sP)(t.to,e)})(t,e),children:t.children})}},5891:function(t,e,n){"use strict";function r(t){localStorage.setItem("mt",t?"true":"false")}function i(){return"true"===localStorage.getItem("mt")}function o(t,e){document.body.className="zoom",setTimeout(()=>{document.body.className=document.body.className.replace("zoom",""),e.replace(t)},500)}n.d(e,{CG:function(){return i},sP:function(){return o},we:function(){return r}})},3177:function(t,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var r,c={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(u=e.ref),e)o.call(e,r)&&!s.hasOwnProperty(r)&&(c[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===c[r]&&(c[r]=e[r]);return{$$typeof:i,type:t,key:a,ref:u,props:c,_owner:l.current}}e.jsx=c,e.jsxs=c},9268:function(t,e,n){"use strict";t.exports=n(3177)},6008:function(t,e,n){t.exports=n(4e3)}},function(t){t.O(0,[253,698,744],function(){return t(t.s=3874)}),_N_E=t.O()}]);