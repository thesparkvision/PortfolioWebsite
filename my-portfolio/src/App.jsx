import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import './App.css'

function App() {

  return (
    <div className='mx-4 md:mx-40 lg:mx-50 xl:mx-60 min-h-screen flex flex-col'>
      <BrowserRouter basename='/'>
        <Header/>
        <main className='flex-1 px-0! pb-10!'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
