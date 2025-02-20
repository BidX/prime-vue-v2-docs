(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-779a7adc"],{"2d77":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeAQMAAABt+G7kAAAAA1BMVEVMaXFNx9g6AAAAAXRSTlMAQObYZgAAAAtJREFUeF5jGHYAAADSAAEzF5gpAAAAAElFTkSuQmCC"},9066:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("d225"),s=n("b0b4"),i=function(){function e(){Object(o["a"])(this,e)}return Object(s["a"])(e,[{key:"getCountries",value:function(){return fetch("demo/data/countries.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}])}()},"97be":function(e,t,n){"use strict";n.r(t);n("7f7f");var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-section introduction"},[e._m(0),t("AppInputStyleSwitch")],1),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Basic")]),t("AutoComplete",{attrs:{suggestions:e.filteredCountries,field:"name"},on:{complete:function(t){return e.searchCountry(t)}},model:{value:e.selectedCountry1,callback:function(t){e.selectedCountry1=t},expression:"selectedCountry1"}}),t("h5",[e._v("Dropdown, Templating and Force Selection")]),t("AutoComplete",{attrs:{suggestions:e.filteredCountries,dropdown:!0,field:"name",forceSelection:""},on:{complete:function(t){return e.searchCountry(t)}},scopedSlots:e._u([{key:"item",fn:function(o){return[t("div",{staticClass:"country-item"},[t("img",{class:"flag flag-"+o.item.code.toLowerCase(),attrs:{src:n("2d77")}}),t("div",[e._v(e._s(o.item.name))])])]}}]),model:{value:e.selectedCountry2,callback:function(t){e.selectedCountry2=t},expression:"selectedCountry2"}}),t("h5",[e._v("Multiple")]),t("span",{staticClass:"p-fluid"},[t("AutoComplete",{attrs:{multiple:!0,suggestions:e.filteredCountries,field:"name"},on:{complete:function(t){return e.searchCountry(t)}},model:{value:e.selectedCountries,callback:function(t){e.selectedCountries=t},expression:"selectedCountries"}})],1)],1)]),t("AutoCompleteDoc")],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature-intro"},[t("h1",[e._v("AutoComplete")]),t("p",[e._v("AutoComplete is an input component that provides real-time suggestions when being typed.")])])}],i=(n("f559"),n("75fc")),r=n("9066"),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nimport AutoComplete from 'primevue/autocomplete';\n")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("AutoComplete uses v-model for two-way binding, requires a list of suggestions and a complete method to query for the results. The complete method\n\t\t\t\t\tgets the query text as event.query property and should update the suggestions with the search results. Example below connects to a remote datasource to fetch the results;")]),t("CodeHighlight",[e._v('\n<AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" />\n')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v("\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tselectedCountry: null,\n\t\t\tfilteredCountries: null\n\t\t}\n\t},\n\tcountryService: null,\n\tcreated() {\n\t\tthis.countryService = new CountryService();\n\t},\n\tmethods: {\n\t\tsearchCountry(event) {\n            this.filteredCountriesBasic = this.countryService.search(event.query);\n\t\t}\n\t}\n}\n")]),t("h5",[e._v("Dropdown")]),t("p",[e._v("Enabling "),t("i",[e._v("dropdown")]),e._v(' property displays a button next to the input field where click behavior of the button is defined using\n\t\t\t\t\tdropdownMode property that takes "blank" or "current" as possible values.\n\t\t\t\t\t"blank" is the default mode to send a query with an empty string whereas\n\t\t\t\t\t"current" setting sends a query with the current value of the input.')]),t("CodeHighlight",[e._v('\n<AutoComplete v-model="brand" :dropdown="true" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type \'v\' or \'f\'" />\n')]),t("h5",[e._v("Multiple Mode")]),t("p",[e._v("Multiple mode is enabled using "),t("i",[e._v("multiple")]),e._v(" property to select more than one value from the autocomplete. In this case, value reference should be an array.")]),t("CodeHighlight",[e._v('\n<AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" field="name" />\n')]),t("h5",[e._v("Objects")]),t("p",[e._v("AutoComplete can also work with objects using the  "),t("i",[e._v("field")]),e._v(' property that defines the label to display\n\t\t\t\t\tas a suggestion. The value passed to the model would still be the object instance of a suggestion.\n\t\t\t\t\tHere is an example with a Country object that has name and code fields such as {name:"United States",code:"USA"}.')]),t("CodeHighlight",[e._v('\n<AutoComplete field="label" v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" />\n')]),t("h5",[e._v("Force Selection")]),t("p",[e._v("ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared\n        to make sure the value passed to the model is always one of the suggestions. Simply enable "),t("i",[e._v("forceSelection")]),e._v(" to enforce that input is always from the suggestion list.")]),t("CodeHighlight",[e._v('\n<AutoComplete forceSelection v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" />\n')]),t("h5",[e._v("Templating")]),t("p",[e._v("Item template allows displaying custom content inside the suggestions panel. The slotProps variable passed to the template provides an item property to represent an item in the suggestions collection.")]),t("CodeHighlight",[[e._v('\n<AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type \'v\' or \'f\'" :dropdown="true">\n\t<template #item="slotProps">\n\t\t<img :alt="slotProps.item" :src="\'demo/images/car/\' + slotProps.item + \'.png\'" />\n        <div>{{slotProps.item}}</div>\n\t</template>\n</AutoComplete>\n')]],2),t("h5",[e._v("Properties")]),t("p",[e._v("Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Value of the component.")])]),t("tr",[t("td",[e._v("suggestions")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of suggestions to display.")])]),t("tr",[t("td",[e._v("field")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Property name or getter function of a suggested object to resolve and display.")])]),t("tr",[t("td",[e._v("scrollHeight")]),t("td",[e._v("string")]),t("td",[e._v("200px")]),t("td",[e._v("Maximum height of the suggestions panel.")])]),t("tr",[t("td",[e._v("dropdown")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Displays a button next to the input field when enabled.")])]),t("tr",[t("td",[e._v("dropdownMode")]),t("td",[e._v("string")]),t("td",[e._v("blank")]),t("td",[e._v('Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.')])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Specifies if multiple values can be selected.")])]),t("tr",[t("td",[e._v("minLength")]),t("td",[e._v("number")]),t("td",[e._v("1")]),t("td",[e._v("Minimum number of characters to initiate a search.")])]),t("tr",[t("td",[e._v("delay")]),t("td",[e._v("number")]),t("td",[e._v("300")]),t("td",[e._v("Delay between keystrokes to wait before sending a query.")])]),t("tr",[t("td",[e._v("ariaLabelledBy")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])]),t("tr",[t("td",[e._v("appendTo")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v('Id of the element or "body" for document where the overlay should be appended to.')])]),t("tr",[t("td",[e._v("forceSelection")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When present, autocomplete clears the manual input if it does not match of the suggestions to force only\n                                accepting values from the suggestions.")])]),t("tr",[t("td",[e._v("autoHighlight")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Highlights automatically the first item of the dropdown to be selected.")])])])])]),t("h5",[e._v("Events")]),t("p",[e._v("Any valid event such as focus, blur and input are passed to the underlying input element. Following are the additional events to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("complete")]),t("td",[e._v("\n                                    event.originalEvent: Browser event "),t("br"),e._v("\n                                    event.query: Value to search with\n                                ")]),t("td",[e._v("Callback to invoke to search for suggestions.")])]),t("tr",[t("td",[e._v("item-select")]),t("td",[e._v("event.originalEvent: Browser event "),t("br"),e._v("\n                                    event.value: Selected item")]),t("td",[e._v("Callback to invoke when a suggestion is selected.")])]),t("tr",[t("td",[e._v("item-unselect")]),t("td",[e._v("event.originalEvent: Browser event "),t("br"),e._v("\n                                    event.value: Unselected item")]),t("td",[e._v("Callback to invoke when a selected value is removed.")])]),t("tr",[t("td",[e._v("dropdown-click")]),t("td",[e._v("\n                                    event.originalEvent: browser event "),t("br"),e._v("\n                                    event.query: Current value of the input field\n                                ")]),t("td",[e._v("Callback to invoke to when dropdown button is clicked.")])]),t("tr",[t("td",[e._v("clear")]),t("td",[e._v("event: Browser event")]),t("td",[e._v("Callback to invoke when input is cleared by the user.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("item")]),t("td",[e._v("item: Option instance "),t("br"),e._v("\n                                    index: Index of the option")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-autocomplete")]),t("td",[e._v("Container element")])]),t("tr",[t("td",[e._v("p-autocomplete-panel")]),t("td",[e._v("Overlay panel of suggestions.")])]),t("tr",[t("td",[e._v("p-autocomplete-items")]),t("td",[e._v("List container of suggestions.")])]),t("tr",[t("td",[e._v("p-autocomplete-item")]),t("td",[e._v("List item of a suggestion.")])]),t("tr",[t("td",[e._v("p-autocomplete-token")]),t("td",[e._v("Element of a selected item in multiple mode.")])]),t("tr",[t("td",[e._v("p-autocomplete-token-icon")]),t("td",[e._v("Close icon element of a selected item in multiple mode.")])]),t("tr",[t("td",[e._v("p-autocomplete-token-label")]),t("td",[e._v("Label of a selected item in multiple mode.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/autocomplete",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v('\n<h5>Basic</h5>\n<AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />\n\n<h5>Dropdown, Templating and Force Selection</h5>\n<AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>\n    <template #item="slotProps">\n        <div class="country-item">\n            <img src="../../assets/images/flag_placeholder.png" :class="\'flag flag-\' + slotProps.item.code.toLowerCase()" />\n            <div>{{slotProps.item.name}}</div>\n        </div>\n    </template>\n</AutoComplete>\n\n<h5>Multiple</h5>\n<span class="p-fluid">\n    <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />\n</span>\n')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nimport CountryService from '../../service/CountryService';\n\nexport default {\n    data() {\n        return {\n            countries: null,\n            selectedCountry1: null,\n            selectedCountry2: null,\n            filteredCountries: null,\n            selectedCountries: []\n        }\n    },\n    countryService: null,\n    created() {\n        this.countryService = new CountryService();\n    },\n    mounted() {\n        this.countryService.getCountries().then(data => this.countries = data);\n    },\n    methods: {\n        searchCountry(event) {\n            setTimeout(() => {\n                if (!event.query.trim().length) {\n                    this.filteredCountries = [...this.countries];\n                }\n                else {\n                    this.filteredCountries = this.countries.filter((country) => {\n                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());\n                    });\n                }\n            }, 250);\n        }\n    }\n}\n")])],1)],1)],1)},a=[],d=n("2877"),u={},c=Object(d["a"])(u,l,a,!1,null,null,null),v=c.exports,p={data:function(){return{countries:null,selectedCountry1:null,selectedCountry2:null,filteredCountries:null,selectedCountries:[]}},countryService:null,created:function(){this.countryService=new r["a"]},mounted:function(){var e=this;this.countryService.getCountries().then((function(t){return e.countries=t}))},methods:{searchCountry:function(e){var t=this;setTimeout((function(){e.query.trim().length?t.filteredCountries=t.countries.filter((function(t){return t.name.toLowerCase().startsWith(e.query.toLowerCase())})):t.filteredCountries=Object(i["a"])(t.countries)}),250)}},components:{AutoCompleteDoc:v}},h=p,m=Object(d["a"])(h,o,s,!1,null,null,null);t["default"]=m.exports}}]);