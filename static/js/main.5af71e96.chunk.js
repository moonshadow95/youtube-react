(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{2:function(e,t,a){e.exports={header:"search_header_header__2th3p",guide:"search_header_guide__1vNhA",logo:"search_header_logo__34jYR",icon:"search_header_icon__1jrdu",input:"search_header_input__cjuz7",button:"search_header_button__3UIJ9",search:"search_header_search__1forS",menu:"search_header_menu__3pt6u",description:"search_header_description__1qcWw",title:"search_header_title__1bS_q"}},24:function(e,t,a){e.exports={videos:"video_list_videos__1Ate-"}},32:function(e,t,a){},4:function(e,t,a){e.exports={container:"video_item_container__225y9",grid:"video_item_grid__X44a7",list:"video_item_list__ZfhwB",video:"video_item_video__1a6iw",row:"video_item_row__38BI-",column:"video_item_column__1tzVX",metadata:"video_item_metadata__uYL81",thumbnail:"video_item_thumbnail__2HTTS",title:"video_item_title__345XK",channel:"video_item_channel__2ZW93"}},5:function(e,t,a){e.exports={navbar:"aside_navbar_navbar__1Q9K-",button:"aside_navbar_button__3x158"}},55:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(23),i=a.n(n),r=(a(32),a(12)),o=a(6),l=a.n(o),d=a(5),u=a.n(d),j=a(0),b=function(e){var t=e.onHomeClick;return Object(j.jsxs)("nav",{className:u.a.navbar,children:[Object(j.jsxs)("button",{className:"".concat(u.a.home," ").concat(u.a.button),onClick:function(){t("")},children:[Object(j.jsx)("i",{className:"fas fa-home fa-lg"}),Object(j.jsx)("span",{children:"Home"})]}),Object(j.jsxs)("button",{className:"".concat(u.a.explore," ").concat(u.a.button),children:[Object(j.jsx)("i",{className:"fas fa-compass fa-lg"}),Object(j.jsx)("span",{children:"Explore"})]}),Object(j.jsxs)("button",{className:"".concat(u.a.subscription," ").concat(u.a.button),children:[Object(j.jsx)("i",{className:"fas fa-folder-open fa-lg"}),Object(j.jsx)("span",{children:"Subscriptions"})]}),Object(j.jsxs)("button",{className:"".concat(u.a.storage," ").concat(u.a.button),children:[Object(j.jsx)("i",{className:"fas fa-box fa-lg"}),Object(j.jsx)("span",{children:"Library"})]})]})},_=a(2),h=a.n(_),p=Object(c.memo)((function(e){var t=e.onSearch,a=Object(c.useRef)(),s=function(){var e=a.current.value;t(e),a.current.value=""};return Object(j.jsxs)("header",{className:h.a.header,children:[Object(j.jsx)("button",{className:h.a.guide,children:Object(j.jsx)("i",{className:"fas fa-bars"})}),Object(j.jsxs)("div",{className:h.a.logo,children:[Object(j.jsx)("button",{className:h.a.icon,onClick:function(){a.current.value="",t()},children:Object(j.jsx)("i",{className:"fab fa-youtube"})}),Object(j.jsx)("h1",{className:h.a.title,children:"YouTube"})]}),Object(j.jsx)("input",{ref:a,className:h.a.input,type:"text",placeholder:"Search",onKeyPress:function(e){"Enter"===e.key&&s()}}),Object(j.jsx)("button",{className:h.a.button,type:"submit",onClick:function(){s()},children:Object(j.jsx)("i",{className:"fas fa-search ".concat(h.a.search)})}),Object(j.jsxs)("div",{className:h.a.menu,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-video fa-lg"}),Object(j.jsx)("span",{className:h.a.description,children:"Make Video"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-th fa-lg"}),Object(j.jsx)("span",{className:h.a.description,children:"YouTube App"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-bell fa-lg"}),Object(j.jsx)("span",{className:h.a.description,children:"Notice"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-user-circle fa-lg"}),Object(j.jsx)("span",{className:h.a.description,children:"Account"})]})]})]})})),m=a(8),x=a.n(m),f=function(e){var t=e.video,a=e.video.snippet;return Object(j.jsxs)("section",{className:x.a.detail,children:[Object(j.jsx)("iframe",{className:x.a.video,title:"youtube video player",type:"text/html",width:"100%",height:"700px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(j.jsx)("h2",{children:a.title}),Object(j.jsx)("h3",{children:a.channelTitle}),Object(j.jsx)("pre",{className:x.a.description,children:a.description})]})},v=a(4),O=a.n(v),N=Object(c.memo)((function(e){var t=e.video,a=e.video.snippet,c=e.onVideoClick,s=e.display,n="list"===s?O.a.list:O.a.grid,i="list"===s?O.a.row:O.a.column;return Object(j.jsx)("li",{className:"".concat(O.a.container," ").concat(n),onClick:function(){return c(t)},children:Object(j.jsxs)("div",{className:"".concat(O.a.video," ").concat(i),children:[Object(j.jsx)("img",{className:O.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(j.jsxs)("div",{className:O.a.metadata,children:[Object(j.jsx)("p",{className:O.a.title,children:a.title}),Object(j.jsx)("p",{className:O.a.channel,children:a.channelTitle})]})]})})})),y=a(24),g=a.n(y),k=function(e){var t=e.videos,a=e.onVideoClick,c=e.display;return Object(j.jsx)("ul",{className:g.a.videos,children:t.map((function(e){return Object(j.jsx)(N,{video:e,onVideoClick:a,display:c},e.id)}))})};var w=function(e){var t=e.youtube,a=Object(c.useState)([]),s=Object(r.a)(a,2),n=s[0],i=s[1],o=Object(c.useState)(null),d=Object(r.a)(o,2),u=d[0],_=d[1],h=Object(c.useCallback)((function(e){_(null),t.search(e).then((function(e){return i(e)}))}),[t]);return Object(c.useEffect)((function(){t.mostPopular().then((function(e){return i(e)}))}),[t]),Object(j.jsxs)("div",{className:l.a.app,children:[Object(j.jsx)(p,{onSearch:h}),Object(j.jsx)("aside",{children:Object(j.jsx)(b,{onHomeClick:h})}),Object(j.jsxs)("section",{className:l.a.content,children:[u&&Object(j.jsx)("div",{className:l.a.detail,children:Object(j.jsx)(f,{video:u})}),Object(j.jsx)("div",{className:l.a.list,children:Object(j.jsx)(k,{videos:n,onVideoClick:function(e){_(e)},display:u?"list":"grid"})})]})]})},C=a(13),S=a(7),R=a.n(S),T=a(11),V=a(25),z=a(26),A=function(){function e(t){Object(V.a)(this,e),this.youtube=t}return Object(z.a)(e,[{key:"mostPopular",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:20}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:20,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),I=a(27),U=a.n(I),B=(a(52),new A(U.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyCFAbwMROkRy-Te_xDQxRkG6d-yIDxNszU"}})));i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{youtube:B})}),document.getElementById("root"))},6:function(e,t,a){e.exports={app:"app_app__vZ3Ds",content:"app_content__2licF",detail:"app_detail__390Qz",list:"app_list__1jV_d"}},8:function(e,t,a){e.exports={detail:"video_detail_detail__3dU0z",video:"video_detail_video__1xUFG",description:"video_detail_description__3092Z"}}},[[55,1,2]]]);
//# sourceMappingURL=main.5af71e96.chunk.js.map