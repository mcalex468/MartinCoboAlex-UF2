import { ref } from 'vue';
import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json';

export function useBeques() {
  const dades = ref([]);
  const anys = ref([]);
  const centres = ref([]);
  const dadesCentre = ref([]);

  const fetchBeques = async () => {
    try {
      const response = await axios.get(API_URL);
      data.value = response.data;
    } catch (err) {
      console.error('Error cargando datos:', err);
    }
  };

  const fetchCentres = (any) => {
    centres.value = [...new Set(dades.value.filter(datos => datos.any === any).map(datos => datos.tipus_de_centres))];
  };

  const fetchDetallCentre = (any, centre) => {
    dadesCentre.value = dades.value.filter(datos => datos.any === any && datos.tipus_de_centres === centre);
  };

  return { dades, anys, centres, dadesCentre, fetchBeques, fetchCentres, fetchDetallCentre };
}
