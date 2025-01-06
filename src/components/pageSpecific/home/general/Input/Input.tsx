import clsx from 'clsx';
import type { ComponentPropsWithRef, FC, FocusEventHandler } from 'react';
import { useState } from 'react';

export type InputProps = {
  fullWidth?: boolean;
  label?: string;
} & ComponentPropsWithRef<'input'>;

export const Input: FC<InputProps> = ({
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

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    onFocus?.(event);
    setIsFocused(true);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
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

      <input
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
          'transition',
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
