import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { useState, type FC } from 'react';
import { NavMenu, type NavMenuProps } from './components/NavMenu/NavMenu';

export type NavbarLink = {
  label: string;
  href: string;
  isCurrentPage?: boolean;
};

export type NavbarProps = {
  links: NavbarLink[];
};

export const Navbar: FC<NavbarProps> = ({ links }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <nav
      className={clsx([
        'w-screen',
        'md:w-auto',
        'md:h-full',
        'py-2',
        'px-4',
        'md:py-4',
        'md:px-2',
        'bg-body-bg',
        'border-b',
        'md:border-b-0',
        'md:border-r',
        'border-accent-1',
        'shadow-lg',
        'flex',
        'justify-end',
        'md:justify-start',
        'relative',
      ])}
    >
      <button
        className={clsx(['size-fit'])}
        onClick={() => setIsNavMenuOpen(true)}
      >
        <Menu
          size={36}
          className={clsx([
            'md:rotate-90',
            'text-accent-1',
            'hover:text-accent-2',
            'transition',
          ])}
        />
      </button>

      <NavMenu
        open={isNavMenuOpen}
        onClose={() => setIsNavMenuOpen(false)}
        links={links}
      />
    </nav>
  );
};
