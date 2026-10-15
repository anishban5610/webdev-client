import Link from "next/link";

export default function AssignmentEditor() {
  const inputStyle = "w-full border border-gray-300 rounded p-3";
  const labelStyle = "block mb-2 font-semibold text-gray-700";
  return (
    <div id="wd-assignments-editor" className="p-4 text-gray-700">
      <label htmlFor="wd-name" className={labelStyle}>
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={inputStyle} />

      <div className="border border-gray-300 rounded p-4 mt-6 mb-6">
        <textarea id="wd-description" className="w-full min-h-64 resize-y outline-none">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel.
      </textarea>
        
      </div>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" defaultValue="ASSIGNMNENTS">
                    <option>ASSIGNMENTS</option>
                    <option>QUIZZES</option>
                    <option>EXAMS</option>
                    <option>PROJECT</option></select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as" defaultValue="Percentage">
                    <option>Percentage</option>
                    <option>Points</option>
                    </select>
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type" defaultValue="Online">
                    <option>Online</option>
                    <option>On Paper</option>
                    <option>External Tool</option>
                </select>

                <h4>Online Entry Options</h4>
                <input id="wd-text-entry" type="checkbox" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input id="wd-website-url" type="checkbox" defaultChecked />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input id="wd-media-recordings" type="checkbox" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input id="wd-studnet-annotations" type="checkbox" />
                <label htmlFor="wd-studnet-annotations">Student Annotations</label>
                <br />
                <input id="wd-file-upload" type="checkbox" />
                <label htmlFor="wd-file-upload">File Upload</label>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
                </td>
                <td>
                    <label htmlFor="wd-assign-to">Assign To</label>
                    <br />
                    <input id="wd-assign-to" defaultValue="Everyone" />

                    <br />
                    <br />

                    <label htmlFor="wd-due-date">Due</label>
                    <br />
                    <input id="wd-due-date" type="date" />

                    <br />
                    <br />

                    <label htmlFor="wd-available-from">Available From</label>
                    <br />
                    <input id="wd-available-from" type="date" />
                    <br />
                    <br />
                    <label htmlFor="wd-available-until">Available Until</label>
                    <br />
                    <input id="wd-available-until" type="date" />
                </td>
        </tr>
        </tbody>
      </table>
      <br />
      <Link href="/courses/1234/assignments" id="wd-cancel">Cancel</Link>{" "}
      <Link href="/courses/1234/assignments" id="wd-save">Save</Link>
    </div>
  );
}
