import{_ as k,J as b,a as h,Z as R,f as v,V as O,b as M,aZ as A,a7 as C,aR as B,aS as T,h as j}from"./index.f945dfa5.js";import{A as $,cb as w,bm as x,a0 as c,B as D,D as F,w as o,a5 as i,ad as d,J as u,K as J,u as m}from"./vendor.08970ab4.js";const N=$({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:x},setup(){const e=b(),{prefixCls:p}=h("setting-footer"),{t:s}=M(),{createSuccessModal:g,createMessage:r}=j(),f=R(),l=v(),t=O();function n(){const{isSuccessRef:a}=A(JSON.stringify(m(t.getProjectConfig),null,2));m(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(C);const{colorWeak:a,grayMode:y}=C;B(a),T(y),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function _(){localStorage.clear(),t.resetAllState(),e.resetState(),f.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:n,handleResetSetting:S,handleClearAndRedo:_}}});function P(e,p,s,g,r,f){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return D(),F("div",{class:J(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),d(" "+u(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),d(" "+u(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),d(" "+u(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=k(N,[["render",P],["__scopeId","data-v-2d4de409"]]);export{W as default};
