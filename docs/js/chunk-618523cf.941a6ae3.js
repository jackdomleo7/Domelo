(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-618523cf"],{"13d9":function(e,a){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var a=document.activeElement,t=[],s=0;s<e.rangeCount;s++)t.push(e.getRangeAt(s));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(a){e.addRange(a)})),a&&a.focus()}}},9973:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"page"},[t("h1",{staticClass:"heading--xl page__heading"},[e._t("pageTitle")],2),t("p",{staticClass:"body--xl weight--light"},[e._t("pageDescription")],2),e._t("default"),t("router-view")],2)},r=[],c=t("d4ec"),n=t("99de"),i=t("7e84"),l=t("262e"),o=t("9ab4"),d=t("60a3"),m=function(e){function a(){return Object(c["a"])(this,a),Object(n["a"])(this,Object(i["a"])(a).apply(this,arguments))}return Object(l["a"])(a,e),a}(d["c"]);m=Object(o["a"])([d["a"]],m);var g=m,u=g,b=(t("ea3f"),t("2877")),h=Object(b["a"])(u,s,r,!1,null,"0c1b67b6",null);a["a"]=h.exports},a49b:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("page",{attrs:{"data-page":"colors"},scopedSlots:e._u([{key:"pageTitle",fn:function(){return[e._v("Color")]},proxy:!0},{key:"pageDescription",fn:function(){return[e._v("Domelo colors are designed to be clear and accessible. There are two themes available, light and dark. Each theme consists of a range of greys and semantic colors.")]},proxy:!0}])},[t("figure",{staticClass:"color-chart body--s",attrs:{id:"color-chart"}},e._l(e.colors,(function(a,s){return t("section",{key:s,staticClass:"color-chart__section",attrs:{id:a.id}},e._l(a.colors,(function(a,s){return t("div",{key:s,staticClass:"color-chart__item",class:"color-chart__item--"+a.class,on:{click:function(t){return e.clickToCopy(a)}}},[e._v(e._s(a.name)),e.copiedVariable!==a?t("code",{staticClass:"code--xs color-chart__variable"},[t("br"),e._v(e._s(a.variable))]):e._e(),e.copiedVariable===a?t("span",{staticClass:"body--xs"},[t("br"),e._v("Copied!!")]):e._e()])})),0)})),0),t("article",{attrs:{id:"themes"}},[t("h2",{staticClass:"heading--l"},[e._v("Themes")]),t("p",{staticClass:"body--m"},[e._v("Domelo offers a choice of two themes, light and dark, for user interfaces. Offering a light and dark theme will cover a good ground base of users. The user should be able to switch between themes whenever they please based on their preference and the application should remember or save their latest chosen theme.")]),t("p",{staticClass:"body--m"},[e._v("To accomplish theming, Domelo uses design tokens to double abstract the theme specific colors from the CSS that makes the component. This is done using CSS variables.")]),t("ul",[t("li",[e._v("Light theme (default): "),t("code",{staticClass:"code--m"},[e._v("<html>")]),e._v(" - "),t("i",[e._v("No class")])]),t("li",[e._v("Dark theme: "),t("code",{staticClass:"code--m"},[e._v('<html class="theme--dark">')])])])]),t("article",{attrs:{id:"greys"}},[t("h2",{staticClass:"heading--l"},[e._v("Greys")]),t("p",{staticClass:"body--m"},[e._v("Domelo uses "),t("a",{attrs:{href:"#grey"}},[e._v("11 shades of grey")]),e._v(", which are different between the light and dark themes. The greys are neutral (the red, blue and green ratios are equal) meaning they work well alongside any brand colors and ensures they don't distract the user's attention from the main workflow.")]),t("p",{staticClass:"body--m"},[e._v("The greys have the same CSS variable names across both themes, which allows us to define specific behaviours for each grey:")]),t("ul",[t("li",{staticClass:"greys--grey-900"},[e._v("Grey 900: High contrast text content (default text color)")]),t("li",{staticClass:"greys--grey-800"},[e._v("Grey 800: Medium contrast text content")]),t("li",{staticClass:"greys--grey-700"},[e._v("Grey 700: Low contrast text content")]),t("li",{staticClass:"greys--grey-600"},[e._v("Grey 600: Placeholder text")]),t("li",{staticClass:"greys--grey-500"},[e._v("Grey 500: Disabled text")]),t("li",{staticClass:"greys--grey-100"},[e._v("Grey 100: Base background")]),t("li",{staticClass:"greys--grey-75"},[e._v("Grey 75: High alternate background")]),t("li",{staticClass:"greys--grey-50"},[e._v("Grey 50: Low alternate background")])])]),t("article",{attrs:{id:"semantic"}},[t("h2",{staticClass:"heading--l"},[e._v("Semantic colors")]),t("p",{staticClass:"body--m"},[e._v("Semantic colors have an assigned meaning and are used in the application to communicate these meanings to the user.")]),t("figure",{staticClass:"semantic"},[t("div",{staticClass:"semantic--blue"},[t("span",{staticClass:"semantic__label body--s"},[e._v("Informative")]),t("div",{staticClass:"semantic__shades"},[t("span",{staticClass:"semantic__shade semantic--blue-400"}),t("span",{staticClass:"semantic__shade semantic--blue-500"}),t("span",{staticClass:"semantic__shade semantic--blue-600"}),t("span",{staticClass:"semantic__shade semantic--blue-700"})])]),t("div",{staticClass:"semantic--red"},[t("span",{staticClass:"semantic__label body--s"},[e._v("Negative")]),t("div",{staticClass:"semantic__shades"},[t("span",{staticClass:"semantic__shade semantic--red-400"}),t("span",{staticClass:"semantic__shade semantic--red-500"}),t("span",{staticClass:"semantic__shade semantic--red-600"}),t("span",{staticClass:"semantic__shade semantic--red-700"})])]),t("div",{staticClass:"semantic--orange"},[t("span",{staticClass:"semantic__label body--s"},[e._v("Notice")]),t("div",{staticClass:"semantic__shades"},[t("span",{staticClass:"semantic__shade semantic--orange-400"}),t("span",{staticClass:"semantic__shade semantic--orange-500"}),t("span",{staticClass:"semantic__shade semantic--orange-600"}),t("span",{staticClass:"semantic__shade semantic--orange-700"})])]),t("div",{staticClass:"semantic--green"},[t("span",{staticClass:"semantic__label body--s"},[e._v("Positive")]),t("div",{staticClass:"semantic__shades"},[t("span",{staticClass:"semantic__shade semantic--green-400"}),t("span",{staticClass:"semantic__shade semantic--green-500"}),t("span",{staticClass:"semantic__shade semantic--green-600"}),t("span",{staticClass:"semantic__shade semantic--green-700"})])])])]),t("article",{attrs:{id:"static"}},[t("h2",{staticClass:"heading--l"},[e._v("Static colors")]),t("p",{staticClass:"body--m"},[e._v("Static colors are persistent across themes. Static colors are "),t("em",[e._v("white")]),e._v(", "),t("em",[e._v("black")]),e._v(" and the "),t("em",[e._v("#400 of each semantic color.")])])])])},r=[],c=t("d4ec"),n=t("bee2"),i=t("99de"),l=t("7e84"),o=t("262e"),d=t("9ab4"),m=t("60a3"),g=t("9973"),u=t("f904"),b=t.n(u),h=function(e){function a(){var e;return Object(c["a"])(this,a),e=Object(i["a"])(this,Object(l["a"])(a).apply(this,arguments)),e.copiedVariable=null,e.colors=[{id:"white-black",colors:[{name:"Static white",class:"white",variable:"--color-static-white"},{name:"Static black",class:"black",variable:"--color-static-black"}]},{id:"grey",colors:[{name:"Grey 50",class:"grey-50",variable:"--grey-50"},{name:"Grey 75",class:"grey-75",variable:"--grey-75"},{name:"Grey 100",class:"grey-100",variable:"--grey-100"},{name:"Grey 200",class:"grey-200",variable:"--grey-200"},{name:"Grey 300",class:"grey-300",variable:"--grey-300"},{name:"Grey 400",class:"grey-400",variable:"--grey-400"},{name:"Grey 500",class:"grey-500",variable:"--grey-500"},{name:"Grey 600",class:"grey-600",variable:"--grey-600"},{name:"Grey 700",class:"grey-700",variable:"--grey-700"},{name:"Grey 800",class:"grey-800",variable:"--grey-800"},{name:"Grey 900",class:"grey-900",variable:"--grey-900"}]},{id:"blue",colors:[{name:"Static blue 400",class:"blue-400",variable:"--color-static-blue-400"},{name:"Blue 500",class:"blue-500",variable:"--blue-500"},{name:"Blue 600",class:"blue-600",variable:"--blue-600"},{name:"Blue 700",class:"blue-700",variable:"--blue-700"}]},{id:"red",colors:[{name:"Static red 400",class:"red-400",variable:"--color-static-red-400"},{name:"Red 500",class:"red-500",variable:"--red-500"},{name:"Red 600",class:"red-600",variable:"--red-600"},{name:"Red 700",class:"red-700",variable:"--red-700"}]},{id:"orange",colors:[{name:"Static orange 400",class:"orange-400",variable:"--color-static-orange-400"},{name:"Orange 500",class:"orange-500",variable:"--orange-500"},{name:"Orange 600",class:"orange-600",variable:"--orange-600"},{name:"Orange 700",class:"orange-700",variable:"--orange-700"}]},{id:"green",colors:[{name:"Static green 400",class:"green-400",variable:"--color-static-green-400"},{name:"Green 500",class:"green-500",variable:"--green-500"},{name:"Green 600",class:"green-600",variable:"--green-600"},{name:"Green 700",class:"green-700",variable:"--green-700"}]}],e}return Object(o["a"])(a,e),Object(n["a"])(a,[{key:"clickToCopy",value:function(e){var a=this;b()(e.variable),this.copiedVariable=e,window.setTimeout((function(){a.copiedVariable=null}),500)}}]),a}(m["c"]);h=Object(d["a"])([Object(m["a"])({components:{Page:g["a"]}})],h);var y=h,v=y,p=(t("faa4"),t("2877")),_=Object(p["a"])(v,s,r,!1,null,"43fa81a4",null);a["default"]=_.exports},d6d6:function(e,a,t){},ea3f:function(e,a,t){"use strict";var s=t("ebb0"),r=t.n(s);r.a},ebb0:function(e,a,t){},f904:function(e,a,t){"use strict";var s=t("13d9"),r={"text/plain":"Text","text/html":"Url",default:"Text"},c="Copy to clipboard: #{key}, Enter";function n(e){var a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,a)}function i(e,a){var t,i,l,o,d,m,g=!1;a||(a={}),t=a.debug||!1;try{l=s(),o=document.createRange(),d=document.getSelection(),m=document.createElement("span"),m.textContent=e,m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",(function(s){if(s.stopPropagation(),a.format)if(s.preventDefault(),"undefined"===typeof s.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[a.format]||r["default"];window.clipboardData.setData(c,e)}else s.clipboardData.clearData(),s.clipboardData.setData(a.format,e);a.onCopy&&(s.preventDefault(),a.onCopy(s.clipboardData))})),document.body.appendChild(m),o.selectNodeContents(m),d.addRange(o);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");g=!0}catch(b){t&&console.error("unable to copy using execCommand: ",b),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",e),a.onCopy&&a.onCopy(window.clipboardData),g=!0}catch(b){t&&console.error("unable to copy using clipboardData: ",b),t&&console.error("falling back to prompt"),i=n("message"in a?a.message:c),window.prompt(i,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(o):d.removeAllRanges()),m&&document.body.removeChild(m),l()}return g}e.exports=i},faa4:function(e,a,t){"use strict";var s=t("d6d6"),r=t.n(s);r.a}}]);
//# sourceMappingURL=chunk-618523cf.941a6ae3.js.map