'use client';

export default function MemesTableError({ error }: { error: Error }) {
  return <div>Ooops! Something went wrong: {error.message}</div>;
}
