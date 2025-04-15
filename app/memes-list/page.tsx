import { MemeList } from '@/components/widgets/MemeList';
import { getMemes } from '@/services/getMemes';

export default async function MemesListPage() {
  const memesData = await getMemes();
  return <MemeList memes={memesData} />;
}
