"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(s,t,n){return t&&e(s.prototype,t),n&&e(s,n),s}}(),Alerts=function(){function e(){_classCallCheck(this,e);var s=this;s.mdl=new Vue({el:"#alerts",data:{children:[]},methods:{acknowledge:function(e){s.close(e)}}}),s.uidNext=1}return _createClass(e,[{key:"push",value:function(e){var s=this,t=_.defaults(e,{_uid:s.uidNext,class:"is-info",message:"---",sticky:!1,title:"---"});s.mdl.children.push(t),t.sticky||_.delay(function(){s.close(t._uid)},5e3),s.uidNext++}},{key:"pushError",value:function(e,s){this.push({class:"is-danger",message:s,sticky:!1,title:e})}},{key:"pushSuccess",value:function(e,s){this.push({class:"is-success",message:s,sticky:!1,title:e})}},{key:"close",value:function(e){var s=this,t=_.findIndex(s.mdl.children,["_uid",e]),n=_.nth(s.mdl.children,t);t>=0&&n&&(n.class+=" exit",s.mdl.children.$set(t,n),_.delay(function(){s.mdl.children.$remove(n)},500))}}]),e}();jQuery(document).ready(function(e){e("a").smoothScroll({speed:400,offset:-20});var s=(new Sticky(".stickyscroll"),new Alerts);alertsData&&_.forEach(alertsData,function(e){s.push(e)})});