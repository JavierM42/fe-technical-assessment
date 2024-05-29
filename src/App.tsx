import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import Sidebar from "./components/Sidebar";
import SortPicker from "./components/SortPicker";
import WorkflowList from "./components/WorkflowList";
import useFetchWorkflows from "./hooks/useFetchWorkflows";

function App() {
  const workflows = useFetchWorkflows();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <PageHeader
          title="Workflows"
          rightContent={
            <>
              <SortPicker />
              <SearchInput />
            </>
          }
        />
        <div className="px-5">
          {workflows ? (
            <WorkflowList workflows={workflows} />
          ) : (
            "Loading workflows"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

// I didn't get to configure an automatic class sorter for tailwind such as
// headwind or the newer ESLint-based one, but I would have if I could.

// Since no named tailwind palette was provided, I've used -[arbitrary] values,
// which I would not recommend in a production application. I made an exception
// for shadows since those are a bit too verbose for the arbitrary syntax.

// I'd love to have a nicer loading state and/or one with React Suspense.
