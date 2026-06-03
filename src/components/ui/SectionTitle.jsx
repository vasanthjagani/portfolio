import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 max-w-2xl ${alignment}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-gray-400 sm:text-lg">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
