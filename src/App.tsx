import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { Home } from './pages/Home'
import { Uganda } from './pages/Uganda'
import { UgandaSchools } from './pages/UgandaSchools'
import { UgandaMedical } from './pages/UgandaMedical'
import { UgandaOther } from './pages/UgandaOther'
import { Kenya } from './pages/Kenya'
import { KenyaSchoolFees } from './pages/KenyaSchoolFees'
import { KenyaOther } from './pages/KenyaOther'
import { Donations } from './pages/Donations'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/uganda" element={<Uganda />} />
            <Route path="/uganda/schools" element={<UgandaSchools />} />
            <Route path="/uganda/medical-center" element={<UgandaMedical />} />
            <Route path="/uganda/other" element={<UgandaOther />} />
            <Route path="/kenya" element={<Kenya />} />
            <Route path="/kenya/school-fees" element={<KenyaSchoolFees />} />
            <Route path="/kenya/other" element={<KenyaOther />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  )
}

export default App
