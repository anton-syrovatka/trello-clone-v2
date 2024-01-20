import { ModalProvider } from "@/components/providers/modal-providers";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

function PlatformLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
}

export default PlatformLayout;
