webpackJsonp([2],{"+bOk":function(t,e){},"+fg7":function(t,e){},0:function(t,e){},"0tbE":function(t,e){},"1XTk":function(t,e){},"2b9r":function(t,e){},"4/hK":function(t,e){},"6Rg5":function(t,e,n){"use strict";var i=n("FW4k");e.a={isProcessing:function(t){return t.runMode===i.a},isPresenting:function(t){return t.runMode===i.b},runMode:function(t){return t.window.runMode},windowWidth:function(t){return t.window.width},windowHeight:function(t){return t.window.height},isPortrait:function(t){return t.window.width<t.window.height},isLandscape:function(t){return t.window.width>=t.window.height},frameWidth:function(t){return t.frame.width},frameHeight:function(t){return t.frame.height},frameBlob:function(t){return t.frame.blob},shaderCode:function(t){return t.frame.shaderCode}}},"6aq2":function(t,e,n){"use strict";function i(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function s(t){var e=Date.now()/1e3-Number(t);return e<3600?o(~~(e/60)," minute"):e<86400?o(~~(e/3600)," hour"):o(~~(e/86400)," day")}function o(t,e){return 1===t?t+e:t+e+"s"}Object.defineProperty(e,"__esModule",{value:!0}),e.host=i,e.timeAgo=s},"8sUU":function(t,e){},"9ozf":function(t,e){},BEen:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BJxZ"),s=n("g6x8"),o=n("VU/8"),r=o(i.a,s.a,!1,null,null,null);e.default=r.exports},BJxZ:function(t,e,n){"use strict";var i=n("pFYg"),s=n.n(i);window.CodeMirror=n("8U58"),n("4/hK"),n("+fCR"),e.a={name:"codemirror",data:function(){return{content:""}},props:{code:String,value:String,events:Array,unseenLines:Array,marker:Function,loadtheme:{type:Boolean,default:function(){return!0}},debugger:{type:Boolean,default:function(){return!0}},options:{type:Object,required:!0}},created:function(){void 0===this.options.lineNumbers&&(this.options.lineNumbers=!0),void 0===this.options.lineWrapping&&(this.options.lineWrapping=!1),void 0===this.options.mode&&(this.options.mode="text/javascript");var t=this.options.theme,e=this.options.mode,i=this.debugger,o=this.loadtheme,r=!!CodeMirror.modes[e];if(t&&"solarized light"==t&&(t="solarized"),"string"==typeof e){var a=CodeMirror.findModeByMIME(e);e=a?a.mode:a}else if("object"==(void 0===e?"undefined":s()(e)))if(e.name){var a=CodeMirror.findModeByName(e.name);e=a?a.mode:null}else if(e.ext){var a=CodeMirror.findModeByExtension(e.ext);e=a?a.mode:null}else if(e.mime){var a=CodeMirror.findModeByMIME(e.mime);e=a?a.mode:null}else if(e.filename){var a=CodeMirror.findModeByFileName(e.filename);e=a?a.mode:null}e&&"null"!=e||!i||r||console.warn("CodeMirror language mode: "+e+" configuration error (CodeMirror语言模式配置错误，或者不支持此语言) See http://codemirror.net/mode/ for more details."),e&&"null"!==e&&n("ENpB")("./"+e+"/"+e+".js"),t&&o&&n("aHkt")("./"+t+".css")},mounted:function(){var t=this;this.editor=CodeMirror.fromTextArea(this.$el,this.options),this.editor.setValue(this.code||this.value||this.content),this.editor.on("change",function(e){t.content=e.getValue(),t.$emit&&(t.$emit("change",t.content),t.$emit("input",t.content))});var e=["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"];this.events&&this.events.length&&(e=e.concat(this.events));for(var n=0;n<e.length;n++)e.indexOf(e[n])==n&&function(e){t.editor.on(e,function(n,i,s){t.$emit(e,n,i,s)})}(e[n]);this.$emit("ready",this.editor),this.unseenLineMarkers(),window.setTimeout(function(){t.editor.refresh()},0)},beforeDestroy:function(){var t=this.editor.doc.cm.getWrapperElement();t&&t.remove&&t.remove()},watch:{options:{deep:!0,handler:function(t,e){var n;for(n in t)this.editor.setOption(n,t[n])}},code:function(t,e){if(t!==this.editor.getValue()){var n=this.editor.getScrollInfo();this.editor.setValue(t),this.content=t,this.editor.scrollTo(n.left,n.top)}this.unseenLineMarkers()},value:function(t,e){if(t!==this.editor.getValue()){var n=this.editor.getScrollInfo();this.editor.setValue(t),this.content=t,this.editor.scrollTo(n.left,n.top)}this.unseenLineMarkers()}},methods:{refresh:function(){this.editor.refresh()},unseenLineMarkers:function(){var t=this;void 0!==t.unseenLines&&void 0!==t.marker&&t.unseenLines.forEach(function(e){var n=t.editor.lineInfo(e);t.editor.setGutterMarker(e,"breakpoints",n.gutterMarkers?null:t.marker())})}}}},BR0Y:function(t,e){},E2yy:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},s=[],o={render:i,staticRenderFns:s};e.a=o},ENpB:function(t,e,n){function i(t){return n(s(t))}function s(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./apl/apl.js":"qxza","./asciiarmor/asciiarmor.js":"fKDv","./asn.1/asn.1.js":"P89j","./asterisk/asterisk.js":"5YCJ","./brainfuck/brainfuck.js":"77wO","./clike/clike.js":"6S2o","./clojure/clojure.js":"1J1+","./cmake/cmake.js":"3l40","./cobol/cobol.js":"SHcL","./coffeescript/coffeescript.js":"yI/k","./commonlisp/commonlisp.js":"+T+e","./crystal/crystal.js":"Id8r","./css/css.js":"puAj","./cypher/cypher.js":"To3j","./d/d.js":"zdi2","./dart/dart.js":"T43g","./diff/diff.js":"HDE3","./django/django.js":"B5Q8","./dockerfile/dockerfile.js":"bNms","./dtd/dtd.js":"Vcha","./dylan/dylan.js":"V3et","./ebnf/ebnf.js":"+yUg","./ecl/ecl.js":"yP40","./eiffel/eiffel.js":"kaWT","./elm/elm.js":"gO0v","./erlang/erlang.js":"KyD5","./factor/factor.js":"ZZxW","./fcl/fcl.js":"VmZn","./forth/forth.js":"OEOO","./fortran/fortran.js":"SUHZ","./gas/gas.js":"DVrE","./gfm/gfm.js":"bWRU","./gherkin/gherkin.js":"BGqB","./go/go.js":"CQVp","./groovy/groovy.js":"lYxz","./haml/haml.js":"kDpU","./handlebars/handlebars.js":"Qei9","./haskell-literate/haskell-literate.js":"TUpE","./haskell/haskell.js":"ao9a","./haxe/haxe.js":"T0xp","./htmlembedded/htmlembedded.js":"zA3a","./htmlmixed/htmlmixed.js":"8Nur","./http/http.js":"Ssj+","./idl/idl.js":"s5ks","./javascript/javascript.js":"5IAE","./jinja2/jinja2.js":"3h7H","./jsx/jsx.js":"KR8v","./julia/julia.js":"uRaj","./livescript/livescript.js":"SEST","./lua/lua.js":"SN96","./markdown/markdown.js":"f6fj","./mathematica/mathematica.js":"BPpj","./mbox/mbox.js":"g3M4","./meta.js":"+fCR","./mirc/mirc.js":"nngO","./mllike/mllike.js":"YJVH","./modelica/modelica.js":"tbda","./mscgen/mscgen.js":"O099","./mumps/mumps.js":"MIy+","./nginx/nginx.js":"fQr+","./nsis/nsis.js":"qp6r","./ntriples/ntriples.js":"Aju4","./octave/octave.js":"JPpr","./oz/oz.js":"/8wJ","./pascal/pascal.js":"MXNw","./pegjs/pegjs.js":"MJwH","./perl/perl.js":"rQCa","./php/php.js":"c6RA","./pig/pig.js":"AnxN","./powershell/powershell.js":"n04a","./properties/properties.js":"0nxQ","./protobuf/protobuf.js":"UHRe","./pug/pug.js":"PdD+","./puppet/puppet.js":"11SB","./python/python.js":"tWbI","./q/q.js":"LE4k","./r/r.js":"9BoL","./rpm/rpm.js":"QGGy","./rst/rst.js":"A2n/","./ruby/ruby.js":"uOPQ","./rust/rust.js":"9NDn","./sas/sas.js":"uQEz","./sass/sass.js":"7BQ2","./scheme/scheme.js":"l6KL","./shell/shell.js":"PG9i","./sieve/sieve.js":"T01z","./slim/slim.js":"M/P5","./smalltalk/smalltalk.js":"IQG/","./smarty/smarty.js":"qFPF","./solr/solr.js":"Gz0W","./soy/soy.js":"d4f2","./sparql/sparql.js":"0hjm","./spreadsheet/spreadsheet.js":"rHua","./sql/sql.js":"JGZi","./stex/stex.js":"1cvq","./stylus/stylus.js":"yKVp","./swift/swift.js":"uNyq","./tcl/tcl.js":"F9rU","./textile/textile.js":"NnLm","./tiddlywiki/tiddlywiki.js":"ATIm","./tiki/tiki.js":"HVZi","./toml/toml.js":"mcQ8","./tornado/tornado.js":"pjLr","./troff/troff.js":"MrOV","./ttcn-cfg/ttcn-cfg.js":"P/dt","./ttcn/ttcn.js":"su+d","./turtle/turtle.js":"hL2b","./twig/twig.js":"RfqI","./vb/vb.js":"DZXy","./vbscript/vbscript.js":"Vyxb","./velocity/velocity.js":"CdSB","./verilog/verilog.js":"BgqI","./vhdl/vhdl.js":"K/yg","./vue/vue.js":"/9hD","./webidl/webidl.js":"JfGf","./xml/xml.js":"ezqs","./xquery/xquery.js":"zGcu","./yacas/yacas.js":"KXeR","./yaml-frontmatter/yaml-frontmatter.js":"ybz3","./yaml/yaml.js":"uqUb","./z80/z80.js":"3Y8U"};i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="ENpB"},EeTU:function(t,e){},FOEZ:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return c});var i="WINDOW_UPDATE_SIZE",s="UPDATE_FRAME_SIZE",o="RENDER_GIF",r="PRESENT_GIF",a="SET_RUN_MODE_DEFAULT",c="UPDATE_SHADER_CODE"},FW4k:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});var i="RUN_MODE_DEFAULT",s="RUN_MODE_PROCESSING",o="RUN_MODE_GIF_READY"},GggT:function(t,e){},IcnI:function(t,e,n){"use strict";function i(){return new o.b.Store({state:{},actions:{},mutations:{},getters:{},modules:{ui:c.a},strict:u,plugins:u?[a()()]:[]})}e.a=i;var s=n("7+uW"),o=n("NYxO"),r=n("sax8"),a=n.n(r),c=n("S40z");s.a.use(o.b);var u=!0},"Ijt+":function(t,e){},IoXI:function(t,e,n){"use strict";function i(t){var e=t.$options.title;if(e)return"function"==typeof e?e.call(t):e}var s={created:function(){var t=i(this);t&&(this.$ssrContext.title="Vue HN 2.0 | "+t)}},o={mounted:function(){var t=i(this);t&&(document.title="Vue HN 2.0 | "+t)}};e.a="server"===n.i({NODE_ENV:"production"}).VUE_ENV?s:o},JoSM:function(t,e){},K00g:function(t,e){},KcW0:function(t,e,n){"use strict";function i(t){n("EeTU")}var s=n("wbe0"),o=n("iffO"),r=n("VU/8"),a=i,c=r(s.a,o.a,!1,a,"data-v-5cc62a1e",null);e.a=c.exports},LDKD:function(t,e){},M93x:function(t,e,n){"use strict";function i(t){n("JoSM")}var s=n("xJD8"),o=n("E2yy"),r=n("VU/8"),a=i,c=r(s.a,o.a,!1,a,null,null);e.a=c.exports},MPNI:function(t,e){},"Mpj/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),s=n.n(i),o=n("fZjL"),r=n.n(o),a=n("7+uW"),c=n("f90G"),u=n.n(c),f=n("M93x"),l=n("IcnI"),d=n("YaEn"),h=n("9JMe"),m=(n.n(h),n("IoXI")),p=n("6aq2"),j=n("MU8w"),g=(n.n(j),n("KcW0"));n("2kyi");a.a.use(u.a);var v=a.a.prototype.$bar=new a.a(g.a).$mount();document.body.appendChild(v.$el),a.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;i?i({store:this.$store,route:t}).then(n).catch(n):n()}}),a.a.config.productionTip=!1,a.a.mixin(m.a),r()(p).forEach(function(t){a.a.filter(t,p[t])});var b=n.i(l.a)(),w=n.i(d.a)();n.i(h.sync)(b,w);var y=new a.a({router:w,store:b,render:function(t){return t(f.a)}});w.onReady(function(){w.beforeResolve(function(t,e,n){var i=w.getMatchedComponents(t),o=w.getMatchedComponents(e),r=!1,a=i.filter(function(t,e){return r||(r=o[e]!==t)}),c=a.map(function(t){return t.asyncData}).filter(function(t){return t});if(!c.length)return n();v.start(),s.a.all(c.map(function(e){return e({store:b,route:t})})).then(function(){v.finish(),n()}).catch(n)}),y.$mount("#app")})},PTN4:function(t,e,n){"use strict";var i=n("FW4k");e.a={runMode:i.c,window:{width:1,height:1},frame:{renderer:null,repeat:1,delay:100,quality:10,width:320,height:320,blob:null,shaderCode:"\nvoid main() {\n  float elapsedTime = uElapsedTime;\n  float loopRatio = uLoopRatio;\n  vec2 uv = vUv;\n  vec3 color = uColor;\n  float alpha = 1.0;\n\n  // color.g *= mod(uv.x + loopRatio, 1.0);\n  // color.b *= mod(uv.y + loopRatio, 1.0);\n  float num = 4.;\n  uv = rotate(uv, PI * sin(loopRatio*PI));\n  // repeat\n  uv = repeat(uv, vec2(num));\n  float angle = abs(1.0); //, PI);//mod( (loopRatio*PI) , PI);\n  angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (loopRatio*PI) / num, PI) * num;\n  angle = mod( 15.0 * PI + angle / num, PI);\n\n  color.r = abs(sin(angle + .0 * PI));\n  color.g = abs(sin(angle + .33 * PI ));\n  color.b = abs(sin(angle + .66 * PI ));\n\n  gl_FragColor = clamp(vec4( color, alpha), 0.0, 1.0);\n}\n"}}},Q6j7:function(t,e){},R3s6:function(t,e){},S40z:function(t,e,n){"use strict";var i=n("PTN4"),s=n("ai3+"),o=n("XS/L"),r=n("6Rg5");e.a={state:i.a,getters:r.a,actions:o.a,mutations:s.a}},UM8r:function(t,e){},UoAS:function(t,e){},X1Ds:function(t,e){},XQDJ:function(t,e){},"XS/L":function(t,e,n){"use strict";var i=n("FOEZ");e.a={windowUpdateSize:function(t,e){(0,t.commit)(i.a,{size:e})},updateFrameSize:function(t,e){(0,t.commit)(i.b,{size:e})},renderGif:function(t){(0,t.commit)(i.d)},setRunModeDefault:function(t){(0,t.commit)(i.f)},presentGif:function(t,e){(0,t.commit)(i.e,{blob:e})},updateShaderCode:function(t,e){(0,t.commit)(i.c,{code:e})}}},Xdwu:function(t,e){},Y0SK:function(t,e){},Y7A8:function(t,e){},YaEn:function(t,e,n){"use strict";function i(){return new o.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"*",component:r}]})}e.a=i;var s=n("7+uW"),o=n("/ocq");s.a.use(o.a);var r=function(){return n.e(0).then(n.bind(null,"8kqy"))}},ZrWO:function(t,e){},aHkt:function(t,e,n){function i(t){return n(s(t))}function s(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./3024-day.css":"tPrY","./3024-night.css":"UoAS","./abcdef.css":"9ozf","./ambiance-mobile.css":"ZrWO","./ambiance.css":"vX90","./base16-dark.css":"jGSh","./base16-light.css":"x15G","./bespin.css":"R3s6","./blackboard.css":"kSL7","./cobalt.css":"t9xi","./colorforth.css":"Q6j7","./dracula.css":"8sUU","./duotone-dark.css":"n+LN","./duotone-light.css":"GggT","./eclipse.css":"hD67","./elegant.css":"2b9r","./erlang-dark.css":"XQDJ","./hopscotch.css":"opVC","./icecoder.css":"scuT","./isotope.css":"u3n7","./lesser-dark.css":"LDKD","./liquibyte.css":"fXer","./material.css":"epNC","./mbo.css":"1XTk","./mdn-like.css":"vsRU","./midnight.css":"zLDg","./monokai.css":"UM8r","./neat.css":"Ijt+","./neo.css":"bF3y","./night.css":"ncdg","./panda-syntax.css":"mBIq","./paraiso-dark.css":"BR0Y","./paraiso-light.css":"Y0SK","./pastel-on-dark.css":"v/ec","./railscasts.css":"zUoc","./rubyblue.css":"0tbE","./seti.css":"jykA","./solarized.css":"Xdwu","./the-matrix.css":"K00g","./tomorrow-night-bright.css":"MPNI","./tomorrow-night-eighties.css":"+bOk","./ttcn.css":"+fg7","./twilight.css":"Y7A8","./vibrant-ink.css":"w/Cc","./xq-dark.css":"qyuG","./xq-light.css":"gSgD","./yeti.css":"X1Ds","./zenburn.css":"Mpj/"};i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="aHkt"},"ai3+":function(t,e,n){"use strict";var i,s=n("bOdI"),o=n.n(s),r=n("FOEZ"),a=n("FW4k");e.a=(i={},o()(i,r.a,function(t,e){var n=e.size;t.window.width=n.width||t.window.width,t.window.height=n.height||t.window.height}),o()(i,r.b,function(t,e){var n=e.size;t.frame.width=n.width||t.frame.width,t.frame.height=n.height||t.frame.height}),o()(i,r.c,function(t,e){var n=e.code;t.frame.shaderCode=n.code||t.frame.shaderCode}),o()(i,r.d,function(t){t.runMode=a.a}),o()(i,r.e,function(t,e){var n=e.blob;t.runMode=a.b,t.frame.blob=n.blob}),o()(i,r.f,function(t){t.runMode=a.c}),i)},bF3y:function(t,e){},epNC:function(t,e){},fXer:function(t,e){},g6x8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea")},s=[],o={render:i,staticRenderFns:s};e.a=o},gSgD:function(t,e){},hD67:function(t,e){},iffO:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},s=[],o={render:i,staticRenderFns:s};e.a=o},jGSh:function(t,e){},jykA:function(t,e){},kSL7:function(t,e){},mBIq:function(t,e){},"n+LN":function(t,e){},ncdg:function(t,e){},opVC:function(t,e){},qyuG:function(t,e){},scuT:function(t,e){},t9xi:function(t,e){},tPrY:function(t,e){},u3n7:function(t,e){},"v/ec":function(t,e){},vX90:function(t,e){},vsRU:function(t,e){},"w/Cc":function(t,e){},wbe0:function(t,e,n){"use strict";e.a={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},x15G:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",created:function(){var t=this;window.addEventListener("resize",function(){return t.handleResize()}),this.handleResize()},methods:{handleResize:function(){var t={width:window.innerWidth,height:window.innerHeight};this.$store.dispatch("windowUpdateSize",t)}}}},zLDg:function(t,e){},zUoc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a5b0ce321ed5a38da6e2.js.map