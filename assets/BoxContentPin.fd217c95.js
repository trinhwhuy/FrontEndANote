import{r as o,S as r,j as l,b as e,F as s}from"./index.5abae7e1.js";const i=t=>{const{state:d,dispatch:a}=o.exports.useContext(r);return l("a",{className:"snap-center m-2",onClick:()=>{a({type:"isShowMoreNote",payload:!0}),a({type:"setNote",payload:{setNote:t.aNote}})},children:[e("div",{className:"relative z-10 left-[-5px] top-[20px] grid align-top",children:e("i",{className:"fa-solid fa-star text-greatRed text-2xl"})}),e("div",{className:"w-48 h-fit rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl backdrop-blur-sm bg-white/40  backdrop-opacity-20 border-2 border-white  p-5 transform-gpu ",children:t.aNote.title&&t.aNote.content!==""?l(s,{children:[e("div",{className:"text-xl font-[450] break-all",children:t.aNote.title}),e("div",{className:" block justify-items-left items-center text-md truncate ...",children:t.aNote.content})]}):e("div",{className:"text-xl font-[450] ",children:"Empty note"})})]})};export{i as default};