export const getMemes = async () => {
  const memesData = await fetch('http://localhost:3000/api/memes');
  if (!memesData.ok) {
    throw new Error('Failed to fetch memes');
  }
  const memesResponse = await memesData.json();
  const memes = memesResponse.data;
  return memes;
};
