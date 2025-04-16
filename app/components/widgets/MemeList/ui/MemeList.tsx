import { MemeListProps } from '../types';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Link } from '@heroui/link';
import { Image } from '@/components/shared/ui/Image';
import errorImg from '@/assets/error.webp';

export const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ justifyItems: 'center' }}
      >
        {memes.map((meme, index) => (
          <Card key={index} shadow="sm" className="w-full">
            <CardBody className="overflow-visible aspect-square p-0">
              <Image
                errorSrc={errorImg.src}
                alt={meme.name}
                className="w-full object-cover"
                radius="lg"
                shadow="sm"
                src={meme.imageUrl}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-row justify-between flex-nowrap gap-4">
              <b className="overflow-hidden text-ellipsis whitespace-nowrap">
                {meme.name}
              </b>
              <p className="text-center whitespace-nowrap ml-auto">
                ❤️ {meme.likes}
              </p>
              <Link className="justify-end" href={meme.imageUrl}>
                🔗
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
