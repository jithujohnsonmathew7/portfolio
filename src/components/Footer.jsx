import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/resumeData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12121a] border-t border-[#2a2a3e]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-['Space_Grotesk'] font-bold text-xl gradient-text mb-1">
              Jithu Johnson Mathew
            </div>
            <p className="text-[#94a3b8] text-sm">Full Stack Developer · Bangalore, India</p>
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="px-3 py-2 text-sm text-[#94a3b8] hover:text-white rounded-lg hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
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
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#2a2a3e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2a2a3e] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#94a3b8]">
          <p>© {new Date().getFullYear()} Jithu Johnson Mathew. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-[#6366f1]" fill="currentColor" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
