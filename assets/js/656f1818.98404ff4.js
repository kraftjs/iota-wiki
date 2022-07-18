"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3585],{70293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={keywords:["Stardust","Shimmer","Upgrades","Token","Tokenization","Native token","NFT","Protocol Improvements","explanation"],description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",image:"/img/logo/Chrysalis_logo_dark.png"},u="Tokenization",l={unversionedId:"explanations/what_is_stardust/tokenization",id:"explanations/what_is_stardust/tokenization",title:"Tokenization",description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/tokenization.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/tokenization",permalink:"/introduction/develop/explanations/what_is_stardust/tokenization",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/tokenization.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Token","Tokenization","Native token","NFT","Protocol Improvements","explanation"],description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",image:"/img/logo/Chrysalis_logo_dark.png"},sidebar:"mySidebar",previous:{title:"Smart Contract Chain Support",permalink:"/introduction/develop/explanations/what_is_stardust/sc_support"},next:{title:"Storage Deposit System",permalink:"/introduction/develop/explanations/what_is_stardust/storage_deposit"}},c={},d=[{value:"Native Tokens",id:"native-tokens",level:2},{value:"Non-fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokenization"},"Tokenization"),(0,i.kt)("h2",{id:"native-tokens"},"Native Tokens"),(0,i.kt)("p",null,"Stardust introduces custom, user-defined tokens. Fungible tokens, called ",(0,i.kt)("strong",{parentName:"p"},"native tokens"),", are minted and melted in token\nfoundries. One does not need to convert base currency into native tokens, they are injected into the ledger out of thin\nair. Anyone is free to issue their own tokens, but keep in mind that holding native tokens in one's wallet increases the\nrequired storage deposit in the base currency. We will elaborate on storage deposits ",(0,i.kt)("a",{parentName:"p",href:"/introduction/develop/explanations/what_is_stardust/storage_deposit"},"here"),"."),(0,i.kt)("h2",{id:"non-fungible-tokens-nfts"},"Non-fungible Tokens (NFTs)"),(0,i.kt)("p",null,"Non-fungible tokens, so-called ",(0,i.kt)("strong",{parentName:"p"},"NFTs"),", are different from native tokens because each token must be unique and must have\nsome immutable data attached to them. As a consequence, NFTs are supported on base protocol level via NFT outputs."),(0,i.kt)("p",null,"Minting and NFT doesn't require expensive gas fees, all that needs to be in place is the right amount of storage deposit\ntokens that are 100% refunded after the NFT is destroyed. The issuer's identity may also be immutable attached to the NFT\nnext to arbitrary data, making it possible to detect counterfeits. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/65"},"TIP-27"),"\nexplains the recommended way of structuring NFT metadata for future verification and dApp interoperability."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);