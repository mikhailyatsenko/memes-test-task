import { MemeTable } from '@/components/widgets/MemeTable';
import { getMemesWithCookies } from '@/services/lib/getMemesWithCookies';
import { cookies } from 'next/headers';
import { MEMES_STORAGE_KEY } from '@/components/entities/EditModal/constants';
import { PageWrapper } from '@/components/shared/ui/PageWrapper';
import { GRADIENT_TEXT_CLASSES } from '@/components/shared/constants';
import { MEMES_TABLE_PAGE_TITLE } from './constants';
export default async function MemesTablePage() {
  const cookieStore = await cookies();
  const memesCookie = cookieStore.get(MEMES_STORAGE_KEY);

  const memesData = await getMemesWithCookies(memesCookie);
  return (
    <PageWrapper>
      <h1
        className={`text-2xl font-bold text-center pb-4 w-fit mx-auto ${GRADIENT_TEXT_CLASSES}`}
      >
        {MEMES_TABLE_PAGE_TITLE}
      </h1>
      <MemeTable memes={memesData} />
    </PageWrapper>
  );
}
