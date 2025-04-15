import { Meme } from '@/api/memes/types';
import { MemeTableProps } from '../types';

export const MemeTable: React.FC<MemeTableProps> = ({ memes }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memes.map((meme: Meme) => (
            <tr key={meme.id}>
              <td>{meme.id}</td>
              <td>{meme.name}</td>
              <td>{meme.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
