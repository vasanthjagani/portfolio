import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(value)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
}
