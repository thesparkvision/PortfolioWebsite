import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

const AppRoutes = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div data-theme={isDark ? 'dark' : 'light'} className='min-h-screen flex flex-col bg-[var(--color-background)]'>
      <a href='#main-content' className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white'>Skip to main content</a>
      <Header isDark={isDark} onToggleTheme={() => setIsDark(current => !current)} />
      <main id='main-content' className='mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 py-4 pb-10! sm:px-8 lg:px-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppRoutes
