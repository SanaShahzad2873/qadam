import { motion } from 'framer-motion'

const wrap = 'w-full h-24 md:h-28'
const strokeProps = {
  fill: 'none',
  stroke: '#c8a35d',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const draw = {
  hidden: { pathLength: 0, opacity: 0.4 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } },
}

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
})

// A needle drawing a running stitch across two panels of leather.
export function StitchIcon() {
  return (
    <motion.svg
      viewBox="0 0 120 70"
      className={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.line x1="60" y1="8" x2="60" y2="62" stroke="#5a4635" strokeWidth="1" strokeDasharray="2 3" variants={draw} />
      {[14, 30, 46, 66, 82, 98].map((x, i) => (
        <motion.path
          key={x}
          d={`M ${x} ${i % 2 === 0 ? 20 : 50} L ${x + 8} 35 L ${x} ${i % 2 === 0 ? 50 : 20}`}
          {...strokeProps}
          variants={draw}
          transition={{ ...draw.show.transition, delay: i * 0.15 }}
        />
      ))}
      <motion.circle cx="98" cy="35" r="2.2" fill="#e8c98a" variants={fadeIn(1.4)} />
    </motion.svg>
  )
}

// A single continuous flourish, tracing itself in — evoking embroidery thread.
export function EmbroideryIcon() {
  return (
    <motion.svg
      viewBox="0 0 120 70"
      className={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.path
        d="M20 50 C 20 20, 45 20, 45 38 C 45 52, 65 52, 65 38 C 65 20, 90 20, 90 42 C 90 58, 105 55, 100 40"
        {...strokeProps}
        variants={draw}
      />
      {[[20, 50], [45, 38], [65, 38], [90, 42]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="2" fill="#e8c98a" variants={fadeIn(1.6 + i * 0.15)} />
      ))}
    </motion.svg>
  )
}

// Parallel grain lines settling in, then a warm tone gently deepens over them —
// the leather "curing" into its richer, finished colour.
export function CuringIcon() {
  return (
    <motion.svg
      viewBox="0 0 120 70"
      className={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <rect x="15" y="15" width="90" height="40" rx="3" fill="none" stroke="#5a4635" strokeWidth="1" />
      {[22, 30, 38, 46].map((y, i) => (
        <motion.path
          key={y}
          d={`M 20 ${y} Q 60 ${y - 4}, 100 ${y}`}
          {...strokeProps}
          strokeWidth="1"
          variants={draw}
          transition={{ ...draw.show.transition, delay: i * 0.2 }}
        />
      ))}
      <motion.rect
        x="15" y="15" width="90" height="40" rx="3"
        fill="#c8a35d"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.22, 0.1] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2.4, delay: 0.8 }}
      />
    </motion.svg>
  )
}

// A diagonal sheen sweeping across a rounded surface, looping softly.
export function PolishIcon() {
  return (
    <div className={`${wrap} relative overflow-hidden rounded-md border border-gold-dim/40`}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a1610, #0b0b0b)' }} />
      <motion.div
        className="absolute top-0 bottom-0 w-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,201,138,0.55), transparent)' }}
        initial={{ x: '-20%' }}
        whileInView={{ x: '340%' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.2 }}
      />
    </div>
  )
}

// A blade tracing a clean cutting line across a leather panel outline.
export function CuttingIcon() {
  return (
    <motion.svg
      viewBox="0 0 120 70"
      className={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <path d="M18 20 L60 14 L102 22 L96 54 L54 60 L14 50 Z" fill="none" stroke="#5a4635" strokeWidth="1" />
      <motion.path d="M14 50 L60 32 L102 22" {...strokeProps} variants={draw} />
      <motion.circle cx="102" cy="22" r="2.4" fill="#e8c98a" variants={fadeIn(1.6)} />
    </motion.svg>
  )
}
