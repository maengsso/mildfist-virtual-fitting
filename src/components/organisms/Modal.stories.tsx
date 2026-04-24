import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../atoms/Button';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const Basic: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button size="lg" onClick={() => setOpen(true)}>
          모달 열기
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="확인"
          footer={
            <>
              <Button variant="secondary" size="lg" onClick={() => setOpen(false)}>
                취소
              </Button>
              <Button size="lg" onClick={() => setOpen(false)}>
                확인
              </Button>
            </>
          }
        >
          이 작업을 진행하시겠습니까?
        </Modal>
      </div>
    );
  },
};

export const ReportModalExact: StoryObj = {
  name: '스타일 신고 (실 사용)',
  render: () => {
    const REASONS = ['부적절한 이미지', '저작권 침해', '스팸/광고', '불쾌한 콘텐츠', '기타'];
    const [open, setOpen] = useState(true);
    const [reason, setReason] = useState<string>('');

    return (
      <>
        <Button size="lg" onClick={() => setOpen(true)}>
          신고 모달 열기
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="스타일 신고"
          width={384}
          footer={
            <>
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => setOpen(false)}
              >
                취소
              </Button>
              <Button size="lg" fullWidth disabled={!reason} onClick={() => setOpen(false)}>
                신고하기
              </Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {REASONS.map((r) => {
              const selected = reason === r;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setReason(r)}
                  style={{
                    textAlign: 'left',
                    padding: 12,
                    fontSize: 14,
                    background: selected ? '#e60023' : '#f6f6f3',
                    color: selected ? '#ffffff' : '#211922',
                    borderRadius: 12,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </Modal>
      </>
    );
  },
};
