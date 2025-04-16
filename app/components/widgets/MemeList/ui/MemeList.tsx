import { MemeListProps } from '../types';
import { Card, CardBody, Image, Link, CardFooter } from '@heroui/react';

export const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ justifyItems: 'center' }}
      >
        {memes.map((meme, index) => (
          <Card key={index} shadow="sm" className="w-full max-w-[300px]">
            <CardBody className="overflow-visible p-0">
              <Image
                alt={meme.name}
                className="w-full object-cover"
                radius="lg"
                shadow="sm"
                src={meme.imageUrl}
                width={300}
                height={300}
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
