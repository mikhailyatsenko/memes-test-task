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

export const EDIT_MODAL_TOAST_CONSTANTS = {
  SUCCESS_TITLE: 'Meme updated successfully',
  SUCCESS_DESCRIPTION: 'Your are awesome!',
} as const;

export const VALIDATION = {
  NAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 100,
    MIN_LENGTH_ERROR: 'Name must be at least 3 characters',
    MAX_LENGTH_ERROR: 'Name must be less than 100 characters',
  },
  IMAGE_URL: {
    URL_ERROR: 'Please enter a valid URL',
    IMAGE_FORMAT_ERROR:
      'URL must point to an image file (jpg, jpeg, png, gif, webp, svg)',
    ALLOWED_EXTENSIONS: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
  },
  LIKES: {
    MIN: 0,
    MAX: 99,
    MIN_ERROR: 'Likes must be at least 0',
    MAX_ERROR: 'Likes must be less than 100',
  },
} as const;

export const ERROR_COOKIE = 'Error saving meme to cookies:';
