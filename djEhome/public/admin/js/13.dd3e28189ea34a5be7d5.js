webpackJsonp([13],{"48p9":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"add",data:function(){return{formData:{adminName:"",adminPwd:""}}},methods:{submit:function(){var e=this;this.$axios.post("zhuceAdmin",this.formData).then(function(t){200==t.code?e.$message({type:"success",message:"管理员添加成功"}):e.$message({type:"success",message:"添加失败"}),setTimeout(function(){e.$router.push("/admin/list")},1500)})}},created:function(){}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add"},[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"管理员账户"}},[a("el-input",{model:{value:e.formData.adminName,callback:function(t){e.$set(e.formData,"adminName",t)},expression:"formData.adminName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:e.formData.adminPwd,callback:function(t){e.$set(e.formData,"adminPwd",t)},expression:"formData.adminPwd"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"danger"},on:{click:e.submit}},[e._v("\r\n          保存\r\n      ")])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("ZOvy")},"data-v-1897950c",null);t.default=i.exports},ZOvy:function(e,t){}});
//# sourceMappingURL=13.dd3e28189ea34a5be7d5.js.map