"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[561],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return w},S:function(){return H},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],k=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let R,O;const q=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=l(e,T);const{width:y,height:b,layout:v}=n,E=c(y,b,v),{style:w,className:N}=E,S=l(E,I),L=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(k);if(O&&_.has(k))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(k),image:n},h)),_.has(k)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,k,_,i,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(k)&&O&&(L.current.innerHTML=O(s({isLoading:_.has(k),isLoaded:_.has(k),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},S,{style:s({},w,i,{backgroundColor:d}),className:N+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));A.propTypes=x,A.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function j(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,P);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const z=j((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=l(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:E,height:C,layout:x,images:T,placeholder:I,backgroundColor:_}=o,R=c(E,C,x),{style:O,className:q}=R,A=l(R,L),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?k(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>s({},e,{srcSet:k(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},O,i,{backgroundColor:h}),className:q+(a?" "+a:"")}),r.createElement(g,{layout:x,width:E,height:C},r.createElement(w,s({},u(I,!1,x,E,C,_,y,b))),r.createElement(N,s({"data-gatsby-image-ssr":"",className:m},v,d("eager"===p,!1,P,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:C,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const H=j(A);H.displayName="StaticImage",H.propTypes=F},8771:function(e,t,a){var r=a(7294),n=a(1883),i=a(8032);t.Z=()=>{var e,t;const s=(0,n.useStaticQuery)("3257411868"),l=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=s.site.siteMetadata)||void 0===t||t.social;return r.createElement("div",{className:"bio"},r.createElement("div",{className:"profile-card"},r.createElement("div",{className:"profile-card__inner"},r.createElement("div",{className:"profile-thumb"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:104,height:104,quality:95,alt:"Profile picture",__imageData:a(8197)})),r.createElement("div",{className:"profile-content"},r.createElement("p",{className:"profile-name"},l.name),r.createElement("p",{className:"profile-intro p"},(null==l?void 0:l.summary)||null)))),r.createElement("div",{className:"profile-card"},r.createElement("div",{className:"profile-card__inner"},r.createElement("div",{className:"profile-content"},r.createElement("p",{className:"profile-name"},"おしらせ"),r.createElement("p",{className:"profile-intro p"},"アウトプットが苦手なので、ブログを始めることにしました。つたない文章、大変恐れ入ります。")))))}},8678:function(e,t,a){var r=a(7294);a(1883);t.Z=e=>{let{location:t,title:a,children:n}=e;const i="/blog/"===t.pathname;return r.createElement("html",{"data-is-root-path":i},r.createElement("body",null,r.createElement("nav",null,r.createElement("a",{className:"site-title",href:"https://sh1ra1sh1.github.io/mypage"}),r.createElement("a",{className:"top",href:"https://sh1ra1sh1.github.io/blog"},"← TOP PAGE")),n,r.createElement("footer",{className:"p"},r.createElement("section",null,"COPYRIGHT © 2024 SHIRAKEN ALL RIGHTS RESERVED."))))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t;let{description:a,title:i,children:s}=e;const{site:l}=(0,n.useStaticQuery)("2841359383"),o=a||l.siteMetadata.description,c=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?i+" | "+c:i),r.createElement("meta",{name:"description",content:o}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:o}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:"https:sh1ra1sh1.github.io/blog/src/images/card.png"}),r.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=yes"}),r.createElement("meta",{name:"robots",content:"nofollow"}),r.createElement("title",null,i),s)}},8197:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/blog/static/f3162a9884461808f78370361dd5d302/11a58/profile-pic.png","srcSet":"/blog/static/f3162a9884461808f78370361dd5d302/11a58/profile-pic.png 104w,\\n/blog/static/f3162a9884461808f78370361dd5d302/d8f61/profile-pic.png 208w","sizes":"104px"},"sources":[{"srcSet":"/blog/static/f3162a9884461808f78370361dd5d302/e55d9/profile-pic.avif 104w,\\n/blog/static/f3162a9884461808f78370361dd5d302/95a84/profile-pic.avif 208w","type":"image/avif","sizes":"104px"},{"srcSet":"/blog/static/f3162a9884461808f78370361dd5d302/89c0c/profile-pic.webp 104w,\\n/blog/static/f3162a9884461808f78370361dd5d302/271b4/profile-pic.webp 208w","type":"image/webp","sizes":"104px"}]},"width":104,"height":104}')}}]);
//# sourceMappingURL=dffd9eda1bde23af0ce146d568b45c289f422d0a-cdd466f33a70eff9e4ed.js.map