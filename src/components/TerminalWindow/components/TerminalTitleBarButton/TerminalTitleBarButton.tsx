import clsx from 'clsx';
import type { ComponentPropsWithRef, FC, PropsWithChildren, Ref } from 'react';

export type TerminalTitleBarButtonProps = {
  variant?: 'square' | 'circle';
} & ComponentPropsWithRef<'button'>;

export const TerminalTitleBarButton: FC<TerminalTitleBarButtonProps> = ({
  children,
  className,
  ref,
  variant = 'square',
  ...restButtonProps
}) => {
  return (
    <button
      ref={ref}
      className={clsx([
        'flex',
        'justify-center',
        'items-center',
        'bg-terminal-menu-bar-btn-bg',
        'hover:bg-terminal-menu-bar-btn-hover-bg',
        'transition-colors',
        'select-none',
        variant === 'square' && [
          'rounded-[4px]',
          'h-9',
          'min-h-9',
          'w-10',
          'min-w-10',
          'border',
          'border-terminal-menu-bar-btn-border',
        ],
        variant === 'circle' && [
          'rounded-full',
          'w-6',
          'min-w-6',
          'aspect-square',
        ],
        className,
      ])}
      {...restButtonProps}
    >
      {children}
    </button>
  );
};
