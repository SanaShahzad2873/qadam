import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IntroScreen from './components/IntroScreen'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import TheCraft from './pages/TheCraft'
import Collections from './pages/Collections'
import MadeForYou from './pages/MadeForYou'
import Order from './pages/Order'
import Journal from './pages/Journal'
import JournalPost from './pages/JournalPost'
import Contact from './pages/Contact'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Show the cinematic intro only once per visit. Guarded because some
    // browsers/preview frames block sessionStorage entirely.
    try {
      const seen = sessionStorage.getItem('qadam-intro-seen')
      if (seen) setShowIntro(false)
    } catch {
      // storage unavailable — just show the intro every time, no big deal
    }
  }, [])

  const handleEnter = () => {
    try {
      sessionStorage.setItem('qadam-intro-seen', '1')
    } catch {
      // storage unavailable — still proceed to the site
    }
    setShowIntro(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" onEnter={handleEnter} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/our-story" element={<OurStory />} />
                  <Route path="/the-craft" element={<TheCraft />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/made-for-you" element={<MadeForYou />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/journal" element={<Journal />} />
                  <Route path="/journal/:slug" element={<JournalPost />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
