(this["webpackJsonprecoil-paint"]=this["webpackJsonprecoil-paint"]||[]).push([[0],{135:function(e,t,n){e.exports=n(317)},317:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),o=n(28),i=n.n(o),s=n(32),c=n(6),a=n(1),u=n(318),m="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Element.js";function b({x:e,y:t,width:n,height:l,fill:o,label:i,style:c,onMouseDown:a,onClick:b,children:f}){return r.a.createElement(s.a,{style:[_.root,{top:t,left:e,width:n,height:l,backgroundColor:o},c],onMouseDown:a,onClick:b,__self:this,__source:{fileName:m,lineNumber:9,columnNumber:5}},f,i?r.a.createElement(u.a,{selectable:!1,__self:this,__source:{fileName:m,lineNumber:28,columnNumber:9}},i):null)}const _=c.a.create({root:{position:"absolute",justifyContent:"center",alignItems:"center"}});const f=c.a.create({root:{}});const h=c.a.create({root:{borderRadius:"50%"}});var N=n(320),d="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Image.js";const g=c.a.create({root:{}});var p=n(319);function y(e){let t=new Map;return(n,...l)=>{if(t.has(n))return t.get(n);const r=e(n,...l);return t.set(n,r),r}}const j={},E={type:"rect",x:0,y:0,label:"Recoil",fill:"#e0e1e8",width:200,height:100};let w=1;function v(e){let t=w++;return j[t]=Object.assign({id:t},E,e),t}function O(e){return j[e]||E}const x=Object(a.atom)({key:"canvasLayoutState",default:{x:0,y:0,width:800,height:600}}),k=Object(a.atom)({key:"backgroundColorState",default:"white"}),S=Object(a.atom)({key:"itemIdsState",default:[]}),D=Object(a.atom)({key:"selectedIdsState",default:[]}),C=Object(a.atom)({key:"movingItemIdsState",default:[]}),R=y(e=>Object(a.atom)({key:"private-item"+e,default:O(e)}));const H=y(e=>{const t=function(){const e=Math.floor(10*Math.random()+10),t=[];for(let n=0;n<e;n++)t.push(.9*Math.random()+.1);return t}();return{id:e,series:t,width:28*t.length+8,height:144,label:"Series "+e}});async function I(e){const t=4*Math.random()+1;var n;return await(n=t,new Promise(e=>setTimeout(e,1e3*n))),H(e)}const M=y(e=>Object(a.selector)({key:"Statistics"+e,get:async({get:t})=>await I(e)})),G=y(e=>Object(a.selector)({key:"item"+e,get:({get:t})=>function(e){const{type:t,originWidth:n,originHeight:l,width:r}=e;if("image"!==t)return e;let o=r/(n/l);return{...e,height:o}}(t(R(e))),set:({set:t},n)=>{t(R(e),n)}}));const U=(L="selectedItemsSelector",V=D,Object(a.selector)({key:L,get:({get:e})=>{const t=e(V);return t.length?t.map(t=>e(G(t))):[]},set:({set:e},t)=>{t.forEach(t=>{let n=t.id;e(G(n),t)})}}));var L,V;const z=Object(a.selector)({key:"selectionBoundingBox",get:({get:e})=>function(e){if(!e.length)return null;let t=null,n=null,l=null,r=null;return e.forEach(e=>{(null===t||e.x<t)&&(t=e.x),(null===l||e.y<l)&&(l=e.y),(null===n||e.x+e.width>n)&&(n=e.x+e.width),(null===r||e.y+e.height>r)&&(r=e.y+e.height)}),{x:t,y:l,width:n-t,height:r-l,isMutilple:e.length>1}}(e(U))});var B="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Statistics.js";const W=c.a.create({root:{},container:{flexDirection:"row",paddingVertical:8,paddingHorizontal:4,alignItems:"flex-end"},bar:{marginHorizontal:4,backgroundColor:"#1189c7",width:20}}),P={rect:function(e){return r.a.createElement(b,Object.assign({},e,{style:f.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Rectangle.js",lineNumber:7,columnNumber:5}}))},ellipse:function(e){return r.a.createElement(b,Object.assign({},e,{style:h.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Ellipse.js",lineNumber:7,columnNumber:5}}))},image:function(e){const{originWidth:t,originHeight:n,width:l,height:o,uri:i}=e,s=t/n;return r.a.createElement(b,Object.assign({},e,{style:g.root,__self:this,__source:{fileName:d,lineNumber:11,columnNumber:5}}),r.a.createElement(N.a,{resizeMode:"contain",ratio:s,source:{uri:i,width:l,height:o},__self:this,__source:{fileName:d,lineNumber:15,columnNumber:7}}))},statistics:function({id:e,series:t,status:n,...o}){const i=Object(a.useSetRecoilState)(G(e)),c=Object(a.useRecoilValueLoadable)(M(e));let u;return Object(l.useEffect)(()=>{"hasValue"===c.state&&i(e=>({...e,...c.contents,status:"loaded"}))},[c.state]),u="loading"===n?r.a.createElement(p.a,{size:"large",__self:this,__source:{fileName:B,lineNumber:25,columnNumber:15}}):r.a.createElement(s.a,{style:W.container,__self:this,__source:{fileName:B,lineNumber:28,columnNumber:7}},t.map((e,t)=>r.a.createElement(s.a,{key:"serie-"+t,style:[W.bar,{height:100*e}],__self:this,__source:{fileName:B,lineNumber:30,columnNumber:11}}))),r.a.createElement(b,Object.assign({},o,{style:W.root,__self:this,__source:{fileName:B,lineNumber:45,columnNumber:5}}),u)}};function T(){return Object(a.useRecoilCallback)(({set:e},t)=>{e(G(t.id),t)})}function X(e){const[t,n]=Object(l.useState)(!1),[r,o]=Object(l.useState)({clientX:0,clientY:0}),[i,s]=Object(l.useState)({x:0,y:0}),c=Object(l.useCallback)((t,n,l,r)=>{e({status:t,isMoving:n,origin:l,offset:r})},[e]),a=Object(l.useCallback)(({clientX:e,clientY:t,metaKey:l,shiftKey:r})=>{let s={clientX:e,clientY:t,metaKey:l,shiftKey:r};n(!0),o(s),c("start",!0,s,i)},[c,i]),u=Object(l.useCallback)(({clientX:e,clientY:n})=>{if(!t)return;const l={x:e-r.clientX,y:n-r.clientY};s(l),c("moving",!0,r,l)},[c,t,r]),m=Object(l.useCallback)(()=>{t&&(n(!1),s({x:0,y:0}),c("end",!1,r,i))},[c,t,i,r]);return Object(l.useEffect)(()=>{function e(){window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",m)}return t?(window.addEventListener("mousemove",u),window.addEventListener("mouseup",m)):e(),e},[u,m,t]),{onMouseDown:a}}function Y({id:e}){const[t,n]=Object(l.useState)(null),o=Object(a.useRecoilValue)(G(e)),i=Object(a.useSetRecoilState)(D),s=T(),{onMouseDown:c}=X(({status:l,origin:r,offset:c})=>{"start"===l&&n(o),"moving"===l&&t&&s({...t,x:t.x+c.x,y:t.y+c.y}),"end"===l&&(n(null),i(t=>r.metaKey||r.shiftKey?[...t,e]:[e]))}),u=function(e){const{type:t}=e;return P[t]}(o);return u?r.a.createElement(u,Object.assign({},o,{onMouseDown:c,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasItem.js",lineNumber:44,columnNumber:10}})):null}var K="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/ResizeHandler.js";function Z(){const[e,t]=Object(a.useRecoilState)(U),[n,o]=Object(l.useState)(null),{onMouseDown:i}=X(({status:l,offset:r})=>{"start"===l&&o(e),"moving"===l&&t(n.map(e=>function(e,t){let{x:n,y:l,width:r,height:o}=e;return r+=t.x,o+=t.y,r<0&&(r=-r,n-=r),o<0&&(o=-o,l-=o),{...e,x:n,y:l,width:r,height:o}}(e,r)))});if(1!==e.length||"statistics"===e[0].type)return null;const{x:c,y:u,width:m,height:b}=e[0];return r.a.createElement(s.a,{style:[A.resizeHandler,{left:c+m,top:u+b}],onMouseDown:i,__self:this,__source:{fileName:K,lineNumber:53,columnNumber:5}},r.a.createElement(s.a,{style:A.resizeHandlerDot,__self:this,__source:{fileName:K,lineNumber:60,columnNumber:7}}))}const A=c.a.create({resizeHandler:{width:24,height:24,marginLeft:-13,marginTop:-13,justifyContent:"center",alignItems:"center",cursor:"nwse-resize"},resizeHandlerDot:{width:10,height:10,borderRadius:4,backgroundColor:"white",borderWidth:2,borderColor:"blue",position:"absolute"}});function $(e){const[t,n]=Object(l.useState)([]),r=Object(a.useRecoilValue)(C),o=Object(a.useRecoilCallback)(async({getPromise:e},t)=>await Promise.all(t.map(t=>e(G(t)))),[]),i=Object(a.useRecoilCallback)(({set:e},t)=>{t.forEach(t=>{e(G(t.id),t)})},[]),s=Object(l.useCallback)(async()=>{const e=await o(r);n(e)},[o,r]),{onMouseDown:c}=X(n=>{const{status:l,offset:r}=n;if(e(n),"moving"===l&&t.length){const e=t.map(e=>({...e,x:e.x+r.x,y:e.y+r.y}));i(e)}});return Object(l.useEffect)(()=>{s()},[r,s]),{onMouseDown:c}}var F="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Selection.js";function J(){const e=Object(a.useRecoilValue)(D),t=Object(a.useRecoilValue)(z),n=Object(a.useSetRecoilState)(C),{onMouseDown:l}=$(({status:l})=>{if(!t)return null;"start"===l&&n(e),"end"===l&&n([])});if(!t)return null;const{x:o,y:i,width:c,height:u}=t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:[q.selection,{left:o,top:i,width:c,height:u}],onMouseDown:l,__self:this,__source:{fileName:F,lineNumber:36,columnNumber:7}}),r.a.createElement(Z,{__self:this,__source:{fileName:F,lineNumber:45,columnNumber:7}}))}const q=c.a.create({selection:{borderWidth:2,borderStyle:"dashed",borderColor:"blue",position:"absolute",cursor:"move"}});function Q(e){const t=Object(a.useSetRecoilState)(D),n=Object(a.useRecoilValue)(k),o=Object(l.useCallback)(()=>{t([])},[t]);return r.a.createElement(s.a,{style:[c.a.absoluteFill,{backgroundColor:n}],onClick:o,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasBackground.js",lineNumber:15,columnNumber:5}})}var ee="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Canvas.js";function te(){const e=Object(l.useRef)(),t=Object(a.useRecoilValue)(S),n=Object(a.useSetRecoilState)(x);return r.a.createElement(s.a,{style:ne.root,ref:e,onLayout:({nativeEvent:{layout:{x:e,y:t,width:l,height:r}}})=>n({x:e,y:t,width:l,height:r}),__self:this,__source:{fileName:ee,lineNumber:21,columnNumber:5}},r.a.createElement(s.a,{style:ne.container,__self:this,__source:{fileName:ee,lineNumber:22,columnNumber:7}},r.a.createElement(Q,{__self:this,__source:{fileName:ee,lineNumber:23,columnNumber:9}}),t.map(e=>r.a.createElement(Y,{key:"item-"+e,id:e,__self:this,__source:{fileName:ee,lineNumber:24,columnNumber:28}})),r.a.createElement(J,{__self:this,__source:{fileName:ee,lineNumber:25,columnNumber:9}})))}const ne=c.a.create({root:{flex:1,backgroundColor:"white",overflow:"auto"},container:{flex:1},svg:{flex:1}});var le="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/common/Button.js";function re({Icon:e,disabled:t,style:n,children:o,title:i,accessibilityLabel:c,...a}){const u=Object(l.useRef)();return Object(l.useEffect)(()=>{u.current.setNativeProps({title:i})},[i]),r.a.createElement(s.a,Object.assign({},a,{accessibilityRole:"button",accessibilityLabel:c||i,disabled:t,ref:u,style:[oe.root,t&&oe.disabled,e&&oe.iconOnly,!e&&oe.text,n],__self:this,__source:{fileName:le,lineNumber:16,columnNumber:5}}),e&&r.a.createElement(e,{style:[t&&oe.disabledIcon],__self:this,__source:{fileName:le,lineNumber:30,columnNumber:16}}),!e&&o)}const oe=c.a.create({root:{borderWidth:1,borderColor:"#d6d8d9",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",borderRadius:4},iconOnly:{width:32,height:32},text:{paddingVertical:8,paddingHorizontal:8},disabled:{cursor:"default",opacity:.8},disabledIcon:{fill:"#ccc"}});function ie({newShapeProps:e={},...t}){const[n,o]=Object(l.useState)(null),i=Object(a.useSetRecoilState)(S),s=Object(a.useSetRecoilState)(D),c=Object(a.useRecoilValue)(x),u=Object(a.useRecoilCallback)(async({getPromise:e},t)=>{let n=v(t);return await e(G(n))}),m=T(),{onMouseDown:b}=X(({status:t,origin:l,offset:r})=>{"start"===t&&(o(null),u({...e,x:l.clientX-c.x,y:l.clientY-c.y}).then(e=>{o(e),i(t=>[...t,e.id]),s([])})),"moving"===t&&n&&m({...n,x:l.clientX+r.x-c.x,y:l.clientY+r.y-c.y}),"end"===t&&n&&(o(null),s([n.id]))});return r.a.createElement(re,Object.assign({},t,{onMouseDown:b,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewItemButton.js",lineNumber:51,columnNumber:10}}))}var se=n(20);function ce(e){const{ariaLabel:t,children:n,width:l,height:r,viewBox:o}=e,i=[ae.root,e.style];return Object(se.a)("svg",{role:"presentation",width:l,height:r,"aria-label":t,style:i,viewBox:o||"0 0 24 24"},n)}ce.defaultProps={width:24,height:24};const ae=c.a.create({root:{display:"inline-block",fill:"currentcolor",height:"1.25em",maxWidth:"100%",position:"relative",userSelect:"none",textAlignVertical:"text-bottom"},iconRtl:{transform:[{scaleX:-1}]}});var ue="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Square.js";function me(e){return r.a.createElement(ce,Object.assign({},e,{__self:this,__source:{fileName:ue,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.48 0 0 .48 0 0)",__self:this,__source:{fileName:ue,lineNumber:10,columnNumber:7}},r.a.createElement("path",{fill:"#000",d:"M44 1h-38c-2.757 0-5 2.243-5 5v38c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5v-38c0-2.757-2.243-5-5-5Zm3 43c0 1.654-1.346 3-3 3h-38c-1.654 0-3-1.346-3-3v-38c0-1.654 1.346-3 3-3h38c1.654 0 3 1.346 3 3v38Z",__self:this,__source:{fileName:ue,lineNumber:11,columnNumber:9}})))}function be({style:e,...t}){return r.a.createElement(ie,Object.assign({},t,{Icon:me,style:e,title:"Drag to create a new Rectangle",__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewRectangleButton.js",lineNumber:7,columnNumber:5}}))}var _e="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Image.js";function fe(e){return r.a.createElement(ce,Object.assign({},e,{__self:this,__source:{fileName:_e,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{__self:this,__source:{fileName:_e,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M19.235,1.75H4.765c-1.662,0-3.015,1.352-3.015,3.015v14.471c0,1.662,1.352,3.015,3.015,3.015h14.471  c1.662,0,3.015-1.352,3.015-3.015V4.765C22.25,3.102,20.898,1.75,19.235,1.75z M21.044,19.235c0,0.997-0.811,1.809-1.809,1.809  H4.765c-0.997,0-1.809-0.811-1.809-1.809v-2.181l4.866-5.407l6.573,5.975l3.635-3.029l3.015,2.512V19.235z M21.044,15.536  l-3.015-2.512l-3.601,3L7.737,9.94l-4.781,5.312V4.765c0-0.997,0.811-1.809,1.809-1.809h14.471c0.997,0,1.809,0.811,1.809,1.809  V15.536z",__self:this,__source:{fileName:_e,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M16.221,10.794c1.662,0,3.015-1.352,3.015-3.015s-1.352-3.015-3.015-3.015c-1.662,0-3.015,1.352-3.015,3.015  S14.558,10.794,16.221,10.794z M16.221,5.971c0.997,0,1.809,0.811,1.809,1.809s-0.811,1.809-1.809,1.809s-1.809-0.811-1.809-1.809  S15.223,5.971,16.221,5.971z",__self:this,__source:{fileName:_e,lineNumber:12,columnNumber:9}})))}function he({style:e,...t}){return r.a.createElement(ie,Object.assign({},t,{Icon:fe,style:e,title:"Drag to create a new Image",newShapeProps:{type:"image",uri:"/recoil-paint/olympic-marmot.jpg",originWidth:1062,originHeight:1388,width:306,height:400,label:""},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewImageButton.js",lineNumber:17,columnNumber:5}}))}var Ne="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Statistics.js";function de(e){return r.a.createElement(ce,Object.assign({},e,{__self:this,__source:{fileName:Ne,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.380952 0 0 .380952 0 0)",__self:this,__source:{fileName:Ne,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M10 9h-8c-1.104 0-2 .896-2 2v40c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-40c0-1.104-.896-2-2-2Z",__self:this,__source:{fileName:Ne,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M27.833 23h-8c-1.104 0-2.833.11-2.833.864v27.273c0 .753 1.729 1.863 2.833 1.863h8c1.105 0 1.167-1.11 1.167-1.863v-27.273c0-.754-.062-.864-1.167-.864Z",__self:this,__source:{fileName:Ne,lineNumber:12,columnNumber:9}}),r.a.createElement("path",{d:"M44.5 12h-8c-1.104 0-2.5.334-2.5 1.364v37.273c0 1.029 1.396 2.363 2.5 2.363h8c1.104 0 1.5-1.334 1.5-2.363v-37.273c0-1.03-.396-1.364-1.5-1.364Z",__self:this,__source:{fileName:Ne,lineNumber:13,columnNumber:9}}),r.a.createElement("path",{d:"M61.5 37h-8c-1.104 0-2.5-.175-2.5.228v14.545c0 .402 1.396 1.227 2.5 1.227h8c1.104 0 1.5-.825 1.5-1.228v-14.544c0-.403-.396-.228-1.5-.228Z",__self:this,__source:{fileName:Ne,lineNumber:14,columnNumber:9}})))}function ge({style:e,...t}){return r.a.createElement(ie,Object.assign({},t,{Icon:de,style:e,title:"Drag to create a new Statistics",newShapeProps:{type:"statistics",width:100,height:100,status:"loading",label:""},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewStatisticsButton.js",lineNumber:15,columnNumber:5}}))}var pe="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/Toolbar.js";function ye(){return r.a.createElement(s.a,{style:je.root,__self:this,__source:{fileName:pe,lineNumber:9,columnNumber:5}},r.a.createElement(be,{style:je.button,__self:this,__source:{fileName:pe,lineNumber:10,columnNumber:7}}),r.a.createElement(he,{style:je.button,__self:this,__source:{fileName:pe,lineNumber:11,columnNumber:7}}),r.a.createElement(ge,{style:je.button,__self:this,__source:{fileName:pe,lineNumber:12,columnNumber:7}}))}const je=c.a.create({root:{flexDirection:"row",marginBottom:16},button:{marginRight:8}});var Ee="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfo.js";function we({id:e}){const t=Object(a.useRecoilValue)(G(e)),{label:n,x:l,y:o}=t;return r.a.createElement(s.a,{style:ve.root,__self:this,__source:{fileName:Ee,lineNumber:11,columnNumber:5}},n?r.a.createElement(u.a,{style:ve.label,__self:this,__source:{fileName:Ee,lineNumber:12,columnNumber:16}},n):null,r.a.createElement(u.a,{style:ve.subLabel,__self:this,__source:{fileName:Ee,lineNumber:13,columnNumber:7}},`(x = ${l} y = ${o})`))}const ve=c.a.create({root:{marginBottom:16},label:{fontWeight:"bold"},subLabel:{}});var Oe="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfoList.js";function xe(){const e=Object(a.useRecoilValue)(S);return r.a.createElement(s.a,{style:ke.root,__self:this,__source:{fileName:Oe,lineNumber:11,columnNumber:5}},e.map(e=>r.a.createElement(we,{key:"item-info-"+e,id:e,__self:this,__source:{fileName:Oe,lineNumber:12,columnNumber:26}})))}const ke=c.a.create({root:{flex:1,overflow:"auto"}});var Se="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/AddRectsButton.js";function De(){const[e,t]=Object(a.useRecoilState)(S),n=Object(a.useSetRecoilState)(D);return r.a.createElement(re,{style:Ce.root,onClick:()=>{let l=[],r=e.length;for(let e=0;e<100;e++){let t=r+e,n=Math.floor(t/5),o=t%5,i=v({x:16*(o+1)+100*o,y:16*(n+1)+100*n,width:100,height:100});l.push(i)}t([...e,...l]),n([])},__self:this,__source:{fileName:Se,lineNumber:34,columnNumber:5}},r.a.createElement(u.a,{style:Ce.text,__self:this,__source:{fileName:Se,lineNumber:35,columnNumber:7}},"Add 100 Rects"))}const Ce=c.a.create({root:{backgroundColor:"#12850b"},text:{color:"white"}});var Re="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/Sidebar.js";function He(){return r.a.createElement(s.a,{style:Ie.root,__self:this,__source:{fileName:Re,lineNumber:9,columnNumber:5}},r.a.createElement(ye,{__self:this,__source:{fileName:Re,lineNumber:10,columnNumber:7}}),r.a.createElement(xe,{__self:this,__source:{fileName:Re,lineNumber:11,columnNumber:7}}),r.a.createElement(s.a,{__self:this,__source:{fileName:Re,lineNumber:12,columnNumber:7}},r.a.createElement(De,{__self:this,__source:{fileName:Re,lineNumber:13,columnNumber:9}})))}const Ie=c.a.create({root:{width:240,height:"100vh",borderRightWidth:1,borderRightColor:"#d6d8d9",borderRightType:"solid",padding:16}});var Me=n(134),Ge="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/ColorPicker.js";function Ue(){const[e,t]=Object(l.useState)(!1),[n,o]=Object(a.useRecoilState)(k),i=Object(l.useCallback)(e=>{o(e.hex)},[o]),c=Object(l.useCallback)(()=>{t(!0)},[]);return Object(l.useEffect)(()=>{function e(e){e.target.closest("#color-picker")||t(!1)}return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}},[]),r.a.createElement(s.a,{style:Le.root,onClick:c,__self:this,__source:{fileName:Ge,lineNumber:35,columnNumber:5}},r.a.createElement(s.a,{style:[Le.inner,{backgroundColor:n}],__self:this,__source:{fileName:Ge,lineNumber:36,columnNumber:7}}),e&&r.a.createElement(s.a,{style:Le.popup,nativeID:"color-picker",__self:this,__source:{fileName:Ge,lineNumber:38,columnNumber:9}},r.a.createElement(Me.SketchPicker,{color:n,onChangeComplete:i,__self:this,__source:{fileName:Ge,lineNumber:39,columnNumber:11}})))}const Le=c.a.create({root:{borderRadius:"50%",backgroundColor:"white",borderWidth:1,borderColor:"#d6d8d9",width:24,height:24,marginLeft:16,padding:2},inner:{borderRadius:"50%",width:18,height:18},popup:{position:"absolute",right:32}});var Ve=n(321);function ze(e){const{value:t,style:n,onChangeNumber:l,...o}=e;return r.a.createElement(Ve.a,Object.assign({},o,{value:t,style:[Be.input,n],onChangeText:e=>{let t=parseInt(e);isNaN(t)||l(t)},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/common/NumberInput.js",lineNumber:16,columnNumber:5}}))}const Be=c.a.create({input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#d6d8d9",borderWidth:1,marginTop:8}});var We="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/SelectionInfo.js";function Pe(){const[e,t]=Object(a.useRecoilState)(U),n=Object(l.useCallback)((n,l)=>{t([{...e[0],[n]:l}])},[e,t]);if(1!==e.length)return null;const o=e[0];return r.a.createElement(s.a,{style:Te.root,__self:this,__source:{fileName:We,lineNumber:22,columnNumber:5}},r.a.createElement(s.a,{style:Te.row,__self:this,__source:{fileName:We,lineNumber:23,columnNumber:7}},r.a.createElement(u.a,{__self:this,__source:{fileName:We,lineNumber:24,columnNumber:9}},"Selection:")),r.a.createElement(s.a,{style:Te.row,__self:this,__source:{fileName:We,lineNumber:26,columnNumber:7}},r.a.createElement(s.a,{style:Te.column,__self:this,__source:{fileName:We,lineNumber:27,columnNumber:9}},r.a.createElement(u.a,{style:Te.bold,__self:this,__source:{fileName:We,lineNumber:28,columnNumber:11}},"X"),r.a.createElement(ze,{value:o.x,style:Te.input,onChangeNumber:e=>n("x",e),__self:this,__source:{fileName:We,lineNumber:29,columnNumber:11}})),r.a.createElement(s.a,{style:Te.columnSpace,__self:this,__source:{fileName:We,lineNumber:35,columnNumber:9}}),r.a.createElement(s.a,{style:Te.column,__self:this,__source:{fileName:We,lineNumber:36,columnNumber:9}},r.a.createElement(u.a,{style:Te.bold,__self:this,__source:{fileName:We,lineNumber:37,columnNumber:11}},"Y"),r.a.createElement(ze,{value:o.y,style:Te.input,onChangeNumber:e=>n("y",e),__self:this,__source:{fileName:We,lineNumber:38,columnNumber:11}}))),-1===["image"].indexOf(o.type)&&r.a.createElement(s.a,{style:Te.labelRow,__self:this,__source:{fileName:We,lineNumber:46,columnNumber:9}},r.a.createElement(u.a,{style:Te.bold,__self:this,__source:{fileName:We,lineNumber:47,columnNumber:11}},"Label:"),r.a.createElement(Ve.a,{value:o.label,style:Te.input,onChangeText:e=>n("label",e),__self:this,__source:{fileName:We,lineNumber:48,columnNumber:11}})))}const Te=c.a.create({root:{},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},labelRow:{},column:{flex:1},columnSpace:{width:8},bold:{fontWeight:"bold"},input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#d6d8d9",borderWidth:1,marginTop:8}});var Xe="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/InformationBar.js";function Ye(){return r.a.createElement(s.a,{style:Ke.root,__self:this,__source:{fileName:Xe,lineNumber:8,columnNumber:5}},r.a.createElement(s.a,{style:Ke.row,__self:this,__source:{fileName:Xe,lineNumber:9,columnNumber:7}},r.a.createElement(u.a,{__self:this,__source:{fileName:Xe,lineNumber:10,columnNumber:9}},"Document:")),r.a.createElement(s.a,{style:[Ke.row,Ke.colorRow],__self:this,__source:{fileName:Xe,lineNumber:12,columnNumber:7}},r.a.createElement(u.a,{style:Ke.title,__self:this,__source:{fileName:Xe,lineNumber:13,columnNumber:9}},"Background color:"),r.a.createElement(Ue,{__self:this,__source:{fileName:Xe,lineNumber:14,columnNumber:9}})),r.a.createElement(Pe,{__self:this,__source:{fileName:Xe,lineNumber:16,columnNumber:7}}))}const Ke=c.a.create({root:{width:240,borderLeftWidth:1,borderLeftColor:"#d6d8d9",borderLeftType:"solid",padding:16},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},colorRow:{zIndex:1},title:{fontWeight:"bold"}});var Ze="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/Main.js";function Ae(){return r.a.createElement(s.a,{style:$e.root,__self:this,__source:{fileName:Ze,lineNumber:9,columnNumber:5}},r.a.createElement(He,{__self:this,__source:{fileName:Ze,lineNumber:10,columnNumber:7}}),r.a.createElement(te,{__self:this,__source:{fileName:Ze,lineNumber:11,columnNumber:7}}),r.a.createElement(Ye,{__self:this,__source:{fileName:Ze,lineNumber:12,columnNumber:7}}))}const $e=c.a.create({root:{height:"100vh",flexDirection:"row",backgroundColor:"#eef0f4"}});var Fe="/Users/junminliu/Documents/GitHub/recoil-paint/src/App.js";var Je=function(){return r.a.createElement(a.RecoilRoot,{__self:this,__source:{fileName:Fe,lineNumber:7,columnNumber:5}},r.a.createElement(Ae,{__self:this,__source:{fileName:Fe,lineNumber:8,columnNumber:7}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe="/Users/junminliu/Documents/GitHub/recoil-paint/src/index.js";i.a.render(r.a.createElement(r.a.StrictMode,{__self:void 0,__source:{fileName:qe,lineNumber:7,columnNumber:3}},r.a.createElement(Je,{__self:void 0,__source:{fileName:qe,lineNumber:8,columnNumber:5}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[135,1,2]]]);
//# sourceMappingURL=main.407927a2.chunk.js.map