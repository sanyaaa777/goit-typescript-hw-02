import axios from 'axios';
import { ApiResponse, Image } from './types';

const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '3_kINNjGZe31_dnJxfdX_eIo8tDosD-tOoA3VbH5STs';

export const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  const response = await axios.get<ApiResponse>(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data.results;
};
