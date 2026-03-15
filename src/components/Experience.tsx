import { experience } from '../data/experience'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-brand text-transparent bg-clip-text"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-neutral-light dark:text-neutral-dark max-w-2xl mx-auto"
          >
            A journey through my professional experience and key achievements.
          </motion.p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {experience.map((exp, i) => (
            <motion.article 
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-white/[0.06] dark:bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl dark:shadow-black/20 group-hover:border-brand-light/40 group-hover:shadow-[0_28px_60px_-30px_rgba(123,75,255,0.5)]" />
              
              {/* Decorative gradient circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-light">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-lg text-neutral-light dark:text-neutral-dark">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-sm font-medium px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark">
                    {exp.duration}
                  </p>
                </div>

                <motion.ul 
                  className="mt-6 grid gap-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {exp.achievements.map((achievement) => (
                    <motion.li 
                      key={achievement}
                      variants={{
                        hidden: { opacity: 0, x: 16 },
                        show: { opacity: 1, x: 0 }
                      }}
                      className="flex gap-4 text-neutral-light/90 dark:text-neutral-dark/90"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-brand" />
                      <span className="text-sm md:text-base leading-relaxed">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-40 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-64 h-64 bg-brand-cyan rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  )
}
