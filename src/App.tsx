import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import Loader from '@/components/Loader'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Brief artificial delay so the loader is visible rather than a
    // flicker, then it fades out on its own via the Loader component.
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
