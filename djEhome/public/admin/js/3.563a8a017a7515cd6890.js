webpackJsonp([3],{"9GtF":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"list",data:function(){return{options:[{type:"0",label:"信工新闻眼"},{type:"1",label:"政治学习"},{type:"2",label:"党建一点通"},{type:"3",label:"党员亮身份"},{type:"4",label:"随时随地学"},{type:"5",label:"随时随地拍"},{type:"6",label:"制度建设"},{type:"7",label:"特色活动"},{type:"8",label:"通知早知道"}],newsType:"",fromData:[]}},methods:{getType:function(){this.newsType;this.getData()},getData:function(){var t=this;this.$axios.get("getNews",{type:this.newsType}).then(function(e){if(null!=e.data){for(var a=0;a<e.data.length;a++)0==e.data[a].type&&(e.data[a].type="信工新闻眼"),1==e.data[a].type&&(e.data[a].type="政治学习"),2==e.data[a].type&&(e.data[a].type="党建一点通"),3==e.data[a].type&&(e.data[a].type="党员亮身份"),4==e.data[a].type&&(e.data[a].type="随时随地学"),5==e.data[a].type&&(e.data[a].type="随时随地拍"),6==e.data[a].type&&(e.data[a].type="制度建设"),7==e.data[a].type&&(e.data[a].type="特色活动"),8==e.data[a].type&&(e.data[a].type="通知早知道");for(var n=0;n<e.data.length;n++)0==e.data[n].slider&&(e.data[n].slider="非轮播图"),1==e.data[n].slider&&(e.data[n].slider="已设置为轮播图");t.fromData=e.data}})},handleEdit:function(t){this.$router.push({path:"/news/update",query:{_id:t}})},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除这条新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("delNews",{_id:t}).then(function(t){200==t.code&&(e.$message({type:"success",message:"删除成功"}),setTimeout(function(){e.$router.go(0)},1500))})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSlider:function(t){var e=this;this.$axios.post("addSlider",{_id:t}).then(function(t){200==t.code&&(e.$message({type:"success",message:"添加轮播图成功"}),setTimeout(function(){e.$router.go(0)},1500))})}},created:function(){this.getData()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{}},[a("div",{staticClass:"news"},[a("div",{staticClass:"kind"},[a("span",[t._v("请选择新闻类型:")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.newsType,callback:function(e){t.newsType=e},expression:"newsType"}},t._l(t.options,function(t){return a("el-option",{key:t.type,attrs:{label:t.label,value:t.type}})}),1),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.getType()}}},[t._v("确认")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.fromData,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"新闻类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pic",label:"头图",width:"220"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"max-height":"150px",width:"150px"},attrs:{src:t.row.pic,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"author",label:"作者",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"upDateTime",label:"更改时间",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"点击量",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"slider",label:"是否是轮播图",width:""}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleEdit(e.row._id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.row._id)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleSlider(e.row._id)}}},[t._v("设置轮播图")])]}}])})],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(t){a("Ve1Z")},"data-v-c01efebc",null);e.default=i.exports},Ve1Z:function(t,e){}});
//# sourceMappingURL=3.563a8a017a7515cd6890.js.map