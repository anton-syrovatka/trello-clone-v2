import { ClerkProvider } from "@clerk/nextjs";
import React, { PropsWithChildren } from "react";

function PlatformLayout({ children }: PropsWithChildren) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default PlatformLayout;
