webpackJsonp([2],{0:function(t,n){},"6Rg5":function(t,n,e){"use strict";n.a={frameWidth:function(t){return t.frame.width},frameHeight:function(t){return t.frame.height},frameBlob:function(t){return t.frame.blob},shaderCode:function(t){return t.frame.shaderCode}}},"6aq2":function(t,n,e){"use strict";function i(t){var n=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),e=n.split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function r(t){var n=Date.now()/1e3-Number(t);return n<3600?a(~~(n/60)," minute"):n<86400?a(~~(n/3600)," hour"):a(~~(n/86400)," day")}function a(t,n){return 1===t?t+n:t+n+"s"}Object.defineProperty(n,"__esModule",{value:!0}),n.host=i,n.timeAgo=r},EeTU:function(t,n){},FOEZ:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r});var i="UPDATE_FRAME_SIZE",r="UPDATE_SHADER_CODE"},IJa5:function(t,n){},IcnI:function(t,n,e){"use strict";function i(){return new a.b.Store({state:{},actions:{},mutations:{},getters:{},modules:{ui:c.a},strict:s,plugins:s?[u()()]:[]})}n.a=i;var r=e("7+uW"),a=e("NYxO"),o=e("sax8"),u=e.n(o),c=e("S40z");r.a.use(a.b);var s=!1},IoXI:function(t,n,e){"use strict";function i(t){var n=t.$options.title;if(n)return"function"==typeof n?n.call(t):n}var r={created:function(){var t=i(this);t&&(this.$ssrContext.title="Vue HN 2.0 | "+t)}},a={mounted:function(){var t=i(this);t&&(document.title="Vue HN 2.0 | "+t)}};n.a="server"===e.i({NODE_ENV:"production"}).VUE_ENV?r:a},KcW0:function(t,n,e){"use strict";function i(t){e("EeTU")}var r=e("wbe0"),a=e("iffO"),o=e("VU/8"),u=i,c=o(r.a,a.a,!1,u,"data-v-5cc62a1e",null);n.a=c.exports},M93x:function(t,n,e){"use strict";function i(t){e("IJa5")}var r=e("xJD8"),a=e("iQ+p"),o=e("VU/8"),u=i,c=o(r.a,a.a,!1,u,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("//Fk"),r=e.n(i),a=e("fZjL"),o=e.n(a),u=e("7+uW"),c=e("M93x"),s=e("IcnI"),f=e("YaEn"),h=e("9JMe"),l=(e.n(h),e("IoXI")),d=e("6aq2"),v=e("MU8w"),m=(e.n(v),e("KcW0")),p=(e("2kyi"),u.a.prototype.$bar=new u.a(m.a).$mount());document.body.appendChild(p.$el),u.a.mixin({beforeRouteUpdate:function(t,n,e){var i=this.$options.asyncData;i?i({store:this.$store,route:t}).then(e).catch(e):e()}}),u.a.config.productionTip=!1,u.a.mixin(l.a),o()(d).forEach(function(t){u.a.filter(t,d[t])});var g=e.i(s.a)(),_=e.i(f.a)();e.i(h.sync)(g,_);var w=new u.a({router:_,store:g,render:function(t){return t(c.a)}});window.__INITIAL_STATE__&&g.replaceState(window.__INITIAL_STATE__),_.onReady(function(){_.beforeResolve(function(t,n,e){var i=_.getMatchedComponents(t),a=_.getMatchedComponents(n),o=!1,u=i.filter(function(t,n){return o||(o=a[n]!==t)}),c=u.map(function(t){return t.asyncData}).filter(function(t){return t});if(!c.length)return e();p.start(),r.a.all(c.map(function(n){return n({store:g,route:t})})).then(function(){p.finish(),e()}).catch(e)}),w.$mount("#app")})},PTN4:function(t,n,e){"use strict";n.a={frame:{renderer:null,repeat:1,delay:100,quality:10,width:120,height:120,blob:null,shaderCode:"\nvec2 uv = vUv;\n\n// float num = 1. + 1. * ( 1.0 + sin(mix(uv.x, uv.y, .5))) / 2.0;\n// float num = 10. + 4. * ( 1.0 + sin(length(vUv + vec2(.5)))) / 2.0;\nfloat num = 2.;\n\n// repeat\nuv = repeat(uv, vec2(num));\n\nfloat ratio = (1.0 + sin(elapsedTime))/ 2.0;\n\n// uv = rotate(uv, -length(vec2(.5) - vUv) * 5.0 * PI - elapsedTime * 3.0);\n\n// float angle = mod( -elapsedTime * 3.0 / num, PI) * num;\n// float angle = mod( 15.0 * PI -elapsedTime * 3.0 / num, PI);\nfloat angle = mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 10.0) / num, PI) * num;\n\nuv = rotate(uv, angle);\n\nc.r = abs(sin(angle + .0));\nc.g = abs(sin(angle + .33 ));\nc.b = abs(sin(angle + .66 ));\n\n// alpha = rect(uv, vec2(0.1, 1.9));\n\n// alpha = (sdHexPrism(vec3(1.0, .0, 1.0), uv));\n// alpha = sdHexPrism(uv.xyx, vec2(1.0, 1.0));\nalpha = rect(vUv, vec2(1.1, 1.9));\n\nif(alpha > 0.999) {\n  c = vec3(0.0);\n  alpha = 1.0;\n  // discard;\n} else {\n  alpha = 1.0;\n}\n"}}},S40z:function(t,n,e){"use strict";var i=e("PTN4"),r=e("ai3+"),a=e("XS/L"),o=e("6Rg5");n.a={state:i.a,getters:o.a,actions:a.a,mutations:r.a}},"XS/L":function(t,n,e){"use strict";var i=e("FOEZ");n.a={updateFrameSize:function(t,n){(0,t.commit)(i.a,{size:n})},updateShaderCode:function(t,n){(0,t.commit)(i.b,{code:n})}}},YaEn:function(t,n,e){"use strict";function i(){return new a.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"*",component:o}]})}n.a=i;var r=e("7+uW"),a=e("/ocq");r.a.use(a.a);var o=function(){return e.e(0).then(e.bind(null,"8kqy"))}},"ai3+":function(t,n,e){"use strict";var i,r=e("bOdI"),a=e.n(r),o=e("FOEZ");n.a=(i={},a()(i,o.a,function(t,n){var e=n.size;t.frame.width=e.width||t.frame.width,t.frame.height=e.height||t.frame.height}),a()(i,o.b,function(t,n){var e=n.code;t.frame.shaderCode=e.code||t.frame.shaderCode}),i)},"iQ+p":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{staticClass:"view"})],1)],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},iffO:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},r=[],a={render:i,staticRenderFns:r};n.a=a},wbe0:function(t,n,e){"use strict";n.a={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},xJD8:function(t,n,e){"use strict";n.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.4787fbd0e4aefced7db2.js.map