import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'

import './App.css'


function App() {

  return (
    <div className='mx-16'>
      <BrowserRouter basename='/'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
