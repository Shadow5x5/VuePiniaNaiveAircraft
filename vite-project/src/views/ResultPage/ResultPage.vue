<script lang="ts" setup>
import usePage from "./usePage";
import Logo from "../../components/Logo/Logo.vue";
import InputBlock from "../../components/InputBlock/InputBlock.vue";
import FilterBlock from "../../components/FilterBlock/FilterBlock.vue";
import CardAircraft from "../../components/CardAircraft/CardAircraft.vue";

const { displayedAircrafts } = usePage();
</script>

<template>
    <div>
        <div class="section-1">
            <Logo />
            <InputBlock />
        </div>
        <div class="section-2">
            <div><FilterBlock /></div>

            <div class="cardsBlock">
                <div v-for="item in displayedAircrafts" :key="item.id">
                    <router-link
                        :to="{ name: 'about', params: { id: item.id } }"
                    >
                        <CardAircraft
                            :title="item.AircraftName"
                            :category="item.AircraftCategory"
                            :aicraft="item.Aircraft"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section-1 {
    display: flex;
    column-gap: 16px;
    align-items: center;
    margin-top: 10px;
}
.section-2 {
    margin-top: 10px;
    display: flex;
}
.cardsBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    column-gap: 12px;
    row-gap: 10px;
}
</style>
