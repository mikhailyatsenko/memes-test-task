import { Meme } from './types';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const mockMemes: Meme[] = [
  {
    id: 1,
    name: 'Orendodavets',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-1.webp',
    likes: 42,
  },
  {
    id: 2,
    name: 'Novyny',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-2.webp',
    likes: 37,
  },
  {
    id: 3,
    name: 'Millenials',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-3.webp',
    likes: 29,
  },
  {
    id: 4,
    name: 'Pyrizhok',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-4.webp',
    likes: 31,
  },
  {
    id: 5,
    name: 'Experty',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-5.webp',
    likes: 45,
  },
  {
    id: 6,
    name: 'HR',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-6.webp',
    likes: 33,
  },
  {
    id: 7,
    name: 'Nevdacha',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-7.webp',
    likes: 28,
  },
  {
    id: 8,
    name: 'Vytraty',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-8.webp',
    likes: 39,
  },
  {
    id: 9,
    name: 'Dila',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-9.webp',
    likes: 25,
  },
  {
    id: 10,
    name: 'Bez tsukru',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-10.webp',
    likes: 35,
  },
];
