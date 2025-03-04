let e,t,n,r,a,i,s;var o,l,c,d,u,h=globalThis;const f=()=>void 0;var p={},g=p={};function m(){throw Error("setTimeout has not been defined")}function b(){throw Error("clearTimeout has not been defined")}function w(e){if(l===setTimeout)return setTimeout(e,0);if((l===m||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:m}catch(e){l=m}try{c="function"==typeof clearTimeout?clearTimeout:b}catch(e){c=b}}();var y=[],v=!1,I=-1;function E(){v&&d&&(v=!1,d.length?y=d.concat(y):I=-1,y.length&&S())}function S(){if(!v){var e=w(E);v=!0;for(var t=y.length;t;){for(d=y,y=[];++I<t;)d&&d[I].run();I=-1,t=y.length}d=null,v=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===b||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function C(e,t){this.fun=e,this.array=t}function _(){}g.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new C(e,t)),1!==y.length||v||w(S)},C.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={},g.on=_,g.addListener=_,g.once=_,g.off=_,g.removeListener=_,g.removeAllListeners=_,g.emit=_,g.prependListener=_,g.prependOnceListener=_,g.listeners=function(e){return[]},g.binding=function(e){throw Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(e){throw Error("process.chdir is not supported")},g.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:(a<2048?t[n++]=a>>6|192:((64512&a)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128):t[n++]=a>>12|224,t[n++]=a>>6&63|128),t[n++]=63&a|128)}return t},T=function(e){let t=[],n=0,r=0;for(;n<e.length;){let a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=e[n++],s=((7&a)<<18|(63&i)<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")},A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=a>>2,d=(3&a)<<4|s>>4,u=(15&s)<<2|l>>6,h=63&l;o||(h=64,i||(u=64)),r.push(n[c],n[d],n[u],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(D(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):T(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0,s=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==s||null==o)throw new O;let l=a<<2|i>>4;if(r.push(l),64!==s){let e=i<<4&240|s>>2;if(r.push(e),64!==o){let e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class O extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k=function(e){let t=D(e);return A.encodeByteArray(t,!0)},L=function(e){return k(e).replace(/\./g,"")},B=function(e){try{return A.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},M=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==h)return h;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,$=()=>{if(void 0===p||void 0===p.env)return;let e=void 0;if(e)return JSON.parse(e)},P=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&B(e[1]);return t&&JSON.parse(t)},N=()=>{try{return f()||M()||$()||P()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},j=()=>{var e;return null===(e=N())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function x(){try{return"object"==typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class H extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let a=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?(n=s,r=a,n.replace(V,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new H(i,l,a)}}const V=/\{\$([^}]+)}/g;function U(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let a of n){if(!r.includes(a))return!1;let n=e[a],i=t[a];if(W(n)&&W(i)){if(!U(n,i))return!1}else if(n!==i)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function W(e){return null!==e&&"object"==typeof e}function q(e,t=1e3,n=2){let r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){return e&&e._delegate?e._delegate:e}class G{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new F;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:J})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=J){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=J){return this.instances.has(e)}getOptions(e=J){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);let i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===J?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=J){return this.component?this.component.multipleInstances?e:J:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new X(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=[];(o=u||(u={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const Q={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},ee=u.INFO,et={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},en=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),a=et[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class er{constructor(e){this.name=e,this._logLevel=ee,this._logHandler=en,this._userLogHandler=null,Z.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Q[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const ea=(e,t)=>t.some(t=>e instanceof t),ei=new WeakMap,es=new WeakMap,eo=new WeakMap,el=new WeakMap,ec=new WeakMap;let ed={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return es.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eu(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eu(n){if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(eu(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&ei.set(t,e)}).catch(()=>{}),ec.set(t,e),t}(n);if(el.has(n))return el.get(n);let r=function(n){if("function"==typeof n)return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eh(this),e),eu(ei.get(this))}:function(...e){return eu(n.apply(eh(this),e))}:function(e,...t){let r=n.call(eh(this),e,...t);return eo.set(r,e.sort?e.sort():[e]),eu(r)};return(n instanceof IDBTransaction&&function(e){if(es.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});es.set(e,t)}(n),ea(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,ed):n}(n);return r!==n&&(el.set(n,r),ec.set(r,n)),r}const eh=e=>ec.get(e);function ef(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let s=indexedDB.open(e,t),o=eu(s);return r&&s.addEventListener("upgradeneeded",e=>{r(eu(s.result),e.oldVersion,e.newVersion,eu(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const ep=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],em=new Map;function eb(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(em.get(t))return em.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=eg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||ep.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return em.set(t,i),i}ed={...s=ed,get:(e,t,n)=>eb(e,t)||s.get(e,t,n),has:(e,t)=>!!eb(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ey="@firebase/app",ev="0.11.2",eI=new er("@firebase/app"),eE="[DEFAULT]",eS={[ey]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eC=new Map,e_=new Map,eD=new Map;function eT(e,t){try{e.container.addComponent(t)}catch(n){eI.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eA(e){let t=e.name;if(eD.has(t))return eI.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eD.set(t,e),eC.values()))eT(n,e);for(let t of e_.values())eT(t,e);return!0}function eO(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const ek=new z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new G("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ek.create("app-deleted",{appName:this._name})}}function eB(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:eE,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw ek.create("bad-app-name",{appName:String(a)});if(n||(n=j()),!n)throw ek.create("no-options");let i=eC.get(a);if(i){if(U(n,i.options)&&U(r,i.config))return i;throw ek.create("duplicate-app",{appName:a})}let s=new Y(a);for(let e of eD.values())s.addComponent(e);let o=new eL(n,r,s);return eC.set(a,o),o}function eM(e,t,n){var r;let a=null!==(r=eS[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);let i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${a}" with version "${t}":`];i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eI.warn(e.join(" "));return}eA(new G(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}const e$="firebase-heartbeat-store";let eP=null;function eN(){return eP||(eP=ef("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e$)}catch(e){console.warn(e)}}}).catch(e=>{throw ek.create("idb-open",{originalErrorMessage:e.message})})),eP}async function ej(e){try{let t=(await eN()).transaction(e$),n=await t.objectStore(e$).get(ex(e));return await t.done,n}catch(e){if(e instanceof H)eI.warn(e.message);else{let t=ek.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}async function eF(e,t){try{let n=(await eN()).transaction(e$,"readwrite"),r=n.objectStore(e$);await r.put(t,ex(e)),await n.done}catch(e){if(e instanceof H)eI.warn(e.message);else{let t=ek.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}function ex(e){return`${e.name}!${e.options.appId}`}class eR{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ez(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eH();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){eI.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=eH(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let a of e){let e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),eV(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),eV(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=L(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return eI.warn(e),""}}}function eH(){return new Date().toISOString().substring(0,10)}class ez{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!x()&&R().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await ej(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eV(e){return L(JSON.stringify({version:2,heartbeats:e})).length}eA(new G("platform-logger",e=>new ew(e),"PRIVATE")),eA(new G("heartbeat",e=>new eR(e),"PRIVATE")),eM(ey,ev,""),eM(ey,ev,"esm2017"),eM("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eM("firebase","11.4.0","app");const eU="@firebase/installations",eW="0.6.13",eq=`w:${eW}`,eK="FIS_v2",eG=new z("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eJ(e){return e instanceof H&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eX({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function eY(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function eZ(e,t){let n=(await t.json()).error;return eG.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function eQ({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function e0(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=eX(e),a=eQ(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={method:"POST",headers:a,body:JSON.stringify({fid:n,authVersion:eK,appId:e.appId,sdkVersion:eq})},o=await e0(()=>fetch(r,s));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:eY(e.authToken)}}throw await eZ("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=new Map;function e5(e,t){let n=e3(e);e8(n,t),function(e,t){let n=(!e7&&"BroadcastChannel"in self&&((e7=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{e8(e.data.key,e.data.fid)}),e7);n&&n.postMessage({key:e,fid:t}),0===e4.size&&e7&&(e7.close(),e7=null)}(n,t)}function e8(e,t){let n=e4.get(e);if(n)for(let e of n)e(t)}let e7=null;const e9="firebase-installations-store";let te=null;function tt(){return te||(te=ef("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(e9)}})),te}async function tn(e,t){let n=e3(e),r=(await tt()).transaction(e9,"readwrite"),a=r.objectStore(e9),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||e5(e,t.fid),t}async function tr(e){let t=e3(e),n=(await tt()).transaction(e9,"readwrite");await n.objectStore(e9).delete(t),await n.done}async function ta(e,t){let n=e3(e),r=(await tt()).transaction(e9,"readwrite"),a=r.objectStore(e9),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await r.done,s&&(!i||i.fid!==s.fid)&&e5(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e){let t;let n=await ta(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(eG.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ts(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:to(e)}:{installationEntry:t}}(e,tc(n||{fid:function(){try{var e;let t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;let n=(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22));return e6.test(n)?n:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ts(e,t){try{let n=await e1(e,t);return tn(e.appConfig,n)}catch(n){throw eJ(n)&&409===n.customData.serverCode?await tr(e.appConfig):await tn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function to(e){let t=await tl(e.appConfig);for(;1===t.registrationStatus;)await e2(100),t=await tl(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await ti(e);return n||t}return t}function tl(e){return ta(e,e=>{if(!e)throw eG.create("installation-not-found");return tc(e)})}function tc(e){var t;return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${eX(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){var n;let r=eQ(e);return r.append("Authorization",(n=t,`${eK} ${n}`)),r}(e,n),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={method:"POST",headers:a,body:JSON.stringify({installation:{sdkVersion:eq,appId:e.appId}})},o=await e0(()=>fetch(r,s));if(o.ok)return eY(await o.json());throw await eZ("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e,t=!1){let n;let r=await ta(e.appConfig,r=>{var a;if(!tg(r))throw eG.create("not-registered");let i=r.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return r;if(1===i.requestStatus)return n=th(e,t),r;{if(!navigator.onLine)throw eG.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=tp(e,t),t}});return n?await n:r.authToken}async function th(e,t){let n=await tf(e.appConfig);for(;1===n.authToken.requestStatus;)await e2(100),n=await tf(e.appConfig);let r=n.authToken;return 0===r.requestStatus?tu(e,t):r}function tf(e){return ta(e,e=>{var t;if(!tg(e))throw eG.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tp(e,t){try{let n=await td(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tn(e.appConfig,r),n}catch(n){if(eJ(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tr(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tn(e.appConfig,n)}throw n}}function tg(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(e){let{installationEntry:t,registrationPromise:n}=await ti(e);return n?n.catch(console.error):tu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(e,t=!1){return await tw(e),(await tu(e,t)).token}async function tw(e){let{registrationPromise:t}=await ti(e);t&&await t}function ty(e){return eG.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="installations";eA(new G(tv,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw ty("App Configuration");if(!e.name)throw ty("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw ty(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eO(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),eA(new G("installations-internal",e=>{let t=eO(e.getProvider("app").getImmediate(),tv).getImmediate();return{getId:()=>tm(t),getToken:e=>tb(t,e)}},"PRIVATE")),eM(eU,eW),eM(eU,eW,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="analytics",tE="https://www.googletagmanager.com/gtag/js",tS=new er("@firebase/analytics"),tC=new z("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(e){if(!e.startsWith(tE)){let t=tC.create("invalid-gtag-resource",{gtagURL:e});return tS.warn(t.message),""}return e}function tD(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function tT(e,t,n,r,a,i){let s=r[a];try{if(s)await t[s];else{let e=(await tD(n)).find(e=>e.measurementId===a);e&&await t[e.appId]}}catch(e){tS.error(e)}e("config",a,i)}async function tA(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);let r=await tD(n);for(let n of e){let e=r.find(e=>e.measurementId===n),a=e&&t[e.appId];if(a)i.push(a);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(e){tS.error(e)}}const tO=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function tk(e){var t;let{appId:n,apiKey:r}=e,a={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,a);if(200!==s.status&&304!==s.status){let e="";try{let n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw tC.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function tL(e,t=tO,n){let{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw tC.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw tC.create("no-api-key")}let s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tM;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),tB({appId:r,apiKey:a,measurementId:i},s,o,t)}async function tB(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=tO){var i,s,o;let{appId:l,measurementId:c}=e;try{await (s=r,o=t,new Promise((e,t)=>{let n=setTimeout(e,Math.max(o-Date.now(),0));s.addEventListener(()=>{clearTimeout(n),t(tC.create("fetch-throttle",{throttleEndTimeMillis:o}))})}))}catch(e){if(c)return tS.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:l,measurementId:c};throw e}try{let t=await tk(e);return a.deleteThrottleMetadata(l),t}catch(o){if(!function(e){if(!(e instanceof H)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(a.deleteThrottleMetadata(l),c)return tS.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==o?void 0:o.message}]`),{appId:l,measurementId:c};throw o}let t=503===Number(null===(i=null==o?void 0:o.customData)||void 0===i?void 0:i.httpStatus)?q(n,a.intervalMillis,30):q(n,a.intervalMillis),s={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return a.setThrottleMetadata(l,s),tS.debug(`Calling attemptFetch again in ${t} millis`),tB(e,s,r,a)}}class tM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function t$(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}{let a=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(){if(!x())return tS.warn(tC.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await R()}catch(e){return tS.warn(tC.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function tN(e,t,a,i,s,o,l){var c;let d=tL(e);d.then(t=>{a[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tS.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tS.error(e)),t.push(d);let u=tP().then(e=>e?i.getId():void 0),[h,f]=await Promise.all([d,u]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(tE)&&t.src.includes(e))return t;return null}(o)&&function(e,t){let n;let r=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:t_})),n),a=document.createElement("script"),i=`${tE}?l=${e}&id=${t}`;a.src=r?null==r?void 0:r.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}(o,h.measurementId),r&&(s("consent","default",r),r=void 0),s("js",new Date);let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",h.measurementId,p),n&&(s("set",n),n=void 0),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e){this.app=e}_delete(){return delete tF[this.app.options.appId],Promise.resolve()}}let tF={},tx=[];const tR={};let tH="dataLayer",tz=!1;const tV="@firebase/analytics",tU="0.10.12";eA(new G(tI,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=tC.create("invalid-analytics-context",{errorInfo:t});tS.warn(n.message)}}();let r=e.options.appId;if(!r)throw tC.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tS.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tC.create("no-api-key")}if(null!=tF[r])throw tC.create("already-exists",{id:r});if(!tz){var s,o;let e,t;e=[],Array.isArray(window[tH])?e=window[tH]:window[tH]=e;let{wrappedGtag:n,gtagCore:r}=(s="gtag",t=function(...e){window[tH].push(arguments)},window[s]&&"function"==typeof window[s]&&(t=window[s]),window[s]=(o=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await tA(o,tF,tx,e,n)}else if("config"===e){let[e,n]=t;await tT(o,tF,tx,tR,e,n)}else if("consent"===e){let[e,n]=t;o("consent",e,n)}else if("get"===e){let[e,n,r]=t;o("get",e,n,r)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){tS.error(e)}}),{gtagCore:t,wrappedGtag:window[s]});i=n,a=r,tz=!0}return tF[r]=tN(e,tx,tR,t,a,tH,n),new tj(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),eA(new G("analytics-internal",function(e){try{let t=e.getProvider(tI).getImmediate();return{logEvent:(e,n,r)=>{var a;return a=t,void(a=K(a),t$(i,tF[a.app.options.appId],e,n,r).catch(e=>tS.error(e)))}}}catch(e){throw tC.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),eM(tV,tU),eM(tV,tU,"esm2017"),!function(e=function(e=eE){let t=eC.get(e);if(!t&&e===eE&&j())return eB();if(!t)throw ek.create("no-app",{appName:e});return t}()){let t=eO(e=K(e),tI);t.isInitialized()?t.getImmediate():function(e,t={}){let n=eO(e,tI);if(n.isInitialized()){let e=n.getImmediate();if(U(t,n.getOptions()))return e;throw tC.create("already-initialized")}return n.initialize({options:t})}(e)}(eB({apiKey:"AIzaSyAXIYCqDH1bTZ_mqhUMb7XTht5Uuqn6zQ8",authDomain:"test-10716.firebaseapp.com",projectId:"test-10716",storageBucket:"test-10716.firebasestorage.app",messagingSenderId:"628302111178",appId:"1:628302111178:web:51974bc78fcfd88e136f33",measurementId:"G-CE57LFBWRE"}));const tW=document.getElementById("taskInput"),tq=document.getElementById("addTaskBtn"),tK=document.getElementById("taskList");async function tG(e){await addDoc(collection(db,"test"),{text:e,completed:!1})}async function tJ(){var e=await tX();tK.innerHTML="",e.forEach((e,t)=>{if(!e.data().completed){let t=document.createElement("li");t.id=e.id,t.textContent=e.data().text,tK.appendChild(t)}})}async function tX(){var e=await getDocs(collection(db,"test"));let t=[];return e.forEach(e=>{t.push(e)}),t}tq.addEventListener("click",async()=>{if(tW.value.trim()){let e=document.getElementById("taskInput"),t=function(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}(e.value.trim());t&&(await tG(t),tJ(),e.value=""),tJ()}}),tK.addEventListener("click",e=>{"LI"===e.target.tagName&&e.target.remove()}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)});
//# sourceMappingURL=index.43db946c.js.map
