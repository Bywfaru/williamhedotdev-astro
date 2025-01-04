import clsx from 'clsx';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export type TextButtonProps = PropsWithChildren<{
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

export const TextButton = ({
  children,
  className,
  ...restProps
}: TextButtonProps) => {
  const CLASSNAME = clsx([
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

  if (restProps.type === 'link')
    return (
      <a href={restProps.href} className={CLASSNAME}>
        {children}
      </a>
    );

  return (
    <button
      type={restProps.buttonType}
      onClick={restProps.onClick}
      className={CLASSNAME}
    >
      {children}
    </button>
  );
};
