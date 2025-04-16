import { Meme } from '@/data/types';
import { getMemes } from '../getMemes';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const getMemesWithCookies = async (
  memesCookie: RequestCookie | undefined,
): Promise<Meme[]> => {
  try {
    const apiMemes = await getMemes();

    if (!memesCookie) {
      return apiMemes;
    }

    const savedMemes: Meme[] = JSON.parse(memesCookie.value);

    const savedMemesMap = new Map<number, Meme>();
    savedMemes.forEach((meme) => {
      savedMemesMap.set(meme.id, meme);
    });

    const mergedMemes = apiMemes.map((apiMeme: Meme) => {
      if (savedMemesMap.has(apiMeme.id)) {
        return savedMemesMap.get(apiMeme.id)!;
      }
      return apiMeme;
    });

    return mergedMemes;
  } catch (error) {
    console.error('Error fetching memes with cookies:', error);
    throw error;
  }
};
