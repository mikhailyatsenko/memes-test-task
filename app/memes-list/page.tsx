import { MemeList } from '@/components/widgets/MemeList';
import { getMemesWithCookies } from '@/services/lib/getMemesWithCookies';
import { cookies } from 'next/headers';
import { MEMES_STORAGE_KEY } from '@/components/entities/EditModal/constants';
import { PageWrapper } from '@/components/shared/ui/PageWrapper';

export default async function MemesListPage() {
  const cookieStore = await cookies();
  const memesCookie = cookieStore.get(MEMES_STORAGE_KEY);

  const memesData = await getMemesWithCookies(memesCookie);
  return (
    <PageWrapper>
      <MemeList memes={memesData} />
    </PageWrapper>
  );
}
