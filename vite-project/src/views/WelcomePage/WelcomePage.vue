<script setup lang="ts">
import InputBlock from "../../components/InputBlock/InputBlock.vue";
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
    <div class="block">
        <div>
            <Logo />
        </div>
        <h1>
            Энциклопедия<br />
            <span>самолетов и вертолетов</span>
        </h1>
        <div class="blockInput">
            <InputBlock />
        </div>
    </div>
</template>

<style scoped>
.block {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}
.blockInput {
    margin: 0 auto;
    width: 100%;
}
h1 {
    font-size: 78px;
    font-weight: 400;
    line-height: 78px;
    letter-spacing: -0.01em;
    text-align: center;
}
span {
    color: #3482ff;
}
</style>
