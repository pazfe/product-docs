"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(a),m=n,c=u["".concat(d,".").concat(m)]||u[m]||f[m]||i;return a?r.createElement(c,l(l({ref:t},p),{},{components:a})):r.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const i={description:"List of event types exclusively for MNO and resellers",toc_max_heading_level:2},l="MNO and reseller events",s={unversionedId:"services/events/mno-events",id:"services/events/mno-events",title:"MNO and reseller events",description:"List of event types exclusively for MNO and resellers",source:"@site/docs/services/events/mno-events.md",sourceDirName:"services/events",slug:"/services/events/mno-events",permalink:"/product-docs/services/events/mno-events",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/events/mno-events.md",tags:[],version:"current",frontMatter:{description:"List of event types exclusively for MNO and resellers",toc_max_heading_level:2},sidebar:"ourSidebar",previous:{title:"Event types",permalink:"/product-docs/services/events/event-types"},next:{title:"Working with events",permalink:"/product-docs/services/events/usage"}},d={},o=[{value:"Authentication",id:"authentication",level:2},{value:"Password reset requested",id:"password-reset-requested",level:3},{value:"User verification requested",id:"user-verification-requested",level:3},{value:"Organization and billing",id:"organization-and-billing",level:2},{value:"Self-Signup",id:"self-signup",level:3},{value:"User invited",id:"user-invited",level:3},{value:"Usage tariff and tariff plan",id:"usage-tariff-and-tariff-plan",level:2},{value:"Tariff plan updated",id:"tariff-plan-updated",level:3},{value:"Usage tariff updated",id:"usage-tariff-updated",level:3},{value:"SIM order",id:"sim-order",level:2},{value:"Order submitted",id:"order-submitted",level:3},{value:"Order updated",id:"order-updated",level:3}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mno-and-reseller-events"},"MNO and reseller events"),(0,n.kt)("p",null,"The following event types are only available for ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/mno"},"MNOs")," and resellers using emnify. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All other event types are also available for MNO and reseller accounts.\nYou can find those events on the ",(0,n.kt)("a",{parentName:"p",href:"event-types"},"Event types")," page.")),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"37"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#password-reset-requested"},"Password reset requested"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#user-verification-requested"},"User verification requested"))))),(0,n.kt)("h3",{id:"password-reset-requested"},"Password reset requested"),(0,n.kt)("p",null,"Reset password email is requested for a specific email address."),(0,n.kt)("h3",{id:"user-verification-requested"},"User verification requested"),(0,n.kt)("p",null,"User signed up or requested another verification email. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This event is only needed when customers use ",(0,n.kt)("a",{parentName:"p",href:"#self-signup"},"self-signup"),".\nManually invited users already verified their email.")),(0,n.kt)("h2",{id:"organization-and-billing"},"Organization and billing"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#self-signup"},"Self-Signup"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"36"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#user-invited"},"User invited"))))),(0,n.kt)("h3",{id:"self-signup"},"Self-Signup"),(0,n.kt)("p",null,"Customer used self-signup to create their account."),(0,n.kt)("h3",{id:"user-invited"},"User invited"),(0,n.kt)("p",null,"New user is invited to an organization."),(0,n.kt)("h2",{id:"usage-tariff-and-tariff-plan"},"Usage tariff and tariff plan"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"33"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#tariff-plan-updated"},"Tariff plan updated"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"34"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#usage-tariff-updated"},"Usage tariff updated"))))),(0,n.kt)("h3",{id:"tariff-plan-updated"},"Tariff plan updated"),(0,n.kt)("p",null,"Tariff plan changed after a contract change or self-service tariff upgrade. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),": A tariff plan changes from ",(0,n.kt)("strong",{parentName:"p"},"Evaluation EUR")," to ",(0,n.kt)("strong",{parentName:"p"},"Evaluation USD")," or from ",(0,n.kt)("strong",{parentName:"p"},"Standard EUR")," to ",(0,n.kt)("strong",{parentName:"p"},"Enterprise EUR"),"."),(0,n.kt)("h3",{id:"usage-tariff-updated"},"Usage tariff updated"),(0,n.kt)("p",null,"Usage tariff is assigned or removed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),": Adding or removing ",(0,n.kt)("strong",{parentName:"p"},"Regional Pro"),", ",(0,n.kt)("strong",{parentName:"p"},"Global Basic"),", or ",(0,n.kt)("strong",{parentName:"p"},"Global Extended"),"."),(0,n.kt)("h2",{id:"sim-order"},"SIM order"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The following events are only available if you're using the ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html?urls.primaryName=MNO#/Shop%20Inventory%20Management"},"Embedded SIM Shop"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"38"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#order-submitted"},"Order submitted"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"39"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#order-updated"},"Order updated"))))),(0,n.kt)("h3",{id:"order-submitted"},"Order submitted"),(0,n.kt)("p",null,"A user submitted a SIM order."),(0,n.kt)("h3",{id:"order-updated"},"Order updated"),(0,n.kt)("p",null,"SIM order has been updated."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible updates"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status ",(0,n.kt)("strong",{parentName:"li"},"Paid")," (if previously unpaid)"),(0,n.kt)("li",{parentName:"ul"},"Status ",(0,n.kt)("strong",{parentName:"li"},"Shipped")," (including the shipping provider ID) "),(0,n.kt)("li",{parentName:"ul"},"Status ",(0,n.kt)("strong",{parentName:"li"},"Canceled"))))}u.isMDXComponent=!0}}]);