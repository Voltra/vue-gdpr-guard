(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{443:function(t,a,s){"use strict";s.r(a);var e=s(67),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" Exports")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    VueGdprGuard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gdprMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    GdprManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprGuard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-gdpr-guard"')]),t._v("\n")])])]),a("h2",{attrs:{id:"vuegdprguard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuegdprguard"}},[t._v("#")]),t._v(" VueGdprGuard")]),t._v(" "),a("p",[t._v("This is the plugin that you need to register in order to use the components in your application, simply call")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueGdprGuard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Config key")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("factory")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/globals.html#gdprmanagerfactory",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("gdprGuard.GdprManagerFactory")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("✔️")])]),t._v(" "),a("tr",[a("td",[t._v("savior")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/interfaces/gdprsavior.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("gdprGuard.GdprSavior")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("✔️")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("It is recommended to use "),a("a",{attrs:{href:"https://voltra.github.io/gdpr-guard/classes/gdprmanagerbuilder.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("GdprManagerBuilder")]),a("OutboundLink")],1),t._v(" to create your managers. This is available to you through "),a("code",[t._v("vue-gdpr-guard")]),t._v("'s dependency on "),a("code",[t._v("gdpr-guard")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    GdprManagerBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GdprStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [...]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gdpr-guard"')]),t._v("\n")])])]),a("p",[t._v("As for factories, you can either construct the manager beforehand and make a simple function that returns it, or make a function that constructs it directly.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("code",[t._v("GdprSavior")]),t._v(" instances are often objects that you construct using other libraries (e.g. "),a("a",{attrs:{href:"https://raw.githubusercontent.com/Voltra/vue-gdpr-guard/dev/vue-gdpr-guard.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdpr-guard-local"),a("OutboundLink")],1),t._v("). Thus you might need to install additional libraries for this feature.")])]),t._v(" "),a("h2",{attrs:{id:"gdprmixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gdprmixin"}},[t._v("#")]),t._v(" gdprMixin")]),t._v(" "),a("p",[t._v("A handy mixin if you define all your GDPR template in one component. It registers all the components of this library, adds a "),a("code",[t._v("opened")]),t._v(" boolean prop and a handful of handy methods to avoid boilerplate :")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Return type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enableAll()")])]),t._v(" "),a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[t._v("Enable all guards in the manager")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("disableAll()")])]),t._v(" "),a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[t._v("Disable all guards in the manager")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("close()")])]),t._v(" "),a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[t._v("Emit a "),a("code",[t._v("close")]),t._v(" event (useful for modals)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("discard()")])]),t._v(" "),a("td",[a("code",[t._v("Promise<boolean>")])]),t._v(" "),a("td",[t._v("Discard the user's changes to the preferences")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("save()")])]),t._v(" "),a("td",[a("code",[t._v("Promise<boolean>")])]),t._v(" "),a("td",[t._v("Save the user's changes to the preferences")])])])]),t._v(" "),a("h2",{attrs:{id:"vue-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-components"}},[t._v("#")]),t._v(" Vue Components")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can browse each components' documentation "),a("RouterLink",{attrs:{to:"/components/"}},[t._v("here")])],1)]),t._v(" "),a("p",[a("code",[t._v("GdprManager")]),t._v(", "),a("code",[t._v("GdprGroup")]),t._v(" and "),a("code",[t._v("GdprGuard")]),t._v(" are all renderless components, meaning that they don't actually render HTML of their own, instead they render the content from the default slot.")]),t._v(" "),a("p",[t._v("The only caveat of this approach is that, when rendering, the components will only take into account the first element of the slot :")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyRenderlessComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("MyRenderlessComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("will render to")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("This approach is used to adhere to the main focus of the library : Give the developers complete control over the rendering, ease the use of feature toggling based on GDPR preferences.")]),t._v(" "),a("p",[t._v("This way, you can use Antd, Bootstrap or whatever components you feel like using while still getting all the advantages from the domain-specific logic.")])])}),[],!1,null,null,null);a.default=n.exports}}]);