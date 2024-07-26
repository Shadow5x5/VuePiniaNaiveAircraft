import { useAircraftStore } from "../../store/useAircraftStore";
import { computed } from "vue";
export default function usePage() {
    const store = useAircraftStore();

    const displayedAircrafts = computed(() => {
        return store.filteredAircrafts.length > 0
            ? store.filteredAircrafts
            : store.aircrafts;
    });

    return {
        store,
        displayedAircrafts,
    };
}
