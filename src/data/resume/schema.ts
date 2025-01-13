import type { SchemaContext } from 'astro:content';
import { z } from 'zod';

export const buildResumeSchema = ({ image }: SchemaContext) =>
  z.object({
    basics: z.object({
      name: z.string(),
      label: z.string().nullable(),
      image: image().nullable(),
      email: z.string().email(),
      phone: z.string(),
      url: z.string().nullable(),
      summary: z.string().nullable(),
      location: z
        .object({
          address: z.string().nullable(),
          postalCode: z.string().nullable(),
          city: z.string(),
          countryCode: z.string(),
          region: z.string(),
        })
        .nullable(),
      profiles: z.array(
        z.object({
          network: z.string(),
          username: z.string(),
          url: z.string(),
        }),
      ),
    }),
    work: z.array(
      z.object({
        name: z.string(),
        position: z.string(),
        url: z.string().nullable(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().nullable(),
        summary: z.string().nullable(),
        highlights: z.array(z.string()),
      }),
    ),
    volunteer: z.array(
      z.object({
        organization: z.string(),
        position: z.string(),
        url: z.string().nullable(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().nullable(),
        summary: z.string().nullable(),
        highlights: z.array(z.string()),
      }),
    ),
    education: z.array(
      z.object({
        institution: z.string(),
        url: z.string().nullable(),
        area: z.string().nullable(),
        studyType: z.string(),
        partiallyCompleted: z.boolean(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().nullable(),
        score: z.string().nullable(),
        courses: z.array(z.string()),
        highlights: z.array(z.string()),
      }),
    ),
    awards: z.array(
      z.object({
        title: z.string(),
        date: z.coerce.date(),
        awarder: z.string(),
        summary: z.string().nullable(),
      }),
    ),
    certificates: z.array(
      z.object({
        name: z.string(),
        date: z.coerce.date(),
        issuer: z.string(),
        url: z.string().nullable(),
      }),
    ),
    publications: z.array(
      z.object({
        name: z.string(),
        publisher: z.string(),
        releaseDate: z.coerce.date(),
        url: z.string().nullable(),
        summary: z.string().nullable(),
      }),
    ),
    skills: z.array(
      z.object({
        name: z.string(),
        level: z.string().nullable(),
        keywords: z.array(z.string()),
      }),
    ),
    languages: z.array(
      z.object({
        language: z.string(),
        fluency: z.enum([
          'basic',
          'limited',
          'professional',
          'fluent',
          'native',
        ]),
      }),
    ),
    interests: z.array(
      z.object({
        name: z.string(),
        description: z.string().nullable(),
        keywords: z.array(z.string()),
      }),
    ),
    references: z.array(
      z.object({
        name: z.string(),
        reference: z.string(),
      }),
    ),
    projects: z.array(
      z.object({
        name: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().nullable(),
        description: z.string().nullable(),
        highlights: z.array(z.string()),
        url: z.string().nullable(),
      }),
    ),
  });
