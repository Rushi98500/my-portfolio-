import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import MagneticLink from './MagneticLink'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-brand text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-neutral-light dark:text-neutral-dark max-w-2xl mx-auto"
          >
            Showcasing my experience in building modern web applications with focus on user experience and scalable architecture.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card background with glassmorphism */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] dark:bg-white/[0.03] backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/10 group-hover:shadow-[0_28px_60px_-30px_rgba(99,102,241,0.7)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-indigo-500/25 via-transparent to-purple-500/20 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Decorative gradient circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ opacity: 0.1, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ opacity: 0.1, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold bg-gradient-brand text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-light/90 dark:text-neutral-dark/90 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.03] dark:bg-white/[0.05] border border-white/10 text-brand-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {'features' in project && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-brand-cyan">Key Features</h4>
                      <ul className="mt-3 grid grid-cols-2 gap-3">
                        {project.features?.map((feature) => (
                          <li key={feature} className="text-xs text-neutral-light/80 dark:text-neutral-dark/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="font-semibold text-brand-cyan">Achievements</h4>
                    <ul className="mt-3 space-y-2">
                      {project.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm text-neutral-light/80 dark:text-neutral-dark/80 pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gradient-brand before:rounded-full"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <MagneticLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-xl magnetic-link"
                      variant="primary"
                    >
                      View Live
                    </MagneticLink>
                    <MagneticLink
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-xl magnetic-link"
                      variant="secondary"
                    >
                      View Code
                    </MagneticLink>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
