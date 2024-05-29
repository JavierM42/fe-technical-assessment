import { Workflow } from "../hooks/useFetchWorkflows";
import WorkflowTags from "./WorkflowTags";

type Props = Workflow;

const WorkflowListItem = ({ name, type, tags }: Props) => {
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
      <td className="px-2 py-4 border-y border-[#09090b] border-opacity-[8%]">
        <div className="flex gap-1">
          <button className="p-1 bg-[#09090b] bg-opacity-[4%] rounded-md">
            Edit
          </button>
          <button className="p-1 bg-[#09090b] bg-opacity-[4%] rounded-md">
            Delete
            {/* TODO icons */}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WorkflowListItem;
