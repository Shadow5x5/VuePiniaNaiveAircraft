<script lang="ts" setup>
import { NCard } from "naive-ui";

const props = defineProps(["title", "aicraft", "category"]);
</script>
<template>
    <n-card :title="title" size="small">
        <template #cover>
            <img src="../../assets/aircraft.png" />
        </template>
        {{ props.aicraft }}
        {{ props.category }}
    </n-card>
</template>
<style scoped>
.n-card {
    width: 288px;
}
</style>
