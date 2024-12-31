import type { FC, PropsWithChildren } from 'react';
import { TerminalBody } from './components/TerminalBody';
import { TerminalTitleBar } from './components/TerminalTitleBar';
import clsx from 'clsx';

export type TerminalWindowProps = PropsWithChildren<{
  title?: string;
}>;

export const TerminalWindow: FC<TerminalWindowProps> = ({
  children,
  title,
}) => {
  return (
    <div
      className={clsx([
        'flex',
        'flex-col',
        'w-full',
        'h-[calc(100vh-1.5rem)]',
        'text-terminal-text-1',
        'rounded-t-lg',
        'overflow-hidden',
        'border',
        'border-[black]',
        'shadow-lg',
        'max-w-screen-md',
        'selection:bg-terminal-text-1',
        'selection:text-terminal-bg',
      ])}
    >
      <TerminalTitleBar title={title} />

      <TerminalBody>{children}</TerminalBody>
    </div>
  );
};
