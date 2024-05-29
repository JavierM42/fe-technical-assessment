import { ReactNode } from "react";

type Props = {
  title: string;
  /** Items within a fragment will be positioned in a row with a gap of 2 units */
  rightContent?: ReactNode;
};

const PageHeader = ({ title, rightContent }: Props) => {
  return (
    <div className="flex gap-6 px-5 pt-5 pb-6 border-b border-[#ecedef]">
      <h2 className="flex-1 text-3xl font-bold">{title}</h2>
      {rightContent && <div className="flex gap-2">{rightContent}</div>}
    </div>
  );
};

export default PageHeader;

/*
  I think it's kind of an uncommon pattern, but I like to set up these types of
  elements so _they_ decide how to position their right content items.
  It's usual for those to be a list of buttons or inputs, and I'd rather not have
  to worry about whether the gap was 8px or 10px every time we use it.
*/
