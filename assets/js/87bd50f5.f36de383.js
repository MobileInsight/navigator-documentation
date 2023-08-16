"use strict";(self.webpackChunknavigator_documentation=self.webpackChunknavigator_documentation||[]).push([[2993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"Tutorials-Navigator/Nav-db",id:"Tutorials-Navigator/Nav-db",title:"Nav-db",description:"1. Resumen",source:"@site/docs/Tutorials-Navigator/Nav-db.md",sourceDirName:"Tutorials-Navigator",slug:"/Tutorials-Navigator/Nav-db",permalink:"/navigator-documentation/docs/Tutorials-Navigator/Nav-db",draft:!1,editUrl:"https://github.com/Oslan17/navigator-documentation/tree/main/docs/docs/Tutorials-Navigator/Nav-db.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manuals VPN",permalink:"/navigator-documentation/docs/Tutorials-Navigator/Manuals VPN"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Resumen\nPrimera hora\nEn la primera hora de la reuni\xf3n se explic\xf3 paso a paso y con ejemplos como gestionar la base de datos de Navigator.\nSe empez\xf3 explicando las tablas que tiene Navigator, se habl\xf3 de la tabla stores, store details, bw stores, etc.\nSe explic\xf3 la importancia del campo active dentro de la tabla stores y c\xf3mo hacer joins entre tablas.\nSe hizo un ejercicio pr\xe1ctico donde se le pidi\xf3 a Eric que buscara las tiendas que hayan sido aperturadas en el 2023 y que sean de tipo bby.\nEric pudo realizar el ejercicio con \xe9xito gracias a las explicaciones de la instructora.\nSegunda hora\nEn la segunda hora de la reuni\xf3n se trabaj\xf3 en el siguiente query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select region_name,\n       count(*) as stores,\n       sum(case when covered = true then 1 else 0 end) as covered,\n       sum(case when encap = true then 1 else 0 end) as encap\nfrom w_stores\ninner join store_details using (store_id)\ngroup by region_name\nhaving tr_percent < 50;\n")),(0,a.kt)("p",null,"Este query calcula el porcentaje de tiendas encap por regi\xf3n. Para ello, utiliza una funci\xf3n llamada tr_percent, que divide el n\xfamero de tiendas encap entre el n\xfamero total de tiendas. El resultado se muestra en la columna ",(0,a.kt)("inlineCode",{parentName:"p"},"tr_percent"),".\nEl query tambi\xe9n utiliza un having para filtrar las regiones cuyo porcentaje de tiendas encap sea inferior a 50. Las regiones que cumplen esta condici\xf3n se muestran en la tabla."))}d.isMDXComponent=!0}}]);