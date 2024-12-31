import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const TerminalBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsx(
        'flex',
        'bg-terminal-bg',
        'flex-grow',
        'flex-col',
        'overflow-x-hidden',
        'overflow-y-auto',
        'w-full',
        'font-mono',
      )}
    >
      {children}
    </div>
  );
};
