import { LSideBar } from "./components/Lsidebar";
import { Main } from "./components/mainContent";
import { Navbar } from "./components/navbar";
import { RSideBar } from "./components/Rsidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Toaster />
      {/* in components folder */}
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

function Content() {
  return (
    <div className="h-full flex flex-row overflow-y-hidden">
      {/* in components folder */}
      <LSideBar />
      <Main />
      <RSideBar />
    </div>
  );
}
