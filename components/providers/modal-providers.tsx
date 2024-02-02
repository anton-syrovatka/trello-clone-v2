'use client';

import { useEffect, useState } from 'react';

import { CardModal } from '@/components/modals/card-modal';
import { ProModal } from '../modals/card-modal/pro-modal';

// Hydration errors protection
// Only rendered on the client
export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
}
