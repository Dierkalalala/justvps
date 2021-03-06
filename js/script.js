/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/**
 * Swiper 6.0.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 9, 2020
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    /**
     * SSR Window 3.0.0-alpha.4
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: May 20, 2020
     */

    /* eslint-disable no-param-reassign */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend(target, src) {
        if (target === void 0) {
            target = {};
        }

        if (src === void 0) {
            src = {};
        }

        Object.keys(src).forEach(function (key) {
            if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }

    var ssrDocument = {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
            blur: function blur() {},
            nodeName: ''
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() {}
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS: function createElementNS() {
            return {};
        },
        importNode: function importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };

    function getDocument() {
        var doc = typeof document !== 'undefined' ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }

    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState: function replaceState() {},
            pushState: function pushState() {},
            go: function go() {},
            back: function back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                }
            };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
        matchMedia: function matchMedia() {
            return {};
        },
        requestAnimationFrame: function requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }

            return setTimeout(callback, 0);
        },
        cancelAnimationFrame: function cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }

            clearTimeout(id);
        }
    };

    function getWindow() {
        var win = typeof window !== 'undefined' ? window : {};
        extend(win, ssrWindow);
        return win;
    }

    /**
     * Dom7 3.0.0-alpha.5
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: June 22, 2020
     */

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    var Dom7 = /*#__PURE__*/function (_Array) {
        _inheritsLoose(Dom7, _Array);

        function Dom7(items) {
            return _Array.call.apply(_Array, [this].concat(items)) || this;
        }

        return Dom7;
    }( /*#__PURE__*/_wrapNativeSuper(Array));

    function arrayFlat(arr) {
        if (arr === void 0) {
            arr = [];
        }

        var res = [];
        arr.forEach(function (el) {
            if (Array.isArray(el)) {
                res.push.apply(res, arrayFlat(el));
            } else {
                res.push(el);
            }
        });
        return res;
    }

    function arrayFilter(arr, callback) {
        return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
        var uniqueArray = [];

        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
        }

        return uniqueArray;
    }

    function qsa(selector, context) {
        if (typeof selector !== 'string') {
            return [selector];
        }

        var a = [];
        var res = context.querySelectorAll(selector);

        for (var i = 0; i < res.length; i += 1) {
            a.push(res[i]);
        }

        return a;
    }

    function $(selector, context) {
        var window = getWindow();
        var document = getDocument();
        var arr = [];

        if (!context && selector instanceof Dom7) {
            return selector;
        }

        if (!selector) {
            return new Dom7(arr);
        }

        if (typeof selector === 'string') {
            var html = selector.trim();

            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                var toCreate = 'div';
                if (html.indexOf('<li') === 0) toCreate = 'ul';
                if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                if (html.indexOf('<tbody') === 0) toCreate = 'table';
                if (html.indexOf('<option') === 0) toCreate = 'select';
                var tempParent = document.createElement(toCreate);
                tempParent.innerHTML = html;

                for (var i = 0; i < tempParent.childNodes.length; i += 1) {
                    arr.push(tempParent.childNodes[i]);
                }
            } else {
                arr = qsa(selector.trim(), context || document);
            } // arr = qsa(selector, document);

        } else if (selector.nodeType || selector === window || selector === document) {
            arr.push(selector);
        } else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector;
            arr = selector;
        }

        return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype;

    function addClass() {
        for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
            classes[_key] = arguments[_key];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            var _el$classList;

            (_el$classList = el.classList).add.apply(_el$classList, classNames);
        });
        return this;
    }

    function removeClass() {
        for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classes[_key2] = arguments[_key2];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            var _el$classList2;

            (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
        });
        return this;
    }

    function toggleClass() {
        for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            classes[_key3] = arguments[_key3];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            classNames.forEach(function (className) {
                el.classList.toggle(className);
            });
        });
    }

    function hasClass() {
        for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            classes[_key4] = arguments[_key4];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        return arrayFilter(this, function (el) {
            return classNames.filter(function (className) {
                return el.classList.contains(className);
            }).length > 0;
        }).length > 0;
    }

    function attr(attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs);
            return undefined;
        } // Set attrs


        for (var i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
                // String
                this[i].setAttribute(attrs, value);
            } else {
                // Object
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }

        return this;
    }

    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }

        return this;
    }

    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transform = transform;
        }

        return this;
    }

    function transition(duration) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transition = typeof duration !== 'string' ? duration + "ms" : duration;
        }

        return this;
    }

    function on() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) return;
            var eventData = e.target.dom7EventData || [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
                var _parents = $(target).parents(); // eslint-disable-line


                for (var k = 0; k < _parents.length; k += 1) {
                    if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
                }
            }
        }

        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            listener.apply(this, eventData);
        }

        var events = eventType.split(' ');
        var j;

        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];

            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    var _event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

                    el.dom7LiveListeners[_event].push({
                        listener: listener,
                        proxyListener: handleLiveEvent
                    });

                    el.addEventListener(_event, handleLiveEvent, capture);
                }
            }
        }

        return this;
    }

    function off() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;
        var events = eventType.split(' ');

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = void 0;

                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }

                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];

                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }

        return this;
    }

    function trigger() {
        var window = getWindow();

        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        var events = args[0].split(' ');
        var eventData = args[1];

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];

                if (window.CustomEvent) {
                    var evt = new window.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true
                    });
                    el.dom7EventData = args.filter(function (data, dataIndex) {
                        return dataIndex > 0;
                    });
                    el.dispatchEvent(evt);
                    el.dom7EventData = [];
                    delete el.dom7EventData;
                }
            }
        }

        return this;
    }

    function transitionEnd(callback) {
        var dom = this;

        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            dom.off('transitionend', fireCallBack);
        }

        if (callback) {
            dom.on('transitionend', fireCallBack);
        }

        return this;
    }

    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles = this.styles();

                return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
            }

            return this[0].offsetWidth;
        }

        return null;
    }

    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles2 = this.styles();

                return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
            }

            return this[0].offsetHeight;
        }

        return null;
    }

    function offset() {
        if (this.length > 0) {
            var window = getWindow();
            var document = getDocument();
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === window ? window.scrollY : el.scrollTop;
            var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }

        return null;
    }

    function styles() {
        var window = getWindow();
        if (this[0]) return window.getComputedStyle(this[0], null);
        return {};
    }

    function css(props, value) {
        var window = getWindow();
        var i;

        if (arguments.length === 1) {
            if (typeof props === 'string') {
                // .css('width')
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                // .css({ width: '100px' })
                for (i = 0; i < this.length; i += 1) {
                    for (var _prop in props) {
                        this[i].style[_prop] = props[_prop];
                    }
                }

                return this;
            }
        }

        if (arguments.length === 2 && typeof props === 'string') {
            // .css('width', '100px')
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }

            return this;
        }

        return this;
    }

    function each(callback) {
        if (!callback) return this;
        this.forEach(function (el, index) {
            callback.apply(el, [el, index]);
        });
        return this;
    }

    function filter(callback) {
        var result = arrayFilter(this, callback);
        return $(result);
    }

    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }

        return this;
    }

    function text(text) {
        if (typeof text === 'undefined') {
            return this[0] ? this[0].textContent.trim() : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }

        return this;
    }

    function is(selector) {
        var window = getWindow();
        var document = getDocument();
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') return false;

        if (typeof selector === 'string') {
            if (el.matches) return el.matches(selector);
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
            if (el.msMatchesSelector) return el.msMatchesSelector(selector);
            compareWith = $(selector);

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        if (selector === document) {
            return el === document;
        }

        if (selector === window) {
            return el === window;
        }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        return false;
    }

    function index() {
        var child = this[0];
        var i;

        if (child) {
            i = 0; // eslint-disable-next-line

            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }

            return i;
        }

        return undefined;
    }

    function eq(index) {
        if (typeof index === 'undefined') return this;
        var length = this.length;

        if (index > length - 1) {
            return $([]);
        }

        if (index < 0) {
            var returnIndex = length + index;
            if (returnIndex < 0) return $([]);
            return $([this[returnIndex]]);
        }

        return $([this[index]]);
    }

    function append() {
        var newChild;
        var document = getDocument();

        for (var k = 0; k < arguments.length; k += 1) {
            newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;

                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }

        return this;
    }

    function prepend(newChild) {
        var document = getDocument();
        var i;
        var j;

        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;

                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }

        return this;
    }

    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return $([this[0].nextElementSibling]);
                }

                return $([]);
            }

            if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.nextElementSibling) {
            var _next = el.nextElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_next).is(selector)) nextEls.push(_next);
            } else nextEls.push(_next);

            el = _next;
        }

        return $(nextEls);
    }

    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];

            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return $([el.previousElementSibling]);
                }

                return $([]);
            }

            if (el.previousElementSibling) return $([el.previousElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.previousElementSibling) {
            var _prev = el.previousElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_prev).is(selector)) prevEls.push(_prev);
            } else prevEls.push(_prev);

            el = _prev;
        }

        return $(prevEls);
    }

    function parent(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }

        return $(parents);
    }

    function parents(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var _parent = this[i].parentNode; // eslint-disable-line

            while (_parent) {
                if (selector) {
                    if ($(_parent).is(selector)) parents.push(_parent);
                } else {
                    parents.push(_parent);
                }

                _parent = _parent.parentNode;
            }
        }

        return $(parents);
    }

    function closest(selector) {
        var closest = this; // eslint-disable-line

        if (typeof selector === 'undefined') {
            return $([]);
        }

        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }

        return closest;
    }

    function find(selector) {
        var foundElements = [];

        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);

            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }

        return $(foundElements);
    }

    function children(selector) {
        var children = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].children;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector || $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }

        return $(children);
    }

    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
        }

        return this;
    }

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        styles: styles,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        filter: filter,
        remove: remove
    };
    Object.keys(Methods).forEach(function (methodName) {
        $.fn[methodName] = Methods[methodName];
    });

    function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
            try {
                object[key] = null;
            } catch (e) {// no getter for object
            }

            try {
                delete object[key];
            } catch (e) {// something got wrong
            }
        });
    }

    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }

        return setTimeout(callback, delay);
    }

    function now() {
        return Date.now();
    }

    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }

        var window = getWindow();
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = window.getComputedStyle(el, null);

        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;

            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(function (a) {
                    return a.replace(',', '.');
                }).join(', ');
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case


            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }

        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }

        return curTransform || 0;
    }

    function isObject$1(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    }

    function extend$1() {
        var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

        for (var i = 1; i < arguments.length; i += 1) {
            var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

            if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));

                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                    if (desc !== undefined && desc.enumerable) {
                        if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            to[nextKey] = {};
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }

        return to;
    }

    function bindModuleMethods(instance, obj) {
        Object.keys(obj).forEach(function (key) {
            if (isObject$1(obj[key])) {
                Object.keys(obj[key]).forEach(function (subKey) {
                    if (typeof obj[key][subKey] === 'function') {
                        obj[key][subKey] = obj[key][subKey].bind(instance);
                    }
                });
            }

            instance[key] = obj[key];
        });
    }

    var support;

    function calcSupport() {
        var window = getWindow();
        var document = getDocument();
        return {
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
            observer: function checkObserver() {
                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
            }(),
            passiveListener: function checkPassiveListener() {
                var supportsPassive = false;

                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        // eslint-disable-next-line
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {// No support
                }

                return supportsPassive;
            }(),
            gestures: function checkGestures() {
                return 'ongesturestart' in window;
            }()
        };
    }

    function getSupport() {
        if (!support) {
            support = calcSupport();
        }

        return support;
    }

    var device;

    function calcDevice(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            userAgent = _ref.userAgent;

        var support = getSupport();
        var window = getWindow();
        var platform = window.navigator.platform;
        var ua = userAgent || window.navigator.userAgent;
        var device = {
            ios: false,
            android: false
        };
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        var windows = platform === 'Win32';
        var macos = platform === 'MacIntel'; // iPadOs 13 fix

        var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768'];

        if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        } // Android


        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }

        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        } // Export object


        return device;
    }

    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }

        if (!device) {
            device = calcDevice(overrides);
        }

        return device;
    }

    var browser;

    function calcBrowser() {
        var window = getWindow();

        function isSafari() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }

        return {
            isEdge: !!window.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
        };
    }

    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }

        return browser;
    }

    var modular = {
        useParams: function useParams(instanceParams) {
            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function (moduleName) {
                var module = instance.modules[moduleName]; // Extend params

                if (module.params) {
                    extend$1(instanceParams, module.params);
                }
            });
        },
        useModules: function useModules(modulesParams) {
            if (modulesParams === void 0) {
                modulesParams = {};
            }

            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function (moduleName) {
                var module = instance.modules[moduleName];
                var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

                if (module.on && instance.on) {
                    Object.keys(module.on).forEach(function (moduleEventName) {
                        instance.on(moduleEventName, module.on[moduleEventName]);
                    });
                } // Module create callback


                if (module.create) {
                    module.create.bind(instance)(moduleParams);
                }
            });
        }
    };

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
        on: function on(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(function (event) {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        },
        once: function once(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;

            function onceHandler() {
                self.off(events, onceHandler);

                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                handler.apply(self, args);
            }

            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny: function onAny(handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';

            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }

            return self;
        },
        offAny: function offAny(handler) {
            var self = this;
            if (!self.eventsAnyListeners) return self;
            var index = self.eventsAnyListeners.indexOf(handler);

            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }

            return self;
        },
        off: function off(events, handler) {
            var self = this;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(function (event) {
                if (typeof handler === 'undefined') {
                    self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(function (eventHandler, index) {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit: function emit() {
            var self = this;
            if (!self.eventsListeners) return self;
            var events;
            var data;
            var context;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }

            data.unshift(context);
            var eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(function (event) {
                if (self.eventsListeners && self.eventsListeners[event]) {
                    var handlers = [];
                    self.eventsListeners[event].forEach(function (eventHandler) {
                        handlers.push(eventHandler);
                    });
                    handlers.forEach(function (eventHandler) {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;

        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }

        if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }

        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        } // Subtract paddings


        width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
        height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        extend$1(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        var swiper = this;
        var window = getWindow();
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl,
            swiperSize = swiper.size,
            rtl = swiper.rtlTranslate,
            wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children("." + swiper.params.slideClass);
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        function slidesForMargin(slideEl, slideIndex) {
            if (!params.cssMode) return true;

            if (slideIndex === slides.length - 1) {
                return false;
            }

            return true;
        }

        var offsetBefore = params.slidesOffsetBefore;

        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;

        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;

        if (typeof swiperSize === 'undefined') {
            return;
        }

        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        }

        swiper.virtualSize = -spaceBetween; // reset margins

        if (rtl) slides.css({
            marginLeft: '',
            marginTop: ''
        });else slides.css({
            marginRight: '',
            marginBottom: ''
        });
        var slidesNumberEvenToRows;

        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }

            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        } // Calc slides


        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);

            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = void 0;
                var column = void 0;
                var row = void 0;

                if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
                    var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
                    var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
                    var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                    row = Math.floor(slideIndexInGroup / columnsInGroup);
                    column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                    slide.css({
                        '-webkit-box-ordinal-group': newSlideOrderIndex,
                        '-moz-box-ordinal-group': newSlideOrderIndex,
                        '-ms-flex-order': newSlideOrderIndex,
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex
                    });
                } else if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - column * slidesPerColumn;

                    if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                        row += 1;

                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - row * slidesPerRow;
                }

                slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
            }

            if (slide.css('display') === 'none') continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                var slideStyles = window.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;

                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }

                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                    // eslint-disable-next-line
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

                        var _boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (_boxSizing && _boxSizing === 'border-box') {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                        }
                    }
                }

                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }

                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }

            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }

            slidesSizesGrid.push(slideSize);

            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }

        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.setWrapperSize) {
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });

            if (params.centeredSlides) {
                newSlidesGrid = [];

                for (var _i = 0; _i < snapGrid.length; _i += 1) {
                    var slidesGridItem = snapGrid[_i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }

                snapGrid = newSlidesGrid;
            }
        } // Remove last grid elements depending on width


        if (!params.centeredSlides) {
            newSlidesGrid = [];

            for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
                var _slidesGridItem = snapGrid[_i2];
                if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

                if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(_slidesGridItem);
                }
            }

            snapGrid = newSlidesGrid;

            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }

        if (snapGrid.length === 0) snapGrid = [0];

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) slides.filter(slidesForMargin).css({
                    marginLeft: spaceBetween + "px"
                });else slides.filter(slidesForMargin).css({
                    marginRight: spaceBetween + "px"
                });
            } else slides.filter(slidesForMargin).css({
                marginBottom: spaceBetween + "px"
            });
        }

        if (params.centeredSlides && params.centeredSlidesBounds) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function (slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            var maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(function (snap) {
                if (snap < 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }

        if (params.centerInsufficientSlides) {
            var _allSlidesSize = 0;
            slidesSizesGrid.forEach(function (slideSizeValue) {
                _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            _allSlidesSize -= params.spaceBetween;

            if (_allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
                snapGrid.forEach(function (snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function (snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }

        extend$1(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }

        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }

        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;

        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        } // Find slides currently in view


        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                swiper.visibleSlides.each(function (slide) {
                    activeSlides.push(slide);
                });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    var index = swiper.activeIndex + i;
                    if (index > swiper.slides.length) break;
                    activeSlides.push(swiper.slides.eq(index)[0]);
                }
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        } // Find new height from highest slide in view


        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        } // Update Height


        if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }

        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        var offsetCenter = -translate;
        if (rtl) offsetCenter = translate; // Visible Slides

        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

            if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }

            slide.progress = rtl ? -slideProgress : slideProgress;
        }

        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
        var swiper = this;

        if (typeof translate === 'undefined') {
            var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }

        var params = swiper.params;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress,
            isBeginning = swiper.isBeginning,
            isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;

        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }

        extend$1(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd
        });
        if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }

        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }

        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex,
            realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
        var activeSlide;

        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
        } else {
            activeSlide = slides.eq(activeIndex);
        } // Active classes


        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            }
        } // Next Slide


        var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        } // Prev Slide


        var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }

        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            }

            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            }
        }

        swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid,
            params = swiper.params,
            previousIndex = swiper.activeIndex,
            previousRealIndex = swiper.realIndex,
            previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;

        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            } // Normalize slideIndex


            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
            }
        }

        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }

        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }

            return;
        } // Get real index


        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        extend$1(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');

        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }

        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest("." + params.slideClass)[0];
        var slideFound = false;

        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) slideFound = true;
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;

            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }

        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }

        var swiper = this;
        var params = swiper.params,
            rtl = swiper.rtlTranslate,
            translate = swiper.translate,
            $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        if (params.cssMode) {
            return translate;
        }

        var currentTranslate = getTranslate($wrapperEl[0], axis);
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            wrapperEl = swiper.wrapperEl,
            progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
        }

        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (translateBounds === void 0) {
            translateBounds = true;
        }

        var swiper = this;
        var params = swiper.params,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var minTranslate = swiper.minTranslate();
        var maxTranslate = swiper.maxTranslate();
        var newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

        swiper.updateProgress(newTranslate);

        if (params.cssMode) {
            var isH = swiper.isHorizontal();

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;

                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            }
        }

        return true;
    }

    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
        translateTo: translateTo
    };

    function setTransition(duration, byController) {
        var swiper = this;

        if (!swiper.params.cssMode) {
            swiper.$wrapperEl.transition(duration);
        }

        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            params = swiper.params,
            previousIndex = swiper.previousIndex;
        if (params.cssMode) return;

        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }

        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }

            swiper.emit('slideChangeTransitionStart');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            previousIndex = swiper.previousIndex,
            params = swiper.params;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }

            swiper.emit('slideChangeTransitionEnd');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        var params = swiper.params,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            previousIndex = swiper.previousIndex,
            activeIndex = swiper.activeIndex,
            rtl = swiper.rtlTranslate,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex]; // Update progress

        swiper.updateProgress(translate); // Normalize slideIndex

        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        } // Directions locks


        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }

            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) return false;
            }
        }

        var direction;
        if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex); // Update Height

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }

            swiper.updateSlidesClasses();

            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }

            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }

            return false;
        }

        if (params.cssMode) {
            var isH = swiper.isHorizontal();
            var t = -translate;

            if (rtl) {
                t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
            }

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }

        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var newIndex = index;

        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating;
        var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            rtlTranslate = swiper.rtlTranslate;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }

        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function (val) {
            return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

        if (typeof prevSnap === 'undefined' && params.cssMode) {
            snapGrid.forEach(function (snap) {
                if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
            });
        }

        var prevIndex;

        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        }

        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (threshold === void 0) {
            threshold = 0.5;
        }

        var swiper = this;
        var index = swiper.activeIndex;
        var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            var prevSnap = swiper.snapGrid[snapIndex - 1];
            var _currentSnap = swiper.snapGrid[snapIndex];

            if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }

        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;

        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                    nextTick(function () {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
        var slides = $wrapperEl.children("." + params.slideClass);

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
                    $wrapperEl.append(blankNode);
                }

                slides = $wrapperEl.children("." + params.slideClass);
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        swiper.loopedSlides += params.loopAdditionalSlides;

        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (el, index) {
            var slide = $(el);

            if (index < swiper.loopedSlides) {
                appendSlides.push(el);
            }

            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
            }

            slide.attr('data-swiper-slide-index', index);
        });

        for (var _i = 0; _i < appendSlides.length; _i += 1) {
            $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }

        for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
            $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        swiper.emit('beforeLoopFix');
        var activeIndex = swiper.activeIndex,
            slides = swiper.slides,
            loopedSlides = swiper.loopedSlides,
            allowSlidePrev = swiper.allowSlidePrev,
            allowSlideNext = swiper.allowSlideNext,
            snapGrid = swiper.snapGrid,
            rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

        if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;

            var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (_slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }

        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            slides = swiper.slides;
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
        slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;

        if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }

        swiper.el.style.cursor = '';
    }

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params;

        if (params.loop) {
            swiper.loopDestroy();
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.append(slides[i]);
            }
        } else {
            $wrapperEl.append(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }

        var newActiveIndex = activeIndex + 1;

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.prepend(slides[i]);
            }

            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var baseLength = swiper.slides.length;

        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }

        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }

        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];

        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var _i = 0; _i < slides.length; _i += 1) {
                if (slides[_i]) $wrapperEl.append(slides[_i]);
            }

            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }

        for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
            $wrapperEl.append(slidesBuffer[_i2]);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }

            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];

        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }

        swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides
    };

    function onTouchStart(event) {
        var swiper = this;
        var document = getDocument();
        var window = getWindow();
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }

        var e = event;
        if (e.originalEvent) e = e.originalEvent;
        var $targetEl = $(e.target);

        if (params.touchEventsTarget === 'wrapper') {
            if (!$targetEl.closest(swiper.wrapperEl).length) return;
        }

        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
        if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;

        if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
            swiper.allowClick = true;
            return;
        }

        if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return;
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
            return;
        }

        extend$1(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;

        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($targetEl.is(data.formElements)) preventDefault = false;

            if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
                document.activeElement.blur();
            }

            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

            if (params.touchStartForcePreventDefault || shouldPreventDefault) {
                e.preventDefault();
            }
        }

        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var document = getDocument();
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }

            return;
        }

        if (data.isTouchEvent && e.type !== 'touchmove') return;
        var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }

        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;

            if (data.isTouched) {
                extend$1(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }

            return;
        }

        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }

        if (data.isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }

        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }

        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;

            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }

        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }

        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }

        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }

        if (!data.startMoving) {
            return;
        }

        swiper.allowClick = false;

        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }

        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }

            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);

            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }

            data.allowMomentumBounce = false; // Grab Cursor

            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }

            swiper.emit('sliderFirstMove', e);
        }

        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) diff = -diff;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;

        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }

        if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        } // Directions locks


        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }

        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        } // Threshold


        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger || params.cssMode) return; // Update active index in free mode

        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }

        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }

            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        } // Update progress


        swiper.updateProgress(data.currentTranslate); // Update translate

        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate,
            $wrapperEl = swiper.$wrapperEl,
            slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }

        data.allowTouchCallbacks = false;

        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }

            data.isMoved = false;
            data.startMoving = false;
            return;
        } // Return Grab Cursor


        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        } // Time diff


        var touchEndTime = now();
        var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap click', e);

            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }

        data.lastClickTime = now();
        nextTick(function () {
            if (!swiper.destroyed) swiper.allowClick = true;
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }

        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;

        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }

        if (params.cssMode) {
            return;
        }

        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }

                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();
                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;

                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    } // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.


                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }

                swiper.velocity *= params.freeModeMomentumVelocityRatio;
                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;
                var newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;

                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }

                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }

                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeModeSticky) {
                    var nextSlide;

                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }

                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }

                    newPosition = -newPosition;
                }

                if (needsLoopFix) {
                    swiper.once('transitionEnd', function () {
                        swiper.loopFix();
                    });
                } // Fix duration


                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }

                    if (params.freeModeSticky) {
                        // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        swiper.emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        setTimeout(function () {
                            swiper.setTranslate(afterBouncePosition);
                            $wrapperEl.transitionEnd(function () {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);

                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            return;
        } // Find current slide


        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];

        for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

            if (typeof slidesGrid[i + _increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + _increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        } // Find current slide size


        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
            }

            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(stopIndex + increment);
                }

                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;
        var params = swiper.params,
            el = swiper.el;
        if (el && el.offsetWidth === 0) return; // Breakpoints

        if (params.breakpoints) {
            swiper.setBreakpoint();
        } // Save locks


        var allowSlideNext = swiper.allowSlideNext,
            allowSlidePrev = swiper.allowSlidePrev,
            snapGrid = swiper.snapGrid; // Disable locks on resize

        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();

        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run();
        } // Return locks after resize


        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        var swiper = this;

        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();

            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        var swiper = this;
        var wrapperEl = swiper.wrapperEl,
            rtlTranslate = swiper.rtlTranslate;
        swiper.previousTranslate = swiper.translate;

        if (swiper.isHorizontal()) {
            if (rtlTranslate) {
                swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
            } else {
                swiper.translate = -wrapperEl.scrollLeft;
            }
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        } // eslint-disable-next-line


        if (swiper.translate === -0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }

        swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);

        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture: capture
                } : capture);
                el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }

                if (!dummyEventAttached) {
                    document.addEventListener('touchstart', dummyEventListener);
                    dummyEventAttached = true;
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.addEventListener('mousedown', swiper.onTouchStart, false);
                document.addEventListener('mousemove', swiper.onTouchMove, capture);
                document.addEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.addEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.addEventListener('scroll', swiper.onScroll);
        } // Resize handler


        if (params.updateOnWindowResize) {
            swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper.on('observerUpdate', onResize, true);
        }
    }

    function detachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.removeEventListener('mousedown', swiper.onTouchStart, false);
                document.removeEventListener('mousemove', swiper.onTouchMove, capture);
                document.removeEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.removeEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.removeEventListener('scroll', swiper.onScroll);
        } // Resize handler


        swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex,
            initialized = swiper.initialized,
            _swiper$loopedSlides = swiper.loopedSlides,
            loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
            params = swiper.params,
            $el = swiper.$el;
        var breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

        var breakpoint = swiper.getBreakpoint(breakpoints);

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') return;

                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }

            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var wasMultiRow = params.slidesPerColumn > 1;
            var isMultiRow = breakpointParams.slidesPerColumn > 1;

            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(params.containerModifierClass + "multirow");

                if (breakpointParams.slidesPerColumnFill === 'column') {
                    $el.addClass(params.containerModifierClass + "multirow-column");
                }

                swiper.emitContainerClasses();
            }

            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

            if (directionChanged && initialized) {
                swiper.changeDirection();
            }

            extend$1(swiper.params, breakpointParams);
            extend$1(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }

            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoints(breakpoints) {
        var window = getWindow(); // Get breakpoint for window width

        if (!breakpoints) return undefined;
        var breakpoint = false;
        var points = Object.keys(breakpoints).map(function (point) {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
                var minRatio = parseFloat(point.substr(1));
                var value = window.innerHeight * minRatio;
                return {
                    value: value,
                    point: point
                };
            }

            return {
                value: point,
                point: point
            };
        });
        points.sort(function (a, b) {
            return parseInt(a.value, 10) - parseInt(b.value, 10);
        });

        for (var i = 0; i < points.length; i += 1) {
            var _points$i = points[i],
                point = _points$i.point,
                value = _points$i.value;

            if (value <= window.innerWidth) {
                breakpoint = point;
            }
        }

        return breakpoint || 'max';
    }

    var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoints
    };

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames,
            params = swiper.params,
            rtl = swiper.rtl,
            $el = swiper.$el,
            device = swiper.device;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }

        if (params.autoHeight) {
            suffixes.push('autoheight');
        }

        if (rtl) {
            suffixes.push('rtl');
        }

        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');

            if (params.slidesPerColumnFill === 'column') {
                suffixes.push('multirow-column');
            }
        }

        if (device.android) {
            suffixes.push('android');
        }

        if (device.ios) {
            suffixes.push('ios');
        }

        if (params.cssMode) {
            suffixes.push('css-mode');
        }

        suffixes.forEach(function (suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el,
            classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var window = getWindow();
        var image;

        function onReady() {
            if (callback) callback();
        }

        var isPicture = $(imageEl).parent('picture')[0];

        if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
                image = new window.Image();
                image.onload = onReady;
                image.onerror = onReady;

                if (sizes) {
                    image.sizes = sizes;
                }

                if (srcset) {
                    image.srcset = srcset;
                }

                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) swiper.update();
                swiper.emit('imagesReady');
            }
        }

        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
    }

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages
    };

    function checkOverflow() {
        var swiper = this;
        var params = swiper.params;
        var wasLocked = swiper.isLocked;
        var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

        if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
            swiper.isLocked = lastSlidePosition <= swiper.size;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }

        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked; // events

        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            if (swiper.navigation) swiper.navigation.update();
        }
    }

    var checkOverflow$1 = {
        checkOverflow: checkOverflow
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        // NS
        containerModifierClass: 'swiper-container-',
        // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    var prototypes = {
        modular: modular,
        eventsEmitter: eventsEmitter,
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images
    };
    var extendedDefaults = {};

    var Swiper = /*#__PURE__*/function () {
        function Swiper() {
            var el;
            var params;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                el = args[0];
                params = args[1];
            }

            if (!params) params = {};
            params = extend$1({}, params);
            if (el && !params.el) params.el = el; // Swiper Instance

            var swiper = this;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            Object.keys(prototypes).forEach(function (prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });

            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }

            Object.keys(swiper.modules).forEach(function (moduleName) {
                var module = swiper.modules[moduleName];

                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) return;
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = {
                            enabled: true
                        };
                    }

                    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                        params[moduleParamName].enabled = true;
                    }

                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                }
            }); // Extend defaults with modules params

            var swiperParams = extend$1({}, defaults);
            swiper.useParams(swiperParams); // Extend defaults with passed params

            swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend$1({}, swiper.params);
            swiper.passedParams = extend$1({}, params); // add event listeners

            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(function (eventName) {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            } // Save Dom lib


            swiper.$ = $; // Find el

            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function (containerEl) {
                    var newParams = extend$1({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper; // Find Wrapper

            var $wrapperEl;

            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

                $wrapperEl.children = function (options) {
                    return $el.children(options);
                };
            } else {
                $wrapperEl = $el.children("." + swiper.params.wrapperClass);
            } // Extend Swiper


            extend$1(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],
                // Classes
                classNames: [],
                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEvents: function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];

                    if (swiper.support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    }

                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                        cancel: touch[3]
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2]
                    };
                    return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, option, textarea, button, video, label',
                    // Last click time
                    lastClickTime: now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            }); // Install Modules

            swiper.useModules();
            swiper.emit('_swiper'); // Init

            if (swiper.params.init) {
                swiper.init();
            } // Return app instance


            return swiper;
        }

        var _proto = Swiper.prototype;

        _proto.emitContainerClasses = function emitContainerClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            var classes = swiper.el.className.split(' ').filter(function (className) {
                return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', classes.join(' '));
        };

        _proto.emitSlidesClasses = function emitSlidesClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            swiper.slides.each(function (slideEl) {
                var classes = slideEl.className.split(' ').filter(function (className) {
                    return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
                });
                swiper.emit('_slideClass', slideEl, classes.join(' '));
            });
        };

        _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params,
                slides = swiper.slides,
                slidesGrid = swiper.slidesGrid,
                swiperSize = swiper.size,
                activeIndex = swiper.activeIndex;
            var spv = 1;

            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;

                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }

                for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
                    if (slides[_i] && !breakLoop) {
                        slideSize += slides[_i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
                    if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }

            return spv;
        };

        _proto.update = function update() {
            var swiper = this;
            if (!swiper || swiper.destroyed) return;
            var snapGrid = swiper.snapGrid,
                params = swiper.params; // Breakpoints

            if (params.breakpoints) {
                swiper.setBreakpoint();
            }

            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            var translated;

            if (swiper.params.freeMode) {
                setTranslate();

                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }

                if (!translated) {
                    setTranslate();
                }
            }

            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }

            swiper.emit('update');
        };

        _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }

            var swiper = this;
            var currentDirection = swiper.params.direction;

            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }

            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }

            swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.each(function (slideEl) {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        };

        _proto.init = function init() {
            var swiper = this;
            if (swiper.initialized) return;
            swiper.emit('beforeInit'); // Set breakpoint

            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            } // Add Classes


            swiper.addClasses(); // Create loop

            if (swiper.params.loop) {
                swiper.loopCreate();
            } // Update size


            swiper.updateSize(); // Update slides

            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            } // Set Grab Cursor


            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            } // Slide To Initial Slide


            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            } // Attach events


            swiper.attachEvents(); // Init Flag

            swiper.initialized = true; // Emit

            swiper.emit('init');
        };

        _proto.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }

            if (cleanStyles === void 0) {
                cleanStyles = true;
            }

            var swiper = this;
            var params = swiper.params,
                $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides;

            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }

            swiper.emit('beforeDestroy'); // Init Flag

            swiper.initialized = false; // Detach events

            swiper.detachEvents(); // Destroy loop

            if (params.loop) {
                swiper.loopDestroy();
            } // Cleanup styles


            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');

                if (slides && slides.length) {
                    slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                }
            }

            swiper.emit('destroy'); // Detach emitter events

            Object.keys(swiper.eventsListeners).forEach(function (eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                deleteProps(swiper);
            }

            swiper.destroyed = true;
            return null;
        };

        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            extend$1(extendedDefaults, newDefaults);
        };

        Swiper.installModule = function installModule(module) {
            if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
            var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
            Swiper.prototype.modules[name] = module;
        };

        Swiper.use = function use(module) {
            if (Array.isArray(module)) {
                module.forEach(function (m) {
                    return Swiper.installModule(m);
                });
                return Swiper;
            }

            Swiper.installModule(module);
            return Swiper;
        };

        _createClass(Swiper, null, [{
            key: "extendedDefaults",
            get: function get() {
                return extendedDefaults;
            }
        }, {
            key: "defaults",
            get: function get() {
                return defaults;
            }
        }]);

        return Swiper;
    }();

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            extend$1(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('orientationchange');
                    }
                }
            });
        },
        on: {
            init: function init(swiper) {
                var window = getWindow(); // Emit resize

                window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

                window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy(swiper) {
                var window = getWindow();
                window.removeEventListener('resize', swiper.resize.resizeHandler);
                window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            }
        }
    };

    var Observer = {
        attach: function attach(target, options) {
            if (options === void 0) {
                options = {};
            }

            var window = getWindow();
            var swiper = this;
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }

                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(observerUpdate);
                } else {
                    window.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!swiper.support.observer || !swiper.params.observer) return;

            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();

                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            } // Observe container


            swiper.observer.attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            }); // Observe wrapper

            swiper.observer.attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function (observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        }
    };
    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                observer: _extends(_extends({}, Observer), {}, {
                    observers: []
                })
            });
        },
        on: {
            init: function init(swiper) {
                swiper.observer.init();
            },
            destroy: function destroy(swiper) {
                swiper.observer.destroy();
            }
        }
    };

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var _swiper$params = swiper.params,
                slidesPerView = _swiper$params.slidesPerView,
                slidesPerGroup = _swiper$params.slidesPerGroup,
                centeredSlides = _swiper$params.centeredSlides;
            var _swiper$params$virtua = swiper.params.virtual,
                addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
                addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
            var _swiper$virtual = swiper.virtual,
                previousFrom = _swiper$virtual.from,
                previousTo = _swiper$virtual.to,
                slides = _swiper$virtual.slides,
                previousSlidesGrid = _swiper$virtual.slidesGrid,
                renderSlide = _swiper$virtual.renderSlide,
                previousOffset = _swiper$virtual.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;
            var offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            var slidesAfter;
            var slidesBefore;

            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = slidesPerGroup + addSlidesBefore;
            }

            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            extend$1(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, offset + "px");
                }

                swiper.updateProgress();
                return;
            }

            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: function getSlides() {
                        var slidesToRender = [];

                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }

                        return slidesToRender;
                    }()
                });

                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                }

                return;
            }

            var prependIndexes = [];
            var appendIndexes = [];

            if (force) {
                swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
                    }
                }
            }

            for (var _i = 0; _i < slides.length; _i += 1) {
                if (_i >= from && _i <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(_i);
                    } else {
                        if (_i > previousTo) appendIndexes.push(_i);
                        if (_i < previousFrom) prependIndexes.push(_i);
                    }
                }
            }

            appendIndexes.forEach(function (index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function (a, b) {
                return b - a;
            }).forEach(function (index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;

            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }

            var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
            if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
            if (params.cache) swiper.virtual.cache[index] = $slideEl;
            return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
            var swiper = this;

            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }

            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var newActiveIndex = activeIndex + 1;
            var numberOfNewSlides = 1;

            if (Array.isArray(slides)) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }

                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }

            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function (cachedIndex) {
                    var $cachedEl = cache[cachedIndex];
                    var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

                    if (cachedElIndex) {
                        $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                    }

                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                });
                swiper.virtual.cache = newCache;
            }

            swiper.virtual.update(true);
            swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
            var swiper = this;
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            var activeIndex = swiper.activeIndex;

            if (Array.isArray(slidesIndexes)) {
                for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);

                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }

                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);

                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }

                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }

            swiper.virtual.update(true);
            swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
            var swiper = this;
            swiper.virtual.slides = [];

            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }

            swiper.virtual.update(true);
            swiper.slideTo(0, 0);
        }
    };
    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                virtual: _extends(_extends({}, Virtual), {}, {
                    slides: swiper.params.virtual.slides,
                    cache: {}
                })
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
                var overwriteParams = {
                    watchSlidesProgress: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);

                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.update();
            }
        }
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var kc = e.keyCode || e.charCode;
            var pageUpDown = swiper.params.keyboard.pageUpDown;
            var isPageUp = pageUpDown && kc === 33;
            var isPageDown = pageUpDown && kc === 34;
            var isArrowLeft = kc === 37;
            var isArrowRight = kc === 39;
            var isArrowUp = kc === 38;
            var isArrowDown = kc === 40; // Directions locks

            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }

            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }

            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }

            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }

            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                var inView = false; // Check that swiper should be inside of visible area of window

                if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
                    return undefined;
                }

                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];

                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        inView = true;
                    }
                }

                if (!inView) return undefined;
            }

            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }

                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }

                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }

            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            var document = getDocument();
            if (swiper.keyboard.enabled) return;
            $(document).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            var document = getDocument();
            if (!swiper.keyboard.enabled) return;
            $(document).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        }
    };
    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                keyboard: _extends({
                    enabled: false
                }, Keyboard)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            }
        }
    };

    function isEventSupported() {
        var document = getDocument();
        var eventName = 'onwheel';
        var isSupported = (eventName in document);

        if (!isSupported) {
            var element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            document.implementation.hasFeature('', '') !== true) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }

    var Mousewheel = {
        lastScrollTime: now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        event: function event() {
            var window = getWindow();
            if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
            return isEventSupported() ? 'wheel' : 'mousewheel';
        },
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
            var sX = 0;
            var sY = 0; // spinX, spinY

            var pX = 0;
            var pY = 0; // pixelX, pixelY
            // Legacy

            if ('detail' in e) {
                sY = e.detail;
            }

            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }

            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }

            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            } // side scrolling on FF with DOMMouseScroll


            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }

            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            } // Fall-back if spin cannot be determined


            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }

            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (swiper.params.cssMode) {
                e.preventDefault();
            }

            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;
            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) return true;
            if (params.invert) delta = -delta;

            if (!swiper.params.freeMode) {
                // Register the new event in a variable which stores the relevant data
                var newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                }; // Keep the most recent events

                var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }

                var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.

                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        swiper.mousewheel.animateSlider(newEvent);
                    }
                } else {
                    swiper.mousewheel.animateSlider(newEvent);
                } // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.


                if (swiper.mousewheel.releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                var _newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
                var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

                if (!ignoreWheelEvents) {
                    swiper.mousewheel.lastEventBeforeSnap = undefined;

                    if (swiper.params.loop) {
                        swiper.loopFix();
                    }

                    var position = swiper.getTranslate() + delta * params.sensitivity;
                    var wasBeginning = swiper.isBeginning;
                    var wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();

                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }

                    if (swiper.params.freeModeSticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(swiper.mousewheel.timeout);
                        swiper.mousewheel.timeout = undefined;
                        var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                        if (_recentWheelEvents.length >= 15) {
                            _recentWheelEvents.shift(); // only store the last N events

                        }

                        var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

                        var firstEvent = _recentWheelEvents[0];

                        _recentWheelEvents.push(_newEvent);

                        if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            _recentWheelEvents.splice(0);
                        } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                            _recentWheelEvents.splice(0);

                            swiper.mousewheel.timeout = nextTick(function () {
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }

                        if (!swiper.mousewheel.timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            swiper.mousewheel.timeout = nextTick(function () {
                                var snapToThreshold = 0.5;
                                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                                _recentWheelEvents.splice(0);

                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 500);
                        }
                    } // Emit event


                    if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                    if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                }
            }

            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            return false;
        },
        animateSlider: function animateSlider(newEvent) {
            var swiper = this;
            var window = getWindow(); // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).

            if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
                // Return false as a default
                return true;
            } // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.


            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    swiper.emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                swiper.emit('scroll', newEvent.raw);
            } // If you got here is because an animation has been triggered so store the current time


            swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

            return false;
        },
        releaseScroll: function releaseScroll(newEvent) {
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }

            return false;
        },
        enable: function enable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (!swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.off(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        }
    };
    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                mousewheel: {
                    enabled: false,
                    lastScrollTime: now(),
                    lastEventBeforeSnap: undefined,
                    recentWheelEvents: [],
                    enable: Mousewheel.enable,
                    disable: Mousewheel.disable,
                    handle: Mousewheel.handle,
                    handleMouseEnter: Mousewheel.handleMouseEnter,
                    handleMouseLeave: Mousewheel.handleMouseLeave,
                    animateSlider: Mousewheel.animateSlider,
                    releaseScroll: Mousewheel.releaseScroll
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                    swiper.mousewheel.disable();
                }

                if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
            },
            destroy: function destroy(swiper) {
                if (swiper.params.cssMode) {
                    swiper.mousewheel.enable();
                }

                if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
            }
        }
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;
            if (swiper.params.loop) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }

                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }

                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) return;
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) return;
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) return;
            var $nextEl;
            var $prevEl;

            if (params.nextEl) {
                $nextEl = $(params.nextEl);

                if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }

            if (params.prevEl) {
                $prevEl = $(params.prevEl);

                if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }

            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }

            extend$1(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var _swiper$navigation2 = swiper.navigation,
                $nextEl = _swiper$navigation2.$nextEl,
                $prevEl = _swiper$navigation2.$prevEl;

            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }

            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        }
    };
    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                navigation: _extends({}, Navigation)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge(swiper) {
                swiper.navigation.update();
            },
            fromEdge: function fromEdge(swiper) {
                swiper.navigation.update();
            },
            destroy: function destroy(swiper) {
                swiper.navigation.destroy();
            },
            click: function click(swiper, e) {
                var _swiper$navigation3 = swiper.navigation,
                    $nextEl = _swiper$navigation3.$nextEl,
                    $prevEl = _swiper$navigation3.$prevEl;

                if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                    var isHidden;

                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }

                    if (isHidden === true) {
                        swiper.emit('navigationShow');
                    } else {
                        swiper.emit('navigationHide');
                    }

                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }

                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            }
        }
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el; // Current/Total

            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

                if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                    current -= slidesLength - swiper.loopedSlides * 2;
                }

                if (current > total - 1) current -= total;
                if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            } // Types


            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;

                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

                        if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }

                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }

                bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

                if ($el.length > 1) {
                    bullets.each(function (bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();

                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }

                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(params.bulletActiveClass + "-main");
                            }

                            if (bulletIndex === firstIndex) {
                                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            }

                            if (bulletIndex === lastIndex) {
                                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    var bulletIndex = $bullet.index();
                    $bullet.addClass(params.bulletActiveClass);

                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);

                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                        }

                        if (swiper.params.loop) {
                            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                                }

                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                            } else {
                                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        } else {
                            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                        }
                    }
                }

                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
                }
            }

            if (params.type === 'fraction') {
                $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
                $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
            }

            if (params.type === 'progressbar') {
                var progressbarDirection;

                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }

                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;

                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }

                $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
            }

            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', $el[0]);
            } else {
                swiper.emit('paginationUpdate', $el[0]);
            }

            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var paginationHTML = '';

            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
                    }
                }

                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find("." + params.bulletClass);
            }

            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
                }

                $el.html(paginationHTML);
            }

            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
                }

                $el.html(paginationHTML);
            }

            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) return;
            var $el = $(params.el);
            if ($el.length === 0) return;

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass("" + params.modifierClass + params.type + "-dynamic");
                swiper.pagination.dynamicBulletIndex = 0;

                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }

            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }

            if (params.clickable) {
                $el.on('click', "." + params.bulletClass, function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                });
            }

            extend$1(swiper.pagination, {
                $el: $el,
                el: $el[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

            if (params.clickable) {
                $el.off('click', "." + params.bulletClass);
            }
        }
    };
    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function formatFractionCurrent(number) {
                    return number;
                },
                formatFractionTotal: function formatFractionTotal(number) {
                    return number;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                // NEW
                lockClass: 'swiper-pagination-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                pagination: _extends({
                    dynamicBulletIndex: 0
                }, Pagination)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy(swiper) {
                swiper.pagination.destroy();
            },
            click: function click(swiper, e) {
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                    var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

                    if (isHidden === true) {
                        swiper.emit('paginationShow');
                    } else {
                        swiper.emit('paginationHide');
                    }

                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }
        }
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate,
                progress = swiper.progress;
            var dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            var params = swiper.params.scrollbar;
            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;

            if (rtl) {
                newPos = -newPos;

                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }

            if (swiper.isHorizontal()) {
                $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
                $dragEl[0].style.width = newSize + "px";
            } else {
                $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
                $dragEl[0].style.height = newSize + "px";
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function () {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;

            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }

            if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
            }

            extend$1(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        getPointerPosition: function getPointerPosition(e) {
            var swiper = this;

            if (swiper.isHorizontal()) {
                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
            }

            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el,
                dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                dragStartPos = scrollbar.dragStartPos;
            var positionRatio;
            positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);

            if (rtl) {
                positionRatio = 1 - positionRatio;
            }

            var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);
            clearTimeout(swiper.scrollbar.dragTimeout);
            $el.transition(0);

            if (params.hide) {
                $el.css('opacity', 1);
            }

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', 'none');
            }

            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            if (!swiper.scrollbar.isTouched) return;
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            if (!swiper.scrollbar.isTouched) return;
            swiper.scrollbar.isTouched = false;

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', '');
                $wrapperEl.transition('');
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = nextTick(function () {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }

            swiper.emit('scrollbarDragEnd', e);

            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;
            var $el = $(params.el);

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

            if ($dragEl.length === 0) {
                $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
                $el.append($dragEl);
            }

            extend$1(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0]
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        }
    };
    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                scrollbar: _extends({
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null
                }, Scrollbar)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update(swiper) {
                swiper.scrollbar.updateSize();
            },
            resize: function resize(swiper) {
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate(swiper) {
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate(swiper) {
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy(swiper) {
                swiper.scrollbar.destroy();
            }
        }
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;
            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;
            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if (x.indexOf('%') >= 0) {
                x = parseInt(x, 10) * progress * rtlFactor + "%";
            } else {
                x = x * progress * rtlFactor + "px";
            }

            if (y.indexOf('%') >= 0) {
                y = parseInt(y, 10) * progress + "%";
            } else {
                y = y * progress + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                $el[0].style.opacity = currentOpacity;
            }

            if (typeof scale === 'undefined' || scale === null) {
                $el.transform("translate3d(" + x + ", " + y + ", 0px)");
            } else {
                var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides,
                progress = swiper.progress,
                snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
                swiper.parallax.setTransform(el, progress);
            });
            slides.each(function (slideEl, slideIndex) {
                var slideProgress = slideEl.progress;

                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }

                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
                    swiper.parallax.setTransform(el, slideProgress);
                });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) {
                duration = this.params.speed;
            }

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                $parallaxEl.transition(parallaxDuration);
            });
        }
    };
    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                parallax: _extends({}, Parallax)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTransition(duration);
            }
        }
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;

            if (!support.gestures) {
                if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
                if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }

            if (gesture.$imageEl) {
                gesture.$imageEl.transition(0);
            }

            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                if (e.type === 'gesturechange') zoom.onGestureStart(e);
                return;
            }

            if (support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
            }

            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
            }

            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
            }

            gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var device = swiper.device;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }

                if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                    return;
                }

                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) gesture.$slideEl = undefined;
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var device = swiper.device;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) return;

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);

                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            } // Define if we need image drag


            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }

                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }

            if (e.cancelable) {
                e.preventDefault();
            }

            e.stopPropagation();
            image.isMoved = true;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
            }

            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
            }

            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
            }

            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
            } // Velocity


            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }

            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY; // Fix duration

            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY; // Define if we need image drag

            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                if (gesture.$imageEl) {
                    gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                }

                if (gesture.$imageWrapEl) {
                    gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                }

                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function _in(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            gesture.$slideEl.addClass("" + params.zoomedSlideClass);
            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }

                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }

                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }

            gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
            gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        out: function out() {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
            gesture.$slideEl = undefined;
        },
        toggleGestures: function toggleGestures(method) {
            var swiper = this;
            var zoom = swiper.zoom;
            var selector = zoom.slideSelector,
                passive = zoom.passiveListener;
            swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
            swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
            swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
        },
        enableGestures: function enableGestures() {
            if (this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = true;
            this.zoom.toggleGestures('on');
        },
        disableGestures: function disableGestures() {
            if (!this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = false;
            this.zoom.toggleGestures('off');
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var support = swiper.support;
            var zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass;
            swiper.zoom.passiveListener = passiveListener;
            swiper.zoom.slideSelector = slideSelector; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) return;
            var support = swiper.support;
            swiper.zoom.enabled = false;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        }
    };
    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                zoom: _extends({
                    enabled: false,
                    scale: 1,
                    currentScale: 1,
                    isScaling: false,
                    gesture: {
                        $slideEl: undefined,
                        slideWidth: undefined,
                        slideHeight: undefined,
                        $imageEl: undefined,
                        $imageWrapEl: undefined,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: undefined,
                        isMoved: undefined,
                        currentX: undefined,
                        currentY: undefined,
                        minX: undefined,
                        minY: undefined,
                        maxX: undefined,
                        maxY: undefined,
                        width: undefined,
                        height: undefined,
                        startX: undefined,
                        startY: undefined,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: undefined,
                        y: undefined,
                        prevPositionX: undefined,
                        prevPositionY: undefined,
                        prevTime: undefined
                    }
                }, Zoom)
            });
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }

                    scale = value;
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy(swiper) {
                swiper.zoom.disable();
            },
            touchStart: function touchStart(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(swiper, e) {
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                    swiper.zoom.onTransitionEnd();
                }
            }
        }
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) {
                loadInDuplicate = true;
            }

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') return;
            if (swiper.slides.length === 0) return;
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
            var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images.push($slideEl[0]);
            }

            if ($images.length === 0) return;
            $images.each(function (imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');
                var $pictureEl = $imageEl.parent('picture');
                swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

                    if (background) {
                        $imageEl.css('background-image', "url(\"" + background + "\")");
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }

                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }

                        if ($pictureEl.length) {
                            $pictureEl.children('source').each(function (sourceEl) {
                                var $source = $(sourceEl);

                                if ($source.attr('data-srcset')) {
                                    $source.attr('srcset', $source.attr('data-srcset'));
                                    $source.removeAttr('data-srcset');
                                }
                            });
                        }

                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find("." + params.preloaderClass).remove();

                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }

                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

                    if (swiper.params.autoHeight) {
                        swiper.updateAutoHeight();
                    }
                });
                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl,
                swiperParams = swiper.params,
                slides = swiper.slides,
                activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;
            var slidesPerView = swiperParams.slidesPerView;

            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
                        return true;
                    }
                } else if (slides[index]) return true;

                return false;
            }

            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }

                return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) swiper.lazy.loadInSlide(i);
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }

            if (params.loadPrevNext) {
                if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                    for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
                        if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
                    } // Prev Slides


                    for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
                        if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
                    }
                } else {
                    var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                    if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                    if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
                }
            }
        }
    };
    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                lazy: _extends({
                    initialImageLoaded: false
                }, Lazy)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll(swiper) {
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart(swiper) {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.cssMode) {
                    swiper.lazy.load();
                }
            }
        }
    };

    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function (array, val) {
                    minIndex = -1;
                    maxIndex = array.length;

                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;

                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }

                    return maxIndex;
                };
            }();

            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.

            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };

            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;

            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(_setTranslate, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            var Swiper = swiper.constructor;

            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out

                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }

                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }

            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var Swiper = swiper.constructor;
            var controlled = swiper.controller.control;
            var i;

            function setControlledTransition(c) {
                c.setTransition(duration, swiper);

                if (duration !== 0) {
                    c.transitionStart();

                    if (c.params.autoHeight) {
                        nextTick(function () {
                            c.updateAutoHeight();
                        });
                    }

                    c.$wrapperEl.transitionEnd(function () {
                        if (!controlled) return;

                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }

                        c.transitionEnd();
                    });
                }
            }

            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'

            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                controller: _extends({
                    control: swiper.params.controller.control
                }, Controller)
            });
        },
        on: {
            update: function update(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(swiper, translate, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(swiper, duration, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            }
        }
    };

    var A11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        makeElNotFocusable: function makeElNotFocusable($el) {
            $el.attr('tabIndex', '-1');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) return;
            var $targetEl = $(e.target);

            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }

                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }

            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }

                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }

            if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) return;
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;
            if (swiper.params.loop || !swiper.navigation) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                    swiper.a11y.makeElNotFocusable($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                    swiper.a11y.makeElFocusable($prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                    swiper.a11y.makeElNotFocusable($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                    swiper.a11y.makeElFocusable($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;

            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function (bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;
            swiper.$el.append(swiper.a11y.liveRegion); // Navigation

            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }

            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }

            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            }
        }
    };
    var A11y$1 = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                a11y: _extends(_extends({}, A11y), {}, {
                    liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
                })
            });
        },
        on: {
            init: function init(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updatePagination();
            },
            destroy: function destroy(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.destroy();
            }
        }
    };

    var History = {
        init: function init() {
            var swiper = this;
            var window = getWindow();
            if (!swiper.params.history) return;

            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }

            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues(swiper.params.url);
            if (!history.paths.key && !history.paths.value) return;
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues(swiper.params.url);
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues(urlOverride) {
            var window = getWindow();
            var location;

            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }

            var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
                return part !== '';
            });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
                key: key,
                value: value
            };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            var window = getWindow();
            if (!swiper.history.initialized || !swiper.params.history.enabled) return;
            var location;

            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }

            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));

            if (!location.pathname.includes(key)) {
                value = key + "/" + value;
            }

            var currentState = window.history.state;

            if (currentState && currentState.value === value) {
                return;
            }

            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value: value
                }, null, value);
            } else {
                window.history.pushState({
                    value: value
                }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;

            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));

                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        }
    };
    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                history: _extends({}, History)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.history.initialized && swiper.params.cssMode) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            }
        }
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var document = getDocument();
            swiper.emit('hashChange');
            var newHash = document.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
                if (typeof newIndex === 'undefined') return;
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
                swiper.emit('hashSet');
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                document.location.hash = hash || '';
                swiper.emit('hashSet');
            }
        },
        init: function init() {
            var swiper = this;
            var document = getDocument();
            var window = getWindow();
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            swiper.hashNavigation.initialized = true;
            var hash = document.location.hash.replace('#', '');

            if (hash) {
                var speed = 0;

                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');

                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }

            if (swiper.params.hashNavigation.watchState) {
                $(window).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (swiper.params.hashNavigation.watchState) {
                $(window).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        }
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                hashNavigation: _extends({
                    initialized: false
                }, HashNavigation)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
                    swiper.hashNavigation.setHash();
                }
            }
        }
    };

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;

            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }

            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = nextTick(function () {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }

                if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') return false;
            if (swiper.autoplay.running) return false;
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) return false;
            if (typeof swiper.autoplay.timeout === 'undefined') return false;

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }

            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) return;
            if (swiper.autoplay.paused) return;
            if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.paused = true;

            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
        onVisibilityChange: function onVisibilityChange() {
            var swiper = this;
            var document = getDocument();

            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
            }

            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
            }
        },
        onTransitionEnd: function onTransitionEnd(e) {
            var swiper = this;
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== swiper.$wrapperEl[0]) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;

            if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
            } else {
                swiper.autoplay.run();
            }
        }
    };
    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                autoplay: _extends(_extends({}, Autoplay), {}, {
                    running: false,
                    paused: false
                })
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                    var document = getDocument();
                    document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
                }
            },
            beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove(swiper) {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            touchEnd: function touchEnd(swiper) {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                    swiper.autoplay.run();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }

                var document = getDocument();
                document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
            }
        }
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                    opacity: slideOpacity
                }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                fadeEffect: _extends({}, Fade)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTransition(duration);
            }
        }
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides,
                swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                rtl = swiper.rtlTranslate,
                swiperSize = swiper.size,
                browser = swiper.browser;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }

                    $cubeShadowEl.css({
                        height: swiperWidth + "px"
                    });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;

                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }

                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);

                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }

                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;

                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }

                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }

                $slideEl.transform(transform);

                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
            }

            $wrapperEl.css({
                '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
                }
            }

            var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        }
    };
    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                cubeEffect: _extends({}, Cube)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "cube");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTransition(duration);
            }
        }
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides,
                rtl = swiper.rtlTranslate;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;

                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }

                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }

                $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                activeIndex = swiper.activeIndex,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false; // eslint-disable-next-line

                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                flipEffect: _extends({}, Flip)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "flip");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTransition(duration);
            }
        }
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                slides = swiper.slides,
                slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth; // Each slide offset from center

            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                var translateZ = -translate * Math.abs(offsetMultiplier);
                var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }

                var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
    };
    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                coverflowEffect: _extends({}, Coverflow)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTransition(duration);
            }
        }
    };

    var Thumbs = {
        init: function init() {
            var swiper = this;
            var thumbsParams = swiper.params.thumbs;
            if (swiper.thumbs.initialized) return false;
            swiper.thumbs.initialized = true;
            var SwiperClass = swiper.constructor;

            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                extend$1(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                extend$1(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
            } else if (isObject$1(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                }));
                swiper.thumbs.swiperCreated = true;
            }

            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
            return true;
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            var slideToIndex;

            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }

            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;

                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix(); // eslint-disable-next-line

                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }

                var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
            }

            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                var direction;

                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix(); // eslint-disable-next-line

                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    } // Find actual thumbs index to slide to


                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }

                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }

                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }

                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            } // Activate thumbs


            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }

            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }

            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.removeClass(thumbActiveClass);

            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
                }
            } else {
                for (var _i = 0; _i < thumbsToActivate; _i += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
                }
            }
        }
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                thumbs: _extends({
                    swiper: null,
                    initialized: false
                }, Thumbs)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                var thumbs = swiper.params.thumbs;
                if (!thumbs || !thumbs.swiper) return;
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            update: function update(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            resize: function resize(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            setTransition: function setTransition(swiper, duration) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy(swiper) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;

                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            }
        }
    };

    // Swiper Class
    var components = [Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    Swiper.use(components);

    return Swiper;

})));
//# sourceMappingURL=swiper-bundle.js.map

