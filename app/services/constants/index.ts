export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  MEMES: '/api/memes',
} as const;
