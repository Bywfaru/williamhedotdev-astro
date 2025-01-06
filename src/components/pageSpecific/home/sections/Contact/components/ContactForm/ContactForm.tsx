import { Button } from '@/components/pageSpecific/home/general/Button';
import { Input } from '@/components/pageSpecific/home/general/Input';
import { TextArea } from '@/components/pageSpecific/home/general/TextArea';
import clsx from 'clsx';
import type { FC } from 'react';

export const ContactForm: FC = () => {
  return (
    <form
      className={clsx(['flex', 'flex-col', 'gap-3', 'w-full', 'items-end'])}
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <Input type="text" name="name" label="Your name" fullWidth required />
      <Input
        type="text"
        name="contactInfo"
        label="Your email or phone number"
        fullWidth
        required
      />
      <Input
        type="text"
        name="subject"
        label="What should we talk about?"
        fullWidth
        required
      />
      <TextArea
        name="message"
        label="Your message"
        rows={10}
        fullWidth
        required
      />

      <div data-netlify-recaptcha="true" />

      <Button
        type="button"
        buttonType="submit"
        fullWidth
        className={clsx(['md:hidden'])}
      >
        Send
      </Button>
      <Button
        type="button"
        buttonType="submit"
        className={clsx(['hidden', 'md:block'])}
      >
        Send
      </Button>
    </form>
  );
};
