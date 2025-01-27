import { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
import config from "./config.json";
export default function App() {
  // apod data state for dynamicity
  const [apodData, setApodData] = useState({
    alt: "if you see this, something went wrong",
    projectName: "APOD",
    date: "",
    img: "",
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // fetch data from url
  const fetchApodData = async () => {
    let url = config.API_URL;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  // get data either from url or sessionStorage cache
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
  // cache data
  const cacheApodData = (data) => {
    const now = new Date().getTime();
    let startOfDay = now - (now % 86400000);
    let endDate = startOfDay + 86400000;
    sessionStorage.setItem("savedApodData", JSON.stringify(data));
    sessionStorage.setItem("savedApodDataExpiry", endDate);
  };
  // assign retrieved data to the apodData state
  useState(async () => {
    setIsLoading(true);
    let data = await getApodData();
    setApodData((prevValues) => ({
      ...prevValues,
      date: data.date,
      img: data.hdurl,
      title: data.title,
      description: data.explanation,
    }));
    setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
