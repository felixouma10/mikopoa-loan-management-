import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex min-h-screen bg-[#f7f7ff]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;