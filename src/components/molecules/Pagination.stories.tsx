import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const Middle: StoryObj = {
  render: () => {
    const [p, setP] = useState(3);
    return <Pagination page={p} totalPages={10} onChange={setP} />;
  },
};

export const FirstPage: StoryObj = {
  render: () => {
    const [p, setP] = useState(1);
    return <Pagination page={p} totalPages={5} onChange={setP} />;
  },
};

export const LastPage: StoryObj = {
  render: () => {
    const [p, setP] = useState(5);
    return <Pagination page={p} totalPages={5} onChange={setP} />;
  },
};
