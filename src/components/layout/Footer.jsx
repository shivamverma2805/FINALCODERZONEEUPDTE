
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Terminal, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/courses", label: "Courses" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  const programLinks = [
    { to: "/instructor-program", label: "Become an Instructor" },
    { to: "/referral-program", label: "Referral Program" },
    { to: "/popular-courses", label: "Popular Courses" },
  ];

  return (
    <footer className="relative bg-black border-t border-orange-500/20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0 startup-glow"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-[#FF6B35] glow-orange" />
              <span className="text-xl font-bold gradient-text-orange code-font">CodersZonee</span>
            </div>
            <p className="text-sm text-gray-400 code-font leading-relaxed">
              Empowering developers worldwide. Join our community to grow your skills and share your knowledge in the digital frontier.
            </p>
            <div className="flex items-center space-x-2 text-xs text-orange-400 code-font">
              <Code size={14} />
              <span>Built with passion for developers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font flex items-center">
              <Zap size={16} className="mr-2" />
              Quick Links
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors code-font relative group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font flex items-center">
              <Terminal size={16} className="mr-2" />
              Programs
            </span>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors code-font relative group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font">Connect</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#FF6B35] transition-all duration-300 p-2 rounded-lg hover:bg-orange-500/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="terminal-window p-4 mt-4">
              <div className="pt-6">
                <p className="text-xs text-green-400 code-font">
                  <span className="text-orange-400">$</span> echo "Stay connected with us"
                </p>
                <p className="text-xs text-gray-400 code-font mt-1">
                  Follow for updates and tech insights
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-orange-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 code-font">
              &copy; {currentYear} CodersZonee. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 code-font">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.div>
              <span>for developers</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent"></div>
    </footer>
  );
};

export default Footer;
