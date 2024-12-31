import type { FC, LazyExoticComponent, SVGProps } from 'react';
import { lazy } from 'react';

const ICON_MAP: Record<
  string,
  {
    Component: LazyExoticComponent<FC>;
    viewBox: string;
  }
> = {
  'ubuntu-window-close': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowClose').then(({ UbuntuWindowClose }) => ({
        default: UbuntuWindowClose,
      })),
    ),
    viewBox: '0 0 8 8',
  },
  'ubuntu-window-maximize': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowMaximize').then(
        ({ UbuntuWindowMaximize }) => ({
          default: UbuntuWindowMaximize,
        }),
      ),
    ),
    viewBox: '0 0 8 8',
  },
  'ubuntu-window-menu': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowMenu').then(({ UbuntuWindowMenu }) => ({
        default: UbuntuWindowMenu,
      })),
    ),
    viewBox: '0 0 16 16',
  },
  'ubuntu-window-minimize': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowMinimize').then(
        ({ UbuntuWindowMinimize }) => ({
          default: UbuntuWindowMinimize,
        }),
      ),
    ),
    viewBox: '0 0 8 8',
  },
  'ubuntu-window-new-tab': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowNewTab').then(({ UbuntuWindowNewTab }) => ({
        default: UbuntuWindowNewTab,
      })),
    ),
    viewBox: '0 0 16 16',
  },
  'ubuntu-window-search': {
    Component: lazy(() =>
      import('./icons/UbuntuWindowSearch').then(({ UbuntuWindowSearch }) => ({
        default: UbuntuWindowSearch,
      })),
    ),
    viewBox: '0 0 16 16',
  },
};

export type IconName = keyof typeof ICON_MAP;

export type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
  title?: string;
  desc?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
};

export const Icon: FC<IconProps> = ({
  desc,
  name,
  title,
  size,
  width = 16,
  height = 16,
  ...restProps
}) => {
  const lazyIcon = ICON_MAP[name];

  if (!lazyIcon) throw new Error(`Icon "${name}" not found`);

  const widthToUse = size || width;
  const heightToUse = size || height;

  const { Component, viewBox } = lazyIcon;

  return (
    <svg
      {...restProps}
      width={widthToUse}
      height={heightToUse}
      viewBox={viewBox}
    >
      {!!title && <title>{title}</title>}
      {!!desc && <desc>{desc}</desc>}

      <Component />
    </svg>
  );
};
