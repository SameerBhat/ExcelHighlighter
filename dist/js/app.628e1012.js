(function(t){function e(e){for(var o,i,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vzsoi/excel/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;a.push([1,"chunk-vendors"]),r()})({0:function(t,e){},1:function(t,e,r){t.exports=r("56d7")},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-responsive"},[r("div",{staticClass:"row bg-primary p-3"},[r("div",{staticClass:"col-md-12"},[r("h4",{staticClass:"heading"},[t._v(" Excel Tool ")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.new-swap-shift-modal",modifiers:{"new-swap-shift-modal":!0}}],staticClass:"b-button",attrs:{variant:"success"}},[t._v("Word List")])],1)]),r("div",{staticClass:"row m-3"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"excelFileInput"}},[t._v("Select Excel File")]),r("input",{ref:"file",staticClass:"form-control-file",attrs:{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"excelFileInput"},on:{change:t.handleInputFile}})])])]),t.isActiveFile?r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("table",{staticClass:"table table-striped table-hover table-condensed table-responsive"},[r("thead",[r("tr",t._l(t.headers,(function(e,o){return r("th",{key:o},[t._v(" "+t._s(e)+" ")])})),0)]),r("tbody",t._l(t.tickets,(function(e,o){return r("tr",{key:o},t._l(e,(function(o,n){return r("td",{key:n,style:{width:t.getColumnWidth(o)}},[r("label",{domProps:{innerHTML:t._s(t.parseKey(o))}}),r("p",[t._v(t._s(e.key))])])})),0)})),0),r("tfoot")])])]):t._e()]),r("b-modal",{attrs:{id:"new-swap-shift-modal",title:"Word List"},on:{click:function(e){t.colorPickerActive=!1}}},[r("div",{staticClass:"d-block text-center",on:{click:function(e){t.colorPickerActive=!1}}},[r("div",{staticClass:"row",on:{click:function(e){t.colorPickerActive=!1}}},[r("div",{staticClass:"col"},[t._v(" Highlited Text Color ")]),r("div",{staticClass:"col"},[r("span",{staticClass:"picked-color",style:{backgroundColor:t.color.hex},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.colorPickerActive=!t.colorPickerActive}}}),r("Sketch",{directives:[{name:"show",rawName:"v-show",value:t.colorPickerActive,expression:"colorPickerActive"}],attrs:{presetColors:t.presetColors},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)]),r("div",{staticClass:"container mt-4",on:{click:function(e){t.colorPickerActive=!1}}},[r("p",[t._v("Add the words that you want to highlight")]),t._l(t.highlightedWords,(function(e,o){return r("div",{key:o,staticClass:"form-row mt-1"},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.highlightedWords[o],expression:"highlightedWords[index]",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter word"},domProps:{value:t.highlightedWords[o]},on:{change:function(e){return t.$set(t.highlightedWords,o,e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){return t.removeItem(o)}}},[t._v(" × ")])])])])})),r("button",{staticClass:"btn btn-primary btn-block mt-2",attrs:{type:"button"},on:{click:function(e){return t.highlightedWords.push("")}}},[t._v(" Add more ")])],2)])])],1)},a=[],i=(r("99af"),r("4160"),r("fb6a"),r("a434"),r("ace4"),r("b0c0"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("841c"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("159b"),r("1146")),c=r.n(i),l=r("6aac"),s=r("c345"),d={components:{BModal:l["a"],Sketch:s["Sketch"]},data:function(){return{tickets:[{name:""}],headers:[""],color:{hex:"#FFFF00"},colorPickerActive:!1,presetColors:["#FFFF00","#00ff00","#00ff0055","rgb(201, 76, 76)","rgba(0,0,255,1)","hsl(89, 43%, 51%)","hsla(89, 43%, 51%, 0.6)"],highlightedWords:["box","cable","wifi","channel","internet","test","fios"],isActiveFile:!1}},methods:{parseKey:function(t){var e=this,r=t.toString();return this.highlightedWords.forEach((function(t){if(""!=t&&t.length>0&&-1!=r.search(t)){var o='<span class="highlighted-text" style="background-color: '.concat(e.color.hex,'">').concat(t,"</span>");r=e.replaceAll(r,t,o)}})),r},get_header_row:function(t){var e,r=[],o=c.a.utils.decode_range(t["!ref"]),n=o.s.r;for(e=o.s.c;e<=o.e.c;++e){var a=t[c.a.utils.encode_cell({c:e,r:n})],i="UNKNOWN "+e;a&&a.t&&(i=c.a.utils.format_cell(a)),r.push(i)}return r},fixdata:function(t){for(var e="",r=0,o=10240;r<t.byteLength/o;++r)e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(r*o,r*o+o)));return e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(r*o))),e},workbook_to_json:function(t){var e={};return t.SheetNames.forEach((function(r){var o=c.a.utils.sheet_to_row_object_array(t.Sheets[r]);o.length>0&&(e[r]=o)})),e},handleDrop:function(t){t.stopPropagation(),t.preventDefault(),console.log("DROPPED");var e=t.dataTransfer.files[0];this.handleFile(e)},handleInputFile:function(t){t.stopPropagation(),t.preventDefault();var e=t.target.files[0];this.handleFile(e)},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"},handleFile:function(t){var e=this;this.isActiveFile=!0;var r=new FileReader;t.name;r.onload=function(t){var r,o=e,n=t.target.result,a=e.fixdata(n),i=c.a.read(btoa(a),{type:"base64"}),l=i.SheetNames[0],s=i.Sheets[l];o.headers=e.get_header_row(s),r=c.a.utils.sheet_to_json(s),o.tickets=r},r.readAsArrayBuffer(t)},performClick:function(){var t=this.$refs.file;if(t&&document.createEvent){var e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}},replaceAll:function(t,e,r){return t.toString().replace(new RegExp(e,"g"),r)},getColumnWidth:function(t){return t.length>10?"590px":"100px"},removeItem:function(t){this.highlightedWords.splice(t,1)}}},u=d,f=(r("5c0b"),r("2877")),p=Object(f["a"])(u,n,a,!1,null,null,null),h=p.exports,v=r("5f5b");r("f9e3"),r("2dd8");o["default"].config.productionTip=!1,o["default"].use(v["a"]),new o["default"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.628e1012.js.map