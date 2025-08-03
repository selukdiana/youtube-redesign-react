import { useState } from "react";
import { Header } from "./components/Header";
import "./colors.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className="content">{isSidebarOpen && <Sidebar />}</div>
    </>
  );
}

export default App;
