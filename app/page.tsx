import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'ephemeris',
    },
    {
      label: 'tarot',
      action: 'link',
      target: 'https://tarot.pentacle.xyz',
    },
    {
      label: 'pentaclexyz',
      action: 'link',
      target: 'https://pentacle.xyz',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_URL}/ink-sml.jpg`,
    aspectRatio: '1.91:1',
  },
  // input: {
  //   text: 'Astrology links',
  // },
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
