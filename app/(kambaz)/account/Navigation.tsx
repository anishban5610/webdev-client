"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <nav id="wd-account-navigation" aria-label="Account navigation" className="wd list-group rounded-none text-lg">
      {[
        ["/account/signin", "Signin"],
        ["/account/signup", "Signup"],
        ["/account/profile", "Profile"],
      ].map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          className={pathname === href ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
