'use client';

import { Image as ImageComponent } from '@heroui/react';
import { ImageProps } from '../types';
import { useState } from 'react';

export const Image: React.FC<ImageProps> = ({ errorSrc, ...props }) => {
  const [isError, setIsError] = useState(false);

  return (
    <ImageComponent
      {...props}
      onError={() => setIsError(true)}
      src={isError ? errorSrc : props.src}
    />
  );
};
