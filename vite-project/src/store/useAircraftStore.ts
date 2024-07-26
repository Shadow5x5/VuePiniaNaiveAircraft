import { defineStore } from "pinia";
import axios from "axios";
import { reactive, ref, watch } from "vue";

export interface Aircraft {
    id: string;
    BasicDescription: string[];
    InteriorDescription: string[];
    PriceDescription: string[];
    Aircraft: string;
    AircraftCategory: string;
    SeatCapacity: string;
    CabinHeight: string;
    CargoVolume: string;
    Range: string;
    MaxTakeoffWeight: string;
    CruisingSpeed: string;
    MaximumFlightAltitude: string;
    AircraftLength: string;
    AircraftHeight: string;
    Wingspan: string;
    MaximumNumberOfPassengers: string;
    CabinWidth: string;
    CabinLength: string;
    CabinVolume: string;
    AircraftName: string;
    MainImg: string;
    SliderImages: string[];
}

export interface FilterOptions {
    categories?: string[];
    manufacturers?: string[];
    minPassenger?: number;
    maxPassenger?: number;
}

export const useAircraftStore = defineStore("aircraft", () => {
    const aircrafts = ref<Aircraft[]>([]);
    const filterOptions = ref<FilterOptions>({
        categories: [
            "Тяжелые",
            "Средние",
            "Турбопропы",
            "Сверхтяжелые",
            "Поршневые",
            "Легкие",
            "Электрические",
            "Малые",
            "Большие",
            "Дальнемагистральные",
            "Бизнес-лайнеры",
        ],
        manufacturers: [
            "Mooney",
            "Sikorsky",
            "Leonardo",
            "HondaJet",
            "Grob",
            "Boeing",
            "Ка-62",
            "Enstrom",
            "Hawker",
            "Embraer",
            "Ми-8/17",
            "Sukhoi",
            "Westwind",
            "Avro",
            "Eclipse",
            "Airbus",
            "Ансат",
            "Piper",
            "Learjet",
            "Piaggio",
            "Daher",
            "PiperJet",
            "Quest",
            "Pilatus",
            "Epic",
            "Ми-171А2",
            "Eviation",
            "Nextant",
            "Dassault",
            "Cessna",
            "Ми-38",
            "Adamjet",
            "Ми-34",
            "Bell",
            "Beechcraft",
            "Bombardier",
            "Robinson",
            "Gulfstream",
            "MD",
        ],
        minPassenger: 1,
        maxPassenger: 100,
    });
    const selectedFilterOptions = reactive<FilterOptions>({
        categories: [],
        manufacturers: [],
        minPassenger: 1,
        maxPassenger: 100,
    });
    const filteredAircrafts = ref<Aircraft[]>([]);
    const selectedAircraft = ref<Aircraft | null>(null);

    const fetchAircrafts = async (query: string) => {
        try {
            const response = await axios.get("http://localhost:3000/search", {
                params: { query },
            });
            aircrafts.value = response.data;
        } catch (error) {
            console.error("Error fetching aircrafts:", error);
        }
    };

    const setAircrafts = (newAircrafts: Aircraft[]) => {
        aircrafts.value = newAircrafts;
    };

    const setFilterOptions = (newFilterOptions: FilterOptions) => {
        filterOptions.value = newFilterOptions;
    };

    const setSelectedAircraft = (aircraft: Aircraft) => {
        selectedAircraft.value = aircraft;
    };

    const getAircraft = (id: string) => {
        return aircrafts.value.find((item) => id === item.id);
    };

    const clearFilters = () => {
        filterOptions.value = {};
    };

    const filterByCategory = (
        item: Aircraft,
        selectedFilterOptions: FilterOptions
    ) => {
        return selectedFilterOptions.categories?.length
            ? selectedFilterOptions.categories.includes(item.AircraftCategory)
            : true;
    };

    const filterByManufacturer = (
        item: Aircraft,
        selectedFilterOptions: FilterOptions
    ) => {
        return selectedFilterOptions.manufacturers?.length
            ? selectedFilterOptions.manufacturers.includes(item.Aircraft)
            : true;
    };

    const filterByMinPassenger = (
        item: Aircraft,
        selectedFilterOptions: FilterOptions
    ) => {
        return selectedFilterOptions.minPassenger !== undefined
            ? parseInt(item.MaximumNumberOfPassengers) >=
                  selectedFilterOptions.minPassenger
            : true;
    };

    const filterByMaxPassenger = (
        item: Aircraft,
        selectedFilterOptions: FilterOptions
    ) => {
        return selectedFilterOptions.maxPassenger !== undefined
            ? parseInt(item.MaximumNumberOfPassengers) <=
                  selectedFilterOptions.maxPassenger
            : true;
    };

    const applyFilters = () => {
        filteredAircrafts.value = aircrafts.value.filter(
            (item) =>
                filterByCategory(item, selectedFilterOptions) &&
                filterByManufacturer(item, selectedFilterOptions) &&
                filterByMinPassenger(item, selectedFilterOptions) &&
                filterByMaxPassenger(item, selectedFilterOptions)
        );
    };

    watch([aircrafts, selectedFilterOptions], applyFilters);

    return {
        aircrafts,
        filterOptions,
        filteredAircrafts,
        selectedAircraft,
        fetchAircrafts,
        setAircrafts,
        setFilterOptions,
        setSelectedAircraft,
        clearFilters,
        applyFilters,
        selectedFilterOptions,
        getAircraft,
    };
});
