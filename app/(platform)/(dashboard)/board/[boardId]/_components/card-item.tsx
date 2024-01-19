"use client";

import { Card } from "@prisma/client";

type Props = {
  data: Card;
  index: number;
};

export function CardItem({ data, index }: Props) {
  return (
    <div
      role="button"
      className="truncate border-2 border-transparent hover:border-black py-2 px-3
        text-sm bg-white rounded-md shadow-sm"
    >
      {data.title}
    </div>
  );
}
