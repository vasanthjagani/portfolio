import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { usePortfolio } from '../../context/PortfolioContext'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  file: FaFileAlt,
}

export default function Footer() {
  const { footer, hero } = usePortfolio()
  const initial = hero.name.charAt(0).toUpperCase()

  return (
    <footer className="relative border-t border-white/10 bg-[#08080d]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-xs font-bold text-white">
                {initial}
              </div>
              <span className="text-lg font-bold text-white">{hero.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Connect</h3>
            <div className="mt-4 flex gap-3">
              {footer.social.map((social) => {
                const Icon = iconMap[social.icon]
                const isExternal = social.url.startsWith('http') || social.url.startsWith('mailto')
                const Component = isExternal ? 'a' : Link
                const props = isExternal
                  ? { href: social.url, target: '_blank', rel: 'noopener noreferrer' }
                  : { to: social.url }

                return (
                  <motion.div key={social.label} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Component
                      {...props}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      <Icon size={18} />
                    </Component>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-xs text-gray-600">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
