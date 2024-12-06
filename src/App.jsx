import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Instagram, Twitter, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from './Gallery';
import FilesSales from './FilesSales';
// Import images from asset folder
import galleryImage1 from './assets/gallery/1.jpg';
import galleryImage2 from './assets/gallery/2.jpg';
import galleryImage3 from './assets/gallery/3.jpg';
import galleryImage4 from './assets/gallery/4.jpg';
import galleryImage5 from './assets/gallery/5.jpg';
import galleryImage6 from './assets/gallery/6.jpg';
import clientLogo1 from './assets/gallery/5.jpg';
import clientLogo2 from './assets/gallery/1.jpg';
import clientLogo3 from './assets/gallery/1.jpg';
import clientLogo4 from './assets/gallery/5.jpg';
import testimonialImage1 from './assets/gallery/1.jpg';
import testimonialImage2 from './assets/gallery/1.jpg';

const ServiceCard = ({ title, description }) => (
  <div 
    className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
    data-aos="fade-up"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);


const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="relative font-medium text-gray-700 dark:text-gray-300 before:content-[''] before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-purple-600 before:transition hover:text-purple-600 dark:hover:text-purple-400 hover:before:scale-x-100"
  >
    {children}
  </a>
);

const GalleryItem = ({ src, alt }) => (
  <div 
    data-aos="zoom-in"
    data-aos-duration="800"
    className="relative overflow-hidden rounded-lg shadow-lg"
  >
    <img src={src} alt={alt} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
  </div>
);

const ClientLogo = ({ src, alt }) => (
  <div 
    data-aos="fade-up"
    data-aos-duration="800"
    className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
  >
    <img src={src} alt={alt} className="max-h-12 grayscale hover:grayscale-0 transition-filter" />
  </div>
);

const TestimonialCard = ({ image, name, title, quote }) => (
  <div 
    data-aos="flip-left"
    data-aos-duration="1000"
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
  >
    <div className="relative h-48">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{title}</p>
      <p className="text-gray-600 dark:text-gray-400">{quote}</p>
    </div>
  </div>
);

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const services = [
    {
      title: "Branding & Identity",
      description: "Crafting memorable brand experiences that captivate your target audience."
    },
    {
      title: "Graphic Design",
      description: "Visually stunning designs that elevate your brand and communicate your message effectively."
    },
    {
      title: "Web Design",
      description: "Responsive and user-friendly websites that showcase your work and drive business growth."
    },
    {
      title: "Motion Graphics",
      description: "Engaging and dynamic animations that bring your ideas to life and leave a lasting impression."
    }
  ];

  const gallery = [
    { src: galleryImage1, alt: "Gallery Image 1" },
    { src: galleryImage2, alt: "Gallery Image 2" },
    { src: galleryImage3, alt: "Gallery Image 3" },
    { src: galleryImage4, alt: "Gallery Image 4" },
    { src: galleryImage5, alt: "Gallery Image 5" },
    { src: galleryImage6, alt: "Gallery Image 4" }
  ];

  const clients = [
    { src: clientLogo1, alt: "Client Logo 1" },
    { src: clientLogo2, alt: "Client Logo 2" },
    { src: clientLogo3, alt: "Client Logo 3" },
    { src: clientLogo4, alt: "Client Logo 4" }
  ];

  const testimonials = [
    {
      image: testimonialImage1,
      name: "Jane Doe",
      title: "CEO, Acme Inc.",
      quote: "Niles Gideon's exceptional design work has been a game-changer for our brand. Their attention to detail and creative vision have truly elevated our image and helped us stand out in the industry."
    },
    {
      image: testimonialImage2,
      name: "John Smith",
      title: "Founder, XYZ Co.",
      quote: "Working with Niles Gideon has been a pleasure. They consistently deliver high-quality designs that not only look amazing but also effectively communicate our brand's message. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Niles Gideon Graphics
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#clients">Clients</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-700" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-700" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu size={24} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'Gallery', 'Clients', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div 
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="relative w-60 h-60 mx-auto mb-12"
          >
      {/* Profile Image */}
      <div className="absolute inset-2 rounded-full overflow-hidden">
        <img 
          src="/LGD/LOGO.jpg" 
          alt="Niles Gideon"
          className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Floating Circles Animation */}
      <div className="absolute -inset-4">
        <div className="absolute top-0 right-0 w-4 h-4 bg-purple-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-pink-400 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-300 rounded-full animate-float"></div>
      </div>
    </div>

    <h1 
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="block">Niles Gideon</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Graphics Designer
            </span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Elevating brands through exceptional design and creative solutions.
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transform transition-all hover:scale-105 hover:shadow-lg group"
          >
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
  {/* Add required styles */}
  <style jsx>{`
    .animate-spin-slow {
      animation: spin 8s linear infinite;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: float 4s ease-in-out infinite;
    }
    
    .animate-float-delay {
      animation: float 3.5s ease-in-out infinite;
      animation-delay: 1s;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `}</style>
</section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Services
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Comprehensive design solutions to elevate your brand and drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <Gallery/>
      {/* <section id="gallery" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Gallery</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore a selection of our design work and see how we've helped our clients succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {gallery.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Clients
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              We're proud to work with leading brands and forward-thinking companies.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <ClientLogo 
                key={index} 
                {...client} 
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

     {/* Testimonials Section */}
     <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              What Our Clients Say
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Hear from our satisfied clients about their experience working with Niles Gideon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                data-aos-delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
<FilesSales/>
{/* Contact Section */}
<section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Let's Connect
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
            >
              Ready to take your digital presence to the next level? Get in touch and let's discuss how we can achieve your goals together.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            {[
              [Instagram, 'Instagram'],
              [Twitter, 'Twitter'],
              [Linkedin, 'LinkedIn'],
              [Mail, 'Email']
            ].map(([Icon, platform], index) => (
              <a
                key={platform}
                href="#"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group flex flex-col items-center transition-transform hover:-translate-y-1"
              >
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/+2348054257409"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-10 animate-bounce transition-transform duration-500"
        style={{ animationDirection: "alternate" }}
      >
        <div className="bg-green-500 p-4 rounded-full shadow-lg">
          <img src="/whats.png" alt="WhatsApp" className="w-8 h-8" />
        </div>
      </a>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Niles Gideon Graphics. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default PortfolioWebsite;