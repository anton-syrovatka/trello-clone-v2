'use client';

import { ElementRef, useLayoutEffect, useRef, useState } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';

import { cn } from '@/lib/utils';
import { ListWithCards } from '@/types';

import { CardForm } from './card-form';
import { CardItem } from './card-item';
import { ListHeader } from './list-header';
import { Card } from '@prisma/client';

type Props = {
  data: ListWithCards;
  index: number;
};

export function ListItem({ data, index }: Props) {
  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const [isEditing, setIsEditing] = useState(false);

  useLayoutEffect(() => {
    if (isEditing) {
      textareaRef.current?.focus();
    }
  }, [isEditing]);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full max-h-full overflow-y-auto rounded-md  bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    'mx-1 px-1 py-0.5 flex flex-col gap-y-2',
                    data.cards.length > 0 ? 'mt-2' : 'mt-0'
                  )}
                >
                  {data.cards.map((card: Card, index: number) => (
                    <CardItem index={index} key={card.id} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              listId={data.id}
              ref={textareaRef}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
}
