import { Meme } from '@/data/types';
import { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import { editModalSchema } from '../model';
import { z } from 'zod';

export interface EditModalProps {
  meme: Meme;
}

export type EditModalSchema = z.infer<typeof editModalSchema>;

export interface EditModalContentProps {
  onClose: () => void;
  register: UseFormRegister<EditModalSchema>;
  control: Control<EditModalSchema>;
  errors: FieldErrors<EditModalSchema>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
}
