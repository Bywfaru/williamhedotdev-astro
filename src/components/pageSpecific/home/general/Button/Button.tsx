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
  variant = 'primary',
  ...restProps
}: ButtonProps) => {
  let classNameVariant = clsx([
    className,
    'group',
    'bg-accent-2',
    'border-[3px]',
    'border-accent-1',
    'text-accent-1',
    'rounded-[32px]',
    'flex',
    'items-center',
    'justify-center',
    'font-mono',
    'text-xl',
    'w-fit',
    'h-fit',
    'px-10',
    'py-2',
    'hover:bg-accent-1',
    'hover:border-accent-2',
    'hover:text-accent-2',
    'transition',
    '[&_*]:transition',
  ]);

  switch (variant) {
    case 'secondary': {
      classNameVariant = clsx([
        className,
        'group',
        'text-accent-2',
        'font-mono',
        'text-xl',
        'w-fit',
        'h-fit',
        'hover:text-accent-1',
        'transition',
        '[&_*]:transition',
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
    >
      {children}
    </button>
  );
};