(function(factory) {
    /* global define */
    /* istanbul ignore next */
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], factory);
    } else if ( typeof module === 'object' && module.exports ) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var $doc = $(document);
    var $win = $(window);

    var pluginName = 'selectric';
    var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel';
    var eventNamespaceSuffix = '.sl';

    var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
    var diacritics = [
        /[\xE0-\xE5]/g, // a
        /[\xE8-\xEB]/g, // e
        /[\xEC-\xEF]/g, // i
        /[\xF2-\xF6]/g, // o
        /[\xF9-\xFC]/g, // u
        /[\xF1]/g,      // n
        /[\xE7]/g,      // c
        /[\xFD-\xFF]/g  // y
    ];

    /**
     * Create an instance of Selectric
     *
     * @constructor
     * @param {Node} element - The &lt;select&gt; element
     * @param {object}  opts - Options
     */
    var Selectric = function(element, opts) {
        var _this = this;

        _this.element = element;
        _this.$element = $(element);

        _this.state = {
            multiple       : !!_this.$element.attr('multiple'),
            enabled        : false,
            opened         : false,
            currValue      : -1,
            selectedIdx    : -1,
            highlightedIdx : -1
        };

        _this.eventTriggers = {
            open    : _this.open,
            close   : _this.close,
            destroy : _this.destroy,
            refresh : _this.refresh,
            init    : _this.init
        };

        _this.init(opts);
    };

    Selectric.prototype = {
        utils: {
            /**
             * Detect mobile browser
             *
             * @return {boolean}
             */
            isMobile: function() {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
            },

            /**
             * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
             *
             * @param  {string} str - The string to be escaped
             * @return {string}       The string with the special characters escaped
             */
            escapeRegExp: function(str) {
                return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
            },

            /**
             * Replace diacritics
             *
             * @param  {string} str - The string to replace the diacritics
             * @return {string}       The string with diacritics replaced with ascii characters
             */
            replaceDiacritics: function(str) {
                var k = diacritics.length;

                while (k--) {
                    str = str.toLowerCase().replace(diacritics[k], chars[k]);
                }

                return str;
            },

            /**
             * Format string
             * https://gist.github.com/atesgoral/984375
             *
             * @param  {string} f - String to be formated
             * @return {string}     String formated
             */
            format: function(f) {
                var a = arguments; // store outer arguments
                return ('' + f) // force format specifier to String
                    .replace( // replace tokens in format specifier
                        /\{(?:(\d+)|(\w+))\}/g, // match {token} references
                        function(
                            s, // the matched string (ignored)
                            i, // an argument index
                            p // a property name
                        ) {
                            return p && a[1] // if property name and first argument exist
                                ? a[1][p] // return property from first argument
                                : a[i]; // assume argument index and return i-th argument
                        });
            },

            /**
             * Get the next enabled item in the options list.
             *
             * @param  {object} selectItems - The options object.
             * @param  {number}    selected - Index of the currently selected option.
             * @return {object}               The next enabled item.
             */
            nextEnabledItem: function(selectItems, selected) {
                while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {
                    // empty
                }
                return selected;
            },

            /**
             * Get the previous enabled item in the options list.
             *
             * @param  {object} selectItems - The options object.
             * @param  {number}    selected - Index of the currently selected option.
             * @return {object}               The previous enabled item.
             */
            previousEnabledItem: function(selectItems, selected) {
                while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {
                    // empty
                }
                return selected;
            },

            /**
             * Transform camelCase string to dash-case.
             *
             * @param  {string} str - The camelCased string.
             * @return {string}       The string transformed to dash-case.
             */
            toDash: function(str) {
                return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            },

            /**
             * Calls the events registered with function name.
             *
             * @param {string}    fn - The name of the function.
             * @param {number} scope - Scope that should be set on the function.
             */
            triggerCallback: function(fn, scope) {
                var elm = scope.element;
                var func = scope.options['on' + fn];
                var args = [elm].concat([].slice.call(arguments).slice(1));

                if ( $.isFunction(func) ) {
                    func.apply(elm, args);
                }

                $(elm).trigger(pluginName + '-' + this.toDash(fn), args);
            },

            /**
             * Transform array list to concatenated string and remove empty values
             * @param  {array} arr - Class list
             * @return {string}      Concatenated string
             */
            arrayToClassname: function(arr) {
                var newArr = $.grep(arr, function(item) {
                    return !!item;
                });

                return $.trim(newArr.join(' '));
            }
        },

        /** Initializes */
        init: function(opts) {
            var _this = this;

            // Set options
            _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

            _this.utils.triggerCallback('BeforeInit', _this);

            // Preserve data
            _this.destroy(true);

            // Disable on mobile browsers
            if ( _this.options.disableOnMobile && _this.utils.isMobile() ) {
                _this.disableOnMobile = true;
                return;
            }

            // Get classes
            _this.classes = _this.getClassNames();

            // Create elements
            var input              = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
            var items              = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
            var itemsScroll        = $('<div/>',   { 'class': _this.classes.scroll });
            var wrapper            = $('<div/>',   { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
            var label              = $('<span/>',  { 'class': 'label' });
            var outerWrapper       = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
            var hideSelectWrapper  = $('<div/>',   { 'class': _this.classes.hideselect });

            _this.elements = {
                input        : input,
                items        : items,
                itemsScroll  : itemsScroll,
                wrapper      : wrapper,
                label        : label,
                outerWrapper : outerWrapper
            };

            if ( _this.options.nativeOnMobile && _this.utils.isMobile() ) {
                _this.elements.input = undefined;
                hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

                _this.$element.on('change', function() {
                    _this.refresh();
                });
            }

            _this.$element
                .on(_this.eventTriggers)
                .wrap(hideSelectWrapper);

            _this.originalTabindex = _this.$element.prop('tabindex');
            _this.$element.prop('tabindex', -1);

            _this.populate();
            _this.activate();

            _this.utils.triggerCallback('Init', _this);
        },

        /** Activates the plugin */
        activate: function() {
            var _this = this;
            var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
            var originalWidth = _this.$element.width();

            hiddenChildren.removeClass(_this.classes.tempshow);

            _this.utils.triggerCallback('BeforeActivate', _this);

            _this.elements.outerWrapper.prop('class',
                _this.utils.arrayToClassname([
                    _this.classes.wrapper,
                    _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
                    _this.options.responsive ? _this.classes.responsive : ''
                ])
            );

            if ( _this.options.inheritOriginalWidth && originalWidth > 0 ) {
                _this.elements.outerWrapper.width(originalWidth);
            }

            _this.unbindEvents();

            if ( !_this.$element.prop('disabled') ) {
                _this.state.enabled = true;

                // Not disabled, so... Removing disabled class
                _this.elements.outerWrapper.removeClass(_this.classes.disabled);

                // Remove styles from items box
                // Fix incorrect height when refreshed is triggered with fewer options
                _this.$li = _this.elements.items.removeAttr('style').find('li');

                _this.bindEvents();
            } else {
                _this.elements.outerWrapper.addClass(_this.classes.disabled);

                if ( _this.elements.input ) {
                    _this.elements.input.prop('disabled', true);
                }
            }

            _this.utils.triggerCallback('Activate', _this);
        },

        /**
         * Generate classNames for elements
         *
         * @return {object} Classes object
         */
        getClassNames: function() {
            var _this = this;
            var customClass = _this.options.customClass;
            var classesObj = {};

            $.each(classList.split(' '), function(i, currClass) {
                var c = customClass.prefix + currClass;
                classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
            });

            classesObj.prefix = customClass.prefix;

            return classesObj;
        },

        /** Set the label text */
        setLabel: function() {
            var _this = this;
            var labelBuilder = _this.options.labelBuilder;

            if ( _this.state.multiple ) {
                // Make sure currentValues is an array
                var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
                // I'm not happy with this, but currentValues can be an empty
                // array and we need to fallback to the default option.
                currentValues = currentValues.length === 0 ? [0] : currentValues;

                var labelMarkup = $.map(currentValues, function(value) {
                    return $.grep(_this.lookupItems, function(item) {
                        return item.index === value;
                    })[0]; // we don't want nested arrays here
                });

                labelMarkup = $.grep(labelMarkup, function(item) {
                    // Hide default (please choose) if more then one element were selected.
                    // If no option value were given value is set to option text by default
                    if ( labelMarkup.length > 1 || labelMarkup.length === 0 ) {
                        return $.trim(item.value) !== '';
                    }
                    return item;
                });

                labelMarkup = $.map(labelMarkup, function(item) {
                    return $.isFunction(labelBuilder)
                        ? labelBuilder(item)
                        : _this.utils.format(labelBuilder, item);
                });

                // Limit the amount of selected values shown in label
                if ( _this.options.multiple.maxLabelEntries ) {
                    if ( labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ) {
                        labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
                        labelMarkup.push(
                            $.isFunction(labelBuilder)
                                ? labelBuilder({ text: '...' })
                                : _this.utils.format(labelBuilder, { text: '...' }));
                    } else {
                        labelMarkup.slice(labelMarkup.length - 1);
                    }
                }
                _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

            } else {
                var currItem = _this.lookupItems[_this.state.currValue];

                _this.elements.label.html(
                    $.isFunction(labelBuilder)
                        ? labelBuilder(currItem)
                        : _this.utils.format(labelBuilder, currItem)
                );
            }
        },

        /** Get and save the available options */
        populate: function() {
            var _this = this;
            var $options = _this.$element.children();
            var $justOptions = _this.$element.find('option');
            var $selected = $justOptions.filter(':selected');
            var selectedIndex = $justOptions.index($selected);
            var currIndex = 0;
            var emptyValue = (_this.state.multiple ? [] : 0);

            if ( $selected.length > 1 && _this.state.multiple ) {
                selectedIndex = [];
                $selected.each(function() {
                    selectedIndex.push($(this).index());
                });
            }

            _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
            _this.state.selectedIdx = _this.state.currValue;
            _this.state.highlightedIdx = _this.state.currValue;
            _this.items = [];
            _this.lookupItems = [];

            if ( $options.length ) {
                // Build options markup
                $options.each(function(i) {
                    var $elm = $(this);

                    if ( $elm.is('optgroup') ) {

                        var optionsGroup = {
                            element       : $elm,
                            label         : $elm.prop('label'),
                            groupDisabled : $elm.prop('disabled'),
                            items         : []
                        };

                        $elm.children().each(function(i) {
                            var $elm = $(this);

                            optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

                            _this.lookupItems[currIndex] = optionsGroup.items[i];

                            currIndex++;
                        });

                        _this.items[i] = optionsGroup;

                    } else {

                        _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

                        _this.lookupItems[currIndex] = _this.items[i];

                        currIndex++;

                    }
                });

                _this.setLabel();
                _this.elements.items.append( _this.elements.itemsScroll.html( _this.getItemsMarkup(_this.items) ) );
            }
        },

        /**
         * Generate items object data
         * @param  {integer} index      - Current item index
         * @param  {node}    $elm       - Current element node
         * @param  {boolean} isDisabled - Current element disabled state
         * @return {object}               Item object
         */
        getItemData: function(index, $elm, isDisabled) {
            var _this = this;

            return {
                index     : index,
                element   : $elm,
                value     : $elm.val(),
                className : $elm.prop('class'),
                text      : $elm.html(),
                slug      : $.trim(_this.utils.replaceDiacritics($elm.html())),
                alt       : $elm.attr('data-alt'),
                selected  : $elm.prop('selected'),
                disabled  : isDisabled
            };
        },

        /**
         * Generate options markup
         *
         * @param  {object} items - Object containing all available options
         * @return {string}         HTML for the options box
         */
        getItemsMarkup: function(items) {
            var _this = this;
            var markup = '<ul>';

            if ( $.isFunction(_this.options.listBuilder) && _this.options.listBuilder ) {
                items = _this.options.listBuilder(items);
            }

            $.each(items, function(i, elm) {
                if ( elm.label !== undefined ) {

                    markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
                        _this.utils.arrayToClassname([
                            _this.classes.group,
                            elm.groupDisabled ? 'disabled' : '',
                            elm.element.prop('class')
                        ]),
                        _this.classes.grouplabel,
                        elm.element.prop('label')
                    );

                    $.each(elm.items, function(i, elm) {
                        markup += _this.getItemMarkup(elm.index, elm);
                    });

                    markup += '</ul>';

                } else {

                    markup += _this.getItemMarkup(elm.index, elm);

                }
            });

            return markup + '</ul>';
        },

        /**
         * Generate every option markup
         *
         * @param  {number} index    - Index of current item
         * @param  {object} itemData - Current item
         * @return {string}            HTML for the option
         */
        getItemMarkup: function(index, itemData) {
            var _this = this;
            var itemBuilder = _this.options.optionsItemBuilder;
            // limit access to item data to provide a simple interface
            // to most relevant options.
            var filteredItemData = {
                value: itemData.value,
                text : itemData.text,
                slug : itemData.slug,
                index: itemData.index
            };

            return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
                index,
                _this.utils.arrayToClassname([
                    itemData.className,
                    index === _this.items.length - 1  ? 'last'     : '',
                    itemData.disabled                 ? 'disabled' : '',
                    itemData.selected                 ? 'selected' : ''
                ]),
                $.isFunction(itemBuilder)
                    ? _this.utils.format(itemBuilder(itemData, this.$element, index), itemData)
                    : _this.utils.format(itemBuilder, filteredItemData)
            );
        },

        /** Remove events on the elements */
        unbindEvents: function() {
            var _this = this;

            _this.elements.wrapper
                .add(_this.$element)
                .add(_this.elements.outerWrapper)
                .add(_this.elements.input)
                .off(eventNamespaceSuffix);
        },

        /** Bind events on the elements */
        bindEvents: function() {
            var _this = this;

            _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
                $(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

                // Delay close effect when openOnHover is true
                if ( _this.options.openOnHover ) {
                    clearTimeout(_this.closeTimer);

                    if ( e.type === 'mouseleave' ) {
                        _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
                    } else {
                        _this.open();
                    }
                }
            });

            // Toggle open/close
            _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
                _this.state.opened ? _this.close() : _this.open(e);
            });

            // Translate original element focus event to dummy input.
            // Disabled on mobile devices because the default option list isn't
            // shown due the fact that hidden input gets focused
            if ( !(_this.options.nativeOnMobile && _this.utils.isMobile()) ) {
                _this.$element.on('focus' + eventNamespaceSuffix, function() {
                    _this.elements.input.focus();
                });

                _this.elements.input
                    .prop({ tabindex: _this.originalTabindex, disabled: false })
                    .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
                    .on('focusin' + eventNamespaceSuffix, function(e) {
                        _this.elements.outerWrapper.addClass(_this.classes.focus);

                        // Prevent the flicker when focusing out and back again in the browser window
                        _this.elements.input.one('blur', function() {
                            _this.elements.input.blur();
                        });

                        if ( _this.options.openOnFocus && !_this.state.opened ) {
                            _this.open(e);
                        }
                    })
                    .on('focusout' + eventNamespaceSuffix, function() {
                        _this.elements.outerWrapper.removeClass(_this.classes.focus);
                    })
                    .on('input propertychange', function() {
                        var val = _this.elements.input.val();
                        var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

                        // Clear search
                        clearTimeout(_this.resetStr);
                        _this.resetStr = setTimeout(function() {
                            _this.elements.input.val('');
                        }, _this.options.keySearchTimeout);

                        if ( val.length ) {
                            // Search in select options
                            $.each(_this.items, function(i, elm) {
                                if (elm.disabled) {
                                    return;
                                }
                                if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) {
                                    _this.highlight(i);
                                    return false;
                                }
                                if (!elm.alt) {
                                    return;
                                }
                                var altItems = elm.alt.split('|');
                                for (var ai = 0; ai < altItems.length; ai++) {
                                    if (!altItems[ai]) {
                                        break;
                                    }
                                    if (searchRegExp.test(altItems[ai].trim())) {
                                        _this.highlight(i);
                                        return false;
                                    }
                                }
                            });
                        }
                    });
            }

            _this.$li.on({
                // Prevent <input> blur on Chrome
                mousedown: function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                },
                click: function() {
                    _this.select($(this).data('index'));

                    // Chrome doesn't close options box if select is wrapped with a label
                    // We need to 'return false' to avoid that
                    return false;
                }
            });
        },

        /**
         * Behavior when keyboard keys is pressed
         *
         * @param {object} e - Event object
         */
        handleKeys: function(e) {
            var _this = this;
            var key = e.which;
            var keys = _this.options.keys;

            var isPrevKey = $.inArray(key, keys.previous) > -1;
            var isNextKey = $.inArray(key, keys.next) > -1;
            var isSelectKey = $.inArray(key, keys.select) > -1;
            var isOpenKey = $.inArray(key, keys.open) > -1;
            var idx = _this.state.highlightedIdx;
            var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
            var goToItem = 0;

            // Enter / Space
            if ( key === 13 || key === 32 ) {
                e.preventDefault();
            }

            // If it's a directional key
            if ( isPrevKey || isNextKey ) {
                if ( !_this.options.allowWrap && isFirstOrLastItem ) {
                    return;
                }

                if ( isPrevKey ) {
                    goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
                }

                if ( isNextKey ) {
                    goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
                }

                _this.highlight(goToItem);
            }

            // Tab / Enter / ESC
            if ( isSelectKey && _this.state.opened ) {
                _this.select(idx);

                if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
                    _this.close();
                }

                return;
            }

            // Space / Enter / Left / Up / Right / Down
            if ( isOpenKey && !_this.state.opened ) {
                _this.open();
            }
        },

        /** Update the items object */
        refresh: function() {
            var _this = this;

            _this.populate();
            _this.activate();
            _this.utils.triggerCallback('Refresh', _this);
        },

        /** Set options box width/height */
        setOptionsDimensions: function() {
            var _this = this;

            // Calculate options box height
            // Set a temporary class on the hidden parent of the element
            var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
            var maxHeight = _this.options.maxHeight;
            var itemsWidth = _this.elements.items.outerWidth();
            var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

            // Set the dimensions, minimum is wrapper width, expand for long items if option is true
            if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth ) {
                _this.finalWidth = wrapperWidth;
            } else {
                // Make sure the scrollbar width is included
                _this.elements.items.css('overflow', 'scroll');

                // Set a really long width for _this.elements.outerWrapper
                _this.elements.outerWrapper.width(9e4);
                _this.finalWidth = _this.elements.items.width();
                // Set scroll bar to auto
                _this.elements.items.css('overflow', '');
                _this.elements.outerWrapper.width('');
            }

            _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

            // Remove the temporary class
            hiddenChildren.removeClass(_this.classes.tempshow);
        },

        /** Detect if the options box is inside the window */
        isInViewport: function() {
            var _this = this;

            if (_this.options.forceRenderAbove === true) {
                _this.elements.outerWrapper.addClass(_this.classes.above);
            } else if (_this.options.forceRenderBelow === true) {
                _this.elements.outerWrapper.addClass(_this.classes.below);
            } else {
                var scrollTop = $win.scrollTop();
                var winHeight = $win.height();
                var uiPosX = _this.elements.outerWrapper.offset().top;
                var uiHeight = _this.elements.outerWrapper.outerHeight();

                var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
                var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

                // If it does not fit below, only render it
                // above it fit's there.
                // It's acceptable that the user needs to
                // scroll the viewport to see the cut off UI
                var renderAbove = !fitsDown && fitsAbove;
                var renderBelow = !renderAbove;

                _this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
                _this.elements.outerWrapper.toggleClass(_this.classes.below, renderBelow);
            }
        },

        /**
         * Detect if currently selected option is visible and scroll the options box to show it
         *
         * @param {Number|Array} index - Index of the selected items
         */
        detectItemVisibility: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]');

            if ( _this.state.multiple ) {
                // If index is an array, we can assume a multiple select and we
                // want to scroll to the uppermost selected item!
                // Math.min.apply(Math, index) returns the lowest entry in an Array.
                index = ($.isArray(index) && index.length === 0) ? 0 : index;
                index = $.isArray(index) ? Math.min.apply(Math, index) : index;
            }

            var liHeight = $filteredLi.eq(index).outerHeight();
            var liTop = $filteredLi[index].offsetTop;
            var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
            var scrollT = liTop + liHeight * 2;

            _this.elements.itemsScroll.scrollTop(
                scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
                    liTop - liHeight < itemsScrollTop ? liTop - liHeight :
                        itemsScrollTop
            );
        },

        /**
         * Open the select options box
         *
         * @param {Event} e - Event
         */
        open: function(e) {
            var _this = this;

            if ( _this.options.nativeOnMobile && _this.utils.isMobile()) {
                return false;
            }

            _this.utils.triggerCallback('BeforeOpen', _this);

            if ( e ) {
                e.preventDefault();
                if (_this.options.stopPropagation) {
                    e.stopPropagation();
                }
            }

            if ( _this.state.enabled ) {
                _this.setOptionsDimensions();

                // Find any other opened instances of select and close it
                $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

                _this.state.opened = true;
                _this.itemsHeight = _this.elements.items.outerHeight();
                _this.itemsInnerHeight = _this.elements.items.height();

                // Toggle options box visibility
                _this.elements.outerWrapper.addClass(_this.classes.open);

                // Give dummy input focus
                _this.elements.input.val('');
                if ( e && e.type !== 'focusin' ) {
                    _this.elements.input.focus();
                }

                // Delayed binds events on Document to make label clicks work
                setTimeout(function() {
                    $doc
                        .on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
                        .on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
                }, 1);

                _this.isInViewport();

                // Prevent window scroll when using mouse wheel inside items box
                if ( _this.options.preventWindowScroll ) {
                    /* istanbul ignore next */
                    $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
                        var orgEvent = e.originalEvent;
                        var scrollTop = $(this).scrollTop();
                        var deltaY = 0;

                        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
                        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
                        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
                        if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

                        if ( scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0 ) {
                            e.preventDefault();
                        }
                    });
                }

                _this.detectItemVisibility(_this.state.selectedIdx);

                _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);

                _this.utils.triggerCallback('Open', _this);
            }
        },

        /** Close the select options box */
        close: function() {
            var _this = this;

            _this.utils.triggerCallback('BeforeClose', _this);

            // Remove custom events on document
            $doc.off(eventNamespaceSuffix);

            // Remove visible class to hide options box
            _this.elements.outerWrapper.removeClass(_this.classes.open);

            _this.state.opened = false;

            _this.utils.triggerCallback('Close', _this);
        },

        /** Select current option and change the label */
        change: function() {
            var _this = this;

            _this.utils.triggerCallback('BeforeChange', _this);

            if ( _this.state.multiple ) {
                // Reset old selected
                $.each(_this.lookupItems, function(idx) {
                    _this.lookupItems[idx].selected = false;
                    _this.$element.find('option').prop('selected', false);
                });

                // Set new selected
                $.each(_this.state.selectedIdx, function(idx, value) {
                    _this.lookupItems[value].selected = true;
                    _this.$element.find('option').eq(value).prop('selected', true);
                });

                _this.state.currValue = _this.state.selectedIdx;

                _this.setLabel();

                _this.utils.triggerCallback('Change', _this);
            } else if ( _this.state.currValue !== _this.state.selectedIdx ) {
                // Apply changed value to original select
                _this.$element
                    .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
                    .data('value', _this.lookupItems[_this.state.selectedIdx].text);

                // Change label text
                _this.setLabel();

                _this.utils.triggerCallback('Change', _this);
            }
        },

        /**
         * Highlight option
         * @param {number} index - Index of the options that will be highlighted
         */
        highlight: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

            _this.utils.triggerCallback('BeforeHighlight', _this);

            // Parameter index is required and should not be a disabled item
            if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
                return;
            }

            $filteredLi
                .eq(_this.state.highlightedIdx = index)
                .addClass('highlighted');

            _this.detectItemVisibility(index);

            _this.utils.triggerCallback('Highlight', _this);
        },

        /**
         * Select option
         *
         * @param {number} index - Index of the option that will be selected
         */
        select: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]');

            _this.utils.triggerCallback('BeforeSelect', _this, index);

            // Parameter index is required and should not be a disabled item
            if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
                return;
            }

            if ( _this.state.multiple ) {
                // Make sure selectedIdx is an array
                _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

                var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
                if ( hasSelectedIndex !== -1 ) {
                    _this.state.selectedIdx.splice(hasSelectedIndex, 1);
                } else {
                    _this.state.selectedIdx.push(index);
                }

                $filteredLi
                    .removeClass('selected')
                    .filter(function(index) {
                        return $.inArray(index, _this.state.selectedIdx) !== -1;
                    })
                    .addClass('selected');
            } else {
                $filteredLi
                    .removeClass('selected')
                    .eq(_this.state.selectedIdx = index)
                    .addClass('selected');
            }

            if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
                _this.close();
            }

            _this.change();

            _this.utils.triggerCallback('Select', _this, index);
        },

        /**
         * Unbind and remove
         *
         * @param {boolean} preserveData - Check if the data on the element should be removed too
         */
        destroy: function(preserveData) {
            var _this = this;

            if ( _this.state && _this.state.enabled ) {
                _this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

                if ( !preserveData ) {
                    _this.$element.removeData(pluginName).removeData('value');
                }

                _this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

                _this.state.enabled = false;
            }
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(args) {
        return this.each(function() {
            var data = $.data(this, pluginName);

            if ( data && !data.disableOnMobile ) {
                (typeof args === 'string' && data[args]) ? data[args]() : data.init(args);
            } else {
                $.data(this, pluginName, new Selectric(this, args));
            }
        });
    };

    /**
     * Default plugin options
     *
     * @type {object}
     */
    $.fn[pluginName].defaults = {
        onChange             : function(elm) { $(elm).change(); },
        maxHeight            : 300,
        keySearchTimeout     : 500,
        arrowButtonMarkup    : '<b class="button">&#x25be;</b>',
        disableOnMobile      : false,
        nativeOnMobile       : true,
        openOnFocus          : true,
        openOnHover          : false,
        hoverIntentTimeout   : 500,
        expandToItemText     : false,
        responsive           : false,
        preventWindowScroll  : true,
        inheritOriginalWidth : false,
        allowWrap            : true,
        forceRenderAbove     : false,
        forceRenderBelow     : false,
        stopPropagation      : true,
        optionsItemBuilder   : '{text}', // function(itemData, element, index)
        labelBuilder         : '{text}', // function(currItem)
        listBuilder          : false,    // function(items)
        keys                 : {
            previous : [37, 38],                 // Left / Up
            next     : [39, 40],                 // Right / Down
            select   : [9, 13, 27],              // Tab / Enter / Escape
            open     : [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
            close    : [9, 27]                   // Tab / Escape
        },
        customClass          : {
            prefix: pluginName,
            camelCase: false
        },
        multiple              : {
            separator: ', ',
            keepMenuOpen: true,
            maxLabelEntries: false
        }
    };
}));

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.WOW = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _class, _temp;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function isIn(needle, haystack) {
        return haystack.indexOf(needle) >= 0;
    }

    function extend(custom, defaults) {
        for (var key in defaults) {
            if (custom[key] == null) {
                var value = defaults[key];
                custom[key] = value;
            }
        }
        return custom;
    }

    function isMobile(agent) {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
        );
    }

    function createEvent(event) {
        var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        var customEvent = void 0;
        if (document.createEvent != null) {
            // W3C DOM
            customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent(event, bubble, cancel, detail);
        } else if (document.createEventObject != null) {
            // IE DOM < 9
            customEvent = document.createEventObject();
            customEvent.eventType = event;
        } else {
            customEvent.eventName = event;
        }

        return customEvent;
    }

    function emitEvent(elem, event) {
        if (elem.dispatchEvent != null) {
            // W3C DOM
            elem.dispatchEvent(event);
        } else if (event in (elem != null)) {
            elem[event]();
        } else if ('on' + event in (elem != null)) {
            elem['on' + event]();
        }
    }

    function addEvent(elem, event, fn) {
        if (elem.addEventListener != null) {
            // W3C DOM
            elem.addEventListener(event, fn, false);
        } else if (elem.attachEvent != null) {
            // IE DOM
            elem.attachEvent('on' + event, fn);
        } else {
            // fallback
            elem[event] = fn;
        }
    }

    function removeEvent(elem, event, fn) {
        if (elem.removeEventListener != null) {
            // W3C DOM
            elem.removeEventListener(event, fn, false);
        } else if (elem.detachEvent != null) {
            // IE DOM
            elem.detachEvent('on' + event, fn);
        } else {
            // fallback
            delete elem[event];
        }
    }

    function getInnerHeight() {
        if ('innerHeight' in window) {
            return window.innerHeight;
        }

        return document.documentElement.clientHeight;
    }

    // Minimalistic WeakMap shim, just in case.
    var WeakMap = window.WeakMap || window.MozWeakMap || function () {
        function WeakMap() {
            _classCallCheck(this, WeakMap);

            this.keys = [];
            this.values = [];
        }

        _createClass(WeakMap, [{
            key: 'get',
            value: function get(key) {
                for (var i = 0; i < this.keys.length; i++) {
                    var item = this.keys[i];
                    if (item === key) {
                        return this.values[i];
                    }
                }
                return undefined;
            }
        }, {
            key: 'set',
            value: function set(key, value) {
                for (var i = 0; i < this.keys.length; i++) {
                    var item = this.keys[i];
                    if (item === key) {
                        this.values[i] = value;
                        return this;
                    }
                }
                this.keys.push(key);
                this.values.push(value);
                return this;
            }
        }]);

        return WeakMap;
    }();

    // Dummy MutationObserver, to avoid raising exceptions.
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
        function MutationObserver() {
            _classCallCheck(this, MutationObserver);

            if (typeof console !== 'undefined' && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }

        _createClass(MutationObserver, [{
            key: 'observe',
            value: function observe() {}
        }]);

        return MutationObserver;
    }(), _class.notSupported = true, _temp);

    // getComputedStyle shim, from http://stackoverflow.com/a/21797294
    var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
        var getComputedStyleRX = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function getPropertyValue(prop) {
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (getComputedStyleRX.test(prop)) {
                    prop.replace(getComputedStyleRX, function (_, _char) {
                        return _char.toUpperCase();
                    });
                }
                var currentStyle = el.currentStyle;

                return (currentStyle != null ? currentStyle[prop] : void 0) || null;
            }
        };
    };

    var WOW = function () {
        function WOW() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            _classCallCheck(this, WOW);

            this.defaults = {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true,
                callback: null,
                scrollContainer: null,
                resetAnimation: true
            };

            this.animate = function animateFactory() {
                if ('requestAnimationFrame' in window) {
                    return function (callback) {
                        return window.requestAnimationFrame(callback);
                    };
                }
                return function (callback) {
                    return callback();
                };
            }();

            this.vendors = ['moz', 'webkit'];

            this.start = this.start.bind(this);
            this.resetAnimation = this.resetAnimation.bind(this);
            this.scrollHandler = this.scrollHandler.bind(this);
            this.scrollCallback = this.scrollCallback.bind(this);
            this.scrolled = true;
            this.config = extend(options, this.defaults);
            if (options.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(options.scrollContainer);
            }
            // Map of elements to animation names:
            this.animationNameCache = new WeakMap();
            this.wowEvent = createEvent(this.config.boxClass);
        }

        _createClass(WOW, [{
            key: 'init',
            value: function init() {
                this.element = window.document.documentElement;
                if (isIn(document.readyState, ['interactive', 'complete'])) {
                    this.start();
                } else {
                    addEvent(document, 'DOMContentLoaded', this.start);
                }
                this.finished = [];
            }
        }, {
            key: 'start',
            value: function start() {
                var _this = this;

                this.stopped = false;
                this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
                this.all = this.boxes.slice(0);
                if (this.boxes.length) {
                    if (this.disabled()) {
                        this.resetStyle();
                    } else {
                        for (var i = 0; i < this.boxes.length; i++) {
                            var box = this.boxes[i];
                            this.applyStyle(box, true);
                        }
                    }
                }
                if (!this.disabled()) {
                    addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                    addEvent(window, 'resize', this.scrollHandler);
                    this.interval = setInterval(this.scrollCallback, 50);
                }
                if (this.config.live) {
                    var mut = new MutationObserver(function (records) {
                        for (var j = 0; j < records.length; j++) {
                            var record = records[j];
                            for (var k = 0; k < record.addedNodes.length; k++) {
                                var node = record.addedNodes[k];
                                _this.doSync(node);
                            }
                        }
                        return undefined;
                    });
                    mut.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                }
            }
        }, {
            key: 'stop',
            value: function stop() {
                this.stopped = true;
                removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                removeEvent(window, 'resize', this.scrollHandler);
                if (this.interval != null) {
                    clearInterval(this.interval);
                }
            }
        }, {
            key: 'sync',
            value: function sync() {
                if (MutationObserver.notSupported) {
                    this.doSync(this.element);
                }
            }
        }, {
            key: 'doSync',
            value: function doSync(element) {
                if (typeof element === 'undefined' || element === null) {
                    element = this.element;
                }
                if (element.nodeType !== 1) {
                    return;
                }
                element = element.parentNode || element;
                var iterable = element.querySelectorAll('.' + this.config.boxClass);
                for (var i = 0; i < iterable.length; i++) {
                    var box = iterable[i];
                    if (!isIn(box, this.all)) {
                        this.boxes.push(box);
                        this.all.push(box);
                        if (this.stopped || this.disabled()) {
                            this.resetStyle();
                        } else {
                            this.applyStyle(box, true);
                        }
                        this.scrolled = true;
                    }
                }
            }
        }, {
            key: 'show',
            value: function show(box) {
                this.applyStyle(box);
                box.className = box.className + ' ' + this.config.animateClass;
                if (this.config.callback != null) {
                    this.config.callback(box);
                }
                emitEvent(box, this.wowEvent);

                if (this.config.resetAnimation) {
                    addEvent(box, 'animationend', this.resetAnimation);
                    addEvent(box, 'oanimationend', this.resetAnimation);
                    addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
                    addEvent(box, 'MSAnimationEnd', this.resetAnimation);
                }

                return box;
            }
        }, {
            key: 'applyStyle',
            value: function applyStyle(box, hidden) {
                var _this2 = this;

                var duration = box.getAttribute('data-wow-duration');
                var delay = box.getAttribute('data-wow-delay');
                var iteration = box.getAttribute('data-wow-iteration');

                return this.animate(function () {
                    return _this2.customStyle(box, hidden, duration, delay, iteration);
                });
            }
        }, {
            key: 'resetStyle',
            value: function resetStyle() {
                for (var i = 0; i < this.boxes.length; i++) {
                    var box = this.boxes[i];
                    box.style.visibility = 'visible';
                }
                return undefined;
            }
        }, {
            key: 'resetAnimation',
            value: function resetAnimation(event) {
                if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                    var target = event.target || event.srcElement;
                    target.className = target.className.replace(this.config.animateClass, '').trim();
                }
            }
        }, {
            key: 'customStyle',
            value: function customStyle(box, hidden, duration, delay, iteration) {
                if (hidden) {
                    this.cacheAnimationName(box);
                }
                box.style.visibility = hidden ? 'hidden' : 'visible';

                if (duration) {
                    this.vendorSet(box.style, { animationDuration: duration });
                }
                if (delay) {
                    this.vendorSet(box.style, { animationDelay: delay });
                }
                if (iteration) {
                    this.vendorSet(box.style, { animationIterationCount: iteration });
                }
                this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });

                return box;
            }
        }, {
            key: 'vendorSet',
            value: function vendorSet(elem, properties) {
                for (var name in properties) {
                    if (properties.hasOwnProperty(name)) {
                        var value = properties[name];
                        elem['' + name] = value;
                        for (var i = 0; i < this.vendors.length; i++) {
                            var vendor = this.vendors[i];
                            elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
                        }
                    }
                }
            }
        }, {
            key: 'vendorCSS',
            value: function vendorCSS(elem, property) {
                var style = getComputedStyle(elem);
                var result = style.getPropertyCSSValue(property);
                for (var i = 0; i < this.vendors.length; i++) {
                    var vendor = this.vendors[i];
                    result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
                }
                return result;
            }
        }, {
            key: 'animationName',
            value: function animationName(box) {
                var aName = void 0;
                try {
                    aName = this.vendorCSS(box, 'animation-name').cssText;
                } catch (error) {
                    // Opera, fall back to plain property value
                    aName = getComputedStyle(box).getPropertyValue('animation-name');
                }

                if (aName === 'none') {
                    return ''; // SVG/Firefox, unable to get animation name?
                }

                return aName;
            }
        }, {
            key: 'cacheAnimationName',
            value: function cacheAnimationName(box) {
                // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
                // box.dataset is not supported for SVG elements in Firefox
                return this.animationNameCache.set(box, this.animationName(box));
            }
        }, {
            key: 'cachedAnimationName',
            value: function cachedAnimationName(box) {
                return this.animationNameCache.get(box);
            }
        }, {
            key: 'scrollHandler',
            value: function scrollHandler() {
                this.scrolled = true;
            }
        }, {
            key: 'scrollCallback',
            value: function scrollCallback() {
                if (this.scrolled) {
                    this.scrolled = false;
                    var results = [];
                    for (var i = 0; i < this.boxes.length; i++) {
                        var box = this.boxes[i];
                        if (box) {
                            if (this.isVisible(box)) {
                                this.show(box);
                                continue;
                            }
                            results.push(box);
                        }
                    }
                    this.boxes = results;
                    if (!this.boxes.length && !this.config.live) {
                        this.stop();
                    }
                }
            }
        }, {
            key: 'offsetTop',
            value: function offsetTop(element) {
                // SVG elements don't have an offsetTop in Firefox.
                // This will use their nearest parent that has an offsetTop.
                // Also, using ('offsetTop' of element) causes an exception in Firefox.
                while (element.offsetTop === undefined) {
                    element = element.parentNode;
                }
                var top = element.offsetTop;
                while (element.offsetParent) {
                    element = element.offsetParent;
                    top += element.offsetTop;
                }
                return top;
            }
        }, {
            key: 'isVisible',
            value: function isVisible(box) {
                var offset = box.getAttribute('data-wow-offset') || this.config.offset;
                var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
                var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
                var top = this.offsetTop(box);
                var bottom = top + box.clientHeight;

                return top <= viewBottom && bottom >= viewTop;
            }
        }, {
            key: 'disabled',
            value: function disabled() {
                return !this.config.mobile && isMobile(navigator.userAgent);
            }
        }]);

        return WOW;
    }();

    exports.default = WOW;
    module.exports = exports['default'];
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('dom is ready')
//     let coverflowEffect = {
//     rotate: 0,
//     stretch: 468,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
// }
// let effect =
// if (screen.width < 767) {
//     effect = 'fade'
//     coverflowEffect = {}

