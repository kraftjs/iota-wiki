"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},i="The `root` Contract",c={unversionedId:"guide/core_concepts/core_contracts/root",id:"guide/core_concepts/core_contracts/root",title:"The `root` Contract",description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/core_contracts/root.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/root",permalink:"/smart-contracts/guide/core_concepts/core_contracts/root",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/core_contracts/root.md",tags:[],version:"current",frontMatter:{description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},sidebar:"tutorialSidebar",previous:{title:"Core Contracts",permalink:"/smart-contracts/guide/core_concepts/core_contracts/overview"},next:{title:"The `accounts` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/accounts"}},l={},s=[{value:"Entry Points",id:"entry-points",level:2},{value:"<code>init()</code>",id:"init",level:3},{value:"<code>deployContract(ph ProgramHash, ds Description, nm Name)</code>",id:"deploycontractph-programhash-ds-description-nm-name",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>grantDeployPermission(dp AgentID)</code>",id:"grantdeploypermissiondp-agentid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>revokeDeployPermission(dp AgentID)</code>",id:"revokedeploypermissiondp-agentid",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>requireDeployPermissions(de DeployPermissionsEnabled)</code>",id:"requiredeploypermissionsde-deploypermissionsenabled",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Views",id:"views",level:2},{value:"<code>findContract(hn Hname)</code>",id:"findcontracthn-hname",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>getContractRecords()</code>",id:"getcontractrecords",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Schemas",id:"schemas",level:2},{value:"<code>ContractRecord</code>",id:"contractrecord",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-root-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"root")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract is responsible for the initialization of the chain.\nIt is the first smart contract deployed on the chain and, upon receiving the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," request, bootstraps the state of the\nchain.\nDeploying all of the other core contracts is a part of the state initialization."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract also functions as a smart contract factory for the chain: upon request, it deploys other smart\ncontracts and maintains an on-chain registry of smart contracts in its state.\nThe contract registry keeps a list of contract records containing their respective name, hname, description, and\ncreator."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("h3",{id:"init"},(0,a.kt)("inlineCode",{parentName:"h3"},"init()")),(0,a.kt)("p",null,"The constructor. Automatically called immediately after confirmation of the origin transaction and never called again.\nWhen executed, this function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initializes base values of the chain according to parameters."),(0,a.kt)("li",{parentName:"ul"},"Sets the caller as the ",(0,a.kt)("em",{parentName:"li"},"chain owner"),"."),(0,a.kt)("li",{parentName:"ul"},"Deploys all the core contracts.")),(0,a.kt)("h3",{id:"deploycontractph-programhash-ds-description-nm-name"},(0,a.kt)("inlineCode",{parentName:"h3"},"deployContract(ph ProgramHash, ds Description, nm Name)")),(0,a.kt)("p",null,"Deploys a non-EVM smart contract on the chain if the caller has deploy permission."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ph")," (",(0,a.kt)("inlineCode",{parentName:"li"},"[32]byte"),"): The hash of the binary ",(0,a.kt)("em",{parentName:"li"},"blob")," (that has been previously stored in the ",(0,a.kt)("a",{parentName:"li",href:"/smart-contracts/guide/core_concepts/core_contracts/blob"},(0,a.kt)("inlineCode",{parentName:"a"},"blob")," contract"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ds")," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"): Description of the contract to be deployed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nm")," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"): The name of the contract to be deployed, used to calculate the\ncontract's ",(0,a.kt)("em",{parentName:"li"},"hname"),". The name must be unique among all contract names in the\nchain.")),(0,a.kt)("h3",{id:"grantdeploypermissiondp-agentid"},(0,a.kt)("inlineCode",{parentName:"h3"},"grantDeployPermission(dp AgentID)")),(0,a.kt)("p",null,"The chain owner grants deploy permission to the agent ID ",(0,a.kt)("inlineCode",{parentName:"p"},"dp"),"."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dp"),"(AgentID): The agent ID."),(0,a.kt)("h3",{id:"revokedeploypermissiondp-agentid"},(0,a.kt)("inlineCode",{parentName:"h3"},"revokeDeployPermission(dp AgentID)")),(0,a.kt)("p",null,"The chain owner revokes the deploy permission of the agent ID ",(0,a.kt)("inlineCode",{parentName:"p"},"dp"),"."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dp"),"(AgentID): The agent ID."),(0,a.kt)("h3",{id:"requiredeploypermissionsde-deploypermissionsenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"requireDeployPermissions(de DeployPermissionsEnabled)")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"de")," (",(0,a.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether permissions should be required to deploy a contract on the chain.")),(0,a.kt)("p",null,"By default, permissions are enabled (addresses need to be granted the right to deploy), but the chain owner can override\nthis setting to allow anyone to deploy contracts on the chain."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("h3",{id:"findcontracthn-hname"},(0,a.kt)("inlineCode",{parentName:"h3"},"findContract(hn Hname)")),(0,a.kt)("p",null,"Returns the record for a given smart contract with Hname ",(0,a.kt)("inlineCode",{parentName:"p"},"hn")," (if it exists)."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hn"),": The smart contract\u2019s Hname"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cf")," (",(0,a.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether or not the contract exists."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dt")," (",(0,a.kt)("a",{parentName:"li",href:"#contractrecord"},(0,a.kt)("inlineCode",{parentName:"a"},"ContractRecord")),"): The requested contract record (if it exists).")),(0,a.kt)("h3",{id:"getcontractrecords"},(0,a.kt)("inlineCode",{parentName:"h3"},"getContractRecords()")),(0,a.kt)("p",null,"Returns the list of all smart contracts deployed on the chain and related records."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"A map of ",(0,a.kt)("inlineCode",{parentName:"p"},"Hname")," => ",(0,a.kt)("a",{parentName:"p",href:"#contractrecord"},(0,a.kt)("inlineCode",{parentName:"a"},"ContractRecord"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("h3",{id:"contractrecord"},(0,a.kt)("inlineCode",{parentName:"h3"},"ContractRecord")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractRecord")," is encoded as the concatenation of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Program hash (",(0,a.kt)("inlineCode",{parentName:"li"},"[32]byte"),")."),(0,a.kt)("li",{parentName:"ul"},"Contract description (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),")."),(0,a.kt)("li",{parentName:"ul"},"Contract name (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),").")))}d.isMDXComponent=!0}}]);