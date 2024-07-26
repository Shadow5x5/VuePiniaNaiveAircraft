<script lang="ts" setup>
import { ref } from "vue";
import { NButton, NInput } from "naive-ui";
import { useAircraftStore } from "../../store/useAircraftStore";
import { useRouter } from "vue-router";

const inputValue = ref<string | null>("");
const store = useAircraftStore();
const router = useRouter();

const fetchData = async () => {
    if (!inputValue.value) {
        console.log("Input value is empty");
        return;
    }
    await store.fetchAircrafts(inputValue.value);
    router.push("/result");
};
</script>

<template>
    <div class="blockInput">
        <NInput
            v-model:value="inputValue"
            type="text"
            clearable
            placeholder="Поиск"
            @keyup.enter="fetchData"
        />
        <NButton @click="fetchData" class="btn">Найти</NButton>
    </div>
</template>

<style scoped>
.blockInput {
    padding: 10px;
    border: 2px solid #3482ff;
    display: flex;
    column-gap: 16px;
    border-radius: 12px;
    align-items: center;
    max-width: 792px;
    width: 100%;
}
:v-deep .n-input__input {
    border-color: blue;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.2);
}
.btn {
    background: #3482ff;
    color: #fff;
    border-radius: 6px;
    width: 100px;
}
</style>
