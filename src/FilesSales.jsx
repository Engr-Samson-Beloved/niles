import React, { useState, useEffect } from 'react';
import { Search, Tag, Download, ExternalLink } from 'lucide-react';

const FilesSales = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize AOS when component mounts
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    loadAOS();
  }, []);

  const products = [
    {
      id: 1,
      title: "Modern Business Mockup Pack",
      category: "Mockup Files",
      price: 29.99,
      description: "Complete branding mockup pack including business cards, letterheads, and envelopes",
      image: "/BSD/1.jpg",
      tags: ["PSD", "AI", "High Resolution"]
    },
    {
      id: 2,
      title: "Church Logo Template",
      category: "Logo and Brands",
      price: 39.99,
      description: "Customizable church logo design with modern Christian symbols",
      image: "/CHD/1.jpg",
      tags: ["Vector", "AI", "EPS"]
    },
    {
      id: 3,
      title: "Restaurant Menu Design",
      category: "Predesigns",
      price: 24.99,
      description: "Elegant restaurant menu template with multiple layout options",
      image: "/CHD/1.jpg",
      tags: ["PSD", "InDesign", "Print Ready"]
    },
    {
      id: 4,
      title: "Corporate Identity Pack",
      category: "Logo and Brands",
      price: 49.99,
      description: "Complete brand identity package with logo variations and brand guidelines",
      image: "/BSD/2.jpg",
      tags: ["AI", "PDF", "Guidelines"]
    },
    {
      id: 5,
      title: "Social Media Pack",
      category: "Predesigns",
      price: 19.99,
      description: "Instagram and Facebook post templates for business",
      image: "/LGD/1.jpg",
      tags: ["PSD", "Canva", "Social Media"]
    },
    {
      id: 6,
      title: "Product Packaging Mockups",
      category: "Mockup Files",
      price: 34.99,
      description: "Realistic 3D packaging mockups for products",
      image: "/LGD/L1.jpg",
      tags: ["PSD", "Smart Objects", "3D"]
    }
  ];

  const categories = ['All', ...new Set(products.map(item => item.category))];

  const handleWhatsAppPurchase = (product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in purchasing "${product.title}" for $${product.price}. Please provide payment details.`
    );
    window.open(`https://wa.me/8116060517?text=${message}`, '_blank');
  };

  const filteredProducts = products
    .filter(product => activeCategory === 'All' || product.category === activeCategory)
    .filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <section id="files-sales" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Design Resources
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            High-quality design resources for your creative projects
          </p>

          {/* Search Bar */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative max-w-md mx-auto mb-8"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Category Filter */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <span className="flex items-center gap-1 text-lg font-bold text-purple-600 dark:text-purple-400">
                    <Tag size={16} />
                    ${product.price}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleWhatsAppPurchase(product)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors group"
                >
                  <span>Buy Now</span>
                  <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilesSales;