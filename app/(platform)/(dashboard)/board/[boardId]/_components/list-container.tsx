"use client";

import { ListWithCards } from "@/types";

import { ListForm } from "./list-form";

type Props = {
  data: ListWithCards[];
  boardId: string;
};

export function ListContainer({ data, boardId }: Props) {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
