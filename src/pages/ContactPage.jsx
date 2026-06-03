import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'
import { usePortfolio } from '../context/PortfolioContext'
import PageWrapper from '../components/layout/PageWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { fadeInUp, staggerContainer } from '../utils/animations'

const contactIcons = {
  phone: FaPhone,
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  portfolio: FaGlobe,
}

const contactLabels = {
  phone: 'Phone',
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  portfolio: 'Portfolio',
}

const contactDisplay = {
  linkedin: 'Connect on LinkedIn',
  github: 'View my repositories',
}

export default function ContactPage() {
  const { contact } = usePortfolio()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactItems = Object.entries(contact.info)
    .filter(([, value]) => value)
    .map(([key, value]) => ({
      key,
      label: contactLabels[key] || key,
      value: contactDisplay[key] || value,
      href: key === 'email' ? `mailto:${value}` : key === 'phone' ? `tel:${value.replace(/\s/g, '')}` : value,
      external: key !== 'email' && key !== 'phone',
    }))

  return (
    <PageWrapper>
      <SectionTitle title={contact.title} subtitle={contact.subtitle} />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {contactItems.map((item) => {
            const Icon = contactIcons[item.key]
            return (
              <motion.a
                key={item.key}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                  <Icon className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <h3 className="mb-6 text-xl font-bold text-white">Send a Message</h3>

          <div className="space-y-5">
            {contact.form.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-gray-400">
                  {field.label}
                  {field.required && <span className="text-cyan-400"> *</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    rows={5}
                    placeholder={field.placeholder}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  />
                )}
              </div>
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
          >
            <HiPaperAirplane size={18} />
            {contact.form.submitLabel}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-sm text-emerald-400"
            >
              Thank you! Your message has been sent successfully.
            </motion.p>
          )}
        </motion.form>
      </div>
    </PageWrapper>
  )
}
