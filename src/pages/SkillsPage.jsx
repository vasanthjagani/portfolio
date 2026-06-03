import { motion } from 'framer-motion'
import {
  HiServer,
  HiTemplate,
  HiDatabase,
  HiTerminal,
  HiCloud,
  HiChip,
} from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

const iconMap = {
  server: HiServer,
  layout: HiTemplate,
  database: HiDatabase,
  terminal: HiTerminal,
  cloud: HiCloud,
  brain: HiChip,
}

export default function SkillsPage() {
  const { skills } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={skills.title} subtitle={skills.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.categories.map((category) => {
          const Icon = iconMap[category.icon] || HiServer
          return (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass overflow-hidden rounded-2xl"
            >
              <div className="border-b border-white/5 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 transition-all group-hover:from-cyan-500/30 group-hover:to-violet-500/30">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 p-6">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </PageWrapper>
  )
}
