import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Download,
  Globe,
  Clock,
  Users
} from 'lucide-react';

const Footer = () => {
  const usefulLinks = [
    { text: 'पंजीकरण फॉर्म डाउनलोड करें', icon: Download },
    { text: 'परीक्षा पैटर्न देखें', icon: FileText },
    { text: 'पाठ्यक्रम विवरण डाउनलोड करें', icon: Download },
    { text: 'शुल्क संरचना PDF', icon: FileText },
    { text: 'महत्वपूर्ण सूचनाएं', icon: FileText },
    { text: 'परीक्षा केंद्र सूची', icon: Download },
    { text: 'छात्रवृत्ति योजना विवरण', icon: FileText },
    { text: 'शिकायत निवारण फॉर्म', icon: Download }
  ];

  const quickMenu = [
    'गृह पृष्ठ',
    'हमारे बारे में',
    'परीक्षा परिणाम',
    'संपर्क करें',
    'शैक्षिक पृष्ठाङ्ग',
    'नवीन पंजीकरण',
    'मान्यता',
    'गोपनीयता नीति'
  ];

  const officeHours = [
    { day: 'सोमवार - शुक्रवार', time: '10:00 AM - 6:00 PM' },
    { day: 'शनिवार', time: '10:00 AM - 2:00 PM' },
    { day: 'रविवार', time: 'बंद' }
  ];

  return (
    <footer className="bg-[#9c243a] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Contact Info */}
          <div className="bg-[#7f1d32] p-4 rounded shadow-md border border-white/20">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="mr-2 text-white" size={18} />
              संपर्क जानकारी
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">बिहार माध्यमिक संस्कृत शिक्षा परिषद्</p>
                  <p className="text-xs text-white/80">शिक्षा भवन, पटना</p>
                  <p className="text-xs text-white/80">पटना - 800001</p>
                  <p className="text-xs text-white/80">बिहार, भारत</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-white" />
                <div>
                  <span className="font-semibold text-xs">+91-612-2235678, 2235679</span>
                  <p className="text-xs text-white/60">टोल फ्री: 1800-180-6666</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-white" />
                <div>
                  <span className="font-semibold text-xs">info@bseb.edu.in</span>
                  <p className="text-xs text-white/60">परीक्षा: exam@bseb.edu.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={14} className="text-white" />
                <span className="font-semibold text-xs">www.bseb.edu.in</span>
              </div>

              {/* Office Hours */}
              <div className="mt-4 p-3 bg-white/10 rounded border border-white/20">
                <h4 className="font-bold mb-2 flex items-center text-sm">
                  <Clock size={14} className="mr-1 text-white" />
                  कार्यालय समय
                </h4>
                {officeHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-xs text-white/90">
                    <span>{item.day}</span>
                    <span className="font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="bg-[#7f1d32] p-4 rounded shadow-md border border-white/20">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <FileText className="mr-2 text-white" size={18} />
              उपयोगी लिंक
            </h3>
            <div className="space-y-1">
              {usefulLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 group py-1">
                    <Icon size={12} className="text-white group-hover:text-[#ffccd5]" />
                    <a href="#" className="text-xs text-white/90 hover:text-[#ffccd5] hover:underline flex-1">
                      {link.text}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 p-2 bg-white/10 rounded border border-white/20 text-xs text-white">
              <div className="flex justify-between">
                <span>कुल डाउनलोड:</span>
                <span className="font-bold">1,25,847</span>
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="bg-[#7f1d32] p-4 rounded shadow-md border border-white/20">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Users className="mr-2 text-white" size={18} />
              त्वरित मेन्यू
            </h3>
            <div className="space-y-1 text-xs">
              {quickMenu.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/90 hover:text-[#ffccd5] hover:underline py-1"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-3 p-2 bg-white/10 rounded border border-white/20 text-center">
              <h4 className="font-bold text-xs mb-1">आगंतुक संख्या</h4>
              <div className="text-lg font-bold text-white">45,67,892</div>
              <div className="text-xs text-white/80">कुल विज़िट</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/30 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs font-semibold text-center md:text-left">
              © 2025 बिहार माध्यमिक संस्कृत शिक्षा परिषद्, पटना। सभी अधिकार सुरक्षित।
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <p className="text-xs flex items-center text-white/80">
                <Clock size={12} className="mr-1" />
                अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}
              </p>
              <div className="flex space-x-1">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold">
                  सक्रिय
                </span>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-semibold">
                  SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
