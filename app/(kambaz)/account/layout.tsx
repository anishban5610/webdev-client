import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex flex-col gap-6 sm:flex-row">
      <aside className="shrink-0 sm:w-44">
        <AccountNavigation />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
