"use client";

export default function YourForm() {
  return (
    <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Student Profile</h4>
      <p>SAMPLE profile: Anish Banerjee</p>

      <p>
        <label htmlFor="wd-profile-first-name">First name</label><br />
        <input id="wd-profile-first-name" name="firstName" type="text" placeholder="SAMPLE: Anish" />
      </p>
      <p>
        <label htmlFor="wd-profile-last-name">Last name</label><br />
        <input id="wd-profile-last-name" name="lastName" type="text" placeholder="SAMPLE: Banerjee" />
      </p>
      <p>
        <label htmlFor="wd-profile-password">Password</label><br />
        <input id="wd-profile-password" name="password" type="password" placeholder="SAMPLE: Enter a password" autoComplete="new-password" />
      </p>
      <p>
        <label htmlFor="wd-profile-bio">Bio / why I am taking this course</label><br />
        <textarea id="wd-profile-bio" name="bio" cols={50} rows={4} placeholder="SAMPLE: I am Anish Banerjee, and I want to learn how to build accessible web applications." />
      </p>

      <fieldset>
        <legend>Class standing</legend>
        <input id="wd-profile-freshman" name="classStanding" type="radio" value="freshman" />
        <label htmlFor="wd-profile-freshman">Freshman</label><br />
        <input id="wd-profile-sophomore" name="classStanding" type="radio" value="sophomore" defaultChecked />
        <label htmlFor="wd-profile-sophomore">Sophomore</label><br />
        <input id="wd-profile-junior" name="classStanding" type="radio" value="junior" />
        <label htmlFor="wd-profile-junior">Junior</label><br />
        <input id="wd-profile-senior" name="classStanding" type="radio" value="senior" />
        <label htmlFor="wd-profile-senior">Senior</label><br />
        <input id="wd-profile-graduate" name="classStanding" type="radio" value="graduate" />
        <label htmlFor="wd-profile-graduate">Graduate</label>
      </fieldset>

      <fieldset>
        <legend>Enrollment</legend>
        <input id="wd-profile-full-time" name="enrollment" type="radio" value="full-time" defaultChecked />
        <label htmlFor="wd-profile-full-time">Full-time</label><br />
        <input id="wd-profile-part-time" name="enrollment" type="radio" value="part-time" />
        <label htmlFor="wd-profile-part-time">Part-time</label>
      </fieldset>

      <fieldset>
        <legend>Interests (choose any)</legend>
        <input id="wd-profile-javascript" name="interests" type="checkbox" value="javascript" defaultChecked />
        <label htmlFor="wd-profile-javascript">JavaScript</label><br />
        <input id="wd-profile-react" name="interests" type="checkbox" value="react" defaultChecked />
        <label htmlFor="wd-profile-react">React</label><br />
        <input id="wd-profile-accessibility" name="interests" type="checkbox" value="accessibility" />
        <label htmlFor="wd-profile-accessibility">Web accessibility</label>
      </fieldset>

      <p>
        <label htmlFor="wd-profile-major">Major</label><br />
        <select id="wd-profile-major" name="major" defaultValue="computer-science">
          <option value="computer-science">Computer Science</option>
          <option value="data-science">Data Science</option>
          <option value="information-science">Information Science</option>
          <option value="design">Design</option>
        </select>
      </p>
      <p>
        <label htmlFor="wd-profile-topics">Topics to deepen this term (select multiple)</label><br />
        <select id="wd-profile-topics" name="topics" multiple size={5} defaultValue={["react", "apis"]}>
          <option value="html">Semantic HTML</option>
          <option value="css">Responsive CSS</option>
          <option value="react">React components</option>
          <option value="apis">REST APIs</option>
          <option value="databases">Databases</option>
        </select>
      </p>

      <p>
        <label htmlFor="wd-profile-email">School email</label><br />
        <input id="wd-profile-email" name="email" type="email" placeholder="SAMPLE: jane@university.edu" />
      </p>
      <p>
        <label htmlFor="wd-profile-graduation">Expected graduation year</label><br />
        <input id="wd-profile-graduation" name="graduationYear" type="number" min={2026} max={2040} defaultValue={2029} />
      </p>
      <p>
        <label htmlFor="wd-profile-start-date">Program start date</label><br />
        <input id="wd-profile-start-date" name="programStart" type="date" defaultValue="2025-09-03" />
      </p>
      <p>
        <label htmlFor="wd-profile-excitement">Course excitement (0 = low, 10 = high)</label><br />
        <input id="wd-profile-excitement" name="excitement" type="range" min={0} max={10} step={1} defaultValue={8} />
      </p>

      <button id="wd-profile-save" type="submit">Save</button>{" "}
      <button id="wd-profile-cancel" type="button">Cancel</button>
    </form>
  );
}
