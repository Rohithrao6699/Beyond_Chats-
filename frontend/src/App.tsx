import { LSideBar } from "./components/Lsidebar";
import { Main } from "./components/mainContent";
import { Navbar } from "./components/navbar";
import { RSideBar } from "./components/Rsidebar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;

function Content() {
  return (
    <div className="h-full flex flex-row overflow-y-hidden">
      <LSideBar />
      <Main />
      <RSideBar />
    </div>
  );
}
