!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("SvgDomArrows",[],e):"object"==typeof exports?exports.SvgDomArrows=e():t.SvgDomArrows=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n="http://www.w3.org/2000/svg",o={TOP_LEFT:"top-left",TOP:"top",TOP_RIGHT:"top-right",RIGHT:"right",BOTTOM_LEFT:"bottom-left",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",LEFT:"left"},i={NORMAL:"normal",STRAIGHT_CURVED:"straight-curved"},u=function(){function t(){}return t.htmlToElements=function(t){var e=document.createElement("template");return e.innerHTML=t,e.content.childNodes},t.createMarkerElement=function(e){t.isDocument();var r=document.createElementNS(n,"marker");return t.applyAttributesToElement(e,r),r},t.createPathElement=function(e){t.isDocument();var r=document.createElementNS(n,"path");return t.applyAttributesToElement(e,r),console.log(r.nodeType),r},t.applyAttributesToElement=function(t,e){t&&Object.keys(t).map((function(r){return e.setAttribute(r,t[r])}))},t.isDocument=function(){if(!document)throw Error("Document is not defined, this library works only on browser environnements.")},t}(),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t){return a(a({},t),function(t){var e=function(t){return(e=t.node)&&"[object Function]"==={}.toString.call(e)?t.node():t.node;var e}(t).getBoundingClientRect();switch(t.direction){case o.TOP_LEFT:return{x:e.x,y:e.y};case o.TOP:return{x:e.x+e.width/2,y:e.y};case o.TOP_RIGHT:return{x:e.x+e.width,y:e.y};case o.RIGHT:return{x:e.x+e.width,y:e.y+e.height/2};case o.BOTTOM_LEFT:return{x:e.x,y:e.y+e.height};case o.BOTTOM:return{x:e.x+e.width/2,y:e.y+e.height};case o.BOTTOM_RIGHT:return{x:e.x+e.width,y:e.y+e.height};case o.LEFT:return{x:e.x,y:e.y+e.height/2};default:throw new Error("unexpected type")}}(t))};var c=function(t){return[t.x,t.y]},f=function(t,e){return{x:t.x+e.width*t.translation[0],y:t.y+e.height*t.translation[1]}},d=function(){return(d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(t,e){return function(t,e){return d(d({},t),{x:t.x-e,y:t.y-e})}(d(d({},t),{x:t.x-e.x,y:t.y-e.y}),-20)},h=function(t,e){return t.reduce((function(t,r){return t?e(t,r):r}))},p=function(t){var e=t.from,r=t.to,n=function(t){var e=t.from,r=t.to,n=t.pathXYPosition;return{width:Math.max(e.x,r.x)-n.x,height:Math.max(e.y,r.y)-n.y}}({from:e,to:r,pathXYPosition:t.pathXYPosition}),o=[];return o.push(e),o.push(f(e,n)),o.push(f(r,n)),o.push(r),function(t){var e=h(t,(function(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y)}}));return t.map((function(t){return d(d({},t),{x:t.x-e.x+10,y:t.y-e.y+10})}))}(o)},y=function(t,e){var r=function(e){return Math.min(t[0][e]-10,t[3][e]-10)},n=window?{x:window.scrollX,y:window.scrollY}:{scrollX:0,scrollY:0};return{x:e.x-r("x")-10+n.x,y:e.y-r("y")-10+n.y}},m=function(t,e,r){var n=function(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y)}}(t,e),o=p({from:l(t,n),to:l(e,n),pathXYPosition:n}),u=h(o,(function(t,e){return{x:Math.max(t.x,e.x),y:Math.max(t.y,e.y)}})),a="";return a=r===i.STRAIGHT_CURVED?function(t,e){var r=(t.x-e.x)/2,n=(t.y-e.y)/2;return"m "+e.x+" ,"+e.y+" c "+r+",0"+(" "+r+",0 "+r+","+n+" 0,"+n)+(" 0,"+n+" "+r+" ,"+n)}(o[0],o[3]):function(t){var e=["M"];return e.push(c(t[0]).toString()),e.push("C"),e.push(c(t[1]).toString()),e.push(","),e.push(c(t[2]).toString()),e.push(","),e.push(c(t[3]).toString()),e.reduce((function(t,e){return t.concat(e)}),[]).join(" ").replace(/ ,/g,",")}(o),{offset:y(o,n),size:{width:u.x+20,height:u.y+20},points:a}},x={id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"12",markerHeight:"12",orient:"auto-start-reverse"},g={d:"M 0 0 L 10 5 L 0 10 z"},v=function(){function t(t){if(void 0===t.className)throw new Error("You must define a className for the arrow.");this.arrowPath=m(s(t.from),s(t.to),t.shapeApparence),this.node=this.drawSvgContent(t,this.arrowPath,t.className)}return t.prototype.drawSvgContent=function(t,e,r){var n=this.createSvg(e,r),o=u.createPathElement({d:e.points,id:r+"__"+Math.floor(100*Math.random()),class:r+"__path"});return n.svgItem.appendChild(o),this.addMarkers(t,o,n.defsRef),n.svgItem},t.prototype.createSvg=function(t,e){var r=document.createElementNS(n,"svg"),o=document.createElementNS(n,"defs");return r.setAttribute("xmlns",n),r.setAttribute("class",e),r.style.left=t.offset.x+"px",r.style.top=t.offset.y+"px",r.style.position="absolute",r.setAttribute("width",t.size.width),r.setAttribute("height",t.size.height),o.setAttribute("id","defs__"+e),r.appendChild(o),{svgItem:r,defsRef:o}},t.prototype.getNode=function(){return this.node},t.prototype.addMarkers=function(t,e,r){if(void 0===t.arrowSettings){var n=u.createMarkerElement(x);n.appendChild(u.createPathElement(g)),r.appendChild(n),e.setAttribute("marker-end","url(#"+x.id+")"),e.setAttribute("marker-start","url(#"+x.id+")")}else{if(t.arrowSettings.markerStart){var o=t.arrowSettings.markerStart;r.appendChild(o),e.setAttribute("marker-start","url(#"+o.id+")")}if(t.arrowSettings.markerEnd){var i=t.arrowSettings.markerEnd;r.appendChild(i),e.setAttribute("marker-end","url(#"+i.id+")")}}},t}();r.d(e,"Arrow",(function(){return v})),r.d(e,"DomUtils",(function(){return u})),r.d(e,"DIRECTION",(function(){return o})),r.d(e,"SHAPES",(function(){return i}))}])}));