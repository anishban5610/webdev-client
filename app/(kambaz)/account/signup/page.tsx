
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username.trim() || !password) return;
    if (password !== verifyPassword) return;

    setCurrentUser({
      _id: crypto.randomUUID(),
      username: username.trim(),
      password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });

    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">
        Sign up
      </h3>

      <input
        id="wd-username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        id="wd-verify-password"
        placeholder="verify password"
        type="password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        className="wd-verify-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <button
        type="button"
        id="wd-signup-btn"
        onClick={signup}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>

      <Link
        id="wd-signin-link"
        href="/account/signin"
        className="mb-2 block w-full rounded bg-gray-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
    </div>
  );
}
