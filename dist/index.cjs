'use strict';

var fluent = require('fluent');

function u(r,e){if(r.errors=r.errors||[],r.valid=r.errors.length===0,typeof r.value!="string")return r.valid=!1,r.errors.includes("invalid string")||r.errors.push("invalid string"),r;let n=e();return n.valid||(r.valid=!1,r.errors.push(n.error)),r}var y={coerce(r,e=""){try{r.value=r.value.toString();}catch{}return u(r,()=>({valid:!0,error:null}))},default(r,e){return (r.value===void 0||r.value===null)&&(r.value=e),u(r,()=>({valid:!0,error:null}))},required(r,e=""){return u(r,()=>{let t=r.value,n=!!(t&&t.length>0);return {valid:n,error:n?null:e||"string is required"}})},enum(r,e,t=""){return u(r,()=>{let n=r.value,l=e.includes(n);return {valid:l,error:l?null:t||"invalid value"}})},min(r,e,t=""){return u(r,()=>{let n=r.value,l=!!(n&&n.length>=e);return {valid:l,error:l?null:t||`too short - min length ${e}`}})},max(r,e,t=""){return u(r,()=>{let n=r.value,l=!!(n&&n.length<=e);return {valid:l,error:l?null:t||`too long - max length ${e}`}})},length(r,e,t=""){return u(r,()=>{let n=r.value,l=!!(n&&n.length===e);return {valid:l,error:l?null:t||`invalid length - length ${e}`}})},match(r,e,t=""){return u(r,()=>{let n=r.value,l=new RegExp(e).test(n);return {valid:l,error:l?null:t||"invalid pattern"}})}};function i(r,e){if(r.errors=r.errors||[],r.valid=r.errors.length===0,typeof r.value!="number")return r.valid=!1,r.errors.includes("invalid number")||r.errors.push("invalid number"),r;let n=e();return n.valid||(r.valid=!1,r.errors.push(n.error)),r}var f={coerce(r,e=""){try{r.value=Number(r.value);}catch{}return i(r,()=>({valid:!0,error:null}))},default(r,e){return (r.value===void 0||r.value===null)&&(r.value=e),i(r,()=>({valid:!0,error:null}))},required(r,e=""){return i(r,()=>{let t=r.value,n=t!=null;return {valid:n,error:n?null:e||"number is required"}})},enum(r,e,t=""){return i(r,()=>{let n=r.value,l=e.includes(n);return {valid:l,error:l?null:t||"invalid value"}})},min(r,e,t=""){return i(r,()=>{let l=r.value>=e;return {valid:l,error:l?null:t||`too small - min value ${e}`}})},max(r,e,t=""){return i(r,()=>{let l=r.value<=e;return {valid:l,error:l?null:t||`too large - max value ${e}`}})},integer(r,e=""){return i(r,()=>{let t=r.value,n=Number.isInteger(t);return {valid:n,error:n?null:e||"invalid integer"}})}};function o(r,e){r.errors=r.errors||[],r.valid=r.errors.length===0;let t=r.value;if(!Array.isArray(t))return r.valid=!1,r.errors.includes("invalid array")||r.errors.push("invalid array"),r;let n=e();return n.valid||(r.valid=!1,r.errors.push(n.error)),r}var h={coerce(r,e=""){try{r.value=JSON.parse(r.value);}catch{}return o(r,()=>({valid:!0,error:null}))},default(r,e){return (r.value===void 0||r.value===null)&&(r.value=e),o(r,()=>({valid:!0,error:null}))},required(r,e=""){return o(r,()=>{let t=r.value,n=t&&t.length>0;return {valid:n,error:n?null:e||"array is required"}})},min(r,e,t=""){return o(r,()=>{let n=r.value,l=n&&n.length>=e;return {valid:l,error:l?null:t||`too short - min length ${e}`}})},max(r,e,t=""){return o(r,()=>{let n=r.value,l=n&&n.length<=e;return {valid:l,error:l?null:t||`too long - max length ${e}`}})},items(r,e,t=""){return o(r,()=>{let n=r.value,l=n&&n.every(v=>v===e);return {valid:l,error:l?null:t||`invalid items - expected ${e}`}})}};function a(r,e){r.errors=r.errors||[],r.valid=r.errors.length===0;let t=r.value;if(typeof t!="object"||t===null)return r.valid=!1,r.errors.includes("invalid object")||r.errors.push("invalid object"),r;let n=e();return n.valid||(r.valid=!1,r.errors.push(n.error)),r}var m={coerce(r,e=""){try{r.value=JSON.parse(r.value);}catch{}return a(r,()=>({valid:!0,error:null}))},default(r,e){return (r.value===void 0||r.value===null)&&(r.value=e),a(r,()=>({valid:!0,error:null}))},required(r,e=""){return a(r,()=>{let t=r.value,n=t&&Object.keys(t).length>0;return {valid:n,error:n?null:e||"object is required"}})},props(r,e,t=""){return a(r,()=>{let n=r.value,l=Object.keys(e),v=!0,c=[];for(let s of l){let g=e[s].run({value:n[s]});g.valid||(v=!1,r.errors.push(...g.errors.map(p=>`${s}: ${p}`)),c.push(s));}return v?{valid:!0,error:null}:{valid:!1,error:t||c.length?`invalid props - ${c.join(", ")}`:""}})}};var b={string:y,number:f,array:h,object:m},S=fluent.fluent({api:b});

exports.api = b;
exports.validate = S;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map