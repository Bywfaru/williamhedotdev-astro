import { clsx } from 'clsx';
import type { FC } from 'react';

export type TerminalPromptRadioProps = {
  question: string;
  options: string[];
  hint?: string;
  value?: string;
};

export const TerminalPromptRadio: FC<TerminalPromptRadioProps> = ({
  question,
  options,
  hint,
  value,
}) => {
  return (
    <div className={clsx(['flex', 'flex-col'])}>
      <span>
        <span className={clsx(['text-terminal-cmd-question-mark'])}>?</span>
        {question}:
        {!!hint && (
          <span className={clsx(['text-terminal-text-4'])}> › {hint}</span>
        )}
      </span>

      {options.map((option) => (
        <label
          className={clsx([
            'group',
            'w-fit',
            'cursor-pointer',
            'relative',
            value === option && 'pl-[calc(1rem*1.5)]',
            value !== option && 'pl-[calc(1rem*2)]',
          ])}
        >
          <input
            type="radio"
            name="prompt"
            id="prompt"
            value={option}
            className={clsx(['hidden'])}
          />

          <span
            className={clsx(['text-terminal-text-1', 'group-hover:underline'])}
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};
