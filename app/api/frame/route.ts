import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: process.env.NEYNAR_API_KEY });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.input) {
    text = message.input;
  }

  // if (message?.button === 3) {
  //   return NextResponse.redirect(
  //     'https://tarot.pentacle.xyz',
  //     { status: 302 },
  //   );
  // }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'moon calendar',
          action: 'link',
          target: 'https://tarot.pentacle.xyz',
        },
        {
          label: 'ephemeris',
          action: 'link',
          target: 'https://ephemeris.ai',
        },
      ],
      image: {
        src: `${process.env.NEXT_PUBLIC_URL}/lullaby-sml.jpg`,
      },
      postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
