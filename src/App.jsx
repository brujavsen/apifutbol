import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexLayout from "./layout/IndexLayout"
import Home from "./pages/Home"
import Standing from "./pages/Standing"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexLayout/>}>
              <Route path="/" element={<Home/>}></Route>
              <Route path="standing" element={<Standing/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
