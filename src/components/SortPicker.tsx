const SortPicker = () => {
  return (
    <button className="flex items-center justify-center gap-1 py-1.5 pl-3 pr-2.5 text-[13px] font-semibold border border-[#ecedef] rounded-md hover:bg-slate-100 transition-colors">
      Sort {/* TODO inline import triangle-down.svg */}
    </button>
  );
};

export default SortPicker;

// I came up with a simple hover state so the button feels like one.
// In the real version there'd be a dropdown on click, probably one with custom styles.
