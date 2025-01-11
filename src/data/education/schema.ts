import type { SchemaContext } from 'astro:content';
import { z } from 'zod';

export const buildEducationSchema = (_context: SchemaContext) =>
  z.object({
    school: z.string(),
    from: z.coerce.date(),
    to: z.coerce.date().nullable(),
    degree: z.string(),
    major: z.string(),
    option: z.string().nullable(),
  });
