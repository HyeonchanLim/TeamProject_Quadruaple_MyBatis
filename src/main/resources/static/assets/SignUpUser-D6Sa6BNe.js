import{l as U,j as e,r as l,a as z,b as C}from"./index-vPyaWLeP.js";import{C as r}from"./Checkbox-cxVlcgs9.js";import{U as k}from"./api-B-eoqegl.js";import{T as v}from"./TitleHeader-DmOIGpGi.js";import{F as a}from"./index-iSG9fmiU.js";import{I as c}from"./index-D6yxsJgh.js";import{B as M}from"./button-DbuczX__.js";import"./useMergedState-BlXbDCcH.js";import"./context-UlFNglpC.js";import"./useSize-40MQQq3L.js";import"./index-Bq2mCWz2.js";import"./Portal-BctSke4q.js";import"./collapse-BbEVqHco.js";import"./zoom-6OtM0EU7.js";import"./index-CvYxd2Io.js";import"./index-4zV-iNF3.js";import"./index-_WMGC53t.js";import"./index-CZJbkbXl.js";import"./useId-CRRn3EMz.js";import"./ContextIsolator-CJOux_3c.js";import"./useLocale-h8ylhYfp.js";import"./BaseInput-CdGcV17f.js";const R=U.memo(({policyType:u,setShowPolicy:m})=>e.jsxs("div",{className:"pt-[60px] max-w-3xl w-[768px] mx-auto h-screen fixed z-50 top-0 right-[50%] translate-x-[50%] bg-white",children:[e.jsx(v,{icon:"close",title:"약관",onClick:()=>{m(!1)}}),e.jsxs("h1",{className:"text-[24px] font-bold text-center",children:["약관 ",u]})]})),_={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24}}},G={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}};r.Group;const xe=()=>{const[u]=a.useForm(),[m,V]=l.useState("vertical"),[Z,N]=l.useState({}),[d,h]=l.useState([]),[q,f]=l.useState(!1),[o,i]=l.useState(null),[S,F]=l.useState("required"),[I,g]=l.useState(!1),[j,P]=l.useState(!1),y=z(),E=t=>{y("/signup/confirmemail",{state:t})},$=()=>{y("/signin")},A=l.useCallback(t=>{h(t),f(t.length>4)},[]),L=l.useCallback(t=>{const s=t.target.checked;h(s?["required-1","required-2","required-3","required-4","option-1"]:[]),f(s)},[]),T=l.useCallback(async t=>{console.log("아이디 중복 체크 시도"),i("validating");try{const s=await C.get(`${k.checkDuplicatedEmail}${t.target.value}`);s.data.data===!0?i("success"):i("error"),console.log("아이디 중복 체크",s.data)}catch(s){console.log(s),i("error")}},[]),B=l.useCallback(async t=>{console.log("이메일 발송 데이터:",t);try{const s=await C.get(`${k.sendMail}${t.email}`,t);console.log("이메일 발송 결과:",s.data)}catch(s){console.log(s)}},[]),D=t=>{d.filter(x=>x==="option");const s=d.filter(x=>x.includes("required")),{confirm:n,...b}=t,w=t.email;N(b),s.length===4&&o==="success"?(console.log("이메일 링크 요청",{email:w}),B({email:w}),E(b)):P(!0)},p=l.useCallback(t=>{F(t.target.value),g(!0)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:"back",title:"회원가입",onClick:$}),e.jsx("div",{className:"w-full px-28 mt-[60px]",children:e.jsxs(a,{..._,form:u,name:"register",onFinish:t=>D(t),className:"w-full",layout:m,scrollToFirstError:!0,children:[e.jsx(a.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름은 필수 입력 항목입니다.",whitespace:!0}],children:e.jsx(c,{placeholder:"이름을 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"email",label:"이메일",rules:[{type:"email",message:"이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해주세요."},{required:!0,message:"이메일은 필수 입력 항목입니다."}],hasFeedback:!0,validateStatus:o,help:o==="error"?"이미 사용 중인 이메일입니다.":o==="success"?"사용 가능한 이메일입니다.":null,children:e.jsx(c,{onBlur:t=>{t.target.value&&T(t)},placeholder:"이메일을 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"pw",label:"비밀번호",rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],children:e.jsx(c.Password,{placeholder:"비밀번호를 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"confirm",label:"비밀번호 확인",dependencies:["password"],rules:[{required:!0,message:"비밀번호 확인은 필수 입력 항목입니다."},({getFieldValue:t})=>({validator(s,n){return!n||t("pw")===n?Promise.resolve():Promise.reject(new Error("비밀번호가 일치하지 않습니다. 다시 입력해주세요."))}})],children:e.jsx(c.Password,{placeholder:"비밀번호를 다시 한번 입력하세요",style:{height:"60px"}})}),e.jsx(r,{onChange:L,checked:q,className:"bg-slate-100 w-full font-semibold text-lg mb-[15px] py-[10px] px-[15px] rounded-lg",children:"전체 동의합니다."}),e.jsxs(r.Group,{value:d,onChange:A,className:"flex flex-col gap-[10px] mb-[20px] w-full",children:[e.jsx(r,{value:"required-1",children:"[필수] 만 14세 이상입니다."}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(r,{value:"required-2",className:"underline",children:"[필수] 서비스 이용약관"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-2",onClick:p,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(r,{value:"required-3",className:"underline",children:"[필수] 개인정보 수집 및 이용 동의"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-3",onClick:p,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(r,{value:"required-4",className:"underline",children:"[필수] 위치서비스 이용 동의"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-4",onClick:p,children:"보기"})]}),e.jsx(r,{value:"option-1",children:"[선택] 이벤트 및 할인 혜택 안내 동의"})]}),j?e.jsx("p",{className:`${j?"text-secondary3":"text-white"} text-[14px] font-medium`,children:"* 필수 약관을 모두 동의해야 제출 가능합니다."}):null,I?e.jsx(R,{policyType:S,setShowPolicy:g}):null,e.jsx(a.Item,{...G,children:e.jsx(M,{type:"primary",htmlType:"submit",block:!0,className:"h-[60px]",children:"다음"})})]})})]})};export{xe as default};
