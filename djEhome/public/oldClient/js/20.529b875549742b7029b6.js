webpackJsonp([20],{"+qYv":function(t,n){},cEjE:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"box"},[n("div",{staticClass:"wrap",domProps:{innerHTML:this._s(this.news)}})])},staticRenderFns:[]};var s=e("VU/8")({data:function(){return{news:""}},methods:{Panduan:function(){var t=this;this.$axios.get("Panduan").then(function(n){200==n.code&&t.$axios.post("zjjf",{jfName:"随时随地拍",jfNum:.1}).then(function(t){})})},getid:function(){var t=this;this.$axios.get("newslist",{_id:this.$route.query._id}).then(function(n){t.news=n.data.content})}},created:function(){this.getid(),this.Panduan()}},i,!1,function(t){e("+qYv")},"data-v-5b1876a8",null);n.default=s.exports}});
//# sourceMappingURL=20.529b875549742b7029b6.js.map