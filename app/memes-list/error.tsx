'use client';
import { ERROR_TITLE } from '../components/shared/constants';

export default function MemesTableError({ error }: { error: Error }) {
  return (
    <div className="flex justify-center items-center h-full">
      {ERROR_TITLE}: {error.message}
    </div>
  );
}
