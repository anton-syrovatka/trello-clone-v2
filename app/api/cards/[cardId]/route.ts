import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

type Params = {
  params: { cardId: string };
};

export async function GET(req: Request, { params }: Params) {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const card = await db.card.findUnique({
      where: {
        id: params.cardId,
        list: {
          board: {
            orgId,
          },
        },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
