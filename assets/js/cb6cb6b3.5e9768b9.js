"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),s=n(54411),o=n(43305);const i={keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},l="Triggering Events",u={unversionedId:"guide/schema/events",id:"guide/schema/events",title:"Triggering Events",description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/events.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/events",permalink:"/smart-contracts/guide/schema/events",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/events.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract State",permalink:"/smart-contracts/guide/schema/state"},next:{title:"Function Definitions",permalink:"/smart-contracts/guide/schema/funcs"}},c={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"triggering-events"},"Triggering Events"),(0,a.kt)("p",null,"Smart contracts do not live in a vacuum. Even though they run in a very limited\nsandbox, from a larger perspective there will have to be a way for users to interact\nwith them. Since smart contracts are essentially event-driven, and requests run\nasynchronously from the user's perspective, there is a need for triggering events by\nthe smart contracts themselves. Of course, it would be possible for users to\nperiodically call a view function to retrieve the latest state of the smart contract,\nbut this burdens the nodes unnecessarily. A better way is to have the smart contracts\ntrigger events that the user can subscribe to and that convey changes to its state."),(0,a.kt)("p",null,"To support events the ISC sandbox provides a very rudimentary interface. The function\ncall context exposes this interface through its ",(0,a.kt)("inlineCode",{parentName:"p"},"event()")," function, which is passed a\ncompletely arbitrary text string. It is up to the smart contract creator to format\nthis text string and it's up to the user to interpret this text string correctly. This\nis error-prone, inconsistent, and means that a lot of code needs to be written both on\nthe smart contract side that generates these events, and on the client side that handles\nthese events. And with any change to the formatting of these events both ends need to be\nmodified to stay in sync."),(0,a.kt)("p",null,"This is why the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/usage"},"schema tool")," allows you to define your own structured events.\nThe schema tool will generate a structure that will become part of all func call contexts.\nEvents can only be triggered from within a func. They will become part of the state of the\nsmart contract because every event is logged in the core ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," contract.\nTherefore, they cannot be triggered from a view."),(0,a.kt)("p",null,"For each event defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section of the schema definition file, this\nevents structure will contain a member function that takes the defined types of parameters\nand will automatically encode the event as a consistently formatted string and pass it\nto the ISC context's ",(0,a.kt)("inlineCode",{parentName:"p"},"event()")," function. The string consists of the name of the event,\na timestamp, and string representations of each field, all separated by vertical bars."),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section that can be found in the demo ",(0,a.kt)("inlineCode",{parentName:"p"},"fairroulette")," smart contract:"),(0,a.kt)(s.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"events": {\n    "bet": {\n        "address": "Address // address of better",\n        "amount": "Int64 // amount of tokens to bet",\n        "number": "Int64 // number to bet on",\n    },\n    "payout": {\n        "address": "Address // address of winner",\n        "amount": "Int64 // amount of tokens won",\n    },\n    "round": {\n        "number": "Int64 // current betting round number"\n    },\n    "start": {\n    },\n    "stop": {\n    },\n    "winner": {\n        "number": "Int64 // the winning number"\n    }\n}\n'))),(0,a.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"events:\n  bet:\n    address: Address // address of better\n    amount: Int64 // amount of tokens to bet\n    number: Int64 // number to bet on\n  payout:\n    address: Address // address of winner\n    amount: Int64 // amount of tokens won\n  round:\n    number: Int64 // current betting round number\n  start:\n  stop:\n  winner:\n    number: Int64 // the winning number\n")))),(0,a.kt)("p",null,"The schema tool will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"events.xx")," which contains the following code for the\nFairRouletteEvents struct:"),(0,a.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package fairroulette\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib"\n\ntype FairRouletteEvents struct{}\n\nfunc (e FairRouletteEvents) Bet(address wasmlib.ScAddress, amount int64, number int64) {\n    wasmlib.NewEventEncoder("fairroulette.bet").\n    Address(address).\n    Int64(amount).\n    Int64(number).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Payout(address wasmlib.ScAddress, amount int64) {\n    wasmlib.NewEventEncoder("fairroulette.payout").\n    Address(address).\n    Int64(amount).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Round(number int64) {\n    wasmlib.NewEventEncoder("fairroulette.round").\n    Int64(number).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Start() {\n    wasmlib.NewEventEncoder("fairroulette.start").\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Stop() {\n    wasmlib.NewEventEncoder("fairroulette.stop").\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Winner(number int64) {\n    wasmlib.NewEventEncoder("fairroulette.winner").\n    Int64(number).\n    Emit()\n}\n'))),(0,a.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\npub struct FairRouletteEvents {\n}\n\nimpl FairRouletteEvents {\n    pub fn bet(&self, address: &ScAddress, amount: i64, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.bet");\n        encoder.address(&address);\n        encoder.int64(amount);\n        encoder.int64(number);\n        encoder.emit();\n    }\n\n    pub fn payout(&self, address: &ScAddress, amount: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.payout");\n        encoder.address(&address);\n        encoder.int64(amount);\n        encoder.emit();\n    }\n\n    pub fn round(&self, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.round");\n        encoder.int64(number);\n        encoder.emit();\n    }\n\n    pub fn start(&self) {\n        EventEncoder::new("fairroulette.start").emit();\n    }\n\n    pub fn stop(&self) {\n        EventEncoder::new("fairroulette.stop").emit();\n    }\n\n    pub fn winner(&self, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.winner");\n        encoder.int64(number);\n        encoder.emit();\n    }\n}\n'))),(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib";\n\nexport class FairRouletteEvents {\n    bet(address: wasmlib.ScAddress, amount: i64, number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.bet").\n        address(address).\n        int64(amount).\n        int64(number).\n        emit();\n    }\n\n    payout(address: wasmlib.ScAddress, amount: i64): void {\n        new wasmlib.EventEncoder("fairroulette.payout").\n        address(address).\n        int64(amount).\n        emit();\n    }\n\n    round(number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.round").\n        int64(number).\n        emit();\n    }\n\n    start(): void {\n        new wasmlib.EventEncoder("fairroulette.start").\n        emit();\n    }\n\n    stop(): void {\n        new wasmlib.EventEncoder("fairroulette.stop").\n        emit();\n    }\n\n    winner(number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.winner").\n        int64(number).\n        emit();\n    }\n}\n')))),(0,a.kt)("p",null,"Notice how the generated functions use the WasmLib EventEncoder to encode the\nparameters into a single string before emitting it. Here is the way in which\n",(0,a.kt)("inlineCode",{parentName:"p"},"fairroulette")," emits the ",(0,a.kt)("inlineCode",{parentName:"p"},"bet")," event in its smart contract code:"),(0,a.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    f.Events.Bet(bet.Better.Address(), bet.Amount, bet.Number)\n"))),(0,a.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    f.events.bet(&bet.better.address(), bet.amount, bet.number);\n"))),(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"    f.events.bet(bet.better.address(), bet.amount, bet.number);\n")))),(0,a.kt)("p",null,"The smart contract client code can listen in to the event stream and respond to the\nevents it deems noteworthy. The schema tool will shortly also be generating the client\nside code that properly parses these events and passes a type-safe structure to the\nclient code."),(0,a.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify\n",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/funcs"},"function definitions"),"."))}p.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const s="tabItem__kUE";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),s=n(86010),o=n(51048),i=n(33609),l=n(1943),u=n(72957);const c="tabList_fbd4",d="tabItem_v5XY";function m(e){var t,n;const{lazy:o,block:m,defaultValue:p,values:b,groupId:h,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),w=(0,i.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:k}=(0,l.U)(),[T,N]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=E[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==T&&(I(t),N(r),null!=h&&k(h,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;n=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);