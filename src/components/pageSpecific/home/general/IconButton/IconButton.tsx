import clsx from 'clsx';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export type IconButtonProps = PropsWithChildren<{
  size?: number | string;
  className?: string;
}> &
  (
    | {
        type: 'button';
        buttonType?: DetailedHTMLProps<
          ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        >['type'];
        onClick?: MouseEventHandler<HTMLButtonElement>;
      }
    | {
        type: 'link';
        href: string;
      }
  );

export const IconButton = ({
  children,
  className,
  size = 24,
  ...restProps
}: IconButtonProps) => {
  const CLASSNAME = clsx([
    className,
    'group',
    'button',
    'bg-accent-2',
    'border-[3px]',
    'border-accent-1',
    'text-accent-1',
    'rounded-full',
    'flex',
    'items-center',
    'justify-center',
    'hover:bg-accent-1',
    'hover:border-accent-2',
    'hover:text-accent-2',
    'transition',
    '[&_*]:transition',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ]);

  if (restProps.type === 'link')
    return (
      <a
        href={restProps.href}
        className={CLASSNAME}
        style={{ width: size, height: size }}
      >
        {children}
      </a>
    );

  return (
    <button
      type={restProps.buttonType}
      onClick={restProps.onClick}
      className={CLASSNAME}
      style={{ width: size, height: size }}
    >
      {children}
    </button>
  );
};