// }




var mainBannerSwiper = new Swiper('.main-banner-swiper-container', {
    spaceBetween: 0,
    loop: true,
    // autoplay: true,
    effect: 'coverflow',
    allowTouchMove: false,
    slidesPerView: 1.2,
    initialSlide: 1.2,
    speed: 500,
    centeredSlides: true,
    navigation: {
        nextEl: '.main-banner .swiper-button-next',
        prevEl: '.main-banner .swiper-button-prev',
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 458,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    fadeEffect: {
        crossFade: false
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            initialSlide: 1,
            coverflowEffect: {
                slideShadows: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: false
            },
        },
        1200: {
            coverflowEffect: {
                rotate: 0,
                stretch: 430,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            fadeEffect: {
                crossFade: false
            },
        },
        // 1300: {
        //     coverflowEffect: {
        //         rotate: 0,
        //         stretch: 430,
        //         depth: 100,
        //         modifier: 1,
        //         slideShadows: false,
        //     },
        //     fadeEffect: {
        //         crossFade: false
        //     },
        // },
        1500: {
            coverflowEffect: {
                rotate: 0,
                stretch: 458,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            fadeEffect: {
                crossFade: false
            },
        }
    }
})

$(window).resize(function() {
   mainBannerSwiper.update();
});

mainBannerSwiper.on('slideChange', function () {
    // this.update();
    let activeSlide = (this.slides[this.realIndex]);
    let activeSlideBackgroundUrl = activeSlide.getAttribute('data-url');
    let mainBannerSlidesImages = document.querySelector('.slide-images');
    Array.from(mainBannerSlidesImages.children).forEach(el => {
        el.classList.remove('active')
    })
    let neededSlide = mainBannerSlidesImages.querySelector(`.${activeSlideBackgroundUrl}`)
    neededSlide.classList.add('active')
    // console.log(neededSlide);
});


function PopUp(togglerClass, popupClass, closingClass, popupsWrapper) {
    this.toggler = document.getElementsByClassName(togglerClass)[0]

    this.popup = document.querySelector(popupClass)
    // console.log(this.popup);
    this.close = this.popup.getElementsByClassName(closingClass)[0]
    this.wrapper = document.getElementsByClassName(popupsWrapper)[0]
    let self = this
    document.addEventListener('touchmove', stopScrolling)

    function stopScrolling(e) {
        if (!e.path.includes(self.popup) && self.popup.classList.contains('active')) {
            e.preventDefault();
        }
    }


    this.close.addEventListener('click', closePopUp)

    function closePopUp(e) {
        self.popup.classList.remove('active');
        self.wrapper.classList.remove('active');
        document.documentElement.classList.remove('overflow-js')
    }

    this.toggler.addEventListener('click', openPopUp)

    function openPopUp() {
        self.wrapper.classList.add('active')
        self.popup.classList.add('active')
        document.documentElement.classList.add('overflow-js')
    }
}

new PopUp(
    'open-auth',
    '.sign-in-modal',
    'close-button',
    'auth-modals'
)

var testimonialsSwiper = new Swiper('.testimonials-slider-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        2000: {
            slidesPerView: 3,
        }
    }
})
var partnersSwiper = new Swiper('.partners-slider-container', {
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.svg-chevron-right-dims',
        prevEl: '.svg-chevron-left-dims',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
})


