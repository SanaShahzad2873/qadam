import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import posts from '../data/journalPosts'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function JournalPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const currentIndex = posts.findIndex((p) => p.slug === slug)

  if (!post) return <Navigate to="/journal" replace />

  const next = posts[(currentIndex + 1) % posts.length]

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl mx-auto">
        <Link to="/journal" className="focus-gold inline-block mb-10 text-xs tracking-widest uppercase text-gold/70 hover:text-gold">
          ← Journal
        </Link>

        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">{post.tag}</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-10 text-cream">{post.title}</h1>

        {post.image && (
          <div
            className="h-64 md:h-96 mb-10 border border-gold-dim/30"
            style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        )}

        <div className="space-y-6">
          {post.content.map((para, i) => (
            <p key={i} className="font-display text-lg md:text-xl leading-relaxed text-cream/85">
              {para}
            </p>
          ))}
        </div>

        <div className="gold-line w-16 my-16" />

        <Link
          to={`/journal/${next.slug}`}
          className="focus-gold group block border border-gold-dim/30 hover:border-gold/60 transition-colors p-8"
        >
          <span className="text-xs tracking-widest uppercase text-gold/60">Agla Article</span>
          <h3 className="font-display text-2xl text-cream mt-2 group-hover:text-gold transition-colors">{next.title} →</h3>
        </Link>
      </motion.div>
    </div>
  )
}
