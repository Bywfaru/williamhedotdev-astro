import { Button } from '@/components/pageSpecific/home/general/Button';
import { Input } from '@/components/pageSpecific/home/general/Input';
import { TextArea } from '@/components/pageSpecific/home/general/TextArea';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { ReCAPTCHAProps } from 'react-google-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIsClient } from 'usehooks-ts';
const FORM_API_URL = 'https://api.web3forms.com/submit';
const FORM_API_ACCESS_KEY = '6fd50934-e515-479f-a4a6-8e6d02f1523c';
const GOOGLE_RECAPTCHA_CLIENT_KEY = '6LeLbbAqAAAAALnPlBITcvw4iH_cXLwF6zQr5qa3';
const FORM_SCHEMA = z.object({
  name: z.string(),
  contactInfo: z.string(),
  subject: z.string(),
  message: z.string(),
});
const WEB_3_FORMS_RESPONSE_SCHEMA = z.object({
  success: z.boolean(),
  data: z.record(z.unknown()).optional(),
  message: z.string(),
});

type FormSchema = z.infer<typeof FORM_SCHEMA>;
type Web3FormsResponse = z.infer<typeof WEB_3_FORMS_RESPONSE_SCHEMA>;

export const ContactForm: FC = () => {
  const { handleSubmit, register } = useForm<FormSchema>({
    resolver: zodResolver(FORM_SCHEMA),
  });
  const isClient = useIsClient();
  const [message, setMessage] = useState<string | null>(null);
  const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<FormSchema> = async (fieldValues) => {
    if (isSubmitting) return;
    if (!reCaptchaToken) {
      setMessage('Please complete the reCAPTCHA challenge.');

      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    const res = await fetch(FORM_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        ...fieldValues,
        access_key: FORM_API_ACCESS_KEY,
      }),
    })
      .then((res) => res.json() as Promise<Web3FormsResponse>)
      .then((data) => {
        const parsedData = WEB_3_FORMS_RESPONSE_SCHEMA.safeParse(data);

        if (!parsedData.success) {
          console.error('Error parsing response data:', parsedData.error);

          return {
            success: false,
            message:
              'An error occurred while submitting the form. Please try again later.',
          };
        }

        return parsedData.data;
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.error('Error submitting form:', error.message);

          return { success: false, message: error.message };
        }

        console.error('Unknown error submitting form:', error);

        return {
          success: false,
          message:
            'An error occurred while submitting the form. Please try again later.',
        } satisfies Web3FormsResponse;
      });

    setIsSubmitting(false);
    setMessage(res.message);
  };

  return (
    <form
      className={clsx(['flex', 'flex-col', 'gap-3', 'w-full', 'items-end'])}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        {...register('name')}
        type="text"
        label="Your name"
        fullWidth
        required
      />
      <Input
        {...register('contactInfo')}
        type="text"
        label="Your email or phone number"
        fullWidth
        required
      />
      <Input
        {...register('subject')}
        type="text"
        label="What should we talk about?"
        fullWidth
        required
      />
      <TextArea
        {...register('message')}
        label="Your message"
        rows={10}
        fullWidth
        required
      />

      {!!message && <p className={clsx(['text-accent-2'])}>{message}</p>}

      {isClient && (
        <ReCAPTCHA
          sitekey={GOOGLE_RECAPTCHA_CLIENT_KEY}
          theme="dark"
          onChange={setReCaptchaToken}
        />
      )}

      <Button
        type="button"
        buttonType="submit"
        className={clsx(['md:hidden'])}
        disabled={isSubmitting}
        fullWidth
      >
        Send
      </Button>
      <Button
        type="button"
        buttonType="submit"
        className={clsx(['hidden', 'md:block'])}
        disabled={isSubmitting}
      >
        Send
      </Button>
    </form>
  );
};
