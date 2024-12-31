import { t } from '@/utils';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { TerminalCursor } from './components/TerminalCursor';

export type TerminalPromptProps = PropsWithChildren<{
  user?: string;
  domain?: string;
  path?: string;
  sudo?: boolean;
  hasRun?: boolean;
}>;

export const TerminalPrompt: FC<TerminalPromptProps> = ({
  children,
  hasRun,
  sudo,
  domain = t('terminal.domain'),
  path = '~',
  user = t('terminal.user'),
}) => {
  return (
    <span>
      <span
        className={clsx([
          'text-terminal-text-2',
          'font-bold',
          'selection:bg-terminal-text-2',
          'selection:text-terminal-bg',
        ])}
      >
        {user}@{domain}
      </span>
      :
      <span
        className={clsx([
          'text-terminal-text-3',
          'selection:bg-terminal-text-3',
          'selection:text-terminal-bg',
        ])}
      >
        {path}
      </span>
      {sudo ? '#' : '$'}
      <span>
        {' '}
        {children}
        {!hasRun && <TerminalCursor />}
      </span>
    </span>
  );
};
