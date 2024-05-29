import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import Sidebar from "./components/Sidebar";
import SortPicker from "./components/SortPicker";
import WorkflowList from "./components/WorkflowList";
import useFetchWorkflows from "./hooks/useFetchWorkflows";

function App() {
  const workflows = useFetchWorkflows();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
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

// TODO headwind
// TODO cmd+F for -[ arbitrary values

// I'd love to have a nicer loading state and/or one with React Suspense,
// but there are time constraints.
