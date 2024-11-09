import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Phones } from "./pages/phones"
import { Computers } from "./pages/computers"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Phones />} />
          <Route path="computers" element={<Computers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
