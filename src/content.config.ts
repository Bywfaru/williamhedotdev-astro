import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { buildPortfolioSchema } from './data/projects/schema';

const CONTENT_BASE_PATH = './src/data';
const DEFAULT_MARKDOWN_FILE_PATH_PATTERN = '**/*.md';

const buildContentBasePath = (path: string) => `${CONTENT_BASE_PATH}/${path}`;

const projects = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('projects'),
  }),
  schema: (context) => buildPortfolioSchema(context),
});

export const collections = { projects };
