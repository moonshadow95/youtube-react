(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1Ate-"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__225y9",grid:"video_item_grid__X44a7",list:"video_item_list__ZfhwB",video:"video_item_video__1a6iw",thumbnail:"video_item_thumbnail__2HTTS",metadata:"video_item_metadata__uYL81",title:"video_item_title__345XK",channel:"video_item_channel__2ZW93"}},4:function(e,t,a){e.exports={header:"search_header_header__2th3p",logo:"search_header_logo__34jYR",img:"search_header_img__2GKSc",input:"search_header_input__cjuz7",button:"search_header_button__3UIJ9"}},5:function(e,t,a){e.exports={app:"app_app__vZ3Ds",content:"app_content__2licF",detail:"app_detail__390Qz",list:"app_list__1jV_d"}},50:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),p=a(0),h=Object(i.memo)((function(e){var t=e.onSearch,a=Object(i.useRef)(),n=function(){var e=a.current.value;t(e)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:""}),Object(p.jsx)("h1",{className:d.a.title,children:"YouTube"})]}),Object(p.jsx)("input",{ref:a,className:d.a.input,type:"text",placeholder:"Search",onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(p.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){n()},children:Object(p.jsx)("img",{src:"/images/search.png",alt:"search"})})]})})),_=a(7),j=a.n(_),m=function(e){var t=e.video,a=e.video.snippet;return Object(p.jsxs)("section",{className:j.a.detail,children:[Object(p.jsx)("iframe",{className:j.a.video,title:"youtube video player",type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{children:a.title}),Object(p.jsx)("h3",{children:a.channelTitle}),Object(p.jsx)("pre",{className:j.a.description,children:a.description})]})},b=a(3),v=a.n(b),x=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,n="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(n),onClick:function(){return i(t)},children:Object(p.jsxs)("div",{className:v.a.video,children:[Object(p.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:v.a.metadata,children:[Object(p.jsx)("p",{className:v.a.title,children:a.title}),Object(p.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})})),O=a(21),f=a.n(O),y=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(p.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(p.jsx)(x,{video:e,onVideoClick:a,display:i},e.id)}))})};var g=function(e){var t=e.youtube,a=Object(i.useState)([]),n=Object(r.a)(a,2),c=n[0],s=n[1],o=Object(i.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1],j=Object(i.useCallback)((function(e){_(null),t.search(e).then((function(e){s(e)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:j}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(m,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(y,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},N=a(11),w=a(6),k=a.n(w),S=a(9),C=a(22),R=a(23),T=function(){function e(t){Object(C.a)(this,e),this.youtube=t}return Object(R.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:26}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(k.a.mark((function e(t){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:26,type:"video",q:t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return i=e.sent,e.abrupt("return",i.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),z=a(24),I=new T(a.n(z).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyCFAbwMROkRy-Te_xDQxRkG6d-yIDxNszU"}}));s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{youtube:I})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__3dU0z",description:"video_detail_description__3092Z"}}},[[50,1,2]]]);
//# sourceMappingURL=main.87163776.chunk.js.map