import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <Content />
    </div>
    <Footer />
  </div>
);

export default App;
