webpackJsonp([12],{HVN7:function(t,e){},ye94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"box",domProps:{innerHTML:this._s(this.formData.content)}})])},staticRenderFns:[]};var a=n("VU/8")({name:"tshds",data:function(){return{formData:{}}},methods:{getNews:function(){var t=this;this.$axios.get("getNewsId",{_id:this.$route.query._id}).then(function(e){t.formData=e.data})}},created:function(){this.getNews()}},s,!1,function(t){n("HVN7")},"data-v-8bb7b394",null);e.default=a.exports}});
//# sourceMappingURL=12.a6526fd9c12393e6cd19.js.map