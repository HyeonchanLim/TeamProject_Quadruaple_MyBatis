import{r as n,g,a as f,j as e}from"./index-hzpou2jK.js";import{a as w}from"./axios-upsvKRUO.js";import{A as u}from"./index-BDGbKGZl.js";import{T as v,c as j}from"./TitleHeader-go6GWOTm.js";import{R as h}from"./pic-Bp3CpqNF.js";/* empty css                    */import{j as N}from"./jwt-BLhOuEAS.js";import{R as b}from"./index-Brbve_zf.js";import{B as y}from"./button-DcLLjFNX.js";import"./useId-C5EBXog0.js";import"./index-BzUBezPm.js";import"./index-Dt7wiuG8.js";import"./Portal-Cup2gZD9.js";import"./useSize-C_t0tW5w.js";import"./ContextIsolator-CQUGdQy4.js";import"./context-zKwpUIQQ.js";const R=({images:i})=>{const o=i.length,l={1:"grid-cols-1 grid-rows-1",2:"grid-cols-2 grid-rows-1",3:"grid-cols-2 grid-rows-2",4:"grid-cols-2 grid-rows-2",5:"grid-cols-4 grid-rows-2"}[o]||"grid-cols-3 grid-rows-2";return e.jsx("div",{className:`grid gap-2 ${l} w-full h-[400px] rounded-lg overflow-hidden`,children:i.map((c,t)=>{let r="";return o===3&&t===0&&(r="row-span-2"),o===5&&t===0&&(r="row-span-2 col-span-2"),e.jsx("img",{src:c,alt:`image-${t}`,className:`w-full h-full overflow-hidden object-cover ${r}`},t)})})},G=()=>{const[i,o]=n.useState([]),[l,c]=n.useState(0),t=g("accessToken"),r=async()=>{try{const s=await w.get(`/api/review/my?last_index=${l}`,{headers:{Authorization:`Bearer ${t}`}});o(s.data),console.log("✅  getUserReview  res.data.data:",s.data)}catch(s){console.log("✅  getUserReview  error:",s)}},m=async s=>{console.log(s);try{const a=await N.delete(`/api/review/del?review_id=${s.reviewId}`);console.log("리뷰 삭제:",a.data),a.data&&r()}catch(a){console.log("리뷰 삭제:",a)}};n.useEffect(()=>{r()},[l]);const d=f();return e.jsxs("div",{children:[e.jsx(v,{icon:"back",title:"리뷰",onClick:()=>d(-1)}),e.jsxs("div",{className:"px-8",children:[i.map((s,a)=>{const x=s.myReviewPic.map(p=>`${h}${s.reviewId}/${p.pic}`);return e.jsxs("div",{className:"py-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("h1",{className:"flex items-center gap-5 h text-3xl font-bold text-slate-700 mb-3 cursor-pointer",onClick:()=>d(`/contents/index?strfId=${s.strfId}`),children:[s.strfTitle,e.jsx(j,{})]})}),e.jsx("button",{type:"button",className:"px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-[16px]",onClick:()=>m(s),children:"삭제"})]}),e.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[e.jsx(b,{className:"custom-rate flex items-center gap-1",disabled:!0,allowHalf:!0,defaultValue:s.rating}),e.jsx("p",{className:"text-slate-500 text-xl",children:s.reviewWriteDate.split(" ")[0]})]}),e.jsx("p",{className:"text-2xl text-slate-700 mb-10 font-normal",children:s.content}),e.jsx(R,{images:x})]},a)}),e.jsx("div",{className:"flex justify-center mb-14",children:e.jsxs(y,{onClick:()=>c(s=>s+10),children:[e.jsx(u,{}),"더보기"]})})]})]})};export{G as default};
