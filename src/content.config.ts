import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { buildPortfolioSchema } from './data/portfolio/schema';

const CONTENT_BASE_PATH = './src/data';
const DEFAULT_MARKDOWN_FILE_PATH_PATTERN = '**/*.md';

const buildContentBasePath = (path: string) => `${CONTENT_BASE_PATH}/${path}`;

const portfolio = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('portfolio'),
  }),
  schema: (context) => buildPortfolioSchema(context),
});

export const collections = { portfolio };
