import{a as w,b as I,r as l,j as e}from"./index-hzpou2jK.js";import"./TitleHeader-go6GWOTm.js";import{S as k}from"./SearchItems-BWX_utf0.js";import{T as C}from"./api-B-eoqegl.js";import{a as E}from"./axios-upsvKRUO.js";import{L as P}from"./pic-Bp3CpqNF.js";import{S as $}from"./Skeleton-D5qYhB57.js";import"./index-BazBbBfM.js";import"./context-zKwpUIQQ.js";import"./useSize-C_t0tW5w.js";import"./BaseInput-C1GHNHoe.js";import"./button-DcLLjFNX.js";import"./useId-C5EBXog0.js";import"./ContextIsolator-CQUGdQy4.js";import"./Portal-Cup2gZD9.js";import"./index-Dt7wiuG8.js";import"./index-BDGbKGZl.js";import"./match-Ca96ndax.js";import"./index-Brbve_zf.js";import"./index-BzUBezPm.js";const tt=()=>{var m,f;const p=w(),c=I().state,d=c==null?void 0:c.from,h=()=>{d?p(d,{state:s}):p("/schedule/days",{state:s})},[n,g]=l.useState(null),[s,u]=l.useState([]),[V,b]=l.useState(!1),[a,j]=l.useState(""),[y,S]=l.useState("");l.useState(!1),l.useEffect(()=>{console.log(a)},[a]);const i=l.useRef(null);l.useEffect(()=>{i.current&&console.log(i.current)},[]);const N=async()=>{try{const t=await E.get(C.getLocationList);g(t.data)}catch(t){console.log("지역 목록 조회:",t)}};l.useEffect(()=>{N()},[]);const r=n==null?void 0:n.data.locationList,o=r==null?void 0:r.filter(t=>t.title.includes(a)),L=t=>{u([...s,t])},v=t=>{u(s.filter(x=>x.locationId!==t.locationId))};return e.jsxs("div",{children:[e.jsx(k,{searchValue:a,setSearchValue:j,setSearchState:b,inputValue:y,setInputValue:S}),e.jsx("ul",{className:"flex flex-col gap-[20px] px-[32px] mb-[20px]",children:(o==null?void 0:o.length)>0?o==null?void 0:o.map(t=>e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex gap-[30px] items-center",children:[e.jsx("div",{className:"w-[100px] h-[100px] rounded-2xl overflow-hidden",children:t.locationPic?e.jsx("img",{src:`${P}${t.locationPic}`,alt:t.title,ref:i,className:"w-full h-full object-cover"}):e.jsx($.Image,{active:!1,style:{width:"100px",height:"100px"}})}),e.jsxs("div",{className:"flex flex-col gap-[16px]",children:[e.jsx("p",{className:"text-[24px] text-slate-700",children:t.title}),e.jsx("p",{className:"text-[18px] text-slate-500",children:"어디론가 떠나고 싶을 때"})]})]}),e.jsx("div",{className:"h-auto flex items-center justify-center ",children:s.filter(x=>x.locationId===t.locationId).length>0?e.jsx("button",{type:"button",className:"text-[16px] text-primary border border-primary3 rounded-2xl px-[15px] py-[5px]",onClick:()=>v(t),children:"취소"}):e.jsx("button",{type:"button",className:"text-[16px] text-slate-500 border border-slate-300 rounded-2xl px-[15px] py-[5px]",onClick:()=>L(t),children:"선택"})})]},t.locationId)):null}),e.jsx("div",{className:"w-full px-[32px] mb-[20px]",children:s.length>0?e.jsx("button",{type:"button",className:"w-full px-[20px] py-[15px] text-[20px] font-bold text-white bg-primary rounded-lg",onClick:h,children:s.length===1?`${(m=s[0])==null?void 0:m.title} 선택 완료`:`${(f=s[0])==null?void 0:f.title} 외 ${s.length-1}개 선택 완료`}):e.jsx("button",{type:"button",className:"w-full px-[20px] py-[15px] text-[20px] font-bold text-slate-400 bg-slate-50 rounded-lg",children:"도시 선택"})})]})};export{tt as default};
