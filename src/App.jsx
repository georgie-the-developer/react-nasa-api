import { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
export default function App() {
  const img = "/src/assets/someimg.jpg";
  const alt = "if you see this, something went wrong";
  const projectName = "APOD";
  const title = "Aurora around Saturn's North Pole";
  const date = "2024-12-9";
  const description = `
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. 
  lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. 
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. 
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem 
  ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum 
  dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem 
  sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
  lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.
          lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
          lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
           lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
            lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.
             lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
             lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
              lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
               lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.
                lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
                lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
                 lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.
                 lorem ipsum dolorem sit amet. lorem ipsum dolorem sit amet.lorem ipsum dolorem sit amet.`;
  // Sidebar opener/closer
  const [sidebarHidden, setSidebarHidden] = useState("hidden");
  const openSidebar = (e) => {
    setSidebarHidden("");
  };
  const closeSidebar = (e) => {
    setSidebarHidden("hidden");
  };
  return (
    <>
      <Main img={img} alt={alt} />
      <Sidebar
        title={title}
        date={date}
        description={description}
        sidebarHidden={sidebarHidden}
        closeSidebar={closeSidebar}
      />
      <Footer
        title={projectName}
        subtitle={title}
        date={date}
        openSidebar={openSidebar}
      />
    </>
  );
}
