import Link from "next/link";

export default function Profile() {
  const inputStyle = "w-full border border-gray-300 rounded-lg p-3 mb-3 text-lg";
  return (
    <div id="wd-profile-screen" className="max-w-sm p-2">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className={`wd-username ${inputStyle}`}
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={`wd-password ${inputStyle}`}
      />
      <br />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className={inputStyle} />
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className={inputStyle}
      />
      <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" className={inputStyle} />
      <br />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" className={inputStyle} />
      <br />
      <select defaultValue="FACULTY" id="wd-role" className={inputStyle}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">Sign out</Link>
    </div>
  );
}
