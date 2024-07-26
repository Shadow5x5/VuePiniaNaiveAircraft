<script lang="ts" setup>
import ManufacturerCheckboxList from "./ManufacturerCheckboxList/ManufacturerCheckboxList.vue";
import PassengerCapacitySelector from "./PassengerCapacitySelector/PassengerCapacitySelector.vue";
import CategoryCheckboxList from "./CategoryCheckboxList/CategoryCheckboxList.vue";
</script>

<template>
    <div style="width: 155px">
        <CategoryCheckboxList />
        <ManufacturerCheckboxList />
        <PassengerCapacitySelector />
    </div>
</template>
<style scoped></style>
