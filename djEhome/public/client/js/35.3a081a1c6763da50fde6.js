webpackJsonp([35],{bpGY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"box",domProps:{innerHTML:this._s(this.formData.content)}})])},staticRenderFns:[]};var a=n("VU/8")({name:"dylsfs",data:function(){return{formData:{}}},methods:{getNews:function(){var t=this;this.$axios.get("getNewsId",{_id:this.$route.query._id}).then(function(e){t.formData=e.data})}},created:function(){this.getNews()}},s,!1,function(t){n("nq+Z")},"data-v-16da0b29",null);e.default=a.exports},"nq+Z":function(t,e){}});
//# sourceMappingURL=35.3a081a1c6763da50fde6.js.map