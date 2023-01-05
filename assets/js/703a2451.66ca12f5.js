"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={description:"SASE approach, DNS, IMEI lock"},o="Security",s={unversionedId:"services/security",id:"services/security",title:"Security",description:"SASE approach, DNS, IMEI lock",source:"@site/docs/services/security.md",sourceDirName:"services",slug:"/services/security",permalink:"/product-docs/services/security",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/services/security.md",tags:[],version:"current",frontMatter:{description:"SASE approach, DNS, IMEI lock"},sidebar:"ourSidebar",previous:{title:"Working with events",permalink:"/product-docs/services/events/usage"},next:{title:"Cloud Connect",permalink:"/product-docs/services/cloud-connect"}},c={},l=[{value:"Why does IoT require SASE?",id:"why-does-iot-require-sase",level:2},{value:"DNS",id:"dns",level:2},{value:"IMEI lock",id:"imei-lock",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("p",null,"Given the globally distributed nature of the devices, smaller footprints and lack of resources, it can get difficult to individually secure IoT devices."),(0,i.kt)("p",null,"emnify uses a SASE approach to simplify securing devices \u2013 using several services specifically to protect customer data, filtering malicious content and preventing unauthorized access."),(0,i.kt)("h2",{id:"why-does-iot-require-sase"},"Why does IoT require SASE?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IoT security threats",src:r(5303).Z,width:"1168",height:"668"})),(0,i.kt)("p",null,"Secure Access Service Edge (",(0,i.kt)("a",{parentName:"p",href:"../glossary#sase-secure-access-service-edge"},"SASE"),") introduces a new architecture where networking and security functions are bundled in a cloud-delivered service.\nYou can apply the same security standards across all your devices independent of the location.\nMoreover, you can integrate security features in your solutions right from the beginning."),(0,i.kt)("p",null,"Some of the features that\xa0",(0,i.kt)("a",{parentName:"p",href:"../glossary#sase-secure-access-service-edge"},"SASE"),"\xa0for IoT architecture includes are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN)",(0,i.kt)("br",{parentName:"li"}),"emnify utilizes a SD-WAN to route data to the closest cloud region using the\xa0",(0,i.kt)("a",{parentName:"li",href:"iot-cloud-communication-platform#regional-breakout"},"Regional Breakout"),"\xa0concept.\nIn this way, latency and data stability is improved, and the end customer can be sure that data does not leave the continent and jurisdiction."),(0,i.kt)("li",{parentName:"ul"},"Cloud Access Security Broker (CASB)",(0,i.kt)("br",{parentName:"li"}),"emnify allows centrally defining policies for the devices such as: networks that can be accessed, allowed IP addresses through which authorized users can remotely access devices.\nAll configuration is done in the central platform and applied wherever the device is."),(0,i.kt)("li",{parentName:"ul"},"Firewall as a Service (FaaS)",(0,i.kt)("br",{parentName:"li"}),"emnify provides a firewall as a Service which limits the IP addresses that are reachable for a device, making sure that the devices cannot be misused for other purposes.")),(0,i.kt)("p",null,"In the following sections we will discuss some of the security features offered by emnify."),(0,i.kt)("h2",{id:"dns"},"DNS"),(0,i.kt)("p",null,"When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address to which it can send data.\nFor example, a hostname such as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iot.example.com"),"\xa0will be mapped to an IP address like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"192.0.2.1"),"."),(0,i.kt)("p",null,"Cellular providers typically provide a DNS service.\nBy default, emnify routes all DNS queries over Google\u2019s public DNS\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"8.8.8.8"),"."),(0,i.kt)("p",null,"For some devices and modules, it is possible to configure the DNS service.\nFor example, Quectel uses the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"AT+QIDNSCFG"),"\xa0command, SIMcom\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"AT+CDNSCFG"),"\xa0command.\nThis is useful to be able to use your own or private DNS servers to secure and have better control over the solution."),(0,i.kt)("p",null,"Customers can also configure to use their own DNS, no matter if it is a public or a private one.\nThe DNS settings can be changed in the Portal \u2192 Device Policies \u2192 Service Policies \u2192 More Options \u2192 DNS."),(0,i.kt)("p",null,"Utilizing a private DNS server which is not reachable via the public Internet requires to set up a private network with the machine or a network where the private DNS server is located.\nThis can be done using Cloud Connect either with Amazon Transit Gateway or IPsec.\nA tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.emnify.com/en/developer-hub/dns-filtering"},"here"),"."),(0,i.kt)("h2",{id:"imei-lock"},"IMEI lock"),(0,i.kt)("p",null,"For device manufacturers, SIM card theft is an issue because pluggable SIM cards can be removed from a device and then used to gain free internet access.\nThe ",(0,i.kt)("a",{parentName:"p",href:"../glossary#imei-lock"},"IMEI lock"),"  feature prevents the use of SIM card in any other device by bounding the SIM to an IMEI.\nThe\xa0",(0,i.kt)("a",{parentName:"p",href:"../glossary#imei---international-mobile-equipment-identification-number"},"IMEI"),"\xa0is a unique device identifier.\nWhen the automatic IMEI lock is configured, the emnify platform will bind the SIM cards to the first device that establishes a data connection.\nAll future device connections will only be allowed from this device."))}d.isMDXComponent=!0},5303:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/security_threats-aa07b57daba16c75bddafa6937c42bef.png"}}]);