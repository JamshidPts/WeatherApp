import { BrowserRouter } from "react-router-dom"
import WeatherRouter from "./router/WeatherRouter"

function App() {

  return (
    <>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <WeatherRouter />
    </BrowserRouter>
    </>
  )
}

export default App
