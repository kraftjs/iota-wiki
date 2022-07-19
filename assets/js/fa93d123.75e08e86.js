"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35277],{18363:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"an-introduction-to-iota",title:"IOTA",description:"IOTA is a distributed ledger technology running on the Tangle instead of a blockchain.",keywords:["explanation"],image:"/img/iota-wiki.png"},c="IOTA",s={unversionedId:"about-iota/an-introduction-to-iota",id:"about-iota/an-introduction-to-iota",title:"IOTA",description:"IOTA is a distributed ledger technology running on the Tangle instead of a blockchain.",source:"@site/internal/learn/about-iota/an-introduction-to-iota.md",sourceDirName:"about-iota",slug:"/about-iota/an-introduction-to-iota",permalink:"/learn/about-iota/an-introduction-to-iota",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/an-introduction-to-iota.md",tags:[],version:"current",lastUpdatedAt:1658188502,formattedLastUpdatedAt:"7/18/2022",frontMatter:{id:"an-introduction-to-iota",title:"IOTA",description:"IOTA is a distributed ledger technology running on the Tangle instead of a blockchain.",keywords:["explanation"],image:"/img/iota-wiki.png"},sidebar:"learn",next:{title:"The Tangle",permalink:"/learn/about-iota/tangle"}},u={},d=[],p={toc:d};function h(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota"},"IOTA"),(0,o.kt)("p",null,"IOTA is a distributed ledger technology, a DLT. With the right approach, DLTs let us control our own ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/introduction"},"private data"),", run ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/smart-contracts/overview"},"programs")," that nobody can meddle with, and trade and own assets without intermediaries."),(0,o.kt)("p",null,"As in the name, a distributed ledger technology maintains a ledger \u2014 a tally of token ownership \u2014 between multiple nodes. That would be trivial if all nodes were controlled by the same entity, but in DLTs the ledger state has to be agreed on by a collective of independent nodes. There is always a chance that a malicious node joins the network, so any DLT needs a way to protect itself. The way that IOTA takes makes it differ from other protocols."),(0,o.kt)("p",null,"IOTA runs on ",(0,o.kt)("a",{parentName:"p",href:"/learn/about-iota/tangle"},"the Tangle"),", a structure where newer transactions verify the older ones, and pretty much any other DLT runs on a blockchain instead. To secure its state and history, a blockchain must collect transactions in blocks and chain the blocks one after another. That leads to a natural bottleneck: imagine loading the world's cargo into a single train wagon by wagon. IOTA bypasses it altogether."),(0,o.kt)("p",null,"The IOTA protocol is still in research. It has two public networks: the IOTA mainnet is the stable network that manages your IOTA tokens, and ",(0,o.kt)("a",{parentName:"p",href:"/learn/future/shimmer"},"Shimmer")," is the staging network for the latest and greatest protocol updates. When the changes are proven on Shimmer, they come to the mainnet. The next big update is ",(0,o.kt)("a",{parentName:"p",href:"https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/"},"Stardust"),". The future update that concludes decentralization effort is called ",(0,o.kt)("a",{parentName:"p",href:"/learn/about-iota/roadmap-to-decentralization"},"Coordicide"),"."))}h.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);