import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiCode, HiLightningBolt } from 'react-icons/hi'
import { usePortfolio } from '../../context/PortfolioContext'
import Button from '../ui/Button'
import AnimatedCounter from '../ui/AnimatedCounter'
import { fadeInUp, staggerContainer } from '../../utils/animations'

export default function Hero() {
  const { hero, projects } = usePortfolio()
  const featuredProjects = projects.items.filter((p) => p.featured).slice(0, 3)
  const className = hero.name.split(' ')[0]

  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-sm font-medium text-cyan-400">Available for opportunities</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="mb-2 font-mono text-sm text-cyan-400">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{hero.name}</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-xl font-semibold text-gray-300 sm:text-2xl"
            >
              {hero.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              {hero.introduction}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              {hero.buttons.map((btn) => (
                <Button key={btn.label} {...btn} />
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="glass glow-cyan relative overflow-hidden rounded-2xl p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />

              <div className="relative space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs">developer.py</span>
                </div>
                <pre className="overflow-x-auto text-gray-300">
{`class ${className}:
    role = "Senior Python Developer"
    stack = ["Python", "Django",
             "GraphQL", "PostgreSQL"]
    
    def build(self):
        return "scalable_apps"`}
                </pre>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30"
            >
              <HiCode className="text-white" size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
            >
              <HiLightningBolt className="text-white" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {hero.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.5 + index * 0.2} />
              </div>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Featured Work</h3>
            <Link
              to="/projects"
              className="group flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              View all projects
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass overflow-hidden rounded-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
