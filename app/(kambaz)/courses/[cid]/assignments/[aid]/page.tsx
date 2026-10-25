import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const assignmentsHref = `/courses/${cid}/assignments`;
  const inputStyle = "w-full border border-gray-300 rounded p-3";
  const labelStyle = "block mb-2 font-semibold text-gray-700";
  const rowLabelStyle = "sm:text-right sm:pt-3";

  return (
    <div id="wd-assignments-editor" className="max-w-3xl space-y-6 p-4 text-gray-700">
      <div>
        <label htmlFor="wd-name" className={labelStyle}>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={inputStyle} />
      </div>

      <div>
        <label htmlFor="wd-description" className={labelStyle}>Description</label>
        <div className="border border-gray-300 rounded p-4">
          <textarea
            id="wd-description"
            className="w-full min-h-64 resize-y outline-none"
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-x-4 sm:gap-y-6">
        <label htmlFor="wd-points" className={rowLabelStyle}>Points</label>
        <input id="wd-points" type="number" defaultValue={100} className={inputStyle} />

        <label htmlFor="wd-group" className={rowLabelStyle}>Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={inputStyle}>
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className={rowLabelStyle}>Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="Percentage" className={inputStyle}>
          <option>Percentage</option>
          <option>Points</option>
        </select>

        <label htmlFor="wd-submission-type" className={rowLabelStyle}>Submission Type</label>
        <div className="space-y-5 rounded border border-gray-300 p-4">
          <select id="wd-submission-type" defaultValue="Online" className={inputStyle}>
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </select>
          <fieldset className="space-y-5">
            <legend className="mb-4 font-semibold">Online Entry Options</legend>
            {[
              ["wd-text-entry", "Text Entry"],
              ["wd-website-url", "Website URL"],
              ["wd-media-recordings", "Media Recordings"],
              ["wd-student-annotation", "Student Annotation"],
              ["wd-file-upload", "File Uploads"],
            ].map(([id, label]) => (
              <div key={id} className="flex items-center gap-2">
                <input id={id} type="checkbox" defaultChecked={id === "wd-website-url"} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className={rowLabelStyle}>Assign</div>
        <div className="space-y-5 rounded border border-gray-300 p-4">
          <div>
            <label htmlFor="wd-assign-to" className={labelStyle}>Assign to</label>
            <input id="wd-assign-to" defaultValue="Everyone" className={inputStyle} />
          </div>
          <div>
            <label htmlFor="wd-due-date" className={labelStyle}>Due</label>
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" className={inputStyle} />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="min-w-0">
              <label htmlFor="wd-available-from" className={labelStyle}>Available from</label>
              <input id="wd-available-from" type="date" defaultValue="2024-05-06" className={`${inputStyle} min-w-0`} />
            </div>
            <div className="min-w-0">
              <label htmlFor="wd-available-until" className={labelStyle}>Until</label>
              <input id="wd-available-until" type="date" defaultValue="2024-05-20" className={`${inputStyle} min-w-0`} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="wd-ai-editor-notes" className={labelStyle}>Sample notes</label>
        <textarea id="wd-ai-editor-notes" rows={3} className={`${inputStyle} resize-y`} />
      </div>

      <div className="flex justify-end gap-2 border-t border-gray-200 pt-4">
        <Link href={assignmentsHref} id="wd-cancel" className="rounded border border-gray-300 bg-neutral-100 px-4 py-2 hover:bg-neutral-200">Cancel</Link>
        <Link href={assignmentsHref} id="wd-save" className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Save</Link>
      </div>
    </div>
  );
}
