"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={description:"Distributed data plane, traditional operators vs emnify, regional breakout"},i="IoT cloud communication platform",l={unversionedId:"services/iot-cloud-communication-platform",id:"services/iot-cloud-communication-platform",title:"IoT cloud communication platform",description:"Distributed data plane, traditional operators vs emnify, regional breakout",source:"@site/docs/services/iot-cloud-communication-platform.md",sourceDirName:"services",slug:"/services/iot-cloud-communication-platform",permalink:"/product-docs/services/iot-cloud-communication-platform",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/iot-cloud-communication-platform.md",tags:[],version:"current",frontMatter:{description:"Distributed data plane, traditional operators vs emnify, regional breakout"},sidebar:"ourSidebar",previous:{title:"Global IoT Network",permalink:"/product-docs/services/global-iot-network"},next:{title:"Data Streamer",permalink:"/product-docs/services/data-streamer"}},c={},s=[{value:"Distributed data plane",id:"distributed-data-plane",level:2},{value:"Traditional operators vs emnify",id:"traditional-operators-vs-emnify",level:2},{value:"Regional breakout",id:"regional-breakout",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iot-cloud-communication-platform"},"IoT cloud communication platform"),(0,n.kt)("p",null,"emnify\u2019s platform (consisting of a mobile core network and a communication platform dedicated for IoT) has been built up cloud-natively.\nBeing deployed in 3 AWS cloud regions within 2-3 availability zones / data centers per region increases the availability of the solution - even when one cloud data center becomes unavailable, data will still be transported over the emnify network."),(0,n.kt)("h2",{id:"distributed-data-plane"},"Distributed data plane"),(0,n.kt)("p",null,"Traditional connectivity providers have a centrally located network core.\nAll data is backhauled to the home country of the operator which means that customer data travels across the globe and distributed latency optimized application infrastructure is not possible."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Traditional operators",src:r(4303).Z,width:"2245",height:"1587"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"emnify",src:r(4573).Z,width:"2245",height:"1587"})),(0,n.kt)("h2",{id:"traditional-operators-vs-emnify"},"Traditional operators vs emnify"),(0,n.kt)("p",null,"The data plane of emnify\u2019s cloud communication platform is distributed across major cloud regions (Virginia/US, Ireland/Europe, Singapore/APAC) and directly connected to central peering points with the local operators."),(0,n.kt)("h2",{id:"regional-breakout"},"Regional breakout"),(0,n.kt)("p",null,"emnify\u2019s distributed data plane enables device data to breakout locally, keeping the customer data within the same region.\nMoreover, it also helps reduce network latency.\nYou can either select a specific breakout region or the network automatically selects the breakout region closest to the device.\nThis can be done on the emnify Portal \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Service Profile")," which is applicable to a group of devices."))}u.isMDXComponent=!0},4573:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/emnify_distributed_plane-2850f2711bf3762786e8c2b4c93c51b4.png"},4303:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/traditional_operators-e473c6063c74110afa321933627f281e.png"}}]);