import{j as e}from"./jsx-runtime-D1yySo7E.js";import{z as a}from"./index-BeXw7Xwl.js";import{S as o}from"./spacer-_kxp_vdK.js";import{I as l}from"./icon-CC3MP7l8.js";import{c as i}from"./misc-CxaYal_B.js";import{u as d}from"./user-DifDgJky.js";import{c as u,L as t}from"./components-C2HTMhgG.js";import{O as x}from"./index-CcD7lzrX.js";const f=a.object({breadcrumb:a.any()}),v={breadcrumb:e.jsx(l,{name:"file-text",children:"Edit Profile"}),getSitemapEntries:()=>null},h=a.object({handle:f});function y(){const m=d(),n=u().map(s=>{const r=h.safeParse(s);return!r.success||!r.data.handle.breadcrumb?null:e.jsx(t,{to:s.pathname,className:"flex items-center",children:r.data.handle.breadcrumb},s.id)}).filter(Boolean);return e.jsxs("div",{className:"m-auto mb-24 mt-16 max-w-3xl",children:[e.jsx("div",{className:"container",children:e.jsxs("ul",{className:"flex gap-3",children:[e.jsx("li",{children:e.jsx(t,{className:"text-muted-foreground",to:`/users/${m.username}`,children:"Profile"})}),n.map((s,r,c)=>e.jsxs("li",{className:i("flex items-center gap-3",{"text-muted-foreground":r<c.length-1}),children:["▶️ ",s]},r))]})}),e.jsx(o,{size:"xs"}),e.jsx("main",{className:"mx-auto bg-muted px-6 py-8 md:container md:rounded-3xl",children:e.jsx(x,{})})]})}export{y as default,v as handle};
//# sourceMappingURL=profile-Ca6JOM2M.js.map
