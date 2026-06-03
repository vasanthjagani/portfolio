import { motion } from 'framer-motion'
import { HiClock, HiArrowRight } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function BlogPage() {
  const { blog } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={blog.title} subtitle={blog.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {blog.items.map((post, index) => (
          <motion.article
            key={post.slug}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group flex flex-col glass rounded-2xl overflow-hidden"
          >
            <div className={`h-32 bg-gradient-to-br ${
              index % 3 === 0
                ? 'from-cyan-500/30 to-blue-600/30'
                : index % 3 === 1
                  ? 'from-violet-500/30 to-purple-600/30'
                  : 'from-emerald-500/30 to-teal-600/30'
            }`}>
              <div className="flex h-full items-end p-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-black/30 px-2 py-0.5 text-xs text-gray-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <HiClock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Read Article
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageWrapper>
  )
}
