import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Rocket, Users } from 'lucide-react';
import { education } from '../data/resumeData';

const stats = [
  { label: 'Years Experience', value: '5+', icon: Rocket },
  { label: 'Companies', value: '4', icon: Users },
  { label: 'Tech Stack', value: '20+', icon: Layers },
  { label: 'Projects Delivered', value: '10+', icon: Code2 },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center p-6 rounded-2xl bg-[#12121a] border border-[#2a2a3e] hover:border-[#6366f1]/50 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-3 group-hover:bg-[#6366f1]/20 transition-colors">
        <Icon size={22} className="text-[#6366f1]" />
      </div>
      <span className="font-['Space_Grotesk'] text-3xl font-bold gradient-text">{stat.value}</span>
      <span className="text-[#94a3b8] text-sm mt-1 text-center">{stat.label}</span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-2">Get To Know Me</p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-4">
              Passionate Full Stack Developer
            </h3>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Jithu Johnson Mathew</span>, a Full Stack Developer
                with <span className="text-[#6366f1] font-medium">5+ years of experience</span> building
                scalable, cross-platform applications across diverse tech stacks.
              </p>
              <p>
                Currently working at <span className="text-white font-medium">Accenture</span> as a Senior Analyst,
                building <span className="text-white font-medium">Android applications</span> and managing
                <span className="text-white font-medium"> GCP</span> as backend infrastructure — leveraging
                Cloud Functions, Cloud Scheduler, and Firebase to power scalable, real-time solutions.
                I've delivered impactful work including a feature that grew client business by{' '}
                <span className="text-[#06b6d4] font-medium">30%</span> at TCS, and built enterprise-grade
                apps spanning Android, Flutter Web, Spring Boot microservices, and React frontends.
              </p>
              <p>
                I thrive in fast-paced environments, love clean architecture, and care deeply about
                developer experience and end-user delight. Proficient in both UI/UX design (Figma, Adobe XD)
                and cloud infrastructure (GCP, Firebase, Docker).
              </p>
            </div>
          </motion.div>

          {/* Right – education card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="rounded-2xl bg-[#12121a] border border-[#2a2a3e] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <p className="text-[#6366f1] text-xs font-semibold tracking-widest uppercase mb-4">Education</p>
              <h4 className="font-['Space_Grotesk'] text-xl font-semibold text-white mb-1">
                {education.degree}
              </h4>
              <p className="text-[#06b6d4] text-sm font-medium mb-3">{education.major}</p>
              <p className="text-[#94a3b8] text-sm mb-1">{education.institution}</p>
              <p className="text-[#94a3b8] text-sm">{education.location}</p>
              <div className="mt-6 pt-4 border-t border-[#2a2a3e] flex items-center justify-between">
                <span className="text-[#94a3b8] text-sm">Graduated</span>
                <span className="px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-sm font-medium">
                  {education.period}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
