"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10712],{44668:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var n=t(87462),s=t(63366),o=(t(67294),t(3905)),i=["components"],r={description:"The IOTA network is based on messages and payloads. A message is a data structure broadcast in the IOTA network and represents a node (vertex) in the Tangle graph, while a payload represents a layer of concern.",image:"/img/libraries/messages_in_tangle.svg",keywords:["explanation","message","payload","ledger state","outputs","unspent transaction output","UTXO"]},l="Messages, Payloads, and Transactions",d={unversionedId:"explanations/messages_payloads_and_transactions",id:"explanations/messages_payloads_and_transactions",title:"Messages, Payloads, and Transactions",description:"The IOTA network is based on messages and payloads. A message is a data structure broadcast in the IOTA network and represents a node (vertex) in the Tangle graph, while a payload represents a layer of concern.",source:"@site/content/build/iota.rs/production/documentation/docs/explanations/messages_payloads_and_transactions.md",sourceDirName:"explanations",slug:"/explanations/messages_payloads_and_transactions",permalink:"/iota.rs/explanations/messages_payloads_and_transactions",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/explanations/messages_payloads_and_transactions.md",tags:[],version:"current",frontMatter:{description:"The IOTA network is based on messages and payloads. A message is a data structure broadcast in the IOTA network and represents a node (vertex) in the Tangle graph, while a payload represents a layer of concern.",image:"/img/libraries/messages_in_tangle.svg",keywords:["explanation","message","payload","ledger state","outputs","unspent transaction output","UTXO"]},sidebar:"docs",previous:{title:"Address/Key Space",permalink:"/iota.rs/explanations/address_key_space"},next:{title:"Running Examples",permalink:"/iota.rs/examples/running_examples"}},p={},u=[{value:"Messages",id:"messages",level:2},{value:"Payloads",id:"payloads",level:2},{value:"Core Payloads",id:"core-payloads",level:3},{value:"SignedTransaction",id:"signedtransaction",level:4},{value:"MilestonePayload",id:"milestonepayload",level:4},{value:"IndexationPayload",id:"indexationpayload",level:4},{value:"Unspent Transaction Output (UTXO)",id:"unspent-transaction-output-utxo",level:3},{value:"Related Examples",id:"related-examples",level:2}],c={toc:u};function m(e){var a=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messages-payloads-and-transactions"},"Messages, Payloads, and Transactions"),(0,o.kt)("p",null,"The IOTA network is based on messages and payloads. This section will explain the relationship between messages and\npayloads and how you can create value transactions."),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"A message is a data structure broadcast in the IOTA network and represents a node (vertex) in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/visualizer/"},"Tangle graph"),". It can refer to up to 8 previous messages, and once a\nmessage is attached to the Tangle and approved by a milestone, the Tangle structure ensures the content of the message\nwill remain unaltered. Each message has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"message_id"),", which is based on a hash algorithm of the binary content\nof the message. A message is an atomic unit that is confirmed by the network as a whole."),(0,o.kt)("p",null,"A message is broadcast using a binary format, has an arbitrary size of up to 35 kB, and can hold variable sets of\ninformation called ",(0,o.kt)("a",{parentName:"p",href:"#payloads"},"payloads"),". A message can encapsulate any number of payloads, and even a message without a\npayload is perfectly valid."),(0,o.kt)("h2",{id:"payloads"},"Payloads"),(0,o.kt)("p",null,"A payload represents a layer of concern. Some payloads may change a state of the ledger (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions"),"), and some\nmay provide extra features to some specific applications and business use cases (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"indexed data"),")."),(0,o.kt)("p",null,"There are already implemented ",(0,o.kt)("a",{parentName:"p",href:"#core-payloads"},"core payloads"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedTransaction"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),". However, the message and payload definitions are generic enough to incorporate any future\npayload(s) the community agrees upon."),(0,o.kt)("p",null,"The IOTA network ensures the outer structure of any message is valid and aligned with a network consensus protocol.\nHowever, the message\u2019s inner structure is very flexible, future-proof, and offers an unmatched network extensibility."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"messages_in_tangle",src:t(69942).Z,width:"1112",height:"451"})),(0,o.kt)("h3",{id:"core-payloads"},"Core Payloads"),(0,o.kt)("p",null,"The current IOTA network incorporates the following core payloads:"),(0,o.kt)("h4",{id:"signedtransaction"},"SignedTransaction"),(0,o.kt)("p",null,"A payload that describes ",(0,o.kt)("a",{parentName:"p",href:"#unspent-transaction-output-utxo"},(0,o.kt)("inlineCode",{parentName:"a"},"UTXO")," transactions")," that are the cornerstone of value-based\ntransfers in the IOTA network. You can use this payload to sign a message cryptographically. This payload changes the\nledger state as old ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," are spent (replaced) and new ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," are created."),(0,o.kt)("p",null,"Example of a message with a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": {\n        "networkId": "14379272398717627559",\n        "parentMessageIds": [\n            "a59a5d11da0944c88b58f9f9c095c11ee4b8b7fd9da47bd25412d39f815bb804",\n            "c3d42c42eccd25bc3374a0552e3a4b21180facece14f31c36e5ac580e5496ccc",\n            "dae4a36cef9a3fd03caff5ddbc5c90bc5523477f4e4937837202bfe4bd5b98aa",\n            "fe188a4f57ecd6a135b05b31913d86617550d9397476ab5bb7445138f782ec34"\n        ],\n        "payload": {\n            "type": 0,\n            "essence": {\n                "type": 0,\n                "inputs": [\n                    {\n                        "type": 0,\n                        "transactionId": "b2b9723c9119f4fb49084472e72821e842ba4779df02e1038f03dd8b25d96730",\n                        "transactionOutputIndex": 1\n                    }\n                ],\n                "outputs": [\n                    {\n                        "type": 0,\n                        "address": {\n                            "type": 0,\n                            "address": "43e80947ebd17637569ba7f90fd2541f50038de731467c45aa5c92d4429c9446"\n                        },\n                        "amount": 1000\n                    },\n                    {\n                        "type": 0,\n                        "address": {\n                            "type": 0,\n                            "address": "b4d1e9abfbcf4d2d2f0e042f23301a7d23f6ac1bde0a1fed508de5afec884ba8"\n                        },\n                        "amount": 8995995\n                    }\n                ],\n                "payload": null\n            },\n            "unlockBlocks": [\n                {\n                    "type": 0,\n                    "signature": {\n                        "type": 0,\n                        "publicKey": "27177dd41cc479ed379b8ad2535d66fa58480c119a8a15a7a296f055401ab958",\n                        "signature": "8403dc1fb949365e960f14cdc19b6b3abb6b0a6bce83f1082a33e3857a30ddd2be1098074b6c261f442db8e59eb640002d24d9a577262fd8152c6fee2d076c0b"\n                    }\n                }\n            ]\n        },\n        "nonce": "156106"\n    },\n    "messageId": "92f427d68c7008a81fde290b9cb99071373d9893d65718bfc22928273877e041"\n}\n')),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," includes the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inputs"),": A list of valid ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," that should be used to fund the given message. Those ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," will be spent and\nonce the message is confirmed, those outputs are not valid anymore. Outputs are uniquely referenced via ",(0,o.kt)("inlineCode",{parentName:"li"},"transaction_id"),"\nand inner ",(0,o.kt)("inlineCode",{parentName:"li"},"index"),". At least one output has to be given with enough balance to source all ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," of the given message."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"outputs"),": A list of IOTA address(es) and related amount(s) that the input ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," should be split among. Based on\nthis information, new ",(0,o.kt)("inlineCode",{parentName:"li"},"UTXO")," entities (outputs) will be being created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unlockBlocks"),": Includes a transaction signature(s) (currently based on ",(0,o.kt)("inlineCode",{parentName:"li"},"Ed25519")," scheme) that prooves token\nownership based on a valid seed. Only the valid seed owner is able to correctly sign the given transaction and proove\nownership of the tokens under the given output(s). Each input ",(0,o.kt)("inlineCode",{parentName:"li"},"output")," has to have a corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"unblockBlocks")," entry\nin case more ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," are used to fund the operation, either using the given signature or as a reference to the\nexisting signature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload"),": Each ",(0,o.kt)("inlineCode",{parentName:"li"},"SignedTransaction"),"(payload type 0) can include additional payload(s) such as an ",(0,o.kt)("inlineCode",{parentName:"li"},"IndexationPayload"),"\n(payload type 1) for example. This means any value-based messages can also contain arbitrary data and its key index. It\nis also an example how individual payloads can be encapsulated on different levels of concern")),(0,o.kt)("h4",{id:"milestonepayload"},"MilestonePayload"),(0,o.kt)("p",null,"A payload that is emitted by the Coordinator."),(0,o.kt)("h4",{id:"indexationpayload"},"IndexationPayload"),(0,o.kt)("p",null,"A payload that enables adding an index to the encapsulating message, as well as arbitrary data. You can use the\nindex to search for the message(s)."),(0,o.kt)("h3",{id:"unspent-transaction-output-utxo"},"Unspent Transaction Output (UTXO)"),(0,o.kt)("p",null,"IOTA uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"unspent transaction output")," model called ",(0,o.kt)("inlineCode",{parentName:"p"},"UTXO"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"UTXO")," is based on an idea to track the unspent amount of\ntokens using a data structure called ",(0,o.kt)("inlineCode",{parentName:"p"},"output"),". This model can be explained using a simple example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are 100 tokens recorded in the ledger as ",(0,o.kt)("inlineCode",{parentName:"li"},"Output A"),", which belongs to Alice. So ",(0,o.kt)("strong",{parentName:"li"},"initial state of\nledger"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Output A")," = 100 tokens."),(0,o.kt)("li",{parentName:"ul"},"Alice sends 20 tokens to Paul, 30 tokens to Linda, and keeps 50 tokens at her disposal."),(0,o.kt)("li",{parentName:"ul"},"Her 100 tokens are currently stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"Output A"),". This means she has to divide (spend) her tokens to create three new\noutputs:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output B")," with 20 tokens that go to Paul."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output C")," with 30 tokens that go to Linda."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output D")," with the remaining 50 tokens that she keeps for herself."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"original ",(0,o.kt)("inlineCode",{parentName:"strong"},"Output A"))," was spent entirely and can not be used anymore. As it is spent, it ",(0,o.kt)("strong",{parentName:"li"},"becomes irrelevant"),"\nto the ledger state. The ",(0,o.kt)("strong",{parentName:"li"},"new state of ledger")," is:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output B")," = 20 tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output C")," = 30 tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output D")," = 50 tokens."))),(0,o.kt)("li",{parentName:"ul"},"The total supply remains the same. However, the number of outputs differs, and some were replaced by other outputs in\nthe process.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"utxo",src:t(80441).Z,width:"1280",height:"400"})),(0,o.kt)("p",null,"The key takeaway of the outlined process is that each unique ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," can ",(0,o.kt)("strong",{parentName:"p"},"only be spent once"),". Once an output is\nspent, it can not be used anymore and is irrelevant regarding the ledger state."),(0,o.kt)("p",null,"So even if Alice still wants to keep the remaining tokens at her fingertips, those tokens have to be moved to completely\nnew ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," that can still be tied to the same IOTA address Alice used before."),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," also stores information about an IOTA address it is coupled with. This means addresses and tokens are\nindirectly coupled via outputs. So basically, the sum of outputs and their amounts under a given address is a balance of\nthe given address, i.e., the number of tokens the address can spend. And the sum of all unspent outputs and their\namounts is equal to the total supply."),(0,o.kt)("p",null,"Outputs are encapsulated in a message as a part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," payload."),(0,o.kt)("h2",{id:"related-examples"},"Related Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota.rs/examples/simple_message"},"Simple Message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota.rs/examples/get_outputs"},"Get Outputs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota.rs/examples/data_message"},"Get Message Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota.rs/examples/transaction"},"Send a Signed Transaction"))))}m.isMDXComponent=!0},69942:function(e,a,t){a.Z=t.p+"assets/images/messages_in_tangle-903d698770022c248102efa09bdb27d8.svg"},80441:function(e,a,t){a.Z=t.p+"assets/images/utxo-463592a9e83300c70fb7ae4a0285fd85.svg"},3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(t),m=s,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=c;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);