export const EDIT_MODAL_CONSTANTS = {
  MODAL_TITLE: 'Edit Meme',

  ID_LABEL: 'Id',
  NAME_LABEL: 'Name',
  IMAGE_URL_LABEL: 'Image URL',
  LIKES_LABEL: 'Likes',

  NAME_PLACEHOLDER: 'Enter name',
  IMAGE_URL_PLACEHOLDER: 'Enter image URL',
  LIKES_PLACEHOLDER: 'Enter likes',

  EDIT_BUTTON_TEXT: 'Edit',
  CLOSE_BUTTON_TEXT: 'Close',
  SAVE_BUTTON_TEXT: 'Save',

  FORM_ID: 'edit-meme-form',

  MIN_LIKES: 0,
  MAX_LIKES: 99,
} as const;

export const MEMES_STORAGE_KEY = 'memes';

export const EDIT_MODAL_TOAST_CONSTANTS = {
  SUCCESS_TITLE: 'Meme updated successfully',
  SUCCESS_DESCRIPTION: 'Your are awesome!',
} as const;
