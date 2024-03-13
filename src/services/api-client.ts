import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fd156d98b5d447c8982a843da525fe22',
  },
});
