(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('SearchBar',[],b):'object'==typeof exports?exports.SearchBar=b():a.SearchBar=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=45)}([function(a){a.exports=require('react')},function(a){function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a,b){for(var c=[],d={},e=0;e<a.length;e++){var f=a[e],g=b.base?f[0]+b.base:f[0],h=f[1],i=f[2],j=f[3],k={css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}function f(a,b){var c=r(a.insertInto);if(!c)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var d=u[u.length-1];if('top'===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),u.push(b);else if('bottom'===a.insertAt)c.appendChild(b);else if('object'==typeof a.insertAt&&a.insertAt.before){var e=r(a.insertInto+' '+a.insertAt.before);c.insertBefore(b,e)}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function g(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a);var b=u.indexOf(a);0<=b&&u.splice(b,1)}function h(a){var b=document.createElement('style');return a.attrs.type='text/css',j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement('link');return a.attrs.type='text/css',a.attrs.rel='stylesheet',j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e,f;if(b.transform&&a.css)if(f=b.transform(a.css),f)a.css=f;else return function(){};if(b.singleton){var j=t++;c=s||(s=h(b)),d=l.bind(null,c,j,!1),e=l.bind(null,c,j,!0)}else a.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=w(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute('media',d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=b.convertToAbsoluteUrls===void 0&&e;(b.convertToAbsoluteUrls||f)&&(d=v(d)),e&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */');var g=new Blob([d],{type:'text/css'}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return'undefined'==typeof b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){return document.querySelector(a)},r=function(){var a={};return function(b){if('function'==typeof b)return b();if('undefined'==typeof a[b]){var c=q.call(this,b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),s=null,t=0,u=[],v=c(5);a.exports=function(a,b){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');b=b||{},b.attrs='object'==typeof b.attrs?b.attrs:{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=p()),b.insertInto||(b.insertInto='head'),b.insertAt||(b.insertAt='bottom');var c=e(a,b);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){var k=e(a,b);d(k,b)}for(var i,g=0;g<f.length;g++)if(i=f[g],0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}};var w=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},function(a){a.exports=require('prop-types')},function(a,b,c){'use strict';c.d(b,'a',function(){return j}),c.d(b,'b',function(){return k}),c.d(b,'g',function(){return m}),c.d(b,'e',function(){return n}),c.d(b,'c',function(){return o}),c.d(b,'d',function(){return p}),c.d(b,'f',function(){return q}),c.d(b,'h',function(){return r});var d=c(6),e=c.n(d),f=c(17),g=c.n(f),h=10,i=13,j=45,k=2,l=function(a){return a===h||a===i},m=function(a){var b=a.follow,c=a.scrollToLine,d=c===void 0?0:c,e=a.previousCount,f=e===void 0?0:e,g=a.count,h=g===void 0?0:g,i=a.offset,j=i===void 0?0:i;if(b!==void 0&&b)return h-1-j;return d&&f>d?-1:d?d-1-j:-1},n=function(a){return a?Array.isArray(a)?1===a.length?Object(d.Range)(a[0],a[0]+1):Object(d.Range)(a[0],a[1]+1):Object(d.Range)(a,a+1):Object(d.Range)(0,0)},o=function(c,a){var b=new Uint8Array(c.length+a.length);return b.set(c,0),b.set(a,c.length),b},p=function(a,b){var c=b?o(b,a):a,e=c.length,f=0,g=0,j=Object(d.List)().withMutations(function(a){for(;g<e;){var b=c[g],d=c[g+1];l(b,d)?(a.push(c.subarray(f,g)),f=b===i&&d===h?g+2:g+1,g=f):g+=1}});return{lines:j,remaining:g==f?null:c.slice(f)}},q=function(a){for(var b=a.length,c=[],d=0,e=0;e<b;){var f=a[e],g=a[e+1];l(f,g)?(c.push(e),d=f===i&&g===h?e+2:e+1,e=d):e+=1}return c},r=function(a){var b=a.searchKeywords,c=a.nextFormatPart,d=a.caseInsensitive,e=a.replaceJsx;return function(a){var f=a;if(c&&(f=c(a)),d){if(a.toLowerCase().includes(b.toLowerCase()))return g()(f,b,e);}else if(a.includes(b))return g()(f,b,e);return f}}},function(a){a.exports=function(a){var b='undefined'!=typeof window&&window.location;if(!b)throw new Error('fixUrls requires window.location');if(!a||'string'!=typeof a)return a;var c=b.protocol+'//'+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,'/'),e=a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e))return a;var f;return f=0===e.indexOf('//')?e:0===e.indexOf('/')?c+e:d+e.replace(/^\.\//,''),'url('+JSON.stringify(f)+')'});return e}},function(a){a.exports=require('immutable')},,,,,,,,,,,function(a){a.exports=require('react-string-replace')},,,,,,,function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function e(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function f(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function g(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function h(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function i(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,'__esModule',{value:!0});var j=c(0),k=c.n(j),l=c(3),m=c.n(l),n=c(25),o=c.n(n),p=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),q=function(a){function b(){return d(this,b),e(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,a),p(b,[{key:'render',value:function(){return Object(j.createElement)('svg',{className:n.filterLinesIcon,xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 286.054 286.054'},Object(j.createElement)('path',{d:'M8.939 44.696h178.784a8.931 8.931 0 0 0 8.939-8.939V8.939A8.937 8.937 0 0 0 187.723 0H8.939C4.005 0 0 4.005 0 8.939v26.818c0 4.934 4.005 8.939 8.939 8.939zm268.176 35.757H8.939C4.005 80.453 0 84.457 0 89.392v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939V89.392a8.936 8.936 0 0 0-8.939-8.939zM8.939 205.601h178.784a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939H8.939A8.937 8.937 0 0 0 0 169.844v26.818a8.937 8.937 0 0 0 8.939 8.939zm268.176 35.757H8.939A8.937 8.937 0 0 0 0 250.297v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939z'}))}}]),b}(j.PureComponent),r=c(4),s=c(27),t=c.n(s);c.d(b,'default',function(){return x});var u,v,w=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),x=(v=u=function(a){function b(){var a,c,d,e;g(this,b);for(var f=arguments.length,i=Array(f),j=0;j<f;j++)i[j]=arguments[j];return e=(c=(d=h(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(i))),d),Object.defineProperty(d,'state',{enumerable:!0,writable:!0,value:{keywords:''}}),Object.defineProperty(d,'handleFilterToggle',{enumerable:!0,writable:!0,value:function(){d.props.onFilterLinesWithMatches(!d.props.filterActive)}}),Object.defineProperty(d,'handleSearchChange',{enumerable:!0,writable:!0,value:function(a){var b=a.target.value;d.setState({keywords:b},function(){return d.search()}),d.props.onFilterLinesWithMatches(!1)}}),Object.defineProperty(d,'handleSearchKeyPress',{enumerable:!0,writable:!0,value:function(a){'Enter'===a.key&&d.handleFilterToggle()}}),Object.defineProperty(d,'search',{enumerable:!0,writable:!0,value:function(){var a=d.state.keywords,b=d.props,c=b.onSearch,e=b.onClearSearch;a&&a.length>r.b?c(a):e()}}),c),h(d,e)}return i(b,a),w(b,[{key:'render',value:function(){var a=this.props,b=a.resultsCount,c=a.filterActive,d=a.disabled,e='match'+(1===b?'':'es'),f=c?s.active:s.inactive;return Object(j.createElement)('div',{className:'react-lazylog-searchbar '+s.searchBar},Object(j.createElement)('input',{autoComplete:'off',type:'text',name:'search',placeholder:'Search',className:'react-lazylog-searchbar-input '+s.searchInput,onChange:this.handleSearchChange,onKeyPress:this.handleSearchKeyPress,value:this.state.keywords,disabled:d}),Object(j.createElement)('button',{disabled:d,className:'react-lazylog-searchbar-filter '+(c?'active':'inactive')+' '+s.button+' '+f,onClick:this.handleFilterToggle},Object(j.createElement)(q,null)),Object(j.createElement)('span',{className:'react-lazylog-searchbar-matches '+(b?'active':'inactive')+' '+(b?s.active:s.inactive)},b,' ',e))}}]),b}(j.Component),Object.defineProperty(u,'propTypes',{enumerable:!0,writable:!0,value:{onSearch:l.func,onClearSearch:l.func,onFilterLinesWithMatches:l.func,resultsCount:l.number,filterActive:l.bool,disabled:l.bool}}),Object.defineProperty(u,'defaultProps',{enumerable:!0,writable:!0,value:{onSearch:function(){},onClearSearch:function(){},onFilterLinesWithMatches:function(){},resultsCount:0,filterActive:!1,disabled:!1}}),v)},function(a,b,c){var d=c(26);'string'==typeof d&&(d=[[a.i,d,'']]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c(2)(d,f);d.locals&&(a.exports=d.locals),!1},function(a,b,c){b=a.exports=c(1)(!1),b.push([a.i,'._1lq6olr9h2p7MJDCA8c-aL {\n  height: 15px;\n  cursor: pointer;\n}\n','']),b.locals={filterLinesIcon:'_1lq6olr9h2p7MJDCA8c-aL'}},function(a,b,c){var d=c(28);'string'==typeof d&&(d=[[a.i,d,'']]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c(2)(d,f);d.locals&&(a.exports=d.locals),!1},function(a,b,c){b=a.exports=c(1)(!1),b.push([a.i,'._3hsz3SFOTsWryCiRA9Mjtq {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: "Monaco", monospace;\n  font-size: 12px;\n  background-color: #222222;\n  color: #d6d6d6;\n  padding: 10px;\n}\n\n._2JObJsQyVcVoB1YD6078ip {\n  background-color: #464646;\n  color: #d6d6d6;\n  height: 20px;\n  min-width: 200px;\n  font-size: 12px;\n  padding: 2px 5px;\n  border: 1px solid #4e4e4e;\n  margin-right: 10px;\n}\n\n._1NGepveS5BPffleJYyamDk {\n  color: #d6d6d6;\n  fill: #d6d6d6;\n}\n\n._3cXa-36GYrmnrGIXEg46cX {\n  color: #464646;\n  fill: #464646;\n}\n\n.qZaVIaYTJWY-GaoXJJ2Cp {\n  background: none;\n  border: none;\n  margin-right: 10px;\n}\n','']),b.locals={searchBar:'_3hsz3SFOTsWryCiRA9Mjtq',searchInput:'_2JObJsQyVcVoB1YD6078ip',active:'_1NGepveS5BPffleJYyamDk',inactive:'_3cXa-36GYrmnrGIXEg46cX',button:'qZaVIaYTJWY-GaoXJJ2Cp'}},,,,,,,,,,,,,,,,,function(a,b,c){a.exports=c(24)}])});
//# sourceMappingURL=SearchBar.js.map