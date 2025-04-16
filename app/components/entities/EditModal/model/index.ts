import { z } from 'zod';
import { VALIDATION } from '../constants';

export const editModalSchema = z.object({
  id: z.number().int(),
  name: z
    .string()
    .min(VALIDATION.NAME.MIN_LENGTH, VALIDATION.NAME.MIN_LENGTH_ERROR)
    .max(VALIDATION.NAME.MAX_LENGTH, VALIDATION.NAME.MAX_LENGTH_ERROR),
  imageUrl: z
    .string()
    .url(VALIDATION.IMAGE_URL.URL_ERROR)
    .refine(
      (url) => VALIDATION.IMAGE_URL.ALLOWED_EXTENSIONS.test(url),
      VALIDATION.IMAGE_URL.IMAGE_FORMAT_ERROR,
    ),
  likes: z
    .number()
    .int()
    .min(VALIDATION.LIKES.MIN, VALIDATION.LIKES.MIN_ERROR)
    .max(VALIDATION.LIKES.MAX, VALIDATION.LIKES.MAX_ERROR),
});
