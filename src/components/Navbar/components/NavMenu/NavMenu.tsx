import { Button } from '@/components/pageSpecific/home/general/Button';
import { IconButton } from '@/components/pageSpecific/home/general/IconButton';
import type { IconType } from '@icons-pack/react-simple-icons';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { useRef, type FC } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import type { NavbarLink } from '../../Navbar';

export type NavMenuProps = {
  open?: boolean;
  links: NavbarLink[];
  onClose?: () => void;
  socials?: {
    Icon: IconType;
    href: string;
  }[];
};

export const NavMenu: FC<NavMenuProps> = ({
  open,
  links,
  socials,
  onClose = () => {},
}) => {
  const ref = useRef<HTMLElement>(null);

  useOnClickOutside(ref as any, onClose);

  return (
    <aside
      ref={ref}
      className={clsx([
        'flex',
        'flex-col',
        'items-end',
        'w-screen',
        'gap-10',
        'md:max-w-lg',
        'h-screen',
        'fixed',
        'bg-body-bg',
        'border-accent-1',
        'border-b',
        'md:border-b-0',
        'md:border-r',
        'transition-all',
        'py-2',
        'px-4',
        'md:px-5',
        'md:py-4',
        open && ['top-0', 'left-0', 'md:left-0', 'md:top-0'],
        !open && ['-top-[100vh]', 'left-0', 'md:-left-full', 'md:top-0'],
      ])}
    >
      <button
        className={clsx(['size-fit', 'sticky', 'top-0', 'right-0'])}
        onClick={onClose}
      >
        <X
          size={36}
          className={clsx([
            'md:rotate-90',
            'text-accent-1',
            'hover:text-accent-2',
            'transition',
          ])}
        />
      </button>

      <ul
        className={clsx([
          'flex',
          'flex-col',
          'gap-5',
          'text-right',
          'flex-grow',
          'overflow-y-auto',
        ])}
      >
        {links.map(({ label, href, isCurrentPage }, index) => (
          <li key={index}>
            {isCurrentPage && (
              <Button
                type="button"
                variant="secondary"
                className={clsx([
                  '!bg-accent-2',
                  '!text-primary',
                  '!hover:bg-accent-1',
                  '!hover:border-accent-2',
                  '!hover:text-primary',
                ])}
                onClick={onClose}
              >
                {label}
              </Button>
            )}

            {!isCurrentPage && (
              <Button type="link" variant="secondary" href={href}>
                {label}
              </Button>
            )}
          </li>
        ))}
      </ul>

      {!!socials?.length && (
        <div
          className={clsx([
            'sticky',
            'bottom-0',
            'right-0',
            'flex',
            'gap-5',
            'justify-center',
            'flex-wrap',
          ])}
        >
          {socials.map(({ Icon: Icon, href }, index) => (
            <IconButton key={index} type="link" size={48} href={href}>
              <Icon />
            </IconButton>
          ))}
        </div>
      )}
    </aside>
  );
};
