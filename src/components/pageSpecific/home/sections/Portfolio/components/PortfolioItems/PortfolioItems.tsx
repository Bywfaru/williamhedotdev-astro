import { TextButton } from '@/components/pageSpecific/home/general/TextButton';
import clsx from 'clsx';
import type { FC } from 'react';

export type PortfolioItemsProps = {};

export const PortfolioItems: FC<PortfolioItemsProps> = () => {
  return (
    <div className={clsx(['col-span-2', 'flex', 'flex-col', 'gap-5', 'py-5'])}>
      <div className={clsx(['flex', 'flex-col', 'gap-2'])}>
        <h4
          className={clsx([
            'portfolioItemHeading',
            'text-accent-1',
            'font-semibold',
            'text-3xl',
          ])}
        >
          Only The Best Nutrition
        </h4>

        <h5
          className={clsx([
            'portfolioItemSubheading',
            'text-tertiary',
            'font-mono',
            'text-xl',
          ])}
        >
          Next.js 13, Headless CMS, Google Analytics, SEO
        </h5>
      </div>

      <p className={clsx(['portfolioItemContent', 'text-secondary'])}>
        An SEO-optimized Next.js 13 online store that implements Google
        Analytics and a headless CMS for simple page and product customization.
      </p>

      <div className={clsx(['portfolioItemButton'])}>
        <TextButton type="link" href="/portfolio/only-the-best-nutrition">
          More details
        </TextButton>
      </div>
    </div>
  );
};
