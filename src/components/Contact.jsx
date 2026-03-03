import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { personal } from '../data/resumeData';

const contactInfo = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: 'Location', value: personal.location, href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoLink = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
          <p className="mt-6 text-[#94a3b8] max-w-lg mx-auto">
            I'm open to full-time roles, freelance projects, and exciting collaborations.
            Drop me a message and I'll get back to you promptly!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white mb-6">Contact Information</h3>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center shrink-0 group-hover:bg-[#6366f1]/20 transition-colors">
                  <Icon size={18} className="text-[#6366f1]" />
                </div>
                <div>
                  <p className="text-xs text-[#94a3b8] mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-[#6366f1] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-4 border-t border-[#2a2a3e]">
              <p className="text-sm text-[#94a3b8] mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: personal.github, icon: Github, label: 'GitHub' },
                  { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#2a2a3e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1.5" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-[#2a2a3e] text-white placeholder-[#94a3b8]/50 text-sm focus:outline-none focus:border-[#6366f1] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1.5" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-[#2a2a3e] text-white placeholder-[#94a3b8]/50 text-sm focus:outline-none focus:border-[#6366f1] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-[#2a2a3e] text-white placeholder-[#94a3b8]/50 text-sm focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#6366f1] hover:bg-[#4f46e5] text-white shadow-lg shadow-indigo-500/20'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={17} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
