"use client";

import { useEffect, useState } from "react";

import { CardModal } from "@/components/modals/card-modal";

// Hydration errors protection
// Only rendered on the client
export const ModalProvider = () => {
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
    </>
  );
};
