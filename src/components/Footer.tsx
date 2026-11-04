interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => (
  <footer
    className={`border-t px-4 py-7 transition-colors duration-300 ${
      isDarkMode
        ? 'border-slate-800 bg-black text-slate-400'
        : 'border-slate-200 bg-white text-slate-600'
    }`}
  >
    <div className="container mx-auto max-w-6xl">
      <p className="text-sm leading-relaxed">
        © {new Date().getFullYear()}{' '}
        <span className={isDarkMode ? 'text-blue-400' : 'text-blue-700'}>
          Gabriel Cavalcanti
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
