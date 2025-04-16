import { Meme } from '@/data/types';
import { UseFormRegister, Control, FieldErrors } from 'react-hook-form';

export interface EditModalProps {
  meme: Meme;
}

export interface EditModalSchema {
  id: number;
  name: string;
  imageUrl: string;
  likes: number;
}

export interface EditModalContentProps {
  onClose: () => void;
  register: UseFormRegister<EditModalSchema>;
  control: Control<EditModalSchema>;
  errors: FieldErrors<EditModalSchema>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
}
