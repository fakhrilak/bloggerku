(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,a,t){e.exports=t.p+"static/media/profile1.c59a793c.jpeg"},136:function(e,a,t){e.exports=t(266)},141:function(e,a,t){},142:function(e,a,t){},146:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(46),l=t.n(r),s=(t(141),t(22)),o=(t(142),t(10)),u=t(24),m=function(){return i.a.createElement("div",{style:{backgroundColor:"#3399ff",color:"black",textAlign:"center",height:100,bottom:0,width:"100%"}},i.a.createElement("p",null,"\xa9 2020 Zilog-Corporation | Make with \u2764\ufe0f  using ReactJs"),i.a.createElement("p",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"Foother"},i.a.createElement("a",{href:"https://www.facebook.com/assyroh.kaffah/",target:"_blank"},i.a.createElement(o.a,{icon:u.a,style:{color:"black"}}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/FakhrilAK/",target:"_blank"},i.a.createElement(o.a,{icon:u.c,style:{color:"black"}}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/fakhrilak/",target:"_blank"},i.a.createElement(o.a,{icon:u.b,style:{color:"black"}}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.youtube.com/feed/my_videos/",target:"_blank"},i.a.createElement(o.a,{icon:u.d,style:{color:"black"}}))))))},c=(t(65),t(146),function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("ul",{className:"Header"},i.a.createElement("li",{style:{float:"right"}},i.a.createElement("a",{href:"https://www.facebook.com/assyroh.kaffah/",target:"_blank"},i.a.createElement(o.a,{icon:u.a,style:{color:"black"}}))),i.a.createElement("li",{style:{float:"right"}},i.a.createElement("a",{href:"https://twitter.com/FakhrilAK/",target:"_blank"},i.a.createElement(o.a,{icon:u.c,style:{color:"black"}}))),i.a.createElement("li",{style:{float:"right"}},i.a.createElement("a",{href:"https://www.instagram.com/fakhrilak/",target:"_blank"},i.a.createElement(o.a,{icon:u.b,style:{color:"black"}}))),i.a.createElement("li",{style:{float:"right"}},i.a.createElement("a",{href:"https://www.youtube.com/feed/my_videos/",target:"_blank"},i.a.createElement(o.a,{icon:u.d,style:{color:"black"}})))))}),d=(t(83),t(37)),p=t.n(d),g=t(38),h=t.n(g),k=t(39),y=t.n(k),b=t(40),f=t.n(b),E=t(48),v=t.n(E),w=[{id:1,img:v.a,text:"Cerita cinta kita",title:"Dear You"},{id:2,img:p.a,text:'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',title:"Python"},{id:3,img:h.a,text:'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',title:"JavaScript"},{id:4,img:y.a,text:'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',title:"Arduino"},{id:5,img:f.a,text:'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',title:"IOT"}],N=t(7),I=function(e){var a=e.Allcategory,t=e.loading,n=Object(N.f)();w.filter((function(e){return e.id>"1"}));return t?i.a.createElement("div",null,"loading...."):i.a.createElement("div",{className:"Grid-Home"},a.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:e.img,onClick:function(){return n.push("/category/".concat(e.title))}})),i.a.createElement("div",{className:"Content-Grid-Home"},i.a.createElement("p",null,e.title),i.a.createElement("h5",null,e.text)))})))},L=t(36),j=t.n(L),x=t(9),O=t(18),A=t.n(O),S=t(30),C=t(131),T=t.n(C).a.create({baseURL:"http://localhost:5000/api/bloggerku"}),R=function(e){e?T.defaults.headers.common.Authorization="Bearer ".concat(e):delete T.defaults.headers.common.Authorization},H=Object(x.b)((function(e){return{categorys:e.category}}),{getCategory:function(){return function(){var e=Object(S.a)(A.a.mark((function e(a){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/category");case 3:t=e.sent,a({type:"GET_CATEGORY_SUCCESS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"GET_CATEGORY_FAIL",payload:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()}})((function(e){var a=e.getCategory,t=e.categorys,r=t.Allcategory,l=t.loading;Object(n.useEffect)((function(){a()}),[]);var s=Object(N.f)();return i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"Home-pict"},i.a.createElement("img",{src:j.a})),i.a.createElement(c,null),i.a.createElement("div",{className:"Home-content"},i.a.createElement("div",{className:"Home-Left"},i.a.createElement("div",{className:"Homecontent"},i.a.createElement("p",{className:"p"},"Content"),i.a.createElement("div",{style:{paddingRight:20}},i.a.createElement(I,{onClick:function(){s.push("/category")},Allcategory:r,loading:l}))))),i.a.createElement("div",{className:"Home-Foother"}))})),_=(t(167),t(132)),M=t.n(_),P=t(41),U=function(){return i.a.createElement("div",{className:"profile-container"},i.a.createElement("div",{className:"profile-card"},i.a.createElement("div",{className:"profile-desc"},i.a.createElement("div",{className:"profile-data"},i.a.createElement("h2",null,"Profile")),i.a.createElement("div",{className:"profile-data"},i.a.createElement("div",{className:"profile-icon"},i.a.createElement(o.a,{icon:P.e})),i.a.createElement("div",{className:"profile-details"},i.a.createElement("span",null,"Fullname"),i.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Fakhril AK"))),i.a.createElement("div",{className:"profile-data"},i.a.createElement("div",{className:"profile-icon"},i.a.createElement(o.a,{icon:P.a})),i.a.createElement("div",{className:"profile-details"},i.a.createElement("span",null,"Email"),i.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"fakhrilak23@gmail.com"))),i.a.createElement("div",{className:"profile-data"},i.a.createElement("div",{className:"profile-icon"},i.a.createElement(o.a,{icon:P.d})),i.a.createElement("div",{className:"profile-details"},i.a.createElement("span",null,"Gender"),i.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Male"))),i.a.createElement("div",{className:"profile-data"},i.a.createElement("div",{className:"profile-icon"},i.a.createElement(o.a,{icon:P.c})),i.a.createElement("div",{className:"profile-details"},i.a.createElement("span",null,"Phone"),i.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"081299243859"))),i.a.createElement("div",{className:"profile-data"},i.a.createElement("div",{className:"profile-icon"},i.a.createElement(o.a,{icon:P.b})),i.a.createElement("div",{className:"profile-details"},i.a.createElement("span",null,"Address"),i.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},"Bojonegoro")))),i.a.createElement("div",{className:"profile-img"},i.a.createElement("img",{src:M.a,alt:"avatar",className:"profile-avatar"}))))},G=(t(168),t(8)),F=t(80),D=t.n(F),J=function(){return function(){var e=Object(S.a)(A.a.mark((function e(a){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&R(localStorage.token),e.prev=1,e.next=4,T.get("/auth");case 4:t=e.sent,a({type:"USER_LOADED",payload:t.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()},W=Object(x.b)((function(e){return{auth:e.auth}}),{handleLogout:function(){return function(e){e({type:"CLEAR_PROFILE"}),e({type:"LOGOUT"})}}})((function(e){var a=e.handleLogout,t=e.register,n=e.login,r=e.auth,l=r.isAuthenticated,s=r.user,o=function(){a()};return i.a.createElement("div",{style:{position:"fixed",width:"100%"}},null===s?i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(G.b,{to:"/bloggerku"},i.a.createElement("img",{src:D.a,style:{width:40}}))),i.a.createElement("li",null,i.a.createElement(G.b,{to:"/about",style:{paddingTop:30}},"About")),i.a.createElement("li",null,i.a.createElement(G.b,{to:"/lastupdate",style:{paddingTop:30}},"Last Update")),!l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:n},"Login")),!l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:t},"Register")),l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:function(){return o()}},"Logout")),l&&i.a.createElement("li",null,i.a.createElement(G.b,{to:"/write",style:{paddingTop:30}},"WRITE")))):i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(G.b,{to:"/bloggerku"},i.a.createElement("img",{src:D.a,style:{width:40}}))),i.a.createElement("li",null,i.a.createElement(G.b,{to:"/about",style:{paddingTop:30}},"About")),i.a.createElement("li",null,i.a.createElement(G.b,{to:"/lastupdate",style:{paddingTop:30}},"Last Update")),l&&1==s.role&&i.a.createElement("li",null,i.a.createElement(G.b,{to:"/private",style:{paddingTop:30}},"My-Love")),!l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:n},"Login")),!l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:t},"Register")),l&&i.a.createElement("li",{style:{paddingTop:25,marginInlineEnd:20,float:"right"}},i.a.createElement("button",{onClick:function(){return o()}},"Logout")),l&&i.a.createElement("li",null,i.a.createElement(G.b,{to:"/write",style:{paddingTop:30}},"WRITE")))))})),B=t(62),Y=[{id:1,title:"Python Build Desktop Application",category:"Python",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:p.a},{id:2,title:"Using Python in Raspberry",category:"Python",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:p.a},{id:3,title:"Build Website Using Python",category:"Python",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:p.a},{id:4,title:"Fundamental JavaScript",category:"JavaScript",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:h.a},{id:5,title:"Build Website Using ReactJs",category:"JavaScript",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:h.a},{id:6,title:"Build Restfull API Using NodeJs",category:"JavaScript",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:h.a},{id:7,title:"Builder Line Follwers Arduino",category:"Arduino",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:y.a},{id:8,title:"Conrol Excavator Using Arduino",category:"Arduino",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:y.a},{id:9,title:"Avoider Robotic Using Arduino",category:"Arduino",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:y.a},{id:10,title:"Control Lampu Using NodeMcu",category:"IOT",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:f.a},{id:11,title:"Build Dorlock Using NodeMcu",category:"IOT",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:f.a},{id:12,title:"Build Server IOT using NodeJs",category:"IOT",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:f.a},{id:13,title:"I Will Try To Fix You",category:"Dear You",text:"Hello kamu... aku harap kamu baik baik aja sekarang... Kali ini izinkan aku jujur dengan pernyataan pernyaan ini. Aku tau kamu udah dari sejak lama, Sedikit banyak aku tau tentang kejadian yang pernah ada dalam hidupmu. Aku yang dulu nemenin mantanmu buat beli capcai waktu malem malemm haha. Aku juga tau tentang kisah percintaanmu yang terluka. Aku juga tau betapa sakitnya posisimu saat itu, semoga tidak sampai dengan saat ini. masa lalumu memang begitu sangat menyakitkan jika aku bayangkan jadi kamu. Gak tau aku dulu siapa, tapi pada waktu itu aku salah satu orang yang ingin perduli tentang rasa sakit itu akan tetapi memang saatnya tidak tepat. Kamu yang kuat akan segala kelemahanmu. saat kamu baca ini semoga tidak salah mengartikan untuk membaut semua keadaan ini lebih buruk. aku hanya ingin kehadiranku dihidupmu dapat membuat segalanya lebih baik, kamu berhak bahagia. yang aku inginkan hanyalah itu. saat kamu sedih dan terlarut dalam depresi entah apa yang aku rasakan selalu ingin hadir dan mengajakmu berbiscara, lalu aku titipkan salamku itu pada temanmu. entah apa yang kamu rasakan saat mendengar salam itu. Aku sangar berhati hati dalam hal itu. Semakin aku mencoba bodo amat tentangmu justru aku semakin penasaran, aku sangat bingung dengan perasaanku sendiri. sampai akhirnya kita duduk berdua dan aku tau itu adalah rasa sayang. saat itu aku bahagia sekali sudah bisa membuatmu tertawa malu malu, kamu cantik saat tertawa. IJINKAN AKU UNTUK SELALU MENEMANI SEMUA KISAH HIDUPMU TANPA TAPI. I will try to fix U.",text2:"",img:v.a},{id:14,title:"Luka Lama",category:"Dear You",text:"Selamat malam...Cerita singkat, untuk membalas cerita singkatmu.hehehe.Sembuh dari luka~ Dahulu hati selalu menang saat berdebat dengan akal sehat.kenapa harus ingin mengejarnya kesana? kenapa harus berbuat sesuatu yang memang belum tentu aku suka? aku memang orang yang tak bisa jauh dari pasangan (komunikasi), dahulu aku hanya takut kehilangan. meskipun memang benar harus teruwujudkan ~ rasa sayang seperti menjadi dendam, meskipun bukan untuk saling membenci. dendam itu aku gambarkan seperti senyuman yang harus aku lakukan meskipun tanpanya. aku harus tetap menjadi diriku sendiri. aku harus tetap tersenyum.aku harus menutup semua luka...kali ini akal yang mengambil peran. untuk sembuh dari luka aku nyatakan sudah sembuh. tapi bukan untuk kenangan. kenangan itu sebuah memori yang tidak bisa dihapuskan begitu saja. bahkan mungkin sampai mati pun tidak akan pernah hilang. lalu apakah kita salah untuk apa yang kita lakukan saat ini? - tidak, (itu jawabku)mungkin aku tau saat ini kamu belum bisa tersenyum karena kepergiannya..... karena kamu belum bisa menemukan bahagia seperti kamu bahagia dengan masa lalumu.yaaaaaa betullll.... kenangan tidak bisa hilang, tapi dia bisa ditutupi.keadaan yang membuatmu lebih bersyukur,keadaan yang mampu menutupi kebahagiaanmu dahulu.kesedihanmu, tangismu, rasa kecewamu memang harus terbayarkan.sini bagi ke aku kesedihanmu....aku selalu berusaha untuk menghilangkan itu darimu...untuk aku~aku sudah berniat untuk menutupi kenangannya dengan kenangan bersamamu.kamu yang sampai saat ini mengerti aku.kamu yang tidak pernah protes dengan apa yang aku lakukan,*selama bukan masalah orang ketiga kan?aku rasa itu hal hal yang akan menjadi modal untuk menutup kenangan bersamanya.dengan begitu aku lebih bisa menceritakan semuanya kepadamu.aku bisa jauh lebih nyaman dengan mengukir kenangan bersamamu.menerima itu kunci dari hubungan.aku tidak akan menuntumu apapun yang membuatmu berat.lakukan sebisamu, dan tolong.... sayangi aku.termasuk semua hobiku, termasuk apa yang jelek padaku.aku yakin sangat yakin jika nantinya kenangan dengan masa laluku akan tertutupi dengan kenangan bersamamu.aku tau sekarang kamu pasti akan bilang, aku bisa gak ya? tidak ada teori yang paling benar dalam kehidupan, selain dicoba.ayo ayo percaya dirinya manaaa.....kamu gausah bandingin dirimu dengan masalaluku...aku aja mencintai dirimu kenapa kamu tidak bisa mencintai dirimu sendiri ? stop comparing your self. kamu punya sesuatu yang tidak dipunyai oleh dia. masa lalumu~tidak akan pernah memaksa kamu berdamai dengan masalalumu. tapi jangan larang aku untuk berteman baik dengan semua orang.kalo cewe boleh sih, misal kamu rasa aku terlalu dekat. tapi kayak gamungkin sih. aku juga gabisa terlalu dekat dengan wanita.jika kamu ingin menyampaikan sesuatu yang tak harus aku lakukan dengan masa lalumu sampaikanlah.justru disini saatnya kamu buktikan, kalo kamu juga bisa bahagia tanpa dia.jangan malah tambah jatuh yaaa.... memperburuk kondisimu adanya.love you <3 . last~ luka lama akan segera tertutup dengan orang baru. kebahagiaan yang lama akan segera tersaingi dengan kebahagiaan yang baru.tugas kita masing masing sekarang hanya mencintai dengan sempurna.cinta tanpa tapi.cinta yang berapi-api.cinta saling berbagi.ayo buktikan....how strong are you?",img:v.a}],K=Object(x.b)((function(e){return{contents:e.content}}),{getContent:function(){return function(){var e=Object(S.a)(A.a.mark((function e(a){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/content");case 3:t=e.sent,a({type:"GET_CONTENT_SUCCESS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"GET_CONTENT_FAIL",payload:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()}})((function(e){var a=e.match,t=e.getContent,r=e.contents,l=r.Allcontent,s=r.loading;Object(n.useEffect)((function(){t()}),[]);var o=Object(B.a)(l).filter((function(e){return e.category.title===a.params.title})),u=Object(N.f)();return s?i.a.createElement("div",null,"Loading..."):i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"Home-pict"},i.a.createElement("img",{src:j.a})),i.a.createElement(c,null),i.a.createElement("div",{className:"Home-content"},i.a.createElement("div",{className:"Home-Left"},i.a.createElement("div",null,i.a.createElement("p",{className:"p"},a.params.title),o.map((function(e){return i.a.createElement("div",null,i.a.createElement("h5",{style:{paddingLeft:20,cursor:"pointer"},onClick:function(){return u.push("/detail/".concat(e.title))}}," > ",e.title))}))))),i.a.createElement("div",{className:"Home-Foother"}))})),z=(t(169),function(e){var a=e.match,t=Object(B.a)(Y).filter((function(e){return e.title===a.params.title}));return i.a.createElement("div",{className:"Detail"},t.map((function(e){return i.a.createElement("div",{className:"Container"},i.a.createElement("div",{style:{width:"auto"},className:"Judul"},i.a.createElement("h1",null,e.title)),i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{src:e.img})),i.a.createElement("div",{className:"text"},i.a.createElement("p",{style:{textAlign:"justify"}},e.text)))})))}),Z=t(31),$=t(6),q=(t(170),function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"modal-wrapper",style:{transform:e.show?"translateY(0vh)":"translateY(-100vh)",opacity:e.show?"1":"0"}},i.a.createElement("div",{className:"modal-body"},e.children)))}),Q=Object(x.b)((function(e){return{auth:e.auth}}),{handleLogin:function(e,a,t){return function(){var n=Object(S.a)(A.a.mark((function n(i){var r,l,s;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:a}),n.prev=2,n.next=5,T.post("/login",l,r);case 5:s=n.sent,i({type:"LOGIN_SUCCESS",payload:s.data.data}),i(J()),t(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),i({type:"LOGIN_FAIL",payload:n.t0.response.data.error.message});case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var a,t=e.HandleLogin,r=e.handleLogin,l=e.Login,o=e.auth,u=o.error,m=(o.loading,Object(n.useState)({email:"",password:""})),c=Object(s.a)(m,2),d=c[0],p=c[1],g=d.email,h=d.password,k=function(e){p(Object($.a)(Object($.a)({},d),{},Object(Z.a)({},e.target.name,e.target.value)))};return i.a.createElement("div",null,t?i.a.createElement("div",{onClick:function(){return l()},className:"back-drop"}):null,i.a.createElement(q,{className:"modal",show:t},i.a.createElement("h1",null,"LOGIN"),i.a.createElement("p",null,u),i.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),r(g,h,l)}(e)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"Email",value:g,name:"email",onChange:function(e){return k(e)},className:"custom-input"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",(a={type:"password",placeholder:"Password",value:h,name:"password",onChange:function(e){return k(e)}},Object(Z.a)(a,"placeholder","Password"),Object(Z.a)(a,"className","custom-input"),a))),i.a.createElement("div",{className:"form-submit"},i.a.createElement("button",{className:"btn-submit"},"LOGIN")))))})),V=Object(x.b)((function(e){return{auth:e.auth}}),{handleRegister:function(e,a,t,n,i,r){return function(){var l=Object(S.a)(A.a.mark((function l(s){var o,u,m;return A.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return o={headers:{"Content-Type":"application/json"}},u=JSON.stringify({email:e,password:a,fullname:t,phone:n,username:i,role:2}),l.prev=2,l.next=5,T.post("/register",u,o);case 5:m=l.sent,s({type:"REGISTER_SUCCESS",payload:m.data.data}),s(J()),r(),l.next=14;break;case 11:l.prev=11,l.t0=l.catch(2),s({type:"REGISTER_FAIL"});case 14:case"end":return l.stop()}}),l,null,[[2,11]])})));return function(e){return l.apply(this,arguments)}}()}})((function(e){var a=e.handleRegister,t=e.HandleRegister,r=e.Register,l=Object(n.useState)({email:"",password:"",fullname:"",phone:"",username:""}),o=Object(s.a)(l,2),u=o[0],m=o[1],c=function(e){m(Object($.a)(Object($.a)({},u),{},Object(Z.a)({},e.target.name,e.target.value)))},d=u.email,p=u.password,g=u.fullname,h=u.phone,k=u.username;return i.a.createElement("div",null,t?i.a.createElement("div",{onClick:function(){return r()},className:"back-drop"}):null,i.a.createElement(q,{className:"modal",show:t},i.a.createElement("h1",null,"REGISTER"),i.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(d,p,g,h,k,r)}(e)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"Full Name",className:"custom-input",value:g,name:"fullname",onChange:function(e){return c(e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",placeholder:"Email",className:"custom-input",value:d,name:"email",onChange:function(e){return c(e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",placeholder:"Password",className:"custom-input",value:p,name:"password",onChange:function(e){return c(e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"User name",className:"custom-input",value:k,name:"username",onChange:function(e){return c(e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"Phone",className:"custom-input",value:h,name:"phone",onChange:function(e){return c(e)}})),i.a.createElement("div",{className:"form-submit"},i.a.createElement("button",{className:"btn-submit"},"REGISTER")))))})),X=function(e){var a=Object(N.f)(),t=w.filter((function(e){return e.id<"2"}));return i.a.createElement("div",{className:"Grid-Home"},t.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:e.img,onClick:function(){return a.push("/category/".concat(e.title))}})),i.a.createElement("div",{className:"Content-Grid-Home"},i.a.createElement("p",null,e.title),i.a.createElement("h5",null,e.text),i.a.createElement("h5",null,e.text2)))})))},ee=function(e){var a=e.kontol,t=Object(N.f)();return console.log(a,"from Home"),i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"Home-pict"},i.a.createElement("img",{src:j.a})),i.a.createElement(c,null),i.a.createElement("div",{className:"Home-content"},i.a.createElement("div",{className:"Home-Left"},i.a.createElement("div",{className:"Homecontent"},i.a.createElement("p",{className:"p"},"Content"),i.a.createElement("div",{style:{paddingRight:20}},i.a.createElement(X,{onClick:function(){t.push("/category")}}))))),i.a.createElement("div",{className:"Home-Foother"}))},ae=t(133),te=t(75),ne=(t(264),t(265),function(){var e=Object(n.useState)((function(){return te.EditorState.createEmpty()})),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),o=Object(s.a)(l,2),u=o[0],m=o[1];return i.a.createElement("div",null,i.a.createElement("div",{style:{paddingTop:100,paddingBottom:250}},i.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(t.blocks),m(t.blocks)}(e)}},i.a.createElement(ae.Editor,{placeholder:"Write Your Story Here...",initialEditorState:t,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onChange:r}),i.a.createElement("div",{className:"btn-custom"},i.a.createElement("button",null,"POST")))),u&&u.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Content-Grid-Home"},i.a.createElement("p",null,e.text)))})))}),ie=t(29),re=t(134),le=t(135),se={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},oe={Allcategory:[],loading:!0,error:null},ue={Allcontent:[],loading:!0,error:null},me=Object(ie.combineReducers)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"GET_CATEGORY_SUCCESS":return Object($.a)(Object($.a)({},e),{},{Allcategory:n,loading:!1,error:null});case"GET_CATEGORY_FAIL":return Object($.a)(Object($.a)({},e),{},{Allcategory:[],loading:!1,error:n});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"USER_LOADED":return Object($.a)(Object($.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object($.a)(Object($.a)(Object($.a)({},e),n),{},{isAuthenticated:!0,loading:!1,error:null});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":return Object($.a)(Object($.a)({},e),{},{error:n});case"LOGOUT":return localStorage.removeItem("token"),Object($.a)(Object($.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"GET_CONTENT_SUCCESS":return Object($.a)(Object($.a)({},e),{},{Allcontent:n,loading:!1,error:null});case"GET_CONTENT_FAIL":return Object($.a)(Object($.a)({},e),{},{Allcontent:[],loading:!1,error:n});default:return e}}}),ce=[le.a],de=Object(ie.createStore)(me,{},Object(re.composeWithDevTools)(ie.applyMiddleware.apply(void 0,ce))),pe=t(63),ge=Object(x.b)((function(e){return{auth:e.auth}}),{})((function(e){var a=e.component,t=e.auth,n=t.isAuthenticated,r=t.user,l=t.loading,s=Object(pe.a)(e,["component","auth"]);return i.a.createElement(N.b,Object.assign({},s,{render:function(e){return null===n||l?i.a.createElement(N.a,{to:"/bloggerku"}):n&&1==r.role?i.a.createElement(a,e):(n&&r.role,i.a.createElement(N.a,{to:"/bloggerku"}))}}))})),he=Object(x.b)((function(e){return{auth:e.auth}}),{})((function(e){var a=e.component,t=e.auth,n=t.isAuthenticated,r=t.loading,l=Object(pe.a)(e,["component","auth"]);return i.a.createElement(N.b,Object.assign({},l,{render:function(e){return null===n||r?i.a.createElement(N.a,{to:"/bloggerku"}):n?i.a.createElement(a,e):i.a.createElement(N.a,{to:"/bloggerku"})}}))}));localStorage.token&&R(localStorage.token);var ke=function(){var e=Object(n.useState)("0"),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),u=o[0],c=o[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),g=p[0],h=p[1],k=function(){h(!g),c(!1)},y=function(){c(!u),h(!1)};return console.log(t,"this is Lock"),i.a.createElement(x.a,{store:de},i.a.createElement("div",{className:"App"},i.a.createElement(G.a,null,i.a.createElement(W,{register:k,login:y,Lock:t}),i.a.createElement("div",{className:"page"},i.a.createElement(N.b,{exact:!0,path:"/bloggerku",component:H}),i.a.createElement(ge,{exact:!0,path:"/private",component:ee}),i.a.createElement(he,{exact:!0,path:"/write",component:ne}),i.a.createElement(he,{exact:!0,path:"/category/:title",component:K}),i.a.createElement(he,{exact:!0,path:"/about",component:U}),i.a.createElement(he,{exact:!0,path:"/detail/:title",component:z})),i.a.createElement("div",{className:"foother"},u&&i.a.createElement(Q,{HandleLogin:u,setHandleLogin:c,HandleAdmin:function(e,a){r("loveyou"==e&&"iwilltrytofixyou"==a?"1":"2")},Login:y}),g&&i.a.createElement(V,{HandleRegister:g,setHandleRegister:h,Register:k}),i.a.createElement(m,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,a,t){e.exports=t.p+"static/media/header.bf1864e9.png"},37:function(e,a,t){e.exports=t.p+"static/media/1.8ec80b68.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/2.f3d801b4.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/3.8e5ed114.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/4.4093bd26.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/you.720f7a67.jpeg"},65:function(e,a,t){},80:function(e,a,t){e.exports=t.p+"static/media/logo.c1cc3d53.png"},83:function(e,a,t){}},[[136,1,2]]]);
//# sourceMappingURL=main.49f05bc6.chunk.js.map