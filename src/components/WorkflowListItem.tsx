import { formatDistanceToNow } from "date-fns";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashCanIcon from "../assets/icons/trash-can.svg?react";
import { Workflow } from "../types/workflow";
import WorkflowTags from "./WorkflowTags";

type Props = Workflow;

const WorkflowListItem = ({ name, type, lastUpdated, tags }: Props) => {
  return (
    <tr>
      <td className="px-2 py-4 first-letter:capitalize text-[#868686] text-[13px] border-y border-[#09090b] border-opacity-[8%]">
        {type}
      </td>
      <td className="px-2 py-4 text-sm border-y font-medium border-[#09090b] border-opacity-[8%]">
        {name}
      </td>
      <td className="px-2 py-4 border-y border-[#09090b] border-opacity-[8%]">
        <WorkflowTags tags={tags} />
      </td>
      <td className="px-2 py-4 text-[13px] border-y border-[#09090b] border-opacity-[8%] text-[#808593]">
        {formatDistanceToNow(lastUpdated)} ago
      </td>
      <td className="px-2 py-4 border-y border-[#09090b] border-opacity-[8%]">
        <div className="flex gap-2">
          <button
            className="size-6 p-1 bg-[#09090b] bg-opacity-[4%] rounded-md"
            aria-label="Edit"
          >
            <PencilIcon />
          </button>
          <button
            className="size-6 p-1 bg-[#09090b] bg-opacity-[4%] rounded-md"
            aria-label="Delete"
          >
            <TrashCanIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WorkflowListItem;

// Edit and delete buttons should have a tooltip.

// Last updated is not exactly as in the design, as it will never show "Today", "Yesterday"
// or "This week", but it's the library I was familiar with and I didn't have the time to do
// proper research or implement fuzzy date formatting myself.
