import{j as r}from"./jsx-runtime-D1yySo7E.js";function u(){return r.jsx("div",{className:"container pt-12",children:r.jsx("p",{className:"text-body-md",children:"Select a note"})})}const l=({params:a,matches:i})=>{var o,s;const e=i.find(d=>d.id==="routes/users+/$username_+/notes"),t=((o=e==null?void 0:e.data)==null?void 0:o.owner.name)??a.username,n=((s=e==null?void 0:e.data)==null?void 0:s.owner.notes.length)??0,c=n===1?"note":"notes";return[{title:`${t}'s Notes | Epic Notes`},{name:"description",content:`Checkout ${t}'s ${n} ${c} on Epic Notes`}]};export{u as default,l as meta};
//# sourceMappingURL=notes.index-B7Jqqa_i.js.map
