<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAircraftStore } from "../../../store/useAircraftStore";
import { NSpace, NCheckboxGroup, NCheckbox } from "naive-ui";
const isCollapsed = ref(true);
const store = useAircraftStore();
const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
};
const checkboxGroupStyle = computed(() => {
    return {
        height: isCollapsed.value ? "200px" : "100%",
        overflow: "hidden",
    };
});
</script>

<template>
    <div>
        <h4>Вид судна</h4>
        <n-checkbox-group
            v-model:value="store.selectedFilterOptions.categories"
            :style="checkboxGroupStyle"
        >
            <n-space
                item-style="display: flex;"
                v-for="category in store.filterOptions.categories"
            >
                <n-checkbox
                    :value="category"
                    :label="category"
                    class="custom-checkbox"
                    :key="category"
                    :theme-overrides="{ colorChecked: '#3482ff' }"
                />
            </n-space>
        </n-checkbox-group>
        <button @click="toggleCollapse" class="btn">
            {{ isCollapsed ? "Показать еще" : "Скрыть" }}
        </button>
    </div>
</template>
<style scoped>
.custom-checkbox .n-checkbox__box {
    background-color: #3482ff;
}
.btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.015em;
    outline: none;
    background: none;
    border: none;
    color: #3482ff;
    padding: 0px;
    margin-top: 10px;
}
h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.015em;
    text-align: left;
}
</style>
