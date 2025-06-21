/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
// import { useState } from "react";
import Profile from "./profile";
import { Gallery } from "./profile";
import { VideoLadooo } from "./profile";

export default function App() {
  return (
    <>
      <h1>Amazing Uncle Daught and Son </h1>
      <Intro />
      {/* <Profile /> */}
      <Gallery />
      <VideoLadooo />
    </>
  );
}

function Intro() {
  return <h3>Below scientist list is who present in Noval Price.</h3>;
}
