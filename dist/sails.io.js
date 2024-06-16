/* eslint-disable */

/**
 * To use sails.io.js in an AMD environment (e.g. with require.js),
 * replace this file with the sails.io.js file from the root of:
 * https://github.com/balderdashy/sails.io.js
 * and download a standalone copy of socket.io-client from:
 * https://github.com/socketio/socket.io-client
 * then follow the instructions at:
 * https://github.com/balderdashy/sails.io.js#requirejsamd-usage
 */

// socket.io-client version 4.7.5
// https://github.com/socketio/socket.io-client

!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a="undefined"!=typeof globalThis?globalThis:a||self,a.io=b())}(this,function(){"use strict";function a(b){"@babel/helpers - typeof";return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(b)}function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,v(d.key),d)}}function d(a,b,d){return b&&c(a.prototype,b),d&&c(a,d),Object.defineProperty(a,"prototype",{writable:!1}),a}function e(){return e=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},e.apply(this,arguments)}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&h(a,b)}function g(a){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function h(a,b){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a})(a,b)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function j(a,b,c){return j=i()?Reflect.construct.bind():function(a,b,c){var d=[null];d.push.apply(d,b);var e=Function.bind.apply(a,d),f=new e;return c&&h(f,c.prototype),f},j.apply(null,arguments)}function k(a){return Function.toString.call(a).indexOf("[native code]")!==-1}function l(a){var b="function"==typeof Map?new Map:void 0;return(l=function(a){function c(){return j(a,arguments,g(this).constructor)}if(null===a||!k(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),h(c,a)})(a)}function m(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n(a,b){if(b&&("object"==typeof b||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return m(a)}function o(a){var b=i();return function(){var c,d=g(a);if(b){var e=g(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return n(this,c)}}function p(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=g(a),null!==a););return a}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(a,b,c){var d=p(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(arguments.length<3?a:c):e.value}},q.apply(this,arguments)}function r(a,b){if(a){if("string"==typeof a)return s(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?s(a,b):void 0}}function s(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function t(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=r(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function u(a,b){if("object"!=typeof a||null===a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function v(a){var b=u(a,"string");return"symbol"==typeof b?b:String(b)}function w(a){return a instanceof Uint8Array?a:a instanceof ArrayBuffer?new Uint8Array(a):new Uint8Array(a.buffer,a.byteOffset,a.byteLength)}function x(a,b){return ga&&a.data instanceof Blob?a.data.arrayBuffer().then(w).then(b):ha&&(a.data instanceof ArrayBuffer||ia(a.data))?b(w(a.data)):void ja(a,!1,function(a){ea||(ea=new TextEncoder),b(ea.encode(a))})}function y(){return new TransformStream({transform:function(a,b){x(a,function(c){var d,e=c.length;if(e<126)d=new Uint8Array(1),new DataView(d.buffer).setUint8(0,e);else if(e<65536){d=new Uint8Array(3);var f=new DataView(d.buffer);f.setUint8(0,126),f.setUint16(1,e)}else{d=new Uint8Array(9);var g=new DataView(d.buffer);g.setUint8(0,127),g.setBigUint64(1,BigInt(e))}a.data&&"string"!=typeof a.data&&(d[0]|=128),b.enqueue(d),b.enqueue(c)})}})}function z(a){return a.reduce(function(a,b){return a+b.length},0)}function A(a,b){if(a[0].length===b)return a.shift();for(var c=new Uint8Array(b),d=0,e=0;e<b;e++)c[e]=a[0][d++],d===a[0].length&&(a.shift(),d=0);return a.length&&d<a[0].length&&(a[0]=a[0].slice(d)),c}function B(a,b){oa||(oa=new TextDecoder);var c=[],d=0,e=-1,f=!1;return new TransformStream({transform:function(g,h){for(c.push(g);;){if(0===d){if(z(c)<1)break;var i=A(c,1);f=128===(128&i[0]),e=127&i[0],d=e<126?3:126===e?1:2}else if(1===d){if(z(c)<2)break;var j=A(c,2);e=new DataView(j.buffer,j.byteOffset,j.length).getUint16(0),d=3}else if(2===d){if(z(c)<8)break;var k=A(c,8),l=new DataView(k.buffer,k.byteOffset,k.length),m=l.getUint32(0);if(m>Math.pow(2,21)-1){h.enqueue(fa);break}e=m*Math.pow(2,32)+l.getUint32(4),d=3}else{if(z(c)<e)break;var n=A(c,e);h.enqueue(ra(f?n:oa.decode(n),b)),d=0}if(0===e||e>a){h.enqueue(fa);break}}}})}function C(a){if(a)return D(a)}function D(a){for(var b in C.prototype)a[b]=C.prototype[b];return a}function E(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.reduce(function(b,c){return a.hasOwnProperty(c)&&(b[c]=a[c]),b},{})}function F(a,b){b.useNativeTimers?(a.setTimeoutFn=Aa.bind(za),a.clearTimeoutFn=Ba.bind(za)):(a.setTimeoutFn=za.setTimeout.bind(za),a.clearTimeoutFn=za.clearTimeout.bind(za))}function G(a){return"string"==typeof a?H(a):Math.ceil((a.byteLength||a.size)*Ca)}function H(a){for(var b=0,c=0,d=0,e=a.length;d<e;d++)b=a.charCodeAt(d),b<128?c+=1:b<2048?c+=2:b<55296||b>=57344?c+=3:(d++,c+=4);return c}function I(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b.length&&(b+="&"),b+=encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b}function J(a){for(var b={},c=a.split("&"),d=0,e=c.length;d<e;d++){var f=c[d].split("=");b[decodeURIComponent(f[0])]=decodeURIComponent(f[1])}return b}function K(a){var b="";do b=Fa[a%Ga]+b,a=Math.floor(a/Ga);while(a>0);return b}function L(){var a=K(+new Date);return a!==ya?(Ia=0,ya=a):a+"."+K(Ia++)}function M(a){var b=a.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!b||Ma))return new XMLHttpRequest}catch(c){}if(!b)try{return new(za[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(c){}}function N(){}function O(){}function P(){for(var a in Pa.requests)Pa.requests.hasOwnProperty(a)&&Pa.requests[a].abort()}function Q(a){var b=a,c=a.indexOf("["),d=a.indexOf("]");c!=-1&&d!=-1&&(a=a.substring(0,c)+a.substring(c,d).replace(/:/g,";")+a.substring(d,a.length));for(var e=Za.exec(a||""),f={},g=14;g--;)f[$a[g]]=e[g]||"";return c!=-1&&d!=-1&&(f.source=b,f.host=f.host.substring(1,f.host.length-1).replace(/;/g,":"),f.authority=f.authority.replace("[","").replace("]","").replace(/;/g,":"),f.ipv6uri=!0),f.pathNames=R(f,f.path),f.queryKey=S(f,f.query),f}function R(a,b){var c=/\/{2,9}/g,d=b.replace(c,"/").split("/");return"/"!=b.slice(0,1)&&0!==b.length||d.splice(0,1),"/"==b.slice(-1)&&d.splice(d.length-1,1),d}function S(a,b){var c={};return b.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,d){b&&(c[b]=d)}),c}function T(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2?arguments[2]:void 0,d=a;c=c||"undefined"!=typeof location&&location,null==a&&(a=c.protocol+"//"+c.host),"string"==typeof a&&("/"===a.charAt(0)&&(a="/"===a.charAt(1)?c.protocol+a:c.host+a),/^(https?|wss?):\/\//.test(a)||(a="undefined"!=typeof c?c.protocol+"//"+a:"https://"+a),d=Q(a)),d.port||(/^(http|ws)$/.test(d.protocol)?d.port="80":/^(http|ws)s$/.test(d.protocol)&&(d.port="443")),d.path=d.path||"/";var e=d.host.indexOf(":")!==-1,f=e?"["+d.host+"]":d.host;return d.id=d.protocol+"://"+f+":"+d.port+b,d.href=d.protocol+"://"+f+(c&&c.port===d.port?"":":"+d.port),d}function U(a){return bb&&(a instanceof ArrayBuffer||cb(a))||eb&&a instanceof Blob||fb&&a instanceof File}function V(b,c){if(!b||"object"!==a(b))return!1;if(Array.isArray(b)){for(var d=0,e=b.length;d<e;d++)if(V(b[d]))return!0;return!1}if(U(b))return!0;if(b.toJSON&&"function"==typeof b.toJSON&&1===arguments.length)return V(b.toJSON(),!0);for(var f in b)if(Object.prototype.hasOwnProperty.call(b,f)&&V(b[f]))return!0;return!1}function W(a){var b=[],c=a.data,d=a;return d.data=X(c,b),d.attachments=b.length,{packet:d,buffers:b}}function X(b,c){if(!b)return b;if(U(b)){var d={_placeholder:!0,num:c.length};return c.push(b),d}if(Array.isArray(b)){for(var e=new Array(b.length),f=0;f<b.length;f++)e[f]=X(b[f],c);return e}if("object"===a(b)&&!(b instanceof Date)){var g={};for(var h in b)Object.prototype.hasOwnProperty.call(b,h)&&(g[h]=X(b[h],c));return g}return b}function Y(a,b){return a.data=Z(a.data,b),delete a.attachments,a}function Z(b,c){if(!b)return b;if(b&&b._placeholder===!0){var d="number"==typeof b.num&&b.num>=0&&b.num<c.length;if(d)return c[b.num];throw new Error("illegal attachments")}if(Array.isArray(b))for(var e=0;e<b.length;e++)b[e]=Z(b[e],c);else if("object"===a(b))for(var f in b)Object.prototype.hasOwnProperty.call(b,f)&&(b[f]=Z(b[f],c));return b}function $(a){return"[object Object]"===Object.prototype.toString.call(a)}function _(a,b,c){return a.on(b,c),function(){a.off(b,c)}}function aa(a){a=a||{},this.ms=a.min||100,this.max=a.max||1e4,this.factor=a.factor||2,this.jitter=a.jitter>0&&a.jitter<=1?a.jitter:0,this.attempts=0}function ba(b,c){"object"===a(b)&&(c=b,b=void 0),c=c||{};var d,e=T(b,c.path||"/socket.io"),f=e.source,g=e.id,h=e.path,i=pb[g]&&h in pb[g].nsps,j=c.forceNew||c["force new connection"]||!1===c.multiplex||i;return j?d=new ob(f,c):(pb[g]||(pb[g]=new ob(f,c)),d=pb[g]),e.query&&!c.query&&(c.query=e.queryKey),d.socket(e.path,c)}var ca=Object.create(null);ca.open="0",ca.close="1",ca.ping="2",ca.pong="3",ca.message="4",ca.upgrade="5",ca.noop="6";var da=Object.create(null);Object.keys(ca).forEach(function(a){da[ca[a]]=a});for(var ea,fa={type:"error",data:"parser error"},ga="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),ha="function"==typeof ArrayBuffer,ia=function(a){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer instanceof ArrayBuffer},ja=function(a,b,c){var d=a.type,e=a.data;return ga&&e instanceof Blob?b?c(e):ka(e,c):ha&&(e instanceof ArrayBuffer||ia(e))?b?c(e):ka(new Blob([e]),c):c(ca[d]+(e||""))},ka=function(a,b){var c=new FileReader;return c.onload=function(){var a=c.result.split(",")[1];b("b"+(a||""))},c.readAsDataURL(a)},la="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ma="undefined"==typeof Uint8Array?[]:new Uint8Array(256),na=0;na<la.length;na++)ma[la.charCodeAt(na)]=na;var oa,pa=function(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=ma[a.charCodeAt(b)],d=ma[a.charCodeAt(b+1)],e=ma[a.charCodeAt(b+2)],f=ma[a.charCodeAt(b+3)],k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j},qa="function"==typeof ArrayBuffer,ra=function(a,b){if("string"!=typeof a)return{type:"message",data:ta(a,b)};var c=a.charAt(0);if("b"===c)return{type:"message",data:sa(a.substring(1),b)};var d=da[c];return d?a.length>1?{type:da[c],data:a.substring(1)}:{type:da[c]}:fa},sa=function(a,b){if(qa){var c=pa(a);return ta(c,b)}return{base64:!0,data:a}},ta=function(a,b){switch(b){case"blob":return a instanceof Blob?a:new Blob([a]);case"arraybuffer":default:return a instanceof ArrayBuffer?a:a.buffer}},ua=String.fromCharCode(30),va=function(a,b){var c=a.length,d=new Array(c),e=0;a.forEach(function(a,f){ja(a,!1,function(a){d[f]=a,++e===c&&b(d.join(ua))})})},wa=function(a,b){for(var c=a.split(ua),d=[],e=0;e<c.length;e++){var f=ra(c[e],b);if(d.push(f),"error"===f.type)break}return d},xa=4;C.prototype.on=C.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(b),this},C.prototype.once=function(a,b){function c(){this.off(a,c),b.apply(this,arguments)}return c.fn=b,this.on(a,c),this},C.prototype.off=C.prototype.removeListener=C.prototype.removeAllListeners=C.prototype.removeEventListener=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks["$"+a];if(!c)return this;if(1==arguments.length)return delete this._callbacks["$"+a],this;for(var d,e=0;e<c.length;e++)if(d=c[e],d===b||d.fn===b){c.splice(e,1);break}return 0===c.length&&delete this._callbacks["$"+a],this},C.prototype.emit=function(a){this._callbacks=this._callbacks||{};for(var b=new Array(arguments.length-1),c=this._callbacks["$"+a],d=1;d<arguments.length;d++)b[d-1]=arguments[d];if(c){c=c.slice(0);for(var d=0,e=c.length;d<e;++d)c[d].apply(this,b)}return this},C.prototype.emitReserved=C.prototype.emit,C.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},C.prototype.hasListeners=function(a){return!!this.listeners(a).length};for(var ya,za=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")()}(),Aa=za.setTimeout,Ba=za.clearTimeout,Ca=1.33,Da=function(a){function c(a,d,f){var g;return b(this,c),g=e.call(this,a),g.description=d,g.context=f,g.type="TransportError",g}f(c,a);var e=o(c);return d(c)}(l(Error)),Ea=function(a){function c(a){var d;return b(this,c),d=e.call(this),d.writable=!1,F(m(d),a),d.opts=a,d.query=a.query,d.socket=a.socket,d}f(c,a);var e=o(c);return d(c,[{key:"onError",value:function(a,b,d){return q(g(c.prototype),"emitReserved",this).call(this,"error",new Da(a,b,d)),this}},{key:"open",value:function(){return this.readyState="opening",this.doOpen(),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(a){"open"===this.readyState&&this.write(a)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,q(g(c.prototype),"emitReserved",this).call(this,"open")}},{key:"onData",value:function(a){var b=ra(a,this.socket.binaryType);this.onPacket(b)}},{key:"onPacket",value:function(a){q(g(c.prototype),"emitReserved",this).call(this,"packet",a)}},{key:"onClose",value:function(a){this.readyState="closed",q(g(c.prototype),"emitReserved",this).call(this,"close",a)}},{key:"pause",value:function(a){}},{key:"createUri",value:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a+"://"+this._hostname()+this._port()+this.opts.path+this._query(b)}},{key:"_hostname",value:function(){var a=this.opts.hostname;return a.indexOf(":")===-1?a:"["+a+"]"}},{key:"_port",value:function(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}},{key:"_query",value:function(a){var b=I(a);return b.length?"?"+b:""}}]),c}(C),Fa="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Ga=64,Ha={},Ia=0,Ja=0;Ja<Ga;Ja++)Ha[Fa[Ja]]=Ja;var Ka=!1;try{Ka="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(La){}var Ma=Ka,Na=function(){var a=new M({xdomain:!1});return null!=a.responseType}(),Oa=function(a){function c(a){var d;if(b(this,c),d=g.call(this,a),d.polling=!1,"undefined"!=typeof location){var e="https:"===location.protocol,f=location.port;f||(f=e?"443":"80"),d.xd="undefined"!=typeof location&&a.hostname!==location.hostname||f!==a.port}var h=a&&a.forceBase64;return d.supportsBinary=Na&&!h,d.opts.withCredentials&&(d.cookieJar=N()),d}f(c,a);var g=o(c);return d(c,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function h(a){var b=this;this.readyState="pausing";var h=function(){b.readyState="paused",a()};if(this.polling||!this.writable){var c=0;this.polling&&(c++,this.once("pollComplete",function(){--c||h()})),this.writable||(c++,this.once("drain",function(){--c||h()}))}else h()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}},{key:"onData",value:function(a){var b=this,c=function(a){return"opening"===b.readyState&&"open"===a.type&&b.onOpen(),"close"===a.type?(b.onClose({description:"transport closed by the server"}),!1):void b.onPacket(a)};wa(a,this.socket.binaryType).forEach(c),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var a=this,b=function(){a.write([{type:"close"}])};"open"===this.readyState?b():this.once("open",b)}},{key:"write",value:function(a){var b=this;this.writable=!1,va(a,function(a){b.doWrite(a,function(){b.writable=!0,b.emitReserved("drain")})})}},{key:"uri",value:function(){var a=this.opts.secure?"https":"http",b=this.query||{};return!1!==this.opts.timestampRequests&&(b[this.opts.timestampParam]=L()),this.supportsBinary||b.sid||(b.b64=1),this.createUri(a,b)}},{key:"request",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(a,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Pa(this.uri(),a)}},{key:"doWrite",value:function(a,b){var c=this,d=this.request({method:"POST",data:a});d.on("success",b),d.on("error",function(a,b){c.onError("xhr post error",a,b)})}},{key:"doPoll",value:function(){var a=this,b=this.request();b.on("data",this.onData.bind(this)),b.on("error",function(b,c){a.onError("xhr poll error",b,c)}),this.pollXhr=b}}]),c}(Ea),Pa=function(a){function c(a,d){var f;return b(this,c),f=e.call(this),F(m(f),d),f.opts=d,f.method=d.method||"GET",f.uri=a,f.data=void 0!==d.data?d.data:null,f.create(),f}f(c,a);var e=o(c);return d(c,[{key:"create",value:function(){var a,b=this,d=E(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");d.xdomain=!!this.opts.xd;var e=this.xhr=new M(d);try{e.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var f in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(f)&&e.setRequestHeader(f,this.opts.extraHeaders[f])}}catch(g){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(g){}try{e.setRequestHeader("Accept","*/*")}catch(g){}null===(a=this.opts.cookieJar)||void 0===a?void 0:a.addCookies(e),"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=function(){var a;3===e.readyState&&(null===(a=b.opts.cookieJar)||void 0===a?void 0:a.parseCookies(e)),4===e.readyState&&(200===e.status||1223===e.status?b.onLoad():b.setTimeoutFn(function(){b.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(g){return void this.setTimeoutFn(function(){b.onError(g)},0)}"undefined"!=typeof document&&(this.index=c.requestsCount++,c.requests[this.index]=this)}},{key:"onError",value:function(a){this.emitReserved("error",a,this.xhr),this.cleanup(!0)}},{key:"cleanup",value:function(a){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=O,a)try{this.xhr.abort()}catch(b){}"undefined"!=typeof document&&delete c.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var a=this.xhr.responseText;null!==a&&(this.emitReserved("data",a),this.emitReserved("success"),this.cleanup())}},{key:"abort",value:function(){this.cleanup()}}]),c}(C);if(Pa.requestsCount=0,Pa.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",P);else if("function"==typeof addEventListener){var Qa="onpagehide"in za?"pagehide":"unload";addEventListener(Qa,P,!1)}var Ra=function(){var a="function"==typeof Promise&&"function"==typeof Promise.resolve;return a?function(a){return Promise.resolve().then(a)}:function(a,b){return b(a,0)}}(),Sa=za.WebSocket||za.MozWebSocket,Ta=!0,Ua="arraybuffer",Va="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),Wa=function(a){function c(a){var d;return b(this,c),d=e.call(this,a),d.supportsBinary=!a.forceBase64,d}f(c,a);var e=o(c);return d(c,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var a=this.uri(),b=this.opts.protocols,c=Va?{}:E(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(c.headers=this.opts.extraHeaders);try{this.ws=Ta&&!Va?b?new Sa(a,b):new Sa(a):new Sa(a,b,c)}catch(d){return this.emitReserved("error",d)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}}},{key:"addEventListeners",value:function(){var a=this;this.ws.onopen=function(){a.opts.autoUnref&&a.ws._socket.unref(),a.onOpen()},this.ws.onclose=function(b){return a.onClose({description:"websocket connection closed",context:b})},this.ws.onmessage=function(b){return a.onData(b.data)},this.ws.onerror=function(b){return a.onError("websocket error",b)}}},{key:"write",value:function(a){var b=this;this.writable=!1;for(var c=function(){var c=a[d],e=d===a.length-1;ja(c,b.supportsBinary,function(a){try{Ta&&b.ws.send(a)}catch(c){}e&&Ra(function(){b.writable=!0,b.emitReserved("drain")},b.setTimeoutFn)})},d=0;d<a.length;d++)c()}},{key:"doClose",value:function(){"undefined"!=typeof this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var a=this.opts.secure?"wss":"ws",b=this.query||{};return this.opts.timestampRequests&&(b[this.opts.timestampParam]=L()),this.supportsBinary||(b.b64=1),this.createUri(a,b)}},{key:"check",value:function(){return!!Sa}}]),c}(Ea),Xa=function(a){function c(){return b(this,c),e.apply(this,arguments)}f(c,a);var e=o(c);return d(c,[{key:"name",get:function(){return"webtransport"}},{key:"doOpen",value:function(){var a=this;"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(function(){a.onClose()})["catch"](function(b){a.onError("webtransport error",b)}),this.transport.ready.then(function(){a.transport.createBidirectionalStream().then(function(b){var c=B(Number.MAX_SAFE_INTEGER,a.socket.binaryType),d=b.readable.pipeThrough(c).getReader(),e=y();e.readable.pipeTo(b.writable),a.writer=e.writable.getWriter();var f=function h(){d.read().then(function(b){var c=b.done,d=b.value;c||(a.onPacket(d),h())})["catch"](function(a){})};f();var g={type:"open"};a.query.sid&&(g.data='{"sid":"'.concat(a.query.sid,'"}')),a.writer.write(g).then(function(){return a.onOpen()})})}))}},{key:"write",value:function(a){var b=this;this.writable=!1;for(var c=function(){var c=a[d],e=d===a.length-1;b.writer.write(c).then(function(){e&&Ra(function(){b.writable=!0,b.emitReserved("drain")},b.setTimeoutFn)})},d=0;d<a.length;d++)c()}},{key:"doClose",value:function(){var a;null===(a=this.transport)||void 0===a?void 0:a.close()}}]),c}(Ea),Ya={websocket:Wa,webtransport:Xa,polling:Oa},Za=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,$a=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],_a=function(c){function g(c){var d,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(this,g),d=h.call(this),d.binaryType=Ua,d.writeBuffer=[],c&&"object"===a(c)&&(f=c,c=null),c?(c=Q(c),f.hostname=c.host,f.secure="https"===c.protocol||"wss"===c.protocol,f.port=c.port,c.query&&(f.query=c.query)):f.host&&(f.hostname=Q(f.host).host),F(m(d),f),d.secure=null!=f.secure?f.secure:"undefined"!=typeof location&&"https:"===location.protocol,f.hostname&&!f.port&&(f.port=d.secure?"443":"80"),d.hostname=f.hostname||("undefined"!=typeof location?location.hostname:"localhost"),d.port=f.port||("undefined"!=typeof location&&location.port?location.port:d.secure?"443":"80"),d.transports=f.transports||["polling","websocket","webtransport"],d.writeBuffer=[],d.prevBufferLen=0,d.opts=e({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},f),d.opts.path=d.opts.path.replace(/\/$/,"")+(d.opts.addTrailingSlash?"/":""),"string"==typeof d.opts.query&&(d.opts.query=J(d.opts.query)),d.id=null,d.upgrades=null,d.pingInterval=null,d.pingTimeout=null,d.pingTimeoutTimer=null,"function"==typeof addEventListener&&(d.opts.closeOnBeforeunload&&(d.beforeunloadEventListener=function(){d.transport&&(d.transport.removeAllListeners(),d.transport.close())},addEventListener("beforeunload",d.beforeunloadEventListener,!1)),"localhost"!==d.hostname&&(d.offlineEventListener=function(){d.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",d.offlineEventListener,!1))),d.open(),d}f(g,c);var h=o(g);return d(g,[{key:"createTransport",value:function(a){var b=e({},this.opts.query);b.EIO=xa,b.transport=a,this.id&&(b.sid=this.id);var c=e({},this.opts,{query:b,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[a]);return new Ya[a](c)}},{key:"open",value:function(){var a,b=this;if(this.opts.rememberUpgrade&&g.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)a="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn(function(){b.emitReserved("error","No transports available")},0);a=this.transports[0]}this.readyState="opening";try{a=this.createTransport(a)}catch(c){return this.transports.shift(),void this.open()}a.open(),this.setTransport(a)}},{key:"setTransport",value:function(a){var b=this;this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",function(a){return b.onClose("transport close",a)})}},{key:"probe",value:function(a){function b(){i||(i=!0,l(),h.close(),h=null)}function c(){k("transport closed")}function d(){k("socket closed")}function e(a){h&&a.name!==h.name&&b()}var f=this,h=this.createTransport(a),i=!1;g.priorWebsocketSuccess=!1;var j=function(){i||(h.send([{type:"ping",data:"probe"}]),h.once("packet",function(a){if(!i)if("pong"===a.type&&"probe"===a.data){if(f.upgrading=!0,f.emitReserved("upgrading",h),!h)return;g.priorWebsocketSuccess="websocket"===h.name,f.transport.pause(function(){i||"closed"!==f.readyState&&(l(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emitReserved("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{var b=new Error("probe error");b.transport=h.name,f.emitReserved("upgradeError",b)}}))},k=function(a){var c=new Error("probe error: "+a);c.transport=h.name,b(),f.emitReserved("upgradeError",c)},l=function(){h.removeListener("open",j),h.removeListener("error",k),h.removeListener("close",c),f.off("close",d),f.off("upgrading",e)};h.once("open",j),h.once("error",k),h.once("close",c),this.once("close",d),this.once("upgrading",e),this.upgrades.indexOf("webtransport")!==-1&&"webtransport"!==a?this.setTimeoutFn(function(){i||h.open()},200):h.open()}},{key:"onOpen",value:function(){if(this.readyState="open",g.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade)for(var a=0,b=this.upgrades.length;a<b;a++)this.probe(this.upgrades[a])}},{key:"onPacket",value:function(a){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),this.resetPingTimeout(),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var b=new Error("server error");b.code=a.data,this.onError(b);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data)}}},{key:"onHandshake",value:function(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this.upgrades=this.filterUpgrades(a.upgrades),this.pingInterval=a.pingInterval,this.pingTimeout=a.pingTimeout,this.maxPayload=a.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var a=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(function(){a.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){var a=this.getWritablePackets();this.transport.send(a),this.prevBufferLen=a.length,this.emitReserved("flush")}}},{key:"getWritablePackets",value:function(){var a=this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1;if(!a)return this.writeBuffer;for(var b=1,c=0;c<this.writeBuffer.length;c++){var d=this.writeBuffer[c].data;if(d&&(b+=G(d)),c>0&&b>this.maxPayload)return this.writeBuffer.slice(0,c);b+=2}return this.writeBuffer}},{key:"write",value:function(a,b,c){return this.sendPacket("message",a,b,c),this}},{key:"send",value:function(a,b,c){return this.sendPacket("message",a,b,c),this}},{key:"sendPacket",value:function(a,b,c,d){if("function"==typeof b&&(d=b,b=void 0),"function"==typeof c&&(d=c,c=null),"closing"!==this.readyState&&"closed"!==this.readyState){c=c||{},c.compress=!1!==c.compress;var e={type:a,data:b,options:c};this.emitReserved("packetCreate",e),this.writeBuffer.push(e),d&&this.once("flush",d),this.flush()}}},{key:"close",value:function i(){var a=this,i=function(){a.onClose("forced close"),a.transport.close()},b=function d(){a.off("upgrade",d),a.off("upgradeError",d),i()},c=function(){a.once("upgrade",b),a.once("upgradeError",b)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",function(){a.upgrading?c():i()}):this.upgrading?c():i()),this}},{key:"onError",value:function(a){g.priorWebsocketSuccess=!1,this.emitReserved("error",a),this.onClose("transport error",a);
}},{key:"onClose",value:function(a,b){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",a,b),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(a){for(var b=[],c=0,d=a.length;c<d;c++)~this.transports.indexOf(a[c])&&b.push(a[c]);return b}}]),g}(C);_a.protocol=xa,_a.protocol;var ab,bb="function"==typeof ArrayBuffer,cb=function(a){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(a):a.buffer instanceof ArrayBuffer},db=Object.prototype.toString,eb="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===db.call(Blob),fb="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===db.call(File),gb=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],hb=5;!function(a){a[a.CONNECT=0]="CONNECT",a[a.DISCONNECT=1]="DISCONNECT",a[a.EVENT=2]="EVENT",a[a.ACK=3]="ACK",a[a.CONNECT_ERROR=4]="CONNECT_ERROR",a[a.BINARY_EVENT=5]="BINARY_EVENT",a[a.BINARY_ACK=6]="BINARY_ACK"}(ab||(ab={}));var ib=function(){function a(c){b(this,a),this.replacer=c}return d(a,[{key:"encode",value:function(a){return a.type!==ab.EVENT&&a.type!==ab.ACK||!V(a)?[this.encodeAsString(a)]:this.encodeAsBinary({type:a.type===ab.EVENT?ab.BINARY_EVENT:ab.BINARY_ACK,nsp:a.nsp,data:a.data,id:a.id})}},{key:"encodeAsString",value:function(a){var b=""+a.type;return a.type!==ab.BINARY_EVENT&&a.type!==ab.BINARY_ACK||(b+=a.attachments+"-"),a.nsp&&"/"!==a.nsp&&(b+=a.nsp+","),null!=a.id&&(b+=a.id),null!=a.data&&(b+=JSON.stringify(a.data,this.replacer)),b}},{key:"encodeAsBinary",value:function(a){var b=W(a),c=this.encodeAsString(b.packet),d=b.buffers;return d.unshift(c),d}}]),a}(),jb=function(a){function c(a){var d;return b(this,c),d=e.call(this),d.reviver=a,d}f(c,a);var e=o(c);return d(c,[{key:"add",value:function(a){var b;if("string"==typeof a){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");b=this.decodeString(a);var d=b.type===ab.BINARY_EVENT;d||b.type===ab.BINARY_ACK?(b.type=d?ab.EVENT:ab.ACK,this.reconstructor=new kb(b),0===b.attachments&&q(g(c.prototype),"emitReserved",this).call(this,"decoded",b)):q(g(c.prototype),"emitReserved",this).call(this,"decoded",b)}else{if(!U(a)&&!a.base64)throw new Error("Unknown type: "+a);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");b=this.reconstructor.takeBinaryData(a),b&&(this.reconstructor=null,q(g(c.prototype),"emitReserved",this).call(this,"decoded",b))}}},{key:"decodeString",value:function(a){var b=0,d={type:Number(a.charAt(0))};if(void 0===ab[d.type])throw new Error("unknown packet type "+d.type);if(d.type===ab.BINARY_EVENT||d.type===ab.BINARY_ACK){for(var e=b+1;"-"!==a.charAt(++b)&&b!=a.length;);var f=a.substring(e,b);if(f!=Number(f)||"-"!==a.charAt(b))throw new Error("Illegal attachments");d.attachments=Number(f)}if("/"===a.charAt(b+1)){for(var g=b+1;++b;){var h=a.charAt(b);if(","===h)break;if(b===a.length)break}d.nsp=a.substring(g,b)}else d.nsp="/";var i=a.charAt(b+1);if(""!==i&&Number(i)==i){for(var j=b+1;++b;){var k=a.charAt(b);if(null==k||Number(k)!=k){--b;break}if(b===a.length)break}d.id=Number(a.substring(j,b+1))}if(a.charAt(++b)){var l=this.tryParse(a.substr(b));if(!c.isPayloadValid(d.type,l))throw new Error("invalid payload");d.data=l}return d}},{key:"tryParse",value:function(a){try{return JSON.parse(a,this.reviver)}catch(b){return!1}}},{key:"destroy",value:function(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}],[{key:"isPayloadValid",value:function(a,b){switch(a){case ab.CONNECT:return $(b);case ab.DISCONNECT:return void 0===b;case ab.CONNECT_ERROR:return"string"==typeof b||$(b);case ab.EVENT:case ab.BINARY_EVENT:return Array.isArray(b)&&("number"==typeof b[0]||"string"==typeof b[0]&&gb.indexOf(b[0])===-1);case ab.ACK:case ab.BINARY_ACK:return Array.isArray(b)}}}]),c}(C),kb=function(){function a(c){b(this,a),this.packet=c,this.buffers=[],this.reconPack=c}return d(a,[{key:"takeBinaryData",value:function(a){if(this.buffers.push(a),this.buffers.length===this.reconPack.attachments){var b=Y(this.reconPack,this.buffers);return this.finishedReconstruction(),b}return null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),a}(),lb=Object.freeze({__proto__:null,protocol:hb,get PacketType(){return ab},Encoder:ib,Decoder:jb}),mb=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),nb=function(a){function c(a,d,f){var g;return b(this,c),g=h.call(this),g.connected=!1,g.recovered=!1,g.receiveBuffer=[],g.sendBuffer=[],g._queue=[],g._queueSeq=0,g.ids=0,g.acks={},g.flags={},g.io=a,g.nsp=d,f&&f.auth&&(g.auth=f.auth),g._opts=e({},f),g.io._autoConnect&&g.open(),g}f(c,a);var h=o(c);return d(c,[{key:"disconnected",get:function(){return!this.connected}},{key:"subEvents",value:function(){if(!this.subs){var a=this.io;this.subs=[_(a,"open",this.onopen.bind(this)),_(a,"packet",this.onpacket.bind(this)),_(a,"error",this.onerror.bind(this)),_(a,"close",this.onclose.bind(this))]}}},{key:"active",get:function(){return!!this.subs}},{key:"connect",value:function(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen(),this)}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.unshift("message"),this.emit.apply(this,b),this}},{key:"emit",value:function(a){if(mb.hasOwnProperty(a))throw new Error('"'+a.toString()+'" is a reserved event name');for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];if(c.unshift(a),this._opts.retries&&!this.flags.fromQueue&&!this.flags["volatile"])return this._addToQueue(c),this;var e={type:ab.EVENT,data:c};if(e.options={},e.options.compress=this.flags.compress!==!1,"function"==typeof c[c.length-1]){var f=this.ids++,g=c.pop();this._registerAckCallback(f,g),e.id=f}var h=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,i=this.flags["volatile"]&&(!h||!this.connected);return i||(this.connected?(this.notifyOutgoingListeners(e),this.packet(e)):this.sendBuffer.push(e)),this.flags={},this}},{key:"_registerAckCallback",value:function(a,b){var c,d=this,e=null!==(c=this.flags.timeout)&&void 0!==c?c:this._opts.ackTimeout;if(void 0===e)return void(this.acks[a]=b);var f=this.io.setTimeoutFn(function(){delete d.acks[a];for(var c=0;c<d.sendBuffer.length;c++)d.sendBuffer[c].id===a&&d.sendBuffer.splice(c,1);b.call(d,new Error("operation has timed out"))},e),g=function(){d.io.clearTimeoutFn(f);for(var a=arguments.length,c=new Array(a),e=0;e<a;e++)c[e]=arguments[e];b.apply(d,c)};g.withError=!0,this.acks[a]=g}},{key:"emitWithAck",value:function(a){for(var b=this,c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return new Promise(function(c,e){var f=function(a,b){return a?e(a):c(b)};f.withError=!0,d.push(f),b.emit.apply(b,[a].concat(d))})}},{key:"_addToQueue",value:function(a){var b,c=this;"function"==typeof a[a.length-1]&&(b=a.pop());var d={id:this._queueSeq++,tryCount:0,pending:!1,args:a,flags:e({fromQueue:!0},this.flags)};a.push(function(a){if(d===c._queue[0]){var e=null!==a;if(e)d.tryCount>c._opts.retries&&(c._queue.shift(),b&&b(a));else if(c._queue.shift(),b){for(var f=arguments.length,g=new Array(f>1?f-1:0),h=1;h<f;h++)g[h-1]=arguments[h];b.apply(void 0,[null].concat(g))}return d.pending=!1,c._drainQueue()}}),this._queue.push(d),this._drainQueue()}},{key:"_drainQueue",value:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.connected&&0!==this._queue.length){var b=this._queue[0];b.pending&&!a||(b.pending=!0,b.tryCount++,this.flags=b.flags,this.emit.apply(this,b.args))}}},{key:"packet",value:function(a){a.nsp=this.nsp,this.io._packet(a)}},{key:"onopen",value:function(){var a=this;"function"==typeof this.auth?this.auth(function(b){a._sendConnectPacket(b)}):this._sendConnectPacket(this.auth)}},{key:"_sendConnectPacket",value:function(a){this.packet({type:ab.CONNECT,data:this._pid?e({pid:this._pid,offset:this._lastOffset},a):a})}},{key:"onerror",value:function(a){this.connected||this.emitReserved("connect_error",a)}},{key:"onclose",value:function(a,b){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,b),this._clearAcks()}},{key:"_clearAcks",value:function(){var a=this;Object.keys(this.acks).forEach(function(b){var c=a.sendBuffer.some(function(a){return String(a.id)===b});if(!c){var d=a.acks[b];delete a.acks[b],d.withError&&d.call(a,new Error("socket has been disconnected"))}})}},{key:"onpacket",value:function(a){var b=a.nsp===this.nsp;if(b)switch(a.type){case ab.CONNECT:a.data&&a.data.sid?this.onconnect(a.data.sid,a.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ab.EVENT:case ab.BINARY_EVENT:this.onevent(a);break;case ab.ACK:case ab.BINARY_ACK:this.onack(a);break;case ab.DISCONNECT:this.ondisconnect();break;case ab.CONNECT_ERROR:this.destroy();var c=new Error(a.data.message);c.data=a.data.data,this.emitReserved("connect_error",c)}}},{key:"onevent",value:function(a){var b=a.data||[];null!=a.id&&b.push(this.ack(a.id)),this.connected?this.emitEvent(b):this.receiveBuffer.push(Object.freeze(b))}},{key:"emitEvent",value:function(a){if(this._anyListeners&&this._anyListeners.length){var b,d=this._anyListeners.slice(),e=t(d);try{for(e.s();!(b=e.n()).done;){var f=b.value;f.apply(this,a)}}catch(h){e.e(h)}finally{e.f()}}q(g(c.prototype),"emit",this).apply(this,a),this._pid&&a.length&&"string"==typeof a[a.length-1]&&(this._lastOffset=a[a.length-1])}},{key:"ack",value:function(a){var b=this,c=!1;return function(){if(!c){c=!0;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];b.packet({type:ab.ACK,id:a,data:e})}}}},{key:"onack",value:function(a){var b=this.acks[a.id];"function"==typeof b&&(delete this.acks[a.id],b.withError&&a.data.unshift(null),b.apply(this,a.data))}},{key:"onconnect",value:function(a,b){this.id=a,this.recovered=b&&this._pid===b,this._pid=b,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}},{key:"emitBuffered",value:function(){var a=this;this.receiveBuffer.forEach(function(b){return a.emitEvent(b)}),this.receiveBuffer=[],this.sendBuffer.forEach(function(b){a.notifyOutgoingListeners(b),a.packet(b)}),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach(function(a){return a()}),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:ab.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(a){return this.flags.compress=a,this}},{key:"volatile",get:function(){return this.flags["volatile"]=!0,this}},{key:"timeout",value:function(a){return this.flags.timeout=a,this}},{key:"onAny",value:function(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}},{key:"prependAny",value:function(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}},{key:"offAny",value:function(a){if(!this._anyListeners)return this;if(a){for(var b=this._anyListeners,c=0;c<b.length;c++)if(a===b[c])return b.splice(c,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"onAnyOutgoing",value:function(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}},{key:"prependAnyOutgoing",value:function(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}},{key:"offAnyOutgoing",value:function(a){if(!this._anyOutgoingListeners)return this;if(a){for(var b=this._anyOutgoingListeners,c=0;c<b.length;c++)if(a===b[c])return b.splice(c,1),this}else this._anyOutgoingListeners=[];return this}},{key:"listenersAnyOutgoing",value:function(){return this._anyOutgoingListeners||[]}},{key:"notifyOutgoingListeners",value:function(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var b,c=this._anyOutgoingListeners.slice(),d=t(c);try{for(d.s();!(b=d.n()).done;){var e=b.value;e.apply(this,a.data)}}catch(f){d.e(f)}finally{d.f()}}}}]),c}(C);aa.prototype.duration=function(){var a=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var b=Math.random(),c=Math.floor(b*this.jitter*a);a=0==(1&Math.floor(10*b))?a-c:a+c}return 0|Math.min(a,this.max)},aa.prototype.reset=function(){this.attempts=0},aa.prototype.setMin=function(a){this.ms=a},aa.prototype.setMax=function(a){this.max=a},aa.prototype.setJitter=function(a){this.jitter=a};var ob=function(c){function e(c,d){var f;b(this,e);var h;f=g.call(this),f.nsps={},f.subs=[],c&&"object"===a(c)&&(d=c,c=void 0),d=d||{},d.path=d.path||"/socket.io",f.opts=d,F(m(f),d),f.reconnection(d.reconnection!==!1),f.reconnectionAttempts(d.reconnectionAttempts||1/0),f.reconnectionDelay(d.reconnectionDelay||1e3),f.reconnectionDelayMax(d.reconnectionDelayMax||5e3),f.randomizationFactor(null!==(h=d.randomizationFactor)&&void 0!==h?h:.5),f.backoff=new aa({min:f.reconnectionDelay(),max:f.reconnectionDelayMax(),jitter:f.randomizationFactor()}),f.timeout(null==d.timeout?2e4:d.timeout),f._readyState="closed",f.uri=c;var i=d.parser||lb;return f.encoder=new i.Encoder,f.decoder=new i.Decoder,f._autoConnect=d.autoConnect!==!1,f._autoConnect&&f.open(),f}f(e,c);var g=o(e);return d(e,[{key:"reconnection",value:function(a){return arguments.length?(this._reconnection=!!a,this):this._reconnection}},{key:"reconnectionAttempts",value:function(a){return void 0===a?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}},{key:"reconnectionDelay",value:function(a){var b;return void 0===a?this._reconnectionDelay:(this._reconnectionDelay=a,null===(b=this.backoff)||void 0===b?void 0:b.setMin(a),this)}},{key:"randomizationFactor",value:function(a){var b;return void 0===a?this._randomizationFactor:(this._randomizationFactor=a,null===(b=this.backoff)||void 0===b?void 0:b.setJitter(a),this)}},{key:"reconnectionDelayMax",value:function(a){var b;return void 0===a?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,null===(b=this.backoff)||void 0===b?void 0:b.setMax(a),this)}},{key:"timeout",value:function(a){return arguments.length?(this._timeout=a,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(a){var b=this;if(~this._readyState.indexOf("open"))return this;this.engine=new _a(this.uri,this.opts);var c=this.engine,d=this;this._readyState="opening",this.skipReconnect=!1;var e=_(c,"open",function(){d.onopen(),a&&a()}),f=function(c){b.cleanup(),b._readyState="closed",b.emitReserved("error",c),a?a(c):b.maybeReconnectOnOpen()},g=_(c,"error",f);if(!1!==this._timeout){var h=this._timeout,i=this.setTimeoutFn(function(){e(),f(new Error("timeout")),c.close()},h);this.opts.autoUnref&&i.unref(),this.subs.push(function(){b.clearTimeoutFn(i)})}return this.subs.push(e),this.subs.push(g),this}},{key:"connect",value:function(a){return this.open(a)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var a=this.engine;this.subs.push(_(a,"ping",this.onping.bind(this)),_(a,"data",this.ondata.bind(this)),_(a,"error",this.onerror.bind(this)),_(a,"close",this.onclose.bind(this)),_(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(a){try{this.decoder.add(a)}catch(b){this.onclose("parse error",b)}}},{key:"ondecoded",value:function(a){var b=this;Ra(function(){b.emitReserved("packet",a)},this.setTimeoutFn)}},{key:"onerror",value:function(a){this.emitReserved("error",a)}},{key:"socket",value:function h(a,b){var h=this.nsps[a];return h?this._autoConnect&&!h.active&&h.connect():(h=new nb(this,a,b),this.nsps[a]=h),h}},{key:"_destroy",value:function(a){for(var b=Object.keys(this.nsps),c=0,d=b;c<d.length;c++){var e=d[c],f=this.nsps[e];if(f.active)return}this._close()}},{key:"_packet",value:function(a){for(var b=this.encoder.encode(a),c=0;c<b.length;c++)this.engine.write(b[c],a.options)}},{key:"cleanup",value:function(){this.subs.forEach(function(a){return a()}),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(a,b){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,b),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var a=this;if(this._reconnecting||this.skipReconnect)return this;var b=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{var c=this.backoff.duration();this._reconnecting=!0;var d=this.setTimeoutFn(function(){b.skipReconnect||(a.emitReserved("reconnect_attempt",b.backoff.attempts),b.skipReconnect||b.open(function(c){c?(b._reconnecting=!1,b.reconnect(),a.emitReserved("reconnect_error",c)):b.onreconnect()}))},c);this.opts.autoUnref&&d.unref(),this.subs.push(function(){a.clearTimeoutFn(d)})}}},{key:"onreconnect",value:function(){var a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}]),e}(C),pb={};return e(ba,{Manager:ob,Socket:nb,io:ba,connect:ba}),ba});;

//////////////////////////////////////////////////////////////////////////////////////
 //                                                                                //
 //  ███████╗ █████╗ ██╗██╗     ███████╗   ██╗ ██████╗         ██╗███████╗         //
 //  ██╔════╝██╔══██╗██║██║     ██╔════╝   ██║██╔═══██╗        ██║██╔════╝         //
 //  ███████╗███████║██║██║     ███████╗   ██║██║   ██║        ██║███████╗         //
 //  ╚════██║██╔══██║██║██║     ╚════██║   ██║██║   ██║   ██   ██║╚════██║         //
 //  ███████║██║  ██║██║███████╗███████║██╗██║╚██████╔╝██╗╚█████╔╝███████║         //
 //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚═╝╚═╝ ╚═════╝ ╚═╝ ╚════╝ ╚══════╝         //
 //                                                                                //
 //   ╦╔═╗╦  ╦╔═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗  ╔═╗╦  ╦╔═╗╔╗╔╔╦╗  ╔═╗╔╦╗╦╔═                     //
 //   ║╠═╣╚╗╔╝╠═╣╚═╗║  ╠╦╝║╠═╝ ║   ║  ║  ║║╣ ║║║ ║   ╚═╗ ║║╠╩╗                     //
 //  ╚╝╩ ╩ ╚╝ ╩ ╩╚═╝╚═╝╩╚═╩╩   ╩   ╚═╝╩═╝╩╚═╝╝╚╝ ╩   ╚═╝═╩╝╩ ╩                     //
 //  ┌─┐┌─┐┬─┐  ┌┐┌┌─┐┌┬┐┌─┐  ┬┌─┐  ┌─┐┌┐┌┌┬┐  ┌┬┐┬ ┬┌─┐  ┌┐ ┬─┐┌─┐┬ ┬┌─┐┌─┐┬─┐    //
 //  ├┤ │ │├┬┘  ││││ │ ││├┤   │└─┐  ├─┤│││ ││   │ ├─┤├┤   ├┴┐├┬┘│ ││││└─┐├┤ ├┬┘    //
 //  └  └─┘┴└─  ┘└┘└─┘─┴┘└─┘o└┘└─┘  ┴ ┴┘└┘─┴┘   ┴ ┴ ┴└─┘  └─┘┴└─└─┘└┴┘└─┘└─┘┴└─    //
 //                                                                                //
//////////////////////////////////////////////////////////////////////////////////////

/**
 * sails.io.js
 * v1.2.1
 * ------------------------------------------------------------------------
 * JavaScript Client (SDK) for communicating with Sails.
 *
 * Note that this script is completely optional, but it is handy if you're
 * using WebSockets from the browser to talk to your Sails server.
 *
 * For tips and documentation, visit:
 * http://sailsjs.com/documentation/reference/web-sockets/socket-client
 * ------------------------------------------------------------------------
 *
 * This file allows you to send and receive socket.io messages to & from Sails
 * by simulating a REST client interface on top of socket.io. It models its API
 * after the $.ajax pattern from jQuery you might already be familiar with.
 *
 * So if you're switching from using AJAX to sockets, instead of:
 *    `$.post( url, [data], [cb] )`
 *
 * You would use:
 *    `socket.post( url, [data], [cb] )`
 */


(function() {


  //   ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗████████╗███████╗
  //  ██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝██╔════╝
  //  ██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║   ██║   ███████╗
  //  ██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║   ██║   ╚════██║
  //  ╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║   ██║   ███████║
  //   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
  //


  /**
   * Constant containing the names of all available options
   * for individual sockets.
   *
   * @type {Array}
   */
  var SOCKET_OPTIONS = [
    'useCORSRouteToGetCookie',
    'url',
    'multiplex',
    'transports',
    'query',
    'path',
    'headers',
    'initialConnectionHeaders',
    'reconnection',
    'reconnectionAttempts',
    'reconnectionDelay',
    'reconnectionDelayMax',
    'rejectUnauthorized',
    'randomizationFactor',
    'timeout'
  ];


  /**
   * Constant containing the names of properties on `io.sails` which
   * may be configured using HTML attributes on the script tag which
   * loaded this file.
   *
   * @type {Array}
   *
   * (this is unused if loading from node.js)
   */
  var CONFIGURABLE_VIA_HTML_ATTR = [
    'autoConnect',
    'reconnection',
    'environment',
    'headers',
    'url',
    'transports',
    'path'
  ];




  /**
   * Constant containing the names of querystring
   * parameters sent when connecting any SailsSocket.
   *
   * @type {Dictionary}
   */
  var CONNECTION_METADATA_PARAMS = {
    version: '__sails_io_sdk_version',
    platform: '__sails_io_sdk_platform',
    language: '__sails_io_sdk_language'
  };


  /**
   * Constant containing metadata about the platform, language, and
   * current version of this SDK.
   *
   * @type {Dictionary}
   */
  var SDK_INFO = {
    version: '1.2.1', // <-- pulled automatically from package.json, do not change!
    language: 'javascript',
    platform: (function (){
      if (typeof module === 'object' && typeof module.exports !== 'undefined') {
        return 'node';
      }
      else {
        return 'browser';
      }
    })()
  };

  // Build `versionString` (a querystring snippet) by
  // combining SDK_INFO and CONNECTION_METADATA_PARAMS.
  SDK_INFO.versionString =
    CONNECTION_METADATA_PARAMS.version + '=' + SDK_INFO.version + '&' +
    CONNECTION_METADATA_PARAMS.platform + '=' + SDK_INFO.platform + '&' +
    CONNECTION_METADATA_PARAMS.language + '=' + SDK_INFO.language;




  //   █████╗ ██████╗ ███████╗ ██████╗ ██████╗ ██████╗     ██╗  ██╗████████╗███╗   ███╗██╗
  //  ██╔══██╗██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔══██╗    ██║  ██║╚══██╔══╝████╗ ████║██║
  //  ███████║██████╔╝███████╗██║   ██║██████╔╝██████╔╝    ███████║   ██║   ██╔████╔██║██║
  //  ██╔══██║██╔══██╗╚════██║██║   ██║██╔══██╗██╔══██╗    ██╔══██║   ██║   ██║╚██╔╝██║██║
  //  ██║  ██║██████╔╝███████║╚██████╔╝██║  ██║██████╔╝    ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
  //  ╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝
  //
  //   █████╗ ████████╗████████╗██████╗ ██╗██████╗ ██╗   ██╗████████╗███████╗███████╗
  //  ██╔══██╗╚══██╔══╝╚══██╔══╝██╔══██╗██║██╔══██╗██║   ██║╚══██╔══╝██╔════╝██╔════╝
  //  ███████║   ██║      ██║   ██████╔╝██║██████╔╝██║   ██║   ██║   █████╗  ███████╗
  //  ██╔══██║   ██║      ██║   ██╔══██╗██║██╔══██╗██║   ██║   ██║   ██╔══╝  ╚════██║
  //  ██║  ██║   ██║      ██║   ██║  ██║██║██████╔╝╚██████╔╝   ██║   ███████╗███████║
  //  ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚══════╝
  //
  //  ███████╗██████╗  ██████╗ ███╗   ███╗      ██╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗██╗
  //  ██╔════╝██╔══██╗██╔═══██╗████╗ ████║     ██╔╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝╚██╗
  //  █████╗  ██████╔╝██║   ██║██╔████╔██║    ██╔╝ ███████╗██║     ██████╔╝██║██████╔╝   ██║    ╚██╗
  //  ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║    ╚██╗ ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║    ██╔╝
  //  ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║     ╚██╗███████║╚██████╗██║  ██║██║██║        ██║   ██╔╝
  //  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝      ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚═╝
  //
  //
  // If available, grab the DOM element for the script tag which imported this file.
  // (skip this if this SDK is being used outside of the DOM, i.e. in a Node process)
  //
  // This is used below to parse client-side sails.io.js configuration encoded as
  // HTML attributes, as well as grabbing hold of the URL from whence the SDK was fetched.
  var thisScriptTag = (function() {
    if (
      typeof window !== 'object' ||
      typeof window.document !== 'object' ||
      typeof window.document.getElementsByTagName !== 'function'
    ) {
      return null;
    }

    // Return the URL of the last script loaded (i.e. this one)
    // (this must run before nextTick; see http://stackoverflow.com/a/2976714/486547)
    var allScriptsCurrentlyInDOM = window.document.getElementsByTagName('script');
    return allScriptsCurrentlyInDOM[allScriptsCurrentlyInDOM.length - 1];
  })();


  // Variables to contain src URL and other script tag config (for use below).
  var urlThisScriptWasFetchedFrom = '';
  var scriptTagConfig = {};


  if (thisScriptTag) {
    // Save the URL that this script was fetched from.
    urlThisScriptWasFetchedFrom = thisScriptTag.src;

    // Now parse the most common client-side configuration settings
    // from the script tag where they may be encoded as HTML attributes.
    //
    // Any configuration which may be provided as an HTML attribute may
    // also be provided prefixed with `data-`.  This is for folks who
    // need to support browsers that have issues with nonstandard
    // HTML attributes (or if the idea of using nonstandard HTML attributes
    // just creeps you out)
    //
    // If a `data-` prefixed attr is provided, it takes precedence.
    // (this is so that if you are already using one of these HTML
    //  attrs for some reason, you can keep it as-is and override
    //  it using `data-`. If you are using the `data-` prefixed version
    //  for some other purpose... well, in that case you'll just have to
    //  configure programmatically using `io.sails` instead.)
    CONFIGURABLE_VIA_HTML_ATTR.forEach(function (configKey){

      scriptTagConfig[configKey] = (function (){

        // Support 'data-' prefixed or normal attributes.
        // (prefixed versions take precedence if provided)
        var htmlAttrVal = thisScriptTag.getAttribute( 'data-'+configKey );
        if (!htmlAttrVal) {
          htmlAttrVal = thisScriptTag.getAttribute( configKey );
        }

        // The HTML attribute value should always be a string or `null`.
        // We'll try to parse it as JSON and use that, but worst case fall back
        // to the default situation of it being a string.
        if (typeof htmlAttrVal === 'string') {
          try { return JSON.parse(htmlAttrVal); } catch (e) { return htmlAttrVal; }
        }
        // If `null` was returned from getAttribute(), it means that the HTML attribute
        // was not specified, so we treat it as undefined (which will cause the property
        // to be removed below)
        else if (htmlAttrVal === null) {
          return undefined;
        }
        // Any other contingency shouldn't be possible:
        // - if no quotes are used in the HTML attribute, it still comes in as a string.
        // - if no RHS is provided for the attribute, it still comes in as "" (empty string)
        // (but we still handle this with an explicit error just in case--for debugging and support purposes)
        else throw new Error('sails.io.js :: Unexpected/invalid script tag configuration for `'+configKey+'`: `'+htmlAttrVal+'` (a `'+typeof htmlAttrVal+'`). Should be a string.');
      })();

      if (scriptTagConfig[configKey] === undefined){
        delete scriptTagConfig[configKey];
      }
    });



    // Now that they've been parsed, do an extremely lean version of
    // logical type validation/coercion of provided values.
    //////////////////////////////////////////////////////////////////

    // `autoConnect`
    if (typeof scriptTagConfig.autoConnect !== 'undefined') {
      if (scriptTagConfig.autoConnect === '') {
        // Special case for empty string.  It means `true` (see above).
        scriptTagConfig.autoConnect = true;
      }
      else if (typeof scriptTagConfig.autoConnect !== 'boolean') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `autoConnect` provided in script tag: `'+scriptTagConfig.autoConnect+'` (a `'+typeof scriptTagConfig.autoConnect+'`). Should be a boolean.');
      }
    }


    // `environment`
    if (typeof scriptTagConfig.environment !== 'undefined') {
      if (typeof scriptTagConfig.environment !== 'string') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `environment` provided in script tag: `'+scriptTagConfig.environment+'` (a `'+typeof scriptTagConfig.environment+'`). Should be a string.');
      }
    }


    // `headers`
    if (typeof scriptTagConfig.headers !== 'undefined') {
      if (typeof scriptTagConfig.headers !== 'object' || Array.isArray(scriptTagConfig.headers)) {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `headers` provided in script tag: `'+scriptTagConfig.headers+'` (a `'+typeof scriptTagConfig.headers+'`). Should be a JSON-compatible dictionary (i.e. `{}`).  Don\'t forget those double quotes (""), even on key names!  Use single quotes (\'\') to wrap the HTML attribute value; e.g. `headers=\'{"X-Auth": "foo"}\'`');
      }
    }


    // `url`
    if (typeof scriptTagConfig.url !== 'undefined') {
      if (typeof scriptTagConfig.url !== 'string') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `url` provided in script tag: `'+scriptTagConfig.url+'` (a `'+typeof scriptTagConfig.url+'`). Should be a string.');
      }
    }

    // OTHER `io.sails` options are NOT CURRENTLY SUPPORTED VIA HTML ATTRIBUTES.
  }




  // Grab a reference to the global socket.io client (if one is available).
  // This is used via closure below to determine which `io` to use when the
  // socket.io client instance (`io`) is augmented to become the Sails client
  // SDK instance (still `io`).
  var _existingGlobalSocketIO = (typeof io !== 'undefined') ? io : undefined;




  //////////////////////////////////////////////////////////////
  /////
  ///// NOW FOR BUNCHES OF:
  /////  - PRIVATE FUNCTION DEFINITIONS
  /////  - CONSTRUCTORS
  /////  - AND METHODS
  /////
  //////////////////////////////////////////////////////////////
  //



  //  ███████╗ █████╗ ██╗██╗     ███████╗      ██╗ ██████╗        ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
  //  ██╔════╝██╔══██╗██║██║     ██╔════╝      ██║██╔═══██╗      ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
  //  ███████╗███████║██║██║     ███████╗█████╗██║██║   ██║█████╗██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
  //  ╚════██║██╔══██║██║██║     ╚════██║╚════╝██║██║   ██║╚════╝██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
  //  ███████║██║  ██║██║███████╗███████║      ██║╚██████╔╝      ╚██████╗███████╗██║███████╗██║ ╚████║   ██║
  //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝      ╚═╝ ╚═════╝        ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
  //

  /**
   * SailsIOClient()
   *
   * Augment the provided Socket.io client object (`io`) with methods for
   * talking and listening to one or more Sails backend(s).  If no `io` was
   * provided (i.e. in a browser setting), then attempt to use the global.
   *
   * This absorbs implicit `io.sails` configuration, sets a timer for
   * automatically connecting a socket (if `io.sails.autoConnect` is enabled)
   * and returns the augmented `io`.
   *
   * Note:
   * The automatically-connected socket is exposed as `io.socket`.  If this
   * socket attempts to bind event listeners or send requests before it is
   * connected, it will be queued up and replayed when the connection is
   * successfully opened.
   *
   * @param {SocketIO} io
   * @returns {SailsIOClient} [also called `io`]
   */

  function SailsIOClient(_providedSocketIO) {

    // First, determine which `io` we're augmenting.
    //
    // Prefer the passed-in `io` instance, but fall back to the
    // global one if we've got it.
    var io;
    if (_providedSocketIO) {
      io = _providedSocketIO;
    }
    else {
      io = _existingGlobalSocketIO;
    }
    // (note that for readability, we deliberately do not short circuit or use the tertiary operator above)


    // If a socket.io client (`io`) is not available, none of this will work.
    if (!io) {
      // If node:
      if (SDK_INFO.platform === 'node') {
        throw new Error('No socket.io client available.  When requiring `sails.io.js` from Node.js, a socket.io client (`io`) must be passed in; e.g.:\n```\nvar io = require(\'sails.io.js\')( require(\'socket.io-client\') )\n```\n(see https://github.com/balderdashy/sails.io.js/tree/master/test for more examples)');
      }
      // Otherwise, this is a web browser:
      else {
        throw new Error('The Sails socket SDK depends on the socket.io client, but the socket.io global (`io`) was not available when `sails.io.js` loaded.  Normally, the socket.io client code is bundled with sails.io.js, so something is a little off.  Please check to be sure this version of `sails.io.js` has the minified Socket.io client at the top of the file.');
      }
    }

    // If the chosen socket.io client (`io`) has ALREADY BEEN AUGMENTED by this SDK,
    // (i.e. if it already has a `.sails` property) then throw an error.
    if (io.sails) {
      // If node:
      if (SDK_INFO.platform === 'node') {
        throw new Error('The provided socket.io client (`io`) has already been augmented into a Sails socket SDK instance (it has `io.sails`).');
      }
      // Otherwise, this is a web browser:
      else {
        throw new Error('The socket.io client (`io`) has already been augmented into a Sails socket SDK instance.  Usually, this means you are bringing `sails.io.js` onto the page more than once.');
      }
    }


    /**
     * A little logger for this library to use internally.
     * Basically just a wrapper around `console.log` with
     * support for feature-detection.
     *
     * @api private
     * @factory
     */
    function LoggerFactory(options) {
      options = options || {
        prefix: true
      };

      // If `console.log` is not accessible, `log` is a noop.
      if (
        typeof console !== 'object' ||
        typeof console.log !== 'function' ||
        typeof console.log.bind !== 'function'
      ) {
        return function noop() {};
      }

      return function log() {
        var args = Array.prototype.slice.call(arguments);

        // All logs are disabled when `io.sails.environment = 'production'`.
        if (io.sails.environment === 'production') return;

        // Add prefix to log messages (unless disabled)
        var PREFIX = '';
        if (options.prefix) {
          args.unshift(PREFIX);
        }

        // Call wrapped logger
        console.log
          .bind(console)
          .apply(this, args);
      };
    }//</LoggerFactory>

    // Create a private logger instance
    var consolog = LoggerFactory();
    consolog.noPrefix = LoggerFactory({
      prefix: false
    });



    /**
     * What is the `requestQueue`?
     *
     * The request queue is used to simplify app-level connection logic--
     * i.e. so you don't have to wait for the socket to be connected
     * to start trying to  synchronize data.
     *
     * @api private
     * @param  {SailsSocket}  socket
     */

    function runRequestQueue (socket) {
      var queue = socket.requestQueue;

      if (!queue) return;
      for (var i in queue) {

        // Double-check that `queue[i]` will not
        // inadvertently discover extra properties attached to the Object
        // and/or Array prototype by other libraries/frameworks/tools.
        // (e.g. Ember does this. See https://github.com/balderdashy/sails.io.js/pull/5)
        var isSafeToDereference = ({}).hasOwnProperty.call(queue, i);
        if (isSafeToDereference) {
          // Get the arguments that were originally made to the "request" method
          var requestArgs = queue[i];
          // Call the request method again in the context of the socket, with the original args
          socket.request.apply(socket, requestArgs);
        }
      }

      // Now empty the queue to remove it as a source of additional complexity.
      socket.requestQueue = null;
    }



    /**
     * Send a JSONP request.
     *
     * @param  {Object}   opts [optional]
     * @param  {Function} cb
     * @return {XMLHttpRequest}
     */

    function jsonp(opts, cb) {
      opts = opts || {};

      if (typeof window === 'undefined') {
        // FUTURE: refactor node usage to live in here
        return cb();
      }

      var scriptEl = document.createElement('script');
      window._sailsIoJSConnect = function(response) {
        // In rare circumstances our script may have been vaporised.
        // Remove it, but only if it still exists
        // https://github.com/balderdashy/sails.io.js/issues/92
        if (scriptEl && scriptEl.parentNode) {
            scriptEl.parentNode.removeChild(scriptEl);
        }

        cb(response);
      };
      scriptEl.src = opts.url;
      document.getElementsByTagName('head')[0].appendChild(scriptEl);

    }




    //       ██╗███████╗ ██████╗ ███╗   ██╗      ██╗    ██╗███████╗██████╗ ███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
    //       ██║██╔════╝██╔═══██╗████╗  ██║      ██║    ██║██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
    //       ██║███████╗██║   ██║██╔██╗ ██║█████╗██║ █╗ ██║█████╗  ██████╔╝███████╗██║   ██║██║     █████╔╝ █████╗     ██║
    //  ██   ██║╚════██║██║   ██║██║╚██╗██║╚════╝██║███╗██║██╔══╝  ██╔══██╗╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║
    //  ╚█████╔╝███████║╚██████╔╝██║ ╚████║      ╚███╔███╔╝███████╗██████╔╝███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║
    //   ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝       ╚══╝╚══╝ ╚══════╝╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
    //
    //  ██████╗ ███████╗███████╗██████╗  ██████╗ ███╗   ██╗███████╗███████╗     ██╗     ██╗██╗    ██╗██████╗ ██╗
    //  ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔═══██╗████╗  ██║██╔════╝██╔════╝    ██╔╝     ██║██║    ██║██╔══██╗╚██╗
    //  ██████╔╝█████╗  ███████╗██████╔╝██║   ██║██╔██╗ ██║███████╗█████╗      ██║      ██║██║ █╗ ██║██████╔╝ ██║
    //  ██╔══██╗██╔══╝  ╚════██║██╔═══╝ ██║   ██║██║╚██╗██║╚════██║██╔══╝      ██║ ██   ██║██║███╗██║██╔══██╗ ██║
    //  ██║  ██║███████╗███████║██║     ╚██████╔╝██║ ╚████║███████║███████╗    ╚██╗╚█████╔╝╚███╔███╔╝██║  ██║██╔╝
    //  ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝     ╚═╝ ╚════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝
    //

    /**
     * The JWR (JSON WebSocket Response) received from a Sails server.
     *
     * @api public
     * @param  {Object}  responseCtx
     *         => :body
     *         => :statusCode
     *         => :headers
     *
     * @constructor
     */

    function JWR(responseCtx) {
      this.body = responseCtx.body;
      this.headers = responseCtx.headers || {};
      this.statusCode = (typeof responseCtx.statusCode === 'undefined') ? 200 : responseCtx.statusCode;
      // FUTURE: Replace this typeof short-circuit with an assertion (statusCode should always be set)

      if (this.statusCode < 200 || this.statusCode >= 400) {
        // Determine the appropriate error message.
        var msg;
        if (this.statusCode === 0) {
          msg = 'The socket request failed.';
        }
        else {
          msg = 'Server responded with a ' + this.statusCode + ' status code';
          msg += ':\n```\n' + JSON.stringify(this.body, null, 2) + '\n```';
          // (^^Note that we should always be able to rely on socket.io to give us
          // non-circular data here, so we don't have to worry about wrapping the
          // above in a try...catch)
        }

        // Now build and attach Error instance.
        this.error = new Error(msg);
      }
    }
    JWR.prototype.toString = function() {
      return '[ResponseFromSails]' + '  -- ' +
        'Status: ' + this.statusCode + '  -- ' +
        'Headers: ' + this.headers + '  -- ' +
        'Body: ' + this.body;
    };
    JWR.prototype.toPOJO = function() {
      return {
        body: this.body,
        headers: this.headers,
        statusCode: this.statusCode
      };
    };
    JWR.prototype.pipe = function() {
      // FUTURE: look at substack's stuff
      return new Error('Client-side streaming support not implemented yet.');
    };




    //          ███████╗███╗   ███╗██╗████████╗███████╗██████╗  ██████╗ ███╗   ███╗ ██╗██╗
    //          ██╔════╝████╗ ████║██║╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗████╗ ████║██╔╝╚██╗
    //          █████╗  ██╔████╔██║██║   ██║   █████╗  ██████╔╝██║   ██║██╔████╔██║██║  ██║
    //          ██╔══╝  ██║╚██╔╝██║██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║██║  ██║
    //  ███████╗███████╗██║ ╚═╝ ██║██║   ██║   ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██╗██╔╝
    //  ╚══════╝╚══════╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═╝╚═╝
    //

    /**
     * @api private
     * @param  {SailsSocket} socket  [description]
     * @param  {Object} requestCtx [description]
     */

    function _emitFrom(socket, requestCtx) {

      if (!socket._raw) {
        throw new Error('Failed to emit from socket- raw SIO socket is missing.');
      }

      // Since callback is embedded in requestCtx,
      // retrieve it and delete the key before continuing.
      var cb = requestCtx.cb;
      delete requestCtx.cb;

      // Name of the appropriate socket.io listener on the server
      // ( === the request method or "verb", e.g. 'get', 'post', 'put', etc. )
      var sailsEndpoint = requestCtx.method;

      socket._raw.emit(sailsEndpoint, requestCtx, function serverResponded(responseCtx) {

        // Send back (emulatedHTTPBody, jsonWebSocketResponse)
        if (cb && !requestCtx.calledCb) {
          cb(responseCtx.body, new JWR(responseCtx));
          // Set flag indicating that callback was called, to avoid duplicate calls.
          requestCtx.calledCb = true;
          // Remove the callback from the list.
          socket._responseCbs.splice(socket._responseCbs.indexOf(cb), 1);
          // Remove the context from the list.
          socket._requestCtxs.splice(socket._requestCtxs.indexOf(requestCtx), 1);
        }
      });
    }







    //  ███████╗ █████╗ ██╗██╗     ███████╗███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
    //  ██╔════╝██╔══██╗██║██║     ██╔════╝██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
    //  ███████╗███████║██║██║     ███████╗███████╗██║   ██║██║     █████╔╝ █████╗     ██║
    //  ╚════██║██╔══██║██║██║     ╚════██║╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║
    //  ███████║██║  ██║██║███████╗███████║███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║
    //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
    //

    /**
     * SailsSocket
     *
     * A wrapper for an underlying Socket instance that communicates directly
     * to the Socket.io server running inside of Sails.
     *
     * If no `socket` option is provied, SailsSocket will function as a mock. It will queue socket
     * requests and event handler bindings, replaying them when the raw underlying socket actually
     * connects. This is handy when we don't necessarily have the valid configuration to know
     * WHICH SERVER to talk to yet, etc.  It is also used by `io.socket` for your convenience.
     *
     * @constructor
     * @api private
     *
     * ----------------------------------------------------------------------
     * Note: This constructor should not be used directly. To obtain a `SailsSocket`
     * instance of your very own, run:
     * ```
     * var mySocket = io.sails.connect();
     * ```
     * ----------------------------------------------------------------------
     */
    function SailsSocket (opts){
      var self = this;
      opts = opts||{};

      // Initialize private properties
      self._isConnecting = false;
      self._mightBeAboutToAutoConnect = false;

      // Set up connection options so that they can only be changed when socket is disconnected.
      var _opts = {};
      SOCKET_OPTIONS.forEach(function(option) {
        // Okay to change global headers while socket is connected
        if (option == 'headers') {return;}
        Object.defineProperty(self, option, {
          get: function() {
            if (option == 'url') {
              return _opts[option] || (self._raw && self._raw.io && self._raw.io.uri);
            }
            return _opts[option];
          },
          set: function(value) {
            // Don't allow value to be changed while socket is connected
            if (self.isConnected() && io.sails.strict !== false && value != _opts[option]) {
              throw new Error('Cannot change value of `' + option + '` while socket is connected.');
            }
            // If socket is attempting to reconnect, stop it.
            if (self._raw && self._raw.io && self._raw.io.reconnecting && !self._raw.io.skipReconnect) {
              self._raw.io.skipReconnect = true;
              consolog('Stopping reconnect; use .reconnect() to connect socket after changing options.');
            }
            _opts[option] = value;
          }
        });
      });

      // Absorb opts into SailsSocket instance
      // See http://sailsjs.com/documentation/reference/web-sockets/socket-client/sails-socket/properties
      // for description of options
      SOCKET_OPTIONS.forEach(function(option) {
        self[option] = opts[option];
      });

      // Set up "eventQueue" to hold event handlers which have not been set on the actual raw socket yet.
      self.eventQueue = {};

      // Listen for special `parseError` event sent from sockets hook on the backend
      // if an error occurs but a valid callback was not received from the client
      // (i.e. so the server had no other way to send back the error information)
      self.on('sails:parseError', function (err){
        consolog('Sails encountered an error parsing a socket message sent from this client, and did not have access to a callback function to respond with.');
        consolog('Error details:',err);
      });

      // FUTURE:
      // Listen for a special private message on any connected that allows the server
      // to set the environment (giving us 100% certainty that we guessed right)
      // However, note that the `console.log`s called before and after connection
      // are still forced to rely on our existing heuristics (to disable, tack #production
      // onto the URL used to fetch this file.)

    }//</SailsSocket>


    /**
     * `SailsSocket.prototype._connect()`
     *
     * Begin connecting this socket to the server.
     *
     * @api private
     */
    SailsSocket.prototype._connect = function (){
      var self = this;

      self._isConnecting = true;

      // Apply `io.sails` config as defaults
      // (now that at least one tick has elapsed)
      // See http://sailsjs.com/documentation/reference/web-sockets/socket-client/sails-socket/properties
      // for description of options and default values
      SOCKET_OPTIONS.forEach(function(option) {
        if ('undefined' == typeof self[option]) {
          self[option] = io.sails[option];
        }
      });

      // Headers that will be sent with the initial request to /socket.io (Node.js only)
      self.extraHeaders = self.initialConnectionHeaders || {};

      // For browser usage (currently works with "polling" transport only)
      self.transportOptions = self.transportOptions || {};
      self.transports.forEach(function(transport) {
        self.transportOptions[transport] = self.transportOptions[transport] || {};
        self.transportOptions[transport].extraHeaders = self.initialConnectionHeaders || {};
      });

      // Log a warning if non-Node.js platform attempts to use `initialConnectionHeaders` for anything other than `polling`.
      if (self.initialConnectionHeaders && SDK_INFO.platform !== 'node' && self.transports.indexOf('polling') === -1 || self.transports.length > 1) {
        if (typeof console === 'object' && typeof console.warn === 'function') {
          console.warn('When running in browser, `initialConnectionHeaders` option is only available for the `polling` transport.');
        }
      }

      // Ensure URL has no trailing slash
      self.url = self.url ? self.url.replace(/(\/)$/, '') : undefined;

      // Mix the current SDK version into the query string in
      // the connection request to the server:
      if (typeof self.query === 'string') {
        // (If provided as a string, trim leading question mark,
        // just in case one was provided.)
        self.query = self.query.replace(/^\?/, '');
        self.query += '&' + SDK_INFO.versionString;
      }
      else if (self.query && typeof self.query === 'object') {
        throw new Error('`query` setting does not currently support configuration as a dictionary (`{}`).  Instead, it must be specified as a string like `foo=89&bar=hi`');
      }
      else if (!self.query) {
        self.query = SDK_INFO.versionString;
      }
      else {
        throw new Error('Unexpected data type provided for `query` setting: '+self.query);
      }

      // Determine whether this is a cross-origin socket by examining the
      // hostname and port on the `window.location` object.  If it's cross-origin,
      // we'll attempt to get a cookie for the domain so that a Sails session can
      // be established.
      var isXOrigin = (function (){

        // If `window` doesn't exist (i.e. being used from Node.js), then
        // we won't bother attempting to get a cookie.  If you're using sockets
        // from Node.js and find you need to share a session between multiple
        // socket connections, you'll need to make an HTTP request to the /__getcookie
        // endpoint of the Sails server (or any endpoint that returns a set-cookie header)
        // and then use the cookie value in the `initialConnectionHeaders` option to
        // io.sails.connect()
        if (typeof window === 'undefined' || typeof window.location === 'undefined') {
          return false;
        }

        // If `self.url` (aka "target") is falsy, then we don't need to worry about it.
        if (typeof self.url !== 'string') { return false; }

        // Get information about the "target" (`self.url`)
        var targetProtocol = (function (){
          try {
            targetProtocol = self.url.match(/^([a-z]+:\/\/)/i)[1].toLowerCase();
          }
          catch (e) {}
          targetProtocol = targetProtocol || 'http://';
          return targetProtocol;
        })();
        var isTargetSSL = !!self.url.match('^https');
        var targetPort = (function (){
          try {
            return self.url.match(/^[a-z]+:\/\/[^:]*:([0-9]*)/i)[1];
          }
          catch (e){}
          return isTargetSSL ? '443' : '80';
        })();
        var targetAfterProtocol = self.url.replace(/^([a-z]+:\/\/)/i, '');


        // If target protocol is different than the actual protocol,
        // then we'll consider this cross-origin.
        if (targetProtocol.replace(/[:\/]/g, '') !== window.location.protocol.replace(/[:\/]/g,'')) {
          return true;
        }


        // If target hostname is different than actual hostname, we'll consider this cross-origin.
        var hasSameHostname = targetAfterProtocol.search(window.location.hostname) === 0;
        if (!hasSameHostname) {
          return true;
        }

        // If no actual port is explicitly set on the `window.location` object,
        // we'll assume either 80 or 443.
        var isLocationSSL = window.location.protocol.match(/https/i);
        var locationPort = (window.location.port+'') || (isLocationSSL ? '443' : '80');

        // Finally, if ports don't match, we'll consider this cross-origin.
        if (targetPort !== locationPort) {
          return true;
        }

        // Otherwise, it's the same origin.
        return false;

      })();


      // Prepare to start connecting the socket
      (function selfInvoking (cb){

        // If this is an attempt at a cross-origin or cross-port
        // socket connection via a browswe, send a JSONP request
        // first to ensure that a valid cookie is available.
        // This can be disabled by setting `io.sails.useCORSRouteToGetCookie`
        // to false.
        //
        // Otherwise, skip the stuff below.
        //
        if (!(self.useCORSRouteToGetCookie && isXOrigin)) {
          return cb();
        }

        // Figure out the x-origin CORS route
        // (Sails provides a default)
        var xOriginCookieURL = self.url;
        if (typeof self.useCORSRouteToGetCookie === 'string') {
          xOriginCookieURL += self.useCORSRouteToGetCookie;
        }
        else {
          xOriginCookieURL += '/__getcookie';
        }

        // Make the AJAX request (CORS)
        jsonp({
          url: xOriginCookieURL,
          method: 'GET'
        }, cb);

      })(function goAheadAndActuallyConnect() {

        // Now that we're ready to connect, create a raw underlying Socket
        // using Socket.io and save it as `_raw` (this will start it connecting)
        self._raw = io(self.url, self);

        // If the low-level transport throws an error _while connecting_, then set the _isConnecting flag
        // to false (since we're no longer connecting with any chance of success anyway).
        // Also, in this case (and in dev mode only) log a helpful message.
        self._raw.io.engine.transport.on('error', function(err){
          if (!self._isConnecting) { return; }

          self._isConnecting = false;

          // Track this timestamp for use in reconnection messages
          // (only relevant if reconnection is enabled.)
          self.connectionErrorTimestamp = (new Date()).getTime();

          // Development-only message:
          consolog('====================================');
          consolog('The socket was unable to connect.');
          consolog('The server may be offline, or the');
          consolog('socket may have failed authorization');
          consolog('based on its origin or other factors.');
          consolog('You may want to check the values of');
          consolog('`sails.config.sockets.onlyAllowOrigins`');
          consolog('or (more rarely) `sails.config.sockets.beforeConnect`');
          consolog('in your app.');
          consolog('More info: https://sailsjs.com/config/sockets');
          consolog('For help: https://sailsjs.com/support');
          consolog('');
          consolog('Technical details:');
          consolog(err);
          consolog('====================================');
        });

        // Replay event bindings from the eager socket
        self.replay();


        /**
         * 'connect' event is triggered when the socket establishes a connection
         *  successfully.
         */
        self.on('connect', function socketConnected() {
          self._isConnecting = false;
          consolog.noPrefix(
            '\n' +
            '\n' +
            // '    |>    ' + '\n' +
            // '  \\___/  '+️
            // '\n'+
             '  |>    Now connected to '+(self.url ? self.url : 'Sails')+'.' + '\n' +
            '\\___/   For help, see: http://bit.ly/2q0QDpf' + '\n' +
             '        (using sails.io.js '+io.sails.sdk.platform+' SDK @v'+io.sails.sdk.version+')'+ '\n' +
            '         Connected at: '+(new Date())+'\n'+
            '\n'+
            '\n'+
            // '\n'+
            ''
            // ' ⚓︎ (development mode)'
            // 'e.g. to send a GET request to Sails via WebSockets, run:'+ '\n' +
            // '`io.socket.get("/foo", function serverRespondedWith (body, jwr) { console.log(body); })`'+ '\n' +
          );
        });

        self.on('disconnect', function() {

          // Get a timestamp of when the disconnect was detected.
          self.connectionLostTimestamp = (new Date()).getTime();

          // Get a shallow clone of the internal array of response callbacks, in case any of the callbacks mutate it.
          var responseCbs = [].concat(self._responseCbs || []);
          // Wipe the internal array of response callbacks before executing them, in case a callback happens to add
          // a new request to the queue.
          self._responseCbs = [];

          // Do the same for the internal request context list.
          var requestCtxs = [].concat(self._requestCtxs || []);
          self._requestCtxs = [];

          // Loop through the callbacks for all in-progress requests, and call them each with an error indicating the disconnect.
          if (responseCbs.length) {
            responseCbs.forEach(function(responseCb) {
              responseCb(new Error('The socket disconnected before the request completed.'), {
                body: null,
                statusCode: 0,
                headers: {}
              });
            });
          }

          // If there is a list of request contexts, indicate that their callbacks have been
          // called and then wipe the list.  This prevents errors in the edge case of a response
          // somehow coming back after the socket reconnects.
          if (requestCtxs.length) {
            requestCtxs.forEach(function(requestCtx) {
              requestCtx.calledCb = true;
            });
          }

          consolog('====================================');
          consolog('Socket was disconnected from Sails.');
          consolog('Usually, this is due to one of the following reasons:' + '\n' +
            ' -> the server ' + (self.url ? self.url + ' ' : '') + 'was taken down' + '\n' +
            ' -> your browser lost internet connectivity');
          consolog('====================================');
        });

        self.on('reconnecting', function(numAttempts) {
          consolog(
            '\n'+
            '        Socket is trying to reconnect to '+(self.url ? self.url : 'Sails')+'...\n'+
            '_-|>_-  (attempt #' + numAttempts + ')'+'\n'+
            '\n'
          );
        });

        self.on('reconnect', function(transport, numAttempts) {
          if (!self._isConnecting) {
            self.on('connect', runRequestQueue.bind(self, self));
          }

          var msSinceLastOffline;
          var numSecsOffline;
          if (self.connectionLostTimestamp){
            msSinceLastOffline = ((new Date()).getTime() - self.connectionLostTimestamp);
            numSecsOffline = (msSinceLastOffline / 1000);
          }
          else if (self.connectionErrorTimestamp) {
            msSinceLastOffline = ((new Date()).getTime() - self.connectionErrorTimestamp);
            numSecsOffline = (msSinceLastOffline / 1000);
          }
          else {
            msSinceLastOffline = '???';
            numSecsOffline = '???';
          }

          consolog(
            '\n'+
             '  |>    Socket reconnected successfully after'+'\n'+
            '\\___/   being offline at least ' + numSecsOffline + ' seconds.'+'\n'+
            '\n'
          );
        });

        // 'error' event is triggered if connection can not be established.
        // (usually because of a failed authorization, which is in turn
        // usually due to a missing or invalid cookie)
        self.on('error', function failedToConnect(err) {
          self._isConnecting = false;
          ////////////////////////////////////////////////////////////////////////////////////
          // Note:
          // In the future, we could provide a separate event for when a socket cannot connect
          // due to a failed `beforeConnect` (aka "authorization" if you're old school).
          // this could probably be implemented by emitting a special event from the server.
          ////////////////////////////////////////////////////////////////////////////////////

          consolog(
            'Failed to connect socket (possibly due to failed `beforeConnect` on server)',
            'Error:', err
          );
        });
      });

    };

    /**
     * Reconnect the underlying socket.
     *
     * @api public
     */
    SailsSocket.prototype.reconnect = function (){
      if (this._isConnecting) {
        throw new Error('Cannot connect- socket is already connecting');
      }
      if (this.isConnected()) {
        throw new Error('Cannot connect- socket is already connected');
      }
      return this._connect();
    };

    /**
     * Disconnect the underlying socket.
     *
     * @api public
     */
    SailsSocket.prototype.disconnect = function (){
      this._isConnecting = false;
      if (!this.isConnected()) {
        throw new Error('Cannot disconnect- socket is already disconnected');
      }
      return this._raw.disconnect();
    };



    /**
     * isConnected
     *
     * @return {Boolean} whether the socket is connected and able to
     *                   communicate w/ the server.
     */

    SailsSocket.prototype.isConnected = function () {
      if (!this._raw) {
        return false;
      }

      return !!this._raw.connected;
    };


    /**
     * isConnecting
     *
     * @return {Boolean} whether the socket is in the process of connecting
     *                   to the server.
     */

    SailsSocket.prototype.isConnecting = function () {
      return this._isConnecting;
    };

    /**
     * isConnecting
     *
     * @return {Boolean} flag that is `true` after a SailsSocket instance is
     *                   initialized but before one tick of the event loop
     *                   has passed (so that it hasn't attempted to connect
     *                   yet, if autoConnect ends up being configured `true`)
     */
    SailsSocket.prototype.mightBeAboutToAutoConnect = function() {
      return this._mightBeAboutToAutoConnect;
    };

    /**
     * [replay description]
     * @return {[type]} [description]
     */
    SailsSocket.prototype.replay = function (){
      var self = this;

      // Pass events and a reference to the request queue
      // off to the self._raw for consumption
      for (var evName in self.eventQueue) {
        for (var i in self.eventQueue[evName]) {
          self._raw.on(evName, self.eventQueue[evName][i]);
        }
      }

      // Bind a one-time function to run the request queue
      // when the self._raw connects.
      if ( !self.isConnected() ) {
        self._raw.once('connect', runRequestQueue.bind(self, self));
      }
      // Or run it immediately if self._raw is already connected
      else {
        runRequestQueue(self);
      }

      return self;
    };


    /**
     * Chainable method to bind an event to the socket.
     *
     * @param  {String}   evName [event name]
     * @param  {Function} fn     [event handler function]
     * @return {SailsSocket}
     */
    SailsSocket.prototype.on = function (evName, fn){

      // Bind the event to the raw underlying socket if possible.
      if (this._raw) {
        this._raw.on(evName, fn);
        return this;
      }

      // Otherwise queue the event binding.
      if (!this.eventQueue[evName]) {
        this.eventQueue[evName] = [fn];
      }
      else {
        this.eventQueue[evName].push(fn);
      }

      return this;
    };

    /**
     * Chainable method to unbind an event from the socket.
     *
     * @param  {String}   evName [event name]
     * @param  {Function} fn     [event handler function]
     * @return {SailsSocket}
     */
    SailsSocket.prototype.off = function (evName, fn){

      // Unbind the event from the raw underlying socket if possible.
      if (this._raw) {
        this._raw.off(evName, fn);
        return this;
      }

      // Otherwise unqueue the queued event binding.
      if (this.eventQueue[evName] && this.eventQueue[evName].indexOf(fn) > -1) {
        this.eventQueue[evName].splice(this.eventQueue[evName].indexOf(fn), 1);
      }

      return this;
    };


    /**
     * Chainable method to unbind all events from the socket.
     *
     * @return {SailsSocket}
     */
    SailsSocket.prototype.removeAllListeners = function (){

      // Bind the event to the raw underlying socket if possible.
      if (this._raw) {
        this._raw.removeAllListeners();
        return this;
      }

      // Otherwise queue the event binding.
      this.eventQueue = {};

      return this;
    };

    /**
     * Simulate a GET request to sails
     * e.g.
     *    `socket.get('/user/3', Stats.populate)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.get = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'get',
        params: data,
        url: url
      }, cb);
    };



    /**
     * Simulate a POST request to sails
     * e.g.
     *    `socket.post('/event', newMeeting, $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.post = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'post',
        data: data,
        url: url
      }, cb);
    };



    /**
     * Simulate a PUT request to sails
     * e.g.
     *    `socket.post('/event/3', changedFields, $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.put = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'put',
        params: data,
        url: url
      }, cb);
    };


    /**
     * Simulate a PATCH request to sails
     * e.g.
     *    `socket.patch('/event/3', changedFields, $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.patch = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'patch',
        params: data,
        url: url
      }, cb);
    };

    /**
     * Simulate a DELETE request to sails
     * e.g.
     *    `socket.delete('/event', $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype['delete'] = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'delete',
        params: data,
        url: url
      }, cb);
    };



    /**
     * Simulate an HTTP request to sails
     * e.g.
     * ```
     * socket.request({
     *   url:'/user',
     *   params: {},
     *   method: 'POST',
     *   headers: {}
     * }, function (responseBody, JWR) {
     *   // ...
     * });
     * ```
     *
     * @api public
     * @option {String} url    ::    destination URL
     * @option {Object} params ::    parameters to send with the request [optional]
     * @option {Object} headers::    headers to send with the request [optional]
     * @option {Function} cb   ::    callback function to call when finished [optional]
     * @option {String} method ::    HTTP request method [optional]
     */

    SailsSocket.prototype.request = function(options, cb) {

      var usage =
      'Usage:\n'+
      'socket.request( options, [fnToCallWhenComplete] )\n\n'+
      'options.url :: e.g. "/foo/bar"'+'\n'+
      'options.method :: e.g. "get", "post", "put", or "delete", etc.'+'\n'+
      'options.params :: e.g. { emailAddress: "mike@example.com" }'+'\n'+
      'options.headers :: e.g. { "x-my-custom-header": "some string" }';
      // Old usage:
      // var usage = 'Usage:\n socket.'+(options.method||'request')+'('+
      //   ' destinationURL, [dataToSend], [fnToCallWhenComplete] )';


      // Validate options and callback
      if (typeof cb !== 'undefined' && typeof cb !== 'function') {
        throw new Error('Invalid callback function!\n' + usage);
      }
      if (typeof options !== 'object' || typeof options.url !== 'string') {
        throw new Error('Invalid or missing URL!\n' + usage);
      }
      if (options.method && typeof options.method !== 'string') {
        throw new Error('Invalid `method` provided (should be a string like "post" or "put")\n' + usage);
      }
      if (options.headers && typeof options.headers !== 'object') {
        throw new Error('Invalid `headers` provided (should be a dictionary with string values)\n' + usage);
      }
      if (options.params && typeof options.params !== 'object') {
        throw new Error('Invalid `params` provided (should be a dictionary with JSON-serializable values)\n' + usage);
      }
      if (options.data && typeof options.data !== 'object') {
        throw new Error('Invalid `data` provided (should be a dictionary with JSON-serializable values)\n' + usage);
      }

      // Accept either `params` or `data` for backwards compatibility (but not both!)
      if (options.data && options.params) {
        throw new Error('Cannot specify both `params` and `data`!  They are aliases of each other.\n' + usage);
      }
      else if (options.data) {
        options.params = options.data;
        delete options.data;
      }


      // If this socket is not connected yet, queue up this request
      // instead of sending it.
      // (so it can be replayed when the socket comes online.)
      if ( ! this.isConnected() ) {

        // If no queue array exists for this socket yet, create it.
        this.requestQueue = this.requestQueue || [];
        this.requestQueue.push([options, cb]);
        return;
      }

      // Otherwise, our socket is connected, so continue prepping
      // the request.

      // Default headers to an empty object
      options.headers = options.headers || {};

      // Build a simulated request object
      // (and sanitize/marshal options along the way)
      var requestCtx = {

        method: (options.method || 'get').toLowerCase(),

        headers: options.headers,

        data: options.params || options.data || {},

        // Remove trailing slashes and spaces to make packets smaller.
        url: options.url.replace(/^(.+)\/*\s*$/, '$1'),

        cb: cb
      };

      // Get a reference to the callback list, or create a new one.
      this._responseCbs = this._responseCbs || [];

      // Get a reference to the request context list, or create a new one.
      this._requestCtxs = this._requestCtxs || [];

      // Add this callback to the list.  If the socket disconnects, we'll call
      // each cb in the list with an error and reset the list.  Otherwise the
      // cb will be removed from the list when the server responds.
      // Also add the request context to the list.  It will be removed once
      // the response comes back, or if the socket disconnects.
      if (cb) {
        this._responseCbs.push(cb);
        this._requestCtxs.push(requestCtx);
      }

      // Merge global headers in, if there are any.
      if (this.headers && 'object' === typeof this.headers) {
        for (var header in this.headers) {
          if (!options.headers.hasOwnProperty(header)) {
            options.headers[header] = this.headers[header];
          }
        }
      }

      // Send the request.
      _emitFrom(this, requestCtx);
    };



    /**
     * Socket.prototype._request
     *
     * Simulate HTTP over Socket.io.
     *
     * @api private
     * @param  {[type]}   options [description]
     * @param  {Function} cb      [description]
     */
    SailsSocket.prototype._request = function(options, cb) {
      throw new Error('`_request()` was a private API deprecated as of v0.11 of the sails.io.js client. Use `.request()` instead.');
    };







    //  ██╗ ██████╗    ███████╗ █████╗ ██╗██╗     ███████╗
    //  ██║██╔═══██╗   ██╔════╝██╔══██╗██║██║     ██╔════╝
    //  ██║██║   ██║   ███████╗███████║██║██║     ███████╗
    //  ██║██║   ██║   ╚════██║██╔══██║██║██║     ╚════██║
    //  ██║╚██████╔╝██╗███████║██║  ██║██║███████╗███████║
    //  ╚═╝ ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
    //
    // Set an `io.sails` object that may be used for configuration before the
    // first socket connects (i.e. to allow auto-connect behavior to be
    // prevented by setting `io.sails.autoConnect` in an inline script
    // directly after the script tag which loaded this file).


    //  ┌─┐┌─┐┌┬┐  ┬ ┬┌─┐  ╔╦╗╔═╗╔═╗╔═╗╦ ╦╦ ╔╦╗╔═╗  ┌─┐┌─┐┬─┐  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐
    //  └─┐├┤  │   │ │├─┘   ║║║╣ ╠╣ ╠═╣║ ║║  ║ ╚═╗  ├┤ │ │├┬┘  ││ │ └─┐├─┤││  └─┐
    //  └─┘└─┘ ┴   └─┘┴    ═╩╝╚═╝╚  ╩ ╩╚═╝╩═╝╩ ╚═╝  └  └─┘┴└─  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘
    io.sails = {

      // Whether to automatically connect a socket and save it as `io.socket`.
      autoConnect: true,

      // Whether to automatically try to reconnect after connection is lost
      reconnection: false,

      // The route (path) to hit to get a x-origin (CORS) cookie
      // (or true to use the default: '/__getcookie')
      useCORSRouteToGetCookie: true,

      // The environment we're running in.
      // (logs are not displayed when this is set to 'production')
      //
      // Defaults to "development" unless this script was fetched from a URL
      // that ends in `*.min.js` or '#production', or if the conventional
      // `SAILS_LOCALS` global is set with an `_environment` of "production"
      // or "staging".  (This setting may also be manually overridden.)
      environment: (
        urlThisScriptWasFetchedFrom.match(/(\#production|\.min\.js)/g) ||
        (
          typeof window === 'object' && window &&
          typeof window.SAILS_LOCALS === 'object' && window.SAILS_LOCALS &&
          (window.SAILS_LOCALS._environment === 'staging' || window.SAILS_LOCALS._environment === 'production')
        )
      )? 'production' : 'development',

      // The version of this sails.io.js client SDK
      sdk: SDK_INFO,

      // Transports to use when communicating with the server, in the order they will be tried
      transports: ['websocket']
    };



    //  ┌─┐─┐ ┬┌┬┐┌─┐┌┐┌┌┬┐  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐  ┌┬┐┌─┐┌─┐┌─┐┬ ┬┬ ┌┬┐┌─┐
    //  ├┤ ┌┴┬┘ │ ├┤ │││ ││  ││ │ └─┐├─┤││  └─┐   ││├┤ ├┤ ├─┤│ ││  │ └─┐
    //  └─┘┴ └─ ┴ └─┘┘└┘─┴┘  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘  ─┴┘└─┘└  ┴ ┴└─┘┴─┘┴ └─┘
    //  ┬ ┬┬┌┬┐┬ ┬  ┌┬┐┬ ┬┌─┐  ╦ ╦╔╦╗╔╦╗╦    ╔═╗╔╦╗╔╦╗╦═╗╦╔╗ ╦ ╦╔╦╗╔═╗╔═╗
    //  ││││ │ ├─┤   │ ├─┤├┤   ╠═╣ ║ ║║║║    ╠═╣ ║  ║ ╠╦╝║╠╩╗║ ║ ║ ║╣ ╚═╗
    //  └┴┘┴ ┴ ┴ ┴   ┴ ┴ ┴└─┘  ╩ ╩ ╩ ╩ ╩╩═╝  ╩ ╩ ╩  ╩ ╩╚═╩╚═╝╚═╝ ╩ ╚═╝╚═╝
    //  ┌─┐┬─┐┌─┐┌┬┐  ┌┬┐┬ ┬┌─┐  ┌─┐┌─┐┬─┐┬┌─┐┌┬┐  ┌┬┐┌─┐┌─┐
    //  ├┤ ├┬┘│ ││││   │ ├─┤├┤   └─┐│  ├┬┘│├─┘ │    │ ├─┤│ ┬
    //  └  ┴└─└─┘┴ ┴   ┴ ┴ ┴└─┘  └─┘└─┘┴└─┴┴   ┴    ┴ ┴ ┴└─┘
    //
    // Now fold in config provided as HTML attributes on the script tag:
    // (note that if `io.sails.*` is changed after this script, those changes
    //  will still take precedence)
    CONFIGURABLE_VIA_HTML_ATTR.forEach(function (configKey){
      if (typeof scriptTagConfig[configKey] !== 'undefined') {
        io.sails[configKey] = scriptTagConfig[configKey];
      }
    });
    //////////////////////////////////////////////////////////////////////////////
    // Note that the new HTML attribute configuration style may eventually
    // completely replace the original approach of setting `io.sails` properties,
    // since the new strategy is easier to reason about.  Also, it would allow us
    // to remove the timeout below someday.
    //////////////////////////////////////////////////////////////////////////////




    //  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐ ╔═╗╔═╗╔╗╔╔╗╔╔═╗╔═╗╔╦╗  /  \
    //  ││ │ └─┐├─┤││  └─┐ ║  ║ ║║║║║║║║╣ ║   ║  /   /
    //  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘o╚═╝╚═╝╝╚╝╝╚╝╚═╝╚═╝ ╩  \  /

    /**
     * Add `io.sails.connect` function as a wrapper for the built-in `io()` aka `io.connect()`
     * method, returning a SailsSocket. This special function respects the configured io.sails
     * connection URL, as well as sending other identifying information (most importantly, the
     * current version of this SDK).
     *
     * @param  {String} url  [optional]
     * @param  {Object} opts [optional]
     * @return {Socket}
     */
    io.sails.connect = function(url, opts) {

      // Make URL optional
      if ('object' === typeof url) {
        opts = url;
        url = null;
      }

      // Default opts to empty object
      opts = opts || {};

      // If explicit connection url is specified, save it to options
      opts.url = url || opts.url || undefined;

      // Instantiate and return a new SailsSocket- and try to connect immediately.
      var socket = new SailsSocket(opts);
      socket._connect();
      return socket;
    };






    //  ██╗ ██████╗    ███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
    //  ██║██╔═══██╗   ██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
    //  ██║██║   ██║   ███████╗██║   ██║██║     █████╔╝ █████╗     ██║
    //  ██║██║   ██║   ╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║
    //  ██║╚██████╔╝██╗███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║
    //  ╚═╝ ╚═════╝ ╚═╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
    //
    // io.socket
    //
    // The eager instance of Socket which will automatically try to connect
    // using the host that this js file was served from.
    //
    // This can be disabled or configured by setting properties on `io.sails.*` within the
    // first cycle of the event loop.
    //


    // Build `io.socket` so it exists
    // (note that this DOES NOT start the connection process)
    io.socket = new SailsSocket();
    //
    // This socket is not connected yet, and has not even _started_ connecting.
    //
    // But in the mean time, this eager socket will be queue events bound by the user
    // before the first cycle of the event loop (using `.on()`), which will later
    // be rebound on the raw underlying socket.


    //  ┌─┐┌─┐┌┬┐  ┌─┐┬ ┬┌┬┐┌─┐   ┌─┐┌─┐┌┐┌┌┐┌┌─┐┌─┐┌┬┐  ┌┬┐┬┌┬┐┌─┐┬─┐
    //  └─┐├┤  │   ├─┤│ │ │ │ │───│  │ │││││││├┤ │   │    │ ││││├┤ ├┬┘
    //  └─┘└─┘ ┴   ┴ ┴└─┘ ┴ └─┘   └─┘└─┘┘└┘┘└┘└─┘└─┘ ┴    ┴ ┴┴ ┴└─┘┴└─
    // If configured to do so, start auto-connecting after the first cycle of the event loop
    // has completed (to allow time for this behavior to be configured/disabled
    // by specifying properties on `io.sails`)

    // Indicate that the autoConnect timer has started.
    io.socket._mightBeAboutToAutoConnect = true;

    setTimeout(function() {

      // Indicate that the autoConect timer fired.
      io.socket._mightBeAboutToAutoConnect = false;

      // If autoConnect is disabled, delete the eager socket (io.socket) and bail out.
      if (io.sails.autoConnect === false || io.sails.autoconnect === false) {
        delete io.socket;
        return;
      }

      // consolog('Eagerly auto-connecting socket to Sails... (requests will be queued in the mean-time)');
      io.socket._connect();


    }, 0); // </setTimeout>


    // Return the `io` object.
    return io;
  } //</SailsIOClient>

  //
  /////////////////////////////////////////////////////////////////////////////////
  ///// </bunches of private function definitions, constructors, and methods>
  /////////////////////////////////////////////////////////////////////////////////




  //  ███████╗██╗  ██╗██████╗  ██████╗ ███████╗███████╗    ███████╗██████╗ ██╗  ██╗
  //  ██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔════╝██╔══██╗██║ ██╔╝
  //  █████╗   ╚███╔╝ ██████╔╝██║   ██║███████╗█████╗      ███████╗██║  ██║█████╔╝
  //  ██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║╚════██║██╔══╝      ╚════██║██║  ██║██╔═██╗
  //  ███████╗██╔╝ ██╗██║     ╚██████╔╝███████║███████╗    ███████║██████╔╝██║  ██╗
  //  ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚══════╝╚══════╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝
  //


  // Add CommonJS support to allow this client SDK to be used from Node.js.
  if (SDK_INFO.platform === 'node') {
    module.exports = SailsIOClient;
  }
  // Add AMD support, registering this client SDK as an anonymous module.
  else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return SailsIOClient;
    });
  }
  else {
    // Otherwise, try to instantiate the client using the global `io`:
    SailsIOClient();

    // Note:
    // If you are modifying this file manually to wrap an existing socket.io client
    // (e.g. to prevent pollution of the global namespace), you can replace the global
    // `io` with your own `io` instance above.
  }

})();
;

/* eslint-enable */
