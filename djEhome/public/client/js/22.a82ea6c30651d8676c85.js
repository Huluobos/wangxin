webpackJsonp([22],{CuCI:function(e,t){},mkh5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Au9i"),a={data:function(){return{pwdOld:"",pwdNew:"",pwd2:""}},methods:{changePwd:function(){var e=this;this.pwdNew!=this.pwd2?Object(n.Toast)({message:"密码确认失败",position:"bottom",duration:3e3}):this.$axios.post("updatePwd",{pwdOld:this.pwdOld,pwdNew:this.pwdNew}).then(function(t){Object(n.Toast)({message:t.msg,position:"bottom",duration:3e3}),setTimeout(function(){200==t.code&&e.$axios.get("outLogin").then(function(t){200==t.code&&e.$router.push("/login")})},2e3)})}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("div",{staticClass:"box"},[o("span",[e._v("旧密码：")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pwdOld,expression:"pwdOld"}],attrs:{type:"password"},domProps:{value:e.pwdOld},on:{input:function(t){t.target.composing||(e.pwdOld=t.target.value)}}}),e._v(" "),o("span",[e._v("新密码：")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pwdNew,expression:"pwdNew"}],attrs:{type:"password"},domProps:{value:e.pwdNew},on:{input:function(t){t.target.composing||(e.pwdNew=t.target.value)}}}),e._v(" "),o("span",[e._v("确认密码：")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd2,expression:"pwd2"}],attrs:{type:"password"},domProps:{value:e.pwd2},on:{input:function(t){t.target.composing||(e.pwd2=t.target.value)}}}),e._v(" "),o("mt-button",{attrs:{size:"large",type:"danger"},on:{click:e.changePwd}},[e._v("确定")])],1)])},staticRenderFns:[]};var d=o("VU/8")(a,s,!1,function(e){o("CuCI")},"data-v-6fa04a5e",null);t.default=d.exports}});
//# sourceMappingURL=22.a82ea6c30651d8676c85.js.map