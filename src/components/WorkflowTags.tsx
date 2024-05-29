import clsx from "clsx";
import { Tag } from "../hooks/useFetchWorkflows";

type Props = {
  tags: Tag[];
};

const WorkflowTags = ({ tags }: Props) => {
  return (
    <div
      className={clsx(
        "w-fit border border-[#09090b] border-opacity-[8%] rounded-full flex items-center px-2.5 py-1 gap-2 text-[13px] font-semibold",
        tags.length === 0 && "text-[#808593]"
      )}
    >
      {tags.length ? (
        <>
          <ul className="flex gap-1">
            {tags.map((tag) => (
              <li
                key={tag.name}
                className="rounded-sm size-2"
                style={{ background: tag.color }}
              />
            ))}
          </ul>
          {tags.length > 1 ? `${tags.length} tags` : tags[0].name}
        </>
      ) : (
        <>
          +{/* TODO SVG icon */}
          Add Tag
        </>
      )}
    </div>
  );
};

export default WorkflowTags;

// There should be a tooltip when there are two or more tags.
