import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animations'

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative min-h-screen pt-24 pb-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.div>
  )
}
