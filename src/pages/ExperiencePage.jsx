import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function ExperiencePage() {
  const { experience, education } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={experience.title} subtitle={experience.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative space-y-8"
      >
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:block" />

        {experience.items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative md:pl-16"
          >
            <div className="absolute left-4 top-6 hidden h-4 w-4 rounded-full border-2 border-cyan-500 bg-[#0a0a0f] md:block" />

            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                    <HiBriefcase className="text-cyan-400" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.position}</h3>
                    <p className="mt-1 text-cyan-400">{item.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400">
                  {item.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20">
        <SectionTitle title={education.title} subtitle={education.subtitle} align="left" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-1 text-gray-400">{item.institution}</p>
                </div>
                <span className="text-sm text-cyan-400">{item.duration}</span>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-300">Relevant Coursework</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  )
}
