"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55606],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93927:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Solidity smart contract example.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","how to"]},a="Solidity Smart Contract Example",c={unversionedId:"guide/evm/examples/introduction",id:"guide/evm/examples/introduction",title:"Solidity Smart Contract Example",description:"Solidity smart contract example.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/examples/introduction.md",sourceDirName:"guide/evm/examples",slug:"/guide/evm/examples/introduction",permalink:"/smart-contracts/guide/evm/examples/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/examples/introduction.md",tags:[],version:"current",frontMatter:{description:"Solidity smart contract example.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","how to"]},sidebar:"tutorialSidebar",previous:{title:"EVM Tooling",permalink:"/smart-contracts/guide/evm/tooling"},next:{title:"ERC20 Example",permalink:"/smart-contracts/guide/evm/examples/ERC20"}},l={},p=[],s={toc:p};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solidity-smart-contract-example"},"Solidity Smart Contract Example"),(0,o.kt)("p",null,"Solidity smart contracts on IOTA Smart Contracts are compatible with Solidity smart contracts on any other network, so most smart contracts will work directly without any modification. To get a rough indication of how a simple Solidity smart contract looks like, see the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.8.6;\n// No SafeMath needed for Solidity 0.8+\n\ncontract Counter { \n   \n    uint256 private _count;\n        \n    function current() public view returns (uint256) {\n        return _count;\n    }   \n\n    function increment() public {\n        _count += 1;\n    }   \n\n    function decrement() public {\n        _count -= 1;\n    }   \n}\n")),(0,o.kt)("p",null,"For more information, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/"},"official Solidity documentation"),"."))}m.isMDXComponent=!0}}]);