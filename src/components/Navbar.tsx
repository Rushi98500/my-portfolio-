import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [solid, setSolid] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        solid ? 'py-4 backdrop-blur-xl bg-white/[0.02] dark:bg-slate-900/[0.8] shadow-lg shadow-black/[0.03] dark:shadow-black/[0.1]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl px-4 sm:px-6">
        <nav className="relative flex w-[70%] sm:w-full items-center justify-between">
          <motion.a 
            href="#home" 
            onClick={(e) => handleNav(e, '#home')} 
            className="text-xl font-bold bg-gradient-brand text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rushikesh Yevale
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative text-sm font-medium text-neutral-light dark:text-neutral-dark hover:text-brand-light dark:hover:text-brand-light transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] dark:bg-slate-800/40 dark:hover:bg-slate-800/60 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative w-5 h-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] dark:bg-slate-800/40 dark:hover:bg-slate-800/60"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? 'border-brand-light/60 bg-brand-light/20 shadow-[0_12px_40px_-10px_rgba(56,189,248,0.5)]'
                  : 'border-slate-900/15 bg-slate-900/5 hover:bg-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10'
              }`}
            >
              <span
                className={`absolute block h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2.5'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2.5'
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ clipPath: 'circle(0% at 90% 6%)' }}
                animate={{ clipPath: 'circle(160% at 90% 6%)' }}
                exit={{ clipPath: 'circle(0% at 90% 6%)' }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden bg-slate-950/90 backdrop-blur-2xl md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-30 flex h-full w-full max-w-sm flex-col items-center justify-center gap-8 px-8 text-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  {links.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="w-full text-2xl font-semibold text-white tracking-wide"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.12 * index }}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-sm text-white/70"
                  >
                    Tap outside or choose a link to close
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
