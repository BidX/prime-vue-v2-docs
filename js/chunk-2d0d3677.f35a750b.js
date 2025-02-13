(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3677"],{"5d2d":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"content-section implementation"},[a("div",{staticClass:"card"},[a("DataTable",{attrs:{value:t.sales,responsiveLayout:"scroll"}},[a("ColumnGroup",{attrs:{type:"header"}},[a("Row",[a("Column",{attrs:{header:"Product",rowspan:3}}),a("Column",{attrs:{header:"Sale Rate",colspan:4}})],1),a("Row",[a("Column",{attrs:{header:"Sales",colspan:2}}),a("Column",{attrs:{header:"Profits",colspan:2}})],1),a("Row",[a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearSale"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearSale"}}),a("Column",{attrs:{header:"Last Year",sortable:!0,field:"lastYearProfit"}}),a("Column",{attrs:{header:"This Year",sortable:!0,field:"thisYearProfit"}})],1)],1),a("Column",{attrs:{field:"product"}}),a("Column",{attrs:{field:"lastYearSale"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v("\n                            "+t._s(a.data.lastYearSale)+"%\n                        ")]}}])}),a("Column",{attrs:{field:"thisYearSale"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v("\n                            "+t._s(a.data.thisYearSale)+"%\n                        ")]}}])}),a("Column",{attrs:{field:"lastYearProfit"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v("\n                            "+t._s(t.formatCurrency(a.data.lastYearProfit))+"\n                        ")]}}])}),a("Column",{attrs:{field:"thisYearProfit"},scopedSlots:t._u([{key:"body",fn:function(a){return[t._v("\n                            "+t._s(t.formatCurrency(a.data.thisYearProfit))+"\n                        ")]}}])}),a("ColumnGroup",{attrs:{type:"footer"}},[a("Row",[a("Column",{attrs:{footer:"Totals:",colspan:3,footerStyle:{"text-align":"right"}}}),a("Column",{attrs:{footer:t.lastYearTotal}}),a("Column",{attrs:{footer:t.thisYearTotal}})],1)],1)],1)],1)]),a("div",{staticClass:"content-section documentation"},[a("TabView",[a("TabPanel",{attrs:{header:"Source"}},[a("CodeHighlight",[[t._v('\n<DataTable :value="sales" responsiveLayout="scroll">\n    <ColumnGroup type="header">\n        <Row>\n            <Column header="Product" :rowspan="3" />\n            <Column header="Sale Rate" :colspan="4" />\n        </Row>\n        <Row>\n            <Column header="Sales" :colspan="2" />\n            <Column header="Profits" :colspan="2" />\n        </Row>\n        <Row>\n            <Column header="Last Year" :sortable="true" field="lastYearSale"/>\n            <Column header="This Year" :sortable="true" field="thisYearSale"/>\n            <Column header="Last Year" :sortable="true" field="lastYearProfit"/>\n            <Column header="This Year" :sortable="true" field="thisYearProfit"/>\n        </Row>\n    </ColumnGroup>\n    <Column field="product" />\n    <Column field="lastYearSale">\n        <template #body="slotProps">\n            {{slotProps.data.lastYearSale}}%\n        </template>\n    </Column>\n    <Column field="thisYearSale">\n        <template #body="slotProps">\n            {{slotProps.data.thisYearSale}}%\n        </template>\n    </Column>\n    <Column field="lastYearProfit">\n        <template #body="slotProps">\n            {{formatCurrency(slotProps.data.lastYearProfit)}}\n        </template>\n    </Column>\n    <Column field="thisYearProfit">\n        <template #body="slotProps">\n            {{formatCurrency(slotProps.data.thisYearProfit)}}\n        </template>\n    </Column>\n    <ColumnGroup type="footer">\n        <Row>\n            <Column footer="Totals:" :colspan="3" :footerStyle="{\'text-align\':\'right\'}"/>\n            <Column :footer="lastYearTotal" />\n            <Column :footer="thisYearTotal" />\n        </Row>\n    </ColumnGroup>\n</DataTable>\n')]],2),a("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nexport default {\n    data() {\n        return {\n            sales: null\n        }\n    },\n    created() {\n        this.sales = [\n            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},\n            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},\n            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},\n            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},\n            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},\n            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},\n            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},\n            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},\n            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},\n            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}\n        ];\n    },\n    methods: {\n        formatCurrency(value) {\n            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});\n        }\n    },\n    computed: {\n        lastYearTotal() {\n            let total = 0;\n            for(let sale of this.sales) {\n                total += sale.lastYearProfit;\n            }\n\n            return this.formatCurrency(total);\n        },\n        thisYearTotal() {\n            let total = 0;\n            for(let sale of this.sales) {\n                total += sale.thisYearProfit;\n            }\n\n            return this.formatCurrency(total);\n        }\n    }\n}\n")])],1)],1)],1)])},o=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-section introduction"},[a("div",{staticClass:"feature-intro"},[a("h1",[t._v("DataTable "),a("span",[t._v("ColumnGroup")])]),a("p",[t._v("Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.")])])])}];e("ac4d"),e("8a81"),e("5df3"),e("1c4c"),e("7f7f"),e("6b54");function l(t,a){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=n(t))||a&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,i=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){i=!0,l=t},f:function(){try{s||null==e.return||e.return()}finally{if(i)throw l}}}}function n(t,a){if(t){if("string"==typeof t)return s(t,a);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,a):void 0}}function s(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,r=Array(a);e<a;e++)r[e]=t[e];return r}var i={data:function(){return{sales:null}},created:function(){this.sales=[{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}]},methods:{formatCurrency:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})}},computed:{lastYearTotal:function(){var t,a=0,e=l(this.sales);try{for(e.s();!(t=e.n()).done;){var r=t.value;a+=r.lastYearProfit}}catch(o){e.e(o)}finally{e.f()}return this.formatCurrency(a)},thisYearTotal:function(){var t,a=0,e=l(this.sales);try{for(e.s();!(t=e.n()).done;){var r=t.value;a+=r.thisYearProfit}}catch(o){e.e(o)}finally{e.f()}return this.formatCurrency(a)}}},u=i,f=e("2877"),c=Object(f["a"])(u,r,o,!1,null,null,null);a["default"]=c.exports}}]);