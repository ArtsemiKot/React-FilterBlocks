import Preview from './pages/Preview/Preview'
import Vacansy from './pages/Vacansy/Vacansy'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Preview />}></Route>
        <Route path="/:id" element={<Vacansy />}></Route>
      </Routes>
    </>
  )
}

export default App;
