(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1047ab"],{"1ea5":function(t,e,s){},2532:function(t,e,s){"use strict";var n=s("23e7"),a=s("5a34"),i=s("1d80"),r=s("ab13");n({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"427d":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{class:{themeDark:t.enforceDarkTheme,themeSystem:t.useSystemTheme},attrs:{id:"page"}},[s("div",{attrs:{id:"settings",title:t.$t("Toggle chorus mode")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{type:"checkbox",value:"multiPlay"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"multiPlay")>-1:t.settings},on:{change:function(e){var s=t.settings,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i="multiPlay",r=t._i(s,i);n.checked?r<0&&(t.settings=s.concat([i])):r>-1&&(t.settings=s.slice(0,r).concat(s.slice(r+1)))}else t.settings=a}}}),s("label",{attrs:{for:"isMutliplay"}},[t._v(t._s(t.$t("Do Not Click Me")))]),t._v(" | "),"light"===t.currentSystemTheme?[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{id:"toggleEnforceDarkMode",type:"checkbox",value:"enforceMode__dark"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"enforceMode__dark")>-1:t.settings},on:{change:function(e){var s=t.settings,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i="enforceMode__dark",r=t._i(s,i);n.checked?r<0&&(t.settings=s.concat([i])):r>-1&&(t.settings=s.slice(0,r).concat(s.slice(r+1)))}else t.settings=a}}}),s("label",{attrs:{for:"toggleEnforceDarkMode"}},[t._v(t._s(t.$t("Dark Theme")))])]:[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{id:"toggleEnforceLightMode",type:"checkbox",value:"enforceMode__light"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"enforceMode__light")>-1:t.settings},on:{change:function(e){var s=t.settings,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i="enforceMode__light",r=t._i(s,i);n.checked?r<0&&(t.settings=s.concat([i])):r>-1&&(t.settings=s.slice(0,r).concat(s.slice(r+1)))}else t.settings=a}}}),s("label",{attrs:{for:"toggleEnforceLightMode"}},[t._v(t._s(t.$t("Light Theme")))])]],2),s("div",{attrs:{id:"mainWrapper"}},[s("div",{staticClass:"bigBtn",class:{musicBoard:t.displayMusicBoard,animateBtn:!t.displayMusicBoard},attrs:{id:"board"},on:{click:t.playEhhh}},[s("div",{attrs:{id:"boardWrapper"}},[t._l(t.sounds,(function(e,n){return[t.displayMusicBoard?s("BaseButton",{key:n,staticClass:"normalBtn",attrs:{item:e}}):t._e()]}))],2),s("span",{class:{playingBtn:t.playingBtn},attrs:{id:"bigButtonText",tabindex:t.displayMusicBoard?-1:0}},[t._v(" "+t._s(t.ehhhLocalizedName)+" ")])])]),s("BaseButton",{ref:"centralButton",attrs:{id:"virtualCentralButton",item:t.sounds[0]},on:{started:function(e){t.playingBtn=!0},stopped:function(e){t.playingBtn=!1}}}),s("div",{staticClass:"animateBtn smallBtn",attrs:{id:"switchBtn",tabindex:"0"},on:{click:function(e){t.displayMusicBoard=!t.displayMusicBoard}}},[t._v(" "+t._s(t.displayMusicBoard?t.$t("Back"):t.$t("Music board"))+" ")]),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"bottom"}},[s("a",{staticClass:"bottonBtnLink",attrs:{href:"https://github.com/suisei-cn/starbuttons","aria-label":"GitHub repository of suisei.moe",target:"_blank"}},[s("i",{staticClass:"icon-github"})]),t._v("/ "),s("a",{staticClass:"bottonBtnLink",attrs:{href:"https://t.me/Hoshimachi_Suisei","aria-label":"Telegram Fan Group",target:"_blank"}},[s("i",{staticClass:"icon-telegram"}),t._v(" "),s("sup",[t._v("(CN)")])]),t._v("/ "),s("a",{staticClass:"bottonBtnLink",attrs:{href:"https://discord.gg/9fJGBZz","aria-label":"Discord Fan Group",target:"_blank"}},[s("i",{staticClass:"icon-discord"}),t._v(" "),s("sup",[t._v("(JP)")])]),t._v("/"),s("a",{staticClass:"bottonBtnLink",attrs:{href:"https://discord.gg/4fmY8WC","aria-label":"Discord Fan Group",target:"_blank"}},[s("i",{staticClass:"icon-discord"}),t._v(" "),s("sup",[t._v("(EN)")])])])}],i=(s("caad"),s("b0c0"),s("d3b7"),s("2532"),s("96cf"),s("1da1")),r=s("d4ec"),c=s("bee2"),o=s("262e"),l=s("2caf"),u=s("9ab4"),d=s("60a3");function h(t,e){try{localStorage.setItem(t,e)}catch(s){}}function g(t){try{return localStorage.getItem(t)}catch(e){return null}}function m(t){try{localStorage.removeItem(t)}catch(e){}}var f=s("82ea"),p=s("1bec"),y="enforced-theme",v=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){var t;return Object(r["a"])(this,s),t=e.apply(this,arguments),t.sounds=[{}],t.displayMusicBoard=!1,t.settings=[],t.useSystemTheme=!0,t.enforceDarkTheme=!1,t.playingBtn=!1,t.currentSystemTheme="light",t}return Object(c["a"])(s,[{key:"updateSettings",value:function(t){t.includes("enforceMode__dark")?(h(y,"dark"),this.enforceDarkTheme=!0):t.includes("enforceMode__light")?(h(y,"light"),this.enforceDarkTheme=!1,this.useSystemTheme=!1):(this.enforceDarkTheme=!1,this.useSystemTheme=!0),this.$status.player.multiPlay=t.includes("multiPlay")}},{key:"playEhhh",value:function(){this.displayMusicBoard||this.$refs.centralButton.play()}},{key:"updateThemeSettings",value:function(){this.currentSystemTheme=function(){try{return getComputedStyle(document.getElementById("page")).getPropertyValue("--theme-preference").includes("light")?"light":"dark"}catch(t){return"light"}}();var t=g(y);null!==t&&(this.currentSystemTheme===t?m(y):(this.useSystemTheme=!1,this.settings.push("enforceMode__".concat(t))))}},{key:"mounted",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.settings=["multiPlay"],t.next=3,fetch("/sounds.json").then((function(t){return t.json()})).catch((function(){console.error("Sound data fetch error. Exiting.")}));case 3:this.sounds=t.sent,Object(p["a"])(window,navigator,this),this.updateThemeSettings();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"ehhhLocalizedName",get:function(){return((null===this||void 0===this?void 0:this.sounds[0].name_l10n)||{})[this.$i18n.locale]||(null===this||void 0===this?void 0:this.sounds[0].name)||""}}]),s}(d["c"]);Object(u["b"])([Object(d["d"])("settings")],v.prototype,"updateSettings",null),v=Object(u["b"])([Object(d["a"])({components:{BaseButton:f["a"]}})],v);var b=v,_=b,k=(s("b32a"),s("d9c4"),s("2877")),B=Object(k["a"])(_,n,a,!1,null,"e0dcf204",null);e["default"]=B.exports},"5a34":function(t,e,s){var n=s("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},ab13:function(t,e,s){var n=s("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},b32a:function(t,e,s){"use strict";var n=s("c6b8"),a=s.n(n);a.a},c6b8:function(t,e,s){},caad:function(t,e,s){"use strict";var n=s("23e7"),a=s("4d64").includes,i=s("44d2"),r=s("ae40"),c=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d9c4:function(t,e,s){"use strict";var n=s("1ea5"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-0b1047ab.97ae7309.js.map