new WOW().init();
$('.form_select-wrapper select').selectric();
$('.question').click(function () {
    this.classList.toggle('active')
    $(this).next().slideToggle();
})
$('.footer-menu-title').click(function () {
    this.classList.toggle('active')
    $(this).next().slideToggle();
})
    $("li.has-dropdown").click(function(){
        $(this).find('ul.child-list-cities').slideToggle(300);
    });
    $(".open-other-countries").click(function(){
        $(".list-of-countries").addClass("active");
    });
    $(".close-list").click(function(){
        $(this).parent().removeClass("active");
    });
function Burger(burger, menu, parentElement = {}) {
    this.burger = document.querySelector(burger)
    this.menu = document.querySelector(menu)
    let self = this
    this.attribute = `data-burger${Math.random()}`;
    this.burger.setAttribute('data-burger', this.attribute)
    this.menu.setAttribute('data-burger', this.attribute)
    Array.from(this.burger.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', this.attribute)
    })
    Array.from(this.menu.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', this.attribute)
    })

    this.burger.addEventListener('click', activateBurger);

    function activateBurger(e) {
        document.body.classList.add('overflow-js')
        self.menu.classList.toggle('active')
        this.classList.toggle('open')
        window.addEventListener('scroll', noScroll)
    }

    document.addEventListener('click', closeBurger)

    function closeBurger(e) {
        if (
            e.target.getAttribute('data-burger') === self.attribute ||
            e.target.getAttribute('data-burger') === parentElement.attribute
        ) {
            parentElement.burger.classList.add('open')
            parentElement.menu.classList.add('active')
        } else {
            self.burger.classList.remove('open');
            self.menu.classList.remove('active');
            document.body.classList.remove('overflow-js');
        }
    }

    function noScroll(e) {
        // console.log(e)
    }
}

