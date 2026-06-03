import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl"
      />
    </div>
  )
}
