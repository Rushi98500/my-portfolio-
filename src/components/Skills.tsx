import { useEffect, useRef, type MouseEvent } from 'react'
import { skills } from '../data/skills'
import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from 'framer-motion'
import AwsIcon from './icons/AwsIcon'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const categories = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  database: "Database Management",
  devops: "DevOps & Cloud"
} as const

type SkillItem = (typeof skills)[number]

interface MagneticSkillCardProps {
  skill: SkillItem
  variants: typeof item
}

function MagneticSkillCard({ skill, variants }: MagneticSkillCardProps) {
  const particleFieldRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 220, damping: 20, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const rotateX = useTransform(springY, [-25, 25], [10, -10])
  const rotateY = useTransform(springX, [-25, 25], [-10, 10])

  useEffect(() => {
    if (!particleFieldRef.current) return

    const particleField = particleFieldRef.current
    const particleCount = 25

    particleField.innerHTML = ''

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      const offsetX = Math.random() * 200 - 100
      const offsetY = Math.random() * 200 - 100
      const duration = 1.2 + Math.random() * 1.5

      particle.style.setProperty('--x', `${offsetX}px`)
      particle.style.setProperty('--y', `${offsetY}px`)
      particle.style.setProperty('--duration', `${duration}s`)
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      particleField.appendChild(particle)
    }
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set(offsetX * 0.15)
    y.set(offsetY * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const magneticStyles: MotionStyle = {
    x: springX,
    y: springY,
    rotateX,
    rotateY,
    transformPerspective: 800,
  }

  return (
    <motion.div
      variants={variants}
      className="magnetic-card group relative overflow-visible"
      style={{ ...magneticStyles, willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
    >
      <div className="absolute inset-0 bg-white/[0.06] dark:bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl dark:shadow-black/20" />
      <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 rounded-2xl blur transition-opacity duration-300" />
      <div className="particles-field" ref={particleFieldRef} />

      <div className="relative z-10 p-6 flex flex-col items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center mb-2">
          {skill.icon === 'component:aws' ? (
            <div
              className={`w-12 h-12 group-hover:scale-110 transition-transform duration-300 ${
                skill.name === 'AWS' ? 'text-[#252f3e] dark:text-white' : ''
              }`}
            >
              <AwsIcon />
            </div>
          ) : skill.icon === 'component:hetzner' ? (
            <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <img
              src={skill.icon}
              alt={`${skill.name} logo`}
              loading="lazy"
              className={`w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 ${
                skill.name === 'Tailwind CSS' ? 'dark:invert' : 'dark:brightness-90'
              }`}
            />
          )}
        </div>
        <span className="text-base font-medium text-neutral-light dark:text-neutral-dark group-hover:text-brand-light transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="py-24 relative flex items-center min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative mx-auto px-4">
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
            Technical Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-neutral-light dark:text-neutral-dark max-w-2xl mx-auto"
          >
            A comprehensive list of technologies and tools I work with to create amazing web experiences.
          </motion.p>
        </motion.div>

        <div className="mt-16 space-y-24">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.h3 
                className="text-2xl font-semibold text-brand-light mb-8 text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                {categories[category as keyof typeof categories]}
              </motion.h3>

              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
              >
                {categorySkills.map((skill) => (
                  <MagneticSkillCard key={skill.name} skill={skill} variants={item} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-40 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-64 h-64 bg-brand-cyan rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  )
}
