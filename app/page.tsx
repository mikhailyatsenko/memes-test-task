import {
  GRADIENT_TEXT_CLASSES,
  MAIN_PAGE_DESCRIPTION,
  MAIN_PAGE_TITLE,
} from './components/shared/constants';
import { PageWrapper } from './components/shared/ui/PageWrapper';

export default function Home() {
  return (
    <PageWrapper className="flex items-center flex-col gap-4 justify-center h-full">
      <h1
        className={`opacity-0 text-center md:text-8xl text-5xl animate-from-bottom-appear ${GRADIENT_TEXT_CLASSES}`}
      >
        {MAIN_PAGE_TITLE}
      </h1>
      <p className="opacity-0 text-center text-2xl font-bold animate-from-bottom-appear [animation-delay:0.5s]">
        {MAIN_PAGE_DESCRIPTION}
      </p>
    </PageWrapper>
  );
}
