<script setup lang="ts">
import { NCarousel, NCard } from "naive-ui";
const attr = [
    "Количество место",
    "Высота самолета (м)",
    "Объём багажного отделения (куб. м)",
    "Дальность (км)",
    "Максимальный взлетный вес (кг)",
];

import { useRoute } from "vue-router";

import { Aircraft, useAircraftStore } from "../../store/useAircraftStore";
import { ref, watchEffect } from "vue";

const store = useAircraftStore();
const route = useRoute();
const aircraft = ref<Aircraft | null>(null);

watchEffect(() => {
    const id = route.params.id;
    if (typeof id === "string") {
        const result = store.getAircraft(id);
        if (result) {
            aircraft.value = result;
        } else {
            aircraft.value = null;
        }
    } else if (Array.isArray(id) && id.length > 0) {
        const result = store.getAircraft(id[0]);
        if (result) {
            aircraft.value = result;
        } else {
            aircraft.value = null;
        }
    } else {
        console.error("Unexpected type for route.params.id");
        aircraft.value = null;
    }
});
</script>

<template>
    <div class="block">
        <h5>{{ aircraft?.Aircraft }}</h5>
        <h2>{{ aircraft?.AircraftName }}</h2>
        <div>
            <img src="./../../assets/aircraft.png" />
        </div>
        <div v-for="item in aircraft?.BasicDescription">
            <p>{{ item }}</p>
        </div>
        <div class="card-info">
            <n-card v-for="(item, index) in attr" :key="index" :title="item">
                <template v-if="index === 0">
                    {{ aircraft?.SeatCapacity }}
                </template>
                <template v-else-if="index === 1">
                    {{ aircraft?.CabinHeight }}
                </template>
                <template v-else-if="index === 2">
                    {{ aircraft?.CargoVolume }}
                </template>
                <template v-else-if="index === 3">
                    {{ aircraft?.Range }}
                </template>
                <template v-else-if="index === 4">
                    {{ aircraft?.MaxTakeoffWeight }}
                </template>
            </n-card>
        </div>
        <div v-if="aircraft?.InteriorDescription">
            <h2>Интерьер</h2>
            <div v-for="item in aircraft.InteriorDescription">
                <p>{{ item }}</p>
            </div>
        </div>
        <div v-if="aircraft?.PriceDescription">
            <h2>Цена</h2>
            <div v-for="item in aircraft.PriceDescription">
                <p>{{ item }}</p>
            </div>
        </div>
        <n-carousel
            effect="custom"
            :transition-props="{ name: 'creative' }"
            show-arrow
            style="width: 100%; height: 240px"
        >
            <img class="carousel-img" src="./../../assets/aircraft.png" />
            <img class="carousel-img" src="./../../assets/aircraft.png" />
            <img class="carousel-img" src="./../../assets/aircraft.png" />
            <img class="carousel-img" src="./../../assets/aircraft.png" />
        </n-carousel>
    </div>
</template>
<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: contain;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
    opacity: 0;
    transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
    transition: all 0.3s ease;
}
.block {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
}
.card-info {
    display: flex;
}
</style>
