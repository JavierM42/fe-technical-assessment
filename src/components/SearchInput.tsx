import { useDebounceCallback } from "usehooks-ts";
import MagnifyingGlassIcon from "../assets/icons/magnifying-glass.svg?react";

const NO_OP = () => undefined;
const DEBOUNCE_DELAY = 500;

type Props = {
  onSearch?: (query: string) => void;
};

const SearchInput = ({ onSearch }: Props) => {
  const debouncedOnSearch = useDebounceCallback(
    onSearch || NO_OP,
    DEBOUNCE_DELAY
  );

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="size-[14px] absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className="flex items-center justify-center gap-1.5 w-full py-1.5 pl-[34px] pr-3 text-sm shadow-sm border border-[#09090b] border-opacity-[16%] rounded-md"
        onChange={(event) => debouncedOnSearch?.(event.target.value)}
        placeholder="Search workflows"
      />
    </div>
  );
};

export default SearchInput;

// onSearch is of course unused but it's the minimal set of props I'd give this component.
// Assuming search happens on type, I've added a debounce to prevent spamming queries.
// useDebounceCallback imported instead of implemented, no need to reinvent the wheel.

// This was just the fastest way to position the search icon, there are nicer options in my opinion.

// Input has no label which is an accessibility issue.
