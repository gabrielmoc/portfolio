import { sendContact, type ContactResult } from "@/lib/contact";
import { useLanguage } from "@/i18n/LanguageProvider";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Instagram, Loader2 } from "lucide-react";

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection = ({ isDarkMode }: ContactSectionProps) => {
  const { t } = useLanguage();
  const submitting = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);
  const [website, setWebsite] = useState('');
  const resultMessages: Record<ContactResult, string> = {
    sent: 'Mensagem enviada! Obrigado pelo contato. Responderei em breve.',
    rate_limited: 'Você enviou várias mensagens recentemente. Aguarde 15 minutos ou entre em contato pelo WhatsApp.',
    invalid_fields: 'Confira os dados preenchidos. Nome, e-mail válido e mensagem são obrigatórios.',
    unavailable: 'Não foi possível enviar agora. Seus dados foram mantidos. Tente novamente mais tarde ou use o WhatsApp.',
    unconfirmed: 'Não foi possível confirmar o envio. A mensagem pode ter sido recebida. Aguarde antes de tentar novamente ou fale comigo pelo WhatsApp.',
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setIsSubmitting(true);
    setResult(null);
    try {
      const outcome = await sendContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        website,
      });
      setResult(outcome);
      if (outcome === 'sent') {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setWebsite('');
      }
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "gabrielmoc2010@gmail.com",
      href: "mailto:gabrielmoc2010@gmail.com"
    },
    {
      icon: WhatsAppIcon,
      text: "+55 81 98207-1987", 
      href: "https://wa.me/5581982071987"
    },
    {
      icon: MapPin,
      text: "Recife, PE - Brazil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "http://linkedin.com/in/gabrielmoc/"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      href: "https://www.instagram.com/gabrielmoc__/"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/gabrielmoc/"
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: "https://wa.me/5581982071987"
    }
  ];

  return (
    <section id="contact" className={`py-20 px-4 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/50' 
        : 'bg-slate-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-white' 
            : 'text-slate-800'
        }`}>{t("Vamos trabalhar juntos!")}</h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto text-lg transition-colors duration-300 ${
          isDarkMode 
            ? 'text-gray-400' 
            : 'text-slate-600'
        }`}>{t("Tem um projeto em mente? Entre em contato e vamos falar isso!")}</p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white border-slate-200'
          }`}>
            <CardHeader>
              <CardTitle className={`text-2xl transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-white' 
                  : 'text-slate-800'
              }`}>{t("Envie uma mensagem")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
                <div hidden aria-hidden="true">
                  <input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={event => setWebsite(event.target.value)} />
                </div>
                <div>
                  <Input
                    type="text"
                    name="name"
                    maxLength={120}
                    autoComplete="name"
                    disabled={isSubmitting}
                    placeholder={t("Seu nome")} aria-label={t("Seu nome")}
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    maxLength={254}
                    autoComplete="email"
                    disabled={isSubmitting}
                    placeholder={t("Seu email")} aria-label={t("Seu email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    maxLength={40}
                    autoComplete="tel"
                    disabled={isSubmitting}
                    placeholder={t("Seu celular")} aria-label={t("Seu celular")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    maxLength={5000}
                    disabled={isSubmitting}
                    placeholder={t("Sua mensagem")} aria-label={t("Sua mensagem")}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`resize-none transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 text-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}{t(isSubmitting ? "Enviando…" : "Enviar")}</Button>
                <div role="status" aria-live="polite" aria-atomic="true">
                  {result && <p className={`rounded-lg border p-3 text-sm ${result === 'sent' ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'border-amber-500/40 text-amber-700 dark:text-amber-300'}`}>{t(resultMessages[result])}</p>}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white border-slate-200'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-white' 
                    : 'text-slate-800'
                }`}>{t("Entre em contato")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300' 
                    : 'text-slate-600'
                }`}>{t("Estou disponível para conversas rápidas e projetos. Ligue ou envie uma mensagem no WhatsApp! Ou se preferir algo mais formal? Envie um e-mail e responderei o mais rápido possível.")}</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className={`w-5 h-5 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-blue-400' 
                        : 'text-blue-700'
                    }`} />
                    <a 
                      href="mailto:gabrielmoc2010@gmail.com" 
                      className={`transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-blue-400' 
                          : 'text-slate-600 hover:text-blue-700'
                      }`}
                    >
                      gabrielmoc2010@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <WhatsAppIcon className={`w-5 h-5 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-blue-400' 
                        : 'text-blue-700'
                    }`} />
                    <a 
                      href="https://wa.me/5581982071987" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-blue-400' 
                          : 'text-slate-600 hover:text-blue-700'
                      }`}
                    >
                      +55 81 98207-1987
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className={`w-5 h-5 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-blue-400' 
                        : 'text-blue-700'
                    }`} />
                    <span className={`transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300' 
                        : 'text-slate-600'
                    }`}>{t("Recife, PE - Brazil")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white border-slate-200'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-white' 
                    : 'text-slate-800'
                }`}>{t("Redes Sociais")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="outline"
                        className={`h-auto flex flex-col items-center space-y-2 p-4 transition-all duration-300 ${
                          isDarkMode 
                            ? 'border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-700 bg-transparent' 
                            : 'border-slate-300 text-slate-600 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 bg-transparent'
                        }`}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm">{social.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
