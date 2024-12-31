import { TerminalWindow } from '@/components/TerminalWindow';
import {
  TerminalPrompt,
  TerminalManSection,
} from '@/components/TerminalWindow/components';
import { t } from '@/utils/i18n';
import clsx from 'clsx';
import { marked } from 'marked';

export type HomeTerminalWindowProps = {
  age: number;
  version?: string;
};

export const HomeTerminalWindow: React.FC<HomeTerminalWindowProps> = ({
  age,
  version,
}) => {
  return (
    <TerminalWindow>
      {/* Command */}
      <TerminalPrompt hasRun>{t('terminal.home.command')}</TerminalPrompt>

      {/* Output */}
      <span
        className={clsx([
          'pr-4',
          '[&_a:hover]:bg-terminal-text-1',
          '[&_a:hover]:text-terminal-bg',
          '[&_a]:font-bold',
          '[&_a]:underline',
          '[&_a]:visited:text-terminal-text-1',
          '[&_a]:visited:underline',
        ])}
      >
        {/* Header */}
        <div className={clsx(['flex', 'justify-between'])}>
          <span>
            <span className={clsx(['underline'])}>
              {t('terminal.home.output.header.name')}
            </span>
            <span>(1)</span>
          </span>
          <span>{t('terminal.home.output.header.title')}</span>
          <span>
            <span className={clsx(['underline'])}>
              {t('terminal.home.output.header.name')}
            </span>
            <span>(1)</span>
          </span>
        </div>

        {/* Content */}
        <div className={clsx(['flex', 'flex-col'])}>
          {/* Name */}
          <TerminalManSection title={t('terminal.home.output.name.title')}>
            <span>{t('terminal.home.output.name.content')}</span>
          </TerminalManSection>

          {/* Synopsis */}
          <TerminalManSection title={t('terminal.home.output.synopsis.title')}>
            <a
              href="/portfolio"
              className={clsx(['w-fit', 'hover:underline', 'font-bold'])}
            >
              {t('terminal.home.output.synopsis.content.portfolio')}
            </a>
            <a
              href="/experience"
              className={clsx(['w-fit', 'hover:underline', 'font-bold'])}
            >
              {t('terminal.home.output.synopsis.content.experience')}
            </a>
            <a
              href="/skills"
              className={clsx(['w-fit', 'hover:underline', 'font-bold'])}
            >
              {t('terminal.home.output.synopsis.content.skills')}
            </a>
            <a
              href="/education"
              className={clsx(['w-fit', 'hover:underline', 'font-bold'])}
            >
              {t('terminal.home.output.synopsis.content.education')}
            </a>
            <a
              href="/contact"
              className={clsx(['w-fit', 'hover:underline', 'font-bold'])}
            >
              {t('terminal.home.output.synopsis.content.contact')}
            </a>
          </TerminalManSection>

          {/* Description */}
          <TerminalManSection
            title={t('terminal.home.output.description.title')}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: marked(
                  t('terminal.home.output.description.content.description', {
                    age,
                  }),
                ),
              }}
            />

            <span>
              <br />

              {t('terminal.home.output.description.content.hint')}
            </span>
          </TerminalManSection>
        </div>

        <br />

        {/* Footer */}
        <div className={clsx(['flex', 'justify-between'])}>
          <span>
            {version || (
              <>
                <span className={clsx(['underline'])}>
                  {t('terminal.home.output.header.name')}
                </span>
                <span>(1)</span>
              </>
            )}
          </span>
          <span>2024-12-25</span>
          <span>
            <span className={clsx(['underline'])}>
              {t('terminal.home.output.header.name')}
            </span>
            <span>(1)</span>
          </span>
        </div>
      </span>

      <TerminalPrompt />
    </TerminalWindow>
  );
};
