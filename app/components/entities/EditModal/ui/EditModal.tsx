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
    console.log(data);
    // Here you would typically update the meme data
    // onClose();
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <form id="edit-meme-form" onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Edit Meme
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Controller
                    name="id"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label="Id"
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
                    label="Name"
                    placeholder="Enter name"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />

                  <Input
                    isRequired
                    {...register('imageUrl')}
                    label="Image URL"
                    placeholder="Enter image URL"
                    isInvalid={!!errors.imageUrl}
                    errorMessage={errors.imageUrl?.message}
                  />

                  <Controller
                    name="likes"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label="Likes"
                        placeholder="Enter likes"
                        isInvalid={!!errors.likes}
                        errorMessage={errors.likes?.message}
                      />
                    )}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
