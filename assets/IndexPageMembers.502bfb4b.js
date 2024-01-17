var $=Object.defineProperty;var E=(a,t,i)=>t in a?$(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var x=(a,t,i)=>(E(a,typeof t!="symbol"?t+"":t,i),i);import{u as z,Q as B}from"./use-quasar.72c26b2b.js";import{c as O,k as P,l as M,Q,n as T}from"./dom.cf11f81d.js";import{c as Y,h as j,d as C,r as p,y as r,a0 as o,j as I,A,z as g,G as l,C as h,B as s,D as m,F as b,a2 as S,$ as J,a3 as W,E as y}from"./index.97f03f52.js";import{Q as U}from"./QBtn.c0740e53.js";class f{}x(f,"TeacherData",[{name:"Bin Jiang",avatarUrl:"/avatars/bin_jiang.webp",website:"https://faculty.sdu.edu.cn/jiangbin",email:"jiangbin@sdu.edu.cn",orcId:"0000-0002-2897-5745",currentStatus:"Associate Professor",joinYear:2005,workOrStudyExperience:[{status:"Associate Professor",company:"Shandong University"}]},{name:"Yanxia Zhang",avatarUrl:"/avatars/yanxia_zhang.webp",email:"zyx@bao.ac.cn",orcId:"0000-0002-6610-5265",website:"https://www.nao.cas.cn/jypy/ds/bsds/202204/t20220414_6426913.html",currentStatus:"Researcher",workOrStudyExperience:[{status:"Researcher",company:"National Astronomical Observatories"}]},{name:"Wenyu Wang",avatarUrl:"/avatars/wenyu_wang.webp",website:"https://ie.wh.sdu.edu.cn/info/1152/1213.htm",email:"hochi@sdu.edu.cn",currentStatus:"Associate Professor",workOrStudyExperience:[{status:"Associate Professor",company:"Shandong University"}]},{name:"Meixia Qu",avatarUrl:"/avatars/meixia_qu.webp",website:"https://ie.wh.sdu.edu.cn/info/1172/2559.htm",email:"mxqu@sdu.edu.cn",currentStatus:"Associate Professor",workOrStudyExperience:[{status:"Associate Professor",company:"Shandong University"}]},{name:"Kun Su",avatarUrl:"/avatars/kun_su.webp",website:"https://ie.wh.sdu.edu.cn/info/1172/2560.htm",currentStatus:"Teacher",workOrStudyExperience:[{status:"Teacher",company:"Shandong University"}]}]),x(f,"StudentData",[{name:"Yuchen He",email:"dzxrly2@gmail.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/yuchen_he.webp",orcId:"0009-0002-2160-5618",joinYear:2021,github:"https://github.com/dzxrly",workOrStudyExperience:[{status:"B.S.",company:"Shandong University"}]},{name:"Jingjing Wu",email:"wujiangu16@gmail.com",avatarUrl:"/avatars/jingjing_wu.webp",currentStatus:"Ph.D.",joinYear:2021,orcId:"0000-0002-6179-6802",github:"https://github.com/wujiangu16",workOrStudyExperience:[{status:"M.S.",company:"Shandong University"},{status:"B.S.",company:"Jiangxi University of Science and Technology"}]},{name:"Qiang Qiao",email:"qq849969741@gmail.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/qiang_qiao.webp",joinYear:2022,github:"https://github.com/qiaoqiangPro",website:"https://blog.csdn.net/qq_45807235",workOrStudyExperience:[{status:"B.S.",company:"Taiyuan University of Science and Technology"}]},{name:"Faqi Zhao",email:"3093149804@qq.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/faqi_zhao.webp",joinYear:2023},{name:"Chuancheng Zhang",email:"zhangccxt999@gmail.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/chuancheng_zhang.webp",joinYear:2023,github:"https://github.com/ChichengZZZ"},{name:"Qingmei Tang",email:"874489829@qq.com",avatarUrl:"/avatars/qingmei_tang.webp",currentStatus:"Undergraduate Student",joinYear:2022},{name:"Mengxin Wang",currentStatus:"Undergraduate Student",joinYear:2021,avatarUrl:"/avatars/mengxin_wang.webp",workOrStudyExperience:[{status:"B.S.",company:"Shandong University"}]},{name:"Wang Guo",email:"17863138533@126.com",currentStatus:"Undergraduate Student",joinYear:2022,github:"https://github.com/guowangsdu",avatarUrl:"/avatars/wang_guo.webp",workOrStudyExperience:[{status:"B.S",company:"Shandong University"}]},{name:"Xuanda Chen",email:"863335187@qq.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/xuanda_chen.webp",joinYear:2023},{name:"Yanhao Cui",email:"202337571@mail.sdu.edu.cn",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/yanhao_cui.webp",joinYear:2023,github:"https://github.com/yuexiuya1"},{name:"Xuchen Li",email:"mason14595@gmail.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/xuchen_li.webp",joinYear:2022},{name:"Minghao Xiao",email:"1197843839@qq.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/minghao_xiao.webp",joinYear:2022,github:"https://github.com/xmh1011"},{name:"Jiawei Gu",email:"747203397@qq.com",currentStatus:"Undergraduate Student",avatarUrl:"/avatars/jiawei_gu.webp",joinYear:2022,github:"https://github.com/jiawei0322"},{name:"Jirui Chang",avatarUrl:"/avatars/jirui_chang.webp",joinYear:2023}]);var D=O({name:"QAvatar",props:{...P,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(a,{slots:t}){const i=M(a),d=Y(()=>"q-avatar"+(a.color?` bg-${a.color}`:"")+(a.textColor?` text-${a.textColor} q-chip--colored`:"")+(a.square===!0?" q-avatar--square":a.rounded===!0?" rounded-borders":"")),e=Y(()=>a.fontSize?{fontSize:a.fontSize}:null);return()=>{const w=a.icon!==void 0?[j(Q,{name:a.icon})]:void 0;return j("div",{class:d.value,style:i.value},[j("div",{class:"q-avatar__content row flex-center overflow-hidden",style:e.value},T(t.default,w))])}}});const Z={class:"member-card-wrap column flex-center bg-primary q-pa-md text-center"},G={key:1,class:"text-primary"},N={class:"name-row row flex-center"},F={class:"text-h6 text-bold"},V={key:0,class:"text-body2 text-bold"},X={key:1,class:"text-body2"},L={key:2,class:"text-body2"},R={key:3,class:"text-body2 column flex-center"},H={class:"row flex-center"},q=C({__name:"MemberCard",props:{member:{type:Object,required:!0},showJoinYear:{type:Boolean,default:!1},showCurrentStatus:{type:Boolean,default:!1},showWorkOrStudyExperience:{type:Boolean,default:!1}},setup(a){const t=a,d=z().platform.is.mobile,e=p(t.member),w=p(t.showJoinYear),_=p(t.showCurrentStatus),n=p(t.showWorkOrStudyExperience);return(u,c)=>(r(),o("div",Z,[I(D,{size:h(d)?"30vw":"10vw",color:"accent",style:{"border-radius":"19px"}},{default:A(()=>[e.value.avatarUrl?(r(),g(B,{key:0,src:e.value.avatarUrl},null,8,["src"])):(r(),o("span",G,l(e.value.name.split(" ").pop().slice(0,1)),1))]),_:1},8,["size"]),s("div",N,[s("span",F,l(e.value.name),1),e.value.orcId?(r(),g(U,{key:0,href:`https://orcid.org/${e.value.orcId}`,icon:"fa-brands fa-orcid",target:"_blank",size:"sm",color:"accent",flat:"",round:""},null,8,["href"])):m("",!0)]),e.value.joinYear&&w.value?(r(),o("span",V,l(e.value.joinYear),1)):m("",!0),e.value.currentStatus&&_.value?(r(),o("span",X,l(e.value.currentStatus),1)):m("",!0),e.value.email?(r(),o("span",L,l(e.value.email),1)):m("",!0),e.value.workOrStudyExperience&&n.value?(r(),o("div",R,[(r(!0),o(b,null,S(e.value.workOrStudyExperience,v=>(r(),o("div",{key:v.status},l(v.status)+" in "+l(v.company),1))),128))])):m("",!0),s("div",H,[e.value.website?(r(),g(U,{key:0,href:e.value.website,icon:"home",target:"_blank",size:"sm",flat:"",round:""},null,8,["href"])):m("",!0),e.value.github?(r(),g(U,{key:1,href:e.value.github,icon:"fa-brands fa-github",target:"_blank",size:"sm",flat:"",round:""},null,8,["href"])):m("",!0)])]))}});const K={class:"members-page-title row flex-center full-width q-mb-xl"},ee={class:"split-line row flex-center q-my-md"},ae={class:"text-accent"},te={class:"teacher-members-info-row row justify-evenly items-start full-width wrap"},re={class:"teacher-members-info-row row justify-evenly items-start full-width wrap"},ne={class:"split-line row flex-center q-my-md"},se={class:"text-accent"},oe={class:"student-members-info-row row justify-evenly items-start full-width wrap"},ie=C({__name:"IndexPageMembers",setup(a){const t=z(),i=t.platform.is.mobile,d=p([[]]),e=p([]);function w(n){let u=0;n.forEach((c,v)=>{d.value[v]=[];for(let k=0;k<c;k++)d.value[v].push(f.TeacherData[u]),u++})}function _(){e.value=f.StudentData.sort((n,u)=>n.joinYear&&u.joinYear?n.joinYear>u.joinYear?-1:n.joinYear<u.joinYear?1:n.name.localeCompare(u.name):n.joinYear?-1:u.joinYear?1:n.name.localeCompare(u.name))}return _(),w([2,3]),(n,u)=>(r(),o("div",{class:y(["index-page-members-wrap bg-transparent column flex-center full-width",h(i)?"q-pa-md":"q-pa-xl"])},[s("div",K,[s("span",{class:"text-accent text-bold",style:W({fontSize:h(i)?"5vw":"2vw"})},l(n.$t("memberPageTitle")),5)]),s("div",ee,[s("span",ae,l(n.$t("memberPageTeacherGroupTitle")),1)]),s("div",te,[(r(!0),o(b,null,S(d.value[0],c=>(r(),g(q,{key:c.name,member:c,class:y(h(t).screen.gt.sm?"col-4":"col-6"),"show-current-status":!0,"show-work-or-study-experience":!1},null,8,["member","class"]))),128))]),s("div",re,[(r(!0),o(b,null,S(d.value[1],c=>(r(),g(q,{key:c.name,member:c,class:y(h(t).screen.gt.sm?"col-4":"col-6"),"show-current-status":!0,"show-work-or-study-experience":!1},null,8,["member","class"]))),128))]),s("div",ne,[s("span",se,l(n.$t("memberPageStudentGroupTitle")),1)]),s("div",oe,[(r(!0),o(b,null,S(e.value,c=>(r(),g(q,{key:c.name,member:c,"show-join-year":!0,class:y(h(t).screen.gt.sm?h(t).screen.lt.md?"col-4":"col-3":"col-6")},null,8,["member","class"]))),128))])],2))}});var he=J(ie,[["__scopeId","data-v-217c1cff"]]);export{he as default};
