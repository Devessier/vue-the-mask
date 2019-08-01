(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["VueTheMask"]=t():e["VueTheMask"]=t()})("undefined"!==typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="9be4")}({"9be4":function(e,t,n){"use strict";var r;(n.r(t),"undefined"!==typeof window)&&((r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var a={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleUpperCase()},a:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleLowerCase()},"!":{escape:!0}};function o(e,t,n=!0,r){e=e||"",t=t||"";var a=0,o=0,i="";while(a<t.length&&o<e.length){var s=t[a],u=r[s],l=e[o];u&&!u.escape?(u.pattern.test(l)&&(i+=u.transform?u.transform(l):l,a++),o++):(u&&u.escape&&(a++,s=t[a]),n&&(i+=s),l===s&&o++,a++)}var f="";while(a<t.length&&n){s=t[a];if(r[s]){f="";break}f+=s,a++}return i+f}function i(e,t,n){return t=t.sort((e,t)=>e.length-t.length),function(r,a,o=!0){var i=0;while(i<t.length){var s=t[i];i++;var u=t[i];if(!(u&&e(r,u,!0,n).length>s.length))return e(r,s,o,n)}return""}}var s=function(e,t,n=!0,r){return Array.isArray(t)?i(o,t,r)(e,t,n,r):o(e,t,n,r)};function u(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var l=function(e,t){if("disabled"!==t.arg){var n=t.value;if((Array.isArray(n)||"string"===typeof n)&&(n={mask:n,tokens:a,masked:!0}),"INPUT"!==e.tagName.toLocaleUpperCase()){var r=e.getElementsByTagName("input");if(1!==r.length)throw new Error("v-mask directive requires 1 input, found "+r.length);e=r[0]}e.oninput=function(t){if(t.isTrusted){var r=e.selectionEnd,a=e.value[r-1];e.value=s(e.value,n.mask,!0,n.tokens);while(r<e.value.length&&e.value.charAt(r-1)!==a)r++;e===document.activeElement&&(e.setSelectionRange(r,r),setTimeout(function(){e.setSelectionRange(r,r)},0)),e.dispatchEvent(u("input"))}};var o=s(e.value,n.mask,n.masked,n.tokens);o!==e.value&&(e.value=o,e.dispatchEvent(u("input")))}},f={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:()=>a}},directives:{mask:l},data(){return{lastValue:null,display:this.value}},watch:{value(e){e!==this.lastValue&&(this.display=e)},masked(){this.refresh(this.display)}},computed:{config(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput(e){e.isTrusted||this.refresh(e.target.value)},refresh(e){this.display=e;e=s(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},d=[];function p(e,t,n,r,a,o,i,s){e=e||{};var u=typeof e.default;"object"!==u&&"function"!==u||(e=e.default);var l,f="function"===typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId=o),i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(f.functional){f._injectStyles=l;var c=f.render;f.render=function(e,t){return l.call(t),c(e,t)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:f}}var v=!1,h=null,m=null,y=null,g=p(f,c,d,v,h,m,y),k=g.exports;function _(e){e.component(k.name,k),e.directive("mask",l)}var b=_;"undefined"!==typeof window&&window.Vue&&window.Vue.use(_),n.d(t,"TheMask",function(){return k}),n.d(t,"mask",function(){return l}),n.d(t,"tokens",function(){return a});t["default"]=b}})});