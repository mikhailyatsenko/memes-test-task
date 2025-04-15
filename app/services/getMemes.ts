import { API_URL, API_ENDPOINTS } from './constants';

export const getMemes = async () => {
  try {
    const memesData = await fetch(`${API_URL}${API_ENDPOINTS.MEMES}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!memesData.ok) {
      throw new Error(`Failed to fetch memes: ${memesData.status}`);
    }

    const memesResponse = await memesData.json();
    return memesResponse.data;
  } catch (error) {
    console.error('Error fetching memes:', error);
    throw error;
  }
};
