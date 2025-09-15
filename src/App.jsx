import { hotdogs } from "/public/dogMaluco.js"
import HotdogRows from "./assets/components/foodrow/hotdogSection/HotdogSection";

function App() { 
  return (
    <>
      <HotdogRows hotdog={hotdogs}/>
    </>
  )
}

export default App