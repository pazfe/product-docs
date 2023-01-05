"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},r="REST API",p={unversionedId:"rest-api",id:"rest-api",title:"REST API",description:"REST APIs are one of the easiest way to integrate external services into your application.",source:"@site/docs/rest-api.md",sourceDirName:".",slug:"/rest-api",permalink:"/product-docs/rest-api",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/rest-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ourSidebar",previous:{title:"Endpoint management and group policies",permalink:"/product-docs/services/endpoint-management-and-group-policies"},next:{title:"Single Sign-On",permalink:"/product-docs/sso/overview"}},s={},l=[{value:"API Authentication",id:"api-authentication",level:3},{value:"Authenticate with User Credentials",id:"authenticate-with-user-credentials",level:4},{value:"Authenticate with an Application Token",id:"authenticate-with-an-application-token",level:4},{value:"Sending and receiving SMS",id:"sending-and-receiving-sms",level:3},{value:"Code Samples",id:"code-samples",level:3}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"REST APIs are one of the easiest way to integrate external services into your application.\nThe EMnify API provides a variety of HTTP requests to integrate several EMnify services into your application.\nThe EMnify API is based on the OpenAPI Specification OAS3.\nYou can find the API reference\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904"},"here"),"\xa0where you can also try out our API."),(0,i.kt)("p",null,"The sections below will describe the services available through the EMnify API."),(0,i.kt)("h3",{id:"api-authentication"},"API Authentication"),(0,i.kt)("p",null,"To use the EMnify API, you need to authenticate with an Authentication Token.\nWe use JWTs as the authentication token.\nNow there are two ways to retreive this token:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Authenticate with User Credentials"),": You can use the username and password you used while signing up for the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://portal.emnify.com/"},"EMnify Portal"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Authenticate with an Application Token"),": You can use the application token that you can generate in your EMnify account.")),(0,i.kt)("h4",{id:"authenticate-with-user-credentials"},"Authenticate with User Credentials"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/authenticate"),"\xa0API is used to generate a JWT\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0which authenticates subsequent API calls.\nThe request body must provide a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\xa0(typically the email address used when signing up) and the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"user password"),"\xa0and in turn will receive an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0[https://cdn.emnify.net/api/v1/authenticate](https://cdn.emnify.net/api/v1/authenticate?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)\n")),(0,i.kt)("p",null,"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "user@domain.com",\n  "password": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12"\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If users have signed up using the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"EMnify Portal"),", the password will need to be a SHA1 hashed string.\nThe SHA1 of a password can be generated online or in the terminal via the following command:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"echo -n 'my_password' | openssl sha1"),".")),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",\n  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n')),(0,i.kt)("p",null,"You can use this\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0as the bearer token to authenticate all API calls.\nThis\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0is valid for 240 minutes, so you don\u2019t need to retreive the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0before every API call.\nOnce the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0expires, you can use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"\xa0to retreive the new\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"."),(0,i.kt)("h4",{id:"authenticate-with-an-application-token"},"Authenticate with an Application Token"),(0,i.kt)("p",null,"As you should not store your EMnify user credentials on your application server, you can generate an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),"\xa0via the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"EMnify Portal"),"\xa0or via the API\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/application_token"),".\nThe request body should have description of the token usually used to indicate who is using the token and can have a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"expiry_date"),"\xa0for the token."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0[https://cdn.emnify.net/api/v1/application_token](https://cdn.emnify.net/api/v1/application_token?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)`\n")),(0,i.kt)("p",null,"Request header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Bearer {auth_token}\n")),(0,i.kt)("p",null,"Request body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "Token with expiry date",\n  "expiry_date": "2021-10-29"\n}\n')),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "application_token": "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8..."\n}\n')),(0,i.kt)("p",null,"This calls returns an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),"\xa0which can then be used instead of the user/password combination and can be revoked at any time to get the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"."),(0,i.kt)("p",null,"You can alternatively generate the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),"\xa0in the EMnify Portal.\nLogin in to the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/login"},"EMnify Portal"),"\xa0\u2192 Integrations \u2192 Application Tokens \u2192 Add Token."),(0,i.kt)("p",null,"Generate Application Token using the EMnify Portal"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"generate application token",src:n(3270).Z,width:"2872",height:"1578"})),(0,i.kt)("p",null,"To get the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),", use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/authenticate"),"\xa0API. The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0can be then used to authenticate all subsequent API calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0[https://cdn.emnify.net/api/v1/authenticate](https://cdn.emnify.net/api/v1/authenticate?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)\n")),(0,i.kt)("p",null,"Request body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "application_token": "kNTktNTA1My00YzdhLT..."\n}\n')),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n')),(0,i.kt)("p",null,"Unlike user and password authentication, only an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0is returned by the server and no\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"\xa0will be included in the response.\nThis\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0is valid for 240 minutes."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is NOT advisable to generate an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0before making every API call.\nYou should reuse the generated\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0for 240 minutes after it is generated and update it after its expiration.")),(0,i.kt)("h3",{id:"sending-and-receiving-sms"},"Sending and receiving SMS"),(0,i.kt)("p",null,"You can perform the following SMS related operations using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),"\xa0API."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List sent and received SMS\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms")),(0,i.kt)("li",{parentName:"ol"},"Send SMS to and endpoint\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v1/endpoint/{endpoint_id}/sms")),(0,i.kt)("li",{parentName:"ol"},"Get details about an endpoint SMS\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}")),(0,i.kt)("li",{parentName:"ol"},"Cancel a buffered SMS\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}"))),(0,i.kt)("p",null,"Example: Send SMS to an Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0[https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms](https://cdn.emnify.net/api/v1/endpoint/%7Bendpoint_id%7D/sms?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)\n")),(0,i.kt)("p",null,"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source_address": 12345689,\n  "payload": "This is the message text"\n}\n')),(0,i.kt)("p",null,"Responses"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"201")),(0,i.kt)("p",null,"The source address is the sender number that will appear on the receiving device.\nThe payload is the actual text to be sent as SMS."),(0,i.kt)("h3",{id:"code-samples"},"Code Samples"),(0,i.kt)("p",null,"Check out\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EMnify/API_Examples_JS"},"JavaScript Examples"),"\xa0with the EMnify API in our GitHub repository."))}d.isMDXComponent=!0},3270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generate_app_token-e4f15aee62edc04a4ac5b6cccf47fe0d.png"}}]);