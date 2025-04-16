import { EditModalSchema } from '../types';
import { Meme } from '@/data/types';
import { MEMES_STORAGE_KEY } from '@/components/shared/constants';
import Cookies from 'js-cookie';
import { ERROR_COOKIE } from '../constants';
export const onSave = (data: EditModalSchema): void => {
  try {
    const existingMemesJson = Cookies.get(MEMES_STORAGE_KEY);
    const existingMemes: Meme[] = existingMemesJson
      ? JSON.parse(existingMemesJson)
      : [];

    const memeIndex = existingMemes.findIndex((meme) => meme.id === data.id);

    if (memeIndex !== -1) {
      existingMemes[memeIndex] = data;
    } else {
      existingMemes.push(data);
    }

    Cookies.set(MEMES_STORAGE_KEY, JSON.stringify(existingMemes), {
      expires: 30,
    });
  } catch (error) {
    throw new Error(`${ERROR_COOKIE} ${error}`);
  }
};
