import clsx from 'clsx';
import type { ComponentPropsWithRef, FC, FocusEventHandler } from 'react';
import { useRef, useState } from 'react';

export type TextareaProps = {
  fullWidth?: boolean;
  label?: string;
} & ComponentPropsWithRef<'textarea'>;

export const TextArea: FC<TextareaProps> = ({
  className,
  fullWidth,
  label,
  onBlur,
  onFocus,
  placeholder,
  ref,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  const isFocusedOrHasValue = isFocused || internalValue.length > 0;

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    onFocus?.(event);
    setIsFocused(true);
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    onBlur?.(event);
    setIsFocused(false);
  };

  return (
    <label className={clsx([{ 'w-full': fullWidth }, 'relative'])}>
      {!!label && (
        <span
          className={clsx([
            'absolute',
            'px-1',
            'left-[10px]',
            'transition-all',
            !isFocusedOrHasValue && ['top-[14px]'],
            isFocusedOrHasValue && ['bg-body-bg', '-top-2', 'text-xs'],
          ])}
        >
          {label}
        </span>
      )}

      <textarea
        ref={(element) => {
          if (typeof ref === 'function') {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }

          if (element) setInternalValue(element.value);
        }}
        className={clsx([
          className,
          'w-full',
          'border',
          'border-2',
          'border-accent-2',
          'p-3',
          'bg-[transparent]',
          { 'placeholder:text-opacity-0': !isFocused },
          { 'placeholder:text-opacity-100': isFocused },
        ])}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...restProps}
      />
    </label>
  );
};
