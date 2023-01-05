"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={description:"Configure SIM state to minimize costs"},o="SIM life cycle management",c={unversionedId:"services/sim-life-cycle-management",id:"services/sim-life-cycle-management",title:"SIM life cycle management",description:"Configure SIM state to minimize costs",source:"@site/docs/services/sim-life-cycle-management.md",sourceDirName:"services",slug:"/services/sim-life-cycle-management",permalink:"/product-docs/services/sim-life-cycle-management",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/sim-life-cycle-management.md",tags:[],version:"current",frontMatter:{description:"Configure SIM state to minimize costs"},sidebar:"ourSidebar",previous:{title:"No-code workflow automation",permalink:"/product-docs/services/no-code-workflow-automation"},next:{title:"Endpoint management and group policies",permalink:"/product-docs/services/endpoint-management-and-group-policies"}},s={},l=[],m={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sim-life-cycle-management"},"SIM life cycle management"),(0,i.kt)("p",null,"When selling connected devices, it is difficult to determine when devices will be in use and when not.\nUsing SIM cards that cannot align with the device lifecycle incur unnecessary costs."),(0,i.kt)("p",null,"emnify SIM cards do not incur any costs unless activated.\nThe SIMs have 4 different states that can be configured via the emnify Portal or\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670424207784.1670429175064.6&__hssc=115846617.2.1670429175064&__hsfp=3017379904#/SIMs"},"REST API"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Issued")," \u2013 the SIM is not yet installed nor usable - no monthly charge is applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Factory-Test")," \u2013 the SIM is enabled and can be used for a defined limit of data and SMS without charge before it automatically goes into active state. The SIM can stay in this state until it is used by the end customer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," \u2013 the SIM is enabled, and the monthly charge is applied"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Suspended")," \u2013 an active SIM can be suspended when it is not used to save additional charges. The SIM can be activated anytime afterwards.")))}p.isMDXComponent=!0}}]);