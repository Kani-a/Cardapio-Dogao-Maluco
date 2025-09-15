import { hotdogs } from "../public/dogMaluco"
import HotdogRows from "./assets/components/foodrow/hotdogSection/HotdogSection";
import "./app.css"
import { Image } from "antd";

function App() { 
  return (
    <>
      <HotdogRows hotdog={hotdogs}/>
    </>
  )
}

export default App