webpackJsonp([13],{"77c5":function(t,e){},Sb6z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"box",domProps:{innerHTML:this._s(this.formData.content)}})])},staticRenderFns:[]};var a=n("VU/8")({name:"djydts",data:function(){return{formData:{}}},methods:{getNews:function(){var t=this;this.$axios.get("getNewsId",{_id:this.$route.query._id}).then(function(e){t.formData=e.data})}},created:function(){this.getNews()}},s,!1,function(t){n("77c5")},"data-v-8a6446d4",null);e.default=a.exports}});
//# sourceMappingURL=13.ceaae01a0aa6160cdc9c.js.map