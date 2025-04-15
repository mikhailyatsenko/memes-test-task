import { PageWrapper } from '@/components/shared/ui/PageWrapper';
import { MemeList } from '@/components/widgets/MemeList';
import { getMemes } from '@/services/getMemes';

export default async function MemesListPage() {
  const memesData = await getMemes();
  return (
    <PageWrapper>
      <MemeList memes={memesData} />
    </PageWrapper>
  );
}
