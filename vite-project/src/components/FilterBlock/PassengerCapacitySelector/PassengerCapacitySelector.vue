<script setup lang="ts">
import { NSpace, NInputNumber } from "naive-ui";

import { useAircraftStore } from "../../../store/useAircraftStore";

const store = useAircraftStore();
</script>

<template>
    <div>
        <h4>Пассажирских мест</h4>
        <n-space>
            <n-input-number
                v-model:value="store.selectedFilterOptions.minPassenger"
                placeholder="Min"
                :min="store.filterOptions.minPassenger"
                :max="store.filterOptions.maxPassenger"
                clearable
            />
            <n-input-number
                v-model:value="store.selectedFilterOptions.maxPassenger"
                placeholder="Max"
                :min="store.filterOptions.minPassenger"
                :max="store.filterOptions.maxPassenger"
                clearable
            />
        </n-space>
    </div>
</template>
<style scoped>
h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.015em;
    text-align: left;
}
</style>
