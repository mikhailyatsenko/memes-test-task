import { EditModalSchema } from '../model';
import { Meme } from '@/data/types';
import { MEMES_STORAGE_KEY } from '../constants';

export const onSave = (data: EditModalSchema): void => {
  try {
    const existingMemesJson = localStorage.getItem(MEMES_STORAGE_KEY);
    const existingMemes: Meme[] = existingMemesJson
      ? JSON.parse(existingMemesJson)
      : [];

    const memeIndex = existingMemes.findIndex((meme) => meme.id === data.id);

    if (memeIndex !== -1) {
      existingMemes[memeIndex] = data;
    } else {
      existingMemes.push(data);
    }

    localStorage.setItem(MEMES_STORAGE_KEY, JSON.stringify(existingMemes));
  } catch (error) {
    throw new Error(`Error saving meme to localStorage: ${error}`);
  }
};
