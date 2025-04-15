'use client';

import { MEMES_TABLE_ARIA_LABEL, MEMES_TABLE_COLUMNS } from '../constants';
import { MemeTableProps } from '../types';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@heroui/react';

export const MemeTable: React.FC<MemeTableProps> = ({ memes }) => {
  console.log(memes);
  return (
    <Table isStriped aria-label={MEMES_TABLE_ARIA_LABEL}>
      <TableHeader>
        {MEMES_TABLE_COLUMNS.map((column) => (
          <TableColumn key={column.id}>{column.name}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {memes.map((meme) => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.name}</TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              <Button>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
