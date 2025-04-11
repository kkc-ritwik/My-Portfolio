import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [hoverIcon, setHoverIcon] = useState(null);
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/kkc-ritwik' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kkc-ritwik/?profileId=ACoAADJac8IB7GnGK1zqU0ORR-yoO54q7kOg80A' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/kkc_ritwik' },
    { name: 'Email', icon: Mail, url: 'mailto:ritwiksinghkkc@gmail.com' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-blue-500"></div>
              <h3 className="text-2xl font-bold">Ritwik Raj</h3>
            </div>
            <p className="text-gray-300 pl-4">Building digital experiences that matter</p>
            <p className="text-gray-400 pl-4 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-blue-500"></div>
              <h4 className="text-xl font-semibold">Quick Links</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 pl-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Social & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-1 bg-blue-500"></div>
              <h4 className="text-xl font-semibold">Connect</h4>
            </div>
            <div className="flex space-x-4 pl-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  onMouseEnter={() => setHoverIcon(social.name)}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </div>
                  {hoverIcon === social.name && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm pl-4 mt-4">
              Feel free to reach out. I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ritwik Raj. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}