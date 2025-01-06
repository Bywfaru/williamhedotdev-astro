import iPhone14ProMaxImage from '@/assets/images/iphone-14-pro-max.png';
import iPadProImage from '@/assets/images/ipad-pro.png';
import macBookProImage from '@/assets/images/macbook-pro-15-inch.png';
import { Button } from '@/components/pageSpecific/home/general/Button';
import { gsap } from '@/utils';
import { useGSAP } from '@gsap/react';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';
import clsx from 'clsx';
import { useEffect, useRef, useState, type FC } from 'react';
import { PaginationControls } from './components';

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
  const [optimizedIPhone14ProMaxImage, setOptimizedIPhone14ProMaxImage] =
    useState<GetImageResult | null>(null);
  const [optimizedIPadProImage, setOptimizedIPadProImage] =
    useState<GetImageResult | null>(null);
  const [optimizedMacBookProImage, setOptimizedMacBookProImage] =
    useState<GetImageResult | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const currentItem = items[currentIndex];

  const handlePrevClick = contextSafe(() => {
    const portfolioItemHeading = document.querySelector(
      '.portfolioItemHeading',
    );
    const portfolioItemSubheading = document.querySelector(
      '.portfolioItemSubheading',
    );
    const portfolioItemContent = document.querySelector(
      '.portfolioItemContent',
    );
    const portfolioItemButton = document.querySelector('.portfolioItemButton');

    const timelineBeforeChange = gsap.timeline({
      defaults: { delay: -0.2, duration: 0.3 },
    });

    timelineBeforeChange
      .fromTo(
        portfolioItemHeading,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemSubheading,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemContent,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemButton,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 20,
          opacity: 0,
        },
      );

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length,
      );

      const timelineAfterChange = gsap.timeline({
        defaults: { delay: -0.2, duration: 0.3 },
      });

      timelineAfterChange
        .fromTo(
          portfolioItemHeading,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemSubheading,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemContent,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemButton,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        );
    }, timelineBeforeChange.duration() * 1000);
  });

  const handleNextClick = contextSafe(() => {
    const portfolioItemHeading = document.querySelector(
      '.portfolioItemHeading',
    );
    const portfolioItemSubheading = document.querySelector(
      '.portfolioItemSubheading',
    );
    const portfolioItemContent = document.querySelector(
      '.portfolioItemContent',
    );
    const portfolioItemButton = document.querySelector('.portfolioItemButton');

    const timelineBeforeChange = gsap.timeline({
      defaults: { delay: -0.2, duration: 0.3 },
    });

    timelineBeforeChange
      .fromTo(
        portfolioItemHeading,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemSubheading,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemContent,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -20,
          opacity: 0,
        },
      )
      .fromTo(
        portfolioItemButton,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -20,
          opacity: 0,
        },
      );

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);

      const timelineAfterChange = gsap.timeline({
        defaults: { delay: -0.2, duration: 0.3 },
      });

      timelineAfterChange
        .fromTo(
          portfolioItemHeading,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemSubheading,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemContent,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        )
        .fromTo(
          portfolioItemButton,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        );
    }, timelineBeforeChange.duration() * 1000);
  });

  // Load optimized images
  useEffect(() => {
    getImage({
      src: iPhone14ProMaxImage,
    }).then((result) => setOptimizedIPhone14ProMaxImage(result));
    getImage({
      src: iPadProImage,
    }).then((result) => setOptimizedIPadProImage(result));
    getImage({
      src: macBookProImage,
    }).then((result) => setOptimizedMacBookProImage(result));
  }, []);

  return (
    <div
      ref={container}
      className={clsx([
        'grid',
        'grid-cols-3',
        'gap-5',
        'py-5',
        'w-full',
        'md:gap-20',
        'md:grid-cols-5',
        'lg:grid-cols-2',
      ])}
    >
      <div
        className={clsx([
          'col-span-1',
          'relative',
          'min-h-[533px]',
          'md:col-span-2',
          'md:min-h-[782px]',
          'lg:col-span-1',
          'lg:min-h-[734px]',
        ])}
      >
        <div
          className={clsx([
            'portfolioDevice',
            '-translate-x-12',
            'opacity-0',
            'min-w-[257px]',
            'min-h-[533px]',
            'max-h-[533px]',
            'md:min-w-[600px]',
            'md:min-h-[782px]',
            'md:max-h-[782px]',
            'lg:min-w-[1216px]',
            'lg:min-h-[734px]',
            'lg:max-h-[734px]',
            'absolute',
            'top-0',
            'right-0',
            'overflow-hidden',
          ])}
        >
          {/* Mobile */}
          <div
            className={clsx([
              'size-full',
              'absolute',
              'top-0',
              'left-0',
              'md:hidden',
            ])}
          >
            <img
              src={currentItem.mobile.src}
              alt={`${currentItem.name} mobile screenshot`}
              loading="lazy"
              className={clsx([
                'portfolioScreenshot',
                'w-[92%]',
                'h-[96%]',
                'absolute',
                'top-1/2',
                'left-1/2',
                '-translate-x-1/2',
                '-translate-y-1/2',
                'rounded-[30px]',
              ])}
            />
            {!!optimizedIPhone14ProMaxImage?.src && (
              <img
                src={optimizedIPhone14ProMaxImage.src}
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

          {/* Tablet */}
          <div
            className={clsx([
              'size-full',
              'absolute',
              'top-0',
              'left-0',
              'hidden',
              'md:block',
              'lg:hidden',
            ])}
          >
            <img
              src={currentItem.tablet?.src || currentItem.mobile.src}
              alt={`${currentItem.name} tablet screenshot`}
              loading="lazy"
              className={clsx([
                'portfolioScreenshot',
                'w-[91%]',
                'h-[94%]',
                'absolute',
                'top-1/2',
                'left-1/2',
                '-translate-x-1/2',
                '-translate-y-1/2',
                'rounded-[10px]',
              ])}
            />
            {!!optimizedIPadProImage?.src && (
              <img
                src={optimizedIPadProImage.src}
                alt="iPad Pro frame"
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

          {/* Desktop */}
          <div
            className={clsx([
              'size-full',
              'absolute',
              'top-0',
              'left-0',
              'hidden',
              'lg:block',
            ])}
          >
            <img
              src={
                currentItem.desktop?.src ||
                currentItem.tablet?.src ||
                currentItem.mobile.src
              }
              alt={`${currentItem.name} desktop screenshot`}
              loading="lazy"
              className={clsx([
                'portfolioScreenshot',
                'h-[86%]',
                'w-[82%]',
                'absolute',
                'top-[5%]',
                'left-1/2',
                '-translate-x-1/2',
              ])}
            />
            {!!optimizedMacBookProImage?.src && (
              <img
                src={optimizedMacBookProImage.src}
                alt="Macbook Pro 15 inch frame"
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
      </div>

      <div
        className={clsx([
          'col-span-2',
          'flex',
          'flex-col',
          'gap-5',
          'py-5',
          'md:col-span-3',
          'lg:col-span-1',
        ])}
      >
        <div className={clsx(['flex', 'flex-col', 'gap-2'])}>
          <h4
            className={clsx([
              'portfolioItemHeading',
              'translate-y-12',
              'opacity-0',
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
              'translate-y-12',
              'opacity-0',
              'text-tertiary',
              'font-mono',
              'text-xl',
            ])}
          >
            {currentItem.stack.join(', ')}
          </h5>
        </div>

        <p
          className={clsx([
            'portfolioItemContent',
            'translate-y-12',
            'opacity-0',
            'text-secondary',
          ])}
        >
          {currentItem.description}
        </p>

        <div
          className={clsx([
            'portfolioItemButton',
            'translate-y-12',
            'opacity-0',
          ])}
        >
          <Button type="link" href="/portfolio/only-the-best-nutrition">
            More details
          </Button>
        </div>

        <div
          className={clsx([
            'portfolioNavButtons',
            'translate-y-12',
            'opacity-0',
            'hidden',
            'md:flex',
            'items-end',
            'h-full',
          ])}
        >
          <PaginationControls
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            currentPage={currentIndex + 1}
            totalPages={items.length}
          />
        </div>
      </div>

      <div
        className={clsx([
          'portfolioNavButtons',
          'translate-y-12',
          'opacity-0',
          'col-span-3',
          'md:hidden',
        ])}
      >
        <PaginationControls
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          currentPage={currentIndex + 1}
          totalPages={items.length}
        />
      </div>
    </div>
  );
};
