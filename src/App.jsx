import { hotdogs } from "../public/dogMaluco"
import HotdogRows from "./assets/components/foodrow/hotdogSection/HotdogSection";
import "./app.css"

function App() { 
  return (
    <>
    <h1>Dogão maluco</h1>
      <HotdogRows hotdog={hotdogs}/>
    </>
  )
}

export default App