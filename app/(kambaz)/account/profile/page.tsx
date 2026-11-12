
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useAccountContext,
  type User,
} from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [dob, setDob] = useState("2000-01-01");

  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 mb-3 text-lg";

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }

    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!currentUser || !profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-sm p-2">
      <h3 className="mb-3 text-2xl font-semibold">
        Profile
      </h3>

      {/* Username */}
      <input
        id="wd-username"
        value={profile.username}
        placeholder="username"
        onChange={(e) =>
          setProfile({
            ...profile,
            username: e.target.value,
          })
        }
        className={`wd-username ${inputStyle}`}
      />

      {/* Password */}
      <input
        id="wd-password"
        value={profile.password}
        placeholder="password"
        type="password"
        onChange={(e) =>
          setProfile({
            ...profile,
            password: e.target.value,
          })
        }
        className={`wd-password ${inputStyle}`}
      />

      {/* First Name */}
      <input
        id="wd-firstname"
        value={profile.firstName}
        placeholder="First Name"
        onChange={(e) =>
          setProfile({
            ...profile,
            firstName: e.target.value,
          })
        }
        className={inputStyle}
      />

      {/* Last Name */}
      <input
        id="wd-lastname"
        value={profile.lastName}
        placeholder="Last Name"
        onChange={(e) =>
          setProfile({
            ...profile,
            lastName: e.target.value,
          })
        }
        className={inputStyle}
      />

      {/* Date of Birth - Local State */}
      <input
        id="wd-dob"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={inputStyle}
      />

      {/* Email */}
      <input
        id="wd-email"
        type="email"
        value={profile.email}
        placeholder="Email"
        onChange={(e) =>
          setProfile({
            ...profile,
            email: e.target.value,
          })
        }
        className={inputStyle}
      />

      {/* Role */}
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value as User["role"],
          })
        }
        className={inputStyle}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      {/* Sign Out */}
      <button
        type="button"
        id="wd-signout-btn"
        onClick={signout}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
