import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="certifications" className="section-padding bg-[#12121a]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">Certifications</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-[#12121a] border border-[#2a2a3e] p-7 relative overflow-hidden group hover:border-[#6366f1]/40 transition-all duration-300"
            >
              {/* Gradient orb */}
              <div
                className={`absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br ${cert.color} opacity-5 -translate-y-1/3 translate-x-1/3 blur-xl group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.color} bg-opacity-10 shrink-0`}
                  style={{ background: 'rgba(99,102,241,0.1)' }}
                >
                  <Award size={22} className="text-white" />
                </div>
                <ExternalLink size={15} className="text-[#94a3b8] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-['Space_Grotesk'] text-base font-semibold text-white leading-snug mb-2">
                {cert.title}
              </h3>
              <p className="text-[#94a3b8] text-sm mb-4 flex items-center gap-2">
                <span>{cert.issuer}</span>
                <span>·</span>
                <span>{cert.date}</span>
              </p>

              <div className="pt-3 border-t border-[#2a2a3e]">
                <p className="text-xs text-[#94a3b8]">
                  Credential ID:{' '}
                  <span className="text-[#6366f1] font-mono font-medium">{cert.credentialId}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
