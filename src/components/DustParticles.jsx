export default function DustParticles({ count = 25 }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 10
    const duration = 8 + Math.random() * 10
    const size = 1 + Math.random() * 2
    return (
      <span
        key={i}
        className="dust-particle"
        style={{
          left: `${left}%`,
          bottom: `-10px`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    )
  })
  return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">{particles}</div>
}
