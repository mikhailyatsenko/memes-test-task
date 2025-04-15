import { z } from 'zod';

export const editModalSchema = z.object({
  id: z.number().int(),
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be less than 100 characters'),
  imageUrl: z
    .string()
    .url('Please enter a valid URL')
    .refine(
      (url) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url),
      'URL must point to an image file (jpg, jpeg, png, gif, webp, svg)',
    ),
  likes: z
    .number()
    .int()
    .min(0, 'Likes must be at least 0')
    .max(99, 'Likes must be less than 100'),
});

export type EditModalSchema = z.infer<typeof editModalSchema>;
