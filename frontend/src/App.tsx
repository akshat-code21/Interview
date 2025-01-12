import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Invalid from './components/Invalid'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/invalid" element={<Invalid/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
