import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiDocumentText, HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function ProjectsPage() {
  const { projects } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={projects.title} subtitle={projects.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-8"
      >
        {projects.items.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.005 }}
            className="group glass overflow-hidden rounded-2xl"
          >
            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full bg-cyan-500/20 px-3 py-0.5 text-xs font-medium text-cyan-400">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-4 leading-relaxed text-gray-400">{project.description}</p>

                <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className="text-sm font-semibold text-cyan-400">Problem Solved</h4>
                  <p className="mt-2 text-sm text-gray-500">{project.problemSolved}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-300">Features</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Technologies</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Architecture</h4>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-gray-500">
                    {project.architecture}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/30"
                    >
                      <HiExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <Link
                      to={project.links.caseStudy}
                      className="inline-flex items-center gap-2 rounded-lg bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-400 transition-colors hover:bg-violet-500/30"
                    >
                      <HiDocumentText size={14} />
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageWrapper>
  )
}
