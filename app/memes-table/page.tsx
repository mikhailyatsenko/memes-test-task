import { MemeTable } from '@/components/widgets/MemeTable';
import { getMemes } from '@/services/getMemes';
export default async function MemesTablePage() {
  const memesData = await getMemes();
  console.log(memesData);
  return <MemeTable memes={memesData} />;
}
