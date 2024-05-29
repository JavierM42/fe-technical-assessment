import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import Sidebar from "./components/Sidebar";
import SortPicker from "./components/SortPicker";

function App() {
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
      </div>
    </div>
  );
}

export default App;

// TODO headwind
// TODO cmd+F for -[ arbitrary values
