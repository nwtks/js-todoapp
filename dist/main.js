!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";function o(e,t){Array.isArray(t)?t.forEach(function(t){return o(e,t)}):e.push(t)}e.exports=function(e,t){for(var n=[],r=arguments,i=2;i<r.length;i+=1)o(n,r[i]);if("function"==typeof e)return e(t||{},n);var l=document.createElement(e||"div");for(var a in t){var u=t[a];if(null!=u)if("dataset"===a)for(var d in u){var s=u[d];null!=s&&(l.dataset[d]=s)}else if("style"===a)if("string"==typeof u)l.style.cssText=u;else for(var c in u){var f=u[c];null!=f&&(l.style[c]=f)}else a in l||"function"==typeof u?(l[a]=u,!0===u&&l.setAttribute(a.toLowerCase(),"")):l.setAttribute(a,u)}return function e(t,n){n.forEach(function(n){null!=n&&(n.nodeType?t.appendChild(n):"string"==typeof n||"number"==typeof n?t.appendChild(document.createTextNode(n)):Array.isArray(n)&&e(t,n))})}(l,n),l}},function(e,t,n){"use strict";e.exports=function(){var e=Object.create(null),t={on:function(n,o){return e[n]||(e[n]=[]),e[n].push(o),t},off:function(n,o){if(e[n])if(null==o)e[n]=[];else{var r=e[n].indexOf(o);r>=0&&e[n].splice(r,1)}return t},emit:function(n,o){return e[n]&&e[n].forEach(function(e){return e(o)}),t}};return t}},function(e,t,n){"use strict";function o(e){var t=e.tos,n=e.other,o=window.location.hash;if(e.path=o,o){var r=o.split("/");if(r.length)for(var i=0;i<t.length;i+=1){var l=t[i].path;if(r.length===l.length){for(var a=Object.create(null),u=!0,d=0;d<l.length;d+=1){var s=l[d];if(":"===s[0])a[s.substring(1)]=r[d];else if(s!==r[d]){u=!1;break}}if(u)return void t[i].to(a,c)}}}function c(t){e.render=t,e.render()}n({},c)}e.exports=function(){var e={path:null,render:null,tos:[],other:null,route:function(t,n){return t&&n&&("*"===t?e.other=n:e.tos.push({path:t.split("/"),to:n})),e},redirect:function(e){window.location.hash=e},start:function(){window.addEventListener("hashchange",function(){return o(e)}),o(e)}};return e}},function(e,t,n){"use strict";var o=1;function r(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===o){if(function(e,t){var n=e.getAttribute("data-domsame"),o=t.getAttribute("data-domsame");return n&&o&&n===o||t.isSameNode(e)}(e,t))return;if(function(e,t){var n=Object.create(null),o=e.firstChild;for(;o;){var i=o;o=o.nextSibling;var u=l(i);u&&(n[u]=i)}o=e.firstChild;var d=t.firstChild,s=0;for(;d;){s+=1;var c=d;d=d.nextSibling;var f=l(c),v=f?n[f]:null;if(v)delete n[f],v===o?o=o.nextSibling:e.insertBefore(v,o),r(v,c);else if(o){var p=o;o=o.nextSibling,a(n,p)?e.insertBefore(c,p):r(p,c)}else e.appendChild(c)}for(var h in n)e.removeChild(n[h]);var g=e.childNodes.length-s;for(;--g>=0;)e.removeChild(e.lastChild)}(e,t),e.nodeName===t.nodeName)!function(e,t){for(var n=e.attributes,o=n.length-1;o>=0;o-=1){var r=n[o],l=r.namespaceURI,a=r.localName;t.hasAttributeNS(l,a)||e.removeAttributeNS(l,a)}for(var u=t.attributes,d=u.length-1;d>=0;d-=1){var s=u[d],c=s.namespaceURI,f=s.localName,v=t.getAttributeNS(c,f),p=e.getAttributeNS(c,f);v!==p&&e.setAttributeNS(c,f,v)}var h=e.nodeName;if("INPUT"===h){i(e,t,"checked"),i(e,t,"disabled"),i(e,t,"readOnly");var g=t.value;e.value!==g&&(e.value=g),t.hasAttributeNS(null,"value")||e.removeAttribute("value")}else if("TEXTAREA"===h){i(e,t,"disabled"),i(e,t,"readOnly");var m=t.value;e.value!==m&&(e.value=m)}else"OPTION"===h?(i(e,t,"selected"),i(e,t,"disabled")):"SELECT"===h&&i(e,t,"disabled")}(e,t);else{for(;t.lastChild;)t.removeChild(t.lastChild);for(;e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else e.parentNode.replaceChild(t,e)}function i(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n.toLowerCase(),""):e.removeAttribute(n.toLowerCase()))}function l(e){if(e.nodeType===o)return e.getAttribute("data-domkey")}function a(e,t){for(var n in e)if(e[n]===t)return!0;return!1}e.exports=r},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(2),l=n.n(i),a=n(3),u=n.n(a),d=n(0),s=n.n(d),c={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.done})},done:function(e){return e.filter(function(e){return e.done})}};function f(e,t,n){if(e.target.dataset.editing){var o=e.target.value,r=o&&o.trim();r?t.emit("update",{todo:n,title:r}):t.emit("remove",{todo:n})}}var v=function(e){var t=e.emitter,n=e.todos,o=e.editTodo,r=e.visibility,i=c.active(n).length,l=c[r](n);return s()("div",{class:"panel"},s()("div",{class:"panel-heading has-background-info has-text-light"},"Todos"),s()("div",{class:"panel-block","data-domsame":"newTodo"},s()("input",{class:"input",type:"text",placeholder:"What needs to be done?",autofocus:!0,onkeypress:function(e){return function(e,t){if("Enter"===e.key){var n=e.target.value;e.target.value="",t.emit("add",{title:n})}}(e,t)}})),s()("div",{class:"panel-tabs"},["all","active","done"].map(function(e){return s()("a",{class:"is-capitalized"+(r===e?" is-active":""),href:"#/"+e},e)})),s()("label",{class:"panel-block",style:n.length?null:"display:none"},s()("input",{type:"checkbox",checked:n.every(function(e){return e.done}),onchange:function(){return t.emit("toggleAll")}}),"Mark all as done"),l.map(function(e){return s()("div",{class:"panel-block todo-item","data-domkey":"todo-"+e.id},s()("div",{style:e!==o?null:"display:none"},s()("input",{type:"checkbox",checked:e.done,onchange:function(){return t.emit("toggle",{todo:e})}}),s()("label",{class:"todo"+(e.done?" done":""),ondblclick:function(){return t.emit("startEdit",{todo:e})}},e.title)),s()("button",{class:"delete",style:e!==o?null:"display:none",onclick:function(){return t.emit("remove",{todo:e})}}),s()("input",{class:"input",style:e===o?null:"display:none",type:"text",value:o?o.title:null,"data-editing":e===o?"*":null,onblur:function(n){return f(n,t,e)},onkeypress:function(n){return function(e,t,n){var o=e.key;"Enter"===o?f(e,t,n):"Escape"!==o&&"Esc"!==o||t.emit("cancelEdit",{})}(n,t,e)}}))}),s()("div",{class:"panel-block",style:n.length?null:"display:none"},s()("strong",null,i),1===i?" item left":" items left"),s()("div",{class:"panel-block",style:n.length>i?null:"display:none"},s()("button",{class:"button is-primary is-fullwidth",onclick:function(){return t.emit("removeDones")}},"Clear done")))};var p=function(e){return function(t,n,o){var r=v({emitter:n,todos:t.todos,editTodo:t.editTodo,visibility:o}),i=e.lastChild;i?u()(i,r):e.appendChild(r)}},h=window.localStorage,g="js-todoapp";(function(e,t,n,o){n.on("add",function(t){e.add(t.title),o.render()}).on("update",function(t){e.update(t.todo,t.title),e.editTodo=null,o.render()}).on("remove",function(t){e.remove(t.todo),e.editTodo=null,o.render()}).on("removeDones",function(){e.removeDones(),o.render()}).on("toggle",function(t){e.toggle(t.todo),o.render()}).on("toggleAll",function(){e.toggleAll(),o.render()}).on("startEdit",function(t){e.editTodo=t.todo,o.render()}).on("cancelEdit",function(){e.editTodo=null,o.render()}),o.route("#/:vis",function(r,i){return c[r.vis]?i(function(){return t(e,n,r.vis)}):o.redirect("#/all")}).route("*",function(){return o.redirect("#/all")}),e.load(),o.start()})(function(){var e={todos:[],editTodo:null,load:function(){e.todos=JSON.parse(h.getItem(g)||"[]")},save:function(){h.setItem(g,JSON.stringify(e.todos))},add:function(t){var n=t&&t.trim();n&&(e.todos.push({id:Date.now(),title:n,done:!1}),e.save())},update:function(t,n){n&&(t.title=n,e.save())},remove:function(t){e.todos=e.todos.filter(function(e){return e.id!==t.id}),e.save()},removeDones:function(){e.todos=c.active(e.todos),e.save()},toggle:function(t){t.done=!t.done,e.save()},toggleAll:function(){var t=c.done(e.todos).length===e.todos.length;e.todos.forEach(function(e){return e.done=!t}),e.save()}};return e}(),p(document.getElementById("app")),r()(),l()())}]);