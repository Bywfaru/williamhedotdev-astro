import { Button } from '@/components/pageSpecific/home/general/Button';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';
import clsx from 'clsx';
import { useEffect, useState, type FC } from 'react';
import iPhone14ProMaxImage from '@/assets/images/iphone-14-pro-max.png';
import { MoveLeft, MoveRight } from 'lucide-react';

export type PortfolioItem = {
  name: string;
  stack: string[];
  description: string;
  mobile: GetImageResult;
  tablet?: GetImageResult;
  desktop?: GetImageResult;
};

export type PortfolioItemsProps = {
  items: PortfolioItem[];
};

export const PortfolioItems: FC<PortfolioItemsProps> = ({ items }) => {
  'use memo';
  const [optimizedImage, setOptimizedImage] = useState<GetImageResult | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = items[currentIndex];
  const paginationText = `${currentIndex + 1}/${items.length}`;

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    getImage({
      src: iPhone14ProMaxImage,
    }).then((result) => setOptimizedImage(result));
  }, []);

  return (
    <div className={clsx(['grid', 'grid-cols-3', 'gap-5', 'py-5', 'w-full'])}>
      <div className={clsx(['col-span-1', 'relative', 'h-[533px]'])}>
        <div
          className={clsx([
            'portfolioDevice',
            'min-w-[257px]',
            'min-h-[533px]',
            'absolute',
            'top-0',
            'right-0',
            'rounded-[42px]',
            'overflow-hidden',
          ])}
        >
          <img
            src={currentItem.mobile.src}
            alt={`${currentItem.name} mobile screenshot`}
            loading="lazy"
            className={clsx(['size-full', 'absolute', 'top-0', 'left-0'])}
          />
          {!!optimizedImage?.src && (
            <img
              src={optimizedImage.src}
              alt="iPhone 14 Pro Max frame"
              loading="lazy"
              className={clsx([
                'size-full',
                'absolute',
                'top-0',
                'left-0',
                'object-contain',
                'object-center',
              ])}
            />
          )}
        </div>
      </div>

      <div
        className={clsx(['col-span-2', 'flex', 'flex-col', 'gap-5', 'py-5'])}
      >
        <div className={clsx(['flex', 'flex-col', 'gap-2'])}>
          <h4
            className={clsx([
              'portfolioItemHeading',
              'text-accent-1',
              'font-semibold',
              'text-3xl',
            ])}
          >
            {currentItem.name}
          </h4>

          <h5
            className={clsx([
              'portfolioItemSubheading',
              'text-tertiary',
              'font-mono',
              'text-xl',
            ])}
          >
            {currentItem.stack.join(', ')}
          </h5>
        </div>

        <p className={clsx(['portfolioItemContent', 'text-secondary'])}>
          {currentItem.description}
        </p>

        <div className={clsx(['portfolioItemButton'])}>
          <Button type="link" href="/portfolio/only-the-best-nutrition">
            More details
          </Button>
        </div>
      </div>

      <div
        className={clsx([
          'portfolioNavButtons',
          'col-span-3',
          'flex',
          'justify-between',
          'items-center',
          'gap-5',
          'font-mono',
        ])}
      >
        <Button
          type="button"
          variant="secondary"
          className={clsx(['flex', 'gap-2', 'items-center'])}
          onClick={handlePrevClick}
        >
          <>
            {' '}
            <MoveLeft size={16} />{' '}
            <span className={clsx(['underline'])}>Prev</span>
          </>
        </Button>

        <span className={clsx(['text-accent-1', 'text-xl'])}>
          {paginationText}
        </span>

        <Button
          type="button"
          variant="secondary"
          className={clsx(['flex', 'gap-2', 'items-center'])}
          onClick={handleNextClick}
        >
          <>
            <span className={clsx(['underline'])}>Next</span>
            <MoveRight size={12} />
          </>
        </Button>
      </div>
    </div>
  );
};
