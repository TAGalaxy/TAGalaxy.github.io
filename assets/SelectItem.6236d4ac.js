import{A as i,bG as l,j as r,a0 as d,B as p,D as c,H as m,J as u,w as f,a4 as b,K as g}from"./vendor.08970ab4.js";import{_,a as j}from"./index.f945dfa5.js";import{b as v}from"./index.27b3fac1.js";import"./index.68876896.js";import"./index.59b2e4a0.js";import"./useWindowSizeFn.c0b4a939.js";import"./useContentViewHeight.4c9e451c.js";/* empty css               */import"./useSortable.c9a1d836.js";import"./lock.2babf956.js";/* empty css               */const S=i({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=j("setting-select-item"),s=r(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function a(n){e.event&&v(e.event,n)}return{prefixCls:t,handleChange:a,getBindValue:s}}});function C(e,t,s,a,n,y){const o=d("Select");return p(),c("div",{class:g(e.prefixCls)},[m("span",null,u(e.title),1),f(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var H=_(S,[["render",C],["__scopeId","data-v-6707e46b"]]);export{H as default};
