import type { SchemaContext } from 'astro:content';
import { z } from 'zod';

export const buildProjectSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    mobile: image(),
    tablet: image().nullable(),
    desktop: image().nullable(),
    visitUrl: z.string().nullable(),
    moreDetailsUrl: z.string().nullable(),
    headerImage: image().nullable(),
    headerBackgroundColor: z.string().nullable(),
    thumbnail: image().nullable(),
  });
