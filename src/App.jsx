import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  const img = "/src/assets/someimg.jpg";
  const alt = "if you see this, something went wrong";
  const projectName = "APOD";
  const title = "Aurora around Saturn's North Pole";
  const date = "2024-12-9";
  return (
    <>
      <Main img={img} alt={alt} />
      <Footer title={projectName} subtitle={title} date={date} />
    </>
  );
}
