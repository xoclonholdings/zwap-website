import{dD as x,d6 as e,f2 as g,d9 as m,ds as o}from"./index-CG3P_jQh.js";import{n as k}from"./ScreenLayout-DuL-17Ts-Ds5NOqva.js";import{c as C}from"./createLucideIcon-DwlKQfJI.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=C("chevron-down",A),I=async({operation:i,until:a,delay:s,interval:l,attempts:d,signal:c})=>{let u,p,n=0;for(;n<d;){if(c!=null&&c.aborted)return{status:"aborted",result:u,attempts:n,error:p};n++;try{if(p=void 0,u=await i(),a(u))return{status:"success",result:u,attempts:n};n<d&&await x(l)}catch(h){h instanceof Error&&(p=h),n<d&&await x(l)}}return{status:"max_attempts",result:u,attempts:n,error:p}},N=({currency:i="usd",value:a,onChange:s,inputMode:l="decimal",autoFocus:d})=>{var y;let[c,u]=m.useState("0"),p=m.useRef(null),n=a??c,h=((y=g[i])==null?void 0:y.symbol)??"$",w=m.useCallback(t=>{let r=t.target.value,f=(r=r.replace(/[^\d.]/g,"")).split(".");f.length>2&&(r=f[0]+"."+f.slice(1).join("")),f.length===2&&f[1].length>2&&(r=`${f[0]}.${f[1].slice(0,2)}`),r.length>1&&r[0]==="0"&&r[1]!=="."&&(r=r.slice(1)),(r===""||r===".")&&(r="0"),s?s(r):u(r)},[s]),j=m.useCallback(t=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)||(t.ctrlKey||t.metaKey)&&["a","c","v","x"].includes(t.key.toLowerCase()))&&(t.key>="0"&&t.key<="9"||t.preventDefault())},[]),v=m.useMemo(()=>(n.includes("."),n),[n]);return e.jsxs(E,{onClick:()=>{var t;return(t=p.current)==null?void 0:t.focus()},children:[e.jsx(b,{children:h}),v,e.jsx("input",{ref:p,type:"text",inputMode:l,value:v,onChange:w,onKeyDown:j,autoFocus:d,placeholder:"0",style:{width:1,height:"1rem",opacity:0,alignSelf:"center",fontSize:"1rem"}}),e.jsx(b,{style:{opacity:0},children:h})]})},Z=({selectedAsset:i,onEditSourceAsset:a})=>{let{icon:s}=g[i];return e.jsxs(L,{onClick:a,children:[e.jsx(z,{children:s}),e.jsx(D,{children:i.toLocaleUpperCase()}),e.jsx(B,{children:e.jsx(S,{})})]})};let E=o.span`
  background-color: var(--privy-color-background);
  width: 100%;
  text-align: center;
  border: none;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    color: var(--privy-color-foreground);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,b=o.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,L=o.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,z=o.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,D=o.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,B=o.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;const G=({opts:i,isLoading:a,onSelectSource:s})=>e.jsx(k,{showClose:!1,showBack:!0,onBack:()=>s(i.source.selectedAsset),title:"Select currency",children:e.jsx(K,{children:i.source.assets.map(l=>{let{icon:d,name:c}=g[l];return e.jsx(M,{onClick:()=>s(l),disabled:a,children:e.jsxs(R,{children:[e.jsx(U,{children:d}),e.jsxs(_,{children:[e.jsx(F,{children:c}),e.jsx(T,{children:l.toLocaleUpperCase()})]})]})},l)})})});let K=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,M=o.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,R=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,U=o.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,_=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,F=o.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,T=o.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;export{Z as m,N as p,I as u,G as w};
