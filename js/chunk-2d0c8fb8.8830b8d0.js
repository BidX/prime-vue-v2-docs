(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8fb8"],{"56cd":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n._self._c;return e("div",[n._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("img",{attrs:{alt:"logo",src:"demo/images/nature/nature3.jpg","aria-haspopup":"true"},on:{contextmenu:n.onImageRightClick}}),e("ContextMenu",{ref:"menu",attrs:{model:n.items}})],1)]),e("ContextMenuDoc")],1)},l=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[n._v("ContextMenu")]),e("p",[n._v("ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the with context menu support.")])])])}],a=function(){var n=this,e=n._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[n._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[n._v("\nimport ContextMenu from 'primevue/contextmenu';\n")]),e("h5",[n._v("MenuModel")]),e("p",[n._v("ContextMenu uses the common MenuModel API to define the items, visit "),e("router-link",{attrs:{to:"/menumodel"}},[n._v("MenuModel API")]),n._v(" for details.")],1),e("h5",[n._v("Getting Started")]),e("p",[n._v("ContextMenu requires a collection of menuitems as its model.")]),e("CodeHighlight",{attrs:{lang:"js"}},[n._v("\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                   label:'File',\n                   icon:'pi pi-fw pi-file',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-plus',\n                         items:[\n                            {\n                               label:'Bookmark',\n                               icon:'pi pi-fw pi-bookmark'\n                            },\n                            {\n                               label:'Video',\n                               icon:'pi pi-fw pi-video'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-trash'\n                      },\n                      {\n                         separator:true\n                      },\n                      {\n                         label:'Export',\n                         icon:'pi pi-fw pi-external-link'\n                      }\n                   ]\n                },\n                {\n                   label:'Edit',\n                   icon:'pi pi-fw pi-pencil',\n                   items:[\n                      {\n                         label:'Left',\n                         icon:'pi pi-fw pi-align-left'\n                      },\n                      {\n                         label:'Right',\n                         icon:'pi pi-fw pi-align-right'\n                      },\n                      {\n                         label:'Center',\n                         icon:'pi pi-fw pi-align-center'\n                      },\n                      {\n                         label:'Justify',\n                         icon:'pi pi-fw pi-align-justify'\n                      },\n\n                   ]\n                },\n                {\n                   label:'Users',\n                   icon:'pi pi-fw pi-user',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-user-plus',\n\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-user-minus',\n\n                      },\n                      {\n                         label:'Search',\n                         icon:'pi pi-fw pi-users',\n                         items:[\n                            {\n                               label:'Filter',\n                               icon:'pi pi-fw pi-filter',\n                               items:[\n                                  {\n                                     label:'Print',\n                                     icon:'pi pi-fw pi-print'\n                                  }\n                               ]\n                            },\n                            {\n                               icon:'pi pi-fw pi-bars',\n                               label:'List'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Events',\n                   icon:'pi pi-fw pi-calendar',\n                   items:[\n                      {\n                         label:'Edit',\n                         icon:'pi pi-fw pi-pencil',\n                         items:[\n                            {\n                               label:'Save',\n                               icon:'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                               label:'Delete',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Archieve',\n                         icon:'pi pi-fw pi-calendar-times',\n                         items:[\n                            {\n                               label:'Remove',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   separator:true\n                },\n                {\n                   label:'Quit',\n                   icon:'pi pi-fw pi-power-off'\n                }\n             ]\n        }\n    }\n}\n")]),e("h5",[n._v("Document Menu")]),e("p",[n._v("Setting global property attaches the context menu to the document.")]),e("CodeHighlight",[n._v('\n<ContextMenu :global="true" :model="items" />\n')]),e("h5",[n._v("Element Menu")]),e("p",[n._v("ContextMenu is attached to a custom element manually using the reference and calling the "),e("i",[n._v("show(event)")]),n._v(" method.")]),e("CodeHighlight",[n._v('\n<img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick">\n<ContextMenu ref="menu" :model="items" />\n')]),e("CodeHighlight",{attrs:{lang:"js"}},[n._v("\nexport default {\n    data() {\n        return {\n            items: //items\n        }\n    },\n    methods: {\n        onImageRightClick(event) {\n            this.$refs.menu.show(event);\n        }\n    }\n}\n")]),e("h5",[n._v("Properties")]),e("p",[n._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[n._v("Name")]),e("th",[n._v("Type")]),e("th",[n._v("Default")]),e("th",[n._v("Description")])])]),e("tbody",[e("tr",[e("td",[n._v("model")]),e("td",[n._v("array")]),e("td",[n._v("null")]),e("td",[n._v("An array of menuitems.")])]),e("tr",[e("td",[n._v("appendTo")]),e("td",[n._v("string")]),e("td",[n._v("null")]),e("td",[n._v('Id of the element or "body" for document where the overlay should be appended to.')])]),e("tr",[e("td",[n._v("baseZIndex")]),e("td",[n._v("number")]),e("td",[n._v("0")]),e("td",[n._v("Base zIndex value to use in layering.")])]),e("tr",[e("td",[n._v("autoZIndex")]),e("td",[n._v("boolean")]),e("td",[n._v("true")]),e("td",[n._v("Whether to automatically manage layering.")])]),e("tr",[e("td",[n._v("global")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("Attaches the menu to document instead of a particular item.")])]),e("tr",[e("td",[n._v("exact")]),e("td",[n._v("boolean")]),e("td",[n._v("true")]),e("td",[n._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),e("h5",[n._v("Methods")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[n._v("Name")]),e("th",[n._v("Parameters")]),e("th",[n._v("Description")])])]),e("tbody",[e("tr",[e("td",[n._v("toggle")]),e("td",[n._v("event: Browser event")]),e("td",[n._v("Toggles the visibility of the menu.")])]),e("tr",[e("td",[n._v("show")]),e("td",[n._v("event: Browser event")]),e("td",[n._v("Shows the menu.")])]),e("tr",[e("td",[n._v("hide")]),e("td",[n._v("-")]),e("td",[n._v("Hides the menu.")])])])])]),e("h5",[n._v("Styling")]),e("p",[n._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[n._v("theming")]),n._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[n._v("Name")]),e("th",[n._v("Element")])])]),e("tbody",[e("tr",[e("td",[n._v("p-contextmenu")]),e("td",[n._v("Container element.")])]),e("tr",[e("td",[n._v("p-submenu-list")]),e("td",[n._v("Submenu list element.")])]),e("tr",[e("td",[n._v("p-menuitem")]),e("td",[n._v("Menuitem element.")])]),e("tr",[e("td",[n._v("p-menuitem-text")]),e("td",[n._v("Label of a menuitem.")])]),e("tr",[e("td",[n._v("p-menuitem-icon")]),e("td",[n._v("Icon of a menuitem.")])]),e("tr",[e("td",[n._v("p-submenu-icon")]),e("td",[n._v("Arrow icon of a submenu.")])])])])]),e("h5",[n._v("Dependencies")]),e("p",[n._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/contextmenu",target:"_blank",rel:"noopener noreferrer"}},[e("span",[n._v("View on GitHub")])]),e("CodeHighlight",[[n._v('\n<img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick" aria-haspopup="true">\n<ContextMenu ref="menu" :model="items" />\n')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[n._v("\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                   label:'File',\n                   icon:'pi pi-fw pi-file',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-plus',\n                         items:[\n                            {\n                               label:'Bookmark',\n                               icon:'pi pi-fw pi-bookmark'\n                            },\n                            {\n                               label:'Video',\n                               icon:'pi pi-fw pi-video'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-trash'\n                      },\n                      {\n                         separator:true\n                      },\n                      {\n                         label:'Export',\n                         icon:'pi pi-fw pi-external-link'\n                      }\n                   ]\n                },\n                {\n                   label:'Edit',\n                   icon:'pi pi-fw pi-pencil',\n                   items:[\n                      {\n                         label:'Left',\n                         icon:'pi pi-fw pi-align-left'\n                      },\n                      {\n                         label:'Right',\n                         icon:'pi pi-fw pi-align-right'\n                      },\n                      {\n                         label:'Center',\n                         icon:'pi pi-fw pi-align-center'\n                      },\n                      {\n                         label:'Justify',\n                         icon:'pi pi-fw pi-align-justify'\n                      },\n\n                   ]\n                },\n                {\n                   label:'Users',\n                   icon:'pi pi-fw pi-user',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-user-plus',\n\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-user-minus',\n\n                      },\n                      {\n                         label:'Search',\n                         icon:'pi pi-fw pi-users',\n                         items:[\n                            {\n                               label:'Filter',\n                               icon:'pi pi-fw pi-filter',\n                               items:[\n                                  {\n                                     label:'Print',\n                                     icon:'pi pi-fw pi-print'\n                                  }\n                               ]\n                            },\n                            {\n                               icon:'pi pi-fw pi-bars',\n                               label:'List'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Events',\n                   icon:'pi pi-fw pi-calendar',\n                   items:[\n                      {\n                         label:'Edit',\n                         icon:'pi pi-fw pi-pencil',\n                         items:[\n                            {\n                               label:'Save',\n                               icon:'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                               label:'Delete',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Archieve',\n                         icon:'pi pi-fw pi-calendar-times',\n                         items:[\n                            {\n                               label:'Remove',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   separator:true\n                },\n                {\n                   label:'Quit',\n                   icon:'pi pi-fw pi-power-off'\n                }\n             ]\n        }\n    },\n    methods: {\n        onImageRightClick(event) {\n            this.$refs.menu.show(event);\n        }\n    }\n}\n")])],1)],1)],1)},p=[],o=i("2877"),s={},r=Object(o["a"])(s,a,p,!1,null,null,null),c=r.exports,u={data:function(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}},methods:{onImageRightClick:function(n){this.$refs.menu.show(n)}},components:{ContextMenuDoc:c}},m=u,d=Object(o["a"])(m,t,l,!1,null,null,null);e["default"]=d.exports}}]);