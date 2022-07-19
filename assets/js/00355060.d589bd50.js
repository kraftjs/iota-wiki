"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48124],{60901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/preview.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},l="Node Software",p={unversionedId:"explanations/node_software",id:"explanations/node_software",title:"Node Software",description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",source:"@site/content/build/introduction-docs/develop/docs/explanations/node_software.md",sourceDirName:"explanations",slug:"/explanations/node_software",permalink:"/introduction/develop/explanations/node_software",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/content/build/introduction-docs/develop/docs/explanations/node_software.md",tags:[],version:"current",frontMatter:{description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/preview.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},sidebar:"mySidebar",previous:{title:"Non-fungible Tokens",permalink:"/introduction/develop/explanations/ledger/nft"},next:{title:"Libraries",permalink:"/introduction/develop/explanations/libraries/overview"}},d={},c=[{value:"Hornet",id:"hornet",level:2},{value:"Bee",id:"bee",level:2},{value:"Node API Specification",id:"node-api-specification",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-software"},"Node Software"),(0,r.kt)("p",null,"The node software is the backbone of the IOTA and Shimmer networks. Individual nodes run the software to help maintain the state of the ledger through peer-to-peer communication. Nodes are also entry points to the network for users. The node software implements the core protocol that defines the network rules."),(0,r.kt)("h2",{id:"hornet"},"Hornet"),(0,r.kt)("p",null,"Hornet started out as an EDF-supported community node written in go and matured into the official node software\nimplementation maintained and developed by the IOTA Foundation. It has already proven itself to be a stable and\nperformant implementation, furthermore its ",(0,r.kt)("a",{parentName:"p",href:"https://TODO_link_to_INX_page"},"IOTA Node Extension (INX)")," framework introduced\nfor Stardust eases the development of application specific node extensions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet"},"Official GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/hornet/develop/welcome"},"Documentation"))),(0,r.kt)("h2",{id:"bee"},"Bee"),(0,r.kt)("p",null,"Bee is an IOTA Node implemented by the Foundation and written in Rust."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/bee/tree/shimmer-develop"},"Official GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/bee/develop/welcome"},"Documentation"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At this stage, we recommend using Hornet since it has several optional features that are not implemented in Bee so far."))),(0,r.kt)("h2",{id:"node-api-specification"},"Node API Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-api/tips/TIP-0025/core-rest-api.yaml"},"Core rest-api specification"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0026/tip-0026.md"},"UTXO Indexer rest-api specification"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-event-api/tips/TIP-0028/event-api.yml"},"Event API (MQTT) specification"),".")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);