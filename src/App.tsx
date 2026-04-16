/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  BrainIcon, 
  HeartIcon, 
  UsersIcon,
  MessageCircle
} from "lucide-react";
import React, { useState, useEffect } from "react";

const PsiIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M5 4v8a7 7 0 0 0 14 0V4" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Especialidades", href: "#atendimento" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md border-line/50 py-4" : "bg-white border-line/10 py-8"}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4">
          <div className="bg-primary text-secondary p-2 rounded-lg">
            <PsiIcon size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-text-dark font-normal tracking-wide">Terapeuta Inês</span>
            <span className="text-[10px] uppercase tracking-[3px] text-primary font-bold">TRG</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[13px] uppercase tracking-[1.5px] font-medium text-text-dark hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#agendamento" 
            className="bg-primary text-white px-8 py-3 rounded-[4px] text-[13px] uppercase tracking-wider font-bold hover:opacity-90 transition-opacity"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary absolute w-full left-0 py-8 px-10 flex flex-col gap-6 shadow-2xl border-b border-line"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium text-text-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#agendamento" 
            className="bg-primary text-white p-4 rounded-[4px] text-center text-sm uppercase tracking-widest font-bold"
            onClick={() => setIsOpen(false)}
          >
            Agendar consulta
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, title, subtitle }: { children?: React.ReactNode, title: string, subtitle?: string }) => (
  <div className="mb-16 text-center">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-primary font-bold tracking-[3px] uppercase text-[12px] block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-serif text-text-dark font-normal leading-tight"
    >
      {title}
    </motion.h2>
    {children}
  </div>
);

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5513996252001"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-secondary font-sans selection:bg-primary/20">
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-stretch pt-20 overflow-hidden bg-brown-dark">
        <div className="max-w-[1440px] mx-auto w-full grid md:grid-cols-[1.2fr_1fr]">
          <div className="px-10 md:px-20 py-20 flex flex-col justify-center bg-secondary">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[3px] uppercase text-[12px] block mb-6">Processo de Libertação Emocional</span>
              <h1 className="text-5xl lg:text-[64px] font-serif leading-[1.1] text-text-dark font-normal mb-8">
                Um espaço seguro para a sua jornada interior.
              </h1>
              <p className="text-lg lg:text-xl text-text-light mb-12 leading-relaxed max-w-[520px]">
                Atendimento psicoterapêutico especializado focado no autoconhecimento e equilíbrio emocional através da Terapia de Reprocessamento Generativo (TRG).
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="#agendamento" 
                  className="bg-primary text-white px-10 py-5 rounded-[4px] text-[14px] uppercase tracking-wider font-bold hover:shadow-xl transition-all text-center"
                >
                  Agendar Consulta
                </a>
                <a 
                  href="#sobre" 
                  className="border border-primary text-primary px-10 py-5 rounded-[4px] text-[14px] uppercase tracking-wider font-bold hover:bg-primary hover:text-white transition-all text-center"
                >
                  Conhecer Método
                </a>
              </div>
            </motion.div>
          </div>

          <div className="bg-brown-dark relative hidden md:flex items-center justify-center overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(139,94,60,0.2)_0%,transparent_70%)] pointer-events-none" />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
               className="relative z-10 p-12 text-center"
             >
                <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-secondary font-serif text-4xl max-w-[320px] mx-auto italic opacity-80 mb-10 leading-tight"
                >
                  Terapia de Reprocessamento Generativo
                </motion.p>
                <div className="w-80 h-96 border-2 border-primary/40 rounded-full flex items-center justify-center relative mx-auto">
                   <PsiIcon size={120} className="text-primary/30" />
                   <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 animate-[pulse_4s_infinite]" />
                   <div className="absolute inset-0 border border-primary/10 rounded-full scale-125" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-secondary border-t border-line">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[3px] uppercase text-[12px] block mb-6">SOBRE INÊS</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-10 leading-tight font-normal">Acolhimento e Transformação</h2>
              
              <div className="bg-brown-dark/5 p-12 rounded-2xl border border-primary/10 mb-12">
                <p className="text-text-light text-xl leading-relaxed mb-8">
                  Sou terapeuta especializada em Terapia de Reprocessamento Generativo (TRG), uma abordagem revolucionária que permite acessar e transformar memórias emocionais que causam sofrimento.
                </p>
                <div className="border-l-4 border-primary pl-8 py-2 italic font-serif text-2xl text-brown-dark text-left mx-auto max-w-2xl">
                  "Minha missão é guiar você rumo à liberdade emocional, reprocessando experiências traumáticas e crenças limitantes."
                </div>
              </div>
              
              <p className="text-text-light text-lg leading-relaxed max-w-2xl mx-auto">
                Atendo de forma online e presencial, guiando você em um processo seguro de libertação emocional e reprogramação mental para uma vida plena.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="atendimento" className="py-32 bg-secondary">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20">
          <SectionHeading title="Especialidades Clínicas" subtitle="Como posso te ajudar" />
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BrainIcon className="text-primary" size={32} />,
                title: "Ansiedade e Trauma",
                desc: "Elimine a ansiedade, ataques de pânico e memórias traumáticas através do reprocessamento da raiz emocional desses sintomas."
              },
              {
                icon: <HeartIcon className="text-primary" size={32} />,
                title: "Autossabotagem",
                desc: "Quebre padrões repetitivos de autossabotagem, medo de fracasso e procrastinação que impedem sua evolução profissional."
              },
              {
                icon: <UsersIcon className="text-primary" size={32} />,
                title: "Relacionamentos",
                desc: "Transforme dinâmicas tóxicas e apego ansioso, criando vínculos saudáveis livres de traumas do passado."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[8px] shadow-sm border-t-[4px] border-primary group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-primary mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-text-dark mb-6 font-normal">{item.title}</h3>
                <p className="text-text-light leading-relaxed text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="como-funciona" className="py-32 bg-white overflow-hidden border-t border-line">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20">
          <SectionHeading title="Sua Jornada de Cuidado" subtitle="PRIMEIROS PASSOS" />

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-24 relative z-10">
              {[
                {
                  step: "01",
                  title: "Acolhimento",
                  desc: "Escolha o melhor horário para você diretamente pelo site ou WhatsApp para nossa primeira conversa."
                },
                {
                  step: "02",
                  title: "Sessão TRG",
                  desc: "Atendimento focado, em ambiente seguro e acolhedor, onde trabalhamos as raízes do sofrimento."
                },
                {
                  step: "03",
                  title: "Evolução",
                  desc: "Traçamos um caminho de transformação contínua focado no seu bem-estar profundo e autonomia."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-start"
                >
                  <div className="font-serif italic text-6xl text-primary/15 mb-8">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif text-text-dark mb-6 font-normal">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agendamento Section */}
      <section id="agendamento" className="py-32 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-10 font-normal leading-tight">Escolha cuidar de você hoje.</h2>
            <p className="text-xl opacity-90 mb-16 leading-relaxed font-light">
              Agendar sua sessão de TRG é o primeiro passo para uma vida mais leve. Escolha o horário que funciona melhor para você.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a 
                href="https://wa.me/5513996252001" 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-primary px-12 py-6 rounded-[4px] text-lg font-bold uppercase tracking-widest hover:bg-secondary transition-all flex items-center gap-4 shadow-2xl"
              >
                <Phone size={24} />
                Agendar via WhatsApp
              </a>
              <a 
                href="#contato"
                className="border border-white/40 text-white px-12 py-6 rounded-[4px] text-lg font-bold uppercase tracking-widest hover:bg-white/10 transition-all shadow-xl"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-32">
            <div>
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-primary font-bold tracking-[3px] uppercase text-[12px] block mb-6"
               >
                 CONTATO
               </motion.span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-12 font-normal leading-tight">Vamos Conversar?</h2>
              
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <h4 className="font-bold text-text-dark mb-3 uppercase tracking-[2px] text-xs opacity-50">Localização</h4>
                  <p className="text-text-light text-lg group-hover:text-primary transition-colors flex items-center gap-3">
                    <MapPin size={20} className="text-primary/40" />
                    Atendimento Online e Presencial
                  </p>
                </div>
                
                <div className="group cursor-pointer">
                  <h4 className="font-bold text-text-dark mb-3 uppercase tracking-[2px] text-xs opacity-50">Email</h4>
                  <p className="text-text-light text-lg group-hover:text-primary transition-colors flex items-center gap-3">
                    <Mail size={20} className="text-primary/40" />
                    marinez280128@gmail.com
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <h4 className="font-bold text-text-dark mb-3 uppercase tracking-[2px] text-xs opacity-50">WhatsApp</h4>
                  <p className="text-text-light text-lg group-hover:text-primary transition-colors flex items-center gap-3">
                    <Phone size={20} className="text-primary/40" />
                    (13) 99625-2001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 p-16 rounded-[4px] border border-line">
              <form className="space-y-10">
                <div className="relative border-b border-line pb-4 focus-within:border-primary transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-[2px] text-text-dark/40 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-text-dark/10"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="relative border-b border-line pb-4 focus-within:border-primary transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-[2px] text-text-dark/40 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-text-dark/10"
                    placeholder="E-mail de contato"
                  />
                </div>
                <div className="relative border-b border-line pb-4 focus-within:border-primary transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-[2px] text-text-dark/40 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-text-dark/10 resize-none"
                    placeholder="Como posso ajudar?"
                  />
                </div>
                <button className="w-full bg-primary text-white py-6 rounded-[4px] font-bold text-sm uppercase tracking-widest hover:bg-text-dark transition-all">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brown-dark text-secondary border-t border-line">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-lg">
                <PsiIcon size={24} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white font-normal tracking-wide">Terapeuta Inês</span>
                <p className="text-[10px] text-primary mt-1 uppercase tracking-[3px] font-bold">TRG</p>
              </div>
            </div>
            
            <div className="flex gap-12 text-[11px] font-bold uppercase tracking-[2px] text-white/40">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Agendamento</a>
              <a href="#" className="hover:text-primary transition-colors">TRG</a>
            </div>

            <p className="text-[12px] text-white opacity-50 font-medium">
              © {new Date().getFullYear()} Terapeuta Inês
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
