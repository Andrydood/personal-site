(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=i(n("q1tI")),o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery;return n||i&&(void 0!==a&&a)}t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),i=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var o=a(n("q1tI")),u=a(n("Xuae")),l=n("lwAK"),c=n("FYa8"),s=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var v=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,i={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,c=v.length;l<c;l++){var s=v[l];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],d=i[s]||new r;d.has(f)?o=!1:(d.add(f),i[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=u.default();function m(e){var t=e.children;return o.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},"8iia":function(e,t,n){var r=n("QMMT"),i=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(i(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),i=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},PQJW:function(e,t,n){var r=n("d04V"),i=n("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("8Kt/"),o=n.n(a),u=(n("RqDy"),i.a.createElement),l=function(e){var t=e.title,n=e.description;return u(o.a,null,u("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),u("title",null,t),n?u("meta",{name:"description",content:n}):null)};l.defaultProps={description:null};var c=l,s=n("CMpC"),f=n.n(s),d=i.a.createElement,v=function(){return d("div",{className:f.a.header},d("div",{className:f.a.logo},"ANDREA CASINO"),d("ul",{className:f.a.links},d("li",{className:f.a.link},d("a",{href:"http://www.github.com/andrydood",rel:"noopener noreferrer",target:"_blank"},"GitHub")),d("li",{className:f.a.link},d("a",{href:"https://www.linkedin.com/in/andrea-casino/",rel:"noopener noreferrer",target:"_blank"},"LinkedIn")),d("li",{className:f.a.link},d("a",{href:"/cv.pdf",rel:"noopener noreferrer",target:"_blank"},"CV")),d("li",{className:f.a.link},d("a",{href:"mailto:andrea.casino.2@gmail.com",rel:"noopener noreferrer",target:"_blank"},"Contact"))))},p=n("Xrd8"),h=n.n(p),m=i.a.createElement,_=function(){return m("div",{className:h.a.body},m("div",{className:h.a.content},m(v,null),m("div",{className:h.a.shape}),m("div",{className:h.a.mainContent},m("div",{className:h.a.name},"Hi",m("br",null),"I'm Andrea"),m("div",{className:h.a.intro},"I'm a 25y/o developer based in London, UK.",m("br",null),m("br",null),"I like to solve problems and make stuff. I also like",m("span",{role:"img","aria-label":"emoji"}," \ud83d\udc39, \ud83c\udf63 and \u2615.")))))},y=i.a.createElement;t.default=function(){return y(r.Fragment,null,y(c,{title:"Andrea Casino"}),y(_,null))}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},TbGu:function(e,t,n){var r=n("fGSI"),i=n("PQJW"),a=n("2PDY");e.exports=function(e){return r(e)||i(e)||a()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),a=n("JB68"),o=n("sNwI"),u=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),s=n("fNZA");i(i.S+i.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,i,f,d=a(e),v="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,m=void 0!==h,_=0,y=s(d);if(m&&(h=r(h,p>2?arguments[2]:void 0,2)),void 0==y||v==Array&&u(y))for(n=new v(t=l(d.length));t>_;_++)c(n,_,m?h(d[_],_):d[_]);else for(f=y.call(d),n=new v;!(i=f.next()).done;_++)c(n,_,m?o(f,h,[i.value,_],!0):i.value);return n.length=_,n}})},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,i=n("oVml"),a=n("XJU/"),o=n("2GTP"),u=n("EXMj"),l=n("oioR"),c=n("MPFp"),s=n("UO39"),f=n("TJWN"),d=n("jmDH"),v=n("6/1s").fastKey,p=n("n3ko"),h=d?"_s":"size",m=function(e,t){var n,r=v(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var s=e((function(e,r){u(e,s,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[h]=0,void 0!=r&&l(r,n,e[c],e)}));return a(s.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=p(this,t),r=m(n,e);if(r){var i=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=i),i&&(i.p=a),n._f==r&&(n._f=i),n._l==r&&(n._l=a),n[h]--}return!!r},forEach:function(e){p(this,t);for(var n,r=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(p(this,t),e)}}),d&&r(s.prototype,"size",{get:function(){return p(this,t)[h]}}),s},def:function(e,t,n){var r,i,a=m(e,t);return a?a.v=n:(e._l=a={i:i=v(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[h]++,"F"!==i&&(e._i[i]=a)),e},getEntry:m,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?s(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,s(1))}),n?"entries":"values",!n,!0),f(t)}}},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),a=n("/+P4"),o=n("K47E"),u=n("WaGi"),l=n("N9n2"),c=n("TbGu"),s=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new s;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function s(e){var u;return r(this,s),u=i(this,a(s).call(this,e)),d&&(t.add(o(u)),n(o(u))),u}return l(s,c),u(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=i(n("q1tI"));t.AmpStateContext=a.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(e,t,n){n("cHUd")("Set")}},[["vlRD",1,2,0,9]]]);