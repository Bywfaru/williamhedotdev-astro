import { t } from '@/utils';
import { TerminalTitleBarButton } from '../TerminalTitleBarButton';
import { Icon } from '@/components/Icon';
import type { FC } from 'react';
import clsx from 'clsx';

export type TerminalTitleBarProps = {
  title?: string;
};

export const TerminalTitleBar: FC<TerminalTitleBarProps> = ({
  title = t('terminal.title'),
}) => {
  const handleCloseClick = () => {
    window.location.href = '/';
  };

  return (
    <div
      className={clsx([
        'p-2',
        'flex',
        'justify-between',
        'bg-terminal-menu-bar-bg',
        'items-center',
      ])}
    >
      <TerminalTitleBarButton>
        <Icon
          name="ubuntu-window-new-tab"
          className={clsx(['fill-terminal-text-1'])}
        />
      </TerminalTitleBarButton>

      <span
        className={clsx([
          'text-ellipsis',
          'select-none',
          'line-clamp-1',
          'max-w-full',
          'break-all',
        ])}
      >
        {title}
      </span>

      <div className={clsx(['flex', 'gap-3', 'items-center'])}>
        <div className={clsx(['flex', 'gap-2'])}>
          <TerminalTitleBarButton>
            <Icon
              name="ubuntu-window-search"
              className={clsx(['fill-terminal-text-1'])}
            />
          </TerminalTitleBarButton>

          <TerminalTitleBarButton>
            <Icon
              name="ubuntu-window-menu"
              className={clsx(['fill-terminal-text-1'])}
            />
          </TerminalTitleBarButton>
        </div>

        <div className={clsx(['flex', 'gap-3', 'items-center'])}>
          <TerminalTitleBarButton variant="circle">
            <Icon
              name="ubuntu-window-minimize"
              size={8}
              className={clsx(['fill-terminal-text-1'])}
            />
          </TerminalTitleBarButton>

          <TerminalTitleBarButton variant="circle">
            <Icon
              name="ubuntu-window-maximize"
              size={8}
              className={clsx(['fill-terminal-text-1'])}
            />
          </TerminalTitleBarButton>

          <a href="/">
            <TerminalTitleBarButton variant="circle">
              <Icon
                name="ubuntu-window-close"
                size={8}
                className={clsx(['fill-terminal-text-1'])}
              />
            </TerminalTitleBarButton>
          </a>
        </div>
      </div>
    </div>
  );
};
