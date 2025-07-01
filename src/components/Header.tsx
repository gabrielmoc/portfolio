
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 border-b ${
      isDarkMode 
        ? 'bg-black/80 border-slate-800' 
        : 'bg-white/80 border-slate-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent'
            }`}>
              {"{GC}"}
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-200 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-blue-400 after:bg-blue-400' 
                    : 'text-slate-700 hover:text-blue-700 after:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side - Contact Button & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open('https://wa.me/5581982071987', '_blank')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Contato
            </Button>
            <div className="flex items-center space-x-2">
              <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={toggleTheme}
                className={`${
                  isDarkMode 
                    ? 'data-[state=checked]:bg-blue-600' 
                    : 'data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-300'
                }`}
              />
              <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-black border-slate-800' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-slate-700 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <Button
                  onClick={() => window.open('https://wa.me/5581982071987', '_blank')}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Contato
                </Button>
                <div className="flex items-center space-x-2">
                  <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
                  <Switch 
                    checked={isDarkMode} 
                    onCheckedChange={toggleTheme}
                    className={`${
                      isDarkMode 
                        ? 'data-[state=checked]:bg-blue-600' 
                        : 'data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-300'
                    }`}
                  />
                  <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
