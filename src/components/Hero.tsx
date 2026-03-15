import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'AI Chatbot Builder', 'Frontend Enthusiast'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50
  })

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/5 via-transparent to-transparent dark:from-brand-light/10" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Hello, I'm{" "}
              <span className="bg-gradient-brand text-transparent bg-clip-text">
                Rushikesh Yevale
              </span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-brand-cyan font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Based in Pune, India — Full Stack Developer
            </motion.p>
            <motion.p
              className="mt-6 text-base md:text-lg text-neutral-light dark:text-neutral-dark max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Motivated full-stack developer with 1 year of experience building scalable web apps,
              integrating backend services, and deploying cloud solutions. Currently contributing to{" "}
              <span className="text-brand-light">AI Chat Assist</span> — an AI-powered chatbot platform.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <MagneticButton
                onClick={handleContactClick}
                className="px-6 py-3 rounded-lg font-semibold magnetic-button"
                variant="primary"
              >
                Contact Me
              </MagneticButton>
              <a
                href="/assets/Rushikesh_Yevale.pdf"
                download
                className="px-6 py-3 rounded-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-neutral-light dark:text-neutral-dark hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                Download CV
              </a>
              <div className="text-neutral-light dark:text-neutral-dark font-medium">
                I am a{" "}
                <span className="inline-block min-w-[220px] text-brand-light">{text}</span>
                <Cursor cursorColor="#7B4BFF" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Decorative circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 blur-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 1 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-cyan rounded-full opacity-20 blur-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 1 }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3 className="font-semibold text-lg bg-gradient-brand text-transparent bg-clip-text">
                  Highlights
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Building modern web apps with React + TypeScript",
                    "AI integrations, chatbots and automation",
                    "Cloud deployments and container workflows"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 text-neutral-light dark:text-neutral-dark"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
