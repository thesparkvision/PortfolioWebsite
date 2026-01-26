import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-linear-to-b from-amber-50 via-amber-50 to-orange-100 text-amber-950'>
      <BrowserRouter basename='/'>
        <Header />
        <main className='flex-1 pb-10! flex flex-col gap-8 px-4 md:px-40 lg:px-50 xl:px-60 py-4'>
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
