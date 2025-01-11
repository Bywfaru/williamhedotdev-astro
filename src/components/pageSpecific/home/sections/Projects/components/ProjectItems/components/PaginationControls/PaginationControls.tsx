import { Button } from '@/components/pageSpecific/home/general/Button';
import clsx from 'clsx';
import { MoveLeft, MoveRight } from 'lucide-react';
import type { FC } from 'react';

export type PaginationControlsProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  currentPage: number;
  totalPages: number;
};

export const PaginationControls: FC<PaginationControlsProps> = ({
  onPrevClick,
  onNextClick,
  currentPage,
  totalPages,
}) => {
  return (
    <div
      className={clsx([
        'w-full',
        'flex',
        'justify-between',
        'items-center',
        'gap-5',
        'font-mono',
      ])}
    >
      <Button
        type="button"
        variant="secondary"
        className={clsx(['flex', 'gap-2', 'items-center'])}
        onClick={onPrevClick}
      >
        <>
          {' '}
          <MoveLeft size={16} />{' '}
          <span className={clsx(['underline'])}>Prev</span>
        </>
      </Button>

      <span className={clsx(['text-accent-1', 'text-xl'])}>
        {currentPage}/{totalPages}
      </span>

      <Button
        type="button"
        variant="secondary"
        className={clsx(['flex', 'gap-2', 'items-center'])}
        onClick={onNextClick}
      >
        <>
          <span className={clsx(['underline'])}>Next</span>
          <MoveRight size={12} />
        </>
      </Button>
    </div>
  );
};
