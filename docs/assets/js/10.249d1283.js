(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{205:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"exports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" Exports")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    VueGdprGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gdprMixin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    GdprManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-gdpr-guard"')]),t._v("\n")])])]),s("h2",{attrs:{id:"vuegdprguard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuegdprguard"}},[t._v("#")]),t._v(" VueGdprGuard")]),t._v(" "),s("p",[t._v("This is the plugin that you need to register in order to use the components in your application, simply call")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueGdprGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Config key")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("factory")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/globals.html#gdprmanagerfactory",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("gdprGuard.GdprManagerFactory")]),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("savior")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/interfaces/gdprsavior.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("gdprGuard.GdprSavior")]),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✔️")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("It is recommended to use "),s("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/classes/gdprmanagerbuilder.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("GdprManagerBuilder")]),s("OutboundLink")],1),t._v(" to create your managers. This is available to you through "),s("code",[t._v("vue-gdpr-guard")]),t._v("'s dependency on "),s("code",[t._v("gdpr-guard")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    GdprManagerBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [...]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gdpr-guard"')]),t._v("\n")])])]),s("p",[t._v("As for factories, you can either construct the manager beforehand and make a simple function that returns it, or make a function that constructs it directly.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("code",[t._v("GdprSavior")]),t._v(" instances are often objects that you construct using other libraries (e.g. "),s("a",{attrs:{href:"https://raw.githubusercontent.com/Voltra/vue-gdpr-guard/dev/vue-gdpr-guard.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdpr-guard-local"),s("OutboundLink")],1),t._v("). Thus you might need to install additional libraries for this feature.")])]),t._v(" "),s("h2",{attrs:{id:"gdprmixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdprmixin"}},[t._v("#")]),t._v(" gdprMixin")]),t._v(" "),s("p",[t._v("A handy mixin if you define all your GDPR template in one component. It registers all the components of this library, adds a "),s("code",[t._v("opened")]),t._v(" boolean prop and a handful of handy methods to avoid boilerplate :")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("Return type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("enableAll()")])]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Enable all guards in the manager")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("disableAll()")])]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Disable all guards in the manager")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("close()")])]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Emit a "),s("code",[t._v("close")]),t._v(" event (useful for modals)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("discard()")])]),t._v(" "),s("td",[s("code",[t._v("Promise<boolean>")])]),t._v(" "),s("td",[t._v("Discard the user's changes to the preferences")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("save()")])]),t._v(" "),s("td",[s("code",[t._v("Promise<boolean>")])]),t._v(" "),s("td",[t._v("Save the user's changes to the preferences")])])])]),t._v(" "),s("h2",{attrs:{id:"vue-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-components"}},[t._v("#")]),t._v(" Vue Components")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can browse each components' documentation "),s("router-link",{attrs:{to:"/components/"}},[t._v("here")])],1)]),t._v(" "),s("p",[s("code",[t._v("GdprManager")]),t._v(", "),s("code",[t._v("GdprGroup")]),t._v(" and "),s("code",[t._v("GdprGuard")]),t._v(" are all renderless components, meaning that they don't actually render HTML of their own, instead they render the content from the default slot.")]),t._v(" "),s("p",[t._v("The only caveat of this approach is that, when rendering, the components will only take into account the first element of the slot :")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyRenderlessComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("MyRenderlessComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("will render to")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("This approach is used to adhere to the main focus of the library : Give the developers complete control over the rendering, ease the use of feature toggling based on GDPR preferences.")]),t._v(" "),s("p",[t._v("This way, you can use Antd, Bootstrap or whatever components you feel like using while still getting all the advantages from the domain-specific logic.")])])}),[],!1,null,null,null);a.default=n.exports}}]);