'use client';
// Table component from HeroUI needs 'use client' to work properly

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/table';

import { MEMES_TABLE_ARIA_LABEL, MEMES_TABLE_COLUMNS } from '../constants';
import { MemeTableProps } from '../types';

import { EditModal } from '@/components/entities/EditModal';

export const MemeTable: React.FC<MemeTableProps> = ({ memes }) => {
  return (
    <Table isStriped aria-label={MEMES_TABLE_ARIA_LABEL}>
      <TableHeader>
        {MEMES_TABLE_COLUMNS.map((column) => (
          <TableColumn align="center" key={column.id}>
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {memes.map((meme) => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.name}</TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              <EditModal meme={meme} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
