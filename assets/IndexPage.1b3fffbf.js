import{c as p,h as x,r as E,M as Se,N as tt,g as H,P as kt,O as Oe,t as ie,Q as Re,w as T,o as Pe,q as J,R as Ct,u as ke,S as We,a as qt,U as St,V as Pt,W as nt,X as Be,Y as Bt,H as $t,Z as Et,i as Ce,k as A,l as ot,m as Tt,_ as Ht,$ as lt,y as Q,a0 as z,j as _,d as Mt,a1 as At,z as Dt,A as S,E as K,a2 as ee,F as te,B as $,K as ne,a3 as Fe,C as I,G as U,a4 as ve,a5 as oe,a6 as Lt,a7 as It,a8 as he}from"./index.97f03f52.js";import{c as Qt,g as Ot,u as Rt,Q as Ve}from"./use-quasar.72c26b2b.js";import{c as D,h as F,e as Wt,f as Ft,Q as Vt,i as zt,u as jt,j as Nt}from"./dom.cf11f81d.js";import{u as Kt,a as Ut,v as Gt,g as me,b as at,c as it,Q as Y,d as Yt,R as ge}from"./QBtn.c0740e53.js";import{u as Xt}from"./vue-i18n.runtime.4270fa9b.js";var be=D({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>x("div",{class:n.value},F(t.default))}});const $e={dark:{type:Boolean,default:null}};function Ee(e,t){return p(()=>e.dark===null?t.dark.isActive:e.dark)}var le=D({name:"QItem",props:{...$e,...Kt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=H(),l=Ee(e,o),{hasLink:u,linkAttrs:a,linkClass:r,linkTag:d,navigateOnClick:h}=Ut(),c=E(null),m=E(null),y=p(()=>e.clickable===!0||u.value===!0||e.tag==="label"),i=p(()=>e.disable!==!0&&y.value===!0),f=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=p(()=>{if(e.insetLevel===void 0)return null;const s=o.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function P(s){i.value===!0&&(m.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===c.value?m.value.focus():document.activeElement===m.value&&c.value.focus()),h(s))}function k(s){if(i.value===!0&&Se(s,13)===!0){tt(s),s.qKeyEvent=!0;const v=new MouseEvent("click",s);v.qKeyEvent=!0,c.value.dispatchEvent(v)}n("keyup",s)}function g(){const s=Wt(t.default,[]);return i.value===!0&&s.unshift(x("div",{class:"q-focus-helper",tabindex:-1,ref:m})),s}return()=>{const s={ref:c,class:f.value,style:w.value,role:"listitem",onClick:P,onKeyup:k};return i.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,a.value)):y.value===!0&&(s["aria-disabled"]="true"),x(d.value,s,g())}}}),pe=D({name:"QList",props:{...$e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=H(),o=Ee(e,n.proxy.$q),l=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>x(e.tag,{class:l.value},F(t.default))}}),Zt=D({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=p(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>x("div",{class:n.value},F(t.default))}});function Jt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),kt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const en={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function tn({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:u}=H(),a=E(null);let r=null;function d(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const h={};n===void 0&&(Object.assign(h,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Se(i,13)===!0&&h.toggle(i)},contextClick(i){l.hide(i),Oe(i),ie(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:Oe,mobileTouch(i){if(h.mobileCleanup(i),d(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const f=i.target;Re(h,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&i!==void 0&&Jt()}}),n=function(i=o.contextMenu){if(o.noParentEvent===!0||a.value===null)return;let f;i===!0?l.$q.platform.is.mobile===!0?f=[[a.value,"touchstart","mobileTouch","passive"]]:f=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:f=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],Re(h,"anchor",f)});function c(){Ct(h,"anchor")}function m(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function y(){if(o.target===!1||o.target===""||l.$el.parentNode===null)a.value=null;else if(o.target===!0)m(l.$el.parentNode);else{let i=o.target;if(typeof o.target=="string")try{i=document.querySelector(o.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return T(()=>o.contextMenu,i=>{a.value!==null&&(c(),n(i))}),T(()=>o.target,()=>{a.value!==null&&c(),y()}),T(()=>o.noParentEvent,i=>{a.value!==null&&(i===!0?c():n())}),Pe(()=>{y(),t!==!0&&o.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),J(()=>{r!==null&&clearTimeout(r),c()}),{anchorEl:a,canShow:d,anchorEvents:h}}function nn(e,t){const n=E(null);let o;function l(r,d){const h=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:o;r!==window&&r[h]("scroll",c,ke.passive),window[h]("scroll",c,ke.passive),o=d}function u(){n.value!==null&&(l(n.value),n.value=null)}const a=T(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return J(a),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const on={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ln=["beforeShow","show","beforeHide","hide"];function an({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:u}){const a=H(),{props:r,emit:d,proxy:h}=a;let c;function m(g){e.value===!0?f(g):y(g)}function y(g){if(r.disable===!0||g!==void 0&&g.qAnchorHandled===!0||t!==void 0&&t(g)!==!0)return;const s=r["onUpdate:modelValue"]!==void 0;s===!0&&(d("update:modelValue",!0),c=g,ie(()=>{c===g&&(c=void 0)})),(r.modelValue===null||s===!1)&&i(g)}function i(g){e.value!==!0&&(e.value=!0,d("beforeShow",g),o!==void 0?o(g):d("show",g))}function f(g){if(r.disable===!0)return;const s=r["onUpdate:modelValue"]!==void 0;s===!0&&(d("update:modelValue",!1),c=g,ie(()=>{c===g&&(c=void 0)})),(r.modelValue===null||s===!1)&&w(g)}function w(g){e.value!==!1&&(e.value=!1,d("beforeHide",g),l!==void 0?l(g):d("hide",g))}function P(g){r.disable===!0&&g===!0?r["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):g===!0!==e.value&&(g===!0?i:w)(c)}T(()=>r.modelValue,P),n!==void 0&&Gt(a)===!0&&T(()=>h.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),u===!0&&Pe(()=>{P(r.modelValue)});const k={show:y,hide:f,toggle:m};return Object.assign(h,k),k}let G=[],Z=[];function rt(e){Z=Z.filter(t=>t!==e)}function rn(e){rt(e),Z.push(e)}function ze(e){rt(e),Z.length===0&&G.length!==0&&(G[G.length-1](),G=[])}function sn(e){Z.length===0?e():G.push(e)}let un=1,cn=document.body;function dn(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${un++}`:e,We.globalNodes!==void 0){const o=We.globalNodes.class;o!==void 0&&(n.className=o)}return cn.appendChild(n),n}function fn(e){e.remove()}const X=[];function vn(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return me(e)}else if(e.__qPortal===!0){const n=me(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=me(e)}while(e!=null)}function hn(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function mn(e,t,n,o){const l=E(!1),u=E(!1);let a=null;const r={},d=o==="dialog"&&hn(e);function h(m){if(m===!0){ze(r),u.value=!0;return}u.value=!1,l.value===!1&&(d===!1&&a===null&&(a=dn(!1,o)),l.value=!0,X.push(e.proxy),rn(r))}function c(m){if(u.value=!1,m!==!0)return;ze(r),l.value=!1;const y=X.indexOf(e.proxy);y!==-1&&X.splice(y,1),a!==null&&(fn(a),a=null)}return qt(()=>{c(!0)}),e.proxy.__qPortal=!0,St(e.proxy,"contentEl",()=>t.value),{showPortal:h,hidePortal:c,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>d===!0?n():l.value===!0?[x(Pt,{to:a},n())]:void 0}}const st={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function gn(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function bn(){let e;const t=H();function n(){e=void 0}return nt(n),J(n),{removeTick:n,registerTick(o){e=o,ie(()=>{e===o&&(at(t)===!1&&e(),e=void 0)})}}}function pn(){let e=null;const t=H();function n(){e!==null&&(clearTimeout(e),e=null)}return nt(n),J(n),{removeTimeout:n,registerTimeout(o,l){n(),at(t)===!1&&(e=setTimeout(o,l))}}}const O=[];let j;function yn(e){j=e.keyCode===27}function xn(){j===!0&&(j=!1)}function wn(e){j===!0&&(j=!1,Se(e,27)===!0&&O[O.length-1](e))}function ut(e){window[e]("keydown",yn),window[e]("blur",xn),window[e]("keyup",wn),j=!1}function _n(e){Be.is.desktop===!0&&(O.push(e),O.length===1&&ut("addEventListener"))}function je(e){const t=O.indexOf(e);t>-1&&(O.splice(t,1),O.length===0&&ut("removeEventListener"))}const R=[];function ct(e){R[R.length-1](e)}function kn(e){Be.is.desktop===!0&&(R.push(e),R.length===1&&document.body.addEventListener("focusin",ct))}function Cn(e){const t=R.indexOf(e);t>-1&&(R.splice(t,1),R.length===0&&document.body.removeEventListener("focusin",ct))}const{notPassiveCapture:re}=ke,W=[];function se(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=X.length-1;for(;n>=0;){const o=X[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=W.length-1;o>=0;o--){const l=W[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function qn(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",se,re),document.addEventListener("touchstart",se,re))}function Ne(e){const t=W.findIndex(n=>n===e);t>-1&&(W.splice(t,1),W.length===0&&(document.removeEventListener("mousedown",se,re),document.removeEventListener("touchstart",se,re)))}let Ke,Ue;function Ge(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Sn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const qe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{qe[`${e}#ltr`]=e,qe[`${e}#rtl`]=e});function Ye(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:qe[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Pn(e,t){let{top:n,left:o,right:l,bottom:u,width:a,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],u+=t[1],l+=t[0],a+=t[0],r+=t[1]),{top:n,bottom:u,height:r,left:o,right:l,width:a,middle:o+(l-o)/2,center:n+(u-n)/2}}function Bn(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function $n(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Xe(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function dt(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{dt(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:u,selfOrigin:a,absoluteOffset:r,fit:d,cover:h,maxHeight:c,maxWidth:m}=e;if(Be.is.ios===!0&&window.visualViewport!==void 0){const V=document.body.style,{offsetLeft:B,offsetTop:M}=window.visualViewport;B!==Ke&&(V.setProperty("--q-pe-left",B+"px"),Ke=B),M!==Ue&&(V.setProperty("--q-pe-top",M+"px"),Ue=M)}const{scrollLeft:y,scrollTop:i}=n,f=r===void 0?Pn(l,h===!0?[0,0]:o):Bn(l,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:m||"100vw",maxHeight:c||"100vh",visibility:"visible"});const{offsetWidth:w,offsetHeight:P}=n,{elWidth:k,elHeight:g}=d===!0||h===!0?{elWidth:Math.max(f.width,w),elHeight:h===!0?Math.max(f.height,P):P}:{elWidth:w,elHeight:P};let s={maxWidth:m,maxHeight:c};(d===!0||h===!0)&&(s.minWidth=f.width+"px",h===!0&&(s.minHeight=f.height+"px")),Object.assign(n.style,s);const v=$n(k,g);let C=Xe(f,v,u,a);if(r===void 0||o===void 0)ye(C,f,v,u,a);else{const{top:V,left:B}=C;ye(C,f,v,u,a);let M=!1;if(C.top!==V){M=!0;const L=2*o[1];f.center=f.top-=L,f.bottom-=L+2}if(C.left!==B){M=!0;const L=2*o[0];f.middle=f.left-=L,f.right-=L+2}M===!0&&(C=Xe(f,v,u,a),ye(C,f,v,u,a))}s={top:C.top+"px",left:C.left+"px"},C.maxHeight!==void 0&&(s.maxHeight=C.maxHeight+"px",f.height>C.maxHeight&&(s.minHeight=s.maxHeight)),C.maxWidth!==void 0&&(s.maxWidth=C.maxWidth+"px",f.width>C.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(n.style,s),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==y&&(n.scrollLeft=y)}function ye(e,t,n,o,l){const u=n.bottom,a=n.right,r=Qt(),d=window.innerHeight-r,h=document.body.clientWidth;if(e.top<0||e.top+u>d)if(l.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-u):0,e.maxHeight=Math.min(u,d);else if(t[o.vertical]>d/2){const c=Math.min(d,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,c),e.top=Math.max(0,c-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,d-e.top);if(e.left<0||e.left+a>h)if(e.maxWidth=Math.min(a,h),l.horizontal==="middle")e.left=t[o.horizontal]>h/2?Math.max(0,h-a):0;else if(t[o.horizontal]>h/2){const c=Math.min(h,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,h-e.left)}var En=D({name:"QMenu",inheritAttrs:!1,props:{...en,...on,...$e,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ge},self:{type:String,validator:Ge},offset:{type:Array,validator:Sn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ln,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,u,a,r;const d=H(),{proxy:h}=d,{$q:c}=h,m=E(null),y=E(!1),i=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Ee(e,c),{registerTick:w,removeTick:P}=bn(),{registerTimeout:k}=pn(),{transitionProps:g,transitionStyle:s}=gn(e),{localScrollTarget:v,changeScrollEvent:C,unconfigureScrollTarget:V}=nn(e,Ie),{anchorEl:B,canShow:M}=tn({showing:y}),{hide:L}=an({showing:y,canShow:M,handleShow:bt,handleHide:pt,hideOnRouteChange:i,processOnMount:!0}),{showPortal:He,hidePortal:Me,renderPortal:vt}=mn(d,m,xt,"menu"),ue={anchorEl:B,innerRef:m,onClickOutside(b){if(e.persistent!==!0&&y.value===!0)return L(b),(b.type==="touchstart"||b.target.classList.contains("q-dialog__backdrop"))&&tt(b),!0}},Ae=p(()=>Ye(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),ht=p(()=>e.cover===!0?Ae.value:Ye(e.self||"top start",c.lang.rtl)),mt=p(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),gt=p(()=>e.autoClose===!0?{onClick:yt}:{}),De=p(()=>y.value===!0&&e.persistent!==!0);T(De,b=>{b===!0?(_n(de),qn(ue)):(je(de),Ne(ue))});function ce(){sn(()=>{let b=m.value;b&&b.contains(document.activeElement)!==!0&&(b=b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))})}function bt(b){if(l=e.noRefocus===!1?document.activeElement:null,kn(Qe),He(),Ie(),u=void 0,b!==void 0&&(e.touchPosition||e.contextMenu)){const fe=Bt(b);if(fe.left!==void 0){const{top:wt,left:_t}=B.value.getBoundingClientRect();u={left:fe.left-_t,top:fe.top-wt}}}a===void 0&&(a=T(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,N)),e.noFocus!==!0&&document.activeElement.blur(),w(()=>{N(),e.noFocus!==!0&&ce()}),k(()=>{c.platform.is.ios===!0&&(r=e.autoClose,m.value.click()),N(),He(!0),n("show",b)},e.transitionDuration)}function pt(b){P(),Me(),Le(!0),l!==null&&(b===void 0||b.qClickOutside!==!0)&&(((b&&b.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),k(()=>{Me(!0),n("hide",b)},e.transitionDuration)}function Le(b){u=void 0,a!==void 0&&(a(),a=void 0),(b===!0||y.value===!0)&&(Cn(Qe),V(),Ne(ue),je(de)),b!==!0&&(l=null)}function Ie(){(B.value!==null||e.scrollTarget!==void 0)&&(v.value=Ot(B.value,e.scrollTarget),C(v.value,N))}function yt(b){r!==!0?(vn(h,b),n("click",b)):r=!1}function Qe(b){De.value===!0&&e.noFocus!==!0&&Ft(m.value,b.target)!==!0&&ce()}function de(b){n("escapeKey"),L(b)}function N(){dt({targetEl:m.value,offset:e.offset,anchorEl:B.value,anchorOrigin:Ae.value,selfOrigin:ht.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function xt(){return x($t,g.value,()=>y.value===!0?x("div",{role:"menu",...o,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+mt.value,o.class],style:[o.style,s.value],...gt.value},F(t.default)):null)}return J(Le),Object.assign(h,{focus:ce,updatePosition:N}),vt}});let xe,ae=0;const q=new Array(256);for(let e=0;e<256;e++)q[e]=(e+256).toString(16).substring(1);const Tn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),Ze=4096;function Hn(){(xe===void 0||ae+16>Ze)&&(ae=0,xe=Tn(Ze));const e=Array.prototype.slice.call(xe,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,q[e[0]]+q[e[1]]+q[e[2]]+q[e[3]]+"-"+q[e[4]]+q[e[5]]+"-"+q[e[6]]+q[e[7]]+"-"+q[e[8]]+q[e[9]]+"-"+q[e[10]]+q[e[11]]+q[e[12]]+q[e[13]]+q[e[14]]+q[e[15]]}const Mn=Object.keys(it),An=e=>Mn.reduce((t,n)=>{const o=e[n];return o!==void 0&&(t[n]=o),t},{});var we=D({name:"QBtnDropdown",props:{...it,...st,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:o}=H(),l=E(e.modelValue),u=E(null),a=Hn(),r=p(()=>{const v={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,"aria-label":e.toggleAriaLabel||o.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(v["aria-disabled"]="true"),v}),d=p(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),h=p(()=>Yt(e)),c=p(()=>An(e));T(()=>e.modelValue,v=>{u.value!==null&&u.value[v?"show":"hide"]()}),T(()=>e.split,s);function m(v){l.value=!0,n("beforeShow",v)}function y(v){n("show",v),n("update:modelValue",!0)}function i(v){l.value=!1,n("beforeHide",v)}function f(v){n("hide",v),n("update:modelValue",!1)}function w(v){n("click",v)}function P(v){Et(v),s(),n("click",v)}function k(v){u.value!==null&&u.value.toggle(v)}function g(v){u.value!==null&&u.value.show(v)}function s(v){u.value!==null&&u.value.hide(v)}return Object.assign(o,{show:g,hide:s,toggle:k}),Pe(()=>{e.modelValue===!0&&g()}),()=>{const v=[x(Vt,{class:d.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&v.push(x(En,{ref:u,id:a,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:m,onShow:y,onBeforeHide:i,onHide:f},t.default)),e.split===!1?x(Y,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...r.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:w},{default:()=>F(t.label,[]).concat(v),loading:t.loading}):x(Zt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...h.value,glossy:e.glossy,stretch:e.stretch},()=>[x(Y,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:P},{default:t.label,loading:t.loading}),x(Y,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...r.value,...h.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>v)])}}});const Dn={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Ln(){const{props:e,proxy:{$q:t}}=H(),n=Ce(ot,A);if(n===A)return console.error("QPageSticky needs to be child of QLayout"),A;const o=p(()=>{const m=e.position;return{top:m.indexOf("top")>-1,right:m.indexOf("right")>-1,bottom:m.indexOf("bottom")>-1,left:m.indexOf("left")>-1,vertical:m==="top"||m==="bottom",horizontal:m==="left"||m==="right"}}),l=p(()=>n.header.offset),u=p(()=>n.right.offset),a=p(()=>n.footer.offset),r=p(()=>n.left.offset),d=p(()=>{let m=0,y=0;const i=o.value,f=t.lang.rtl===!0?-1:1;i.top===!0&&l.value!==0?y=`${l.value}px`:i.bottom===!0&&a.value!==0&&(y=`${-a.value}px`),i.left===!0&&r.value!==0?m=`${f*r.value}px`:i.right===!0&&u.value!==0&&(m=`${-f*u.value}px`);const w={transform:`translate(${m}, ${y})`};return e.offset&&(w.margin=`${e.offset[1]}px ${e.offset[0]}px`),i.vertical===!0?(r.value!==0&&(w[t.lang.rtl===!0?"right":"left"]=`${r.value}px`),u.value!==0&&(w[t.lang.rtl===!0?"left":"right"]=`${u.value}px`)):i.horizontal===!0&&(l.value!==0&&(w.top=`${l.value}px`),a.value!==0&&(w.bottom=`${a.value}px`)),w}),h=p(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function c(m){const y=F(m.default);return x("div",{class:h.value,style:d.value},e.expand===!0?y:[x("div",y)])}return{$layout:n,getStickyContent:c}}var In=D({name:"QPageSticky",props:Dn,setup(e,{slots:t}){const{getStickyContent:n}=Ln();return()=>n(t)}}),Qn=D({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=H(),o=Ce(ot,A);if(o===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(Ce(Tt,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const u=p(()=>{const r=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const d=o.isContainer.value===!0?o.containerHeight.value:n.screen.height;return e.styleFn(r,d)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-r+"px":n.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":n.screen.height-r+"px"}}),a=p(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>x("main",{class:a.value,style:u.value},F(t.default))}});const Je={threshold:0,root:null,rootMargin:"0px"};function et(e,t,n){let o,l,u;typeof n=="function"?(o=n,l=Je,u=t.cfg===void 0):(o=n.handler,l=Object.assign({},Je,n.cfg),u=t.cfg===void 0||Ht(t.cfg,l)===!1),t.handler!==o&&(t.handler=o),u===!0&&(t.cfg=l,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([a])=>{if(typeof t.handler=="function"){if(a.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(a,t.observer)===!1||t.once===!0&&a.isIntersecting===!0)&&ft(e)}},l),t.observer.observe(e))}function ft(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}var On=zt({name:"intersection",mounted(e,{modifiers:t,value:n}){const o={once:t.once===!0};et(e,o,n),e.__qvisible=o},updated(e,t){const n=e.__qvisible;n!==void 0&&et(e,n,t.value)},beforeUnmount:ft}),Rn="/assets/index_page_bg_1.73dc94b3.webp",Wn="/assets/logo.66f90c38.svg";const Fn=[x("g",{transform:"scale(0.55)"},[x("circle",{cx:"30",cy:"150",r:"30",fill:"currentColor"},[x("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),x("path",{d:"M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z",fill:"currentColor"},[x("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.1",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),x("path",{d:"M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z",fill:"currentColor"},[x("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.2",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})])])];var Vn=D({name:"QSpinnerRadio",props:jt,setup(e){const{cSize:t,classes:n}=Nt(e);return()=>x("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Fn)}});const zn={},jn={class:"loading-component-wrap row flex-center full-width bg-primary",style:{height:"50vh"}};function Nn(e,t){return Q(),z("div",jn,[_(Vn,{color:"accent",size:"2vw"})])}var _e=lt(zn,[["render",Nn]]);const Te=e=>(Lt("data-v-340221c4"),e=e(),It(),e),Kn={class:"fixed-header full-width row flex-center"},Un={class:"column flex-center shadow-4 bg-primary",style:{"border-radius":"19px"}},Gn={id:"indexPagePublications",class:"full-width"},Yn=Te(()=>$("div",{class:"bg-transparent full-width",style:{height:"70px"}},null,-1)),Xn={id:"indexPageMembers",class:"full-width"},Zn=Te(()=>$("div",{class:"bg-primary full-width",style:{height:"70px"}},null,-1)),Jn={id:"indexPageOpenSource",class:"full-width"},eo=Te(()=>$("div",{class:"bg-primary full-width",style:{height:"70px"}},null,-1)),to=Mt({__name:"IndexPage",setup(e){At(k=>({ba3b1308:c.value,"6984c0cc":h.value,"5793ec20":m.value}));const{locale:t}=Xt({useScope:"global"}),n=ve({loader:()=>he(()=>import("./IndexPagePublications.9d6a89d0.js"),["assets/IndexPagePublications.9d6a89d0.js","assets/IndexPagePublications.7cb9e6ef.css","assets/dom.cf11f81d.js","assets/index.97f03f52.js","assets/index.a73dbcc1.css","assets/QBtn.c0740e53.js","assets/use-quasar.72c26b2b.js","assets/open-url.ccb17983.js","assets/vue-i18n.runtime.4270fa9b.js"]),loadingComponent:_e}),o=ve({loader:()=>he(()=>import("./IndexPageMembers.502bfb4b.js"),["assets/IndexPageMembers.502bfb4b.js","assets/IndexPageMembers.4e8b56cc.css","assets/use-quasar.72c26b2b.js","assets/index.97f03f52.js","assets/index.a73dbcc1.css","assets/dom.cf11f81d.js","assets/QBtn.c0740e53.js"]),loadingComponent:_e}),l=ve({loader:()=>he(()=>import("./IndexPageOpenSource.d9fd1482.js"),["assets/IndexPageOpenSource.d9fd1482.js","assets/IndexPageOpenSource.bc260f37.css","assets/use-quasar.72c26b2b.js","assets/index.97f03f52.js","assets/index.a73dbcc1.css","assets/dom.cf11f81d.js","assets/QBtn.c0740e53.js","assets/axios.a596eead.js","assets/vue-i18n.runtime.4270fa9b.js"]),loadingComponent:_e}),a=Rt().platform.is.mobile,r=E(!0),d=p(()=>r.value?"primary":"accent"),h=p(()=>a?"none":"flex"),c=p(()=>a?"flex":"none"),m=p(()=>r.value?0:1),y=p(()=>({"text-primary":r.value,"text-accent":!r.value})),i=[{value:"en-US",label:"English"},{value:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587"}],f=[{value:"indexPageHeaderHome",id:"#indexPageHome"},{value:"indexPageHeaderPublications",id:"#indexPagePublications"},{value:"indexPageHeaderMembers",id:"#indexPageMembers"},{value:"indexPageHeaderOpenSource",id:"#indexPageOpenSource"}];function w(k){const g=document.querySelector(k);g?window.scrollTo({top:g.offsetTop+1,behavior:"smooth"}):console.log(`target ${k} not found`)}function P(k){r.value=k.isIntersecting}return(k,g)=>(Q(),Dt(Qn,null,{default:S(()=>[_(Ve,{class:"index-background",src:Rn,fit:"cover",style:{height:"calc(100vh + 1px)"}}),_(we,{class:"mobile-header-btn",color:d.value,icon:"widgets",flat:""},{default:S(()=>[_(pe,{class:K([y.value,"popup-list-menu q-pa-md"]),style:{width:"75vw","font-size":"5vw"}},{default:S(()=>[(Q(),z(te,null,ee(f,s=>ne(_(le,{key:s.value,clickable:"",onClick:v=>w(s.id)},{default:S(()=>[_(be,{class:"text-accent"},{default:S(()=>[oe(U(k.$t(s.value)),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[ge]])),64)),_(le,null,{default:S(()=>[_(we,{color:"accent",icon:"translate",flat:"","auto-close":""},{default:S(()=>[_(pe,null,{default:S(()=>[(Q(),z(te,null,ee(i,s=>ne(_(le,{key:s.value,clickable:"",onClick:v=>t.value=s.value},{default:S(()=>[_(be,{class:"text-accent"},{default:S(()=>[oe(U(s.label),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[ge]])),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])]),_:1},8,["color"]),$("header",Kn,[$("div",{class:K(["header-content row flex-center shadow-4",{"header-content-float":!r.value}])},[(Q(),z(te,null,ee(f,s=>_(Y,{key:s.value,color:d.value,size:"xl","no-caps":"",flat:"",onClick:v=>w(s.id)},{default:S(()=>[oe(U(k.$t(s.value)),1)]),_:2},1032,["color","onClick"])),64)),_(we,{color:d.value,icon:"translate",flat:"","auto-close":""},{default:S(()=>[_(pe,null,{default:S(()=>[(Q(),z(te,null,ee(i,s=>ne(_(le,{key:s.value,clickable:"",onClick:v=>t.value=s.value},{default:S(()=>[_(be,{class:"text-accent"},{default:S(()=>[oe(U(s.label),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[ge]])),64))]),_:1})]),_:1},8,["color"])],2)]),ne((Q(),z("div",{id:"indexPageHome",class:K([I(a)?"column":"row","index-page-logo-wrap flex-center full-width"]),style:{height:"calc(100vh + 1px)"}},[_(Ve,{src:Wn,style:Fe({width:I(a)?"20vw":"8vw"}),ratio:1},null,8,["style"]),$("span",{class:"text-primary text-bold q-ml-md",style:Fe({fontSize:I(a)?"10vw":"5vw"})},U(k.$t("indexPageLabName")),5)],2)),[[On,P]]),$("div",{class:K([{"q-px-lg":!I(a)},"index-page-content full-width bg-transparent"])},[$("div",Un,[$("div",Gn,[Yn,_(I(n))]),$("div",Xn,[Zn,_(I(o))]),$("div",Jn,[eo,_(I(l))])])],2),_(In,{class:"up-btn-wrap",position:"bottom-right",offset:[30,30]},{default:S(()=>[_(Y,{class:K([{"no-pointer-events":r.value},"shadow-4"]),color:"accent",icon:"arrow_upward",size:"lg",round:"",onClick:g[0]||(g[0]=s=>w("#indexPageHome"))},null,8,["class"])]),_:1})]),_:1}))}});var no=lt(to,[["__scopeId","data-v-340221c4"]]),so=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"}));export{so as I,le as Q,Ee as a,on as b,Jt as c,ln as d,Hn as e,an as f,be as g,$e as u};
