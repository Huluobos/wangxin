webpackJsonp([8],{"0cnJ":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{}},t._l(t.fromData,function(a,s){return e("div",{key:a._id,staticClass:"main"},[e("div",{staticClass:"xh"},[e("span",[t._v("序号：")]),t._v(t._s(s+1))]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"pic"},[e("img",{attrs:{src:a.headPic,alt:""}})]),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(a.userName))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(a.createTime))]),t._v(" "),e("div",{staticClass:"type"},["0"==a.type?e("span",[t._v("私密")]):t._e(),t._v(" "),"1"==a.type?e("span",[t._v("公开")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(a.content))])]),t._v(" "),e("div",{staticClass:"pl"},[t._v("评论列表")]),t._v(" "),e("div",{staticClass:"hf"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.reply,border:""}},[e("el-table-column",{attrs:{prop:"image",label:"头像",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{"max-height":"90px",width:"90px"},attrs:{src:t.row.image,alt:""}})]}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"people",label:"用户名",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"时间",width:"250"}}),t._v(" "),e("el-table-column",{attrs:{prop:"text",label:"内容",width:""}})],1)],1)])}),0)},staticRenderFns:[]};var i=e("VU/8")({name:"list",data:function(){return{fromData:[]}},methods:{getData:function(){var t=this;this.$axios.get("getMes",{_id:this.$route.query._id}).then(function(a){t.fromData=a.data})}},created:function(){this.getData()}},s,!1,function(t){e("TJLg")},"data-v-458250bc",null);a.default=i.exports},TJLg:function(t,a){}});
//# sourceMappingURL=8.eba7de14263a40222a76.js.map