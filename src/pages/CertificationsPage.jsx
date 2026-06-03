import { motion } from 'framer-motion'
import { HiExternalLink, HiAcademicCap } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function CertificationsPage() {
  const { certifications } = usePortfolio()

  return (
    <PageWrapper>
      <SectionTitle title={certifications.title} subtitle={certifications.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
      {certifications.items.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500"
        >
          Certifications will be added here as they are earned.
        </motion.p>
      ) : (
        certifications.items.map((cert) => (
          <motion.div
            key={cert.name}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
              <HiAcademicCap className="text-amber-400" size={24} />
            </div>

            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{cert.provider}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-600">Issued {cert.issueDate}</span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                >
                  View Credential
                  <HiExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))
      )}
      </motion.div>
    </PageWrapper>
  )
}
