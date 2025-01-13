import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { buildProjectSchema } from './data/projects/schema';
import { buildSchoolSchema } from './data/schools/schema';
import { buildEducationSchema } from './data/education/schema';
import { buildResumeSchema } from './data/resume/schema';

const CONTENT_BASE_PATH = './src/data';
const DEFAULT_MARKDOWN_FILE_PATH_PATTERN = '**/*.md';

const buildContentBasePath = (path: string) => `${CONTENT_BASE_PATH}/${path}`;

const education = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('education'),
  }),
  schema: (context) => buildEducationSchema(context),
});
const projects = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('projects'),
  }),
  schema: (context) => buildProjectSchema(context),
});
const resume = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('resume'),
  }),
  schema: (context) => buildResumeSchema(context),
});
const schools = defineCollection({
  loader: glob({
    pattern: DEFAULT_MARKDOWN_FILE_PATH_PATTERN,
    base: buildContentBasePath('schools'),
  }),
  schema: (context) => buildSchoolSchema(context),
});

export const collections = { education, projects, resume, schools };
