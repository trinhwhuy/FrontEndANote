import{r as l,b as t,F as S,S as U,u as C,a as B,q as F,c as I,j as n,l as P,t as j,v as A}from"./index.e665a9f8.js";import{i as b}from"./index.f634ea7f.js";import"./0.7ca1fb7e.js";import"./1.7598f292.js";import"./2.9dca01e0.js";import"./3.13698d7c.js";import"./4.fe37f29d.js";import"./5.a86dd2dd.js";import"./6.9db38289.js";import"./7.068f5ee0.js";import"./8.cbc88f1c.js";import"./9.80e56bee.js";import"./10.b57d0967.js";function D({getName:u,isIcon:o}){const e=(a,i)=>{a.preventDefault(),u(i),d(i)},[c,d]=l.exports.useState(o);return t(S,{children:t("div",{className:"scrollbar-hidden px-[15vw] sm:px-[15vw] md:px-[15vw] lg:px-[15vw] xl:px-[13vw] 2xl:px-[13vw] w-full flex snap-x overflow-x-auto self-center",children:Object.keys(b).map(a=>t("div",{children:t("input",{type:"image",value:a,id:`1${a}`,name:"status",src:b[a],className:`w-12 h-12 my-2 mx-10 rounded-full ${c==a?"border-4 border-greatGreen":""}`,alt:"button",onClick:i=>e(i,a)})},`11${a}`))})})}function H(){const{state:u,dispatch:o}=l.exports.useContext(U),e=C(s=>{var r;return(r=s.auth.login)==null?void 0:r.currentUser}),[c,d]=l.exports.useState(""),a=B(),i=F();let p=I(e,a,P);const[g,v]=l.exports.useState(e==null?void 0:e.avatar),[x,w]=l.exports.useState(e==null?void 0:e.email),[f,N]=l.exports.useState(""),[h,y]=l.exports.useState(e==null?void 0:e.username);return n("form",{onSubmit:s=>{s.preventDefault();const r={id:e==null?void 0:e._id,username:h,password:f,email:x,avatar:g};j(e==null?void 0:e.accessToken,r,a,p).then(m=>{m.status===200&&A(e==null?void 0:e.accessToken,r==null?void 0:r._id,p,a,i),o({type:"isRightSideBar",payload:!1}),o({type:"isSideBarItem",payload:!1}),o({type:"isShowEditProfile",payload:!1}),o({type:"isReset"}),m.status===500&&d("Username or email already used")}).catch(m=>console.log(m))},children:[n("div",{className:"px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[t("label",{children:"Username"}),t("input",{type:"text",className:"w-full bg-white rounded-md p-2 mt-2 mb-3 focus-visible:outline-none caret-greatBlue",onChange:s=>y(s.target.value),autoFocus:!0,value:h}),t("label",{children:"Email"}),t("input",{type:"email",className:"w-full bg-white rounded-md p-2 mt-2 mb-3 focus-visible:outline-none caret-greatBlue",onChange:s=>w(s.target.value),autoFocus:!0,value:x}),t("label",{children:"Avatar"}),t("div",{className:"w-full bg-white rounded-md p-2 mt-2 mb-3",children:t(D,{getName:v,isIcon:g})}),n("div",{className:"flex flex-row justify-between",children:[t("label",{children:"Password"}),t("button",{className:"text-md text-greatBlue",children:"Forgot password"})]}),t("input",{type:"password",className:"w-full bg-white rounded-md p-2 mt-2 mb-3 focus-visible:outline-none caret-greatBlue",onChange:s=>N(s.target.value),autoFocus:!0,value:f,placeholder:"Change your password"}),t("p",{className:"text-lg text-greatRed",children:c})]}),n("div",{className:"px-4 py-3 text-right",children:[n("button",{type:"button",className:"mt-2 lg:mt-10 xl:mt-10 text-white bg-gradient-to-br from-greatGreen to-greatRed hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-white dark:focus:ring-greatblue font-medium rounded-lg text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm px-5 py-2.5 text-center mr-2 mb-2",onClick:()=>{o({type:"isShowEditProfile",payload:!1})},children:[t("i",{className:"fas fa-times"})," Cancel"]}),n("button",{className:"my-5 mx-5 lg:mt-10 xl:mt-10 text-white bg-gradient-to-br from-greatGreen to-greatBlue hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-white dark:focus:ring-greatblue font-medium rounded-lg text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm px-5 py-2.5 text-center mr-2 mb-2",children:[t("i",{className:"fas fa-plus"})," Update"]})]})]})}export{H as default};