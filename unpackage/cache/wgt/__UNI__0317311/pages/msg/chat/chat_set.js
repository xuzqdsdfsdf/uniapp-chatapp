!function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=150)}({0:function(t,e,r){"use strict";function o(t,e,r,o,i,n,a,p,d,s){var l,c="function"==typeof t?t.options:t;if(d){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var u in d)f.call(d,u)&&!f.call(c.components,u)&&(c.components[u]=d[u])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(c.mixins||(c.mixins=[])).push(s)),e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=p?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var g=c.render;c.render=function(t,e){return l.call(e),g(t,e)}}else{var x=c.beforeCreate;c.beforeCreate=x?[].concat(x,l):[l]}return{exports:t,options:c}}r.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},view:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},text:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},"w-100":{width:"750rpx"},row:{marginRight:"-20rpx",marginLeft:"-20rpx",flexWrap:"wrap",flexDirection:"row"},"col-1":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"62.5rpx"},"col-2":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"125rpx"},"col-3":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"187.5rpx"},"col-4":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"250rpx"},"col-5":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"312.5rpx"},"col-6":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"375rpx"},"col-7":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"437.5rpx"},"col-8":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"500rpx"},"col-9":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"562.5rpx"},"col-10":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"625rpx"},"col-11":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"687.5rpx"},"col-12":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"750rpx"},"col-offset-12":{marginLeft:"750rpx"},"col-offset-11":{marginLeft:"687.5rpx"},"col-offset-10":{marginLeft:"625rpx"},"col-offset-9":{marginLeft:"562.5rpx"},"col-offset-8":{marginLeft:"500rpx"},"col-offset-7":{marginLeft:"437.5rpx"},"col-offset-6":{marginLeft:"375rpx"},"col-offset-5":{marginLeft:"312.5rpx"},"col-offset-4":{marginLeft:"250rpx"},"col-offset-3":{marginLeft:"187.5rpx"},"col-offset-2":{marginLeft:"125rpx"},"col-offset-1":{marginLeft:"62.5rpx"},"col-offset-0":{marginLeft:0},flex:{flexDirection:"row"},"flex-row":{flexDirection:"row"},"flex-column":{flexDirection:"column"},"flex-row-reverse":{flexDirection:"row-reverse"},"flex-column-reverse":{flexDirection:"column-reverse"},"flex-wrap":{flexWrap:"wrap"},"flex-nowrap":{flexWrap:"nowrap"},"justify-start":{justifyContent:"flex-start"},"justify-end":{justifyContent:"flex-end"},"justify-between":{justifyContent:"space-between"},"justify-center":{justifyContent:"center"},"align-center":{alignItems:"center"},"align-stretch":{alignItems:"stretch"},"align-start":{alignItems:"flex-start"},"align-end":{alignItems:"flex-end"},"flex-1":{flex:1},"flex-2":{flex:2},"flex-3":{flex:3},"flex-4":{flex:4},"flex-5":{flex:5},container:{paddingRight:"20rpx",paddingLeft:"20rpx"},"m-0":{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0},"m-1":{marginTop:"10rpx",marginRight:"10rpx",marginBottom:"10rpx",marginLeft:"10rpx"},"m-2":{marginTop:"20rpx",marginRight:"20rpx",marginBottom:"20rpx",marginLeft:"20rpx"},"m-3":{marginTop:"30rpx",marginRight:"30rpx",marginBottom:"30rpx",marginLeft:"30rpx"},"m-4":{marginTop:"40rpx",marginRight:"40rpx",marginBottom:"40rpx",marginLeft:"40rpx"},"m-5":{marginTop:"50rpx",marginRight:"50rpx",marginBottom:"50rpx",marginLeft:"50rpx"},"mt-0":{marginTop:0},"mt-1":{marginTop:"10rpx"},"mt-2":{marginTop:"20rpx"},"mt-3":{marginTop:"30rpx"},"mt-4":{marginTop:"40rpx"},"mt-5":{marginTop:"50rpx"},"mb-0":{marginBottom:0},"mb-1":{marginBottom:"10rpx"},"mb-2":{marginBottom:"20rpx"},"mb-3":{marginBottom:"30rpx"},"mb-4":{marginBottom:"40rpx"},"mb-5":{marginBottom:"50rpx"},"ml-0":{marginLeft:0},"ml-1":{marginLeft:"10rpx"},"ml-2":{marginLeft:"20rpx"},"ml-3":{marginLeft:"30rpx"},"ml-4":{marginLeft:"40rpx"},"ml-5":{marginLeft:"50rpx"},"mr-0":{marginRight:0},"mr-1":{marginRight:"10rpx"},"mr-2":{marginRight:"20rpx"},"mr-3":{marginRight:"30rpx"},"mr-4":{marginRight:"40rpx"},"mr-5":{marginRight:"50rpx"},"my-0":{marginTop:0,marginBottom:0},"my-1":{marginTop:"10rpx",marginBottom:"10rpx"},"my-2":{marginTop:"20rpx",marginBottom:"20rpx"},"my-3":{marginTop:"30rpx",marginBottom:"30rpx"},"my-4":{marginTop:"40rpx",marginBottom:"40rpx"},"my-5":{marginTop:"50rpx",marginBottom:"50rpx"},"mx-0":{marginLeft:0,marginRight:0},"mx-1":{marginLeft:"10rpx",marginRight:"10rpx"},"mx-2":{marginLeft:"20rpx",marginRight:"20rpx"},"mx-3":{marginLeft:"30rpx",marginRight:"30rpx"},"mx-4":{marginLeft:"40rpx",marginRight:"40rpx"},"mx-5":{marginLeft:"50rpx",marginRight:"50rpx"},"p-0":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},p:{paddingTop:"5rpx",paddingRight:"5rpx",paddingBottom:"5rpx",paddingLeft:"5rpx"},"p-1":{paddingTop:"10rpx",paddingRight:"10rpx",paddingBottom:"10rpx",paddingLeft:"10rpx"},"p-2":{paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx"},"p-3":{paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx"},"p-4":{paddingTop:"40rpx",paddingRight:"40rpx",paddingBottom:"40rpx",paddingLeft:"40rpx"},"p-5":{paddingTop:"50rpx",paddingRight:"50rpx",paddingBottom:"50rpx",paddingLeft:"50rpx"},"pt-0":{paddingTop:0},pt:{paddingTop:"5rpx"},"pt-1":{paddingTop:"10rpx"},"pt-2":{paddingTop:"20rpx"},"pt-3":{paddingTop:"30rpx"},"pt-4":{paddingTop:"40rpx"},"pt-5":{paddingTop:"50rpx"},"pb-0":{paddingBottom:0},"pb-1":{paddingBottom:"10rpx"},pb:{paddingBottom:"5rpx"},"pb-2":{paddingBottom:"20rpx"},"pb-3":{paddingBottom:"30rpx"},"pb-4":{paddingBottom:"40rpx"},"pb-5":{paddingBottom:"50rpx"},"pl-0":{paddingLeft:0},pl:{paddingLeft:"5rpx"},"pl-1":{paddingLeft:"10rpx"},"pl-2":{paddingLeft:"20rpx"},"pl-3":{paddingLeft:"30rpx"},"pl-4":{paddingLeft:"40rpx"},"pl-5":{paddingLeft:"50rpx"},"pr-0":{paddingRight:0},pr:{paddingRight:"5rpx"},"pr-1":{paddingRight:"10rpx"},"pr-2":{paddingRight:"20rpx"},"pr-3":{paddingRight:"30rpx"},"pr-4":{paddingRight:"40rpx"},"pr-5":{paddingRight:"50rpx"},"py-0":{paddingTop:0,paddingBottom:0},py:{paddingTop:"5rpx",paddingBottom:"5rpx"},"py-1":{paddingTop:"10rpx",paddingBottom:"10rpx"},"py-2":{paddingTop:"20rpx",paddingBottom:"20rpx"},"py-3":{paddingTop:"30rpx",paddingBottom:"30rpx"},"py-4":{paddingTop:"40rpx",paddingBottom:"40rpx"},"py-5":{paddingTop:"50rpx",paddingBottom:"50rpx"},"px-0":{paddingLeft:0,paddingRight:0},"px-1":{paddingLeft:"10rpx",paddingRight:"10rpx"},px:{paddingLeft:"5rpx",paddingRight:"5rpx"},"px-2":{paddingLeft:"20rpx",paddingRight:"20rpx"},"px-3":{paddingLeft:"30rpx",paddingRight:"30rpx"},"px-4":{paddingLeft:"40rpx",paddingRight:"40rpx"},"px-5":{paddingLeft:"50rpx",paddingRight:"50rpx"},"font-small":{fontSize:"20rpx"},"font-sm":{fontSize:"25rpx"},font:{fontSize:"30rpx"},"font-md":{fontSize:"35rpx"},"font-lg":{fontSize:"40rpx"},h1:{fontSize:"80rpx",lineHeight:1.8},h2:{fontSize:"60rpx",lineHeight:1.8},h3:{fontSize:"45rpx",lineHeight:1.8},h4:{fontSize:"32rpx",lineHeight:1.8},h5:{fontSize:"30rpx",lineHeight:1.8},h6:{fontSize:"28rpx",lineHeight:1.8},"text-through":{textDecoration:"line-through"},"text-left":{textAlign:"left"},"text-right":{textAlign:"right"},"text-center":{textAlign:"center"},"text-ellipsis":{lines:1},"font-weight-light":{fontWeight:"300"},"font-weight-lighter":{fontWeight:"100"},"font-weight-normal":{fontWeight:"400"},"font-weight-bold":{fontWeight:"700"},"font-weight-bolder":{fontWeight:"bold"},"font-italic":{fontStyle:"italic"},"text-white":{color:"#ffffff"},"text-primary":{color:"#007bff"},"text-hover-primary":{color:"#0056b3"},"text-secondary":{color:"#6c757d"},"text-hover-secondary":{color:"#494f54"},"text-success":{color:"#28a745"},"text-hover-success":{color:"#19692c"},"text-info":{color:"#17a2b8"},"text-hover-info":{color:"#0f6674"},"text-warning":{color:"#ffc107"},"text-hover-warning":{color:"#ba8b00"},"text-danger":{color:"#dc3545"},"text-hover-danger":{color:"#a71d2a"},"text-light":{color:"#f8f9fa"},"text-hover-light":{color:"#cbd3da"},"text-dark":{color:"#343a40"},"text-hover-dark":{color:"#121416"},"text-body":{color:"#212529"},"text-muted":{color:"#6c757d"},"text-light-muted":{color:"#A9A5A0"},"text-light-black":{color:"rgba(0,0,0,0.5)"},"text-light-white":{color:"rgba(255,255,255,0.5)"},"bg-primary":{backgroundColor:"#007bff"},"bg-hover-primary":{"backgroundColor:hover":"#0062cc"},"bg-secondary":{backgroundColor:"#6c757d"},"bg-hover-secondary":{"backgroundColor:hover":"#545b62"},"bg-success":{backgroundColor:"#28a745"},"bg-hover-success":{backgroundColor:"#1e7e34"},"bg-info":{backgroundColor:"#17a2b8"},"bg-hover-info":{backgroundColor:"#117a8b"},"bg-warning":{backgroundColor:"#ffc107"},"bg-hover-warning":{backgroundColor:"#d39e00"},"bg-danger":{backgroundColor:"#dc3545"},"bg-hover-danger":{backgroundColor:"#bd2130"},"bg-light":{backgroundColor:"#f8f9fa"},"bg-hover-light":{backgroundColor:"#dae0e5"},"bg-dark":{backgroundColor:"#343a40"},"bg-hover-dark":{backgroundColor:"#1d2124"},"bg-white":{backgroundColor:"#ffffff"},"bg-transparent":{backgroundColor:"rgba(0,0,0,0)"},border:{borderWidth:"1rpx",borderStyle:"solid",borderColor:"#dee2e6"},"border-top":{borderTopWidth:"1rpx",borderTopStyle:"solid",borderTopColor:"#dee2e6"},"border-right":{borderRightWidth:"1rpx",borderRightStyle:"solid",borderRightColor:"#dee2e6"},"border-bottom":{borderBottomWidth:"1rpx",borderBottomStyle:"solid",borderBottomColor:"#dee2e6"},"border-left":{borderLeftWidth:"1rpx",borderLeftStyle:"solid",borderLeftColor:"#dee2e6"},"border-0":{borderWidth:0},"border-top-0":{borderTopWidth:0},"border-right-0":{borderRightWidth:0},"border-bottom-0":{borderBottomWidth:0},"border-left-0":{borderLeftWidth:0},"border-primary":{borderColor:"#007bff"},"border-secondary":{borderColor:"#6c757d"},"border-light-secondary":{borderColor:"#E9E8E5"},"border-success":{borderColor:"#28a745"},"border-info":{borderColor:"#17a2b8"},"border-warning":{borderColor:"#ffc107"},"border-danger":{borderColor:"#dc3545"},"border-light":{borderColor:"#f8f9fa"},"border-dark":{borderColor:"#343a40"},"border-white":{borderColor:"#FFFFFF"},rounded:{borderRadius:"8rpx"},"rounded-top":{borderTopLeftRadius:"8rpx",borderTopRightRadius:"8rpx"},"rounded-right":{borderTopRightRadius:"8rpx",borderBottomRightRadius:"8rpx"},"rounded-bottom":{borderBottomRightRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-left":{borderTopLeftRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-circle":{borderRadius:"100rpx"},"rounded-0":{borderRadius:0},"overflow-hidden":{overflow:"hidden"},"position-relative":{position:"relative"},"position-absolute":{position:"absolute"},"position-fixed":{position:"fixed"},"fixed-top":{position:"fixed",top:0,right:0,left:0,zIndex:1030},"fixed-bottom":{position:"fixed",right:0,bottom:0,left:0,zIndex:1030},"top-0":{top:0},"left-0":{left:0},"right-0":{right:0},"bottom-0":{bottom:0},page:{backgroundColor:"#EDEDED"},"main-bg-color":{backgroundColor:"#08C060"},"main-bg-hover-color":{backgroundColor:"#08d869"},"main-text-color":{color:"#08C060"},"border-main":{borderColor:"#08C060"},"bg-chat-item":{backgroundColor:"#6BEE68"},"text-chat-item":{color:"#6BEE68"},"text-chat-otherpeople-item":{color:"#EDEDED"},"bg-chat-otherpeople-item":{backgroundColor:"#EDEDED"},"top-nav-bgc":{backgroundColor:"#EDEDED"},"@VERSION":2}},10:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",[r("div",{staticClass:["fixed-top"],class:t.isshowdefaultcolor?"top-nav-bgc  border-bottom":"bg-white",on:{click:t.log}},[r("view",{style:"height:"+t.statusbarheight+"px"}),r("view",{staticClass:["w-100","flex","align-center","justify-between"],staticStyle:{height:"90upx"}},[r("view",{staticClass:["flex","align-center"]},[t.isshowback?r("u-text",{staticClass:["iconfont","ml-2"],appendAsTree:!0,attrs:{append:"tree"},on:{click:t.back}},[t._v("\ue67e")]):t._e(),t.title?r("view",[r("u-text",{staticClass:["font-md","ml-2"],style:t.titlecolor?"color:#fff":"color:#000",appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.getTitle))]),t._t("title")],2):t._e()]),t.showsearch?r("view",{staticClass:["flex","align-center"]},[r("icon-button",[r("u-text",{staticClass:["iconfont","font-md"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue67c")])]),r("icon-button",{on:{click:t.searchextend}},[r("u-text",{staticClass:["iconfont","font-md"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue660")])])],1):t._e(),t._t("options")],2)]),r("view",{style:t.getnavstyle}),r("free-popup",{ref:"extend",attrs:{bodyH:t.getmenuheight,bodyW:320,transformOrigin:"right top"}},[r("view",{staticClass:["bg-white","d-flex","flex-column"],staticStyle:{width:"320upx",height:"525upx",backgroundColor:"#4B4B48"},style:t.getmenustyle},t._l(t.extendsmenu,(function(e,o){return r("view",{key:o,staticClass:["flex-1","flex","","","align-center"],attrs:{hoverClass:"bg-hover-dark"},on:{click:function(r){t.clickevent(e.event)}}},[r("u-text",{staticClass:["pl-3","iconfont","","font-md","","text-white"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.icon))]),r("u-text",{staticClass:["ml-2","py-3","","","","borderbot","font-md","flex-1","border-bottom","text-white"],staticStyle:{boxSizing:"border-box",borderColor:"#525252",borderBottomWidth:"2upx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.name))])])})),0)])],1)},i=[]},109:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!1,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["page"]},[r("free-navbar",{attrs:{title:"\u804a\u5929\u8bb0\u5f55",isshowback:!0,isshowdefaultcolor:!0,showsearch:!1}}),r("view",{staticClass:["flex","flex-wrap","flex-row","bg-white"]},[t._l(5,(function(e){return r("view",{key:e,staticClass:["flex","flex-column","px-2","my-3","justify-center","align-center"],staticStyle:{width:"150rpx"}},[r("u-image",{staticClass:["rounded"],staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:"/static/images/demo/demo5.jpg",mode:""}}),r("u-text",{staticClass:["font-sm","mt-2","text-light-muted"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5f90\u6d69")])],1)})),r("view",{staticClass:["flex","","","my-3","justify-center","align-center"],staticStyle:{width:"150rpx",height:"150rpx",borderStyle:"dashed"}},[r("view",{staticClass:["flex","","justify-center","align-center","border","px-2"]},[r("u-text",{staticClass:["text-light-muted"],staticStyle:{fontSize:"80rpx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("+")])])])],2),r("free-divider",{attrs:{dividerheight:"20"}}),r("view",[r("free-list-item",{attrs:{text:"\u7fa4\u804a\u540d\u79f0",icon:!1,showarray:!0}},[r("u-text",{staticClass:["font-sm","text-muted","mr-1"],appendAsTree:!0,attrs:{slot:"rightcontent",append:"tree"},slot:"rightcontent"},[t._v("\u5c0a\u4e25\u5c40")])]),r("free-list-item",{attrs:{text:"\u7fa4\u4e8c\u7ef4\u7801",icon:!1,showarray:!0}},[r("u-text",{staticClass:["font-sm","text-muted","mr-1"],appendAsTree:!0,attrs:{slot:"rightcontent",append:"tree"},slot:"rightcontent"},[t._v("\u7fa4\u4e8c\u7ef4\u7801\u5360\u4f4d")])]),r("free-list-item",{attrs:{text:"\u7fa4\u516c\u544a",icon:!1,showarray:!0}}),r("free-list-item",{attrs:{text:"\u5907\u6ce8",icon:!1,showarray:!0}}),r("free-divider",{attrs:{dividerheight:"20"}}),r("free-list-item",{attrs:{text:"\u67e5\u627e\u804a\u5929\u8bb0\u5f55",icon:!1,showarray:!0}}),r("free-divider",{attrs:{dividerheight:"20"}}),r("free-list-item",{attrs:{text:"\u6d88\u606f\u514d\u6253\u6270",icon:!1}},[r("switch",{staticStyle:{transform:"scale(0.9)"},attrs:{slot:"rightcontent",checked:!1,color:"#04C160"},slot:"rightcontent"})],1),r("free-list-item",{attrs:{text:"\u7f6e\u9876\u804a\u5929",icon:!1}},[r("switch",{staticStyle:{transform:"scale(0.9)"},attrs:{slot:"rightcontent",checked:!1,color:"#04C160"},slot:"rightcontent"})],1),r("free-list-item",{attrs:{text:"\u4fdd\u5b58\u5230\u901a\u8baf\u5f55",icon:!1}},[r("switch",{staticStyle:{transform:"scale(0.9)"},attrs:{slot:"rightcontent",checked:!1,color:"#04C160"},slot:"rightcontent"})],1),r("free-divider",{attrs:{dividerheight:"20"}}),r("free-list-item",{attrs:{text:"\u6211\u5728\u7fa4\u91cc\u7684\u6635\u79f0",icon:!1,showarray:!0}},[r("u-text",{staticClass:["font-sm","text-muted","mr-1"],appendAsTree:!0,attrs:{slot:"rightcontent",append:"tree"},slot:"rightcontent"},[t._v("123")])]),r("free-list-item",{attrs:{text:"\u663e\u793a\u7fa4\u6210\u5458\u7684\u6635\u79f0",icon:!1,showarray:!0}},[r("switch",{staticStyle:{transform:"scale(0.9)"},attrs:{slot:"rightcontent",checked:!1,color:"#04C160"},slot:"rightcontent"})],1),r("free-divider",{attrs:{dividerheight:"20"}}),r("free-list-item",{attrs:{text:"\u8bbe\u7f6e\u5f53\u524d\u804a\u5929\u80cc\u666f",icon:!1,showarray:!0}}),r("free-list-item",{attrs:{text:"\u6295\u8bc9",icon:!1,showarray:!0}}),r("free-divider",{attrs:{dividerheight:"20"}}),r("free-list-item",{attrs:{text:"\u6e05\u7a7a\u804a\u5929\u8bb0\u5f55",icon:!1,showarray:!0}}),r("free-divider",{attrs:{dividerheight:"20"}}),r("view",{staticClass:["flex","align-center","justify-center","py-4","bg-white"]},[r("u-text",{staticClass:["font-md"],staticStyle:{color:"#F75352"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5220\u9664\u5e76\u9000\u51fa")])])],1),r("view",{staticStyle:{height:"200rpx"}})],1)])},i=[]},11:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("view",{staticClass:["flex","align-center","justify-center"],staticStyle:{width:"90rpx",height:"90rpx"},attrs:{hoverClass:"bg-hover-light"},on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)},i=[]},12:function(t,e,r){"use strict";r.r(e);var o=r(13),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{src:{type:String,default:""},text:{type:String,default:""},showarray:{type:Boolean,default:!1},ispadding:{type:Boolean,default:!1},imgsize:{type:[String,Number],default:75},isshowmarginbottom:{type:Boolean,default:!1},icon:{type:Boolean,default:!0}},computed:{getstyle:function(){return this.ispadding?"py-2":""},getimgstyle:function(){return"width:".concat(this.imgsize,"upx; height:").concat(this.imgsize,"upx;margin-bottom:").concat(this.isshowmarginbottom?"30upx":"0")}}};e.default=o},14:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:["flex","align-center","bg-white"],style:t.getstyle,on:{click:function(e){t.$emit("click")}}},[t.icon?r("view",{staticClass:["pl-3","","","py-2"]},[t._t("icon"),t.src?r("u-image",{style:t.getimgstyle,attrs:{src:t.src,mode:"widthFix"}}):t._e()],2):t._e(),r("view",{staticClass:["pl-3","flex","align-center","border-bottom","flex-1"]},[t._t("content",[r("u-text",{staticClass:["flex-1","flex","align-center","py-4","","font-md"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))])]),r("view",{staticClass:["flex","align-center"]},[t._t("rightcontent"),t.showarray?r("u-text",{staticClass:["iconfont","font-md","mr-4"],staticStyle:{color:"#ACACAC"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue7eb")]):t._e()],2)],2)])},i=[]},15:function(t,e,r){"use strict";r.r(e);var o=r(6),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},150:function(t,e,r){"use strict";r.r(e);r(24);var o=r(51);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),o.default.mpType="page",o.default.route="pages/msg/chat/chat_set",o.default.el="#root",new Vue(o.default)},16:function(t,e,r){"use strict";r.r(e);var o=r(9),i=r(4);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var p=Object(a.a)(i.default,o.b,o.c,!1,null,null,"7df630fe",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(15).default,this.options.style):Object.assign(this.options.style,r(15).default)}).call(p),e.default=p.exports},17:function(t,e,r){"use strict";r.r(e);var o=r(18),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},18:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{dividerheight:{type:Number,default:60}},computed:{getstyle:function(){return"height:".concat(this.dividerheight,"upx;")}}};e.default=o},2:function(t,e,r){"use strict";r.r(e);var o=r(3),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},23:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["flex","align-center"],staticStyle:{backgroundColor:"#ededed"},style:this.getstyle},[this._t("divider")],2)},i=[]},24:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(25).default,Vue.prototype.__$appStyle__)},25:function(t,e,r){"use strict";r.r(e);var o=r(1),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},26:function(t,e,r){"use strict";r.r(e);var o=r(11),i=r(7);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var p=Object(a.a)(i.default,o.b,o.c,!1,null,null,"3f1bc261",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(p),e.default=p.exports},27:function(t,e,r){"use strict";r.r(e);var o=r(10),i=r(2);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var p=Object(a.a)(i.default,o.b,o.c,!1,null,null,"7106d7ea",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(p),e.default=p.exports},29:function(t,e,r){"use strict";r.r(e);var o=r(14),i=r(12);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var p=Object(a.a)(i.default,o.b,o.c,!1,null,null,"4428b792",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(p),e.default=p.exports},3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(16)),i=n(r(26));function n(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{statusbarheight:0,navheight:0,extendsmenu:[{name:"\u53d1\u8d77\u7fa4\u804a",event:"",icon:"\ue63f"},{name:"\u6dfb\u52a0\u670b\u53cb",event:"",icon:"\ue61f"},{name:"\u626b\u4e00\u626b",event:"",icon:"\ue62d"},{name:"\u6536\u4ed8\u6b3e",event:"",icon:"\ue60c"},{name:"\u5e2e\u52a9\u4e0e\u53cd\u9988",event:"",icon:"\ue678"}]}},props:{title:{type:[String,Boolean],default:!1},isshowback:{type:Boolean,default:!1},noreadnum:{type:Number,default:0},showsearch:{type:Boolean,default:!0},isshowdefaultcolor:{type:Boolean,defualt:!0},titlecolor:{type:Boolean,default:!1}},computed:{getmenuheight:function(){return this.extendsmenu.length>0?105*this.extendsmenu.length:0},getnavstyle:function(){return"height:".concat(this.navheight,"px")},getTitle:function(){return this.noreadnum>0?"".concat(this.title,"(").concat(this.noreadnum,")"):"".concat(this.title)}},components:{iconButton:i.default,freePopup:o.default},mounted:function(){this.statusbarheight=plus.navigator.getStatusbarHeight(),this.navheight=this.statusbarheight+uni.upx2px(90)},methods:{searchextend:function(t){this.$refs.extend.show(uni.upx2px(445),uni.upx2px(132))},back:function(){uni.navigateBack({delta:1}),this.$emit("back")},log:function(){}}};e.default=a},33:function(t,e,r){"use strict";r.r(e);var o=r(23),i=r(17);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var p=Object(a.a)(i.default,o.b,o.c,!1,null,null,"5cbbf02e",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(p),e.default=p.exports},4:function(t,e,r){"use strict";r.r(e);var o=r(5),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=weex.requireModule("animation"),i={mounted:function(){var t=this;uni.getSystemInfo({success:function(e){t.maxX=e.windowWidth-uni.upx2px(t.bodyW),t.maxY=e.windowHeight-uni.upx2px(t.bodyH)}})},computed:{getmaskcolor:function(){var t=this.MaskColor?.5:0;return"background-color:rgba(0,0,0,".concat(t,");bottom:").concat(this.modalbottom,"upx;")},getbottom:function(){return this.bottom?"left-0 right-0 bottom-0":"rounded border"},getbodystyle:function(){return(this.x>-1?"left:".concat(this.x,"px;"):"")+(this.y>-1?"top:".concat(this.y,"px;"):"")},PopupHeight:function(){return"height:".concat(this.popupH,"rpx; bottom:").concat(-this.popupH,"rpx;")},getBodyWidth:function(){var t=750-this.width;return"width:".concat(this.width,"rpx;margin:0 ").concat(t/2,"rpx;")},centerposition:function(){return this.center?"flex align-center justify-center":""}},data:function(){return{status:!1,x:-1,y:-1,maxX:0,maxY:0}},props:{center:{type:Boolean,default:!1},animatedtype:{type:Boolean,default:!0},popupH:{type:Number,default:400},popuptype:{type:String,default:"none"},MaskColor:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},bottom:{type:Boolean,defautl:!1},bodyW:{type:Number,default:0},bodyH:{type:Number,default:0},transformOrigin:{type:String,default:"left top"},modalbottom:{type:Number,default:0},popupbottom:{type:Number,default:400},animationduration:{type:Number,default:200},width:{type:Number,default:650}},methods:{show:function(t,e){var r=this;this.status=!0,this.x=t>this.maxX?this.maxX:t,this.y=e>this.maxY?this.maxY:e,this.$nextTick((function(){r.animatedtype?o.transition(r.$refs.popupel,{styles:{transform:"scale(1,1)",transformOrigin:r.transformOrigin,opacity:1},duration:r.animationduration,timingFunction:"ease"},(function(){})):o.transition(r.$refs.popupel,{styles:{transform:"translateY(".concat(-uni.upx2px(r.popupH),"px)")},duration:r.animationduration,timingFunction:"ease"},(function(){}))}))},hide:function(){var t=this;this.$emit("hide"),o.transition(this.$refs.popupel,{styles:this.animatedtype?{transform:"scale(0,0)",transformOrigin:this.transformOrigin,opacity:0}:{transform:"translateY(".concat(uni.upx2px(this.popupH),"px)")},duration:this.animationduration,timingFunction:"ease"},(function(){t.status=!1}))}},destroyed:function(){this.status=!1}};e.default=i},51:function(t,e,r){"use strict";var o=r(109),i=r(86),n=r(0);var a=Object(n.a)(i.default,o.b,o.c,!1,null,null,"654a24d2",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),e.default=a.exports},6:function(t,e){t.exports={"free-animated":{transform:"scale(0, 0)",opacity:0},_body:{zIndex:2021,backgroundColor:"#ffffff",borderTopLeftRadius:"20rpx",borderTopRightRadius:"20rpx",borderBottomRightRadius:0,borderBottomLeftRadius:0},"@VERSION":2}},7:function(t,e,r){"use strict";r.r(e);var o=r(8),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},8:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{fontname:String}};e.default=o},86:function(t,e,r){"use strict";var o=r(87),i=r.n(o);e.default=i.a},87:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(29)),i=n(r(33));function n(t){return t&&t.__esModule?t:{default:t}}var a={components:{freeNavbar:n(r(27)).default,freeDivider:i.default,freeListItem:o.default}};e.default=a},9:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.status?r("view",{staticClass:["popup"],staticStyle:{zIndex:"9999",overflow:"hidden"}},[t.mask?r("view",{staticClass:["position-fixed","","top-0","left-0","right-0"],staticStyle:{zIndex:"999"},style:t.getmaskcolor,on:{click:t.hide}}):t._e(),t.animatedtype?r("view",{ref:"popupel",staticClass:["position-fixed","bg-white","free-animated"],class:t.getbottom,staticStyle:{zIndex:"2000"},style:t.getbodystyle},[t._t("default")],2):r("view",{ref:"popupel",staticClass:["_body","","position-fixed","left-0","right-0"],style:t.PopupHeight+t.getBodyWidth},[t._t("default")],2)]):t._e()},i=[]}});