import { Button } from '@/components/pageSpecific/home/general/Button';
import { Input } from '@/components/pageSpecific/home/general/Input';
import { TextArea } from '@/components/pageSpecific/home/general/TextArea';
import clsx from 'clsx';
import type { FC } from 'react';

export const ContactForm: FC = () => {
  return (
    <form
      className={clsx(['flex', 'flex-col', 'gap-3', 'w-full', 'items-end'])}
      action={'https://api.web3forms.com/submit'}
      method={'POST'}
    >
      <input
        type="hidden"
        name="access_key"
        value="6fd50934-e515-479f-a4a6-8e6d02f1523c"
      />

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
