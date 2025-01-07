import clsx from 'clsx';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
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

export const Button = ({
  children,
  className,
  disabled,
  fullWidth,
  variant = 'primary',
  ...restProps
}: ButtonProps) => {
  let classNameVariant = clsx([
    className,
    'group',
    'button',
    'bg-accent-2',
    'border-[3px]',
    'border-accent-1',
    'text-accent-1',
    'rounded-[32px]',
    'flex',
    'items-center',
    'justify-center',
    'font-mono',
    { 'w-full': fullWidth },
    { 'w-fit': !fullWidth },
    'h-fit',
    'px-10',
    'py-2',
    'hover:bg-accent-1',
    'hover:border-accent-2',
    'hover:text-accent-2',
    'transition',
    '[&_*]:transition',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ]);

  switch (variant) {
    case 'secondary': {
      classNameVariant = clsx([
        className,
        'group',
        'button',
        'text-accent-2',
        'font-mono',
        'text-xl',
        { 'w-full': fullWidth },
        { 'w-fit': !fullWidth },
        'h-fit',
        'hover:text-primary',
        'hover:bg-accent-2',
        'transition',
        '[&_*]:transition',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
      ]);
    }
    default: {
      break;
    }
  }

  if (restProps.type === 'link')
    return (
      <a href={restProps.href} className={classNameVariant}>
        {children}
      </a>
    );

  return (
    <button
      type={restProps.buttonType}
      onClick={restProps.onClick}
      className={classNameVariant}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