if (screen.width < 991) {
    let h_main = document.querySelector('.h-mail');
    let mainMenu = document.querySelector('.main-menu ul');
    let li = document.createElement('li')
    li.append(h_main)
    mainMenu.append(li)
    // new Burger(
    //     '.burger-wrapper .burger',
    //     '.main-menu'
    // )

}
    if (screen.width < 770) {
        let advantagesSwiper = new Swiper('.advantages-swiper-container', {
            slidesPerView: 1,
            allowTouchMove: false,
            pagination: {
                el: '.advantage-pagination',
                type: 'bullets',
                clickable: true,
            },

        });
    }





function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let controllableDots = document.querySelectorAll('.controllable-dots');
Array.from(controllableDots).forEach(el => {
    let firstIndex = randomInteger(0, el.children.length - 1);
    let secondIndex = randomInteger(0, el.children.length - 1);
    el.children[firstIndex].setAttribute('opacity', 1);
    el.children[firstIndex].setAttribute('fill', '#4C57F4');
    el.children[secondIndex].setAttribute('opacity', 1);
    el.children[secondIndex].setAttribute('fill', '#4C57F4');
})



});
$('.burger-wrapper').click(function(){
    $('.main-menu').toggleClass('active');
    $('.menu-over-close').toggleClass('active');
    $('body').toggleClass('over-active');
    this.classList.toggle('active')
});
$(".menu-over-close").click(function () {
    $('.main-menu').removeClass('active');
    $('.menu-over-close').removeClass('active');
    $('.burger-wrapper').removeClass('active');
    $('body').removeClass('over-active');
    this.classList.toggle('active')
});
var swiper = new Swiper('.parent-carousel .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        990: {
            slidesPerView: 4
        }
    }
});
$(document).on('click', '.virtual-tabs span', function(){
    var tabIndex = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.virtual-switch').fadeOut(400, function(){
        $('.virtual-switch .sw-item').removeClass('active');
        $('.virtual-switch .sw-item').eq(tabIndex).addClass('active');
        $(this).fadeIn(500);
    });
});

var sidebarSwiper = new Swiper('.sideber-slider .swiper-container', {
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.sideber-slider  .swiper-button-next',
        prevEl: '.sideber-slider  .swiper-button-prev',
    },
});
var sidebarSwiper = new Swiper('.single-carousel .swiper-container', {
    slidesPerView: 3,
    autoplay: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.single-carousel .swiper-button-next',
        prevEl: '.single-carousel .swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2
        },
        990: {
            slidesPerView: 3
        }
    }
});

/*setTimeout(function(){ $("body").addClass('page-loaded') }, 2000);*/

$("span.selected-domain").click(function(){
    $(this).parent().toggleClass("active");
});
$("ul.list-domain li").click(function(){
    $(this).parent().parent().removeClass("active");
    $(this).parent().parent().find("span.selected-domain").text($(this).text());
});

$('body').click(function (e) {
    if (!$(e.target).is('.select-ul-field, .select-ul-field *')) {
        $('.select-ul-field').removeClass('active');
    }
});
$('.scrolldown').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#scroll-content").offset().top
    }, 500);
});
