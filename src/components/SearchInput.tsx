import { useDebounceCallback } from "usehooks-ts";

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
    <input
      type="text"
      className="flex items-center justify-center gap-1.5 w-full py-1.5 pr-3 text-sm shadow-sm border border-[#09090b] border-opacity-[16%] rounded-md"
      onChange={(event) => debouncedOnSearch?.(event.target.value)}
      placeholder="Search workflows"
    />
    // TODO search icon
  );
};

export default SearchInput;

// onSearch is of course unused but it's the minimal set of props I'd give this component.
// Assuming search happens on type, I've added a debounce to prevent spamming queries.
// useDebounceCallback imported instead of implemented, no need to reinvent the wheel.
