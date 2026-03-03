import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/resumeData';

const categoryColors = {
  'Frontend': 'from-[#6366f1] to-[#818cf8]',
  'Backend': 'from-[#06b6d4] to-[#22d3ee]',
  'Cloud & DevOps': 'from-[#f59e0b] to-[#fbbf24]',
  'Database': 'from-[#10b981] to-[#34d399]',
  'Tools & Others': 'from-[#ec4899] to-[#f472b6]',
  'Testing': 'from-[#8b5cf6] to-[#a78bfa]',
};

const categoryBg = {
  'Frontend': 'bg-[#6366f1]/10 text-[#818cf8] border-[#6366f1]/20',
  'Backend': 'bg-[#06b6d4]/10 text-[#22d3ee] border-[#06b6d4]/20',
  'Cloud & DevOps': 'bg-[#f59e0b]/10 text-[#fbbf24] border-[#f59e0b]/20',
  'Database': 'bg-[#10b981]/10 text-[#34d399] border-[#10b981]/20',
  'Tools & Others': 'bg-[#ec4899]/10 text-[#f472b6] border-[#ec4899]/20',
  'Testing': 'bg-[#8b5cf6]/10 text-[#a78bfa] border-[#8b5cf6]/20',
};

function SkillCategory({ category, items, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const gradient = categoryColors[category] || 'from-[#6366f1] to-[#06b6d4]';
  const badge = categoryBg[category] || 'bg-[#6366f1]/10 text-[#818cf8] border-[#6366f1]/20';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl bg-[#12121a] border border-[#2a2a3e] p-6 hover:border-[#6366f1]/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${gradient}`} />
        <h3 className="font-['Space_Grotesk'] text-base font-semibold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${badge} cursor-default transition-all duration-150`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="section-padding bg-[#12121a]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-2">What I Work With</p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">Skills & Tech Stack</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={category} category={category} items={items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
