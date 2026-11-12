
import type { ReactNode } from "react";
import { AccountProvider } from "./account/AccountContext";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="font-sans">
        <KambazNavigation />
        <div className="ml-[120px] p-3">
          {children}
        </div>
      </div>
    </AccountProvider>
  );
}
