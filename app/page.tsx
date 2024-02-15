import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Penta Time!',
    },
    {
      action: 'link',
      label: 'Link to Pentacle',
      target: 'https://pentacle.xyz',
    },
    {
      label: 'Pentacle Tarot moon calendar',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1.91:1',
  },
  input: {
    text: 'Tell me a Penta story',
  },
  postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'pentacaster',
  description: 'in your quest for knowledge, a talisman of protection',
  openGraph: {
    title: 'pentacaster',
    description: 'in your quest for knowledge, a talisman of protection',
    images: [`${process.env.NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>pentacle.xyz</h1>
    </>
  );
}
