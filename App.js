import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App =()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);