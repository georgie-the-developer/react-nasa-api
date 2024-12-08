import React from "react";
import Main from "./components/Main";
export default function App() {
  const img = "/src/assets/someimg.jpg";
  const alt = "if you see this, something went wrong";
  return (
    <>
      <Main img={img} alt={alt} />
    </>
  );
}
