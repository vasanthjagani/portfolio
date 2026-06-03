import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackgroundEffects from './components/ui/BackgroundEffects'
import Hero from './components/sections/Hero'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import BlogPage from './pages/BlogPage'
import CertificationsPage from './pages/CertificationsPage'
import ContactPage from './pages/ContactPage'

function HomePage() {
  return <Hero />
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}
