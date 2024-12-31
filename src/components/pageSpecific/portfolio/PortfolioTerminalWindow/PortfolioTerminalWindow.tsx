import { TerminalWindow } from '@/components/TerminalWindow';
import {
  TerminalPrompt,
  TerminalPromptRadio,
} from '@/components/TerminalWindow/components';
import { t } from '@/utils';
import clsx from 'clsx';
import type { FC } from 'react';

export type PortfolioProject = {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

export type PortfolioTerminalWindowProps = {
  projects: PortfolioProject[];
};

export const PortfolioTerminalWindow: FC<PortfolioTerminalWindowProps> = ({
  projects,
}) => {
  return (
    <TerminalWindow>
      {/* Command */}
      <TerminalPrompt hasRun>{t('terminal.portfolio.command')}</TerminalPrompt>

      {/* Output */}
      <span
        className={clsx([
          'pr-4',
          '[&_a:hover]:bg-terminal-text-1',
          '[&_a:hover]:text-terminal-bg',
          '[&_a]:font-bold',
          '[&_a]:underline',
        ])}
      >
        {/* Header */}
        <div className={clsx(['flex', 'justify-center'])}>
          <span>{t('terminal.portfolio.output.header.title')}</span>
        </div>

        {/* Content */}
        <div className={clsx(['flex', 'flex-col'])}>
          <span>{t('terminal.portfolio.output.description')}</span>
        </div>

        <br />

        <TerminalPromptRadio
          question={t('terminal.portfolio.output.selectAProject')}
          hint={t('terminal.portfolio.output.selectAProjectHint')}
          options={projects.map((project) => project.title)}
        />
      </span>

      <TerminalPrompt />
    </TerminalWindow>
  );
};
