import type { SchemaContext } from 'astro:content';
import { z } from 'zod';

export const IMAGE_INPUT_FORMAT_SCHEMA = z.enum([
  'jpeg',
  'jpg',
  'png',
  'tiff',
  'webp',
  'gif',
  'svg',
  'avif',
]);
export const IMAGE_OUTPUT_FORMAT_SCHEMA = z.enum([
  'jpeg',
  'jpg',
  'png',
  'webp',
  'svg',
  'avif',
]);
export const IMAGE_METADATA_SCHEMA = z.object({
  src: z.string(),
  width: z.number(),
  height: z.number(),
  format: IMAGE_INPUT_FORMAT_SCHEMA,
  orientation: z.number().optional(),
});
export const IMAGE_FIT_SCHEMA = z.enum([
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
]);
export const IMAGE_QUALITY = z
  .enum(['low', 'mid', 'high', 'max'])
  .or(z.number());
export const IMAGE_TRANSFORM_SCHEMA = z
  .object({
    src: IMAGE_METADATA_SCHEMA.or(z.string()),
    width: z.number().optional(),
    widths: z.array(z.number()).optional(),
    densities: z.array(z.number().or(z.string())).optional(),
    height: z.number().optional(),
    quality: IMAGE_QUALITY.optional(),
    format: IMAGE_OUTPUT_FORMAT_SCHEMA.optional(),
    fit: IMAGE_FIT_SCHEMA.optional(),
    position: z.string().optional(),
  })
  .and(z.record(z.any()));
export const UNRESOLVED_SRC_SET_VALUE_SCHEMA = z.object({
  transform: IMAGE_TRANSFORM_SCHEMA,
  descriptor: z.string().optional(),
  attributes: z.record(z.any()).optional(),
});
export const SRC_SET_VALUE_SCHEMA = UNRESOLVED_SRC_SET_VALUE_SCHEMA.and(
  z.object({ url: z.string() }),
);
export const GET_IMAGE_RESULT_SCHEMA = z.object({
  rawOptions: IMAGE_TRANSFORM_SCHEMA,
  options: IMAGE_TRANSFORM_SCHEMA,
  src: z.string(),
  srcSet: z.object({
    values: z.array(SRC_SET_VALUE_SCHEMA),
    attributes: z.string(),
  }),
  attributes: z.record(z.any()),
});

export const buildPortfolioSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    mobile: image(),
    tablet: image().nullable(),
    desktop: image().nullable(),
    visitUrl: z.string().nullable(),
    moreDetailsUrl: z.string().nullable(),
    headerImage: image().optional(),
    headerBackgroundColor: z.string().optional(),
    thumbnail: image().optional(),
  });
