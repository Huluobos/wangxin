webpackJsonp([29],{"3wWM":function(t,a){},XTQB:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("9v1A"),i=e.n(s),n={name:"tshd",data:function(){return{formData:[]}},methods:{getNews:function(){var t=this;this.$axios.get("getNews",{type:7}).then(function(a){for(var e=0;e<a.data.length;e++)a.data[e].createTime=i()(a.data[e].createTime);t.formData=a.data})}},created:function(){this.getNews()}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._l(t.formData,function(a){return e("div",{key:a.index,staticClass:"box"},[e("router-link",{attrs:{to:"/tshd/detail?_id="+a._id}},[e("div",{staticClass:"pic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.pic,expression:"item.pic"}]})]),t._v(" "),e("div",{staticClass:"news"},[e("div",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"foo",staticStyle:{"font-size":"12px",color:"#666","font-family":"normal"}},[e("span",{staticClass:"time"},[t._v(t._s(a.createTime))]),t._v(" "),e("span",{staticClass:"star"},[t._v(t._s(a.count))])])])])],1)}),t._v(" "),e("div",{staticClass:"box-footer"},[t._v("\n    没有数据了\n  ")])],2)},staticRenderFns:[]};var c=e("VU/8")(n,r,!1,function(t){e("3wWM")},"data-v-4a87518e",null);a.default=c.exports}});
//# sourceMappingURL=29.f38f37024e994c7ec547.js.map