import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

export default function IntroScreen({ onEnter }) {
  const [stage, setStage] = useState('logo') // logo -> tagline -> ready

  useEffect(() => {
    const t1 = setTimeout(() => setStage('tagline'), 2400)
    const t2 = setTimeout(() => setStage('ready'), 6200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {stage !== 'ready' && (
        <button
          onClick={() => setStage('ready')}
          className="focus-gold absolute bottom-8 right-8 font-ui text-[11px] tracking-[0.2em] uppercase text-cream/40 hover:text-gold transition-colors"
        >
          Skip
        </button>
      )}

      <AnimatePresence mode="wait">
        {stage === 'logo' && (
          <motion.img
            key="logo"
            src={logo}
            alt="Qadam"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        )}

        {stage === 'tagline' && (
          <motion.p
            key="tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="font-display italic text-xl md:text-2xl text-cream/90 text-center"
          >
            Har safar ek qadam se shuru hota hai.
          </motion.p>
        )}

        {stage === 'ready' && (
          <motion.div
            key="ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <img src={logo} alt="Qadam" className="w-28 h-28 md:w-36 md:h-36 object-contain" />
            <p className="font-display italic text-cream/70 text-sm md:text-base tracking-wide">by Sana Shahzad</p>
            <button
              onClick={onEnter}
              className="focus-gold mt-4 border border-gold px-10 py-3 font-ui text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              Enter Website
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
