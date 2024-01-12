import { PropsWithChildren } from "react";
import { OrgControl } from "./_components/org-control";

function OrganizationIdLayout({ children }: PropsWithChildren) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganizationIdLayout;
