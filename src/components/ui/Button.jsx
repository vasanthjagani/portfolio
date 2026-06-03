import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30',
  outline:
    'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400',
}

export default function Button({ label, type = 'link', path, url, variant = 'primary', className = '', onClick }) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (type === 'download') {
    return (
      <motion.a href={url} download className={baseClass} {...motionProps}>
        {label}
      </motion.a>
    )
  }

  if (type === 'external') {
    return (
      <motion.a href={url} target="_blank" rel="noopener noreferrer" className={baseClass} {...motionProps}>
        {label}
      </motion.a>
    )
  }

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} className={baseClass} {...motionProps}>
        {label}
      </motion.button>
    )
  }

  return (
    <motion.div {...motionProps}>
      <Link to={path} className={baseClass}>
        {label}
      </Link>
    </motion.div>
  )
}
