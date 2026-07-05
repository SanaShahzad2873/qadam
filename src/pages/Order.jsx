import { motion } from 'framer-motion'
import WhatsAppOrderForm from '../components/WhatsAppOrderForm'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function Order() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-16">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Order</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-cream">Apna Qadam Uthayein</h1>
        <p className="text-cream/60 max-w-xl mx-auto">
          Form bharein, aur order seedha WhatsApp par bhej dein. Hum jald hi aapse rabta karenge.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
        <WhatsAppOrderForm />
      </motion.div>
    </div>
  )
}
