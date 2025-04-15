import { Meme } from './types';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const mockMemes: Meme[] = [
  {
    id: 1,
    name: 'Doge',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-1.png',
    likes: 42,
  },
  {
    id: 2,
    name: 'Grumpy Cat',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-2.png',
    likes: 37,
  },
  {
    id: 3,
    name: 'Success Kid',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-3.png',
    likes: 29,
  },
  {
    id: 4,
    name: 'Bad Luck Brian',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-4.png',
    likes: 31,
  },
  {
    id: 5,
    name: 'Distracted Boyfriend',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-5.png',
    likes: 45,
  },
  {
    id: 6,
    name: 'Drake Hotline Bling',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-6.png',
    likes: 33,
  },
  {
    id: 7,
    name: 'Two Buttons',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-7.png',
    likes: 28,
  },
  {
    id: 8,
    name: 'Hide the Pain Harold',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-8.png',
    likes: 39,
  },
  {
    id: 9,
    name: 'Y U No',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-9.png',
    likes: 25,
  },
  {
    id: 10,
    name: 'Futurama Fry',
    imageUrl: NEXT_PUBLIC_API_URL + '/memes/meme-10.png',
    likes: 35,
  },
];
