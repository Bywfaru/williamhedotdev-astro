import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export type TerminalManSectionProps = PropsWithChildren<{
  title: string;
}>;

export const TerminalManSection: FC<TerminalManSectionProps> = ({
  children,
  title,
}) => {
  return (
    <div>
      <span className={clsx('uppercase', 'font-bold')}>{title}</span>

      <div
        className={clsx([
          'pl-[calc(1rem*2)]',
          'md:pl-[calc(1rem*3.5)]',
          'flex',
          'flex-col',
          'transition-all',
        ])}
      >
        {children}
      </div>
    </div>
  );
};
