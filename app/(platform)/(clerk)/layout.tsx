import React, { PropsWithChildren } from "react";

function ClerkLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}

export default ClerkLayout;
