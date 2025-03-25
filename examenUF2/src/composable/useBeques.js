import { ref, onMounted } from 'vue';
import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json';

export function useBeques() {
  const data = ref([]);

  const fetchBeques = async () => {
    try {
      const response = await axios.get(API_URL);
      data.value = response.data;
    } catch (err) {
     console.log('Error cargando datos');
    }
  };

  onMounted(fetchBeques);

  return { data };
}

