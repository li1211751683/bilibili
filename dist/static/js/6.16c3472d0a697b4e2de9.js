webpackJsonp([6],{AnqS:function(t,e){},O08G:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),r=n.n(a),i=n("Xxa5"),o=n.n(i),l=n("exGp"),s=n.n(l),c={components:{NavBar:n("DIWV").a},data:function(){return{newCat:[],delCat:[]}},created:function(){if(localStorage.getItem("newCat")&&localStorage.getItem("delCat"))return this.newCat=JSON.parse(localStorage.getItem("newCat")),void(this.delCat=JSON.parse(localStorage.getItem("delCat")));this.SelectCategory()},methods:{SelectCategory:function(){var t=this;return s()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/category");case 2:n=e.sent,t.newCat=n.data;case 4:case"end":return e.stop()}},e,t)}))()},handleCategoryClick:function(t){this.newCat.length<4?this.$msg.fail("最少保留三个栏目"):(this.delCat.push(this.newCat[t]),this.newCat.splice(t,1))},deleteCategoryClick:function(t){this.newCat.push(this.delCat[t]),this.delCat.splice(t,1)}},watch:{newCat:function(){localStorage.setItem("newCat",r()(this.newCat)),localStorage.setItem("delCat",r()(this.delCat))}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar"),t._v(" "),n("van-divider",{style:{color:"#1a73e8",borderColor:"#1a73e8",padding:"0 16px"},attrs:{dashed:""}},[t._v("现有栏目")]),t._v(" "),n("div",{staticClass:"new-category newcategory"},t._l(t.newCat,function(e,a){return n("p",{key:a,on:{click:function(e){return t.handleCategoryClick(a)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}),0),t._v(" "),n("van-divider",{style:{color:"#ee0a24",borderColor:"#ee0a24",padding:"0 16px"},attrs:{dashed:""}},[t._v("已删除栏目")]),t._v(" "),n("div",{staticClass:"new-category delcategory"},t._l(t.delCat,function(e,a){return n("p",{key:a,on:{click:function(e){return t.deleteCategoryClick(a)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}),0)],1)},staticRenderFns:[]};var u=n("VU/8")(c,d,!1,function(t){n("AnqS")},null,null);e.default=u.exports},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,e,n){var a=n("FeBl"),r=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}}});
//# sourceMappingURL=6.16c3472d0a697b4e2de9.js.map