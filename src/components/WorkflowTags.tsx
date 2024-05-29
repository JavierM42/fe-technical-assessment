import clsx from "clsx";
import PlusIcon from "../assets/icons/plus.svg?react";
import { Tag } from "../types/workflow";

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
          <PlusIcon className="size-3" />
          Add Tag
        </>
      )}
    </div>
  );
};

export default WorkflowTags;

// There should be a tooltip when there are two or more tags.

// Add Tag should be a button
