/*! For license information please see vendors.react-router-dom.f13a4508.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[255],{711:(e,t,n)=>{n.d(t,{VK:()=>u,rU:()=>f});var r=n(294),a=n(648),c=n(974);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}const i=["onClick","reloadDocument","replace","state","target","to"];function u(e){let{basename:t,children:n,window:l}=e,o=(0,r.useRef)();null==o.current&&(o.current=(0,a.lX)({window:l}));let i=o.current,[u,f]=(0,r.useState)({action:i.action,location:i.location});return(0,r.useLayoutEffect)((()=>i.listen(f)),[i]),(0,r.createElement)(c.F0,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i})}const f=(0,r.forwardRef)((function(e,t){let{onClick:n,reloadDocument:u,replace:f=!1,state:s,target:p,to:d}=e,h=o(e,i),g=(0,c.oQ)(d),v=function(e,t){let{target:n,replace:l,state:o}=void 0===t?{}:t,i=(0,c.s0)(),u=(0,c.TH)(),f=(0,c.WU)(e);return(0,r.useCallback)((t=>{if(0===t.button&&(!n||"_self"===n)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let n=!!l||(0,a.Ep)(u)===(0,a.Ep)(f);i(e,{replace:n,state:o})}}),[u,i,f,l,o,n,e])}(d,{replace:f,state:s,target:p});return(0,r.createElement)("a",l({},h,{href:g,onClick:function(e){n&&n(e),e.defaultPrevented||u||v(e)},ref:t,target:p}))}))}}]);