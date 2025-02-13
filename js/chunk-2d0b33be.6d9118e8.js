(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b33be"],{2802:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Horizontal")]),e("Splitter",{staticStyle:{height:"300px"},attrs:{classs:"mb-5"}},[e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center"},[t._v("\n                    Panel 1\n                ")]),e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center"},[t._v("\n                    Panel 2\n                ")])],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Vertical")]),e("Splitter",{staticStyle:{height:"300px"},attrs:{layout:"vertical"}},[e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center"},[t._v("\n                    Panel 1\n                ")]),e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center"},[t._v("\n                    Panel 2\n                ")])],1)],1),e("div",{staticClass:"card"},[e("h5",[t._v("Nested")]),e("Splitter",{staticStyle:{height:"300px"}},[e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center",attrs:{size:20,minSize:10}},[t._v("\n                    Panel 1\n                ")]),e("SplitterPanel",{attrs:{size:80}},[e("Splitter",{attrs:{layout:"vertical"}},[e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center",attrs:{size:15}},[t._v("\n                            Panel 2\n                        ")]),e("SplitterPanel",{attrs:{size:85}},[e("Splitter",[e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center",attrs:{size:20}},[t._v("\n                                    Panel 3\n                                ")]),e("SplitterPanel",{staticClass:"flex align-items-center justify-content-center",attrs:{size:80}},[t._v("\n                                    Panel 4\n                                ")])],1)],1)],1)],1)],1)],1)]),e("SplitterDoc")],1)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Splitter")]),e("p",[t._v("Splitter is utilized to separate and resize panels.")])])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nimport Splitter from 'primevue/splitter';\nimport SplitterPanel from 'primevue/splitterpanel';\n")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("Splitter requires two SplitterPanel components to wrap.")]),e("CodeHighlight",[t._v('\n<Splitter style="height: 300px">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Multiple Panels")]),e("p",[t._v("Any number of panels can be nested inside a Splitter.")]),e("CodeHighlight",[[t._v('\n<Splitter style="height: 300px">\n\t<SplitterPanel v-for="item of items" :key="item.key">\n\t\t{{item.content}}\n\t</SplitterPanel>\n</Splitter>\n')]],2),e("h5",[t._v("Layout")]),e("p",[t._v("Default orientation is configured with the "),e("i",[t._v("layout")]),t._v(' property and default is the "horizontal" whereas other alternative is the "vertical".')]),e("CodeHighlight",[t._v('\n<Splitter style="height: 300px" layout="vertical">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Initial Sizes")]),e("p",[t._v("When no size is defined, panels are split 50/50, use the "),e("i",[t._v("size")]),t._v(" property to give relative widths e.g. 20/80.")]),e("CodeHighlight",[t._v('\n<Splitter style="height: 300px">\n\t<SplitterPanel :size="20" >\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel  :size="80">\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Minimum Size")]),e("p",[t._v("Minimum size defines the lowest boundary for the size of a panel.")]),e("CodeHighlight",[t._v('\n<Splitter style="height: 300px">\n\t<SplitterPanel :size="20" :minSize="10">\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel  :size="80" :minSize="20">\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Nested Panels")]),e("p",[t._v("Splitters can be combined to create advanced layouts.")]),e("CodeHighlight",[t._v('\n<Splitter style="height: 300px">\n\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel :size="80">\n\t\t<Splitter layout="vertical">\n\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="15">\n\t\t\t\tPanel 2\n\t\t\t</SplitterPanel>\n\t\t\t<SplitterPanel :size="85">\n\t\t\t\t<Splitter>\n\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20">\n\t\t\t\t\t\tPanel 3\n\t\t\t\t\t</SplitterPanel>\n\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="80">\n\t\t\t\t\t\tPanel 4\n\t\t\t\t\t</SplitterPanel>\n\t\t\t\t</Splitter>\n\t\t\t</SplitterPanel>\n\t\t</Splitter>\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Stateful")]),e("p",[t._v("Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes\n\t\t\t\t\tcan be restored. Define a "),e("i",[t._v("stateKey")]),t._v(" to enable this feature. Default location of the state is\n\t\t\t\t\tsession storage and other option is the local storage which can be configured using the "),e("i",[t._v("stateStorage")]),t._v(" property.")]),e("CodeHighlight",[t._v('\n<Splitter stateKey="mykey" stateStorage="local">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n')]),e("h5",[t._v("Properties of SplitterPanel")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("size")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Size of the element relative to 100%.")])]),e("tr",[e("td",[t._v("minSize")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Minimum size of the element relative to 100%.")])])])])]),e("h5",[t._v("Properties of Splitter")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("layout")]),e("td",[t._v("string")]),e("td",[t._v("horizontal")]),e("td",[t._v('Orientation of the panels, valid values are "horizontal" and "vertical".')])]),e("tr",[e("td",[t._v("gutterSize")]),e("td",[t._v("number")]),e("td",[t._v("4")]),e("td",[t._v("Size of the divider in pixels.")])]),e("tr",[e("td",[t._v("stateKey")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Storage identifier of a stateful Splitter.")])]),e("tr",[e("td",[t._v("stateStorage")]),e("td",[t._v("string")]),e("td",[t._v("session")]),e("td",[t._v('Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.')])])])])]),e("h5",[t._v("Events of Splitter")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("resizeend")]),e("td",[t._v("event.originalEvent: Original event "),e("br"),t._v("\n                                    event.sizes: Sizes of the panels as an array ")]),e("td",[t._v("Callback to invoke when resize ends.")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-splitter")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-splitter-resizing")]),e("td",[t._v("Container element during resize.")])]),e("tr",[e("td",[t._v("p-splitter-horizontal")]),e("td",[t._v("Container element with horizontal layout.")])]),e("tr",[e("td",[t._v("p-splitter-vertical")]),e("td",[t._v("Container element with vertical layout.")])]),e("tr",[e("td",[t._v("p-splitter-panel")]),e("td",[t._v("Splitter panel element.")])]),e("tr",[e("td",[t._v("p-splitter-gutter")]),e("td",[t._v("Gutter element to use when resizing the panels.")])]),e("tr",[e("td",[t._v("p-splitter-gutter-handle")]),e("td",[t._v("Handle element of the gutter.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/splitter",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v('\n<div class="card">\n\t<h5>Horizontal</h5>\n\t<Splitter style="height: 300px">\n\t\t<SplitterPanel class="flex align-items-center justify-content-center">\n\t\t\tPanel 1\n\t\t</SplitterPanel>\n\t\t<SplitterPanel class="flex align-items-center justify-content-center">\n\t\t\tPanel 2\n\t\t</SplitterPanel>\n\t</Splitter>\n</div>\n\n<div class="card">\n\t<h5>Vertical</h5>\n\t<Splitter style="height: 300px" layout="vertical">\n\t\t<SplitterPanel class="flex align-items-center justify-content-center">\n\t\t\tPanel 1\n\t\t</SplitterPanel>\n\t\t<SplitterPanel class="flex align-items-center justify-content-center">\n\t\t\tPanel 2\n\t\t</SplitterPanel>\n\t</Splitter>\n</div>\n\n<div class="card">\n\t<h5>Nested</h5>\n\t<Splitter style="height: 300px">\n\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n\t\t\tPanel 1\n\t\t</SplitterPanel>\n\t\t<SplitterPanel :size="80">\n\t\t\t<Splitter layout="vertical">\n\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="15">\n\t\t\t\t\tPanel 2\n\t\t\t\t</SplitterPanel>\n\t\t\t\t<SplitterPanel :size="85">\n\t\t\t\t\t<Splitter>\n\t\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20">\n\t\t\t\t\t\t\tPanel 3\n\t\t\t\t\t\t</SplitterPanel>\n\t\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="80">\n\t\t\t\t\t\t\tPanel 4\n\t\t\t\t\t\t</SplitterPanel>\n\t\t\t\t\t</Splitter>\n\t\t\t\t</SplitterPanel>\n\t\t\t</Splitter>\n\t\t</SplitterPanel>\n\t</Splitter>\n</div>\n')]],2)],1)],1)],1)},r=[],s=n("2877"),p={},o=Object(s["a"])(p,a,r,!1,null,null,null),c=o.exports,v={components:{SplitterDoc:c}},d=v,h=Object(s["a"])(d,i,l,!1,null,null,null);e["default"]=h.exports}}]);