import { MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler;
};

const NewButton = ({ onClick }: Props) => {
  return (
    <button
      className="flex items-center justify-center gap-1.5 w-full py-1.5 pl-3 pr-2.5 text-[13px] font-semibold shadow-xs border border-[#09090b] border-opacity-[8%] rounded-md hover:bg-slate-100 transition-colors"
      onClick={onClick}
    >
      New +{/* TODO inline import plus.svg */}
    </button>
  );
};

export default NewButton;

// I came up with a simple hover state so the button feels like one.
// onClick is of course unused but it's the minimal set of props the actual non-placeholder button would have
