"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,n){var l=n(7294),a=n(1883);t.Z=()=>{var e,t;const n=(0,a.useStaticQuery)("3257411868");null===(e=n.site.siteMetadata)||void 0===e||e.author,null===(t=n.site.siteMetadata)||void 0===t||t.social;return l.createElement("div",{className:"bio"})}},8678:function(e,t,n){var l=n(7294);n(1883);t.Z=e=>{let{location:t,title:n,children:a}=e;const r="/blog/"===t.pathname;return l.createElement("html",{"data-is-root-path":r},l.createElement("head",null,l.createElement("meta",{charset:"UTF-8"}),l.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=yes"}),l.createElement("meta",{name:"description",content:"こちら白石研究室のホームページになります。"}),l.createElement("meta",{name:"robots",content:"nofollow"}),l.createElement("meta",{property:"og:url",content:"https://sh1ra1sh1.github.io/mypage/"}),l.createElement("meta",{property:"og:title",content:"白石研究室"}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:"いつでも帰っておいで。みんなの心のふるさと。"}),l.createElement("meta",{property:"og:image",content:"https://sh1ra1sh1.github.io/mypage/img/card.png"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:site",content:"@baishi_20"}),l.createElement("meta",{property:"og:site_name",content:"白石研究室"}),l.createElement("meta",{property:"og:locale",content:"ja_JP"}),l.createElement("title",null,n),l.createElement("link",{rel:"canonical",href:"https://sh1ra1sh1.github.io/mypage"}),l.createElement("link",{rel:"icon",href:"./img/icon_x16.png",sizes:"16x16",type:"image/png"}),l.createElement("link",{rel:"icon",href:"./img/icon_x32.png",sizes:"32x32",type:"image/png"}),l.createElement("link",{rel:"icon",href:"./img/icon_x48.png",sizes:"48x48",type:"image/png"}),l.createElement("link",{rel:"icon",href:"./img/icon_x62.png",sizes:"62x62",type:"image/png"}),l.createElement("link",{rel:"stylesheet",href:"stylesheet.css"})),l.createElement("body",null,l.createElement("nav",null,l.createElement("a",{href:"./"})),l.createElement("header",null,l.createElement("section",null,l.createElement("h1",null,"無差別日記"),"2023.08.16 更新")),l.createElement("main",null,l.createElement("div",{class:"main_wrap"},l.createElement("div",{class:"article"},l.createElement("section",null,a)))),l.createElement("footer",null,l.createElement("section",{class:"under_wrap"},l.createElement("div",{class:"profile_card"},l.createElement("div",{class:"icon_img"}),l.createElement("div",{class:"name"},l.createElement("a",{href:"https://twitter.com/baishi_20/",target:"_blank"},"白石 和暉 @baishi_20")),l.createElement("div",{class:"description"},l.createElement("p",null,"いつでも帰っておいで。 みんなの心のふるさと。"))),l.createElement("div",{class:"menu"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://sh1ra1sh1.github.io/mypage/"},"プロフィール")),l.createElement("li",null,l.createElement("a",{href:"./"},"ブログ")),l.createElement("li",null,l.createElement("a",{href:"https://sh1ra1sh1.github.io/mypage/prepare.html"},"ポートフォリオ")),l.createElement("li",null,l.createElement("a",{href:"https://sh1ra1sh1.github.io/mypage/prepare.html"},"その他"))))),l.createElement("section",null,"COPYRIGHT © 2023 SHIRAKEN ALL RIGHTS RESERVED."))))}},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:c,children:m}=e;const{site:o}=(0,a.useStaticQuery)("2841359383"),s=i||o.siteMetadata.description,p=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,p?c+" | "+p:c),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:s}),m)}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m}});var l=n(7294),a=n(1883),r=n(8771),i=n(8678),c=n(9357);t.default=e=>{var t;let{data:n,location:c}=e;const m=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=n.allMarkdownRemark.nodes;return 0===o.length?l.createElement(i.Z,{location:c,title:m},l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(i.Z,{location:c,title:m},l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},o.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const m=()=>l.createElement(c.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-eeabd6c5de7a872eb79d.js.map