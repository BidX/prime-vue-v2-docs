(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d22fac5"],{6319:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Single Column")]),t("DataTable",{attrs:{value:e.products,responsiveLayout:"scroll"}},[t("Column",{attrs:{field:"code",header:"Code",sortable:""}}),t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{field:"category",header:"Category",sortable:""}}),t("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v("\n                            "+e._s(e.formatCurrency(t.data.price))+"\n                        ")]}}])})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Multiple Columns")]),t("p",[e._v("Use metakey to add a column to the sort selection.")]),t("DataTable",{attrs:{value:e.products,sortMode:"multiple",responsiveLayout:"scroll"}},[t("Column",{attrs:{field:"code",header:"Code",sortable:""}}),t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{field:"category",header:"Category",sortable:""}}),t("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v("\n                            "+e._s(e.formatCurrency(t.data.price))+"\n                        ")]}}])})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Presort")]),t("DataTable",{attrs:{value:e.products,sortField:"category",sortOrder:-1,responsiveLayout:"scroll"}},[t("Column",{attrs:{field:"code",header:"Code",sortable:""}}),t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{field:"category",header:"Category",sortable:""}}),t("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v("\n                            "+e._s(e.formatCurrency(t.data.price))+"\n                        ")]}}])})],1)],1),t("div",{staticClass:"card"},[t("h5",[e._v("Removable Sort")]),t("DataTable",{attrs:{value:e.products,removableSort:"",responsiveLayout:"scroll"}},[t("Column",{attrs:{field:"code",header:"Code",sortable:""}}),t("Column",{attrs:{field:"name",header:"Name",sortable:""}}),t("Column",{attrs:{field:"category",header:"Category",sortable:""}}),t("Column",{attrs:{field:"quantity",header:"Quantity",sortable:""}}),t("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:e._u([{key:"body",fn:function(t){return[e._v("\n                            "+e._s(e.formatCurrency(t.data.price))+"\n                        ")]}}])})],1)],1)]),t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Source"}},[t("CodeHighlight",[[e._v('\n<div class="card">\n    <h5>Single Column</h5>\n    <DataTable :value="products" responsiveLayout="scroll">\n        <Column field="code" header="Code" sortable></Column>\n        <Column field="name" header="Name" sortable></Column>\n        <Column field="category" header="Category" sortable></Column>\n        <Column field="quantity" header="Quantity" sortable></Column>\n        <Column field="price" header="Price" sortable>\n            <template #body="slotProps">\n                {{formatCurrency(slotProps.data.price)}}\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <h5>Multiple Columns</h5>\n    <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">\n        <Column field="code" header="Code" sortable></Column>\n        <Column field="name" header="Name" sortable></Column>\n        <Column field="category" header="Category" sortable></Column>\n        <Column field="quantity" header="Quantity" sortable></Column>\n        <Column field="price" header="Price" sortable>\n            <template #body="slotProps">\n                {{formatCurrency(slotProps.data.price)}}\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <h5>Presort</h5>\n    <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">\n        <Column field="code" header="Code" sortable></Column>\n        <Column field="name" header="Name" sortable></Column>\n        <Column field="category" header="Category" sortable></Column>\n        <Column field="quantity" header="Quantity" sortable></Column>\n        <Column field="price" header="Price" sortable>\n            <template #body="slotProps">\n                {{formatCurrency(slotProps.data.price)}}\n            </template>\n        </Column>\n    </DataTable>\n</div>\n\n<div class="card">\n    <h5>Removable Sort</h5>\n    <DataTable :value="products" removableSort responsiveLayout="scroll">\n        <Column field="code" header="Code" sortable></Column>\n        <Column field="name" header="Name" sortable></Column>\n        <Column field="category" header="Category" sortable></Column>\n        <Column field="quantity" header="Quantity" sortable></Column>\n        <Column field="price" header="Price" sortable>\n            <template #body="slotProps">\n                {{formatCurrency(slotProps.data.price)}}\n            </template>\n        </Column>\n    </DataTable>\n</div>\n')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v("\nimport ProductService from '../../service/ProductService';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        formatCurrency(value) {\n            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});\n        }\n    }\n}\n")])],1)],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("DataTable "),t("span",[e._v("Sort")])]),t("p",[e._v("Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.")])])])}],o=r("e9c0"),l={data:function(){return{products:null}},productService:null,created:function(){this.productService=new o["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},s=l,u=r("2877"),d=Object(u["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports},e9c0:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("d225"),n=r("b0b4"),o=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}])}()}}]);