import { motion } from 'framer-motion'

const educationMilestones = [
  {
    stage: 'Diploma in Mechanical Engineering',
    institution: 'Government Polytechnic, Miraj',
    period: '2018 – 2021',
    highlights: [
      'Completed Diploma in Mechanical Engineering with focus on automation and practical problem-solving.',
      'Developed strong analytical and mechanical design skills.',
    ],
  },
  {
    stage: 'Bachelor of Engineering (B.E.) – Computer Science',
    institution: 'Suman Ramesh Tulsiani Technical Campus, Pune',
    period: '2021 – 2024*',
    highlights: [
      'CGPA: 7.14 (Up to 3rd Year)',
      '*Did not complete final year due to startup opportunity.',
    ],
  }
// ,
//   {
//     stage: 'Web Developer',
//     institution: 'OIT Private Limited, Pune',
//     period: '2023 – Present',
//     highlights: [
//       'Contributing to AI Chat Assist platform using Angular, React, and Node.js.',
//       'Developing scalable full-stack web solutions and UI enhancements.',
//     ],
//   },
]

const smoothEase = [0.16, 1, 0.3, 1] as const

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] opacity-90" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A dotted journey through my academic milestones, from foundational learning to advanced postgraduate studies.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <motion.div
            className="absolute left-[2.2rem] top-0 bottom-0 border-l-2 border-dashed border-indigo-400/50"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: smoothEase }}
          />

          <div className="space-y-14">
            {educationMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.stage}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: smoothEase }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: smoothEase } }}
                className="group relative flex gap-6 pl-20"
              >
                <motion.span
                  className="absolute left-[1.25rem] top-[18px] grid h-8 w-8 place-items-center rounded-full border border-indigo-400 bg-indigo-500/20 shadow-[0_0_25px_rgba(99,102,241,0.5)]"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: smoothEase }}
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-indigo-400"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  />
                </motion.span>

                <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-indigo-400/60 group-hover:bg-indigo-500/15 group-hover:shadow-[0_28px_60px_-30px_rgba(99,102,241,0.7)]">
                  <span className="pointer-events-none absolute inset-0 opacity-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/20 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300/80">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-indigo-200">
                        {milestone.stage}
                      </h3>
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="text-sm font-medium text-gray-400">
                        {milestone.period}
                      </p>
                      <p className="text-sm text-gray-500">
                        {milestone.institution}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-left">
                    {milestone.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
