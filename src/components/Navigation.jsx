import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const labels = {
    en: {
      home: 'Home',
      about: 'About Us',
      institution: 'Institution',
      academics: 'Academics',
      library: 'Digital Library',
      quicklinks: 'Quick Links',
      contacts: 'Contacts',
      help: 'Help',
      login: 'Login',
      admin: 'Admin Login',
      student: 'Student Login',
      teacher: 'Teacher Login',
      language: 'English',
      languageOptions: ['English', 'Hindi'],
      menu: 'Menu'
    },
    hi: {
      home: 'मुखपृष्ठ',
      about: 'हमारे बारे में',
      institution: 'संस्थान',
      academics: 'शैक्षणिक',
      library: 'डिजिटल पुस्तकालय',
      quicklinks: 'त्वरित लिंक',
      contacts: 'संपर्क करें',
      help: 'सहायता',
      login: 'लॉगिन',
      admin: 'प्रशासक लॉगिन',
      student: 'छात्र लॉगिन',
      teacher: 'शिक्षक लॉगिन',
      language: 'हिन्दी',
      languageOptions: ['English', 'Hindi'],
      menu: 'मेन्यू'
    }
  };

  const navItems = [
    { label: labels[language].home, key: 'home' },
    { label: labels[language].about, key: 'about' },
    { label: labels[language].institution, key: 'institution' },
    { label: labels[language].academics, key: 'academics' },
    { label: labels[language].library, key: 'library' },
    { label: labels[language].quicklinks, key: 'quicklinks' },
    { label: labels[language].contacts, key: 'contacts' },
    { label: labels[language].help, key: 'help' },
    {
      label: labels[language].login,
      key: 'login',
      dropdown: [
        { label: labels[language].admin, key: 'admin' },
        { label: labels[language].student, key: 'student' },
        { label: labels[language].teacher, key: 'teacher' }
      ]
    }
  ];

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang === 'Hindi' ? 'hi' : 'en');
    setLanguageDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-[#9c243a] text-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center py-3">
            <span className="font-semibold text-sm">{labels[language].menu}</span>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-wrap gap-x-6 py-2 items-center">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <button className="flex items-center px-3 py-2 text-sm font-medium hover:bg-[#7c1d2f] transition-colors">
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                </button>

                {item.dropdown && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 w-52 bg-white text-gray-800 shadow-lg border mt-0.5 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.key}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-[#fce8ec] hover:text-[#9c243a] border-b last:border-b-0"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium hover:bg-[#7c1d2f] transition-colors"
              >
                <span>{labels[language].language}</span>
                <ChevronDown size={14} className="ml-1" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute top-full left-0 w-36 bg-white text-gray-800 shadow-lg border mt-0.5 z-50">
                  {labels.en.languageOptions.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-[#fce8ec] hover:text-[#9c243a] border-b last:border-b-0"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="md:hidden bg-[#9c243a] text-sm">
              {navItems.map((item) => (
                <div key={item.key} className="border-t border-[#8b2035]">
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(item.key) : null}
                    className="w-full flex justify-between items-center px-4 py-2 text-left"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown size={14} />}
                  </button>

                  {item.dropdown && activeDropdown === item.key && (
                    <div className="bg-[#a33147]">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.key}
                          href="#"
                          className="block px-6 py-2 text-white hover:bg-[#8a1f33]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Language Selector */}
              <div className="border-t border-[#8b2035]">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 text-left"
                >
                  <span>{labels[language].language}</span>
                  <ChevronDown size={14} />
                </button>
                {languageDropdownOpen && (
                  <div className="bg-[#a33147]">
                    {labels.en.languageOptions.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="block w-full text-left px-6 py-2 text-white hover:bg-[#8a1f33]"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
