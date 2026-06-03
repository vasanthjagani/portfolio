import { motion } from 'framer-motion'
import { HiLightBulb, HiCog, HiExclamation, HiTrendingUp } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

const sections = [
  { key: 'problem', label: 'Problem', icon: HiExclamation, color: 'text-red-400', dot: 'bg-red-400', bg: 'from-red-500/20 to-orange-500/20' },
  { key: 'solution', label: 'Solution', icon: HiLightBulb, color: 'text-cyan-400', dot: 'bg-cyan-400', bg: 'from-cyan-500/20 to-blue-500/20' },
  { key: 'architecture', label: 'Architecture', icon: HiCog, color: 'text-violet-400', dot: 'bg-violet-400', bg: 'from-violet-500/20 to-purple-500/20' },
  { key: 'challenges', label: 'Challenges', icon: HiExclamation, color: 'text-amber-400', dot: 'bg-amber-400', bg: 'from-amber-500/20 to-yellow-500/20', isList: true },
  { key: 'results', label: 'Results', icon: HiTrendingUp, color: 'text-emerald-400', dot: 'bg-emerald-400', bg: 'from-emerald-500/20 to-teal-500/20', isList: true },
]

export default function CaseStudiesPage() {
  const { caseStudies } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={caseStudies.title} subtitle={caseStudies.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-16"
      >
        {caseStudies.items.map((study) => (
          <motion.article
            key={study.id}
            id={study.id}
            variants={fadeInUp}
            className="scroll-mt-28"
          >
            <div className="mb-8">
              <span className="font-mono text-sm text-cyan-400">Case Study</span>
              <h3 className="mt-2 text-3xl font-bold text-white">{study.projectName}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {sections.map((section) => {
                const Icon = section.icon
                const content = study[section.key]

                return (
                  <motion.div
                    key={section.key}
                    whileHover={{ y: -4 }}
                    className={`glass rounded-2xl p-6 ${section.key === 'architecture' ? 'lg:col-span-2' : ''}`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${section.bg}`}>
                        <Icon className={section.color} size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{section.label}</h4>
                    </div>

                    {section.isList ? (
                      <ul className="space-y-3">
                        {content.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${section.dot}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : section.key === 'architecture' ? (
                      <div className="rounded-xl border border-white/5 bg-black/30 p-4">
                        <p className="font-mono text-sm leading-relaxed text-gray-400">{content}</p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500">
                          {content.split('→').map((part, i, arr) => (
                            <span key={i} className="flex items-center gap-2">
                              <span className="rounded-lg bg-white/5 px-3 py-2 text-gray-300">{part.trim()}</span>
                              {i < arr.length - 1 && <span className="text-cyan-500">→</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed text-gray-400">{content}</p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageWrapper>
  )
}
