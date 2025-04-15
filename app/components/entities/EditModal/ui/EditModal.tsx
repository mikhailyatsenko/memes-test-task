import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react';
import { Input } from '@heroui/input';
import { EditModalProps } from '../types';
import { NumberInput } from '@heroui/number-input';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditModalSchema, editModalSchema } from '../model';
import { EDIT_MODAL_CONSTANTS } from '../constants';
import { onSave } from '../lib/onSave';

export const EditModal: React.FC<EditModalProps> = ({ meme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditModalSchema>({
    resolver: zodResolver(editModalSchema),
    defaultValues: {
      id: meme.id,
      name: meme.name,
      imageUrl: meme.imageUrl,
      likes: meme.likes,
    },
  });

  const onSubmit = (data: EditModalSchema) => {
    try {
      onSave(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {EDIT_MODAL_CONSTANTS.EDIT_BUTTON_TEXT}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <form
              id={EDIT_MODAL_CONSTANTS.FORM_ID}
              onSubmit={handleSubmit(onSubmit)}
            >
              <ModalHeader className="flex flex-col gap-1">
                {EDIT_MODAL_CONSTANTS.MODAL_TITLE}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Controller
                    name="id"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label={EDIT_MODAL_CONSTANTS.ID_LABEL}
                        isDisabled
                        isReadOnly
                      />
                    )}
                  />
                  {errors.id && (
                    <p className="text-red-500 text-sm">{errors.id.message}</p>
                  )}

                  <Input
                    isRequired
                    {...register('name')}
                    label={EDIT_MODAL_CONSTANTS.NAME_LABEL}
                    placeholder={EDIT_MODAL_CONSTANTS.NAME_PLACEHOLDER}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />

                  <Input
                    isRequired
                    {...register('imageUrl')}
                    label={EDIT_MODAL_CONSTANTS.IMAGE_URL_LABEL}
                    placeholder={EDIT_MODAL_CONSTANTS.IMAGE_URL_PLACEHOLDER}
                    isInvalid={!!errors.imageUrl}
                    errorMessage={errors.imageUrl?.message}
                  />

                  <Controller
                    name="likes"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        min={EDIT_MODAL_CONSTANTS.MIN_LIKES}
                        max={EDIT_MODAL_CONSTANTS.MAX_LIKES}
                        {...field}
                        label={EDIT_MODAL_CONSTANTS.LIKES_LABEL}
                        placeholder={EDIT_MODAL_CONSTANTS.LIKES_PLACEHOLDER}
                        isInvalid={!!errors.likes}
                        errorMessage={errors.likes?.message}
                      />
                    )}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  {EDIT_MODAL_CONSTANTS.CLOSE_BUTTON_TEXT}
                </Button>
                <Button color="primary" type="submit">
                  {EDIT_MODAL_CONSTANTS.SAVE_BUTTON_TEXT}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
