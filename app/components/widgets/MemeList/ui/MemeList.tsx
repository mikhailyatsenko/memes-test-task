import { MemeListProps } from '../types';
import {
  Card,
  // CardHeader,
  CardBody,
  Image,
  Link,
  CardFooter,
} from '@heroui/react';

export const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  return (
    <div>
      <h1>Meme List</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ justifyItems: 'center' }}
      >
        {memes.map((meme, index) => (
          <Card
            key={index}
            // isPressable
            shadow="sm"
            className="w-full max-w-[300px]"
            // onPress={() => console.log('item pressed')}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={meme.name}
                className="w-full object-cover"
                radius="lg"
                shadow="sm"
                src={meme.imageUrl}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between flex-nowrap gap-2">
              <b className="overflow-hidden text-ellipsis whitespace-nowrap">
                {meme.name}
              </b>
              <p className="text-default-500 whitespace-nowrap">
                ❤️ {meme.likes}
              </p>
              <Link href={meme.imageUrl}>🔗</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
