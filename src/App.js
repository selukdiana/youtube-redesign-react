import { useState } from "react";
import { Header } from "./components/Header";
import "./colors.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { VideoPage } from "./pages/VideoPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className="content">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <VideoPage />
      </div>
    </>
  );
}

export default App;
