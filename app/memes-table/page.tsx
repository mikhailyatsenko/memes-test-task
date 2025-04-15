import { MemeTable } from '@/components/widgets/MemeTable';

export default async function MemesTablePage() {
  const memes = await fetch('http://localhost:3000/api/memes');
  const memesResponse = await memes.json();
  const memesData = memesResponse.data;
  return <MemeTable memes={memesData} />;
}
