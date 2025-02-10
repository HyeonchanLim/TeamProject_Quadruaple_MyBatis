import{e as _,q as B,g as R,a as C,r as a,j as e,F as D,R as E}from"./index-hzpou2jK.js";import{I as T}from"./TitleHeader-go6GWOTm.js";import{a as S}from"./axios-upsvKRUO.js";import{I as F}from"./index-BazBbBfM.js";import{a as L,b as M,e as z}from"./index-BDGbKGZl.js";import{a as H}from"./pic-Bp3CpqNF.js";import{c as y}from"./match-Ca96ndax.js";import{R as k}from"./index-Brbve_zf.js";import{S as P}from"./Skeleton-D5qYhB57.js";const K=_({key:"searchAtom",default:{searchWord:""}}),V=B.memo(({searchValue:m,setSearchValue:o,setSearchState:d,searchData:f,setSearchData:i})=>{const p=R("accessToken"),u=C(),[g,r]=a.useState(!1),[h,j]=a.useState(""),[l,N]=a.useState([]);a.useEffect(()=>{},[l]);const v=async()=>{try{const n=(await S.get("/api/search/list",{headers:{Authorization:`Bearer ${p}`}})).data.data.filter(b=>b.txt!=="");N(n)}catch(t){console.log("최근 검색어 호출 결과:",t)}};a.useEffect(()=>{p&&v()},[]);const w=async()=>{const t={search_word:m};try{const n=(await S.post(`/api/search/all?search_word=${m}`,{...t},{headers:{Authorization:`Bearer ${p}`}})).data;console.log("최근 검색어 클릭 결과",n),i(n.data)}catch(c){console.log(c)}};return a.useEffect(()=>{},[l]),e.jsxs("div",{className:"w-full px-[32px] py-[30px] flex items-center gap-[40px] relative ",children:[e.jsx("div",{className:"text-[36px] cursor-pointer",onClick:()=>{u(-1)},children:e.jsx(T,{})}),e.jsx(F,{placeholder:"지금 어디로 여행을 떠나고 싶으신가요?",variant:"borderless",allowClear:!0,onChange:t=>{j(t.target.value)},onKeyDown:t=>{t.code==="Enter"&&(o(t.target.value),r(!1),d(!0))},onFocus:()=>{r(!0)},onBlur:()=>setTimeout(()=>r(!1),200),prefix:e.jsx(D,{className:"text-slate-400 text-2xl"}),className:`w-full h-[60px] px-[12px] ${h?"bg-white":"bg-slate-100"}`}),g?e.jsx("div",{className:`absolute top-[90%] translate-y-[0] left-[0]\r
          w-full flex justify-center items-center gap-[20px]`,children:l?l==null?void 0:l.map((t,c)=>e.jsx("button",{onClick:()=>{o(t.txt),d(!0),r(!1),w(t.txt)},className:"text-slate-600",children:t.txt},c)):e.jsx("li",{className:"text-slate-700 text-[16px]",children:"데이터 없음"})}):null]})}),W=a.forwardRef(({key:m,type:o,name:d,data:f,searchValue:i,searchData:p,setSearchData:u,setSelectedCate:g,category:r,dataIndex:h,setDataIndex:j},l)=>{R("accessToken");const[N,v]=E(K),w=C(),t=s=>{v({...N,searchWord:i}),w(`/contents/index?strfId=${s.strfId}`,{state:{searchValue:i}})},[c,n]=a.useState(!0);a.useEffect(()=>{},[h]);const b=async s=>{try{const x=await S.get(`/api/search/category?last_index=${h}&category=${y(s)}&search_word=${i}&order_type=ratingAvg`);console.log("더보기 결과:",x.data),x.data.data.length===0&&n(!1);const $=x.data;u([...p,...$.data]),j(A=>A+10)}catch(x){console.log("더보기 에러:",x)}},I=()=>{console.log(o,r),g(r),b(o)};return e.jsxs("div",{ref:l,className:"flex flex-col gap-[20px] items-center",children:[e.jsx("h2",{className:"w-full text-[24px] font-semibold text-slate-700",children:d}),e.jsx("ul",{className:"w-full flex flex-col gap-[20px] mb-[30px]",children:f?f.map((s,x)=>e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>{t(s)},children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px] overflow-hidden",children:e.jsx("img",{src:`${H}${s.strfId}/${s.strfPic}`,alt:s.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:s.title||s.strfTitle})}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("p",{className:"text-[14px] text-slate-500",children:y(s.category)}),e.jsx("p",{className:"text-[14px] text-slate-500",children:"|"}),e.jsx("p",{className:"text-[14px] text-slate-500",children:s.locationName})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(k,{disabled:!0,count:1,value:s.hasMyReview!==0?1:0}),e.jsx("p",{className:"text-[12px] text-slate-500",children:s.averageRating?s.averageRating:"0"}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",s.reviewCount.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:s.wishIn?e.jsx(L,{className:"text-secondary3"}):e.jsx(M,{className:"text-slate-400"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:s.wishlistCount.toLocaleString()})]})]})]},x)):e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:t,children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px]",children:e.jsx(P.Image,{active:!1,size:"large",style:{width:"130px",height:"130px"}})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:"제목"})}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("p",{className:"text-[14px] text-slate-500",children:"카테고리"}),e.jsx("p",{className:"text-[14px] text-slate-500",children:"|"}),e.jsx("p",{className:"text-[14px] text-slate-500",children:"지역"})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(k,{disabled:!0,count:1,value:0}),e.jsx("p",{className:"text-[12px] text-slate-500",children:"평점"}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",1e3.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:e.jsx(z,{className:"text-slate-400 bg-white"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:1e3.toLocaleString()})]})]})]})}),c&&e.jsxs("button",{type:"button",className:`px-[20px] py-[10px] border border-slate-300 \r
\r
        rounded-[24px] text-[16px] font-semibold text-slate-600`,onClick:()=>I(),children:[y(o)," 검색결과 더보기"]})]})}),ee=a.memo(W);export{V as S,ee as a};
