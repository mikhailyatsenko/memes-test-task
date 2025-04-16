import { Input } from '@heroui/input';
import { NumberInput } from '@heroui/number-input';
import { Controller } from 'react-hook-form';
import { EDIT_MODAL_CONSTANTS } from '../constants';
import { EditModalContentProps } from '../types';
import {
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from '@heroui/modal';
import { Button } from '@heroui/button';
export const EditModalContent: React.FC<EditModalContentProps> = ({
  onClose,
  register,
  control,
  errors,
  handleSubmit,
  isValid,
}) => {
  return (
    <ModalContent>
      <form id={EDIT_MODAL_CONSTANTS.FORM_ID} onSubmit={handleSubmit}>
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
                  value={field.value}
                  onValueChange={(newValue) => field.onChange(Number(newValue))} // to properly validate the number input
                  min={EDIT_MODAL_CONSTANTS.MIN_LIKES}
                  max={EDIT_MODAL_CONSTANTS.MAX_LIKES}
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
          <Button isDisabled={!isValid} color="primary" type="submit">
            {EDIT_MODAL_CONSTANTS.SAVE_BUTTON_TEXT}
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  );
};
