webpackJsonp([1],{"A41+":function(t,a){},J974:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("mtWM"),n=e.n(i),o=e("Rf8U"),r=e.n(o),l=e("ZZvs"),c=e.n(l),d=(e("SYh3"),e("K3J8"),{data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{signout:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/logout").then(function(a){console.log(a.data),a.data.success&&t.$router.push("/login")})}}}),u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("a",{attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])},staticRenderFns:[]};e("VU/8")(d,u,!1,function(t){e("jNxF")},"data-v-7aafdad8",null).exports;var p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var m=e("VU/8")({name:"App"},p,!1,function(t){e("Rlz8"),e("J974")},"data-v-1509083e",null).exports,v=e("/ocq"),h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[e("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[e("i",{staticClass:"far fa-images"}),t._v("\n            圖片列表\n          ")])],1)]),t._v(" "),t._m(1),t._v(" "),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("i",{staticClass:"fab fa-qq"}),t._v(" "),e("span",{attrs:{"data-feather":"file-text"}}),t._v("\n            點我前往\n          ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[this._v("後台管理")]),this._v(" "),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[this._v("前台頁面")]),this._v(" "),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}]},f={name:"navbar",methods:{signout:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/logout").then(function(a){console.log(a.data),a.data.success&&t.$router.push("/signin")})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[e("router-link",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{to:"/admin/products"}},[t._v("\n      後台管理\n    ")]),t._v(" "),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("系統登出")])])])],1)])},staticRenderFns:[]},_={name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(e,s){e.timestamp===t&&a.messages.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("message:push",function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,e)})}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var C={components:{sidebar:e("VU/8")(null,h,!1,null,null,null).exports,navbar:e("VU/8")(f,g,!1,null,null,null).exports,alert:e("VU/8")(_,b,!1,function(t){e("QQ2H")},null,null).exports}},x={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("navbar"),this._v(" "),a("alert"),this._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("sidebar"),this._v(" "),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[a("router-view")],1)],1)])],1)},staticRenderFns:[]},k=e("VU/8")(C,x,!1,null,null,null).exports,w={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,a=this;this.$http.post("https://vue-course-api.hexschool.io/admin/signin",a.user).then(function(e){console.log(e.data),e.data.success?(a.$router.push("/admin/products"),alert("歡迎"+t.user.username+"登入")):alert("請輸入正確的郵箱 or 密碼")})}}},P={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{staticClass:"form-signin",on:{submit:function(a){return a.preventDefault(),t.signin(a)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-bold text-center"},[t._v("圖檔管理登入")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("信箱帳號")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"請輸入Email",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(a){a.target.composing||t.$set(t.user,"username",a.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-3"}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"請輸入Password",required:""},domProps:{value:t.user.password},on:{input:function(a){a.target.composing||t.$set(t.user,"password",a.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-4"}),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"mt-5 mb-3 text-center"},[t._v("© wen小專題發表使用")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[this._v("\n      登入"),a("i",{staticClass:"far fa-paper-plane"})])}]};var y=e("VU/8")(w,P,!1,function(t){e("rRh/")},"data-v-f55add12",null).exports,$=e("woOf"),M=e.n($),E=e("7t+N"),U=e.n(E),F={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,alert_delete:!1,delete_id:"",isLoading:!1,status:{fileUploading:!1}}},methods:{getProducts:function(){var t=this,a="https://vue-course-api.hexschool.io/api/wenbn1003/admin/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);t.isLoading=!0,this.$http.get(a).then(function(a){console.log(a.data),t.isLoading=!1,t.products=a.data.products,t.pagination=a.data.pagination})},openModel:function(t,a){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=M()({},a),this.isNew=!1),U()("#productModal").modal("show")},updateProduct:function(t,a){var e="https://vue-course-api.hexschool.io/api/wenbn1003/admin/product",s="post";console.log(e);var i=this;i.isNew||(e="https://vue-course-api.hexschool.io/api/wenbn1003/admin/product/"+i.tempProduct.id,s="put"),this.$http[s](e,{data:i.tempProduct}).then(function(t){console.log(t.data),t.data.success?(U()("#productModal").modal("hide"),i.getProducts()):(U()("#productModal").modal("hide"),i.getProducts(),console.log("新增失敗了"))})},delModal:function(t){this.tempProduct=M()({},t),U()("#delProductModal").modal("show")},delProuduct:function(){var t=this,a="https://vue-course-api.hexschool.io/api/wenbn1003/admin/product/"+t.tempProduct.id;this.$http.delete(a,{data:t.tempProduct}).then(function(a){console.log(a.data),a.data.success?(U()("#delProductModal").modal("hide"),t.getProducts()):(alert("刪除失敗"),U()("#delProductModal").modal("hide"))})},uploadFile:function(){var t=this;console.log(this);var a=this.$refs.files.files[0],e=this,s=new FormData;s.append("file-to-upload",a);e.status.fileUploading=!0,this.$http.post("https://vue-course-api.hexschool.io/api/wenbn1003/admin/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(a){console.log(a.data),e.status.fileUploading=!1,a.data.success?e.$set(e.tempProduct,"imageUrl",a.data.imageUrl):t.$bus.$emit("message:push",a.data.message,"danger")})}},created:function(){this.getProducts()}},N={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),e("div",{staticClass:"text-left mt-5"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModel(!0)}}},[t._v("點選建檔")])]),t._v(" "),e("table",{staticClass:"table table-sm mt-4 table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.products,function(a){return e("tr",{key:a.id},[e("td",[e("div",{staticClass:"rounded-circle",staticStyle:{width:"45px",height:"45px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}})]),t._v(" "),e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.openModel(!1,a)}}},[t._v("編輯")])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-danger",attrs:{"data-toggle":"modal","data-target":"#delalert"},on:{click:function(e){return t.delModal(a)}}},[t._v("刪除")])])])}),0)]),t._v(" "),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pagination.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(a)}}},[t._v(t._s(a))])])}),t._v(" "),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v("上傳圖片或拖曳圖片")]),t._v(" "),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("圖片網址")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"imageUrl",a.target.value)}}})]),t._v(" "),e("label",[t._v("圖片上傳檢視")]),t._v(" "),t.status.fileUploading?e("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e(),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("圖片名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入圖片名稱"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("圖片敘述")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入圖片描述",rows:"10"},domProps:{value:t.tempProduct.description},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"description",a.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")]),t._v(" "),e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")])])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-2"},[e("div",{staticClass:"modal-footer mb-lf"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.delProuduct()}}},[t._v("刪除")]),t._v(" "),e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",[this._v("縮圖")]),this._v(" "),a("th",[this._v("圖片名稱")]),this._v(" "),a("th",[this._v("編輯圖片")]),this._v(" "),a("th",[this._v("刪除圖片")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",{},[this._v("圖檔管理")])]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"text-danger",attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var R=e("VU/8")(F,N,!1,function(t){e("PEMu")},null,null).exports,D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",{staticClass:"text_shadow"},[this._v("圖片前台展示---DEMO")])])}]};var L=e("VU/8")(null,D,!1,function(t){e("nqzh")},null,null).exports,V={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"backa"},[a("div",{staticClass:"mt-2"},[this._m(0),this._v(" "),a("router-link",{staticClass:"nav-link pand0",attrs:{to:"/login"}},[a("button",{staticClass:"btn btn-lg btn-success btn-block font-weight-bold ",attrs:{type:"button"}},[this._v("前往後臺  "),a("i",{staticClass:"far fa-paper-plane"})])]),this._v(" "),a("router-link",{staticClass:"nav-link pand0",attrs:{to:""}},[a("button",{staticClass:"btn btn-lg btn-success btn-block font-weight-bold",attrs:{type:"button",disabled:""}},[this._v("敬請期待  "),a("i",{staticClass:"fab fa-android"})])]),this._v(" "),a("router-link",{staticClass:"nav-link pand0",attrs:{to:""}},[a("button",{staticClass:"btn btn-lg btn-success btn-block font-weight-bold",attrs:{type:"button",disabled:""}},[this._v("敬請期待  "),a("i",{staticClass:"fab fa-android"})])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"p-3 bg-dark text-white text-center"},[a("h5",{staticClass:"font-weight-bold bg-dark text-danger ml-1 ls-1"},[this._v("其他功能區  "),a("i",{staticClass:"fas fa-bell"})])])}]};var q=e("VU/8")(null,V,!1,function(t){e("lDX8")},null,null).exports,j={data:function(){return{products:[],product:{},pagination:{},isLoading:!1,status:{loadingItem:""}}},components:{indexbox:q},methods:{getProducts:function(){var t=this,a="https://vue-course-api.hexschool.io/api/wenbn1003/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);t.isLoading=!0,this.$http.get(a).then(function(a){t.products=a.data.products,t.pagination=a.data.pagination,t.isLoading=!1})},getProduct:function(t){var a=this,e="https://vue-course-api.hexschool.io/api/wenbn1003/product/"+t;a.status.loadingItem=t,this.$http.get(e).then(function(t){a.product=t.data.product,U()("#productModal").modal("show"),a.status.loadingItem=""})}},created:function(){this.getProducts()}},A={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"main"},[e("div",{staticClass:"row mt-4 justify-content-around"},[t._l(t.products,function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-dark shadow-sm bordwidth"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),t._v(" "),e("div",{staticClass:"card-footer bg-dark"},[e("h5",{staticClass:"text-left text-light"},[t._v("圖片名稱 : "+t._s(a.title))]),t._v(" "),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-outline-warning btn-xl",attrs:{type:"button"},on:{click:function(e){return t.getProduct(a.id)}}},[t.status.loadingItem===t.product.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                  查看更多\n                  "),e("i",{staticClass:"far fa-hand-point-up far-s5"})])])])])])}),t._v(" "),e("div",{staticClass:"col-md-4 mb-4 card border-dark bordwidth backjpg2"},[e("div",{staticClass:"card-footer text-right"},[e("indexbox")],1)])],2),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),t._v(" "),e("blockquote",{staticClass:"blockquote mt-3"},[e("footer",{staticClass:"text-left"},[t._v("敘述內容:"+t._s(t.product.description))])])]),t._v(" "),e("div",{staticClass:"modal-footer"})])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"}),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nav",{attrs:{"aria-label":"Page navigation example "}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pagination.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(a)}}},[t._v(t._s(a))])])}),t._v(" "),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])]),t._v(" "),e("div",{staticClass:"col-sm-3"})])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var z=e("VU/8")(j,A,!1,function(t){e("A41+")},null,null).exports,I={components:{indexheader:L,indexmain:z}},S={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"backjpg"},[a("indexheader"),this._v(" "),a("indexmain")],1)},staticRenderFns:[]};var W=e("VU/8")(I,S,!1,function(t){e("SnmN")},null,null).exports;s.a.use(v.a);var H=new v.a({routes:[{path:"*",redirect:"login"},{path:"/login",name:"login",component:y},{path:"/admin",name:"dashboard",component:k,children:[{path:"products",name:"products",component:R,meta:{requiresAuth:!0}}]},{path:"/",name:"index",component:W,children:[{path:"indexheader",name:"indexheader",component:L},{path:"indexmain",name:"indexmain",component:z},{path:"indexbox",name:"indexbox",component:q}]}]});s.a.prototype.$bus=new s.a;s.a.config.productionTip=!1,s.a.use(r.a,n.a),s.a.component("Loading",c.a),s.a.filter("currency",function(t){return"$"+Number(t).toFixed(0).replace(/./g,function(t,a,e){return a&&"."!==t&&(e.length-a)%3==0?(", "+t).replace(/\s/g,""):t})}),n.a.defaults.withCredentials=!0,new s.a({el:"#app",components:{App:m},template:"<App/>",router:H}),H.beforeEach(function(t,a,e){if(console.log("to",t,"from",a,"next",e),t.meta.requiresAuth){n.a.post("https://vue-course-api.hexschool.io/api/user/check").then(function(t){console.log(t.data),t.data.success?e():e({path:"/login"})})}else e()})},PEMu:function(t,a){},QQ2H:function(t,a){},Rlz8:function(t,a){},SYh3:function(t,a){},SnmN:function(t,a){},jNxF:function(t,a){},lDX8:function(t,a){},nqzh:function(t,a){},"rRh/":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.3c1c0bc47668ebeb6cc8.js.map