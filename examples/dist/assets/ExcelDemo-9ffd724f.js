import{l as R,r as B,S as T,a as h,g as k,b as $,t as L,c as D}from"./hack-5138755f.js";import{d as q}from"./url-de9b02cf.js";import{d as F,_ as V,r as m,o as W,n as j,h as I,w as M,a as S,c as N,b as P,i as A,e as H,f as U,j as z,g as G,u as J}from"./index-653b3b88.js";import{P as K,u as O}from"./PreviewWrapper-9068b446.js";import"./_commonjs-dynamic-modules-302442b1.js";const E={minColLength:20},Q=F({name:"VueOfficeExcel",props:{src:[String,ArrayBuffer,Blob],requestOptions:{type:Object,default:()=>({})},options:{type:Object,default:()=>({...E})}},emits:["rendered","error"],setup(t,{emit:i}){const n=m(null),s=m(null);let r={_worksheets:[]},a=[],d=1,u=null,e=null,f=null,w=null;function _(c){w=c,$(c).then(l=>{if(!l._worksheets||l._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");const{workbookData:x,medias:g,workbookSource:o}=L(l,{...E,...t.options});a=g,r=o,f=null,d=1,D(),e.loadData(x),h(u,a,r._worksheets[d],f),i("rendered")}).catch(l=>{console.warn(l),a=[],r={_worksheets:[]},D(),e&&e.loadData({}),i("error",l)})}const v=R.debounce(B,200).bind(this,s.value),b=new MutationObserver(v),y={attributes:!0,childList:!0,subtree:!0};W(()=>{j(()=>{b.observe(s.value,y),v(s),e=new T(s.value,{mode:"read",showToolbar:!1,showContextmenu:t.options.showContextmenu||!1,view:{height:()=>n.value&&n.value.clientHeight||300,width:()=>n.value&&n.value.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({});let c=e.bottombar.swapFunc;e.bottombar.swapFunc=function(o){c.call(e.bottombar,o),d=o+1,setTimeout(()=>{e.reRender(),h(u,a,r._worksheets[d],f)})};let l=e.sheet.editor.clear;e.sheet.editor.clear=function(...o){l.apply(e.sheet.editor,o),setTimeout(()=>{h(u,a,r._worksheets[d],f)})};let x=e.sheet.editor.setOffset;e.sheet.editor.setOffset=function(...o){x.apply(e.sheet.editor,o),f=o[0],h(u,a,r._worksheets[d],f)},u=s.value.querySelector("canvas").getContext("2d"),t.src&&k(t.src,t.requestOptions).then(_).catch(o=>{e.loadData({}),i("error",o)})})}),I(()=>{b.disconnect(),e=null}),M(()=>t.src,()=>{t.src?k(t.src,t.requestOptions).then(_).catch(c=>{e.loadData({}),i("error",c)}):e.loadData({})});function C(c){q(c||`vue-office-excel-${new Date().getTime()}.xlsx`,w)}return{wrapperRef:n,rootRef:s,save:C}}}),X={class:"vue-office-excel",ref:"wrapperRef"},Y={class:"vue-office-excel-main",ref:"rootRef"};function Z(t,i,n,s,r,a){return S(),N("div",X,[P("div",Y,null,512)],512)}const p=V(Q,[["render",Z]]);p.install=function(t){t.component(p.name,p)};const re={__name:"ExcelDemo",setup(t){function i(){O.hideLoading()}function n(a){console.log("出差",a),O.hideLoading()}const s=location.origin+(location.pathname+"/").replace("//","/")+"static/test-files/test.xlsx",r=m();return(a,d)=>{const u=A("loading");return S(),H(K,{accept:".xlsx",placeholder:"请输入xlsx文件地址","default-src":s},{default:U(e=>[z(G(J(p),{ref_key:"docxRef",ref:r,src:e.src,style:{flex:"1",height:"0"},onRendered:i,onError:n},null,8,["src"]),[[u,!0]])]),_:1})}}};export{re as default};