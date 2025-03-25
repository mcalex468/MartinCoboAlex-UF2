import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json';

export function useBeques() {
  const data = ref([]);

  // Función para cargar los datos desde la API
  const fetchBeques = async () => {
    try {
      const response = await axios.get(API_URL);
      data.value = response.data;
    } catch (err) {
      console.error('Error cargando datos:', err);
    }
  };

  onMounted(fetchBeques);

  // Extraer años únicos y ordenarlos
  const anys = computed(() =>
    [...new Set(data.value.map(item => item.any_convocatoria))].sort((a, b) => b - a)
  );

  // Función para obtener los centros por año
  const getCentrosByYear = (year) => {
    return [...new Set(data.value
      .filter(item => item.any_convocatoria === year)
      .map(item => item.nom_ens))].sort();
  };

  // Función para obtener los detalles de las becas (Falta esta función en tu código)
  const getBequesDetail = (year, centre) => {
    return data.value.filter(item =>
      item.any_convocatoria === year && item.nom_ens === centre
    );
  };

  return { data, anys, getCentrosByYear, getBequesDetail };
}
