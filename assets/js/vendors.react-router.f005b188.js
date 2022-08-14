/*! For license information please see vendors.react-router.f005b188.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[616],{974:(e,t,n)=>{n.d(t,{AW:()=>w,F0:()=>k,TH:()=>b,WU:()=>B,Z5:()=>M,oQ:()=>W,s0:()=>S});var a=n(648),r=n(294);const l=(0,r.createContext)(null);const s=(0,r.createContext)(null);const i=(0,r.createContext)({outlet:null,matches:[]});function h(e,t){if(!e)throw new Error(t)}function c(e,t,n){void 0===n&&(n="/");let r=v(("string"===typeof t?(0,a.cP)(t):t).pathname||"/",n);if(null==r)return null;let l=o(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(l);let s=null;for(let a=0;null==s&&a<l.length;++a)s=f(l[a],r);return s}function o(e,t,n,a){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a=""),e.forEach(((e,r)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||h(!1),l.relativePath=l.relativePath.slice(a.length));let s=x([a,l.relativePath]),i=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&h(!1),o(e.children,t,i,s)),(null!=e.path||e.index)&&t.push({path:s,score:m(s,e.index),routesMeta:i})})),t}const u=/^:\w+$/,p=e=>"*"===e;function m(e,t){let n=e.split("/"),a=n.length;return n.some(p)&&(a+=-2),t&&(a+=2),n.filter((e=>!p(e))).reduce(((e,t)=>e+(u.test(t)?3:""===t?1:10)),a)}function f(e,t){let{routesMeta:n}=e,a={},r="/",l=[];for(let s=0;s<n.length;++s){let e=n[s],i=s===n.length-1,h="/"===r?t:t.slice(r.length)||"/",c=d({path:e.relativePath,caseSensitive:e.caseSensitive,end:i},h);if(!c)return null;Object.assign(a,c.params);let o=e.route;l.push({params:a,pathname:x([r,c.pathname]),pathnameBase:y(x([r,c.pathnameBase])),route:o}),"/"!==c.pathnameBase&&(r=x([r,c.pathnameBase]))}return l}function d(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let l=r[0],s=l.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=i[n]||"";s=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return e}}(i[n]||""),e}),{}),pathname:l,pathnameBase:s,pattern:e}}function g(e,t,n){let r,l="string"===typeof e?(0,a.cP)(e):e,s=""===e||""===l.pathname?"/":l.pathname;if(null==s)r=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;l.pathname=t.join("/")}r=e>=0?t[e]:"/"}let i=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:l=""}="string"===typeof e?(0,a.cP)(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:C(r),hash:P(l)}}(l,r);return s&&"/"!==s&&s.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function v(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const x=e=>e.join("/").replace(/\/\/+/g,"/"),y=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",P=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function W(e){$()||h(!1);let{basename:t,navigator:n}=(0,r.useContext)(l),{hash:s,pathname:i,search:c}=B(e),o=i;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?(0,a.cP)(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith("/");o="/"===i?t+(r?"/":""):x([t,i])}return n.createHref({pathname:o,search:c,hash:s})}function $(){return null!=(0,r.useContext)(s)}function b(){return $()||h(!1),(0,r.useContext)(s).location}function S(){$()||h(!1);let{basename:e,navigator:t}=(0,r.useContext)(l),{matches:n}=(0,r.useContext)(i),{pathname:a}=b(),s=JSON.stringify(n.map((e=>e.pathnameBase))),c=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{c.current=!0})),(0,r.useCallback)((function(n,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof n)return void t.go(n);let l=g(n,JSON.parse(s),a);"/"!==e&&(l.pathname=x([e,l.pathname])),(r.replace?t.replace:t.push)(l,r.state)}),[e,t,s,a])}function B(e){let{matches:t}=(0,r.useContext)(i),{pathname:n}=b(),a=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,r.useMemo)((()=>g(e,JSON.parse(a),n)),[e,a,n])}function E(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,a,l)=>(0,r.createElement)(i.Provider,{children:void 0!==a.route.element?a.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,l+1))}})),null)}function w(e){h(!1)}function k(e){let{basename:t="/",children:n=null,location:i,navigationType:c=a.aU.Pop,navigator:o,static:u=!1}=e;$()&&h(!1);let p=y(t),m=(0,r.useMemo)((()=>({basename:p,navigator:o,static:u})),[p,o,u]);"string"===typeof i&&(i=(0,a.cP)(i));let{pathname:f="/",search:d="",hash:g="",state:x=null,key:C="default"}=i,P=(0,r.useMemo)((()=>{let e=v(f,p);return null==e?null:{pathname:e,search:d,hash:g,state:x,key:C}}),[p,f,d,g,x,C]);return null==P?null:(0,r.createElement)(l.Provider,{value:m},(0,r.createElement)(s.Provider,{children:n,value:{location:P,navigationType:c}}))}function M(e){let{children:t,location:n}=e;return function(e,t){$()||h(!1);let{matches:n}=(0,r.useContext)(i),l=n[n.length-1],s=l?l.params:{},o=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let u,p=b();if(t){var m;let e="string"===typeof t?(0,a.cP)(t):t;"/"===o||(null==(m=e.pathname)?void 0:m.startsWith(o))||h(!1),u=e}else u=p;let f=u.pathname||"/",d=c(e,{pathname:"/"===o?f:f.slice(o.length)||"/"});return E(d&&d.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:x([o,e.pathname]),pathnameBase:"/"===e.pathnameBase?o:x([o,e.pathnameBase])}))),n)}(O(t),n)}function O(e){let t=[];return r.Children.forEach(e,(e=>{if(!(0,r.isValidElement)(e))return;if(e.type===r.Fragment)return void t.push.apply(t,O(e.props.children));e.type!==w&&h(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=O(e.props.children)),t.push(n)})),t}}}]);