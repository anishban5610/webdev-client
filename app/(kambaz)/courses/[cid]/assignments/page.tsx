import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button type="button" className="rounded border bg-white px-2 py-0.5 text-sm">
          <FaPlus />
        </button>
      </h3>
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
        <AssignmentItem
            cid={cid}
            aid = "A4"
            title = "A4 - APIs"
            details = "Multiple Modules | Not Available until October 28 9AM | Due November 3 9AM | 100 Points"
            />

        <AssignmentItem
          cid={cid}
          aid="ai-a"
          title="A9 - Sample assignment"
          details="Multiple Modules | Not Available until December 2 9AM | Due December 9 9AM | 100 Points"
        />
      </ul>
    </div>
  );
}
