import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../data/resumeData';

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col items-center" style={{ width: '2rem' }}>
        <div
          className={`w-4 h-4 rounded-full border-2 mt-6 shrink-0 z-10 ${
            exp.current
              ? 'border-[#6366f1] bg-[#6366f1] shadow-lg shadow-indigo-500/40'
              : 'border-[#2a2a3e] bg-[#0a0a0f]'
          }`}
        />
        {index < experiences.length - 1 && (
          <div className="flex-1 w-px bg-[#2a2a3e] mt-1" />
        )}
      </div>

      {/* Card */}
      <div className="md:ml-12">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            exp.current
              ? 'bg-[#12121a] border-[#6366f1]/40 shadow-lg shadow-indigo-500/5'
              : 'bg-[#12121a] border-[#2a2a3e] hover:border-[#2a2a3e]/80'
          }`}
        >
          {/* Card Header */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 group"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {exp.current && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#6366f1]/15 text-[#6366f1] text-xs font-semibold border border-[#6366f1]/30">
                    Current
                  </span>
                )}
                <span className="text-[#94a3b8] text-sm">{exp.period}</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white mb-1">{exp.role}</h3>
              <div className="flex items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              </div>
            </div>
            <div className="text-[#94a3b8] group-hover:text-white transition-colors mt-1">
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {/* Expandable content */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-[#2a2a3e] pt-5">
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6366f1] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-[#1a1a28] border border-[#2a2a3e] text-[#94a3b8] text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" className="section-padding bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
        </motion.div>

        <div className="space-y-5 md:pl-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
