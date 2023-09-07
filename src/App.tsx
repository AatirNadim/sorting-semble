import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactSlider from "react-slider";

import Visualizer from "./components/Content/Visualizer";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Header from "./components/Header";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header  />
      <div className="w-full h-[90%] flex flex-row" >
        <Sider />
        <Content />
      </div>
    </div>
  );
};

export default App;
