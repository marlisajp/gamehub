import platforms from '../data/platforms';
import useData from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = (selectedPlatform: Platform | null) => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;
