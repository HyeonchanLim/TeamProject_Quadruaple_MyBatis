import{a as w,d as I,r as o,j as e,b as k}from"./index-vPyaWLeP.js";import"./TitleHeader-DmOIGpGi.js";import{S as C}from"./SearchItems-PNJBbJk5.js";import{T as E}from"./api-B-eoqegl.js";import{L as P}from"./pic-Bp3CpqNF.js";import{S as $}from"./Skeleton-CN1qU4T4.js";import"./index-Bq2mCWz2.js";import"./searchAtom-ByNdpfBe.js";import"./index-D6yxsJgh.js";import"./context-UlFNglpC.js";import"./useSize-40MQQq3L.js";import"./BaseInput-CdGcV17f.js";import"./button-DbuczX__.js";import"./useMergedState-BlXbDCcH.js";import"./ContextIsolator-CJOux_3c.js";import"./index-CZJbkbXl.js";import"./index-DFSdNWGh.js";import"./match-C6wYgUSM.js";import"./index-BknOe4VR.js";import"./index-4zV-iNF3.js";import"./index-_WMGC53t.js";import"./Portal-BctSke4q.js";import"./useId-CRRn3EMz.js";import"./zoom-6OtM0EU7.js";const lt=()=>{var m,f;const x=w(),c=I().state,d=c==null?void 0:c.from,h=()=>{d?x(d,{state:s}):x("/schedule/days",{state:s})},[i,g]=o.useState(null),[s,u]=o.useState([]),[V,b]=o.useState(!1),[a,j]=o.useState(""),[y,S]=o.useState("");o.useState(!1),o.useEffect(()=>{console.log(a)},[a]);const n=o.useRef(null);o.useEffect(()=>{n.current&&console.log(n.current)},[]);const N=async()=>{try{const t=await k.get(E.getLocationList);g(t.data)}catch(t){console.log("지역 목록 조회:",t)}};o.useEffect(()=>{N()},[]);const r=i==null?void 0:i.data.locationList,l=r==null?void 0:r.filter(t=>t.title.includes(a)),L=t=>{u([...s,t])},v=t=>{u(s.filter(p=>p.locationId!==t.locationId))};return e.jsxs("div",{children:[e.jsx(C,{searchValue:a,setSearchValue:j,setSearchState:b,inputValue:y,setInputValue:S}),e.jsx("ul",{className:"flex flex-col gap-[20px] px-[32px] mb-[20px]",children:(l==null?void 0:l.length)>0?l==null?void 0:l.map(t=>e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex gap-[30px] items-center",children:[e.jsx("div",{className:"w-[100px] h-[100px] rounded-2xl overflow-hidden",children:t.locationPic?e.jsx("img",{src:`${P}${t.locationPic}`,alt:t.title,ref:n,className:"w-full h-full object-cover"}):e.jsx($.Image,{active:!1,style:{width:"100px",height:"100px"}})}),e.jsxs("div",{className:"flex flex-col gap-[16px]",children:[e.jsx("p",{className:"text-[24px] text-slate-700",children:t.title}),e.jsx("p",{className:"text-[18px] text-slate-500",children:"어디론가 떠나고 싶을 때"})]})]}),e.jsx("div",{className:"h-auto flex items-center justify-center ",children:s.filter(p=>p.locationId===t.locationId).length>0?e.jsx("button",{type:"button",className:"text-[16px] text-primary border border-primary3 rounded-2xl px-[15px] py-[5px]",onClick:()=>v(t),children:"취소"}):e.jsx("button",{type:"button",className:"text-[16px] text-slate-500 border border-slate-300 rounded-2xl px-[15px] py-[5px]",onClick:()=>L(t),children:"선택"})})]},t.locationId)):null}),e.jsx("div",{className:"w-full px-[32px] mb-[20px]",children:s.length>0?e.jsx("button",{type:"button",className:"w-full px-[20px] py-[15px] text-[20px] font-bold text-white bg-primary rounded-lg",onClick:h,children:s.length===1?`${(m=s[0])==null?void 0:m.title} 선택 완료`:`${(f=s[0])==null?void 0:f.title} 외 ${s.length-1}개 선택 완료`}):e.jsx("button",{type:"button",className:"w-full px-[20px] py-[15px] text-[20px] font-bold text-slate-400 bg-slate-50 rounded-lg",children:"도시 선택"})})]})};export{lt as default};
