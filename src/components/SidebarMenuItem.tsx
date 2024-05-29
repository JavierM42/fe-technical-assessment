type Props = {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
};

const SidebarMenuItem = ({ icon: Icon, name }: Props) => {
  return (
    <li className="px-2 py-1.5 flex items-center gap-2 text-[#565656] text-xs font-medium hover:bg-slate-100 transition-colors">
      <Icon className="size-3" />
      {name}
    </li>
  );
};

export type SidebarMenuItemProps = Props;
export default SidebarMenuItem;

// I've came up with a hover style so it looks a little more interactive.
