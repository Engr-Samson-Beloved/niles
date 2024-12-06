import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ image, onClose, onPrev, onNext, hasNext, hasPrev }) => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
    setPosition({ x: 0, y: 0 }); // Reset position on zoom
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 1));
    setPosition({ x: 0, y: 0 }); // Reset position on zoom
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-50"
        >
          <X size={24} />
        </button>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 p-4 rounded-full z-50">
          <button 
            onClick={handleZoomOut}
            disabled={scale === 1}
            className="p-2 text-white hover:text-gray-300 disabled:opacity-50"
          >
            <ZoomOut size={20} />
          </button>
          <span className="text-white">{Math.round(scale * 100)}%</span>
          <button 
            onClick={handleZoomIn}
            disabled={scale === 3}
            className="p-2 text-white hover:text-gray-300 disabled:opacity-50"
          >
            <ZoomIn size={20} />
          </button>
          <div className="w-px h-6 bg-white/30" />
          <button 
            onClick={handleDownload}
            className="p-2 text-white hover:text-gray-300"
          >
            <Download size={20} />
          </button>
        </div>

        {/* Navigation arrows */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 p-2 text-white hover:text-gray-300 bg-black/50 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 p-2 text-white hover:text-gray-300 bg-black/50 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image container */}
        <div 
          className="relative overflow-hidden w-full h-full cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const gallery = [
    { 
      src: "/BSD/6.jpg", 
      alt: "Church Design 1", 
      category: "Church Designs",
      title: "Modern Church Logo",
      description: "Contemporary design for a growing congregation"
    },
    { 
      src: "/BSD/7.jpg", 
      alt: "Logo Design 1", 
      category: "Logo Designs",
      title: "Brand Identity",
      description: "Minimalist logo for tech startup"
    },
    { 
      src: "/BSD/2.jpg", 
      alt: "Business Design 1", 
      category: "Business Designs",
      title: "Corporate Brochure",
      description: "Professional marketing materials"
    },
    { 
      src: "/BSD/4.jpg", 
      alt: "Church Design 2", 
      category: "Church Designs",
      title: "Church Bulletin",
      description: "Weekly bulletin design template"
    },
    { 
      src: "/BSD/1.jpg", 
      alt: "Logo Design 2", 
      category: "Logo Designs",
      title: "Restaurant Logo",
      description: "Elegant design for fine dining"
    },
    { 
      src: "/BSD/2.jpg", 
      alt: "Business Design 2", 
      category: "Business Designs",
      title: "Annual Report",
      description: "Data visualization and layout"
    }
  ];

  const categories = ['All', ...new Set(gallery.map(item => item.category))];

  const filteredGallery = activeCategory === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredGallery[currentImageIndex - 1]);
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < filteredGallery.length - 1) {
      setSelectedImage(filteredGallery[currentImageIndex + 1]);
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our diverse portfolio of design work across different industries
          </p>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onClick={() => handleImageClick(item, index)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <span className="inline-block px-4 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <GalleryModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
            hasPrev={currentImageIndex > 0}
            hasNext={currentImageIndex < filteredGallery.length - 1}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;