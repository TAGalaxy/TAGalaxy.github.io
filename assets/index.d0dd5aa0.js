import{_ as L,F as D,p as M,a as I,f as x,b as S,o as $}from"./index.f945dfa5.js";import{A as U,aA as A,az as v,j as N,a0 as n,B as t,D as O,w as a,a5 as m,a1 as f,ac as _,H as s,K as r,J as V,aa as B}from"./vendor.08970ab4.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as w,u as P}from"./index.68876896.js";import{a as R}from"./index.ab8802e8.js";import{h as z}from"./header.d801b988.js";import"./index.59b2e4a0.js";import"./useWindowSizeFn.c0b4a939.js";import"./useContentViewHeight.4c9e451c.js";/* empty css               */import"./useSortable.c9a1d836.js";import"./lock.2babf956.js";const F=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:w(()=>D(()=>import("./DropMenuItem.a6ad20b1.js"),["assets/DropMenuItem.a6ad20b1.js","assets/vendor.08970ab4.js","assets/vendor.ced4861a.css","assets/index.f945dfa5.js","assets/index.087d9be4.css"])),MenuDivider:v.Divider,LockAction:w(()=>D(()=>import("./LockModal.178a17bf.js"),["assets/LockModal.178a17bf.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.f945dfa5.js","assets/index.087d9be4.css","assets/vendor.08970ab4.js","assets/vendor.ced4861a.css","assets/index.ab8802e8.js","assets/index.2439e102.css","assets/useWindowSizeFn.c0b4a939.js","assets/useForm.942fadba.js","assets/useForm.f0aa9a7e.css","assets/index.79185024.js","assets/index.7b8b5e30.css","assets/download.a5e6dad3.js","assets/index.74d275da.js","assets/index.cb030764.css","assets/lock.2babf956.js","assets/header.d801b988.js"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:b,desc:j}=i.getUserInfo||{};return{realName:u,avatar:b||z,desc:j}}),[o,{openModal:c}]=R();function l(){c(!0)}function d(){i.confirmLoginOut()}function p(){$(E)}function y(u){switch(u.key){case"logout":d();break;case"doc":p();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:y,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function T(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),d=n("Dropdown"),p=n("LockAction");return t(),O(B,null,[a(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[a(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),a(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[s("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),s("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(p,{onRegister:e.register},null,8,["onRegister"])],64)}var te=L(F,[["render",T]]);export{te as default};
