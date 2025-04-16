import { EditModalProps, EditModalSchema } from '../types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editModalSchema } from '../model';
import { EDIT_MODAL_CONSTANTS, EDIT_MODAL_TOAST_CONSTANTS } from '../constants';
import { onSave } from '../lib/onSave';
import { useRouter } from 'next/navigation';
import EditIcon from '@/assets/icons/edit-icon.svg';
import { EditModalContent } from './EditModalContent';
import { useDisclosure, Modal } from '@heroui/modal';
import { Button } from '@heroui/button';
import { addToast } from '@heroui/toast';

export const EditModal: React.FC<EditModalProps> = ({ meme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<EditModalSchema>({
    resolver: zodResolver(editModalSchema),
    defaultValues: {
      id: meme.id,
      name: meme.name,
      imageUrl: meme.imageUrl,
      likes: meme.likes,
    },
    mode: 'onChange',
  });

  const onSubmit = (data: EditModalSchema) => {
    try {
      onSave(data);
      onClose();

      router.refresh();

      addToast({
        title: EDIT_MODAL_TOAST_CONSTANTS.SUCCESS_TITLE,
        description: EDIT_MODAL_TOAST_CONSTANTS.SUCCESS_DESCRIPTION,
        color: 'secondary',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button
        color="secondary"
        onPress={onOpen}
        endContent={<EditIcon className="w-4 h-4 fill-white" />}
      >
        {EDIT_MODAL_CONSTANTS.EDIT_BUTTON_TEXT}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <EditModalContent
          isValid={isValid}
          onClose={onClose}
          register={register}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
        />
      </Modal>
    </div>
  );
};
