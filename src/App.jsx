import { useState, useEffect } from 'react';
import { Camera, Code, Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Cleaning Service Platform',
      description: 'Full-day cleaning service booking system with appointment management and user authentication.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      link: 'https://bgiss.github.io/service_site/',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Mauritian Creole Game',
      description: 'Interactive language learning memory game to help users learn Mauritian Creole vocabulary.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      link: 'https://heartfelt-cupcake-03f212.netlify.app/',
      tech: ['React', 'CSS', 'Game Logic']
    },
    {
      title: 'Vinyl Haven',
      description: 'E-commerce platform for vinyl record collectors with cart functionality and product filtering.',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80',
      link: 'https://vinylhaven.netlify.app/',
      tech: ['React', 'E-commerce', 'API Integration']
    },
    {
      title: 'Meteorite Dashboard',
      description: 'Interactive data visualization dashboard displaying global meteorite landing patterns and statistics.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
      link: 'https://flourishing-raindrop-650749.netlify.app/',
      tech: ['D3.js', 'Data Viz', 'React']
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: cursorVariant === 'link' ? 'scale(2.5)' : 'scale(1)'
        }}
      />

      {/* Navigation */}
      <nav className={`navbar ${activeSection !== 'home' ? 'navbar-scrolled' : ''}`}>
        {/* <div className="nav-brand">
          <span className="brand-text">GB</span>
        </div> */}
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          {/* <div className="hero-tag">Computer Science @ University of Ottawa</div> */}
          <h1 className="hero-title">
            <span className="text-reveal">Hi there!</span>
          </h1>
          
          {/* Geometric Name Section */}
          <div className="name-geometry">
            <div className="name-container">
              <div className="name-intro">
                My <span className="name-highlight">name</span> is
              </div>
              <div className="name-main">
                <span className="first-name">GIRISH</span>
                <span className="last-name">BISSESSUR</span>
              </div>
            </div>
          </div>

          <p className="hero-subtitle text-reveal delay-2">
           Welcome to my portfolio!
          </p>
          <div className="hero-cta text-reveal delay-3">
            <button 
              className="cta-primary"
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              View My Work
              <ArrowRight className="cta-icon" size={20} />
            </button>
            <button 
              className="cta-secondary"
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-card card-primary">
              <div className="card-icon">
                <Code size={32} />
              </div>
              <h3>Who I Am</h3>
              <p>
                Hey, I'm Girish — a Computer Science student at the University of Ottawa 
                who really enjoys building things with code.
              </p>
              <p>
                I recently worked as a co-op developer at Trend Micro, where I got some 
                great hands-on experience contributing to security tools for the cloud. 
                Lately, I've been getting into machine learning and embedded systems — 
                I like the challenge of learning how things work under the hood.
              </p>
              <p>
                Outside of programming, I'm into swimming, running, and teaching myself 
                new stuff just for the fun of it. I'm always open to connecting with 
                people who are building cool things or have interesting ideas.
              </p>
            </div>

            <div className="about-card card-secondary">
              <div className="card-icon">
                <Camera size={32} />
              </div>
              <h3>How I Work</h3>
              <p>
                I like to approach work with curiosity first — whether it's a bug I don't 
                understand or a framework I haven't used before, I enjoy figuring things out. 
                I try to break problems into small steps, and I'm not afraid to ask questions 
                or look things up.
              </p>
              <p>
                I work best when I can focus deeply, so I tend to keep things organized: 
                I use Git for version control, write to-do lists, and comment my code as I go.
              </p>
              <p>
                When I'm working with others, I value clear communication and giving everyone 
                space to contribute. I've learned that sharing progress early and often helps 
                avoid surprises and builds better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">My Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <ExternalLink size={32} />
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="contact-content">
            <div className="contact-text">
              <h3>Let's Build Something Together</h3>
              <p>
                I'm always interested in hearing about new opportunities, interesting 
                projects, or just having a conversation about technology. Feel free to 
                reach out!
              </p>
            </div>

            <div className="contact-links">
              <a 
                href="mailto:bissgirish22@gmail.com" 
                className="contact-link"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Mail size={24} />
                <span>Email Me</span>
              </a>
              <a 
                href="https://github.com/BGISS" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/girish-bissessur/" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}