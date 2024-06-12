import{_ as Z}from"./parse-Cj2OtakU.js";var V=["required","minLength","maxLength","min","max","step","multiple","pattern"];function w(O){function i(v,n){var g,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",t=r!==""?(g=n[r])!==null&&g!==void 0?g:n[r]={required:!0}:{},e=v._def;if(e.typeName==="ZodObject")for(var y in e.shape())i(e.shape()[y],n,r?"".concat(r,".").concat(y):y);else if(e.typeName==="ZodEffects")i(e.schema,n,r);else if(e.typeName==="ZodPipeline")i(e.out,n,r);else if(e.typeName==="ZodIntersection"){var j={},L={};i(e.left,j,r),i(e.right,L,r),Object.assign(n,j,L)}else if(e.typeName==="ZodUnion"||e.typeName==="ZodDiscriminatedUnion")Object.assign(n,e.options.map(l=>{var f={};return i(l,f,r),f}).reduce((l,f)=>{var q=new Set([...Object.keys(l),...Object.keys(f)]),N={};for(var d of q){var o=l[d],s=f[d];if(o&&s){var x={};N[d]=x;for(var a of V)typeof o[a]<"u"&&typeof s[a]<"u"&&o[a]===s[a]&&(x[a]=o[a])}else N[d]=Z(Z(Z({},o),s),{},{required:!1})}return N}));else{if(r==="")throw new Error("Unsupported schema");if(e.typeName==="ZodArray")t.multiple=!0,i(e.type,n,"".concat(r,"[]"));else if(e.typeName==="ZodString"){var u=v;if(u.minLength!==null){var c;t.minLength=(c=u.minLength)!==null&&c!==void 0?c:void 0}u.maxLength!==null&&(t.maxLength=u.maxLength)}else if(e.typeName==="ZodOptional")t.required=!1,i(e.innerType,n,r);else if(e.typeName==="ZodDefault")t.required=!1,i(e.innerType,n,r);else if(e.typeName==="ZodNumber"){var p=v;p.minValue!==null&&(t.min=p.minValue),p.maxValue!==null&&(t.max=p.maxValue)}else if(e.typeName==="ZodEnum")t.pattern=e.values.map(l=>l.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")).join("|");else if(e.typeName==="ZodTuple")for(var m=0;m<e.items.length;m++)i(e.items[m],n,"".concat(r,"[").concat(m,"]"));else e.typeName}}var b={};return i(O,b),b}export{w as g};
//# sourceMappingURL=constraint-BS8S8JXD.js.map
