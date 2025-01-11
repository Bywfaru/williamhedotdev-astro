import type { SchemaContext } from 'astro:content';
import { z } from 'zod';

export const buildSchoolSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    logo: image(),
  });
