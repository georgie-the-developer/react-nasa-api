import { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import config from "./config.json";
export default function App() {
  const [apodData, setApodData] = useState({
    alt: "if you see this, something went wrong",
    projectName: "APOD",
    date: "",
    img: "",
    title: "",
    description: "",
  });
  const fetchApodData = async () => {
    let url = config.API_URL;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  const getApodData = async () => {
    try {
      let data;
      let cachedData = sessionStorage.getItem("savedApodData");
      let cacheExpiry =
        JSON.parse(sessionStorage.getItem("savedApodDataExpiry")) ?? 0;
      let cacheExpired = Date.now() > cacheExpiry;
      if (cachedData && !cacheExpired) {
        data = JSON.parse(cachedData);
        console.log("Using cached data");
      } else {
        data = await fetchApodData();
        console.log("Using fetched data");
        cacheApodData(data);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const cacheApodData = (data) => {
    const now = new Date().getTime();
    let startOfDay = now - (now % 86400000);
    let endDate = startOfDay + 86400000;
    sessionStorage.setItem("savedApodData", JSON.stringify(data));
    sessionStorage.setItem("savedApodDataExpiry", endDate);
  };
  useState(async () => {
    let data = await getApodData();
    setApodData((prevValues) => ({
      ...prevValues,
      date: data.date,
      img: data.hdurl,
      title: data.title,
      description: data.explanation,
    }));
  }, []);
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
      <Main img={apodData.img} alt={apodData.alt} />
      <Sidebar
        title={apodData.title}
        date={apodData.date}
        description={apodData.description}
        sidebarHidden={sidebarHidden}
        closeSidebar={closeSidebar}
      />
      <Footer
        title={apodData.projectName}
        subtitle={apodData.title}
        date={apodData.date}
        openSidebar={openSidebar}
      />
    </>
  );
}
