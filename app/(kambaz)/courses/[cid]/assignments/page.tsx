import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 className="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
            cid={cid}
            aid = "A1"
            title = "A1 - ENV + HTML"
            details = "Multiple Modules | Not Available until October 6 9AM | Due October 13 9AM | 100 Points"
            />
        <AssignmentItem
            cid={cid}
            aid = "A2"
            title = "A2 - CSS + TAILWIND"
            details = "Multiple Modules | Not Available untill October 14 9AM | Due October 20 9AM | 100 Points"
            />
        <AssignmentItem
            cid={cid}
            aid = "A3"
            title = "A3 - JAVASCRIPT + REACT"
            details = "Multiple Modules | Not Available until October 21 9AM | Due October 27 9AM | 100 Points"
            />

      </ul>
    </div>
  );
}