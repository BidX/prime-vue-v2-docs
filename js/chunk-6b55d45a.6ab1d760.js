(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b55d45a"],{"2d77":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeAQMAAABt+G7kAAAAA1BMVEVMaXFNx9g6AAAAAXRSTlMAQObYZgAAAAtJREFUeF5jGHYAAADSAAEzF5gpAAAAAElFTkSuQmCC"},e51b:function(e,t,n){"use strict";n.r(t);n("7f7f");var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("CascadeSelect",{staticStyle:{minWidth:"14rem"},attrs:{options:e.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],placeholder:"Select a City"},model:{value:e.selectedCity1,callback:function(t){e.selectedCity1=t},expression:"selectedCity1"}}),t("h5",[e._v("Templating")]),t("CascadeSelect",{staticStyle:{minWidth:"14rem"},attrs:{options:e.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],placeholder:"Select a City"},scopedSlots:e._u([{key:"option",fn:function(a){return[t("div",{staticClass:"country-item"},[a.option.states?t("img",{class:"flag flag-"+a.option.code.toLowerCase(),attrs:{src:n("2d77")}}):e._e(),a.option.cities?t("i",{staticClass:"pi pi-compass mr-2"}):e._e(),a.option.cname?t("i",{staticClass:"pi pi-map-marker mr-2"}):e._e(),t("span",[e._v(e._s(a.option.cname||a.option.name))])])]}}]),model:{value:e.selectedCity2,callback:function(t){e.selectedCity2=t},expression:"selectedCity2"}})],1)]),t("CascadeSelectDoc")],1)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("CascadeSelect")]),t("p",[e._v("CascadeSelect displays a nested structure of options.")])])}],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nimport CascadeSelect from 'primevue/cascadeselect';\n")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. "),t("i",[e._v("optionGroupLabel")]),e._v("\n                    is used for the text of a category and "),t("i",[e._v("optionGroupChildren")]),e._v(" is to define the children of the category. Note that order of the "),t("i",[e._v("optionGroupChildren")]),e._v("\n                    matters and it should correspond to the data hierarchy.")]),t("CodeHighlight",[e._v('\n<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"\n                        :optionGroupChildren="[\'states\', \'cities\']" style="minWidth: 14rem" >\n')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nexports default {\n\tdata() {\n        return {\n            selectedCity: null,\n            countries: [\n                {\n                    name: 'Australia',\n                    code: 'AU',\n                    states: [\n                        {\n                            name: 'New South Wales',\n                            cities: [\n                                {cname: 'Sydney', code: 'A-SY'},\n                                {cname: 'Newcastle', code: 'A-NE'},\n                                {cname: 'Wollongong', code: 'A-WO'}\n                            ]\n                        },\n                        {\n                            name: 'Queensland',\n                            cities: [\n                                {cname: 'Brisbane', code: 'A-BR'},\n                                {cname: 'Townsville', code: 'A-TO'}\n                            ]\n                        },\n\n                    ]\n                },\n                {\n                    name: 'Canada',\n                    code: 'CA',\n                    states: [\n                        {\n                            name: 'Quebec',\n                            cities: [\n                                {cname: 'Montreal', code: 'C-MO'},\n                                {cname: 'Quebec City', code: 'C-QU'}\n                            ]\n                        },\n                        {\n                            name: 'Ontario',\n                            cities: [\n                                {cname: 'Ottawa', code: 'C-OT'},\n                                {cname: 'Toronto', code: 'C-TO'}\n                            ]\n                        },\n\n                    ]\n                },\n                {\n                    name: 'United States',\n                    code: 'US',\n                    states: [\n                        {\n                            name: 'California',\n                            cities: [\n                                {cname: 'Los Angeles', code: 'US-LA'},\n                                {cname: 'San Diego', code: 'US-SD'},\n                                {cname: 'San Francisco', code: 'US-SF'}\n                            ]\n                        },\n                        {\n                            name: 'Florida',\n                            cities: [\n                                {cname: 'Jacksonville', code: 'US-JA'},\n                                {cname: 'Miami', code: 'US-MI'},\n                                {cname: 'Tampa', code: 'US-TA'},\n                                {cname: 'Orlando', code: 'US-OR'}\n                            ]\n                        },\n                        {\n                            name: 'Texas',\n                            cities: [\n                                {cname: 'Austin', code: 'US-AU'},\n                                {cname: 'Dallas', code: 'US-DA'},\n                                {cname: 'Houston', code: 'US-HO'}\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n")]),t("h5",[e._v("Templating")]),t("p",[e._v("Content of an item can be customized with the "),t("i",[e._v("option")]),e._v(" template.")]),t("CodeHighlight",[[e._v('\n<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"\n        :optionGroupChildren="[\'states\', \'cities\']" style="minWidth: 14rem">\n    <template #option="slotProps">\n        <div class="country-item">\n            <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.option.code.toLowerCase()" v-if="slotProps.option.states" />\n            <i class="pi pi-compass mr-2" v-if="slotProps.option.cities"></i>\n            <i class="pi pi-map-marker mr-2" v-if="slotProps.option.cname"></i>\n            <span>{{slotProps.option.cname || slotProps.option.name}}</span>\n        </div>\n    </template>\n</CascadeSelect>\n')]],2),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of selectitems to display as the available options.")])]),t("tr",[t("td",[e._v("optionLabel")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the label of an option.")])]),t("tr",[t("td",[e._v("optionValue")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the value of an option, defaults to the option itself when not defined.")])]),t("tr",[t("td",[e._v("optionGroupLabel")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to use as the label of an option group.")])]),t("tr",[t("td",[e._v("optionGroupChildren")]),t("td",[e._v("string | function")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function to retrieve the items of a group.")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Default text to display when no option is selected.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, it specifies that the component should be disabled.")])]),t("tr",[t("td",[e._v("dataKey")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("A property to uniquely identify an option.")])]),t("tr",[t("td",[e._v("tabindex")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Index of the element in tabbing order.")])]),t("tr",[t("td",[e._v("inputId")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Identifier of the underlying input element.")])]),t("tr",[t("td",[e._v("ariaLabelledBy")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])]),t("tr",[t("td",[e._v("appendTo")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])])])])]),t("h5",[e._v("Events")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v("\n                                    event.value: Selected option value ")]),t("td",[e._v("Callback to invoke on value change.")])]),t("tr",[t("td",[e._v("group-change")]),t("td",[e._v("event.originalEvent: Original event "),t("br"),e._v("\n                                    event.value: Selected option group ")]),t("td",[e._v("Callback to invoke when a group changes.")])]),t("tr",[t("td",[e._v("before-show")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke before the overlay is shown.")])]),t("tr",[t("td",[e._v("before-hide")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke before the overlay is hidden.")])]),t("tr",[t("td",[e._v("show")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when the overlay is shown.")])]),t("tr",[t("td",[e._v("hide")]),t("td",[e._v("-")]),t("td",[e._v("Callback to invoke when the overlay is hidden.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("value: Value of the component "),t("br"),e._v("\n                                    placeholder: Placeholder text to show")])]),t("tr",[t("td",[e._v("option")]),t("td",[e._v("option: Option instance")])]),t("tr",[t("td",[e._v("indicator")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-cascadeselect")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-cascadeselect-label")]),t("td",[e._v("Element to display label of selected option.")])]),t("tr",[t("td",[e._v("p-cascadeselect-trigger")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-cascadeselect-panel")]),t("td",[e._v("Icon element.")])]),t("tr",[t("td",[e._v("p-cascadeselect-items-wrapper")]),t("td",[e._v("Wrapper element of items list.")])]),t("tr",[t("td",[e._v("p-cascadeselect-items")]),t("td",[e._v("List element of items.")])]),t("tr",[t("td",[e._v("p-cascadeselect-item")]),t("td",[e._v("An item in the list.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/cascadeselect",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v('\n<h5>Basic</h5>\n<CascadeSelect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"\n        :optionGroupChildren="[\'states\', \'cities\']" style="minWidth: 14rem" placeholder="Select a City" />\n\n<h5>Templating</h5>\n<CascadeSelect v-model="selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name"\n        :optionGroupChildren="[\'states\', \'cities\']" style="minWidth: 14rem" placeholder="Select a City">\n    <template #option="slotProps">\n        <div class="country-item">\n            <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.option.code.toLowerCase()" v-if="slotProps.option.states" />\n            <i class="pi pi-compass mr-2" v-if="slotProps.option.cities"></i>\n            <i class="pi pi-map-marker mr-2" v-if="slotProps.option.cname"></i>\n            <span>{{slotProps.option.cname || slotProps.option.name}}</span>\n        </div>\n    </template>\n</CascadeSelect>\n')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nexport default {\n    data() {\n        return {\n            selectedCity1: null,\n            selectedCity2: null,\n            countries: [\n                {\n                    name: 'Australia',\n                    code: 'AU',\n                    states: [\n                        {\n                            name: 'New South Wales',\n                            cities: [\n                                {cname: 'Sydney', code: 'A-SY'},\n                                {cname: 'Newcastle', code: 'A-NE'},\n                                {cname: 'Wollongong', code: 'A-WO'}\n                            ]\n                        },\n                        {\n                            name: 'Queensland',\n                            cities: [\n                                {cname: 'Brisbane', code: 'A-BR'},\n                                {cname: 'Townsville', code: 'A-TO'}\n                            ]\n                        },\n\n                    ]\n                },\n                {\n                    name: 'Canada',\n                    code: 'CA',\n                    states: [\n                        {\n                            name: 'Quebec',\n                            cities: [\n                                {cname: 'Montreal', code: 'C-MO'},\n                                {cname: 'Quebec City', code: 'C-QU'}\n                            ]\n                        },\n                        {\n                            name: 'Ontario',\n                            cities: [\n                                {cname: 'Ottawa', code: 'C-OT'},\n                                {cname: 'Toronto', code: 'C-TO'}\n                            ]\n                        },\n\n                    ]\n                },\n                {\n                    name: 'United States',\n                    code: 'US',\n                    states: [\n                        {\n                            name: 'California',\n                            cities: [\n                                {cname: 'Los Angeles', code: 'US-LA'},\n                                {cname: 'San Diego', code: 'US-SD'},\n                                {cname: 'San Francisco', code: 'US-SF'}\n                            ]\n                        },\n                        {\n                            name: 'Florida',\n                            cities: [\n                                {cname: 'Jacksonville', code: 'US-JA'},\n                                {cname: 'Miami', code: 'US-MI'},\n                                {cname: 'Tampa', code: 'US-TA'},\n                                {cname: 'Orlando', code: 'US-OR'}\n                            ]\n                        },\n                        {\n                            name: 'Texas',\n                            cities: [\n                                {cname: 'Austin', code: 'US-AU'},\n                                {cname: 'Dallas', code: 'US-DA'},\n                                {cname: 'Houston', code: 'US-HO'}\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n")])],1)],1)],1)},s=[],c=n("2877"),l={},d=Object(c["a"])(l,i,s,!1,null,null,null),r=d.exports,p={data:function(){return{selectedCity1:null,selectedCity2:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}},components:{CascadeSelectDoc:r}},m=p,v=Object(c["a"])(m,a,o,!1,null,null,null);t["default"]=v.exports}}]);