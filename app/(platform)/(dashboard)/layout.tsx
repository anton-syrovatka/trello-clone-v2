import React, { PropsWithChildren } from 'react';
import { Navbar } from './_components/navbar';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
