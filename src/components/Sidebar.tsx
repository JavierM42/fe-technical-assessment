import NewButton from "./NewButton";
import SidebarMenuItem, { SidebarMenuItemProps } from "./SidebarMenuItem";
import SiteHeader from "./SiteHeader";

const MENU_ITEMS: SidebarMenuItemProps[] = [
  { icon: "database", name: "Data Name" },
  { icon: "barchart", name: "Monitoring" },
  { icon: "cog", name: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="min-h-screen border-r border-[#e6e6e6] py-2.5 w-60 flex flex-col gap-2">
      <div className="px-2 space-y-2">
        <SiteHeader />
        <NewButton />
      </div>
      <ul className="flex-1 overflow-auto">
        {MENU_ITEMS.map((item) => (
          <SidebarMenuItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
