!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=Object.create(null),t={on:function(n,o){return e[n]||(e[n]=[]),e[n].push(o),t},off:function(n,o){if(e[n])if(null==o)e[n]=[];else{var i=e[n].indexOf(o);i>=0&&e[n].splice(i,1)}return t},emit:function(n,o){return e[n]&&e[n].forEach(function(e){return e(o)}),t}};return t};function i(e,t){Array.isArray(t)?t.forEach(function(t){return i(e,t)}):e.push(t)}var r=function(e,t){for(var n=[],o=arguments,r=2;r<o.length;r+=1)i(n,o[r]);if("function"==typeof e)return e(t||{},n);var l=document.createElement(e||"div");for(var a in t){var u=t[a];if(null!=u)if("dataset"===a)for(var d in u){var s=u[d];null!=s&&(l.dataset[d]=s)}else if("style"===a)if("string"==typeof u)l.style.cssText=u;else for(var c in u){var f=u[c];null!=f&&(l.style[c]=f)}else a in l||"function"==typeof u?(l[a]=u,!0===u&&l.setAttribute(a.toLowerCase(),"")):l.setAttribute(a,u)}return function e(t,n){n.forEach(function(n){null!=n&&(n.nodeType?t.appendChild(n):"string"==typeof n||"number"==typeof n?t.appendChild(document.createTextNode(n)):Array.isArray(n)&&e(t,n))})}(l,n),l},l=1;function a(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===l){if(function(e,t){var n=e.getAttribute("data-domsame"),o=t.getAttribute("data-domsame");return n&&o&&n===o||t.isSameNode(e)}(e,t))return;if(function(e,t){var n={},o=e.firstChild;for(;o;){var i=o;o=o.nextSibling;var r=d(i);r&&(n[r]=i)}o=e.firstChild;var l=t.firstChild,u=0;for(;l;){u+=1;var c=l;l=l.nextSibling;var f=d(c),v=f?n[f]:null;if(v)delete n[f],v===o?o=o.nextSibling:e.insertBefore(v,o),a(v,c);else if(o){var p=o;o=o.nextSibling,s(n,p)?e.insertBefore(c,p):a(p,c)}else e.appendChild(c)}for(var m in n)e.removeChild(n[m]);var y=e.childNodes.length-u;for(;--y>=0;)e.removeChild(e.lastChild)}(e,t),e.nodeName===t.nodeName)!function(e,t){for(var n=e.attributes,o=n.length-1;o>=0;o-=1){var i=n[o],r=i.namespaceURI,l=i.localName;t.hasAttributeNS(r,l)||e.removeAttributeNS(r,l)}for(var a=t.attributes,d=a.length-1;d>=0;d-=1){var s=a[d],c=s.namespaceURI,f=s.localName,v=t.getAttributeNS(c,f),p=e.getAttributeNS(c,f);v!==p&&e.setAttributeNS(c,f,v)}var m=e.nodeName;if("INPUT"===m){u(e,t,"checked"),u(e,t,"disabled"),u(e,t,"readOnly");var y=t.value;e.value!==y&&(e.value=y),t.hasAttributeNS(null,"value")||e.removeAttribute("value")}else if("TEXTAREA"===m){u(e,t,"disabled"),u(e,t,"readOnly");var b=t.value;e.value!==b&&(e.value=b)}else"OPTION"===m?(u(e,t,"selected"),u(e,t,"disabled")):"SELECT"===m&&u(e,t,"disabled")}(e,t);else{for(var n=t.cloneNode();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else e.parentNode.replaceChild(t,e)}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n.toLowerCase(),""):e.removeAttribute(n.toLowerCase()))}function d(e){if(e.nodeType===l)return e.getAttribute("data-domkey")}function s(e,t){for(var n in e)if(e[n]===t)return!0;return!1}var c=a,f={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.done})},done:function(e){return e.filter(function(e){return e.done})}};function v(e,t,n){if(e.target.dataset.editing){var o=e.target.value,i=o&&o.trim();i?t.emit("update",{todo:n,title:i}):t.emit("remove",{todo:n})}}var p=function(e){return function(t,n){var o=function(e,t){var n=e.todos,o=e.editTodo,i=e.visibility,l=f.active(n).length,a=f[i](n);return r("div",{class:"panel"},r("div",{class:"panel-heading"},"Todos"),r("div",{class:"panel-block","data-domsame":"newTodo"},r("input",{class:"input",type:"text",placeholder:"What needs to be done?",autofocus:!0,onkeypress:function(e){return function(e,t){if("Enter"===e.key){var n=e.target.value;e.target.value="",t.emit("add",{title:n})}}(e,t)}})),r("div",{class:"panel-tabs"},r("a",{class:"all"===i?"is-active":null,href:"#/all"},"All"),r("a",{class:"active"===i?"is-active":null,href:"#/active"},"Active"),r("a",{class:"done"===i?"is-active":null,href:"#/done"},"Done")),r("label",{class:"panel-block",style:n.length?null:"display:none"},r("input",{type:"checkbox",checked:n.every(function(e){return e.done}),onchange:function(){return t.emit("toggleAll")}}),"Mark all as done"),a.map(function(e){return r("div",{class:"panel-block todo-item","data-domkey":"todo-"+e.id},r("div",{style:e!==o?null:"display:none"},r("input",{type:"checkbox",checked:e.done,onchange:function(){return t.emit("toggle",{todo:e})}}),r("label",{class:"todo"+(e.done?" done":""),ondblclick:function(){return t.emit("startEdit",{todo:e})}},e.title)),r("button",{class:"delete",style:e!==o?null:"display:none",onclick:function(){return t.emit("remove",{todo:e})}}),r("input",{class:"input",style:e===o?null:"display:none",type:"text",value:o?o.title:null,"data-editing":e===o?"*":null,onblur:function(n){return v(n,t,e)},onkeypress:function(n){return function(e,t,n){var o=e.key;"Enter"===o?v(e,t,n):"Escape"!==o&&"Esc"!==o||t.emit("cancelEdit",{})}(n,t,e)}}))}),r("div",{class:"panel-block",style:n.length?null:"display:none"},r("strong",null,l),1===l?" item left":" items left"),r("div",{class:"panel-block",style:n.length>l?null:"display:none"},r("button",{class:"button is-link is-fullwidth",onclick:function(){return t.emit("removeDones")}},"Clear done")))}(t,n),i=e.lastChild;i?c(i,o):e.appendChild(o)}},m=window.localStorage,y="js-todoapp";(function(e,t,n){t.on("add",function(o){e.add(o.title),n(e,t)}).on("update",function(o){e.update(o.todo,o.title),e.editTodo=null,n(e,t)}).on("remove",function(o){e.remove(o.todo),e.editTodo=null,n(e,t)}).on("removeDones",function(){e.removeDones(),n(e,t)}).on("toggle",function(o){e.toggle(o.todo),n(e,t)}).on("toggleAll",function(){e.toggleAll(),n(e,t)}).on("startEdit",function(o){e.editTodo=o.todo,n(e,t)}).on("cancelEdit",function(){e.editTodo=null,n(e,t)});var o=function(e,t,n){return function(){var o=window.location.hash.replace(/#\/?/,"");f[o]?e.visibility=o:(window.location.hash="",e.visibility="all"),n(e,t)}}(e,t,n);window.addEventListener("hashchange",o),e.load(),o()})(function(){var e={todos:[],editTodo:null,visibility:null,load:function(){e.todos=JSON.parse(m.getItem(y)||"[]")},save:function(){m.setItem(y,JSON.stringify(e.todos))},add:function(t){var n=t&&t.trim();n&&(e.todos.push({id:Date.now(),title:n,done:!1}),e.save())},update:function(t,n){n&&(t.title=n,e.save())},remove:function(t){e.todos=e.todos.filter(function(e){return e.id!==t.id}),e.save()},removeDones:function(){e.todos=f.active(e.todos),e.save()},toggle:function(t){t.done=!t.done,e.save()},toggleAll:function(){var t=f.done(e.todos).length===e.todos.length;e.todos.forEach(function(e){return e.done=!t}),e.save()}};return e}(),o(),p(document.getElementById("app")))}]);