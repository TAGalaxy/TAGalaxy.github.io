import{bo as i,af as a,T as d}from"./vendor.08970ab4.js";function c(r,s=150,n){let e=()=>{r()};e=d(e,s);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},o=()=>{window.removeEventListener("resize",e)};return i(()=>{t()}),a(()=>{o()}),[t,o]}export{c as u};
