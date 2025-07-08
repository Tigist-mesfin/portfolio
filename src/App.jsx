import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


const App = () => {
  return (
    <div className="md:flex">
  <Sidebar />
  <MainContent />
</div>

  );
};

export default App;
