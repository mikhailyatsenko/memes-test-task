import { API_URL } from './constants';

export const getMemes = async () => {
  const memesData = await fetch(`${API_URL}/api/memes`);
  if (!memesData.ok) {
    throw new Error('Failed to fetch memes');
  }
  const memesResponse = await memesData.json();
  const memes = memesResponse.data;
  return memes;
};
