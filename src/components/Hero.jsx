import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/resumeData';

const floatingOrbs = [
  { size: 300, x: '10%', y: '20%', color: 'rgba(99,102,241,0.12)', delay: 0 },
  { size: 200, x: '80%', y: '60%', color: 'rgba(6,182,212,0.10)', delay: 1 },
  { size: 150, x: '60%', y: '10%', color: 'rgba(99,102,241,0.08)', delay: 2 },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + orb.delay, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[#2a2a3e] text-sm text-[#94a3b8] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
          <MapPin size={13} className="ml-1" />
          <span>Bangalore</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text block sm:inline">Jithu</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6366f1]" />
          <span className="text-[#6366f1] font-['Space_Grotesk'] font-semibold text-lg sm:text-xl tracking-widest uppercase">
            Full Stack Developer
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6366f1]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3.5 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-8 py-3.5 rounded-xl border border-[#2a2a3e] hover:border-[#6366f1] text-[#e2e8f0] hover:text-white font-semibold text-sm transition-all duration-200 bg-[#12121a] hover:bg-[#1a1a28] hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: personal.github, icon: Github, label: 'GitHub' },
            { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#2a2a3e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] hover:text-[#6366f1] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
