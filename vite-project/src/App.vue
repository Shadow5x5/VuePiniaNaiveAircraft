<script setup lang="ts">
import "./style.css";
</script>
<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.container {
    max-width: 1140px;
    margin: 0 auto;
}
</style>
