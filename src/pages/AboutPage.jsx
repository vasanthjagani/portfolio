import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function AboutPage() {
  const { about } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={about.title} subtitle={about.subtitle} />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="mb-6 text-xl font-bold text-white">Professional Highlights</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                  <HiCheck className="text-cyan-400" size={12} />
                </span>
                <span className="text-sm text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
