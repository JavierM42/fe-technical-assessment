import { Workflow } from "../types/workflow";
import WorkflowListItem from "./WorkflowListItem";

type Props = { workflows: Workflow[] };

const WorkflowList = ({ workflows }: Props) => {
  return (
    <table className="w-full">
      <thead className="contents">
        <tr>
          <th className="px-2 py-4 text-sm text-left">Type</th>
          <th className="px-2 py-4 text-sm text-left">Name</th>
          <th className="px-2 py-4 text-sm text-left">Tags</th>
          <th className="px-2 py-4 text-sm text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {workflows.map((workflow) => (
          // name is not necessarily unique due to LLM, ideally we'd use a unique ID
          <WorkflowListItem key={workflow.name} {...workflow} />
        ))}
      </tbody>
    </table>
  );
};

export default WorkflowList;

// I didn't have the time to manually configure column widths

// My preferred way to implement tables is through a list that looks like one
// (hence the name), but I had to cut scope. List-based tables, styled with CSS
// grid or flex, are easier to transform into responsive cards, while also
// avoiding table styling complexity.
