import { MemeTable } from '@/components/widgets/MemeTable';
import { getMemes } from '@/services/getMemes';
import { PageWrapper } from '@/components/shared/ui/PageWrapper';

export default async function MemesTablePage() {
  const memesData = await getMemes();
  console.log(memesData);
  return (
    <PageWrapper>
      <MemeTable memes={memesData} />
    </PageWrapper>
  );
}
