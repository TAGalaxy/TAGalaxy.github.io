import{A as v,r as s,j as x,u as e,B as y,D as w,w as H,a5 as S,H as j,K as u,X as d,aO as z}from"./vendor.08970ab4.js";import{u as C}from"./useWindowSizeFn.c0b4a939.js";import{p as R,a as B,_ as b}from"./index.f945dfa5.js";import{a as F}from"./useContentViewHeight.4c9e451c.js";const L=["src"],V=v({props:{frameSrc:R.string.def("")},setup(p){const i=s(!0),m=s(50),o=s(window.innerHeight),r=s(),{headerHeightRef:g}=F(),{prefixCls:c}=B("iframe-page");C(l,150,{immediate:!0});const f=x(()=>({height:`${e(o)}px`}));function l(){const n=e(r);if(!n)return;const t=g.value;m.value=t,o.value=window.innerHeight-t;const a=document.documentElement.clientHeight-t;n.style.height=`${a}px`}function _(){i.value=!1,l()}return(n,t)=>(y(),w("div",{class:u(e(c)),style:d(e(f))},[H(e(z),{spinning:i.value,size:"large",style:d(e(f))},{default:S(()=>[j("iframe",{src:p.frameSrc,class:u(`${e(c)}__main`),ref:(a,h)=>{h.frameRef=a,r.value=a},onLoad:_},null,42,L)]),_:1},8,["spinning","style"])],6))}});var E=b(V,[["__scopeId","data-v-179381bf"]]);export{E as default};
