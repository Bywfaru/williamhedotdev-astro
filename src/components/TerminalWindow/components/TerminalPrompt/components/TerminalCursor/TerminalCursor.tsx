import clsx from 'clsx';
import type { FC } from 'react';

export type TerminalCursorProps = {
  idle?: boolean;
};

export const TerminalCursor: FC<TerminalCursorProps> = ({ idle = true }) => {
  return <span className={clsx([idle && 'animate-blink'])}>█</span>;
};
