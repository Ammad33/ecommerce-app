<template>
    <ag-grid-vue style="width: 500px; height: 200px" class="ag-theme-alpine" :columnDefs="columnDefs.value"
        :rowData="rowData.value">
    </ag-grid-vue>
</template>
  
<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { reactive, onMounted, ref } from "vue";

import { AgGridVue } from "ag-grid-vue3";
import 'ag-grid-enterprise';


export default {
    name: "InventoryManagement",
    components: {
        AgGridVue,
    },
    setup() {
        const gridApi = ref(null); // Optional - for accessing Grid's API

        const onGridReady = (params) => {
            gridApi.value = params.api;
        };

        const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

        onMounted(() => {
            fetch("https://www.ag-grid.com/example-assets/row-data.json")
                .then((result) => result.json())
                .then((remoteRowData) => (rowData.value = remoteRowData));
        });

        const columnDefs = reactive({
            value: [
                { field: "make" },
                { field: "model" },
                { field: "price" }
            ],
        });

        return {
            onGridReady,
            columnDefs,
            rowData,
        };
    },
};
</script>