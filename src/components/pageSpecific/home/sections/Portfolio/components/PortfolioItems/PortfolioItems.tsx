import { Button } from '@/components/pageSpecific/home/general/Button';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';
import clsx from 'clsx';
import { useEffect, useRef, useState, type FC } from 'react';
import iPhone14ProMaxImage from '@/assets/images/iphone-14-pro-max.png';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils';

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
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const currentItem = items[currentIndex];
  const paginationText = `${currentIndex + 1}/${items.length}`;

  const handlePrevClick = contextSafe(() => {
    const portfolioScreenshot = document.querySelector('.portfolioScreenshot');
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
          x: 50,
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
          x: 50,
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
          x: 50,
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
          x: 50,
          opacity: 0,
        },
      );

    gsap.fromTo(
      portfolioScreenshot,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: 50,
        opacity: 0,
        duration: timelineBeforeChange.duration(),
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
            x: -50,
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
            x: -50,
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
            x: -50,
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
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap.fromTo(
        portfolioScreenshot,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: timelineAfterChange.duration(),
        },
      );
    }, timelineBeforeChange.duration() * 1000);
  });

  const handleNextClick = contextSafe(() => {
    const portfolioScreenshot = document.querySelector('.portfolioScreenshot');
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
          x: -50,
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
          x: -50,
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
          x: -50,
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
          x: -50,
          opacity: 0,
        },
      );
    gsap.fromTo(
      portfolioScreenshot,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -50,
        opacity: 0,
        duration: timelineBeforeChange.duration(),
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
            x: 50,
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
            x: 50,
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
            x: 50,
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
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
        );
      gsap.fromTo(
        portfolioScreenshot,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: timelineAfterChange.duration(),
        },
      );
    }, timelineBeforeChange.duration() * 1000);
  });

  useEffect(() => {
    getImage({
      src: iPhone14ProMaxImage,
    }).then((result) => setOptimizedImage(result));
  }, []);

  return (
    <div
      ref={container}
      className={clsx(['grid', 'grid-cols-3', 'gap-5', 'py-5', 'w-full'])}
    >
      <div className={clsx(['col-span-1', 'relative', 'h-[533px]'])}>
        <div
          className={clsx([
            'portfolioDevice',
            '-translate-x-12',
            'opacity-0',
            'min-w-[257px]',
            'min-h-[533px]',
            'absolute',
            'top-0',
            'right-0',
            'bg-[black]',
            'rounded-[42px]',
            'overflow-hidden',
          ])}
        >
          <img
            src={currentItem.mobile.src}
            alt={`${currentItem.name} mobile screenshot`}
            loading="lazy"
            className={clsx([
              'portfolioScreenshot',
              'size-full',
              'absolute',
              'top-0',
              'left-0',
            ])}
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
