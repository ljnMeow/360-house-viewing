(function(t){function e(e){for(var n,r,a=e[0],c=e[1],l=e[2],h=0,d=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"31d0":function(t,e,i){"use strict";i("d0e3")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],r=(i("5c0b"),i("2877")),a={},c=Object(r["a"])(a,o,s,!1,null,null,null),l=c.exports,p=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{ref:"threeDBox",staticClass:"view-container"}),i("div",{ref:"tooltipBox",staticClass:"tooltip-box",style:t.tooltipPosition},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v("标题："+t._s(t.tooltopContent.title))]),i("div",{staticClass:"explain"},[t._v("说明："+t._s(t.tooltopContent.text))])])]),i("p",{ref:"titleBox",staticClass:"title-text",style:t.titlePosition},[t._v(" "+t._s(t.tooltopContent.title)+" ")])])},d=[],u=(i("d3b7"),i("159b"),i("4de4"),i("5a89")),f=i("4721"),m=i("8a7a"),v={name:"Home",data:function(){return{scene:null,camera:null,controls:null,renderer:null,axisHelper:null,sphere:null,time:{value:0},dataList:[{image:i("b490"),tipsList:[{position:{x:-200,y:-4,z:-147},content:{title:"进入厨房",text:"",image:1,showTip:!1,showTitle:!0}},{position:{x:-100,y:0,z:-231},content:{title:"信息点2",text:"77989",showTip:!0,showTitle:!1}},{position:{x:150,y:-50,z:-198},content:{title:"信息点3",text:"qwdcz",showTip:!0,showTitle:!1}},{position:{x:210,y:11,z:-140},content:{title:"信息点4",text:"大豆食心虫侦察十大大苏打大大大大大大大",showTip:!0,showTitle:!1}},{position:{x:208,y:-12,z:140},content:{title:"信息点5",text:"eq",showTip:!0,showTitle:!1}},{position:{x:86,y:-9,z:236},content:{title:"进入房间",text:"",showTip:!1,showTitle:!0}}]},{image:i("8414"),tipsList:[{position:{x:-199,y:-24,z:145},content:{title:"进入大厅",text:"",image:0,showTip:!1,showTitle:!0}}]}],tipsSpriteList:[],tooltipPosition:{top:"-100%",left:"-100%"},titlePosition:{top:"-100%",left:"-100%"},tooltopContent:{}}},methods:{initScene:function(){this.scene=new u["i"],this.scene.background=new u["a"](1052688)},initCamera:function(t){this.camera=new u["f"](45,t.clientWidth/t.clientHeight,.1,1e3),this.camera.position.set(50,0,40)},initControls:function(t){this.controls=new f["a"](this.camera,t),this.controls.minDistance=1,this.controls.maxDistance=100,this.controls.enablePan=!1},initRenderer:function(t){this.renderer=new u["r"],this.renderer.setSize(t.offsetWidth,t.offsetHeight),t.appendChild(this.renderer.domElement)},initContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new u["j"](16,50,50);e.scale(16,16,-16);var i=(new u["o"]).load(this.dataList[t].image),n=new u["e"]({map:i});this.sphere=new u["d"](e,n),this.scene.add(this.sphere)},addTipsSprite:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=(new u["o"]).load(i("983f")),o=new u["m"]({map:n});this.tipsSpriteList=[],this.dataList[e].tipsList.forEach((function(e){var i=new u["l"](o);i.scale.set(10,10,10),i.position.set(e.position.x,e.position.y,e.position.z),i.content=e.content,t.tipsSpriteList.push(i),t.scene.add(i)}))},changeContentAndtips:function(t){this.scene.children=this.scene.children.filter((function(t){return"Sprite"!==String(t.type)})),this.tipsSpriteList=[];var e=(new u["o"]).load(this.dataList[t].image),i=new u["e"]({map:e,transparent:!0,opacity:0});this.sphere.material=i,this.camera.updateProjectionMatrix(),m["a"].to(i,{transparent:!0,opacity:1,duration:2}),this.addTipsSprite(t)},render:function(){this.controls.update(),this.renderer.render(this.scene,this.camera),this.renderer.sortObjects=!1,this.timer=requestAnimationFrame(this.render),this.time.value+=.015},onResize:function(){var t=this.$refs.threeDBox;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)},onMouseClick:function(t){t.preventDefault();var e=this.$refs.threeDBox,i=new u["h"],n=new u["p"];n.x=t.clientX/e.clientWidth*2-1,n.y=-t.clientY/e.clientHeight*2+1,i.setFromCamera(n,this.camera);var o=i.intersectObjects(this.tipsSpriteList,!0);o.length>0&&o[0].object.content.showTitle&&(this.changeContentAndtips(o[0].object.content.image),this.handleTooltipHide(t))},onMousemove:function(t){t.preventDefault();var e=this.$refs.threeDBox,i=new u["h"],n=new u["p"];n.x=t.clientX/e.clientWidth*2-1,n.y=-t.clientY/e.clientHeight*2+1,i.setFromCamera(n,this.camera);var o=i.intersectObjects(this.tipsSpriteList,!0);if(o.length>0){var s=e.clientWidth/2,r=e.clientHeight/2,a=new u["q"](o[0].object.position.x,o[0].object.position.y,o[0].object.position.z),c=a.project(this.camera);if(this.tooltopContent=o[0].object.content,o[0].object.content.showTip){var l=Math.round(s*c.x+s-this.$refs.tooltipBox.clientWidth/2),p=Math.round(-r*c.y+r-this.$refs.tooltipBox.clientHeight/2);this.tooltipPosition={left:"".concat(l,"px"),top:"".concat(p,"px")}}else if(o[0].object.content.showTitle){var h=Math.round(s*c.x+s-this.$refs.titleBox.clientWidth/2),d=Math.round(-r*c.y+r);this.titlePosition={left:"".concat(h,"px"),top:"".concat(d,"px")}}}else this.handleTooltipHide(t)},handleTooltipHide:function(t){t.preventDefault(),this.tooltipPosition={top:"-100%",left:"-100%"},this.titlePosition={top:"-100%",left:"-100%"},this.tooltopContent={}}},mounted:function(){var t=this.$refs.threeDBox;this.initScene(),this.initCamera(t),this.initControls(t),this.initContent(),this.addTipsSprite(),this.initRenderer(t),this.render(),window.addEventListener("resize",this.onResize,!1),window.addEventListener("click",this.onMouseClick,!1),this.renderer.domElement.addEventListener("mousemove",this.onMousemove,!1),this.$refs.tooltipBox.addEventListener("mouseleave",this.handleTooltipHide,!1)},destroyed:function(){cancelAnimationFrame(this.timer)}},w=v,x=(i("31d0"),Object(r["a"])(w,h,d,!1,null,"28e055f0",null)),b=x.exports;n["a"].use(p["a"]);var g=[{path:"/",name:"Home",component:b}],y=new p["a"]({routes:g}),j=y,T=i("2f62");n["a"].use(T["a"]);var C=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:j,store:C,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},8414:function(t,e,i){t.exports=i.p+"img/kitchen.7d6af566.jpg"},"983f":function(t,e,i){t.exports=i.p+"img/tip.1fcbc2bb.png"},"9c0c":function(t,e,i){},b490:function(t,e,i){t.exports=i.p+"img/livingRoom.daa88722.jpg"},d0e3:function(t,e,i){}});
//# sourceMappingURL=app.69bd633a.js.map