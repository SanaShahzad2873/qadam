import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-dim/30 bg-ink-deep px-6 md:px-12 py-14">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display italic text-xl md:text-2xl text-cream/90 leading-relaxed">
          "Riwayat kabhi purani nahi hoti...<br className="hidden md:block" /> sirf naye qadmon ka intezar karti hai."
        </p>

        <div className="gold-line w-24 mx-auto my-8" />

        <div className="flex flex-wrap justify-center gap-8 font-ui text-xs tracking-[0.15em] uppercase text-cream/70">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold focus-gold">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold focus-gold">TikTok</a>
          <a href="https://wa.me/923123207029" target="_blank" rel="noopener noreferrer" className="hover:text-gold focus-gold">WhatsApp</a>
          <Link to="/contact" className="hover:text-gold focus-gold">Contact</Link>
        </div>

        <p className="mt-8 font-ui text-[11px] tracking-widest uppercase text-cream/40">
          Qadam by Sana Shahzad &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
