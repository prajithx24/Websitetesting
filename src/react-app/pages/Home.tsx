import React, { useState } from 'react';
import { Star, Award, Truck, ChefHat, Heart, ArrowRight, MapPin, ShoppingCart } from 'lucide-react';

// --- Data ---
// This data would typically come from an API. 
// To resolve the file path errors, I've switched to using working placeholder image URLs.
const featuredProducts = [
  {
    id: 1,
    name: "Steamed Puttupodi",
    image: "https://placehold.co/600x400/FFF4E6/78350F?text=Steamed+Puttupodi",
    weightOptions: [
      { weight: "500g", price: 55 },
      { weight: "1kg", price: 100 }
    ],
    category: "Puttupodi",
    rating: 5,
  },
  {
    id: 18,
    name: "Muringa Leaves Powder",
    image: "https://placehold.co/600x400/F0FFF4/2F855A?text=Muringa+Powder",
    weightOptions: [
      { weight: "250g", price: 180 }
    ],
    category: "Powders",
    rating: 5,
  },
  {
    id: 7,
    name: "Navara Puttupodi",
    image: "https://placehold.co/600x400/FFF4E6/78350F?text=Navara+Puttupodi",
    weightOptions: [
      { weight: "500g", price: 150 },
      { weight: "1kg", price: 290 }
    ],
    category: "Puttupodi",
    rating: 4,
  }
];

// --- Reusable Components ---

/**
 * A button for initiating a WhatsApp chat.
 * It constructs a wa.me link with a pre-filled message.
 */
const WhatsAppButton = ({ message, className, children }) => {
  const phoneNumber = "911234567890"; // Replace with a target phone number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

/**
 * A card component to display a single product.
 * It manages its own state for selected weight and price.
 */
const ProductCard = ({ product }) => {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);

  const currentOption = product.weightOptions[selectedWeightIndex];
  const price = currentOption.price;
  const weight = currentOption.weight;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-amber-100 flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} // Directly use the URL from the product data
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
        />
        <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
        </div>

        {/* Weight/Price Selection */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 flex-wrap">
              {product.weightOptions.map((option, index) => (
                <button
                  key={option.weight}
                  onClick={() => setSelectedWeightIndex(index)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedWeightIndex === index
                      ? 'bg-amber-700 text-white font-semibold'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {option.weight}
                </button>
              ))}
            </div>
            <div className="text-2xl font-bold text-amber-700">₹{price}</div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-auto bg-gradient-to-r from-amber-700 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-800 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};


// --- Main App Component ---
// This would be your Home page component.
// Note: `Link` from `react-router-dom` is replaced with `<a>` for this standalone example.
export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/5 to-orange-600/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-700" />
                <span className="text-amber-700 font-medium">From Thiruvazhiyode, Palakkad, Kerala</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Authentic 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600"> Kerala Flavours</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Traditional food products crafted with authentic Kerala recipes and the finest ingredients. 
                Experience the taste of heritage with our 28 premium products from Palakkad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#products"
                  className="bg-gradient-to-r from-amber-700 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:from-amber-800 hover:to-orange-700 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#about"
                  className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg font-medium hover:bg-amber-700 hover:text-white transition-all duration-300 text-center"
                >
                  Our Story
                </a>
              </div>
            </div>
            <div className="relative mt-0 md:mt-[-40px]">
              <div className="w-full">
                <img 
                  src="https://placehold.co/900x1200/FEF3C7/A16207?text=Kerala+Cuisine" 
                  alt="Authentic Kerala Flavours" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:shadow-amber-200 transition-shadow aspect-[3/4]"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/900x1200/cccccc/ffffff?text=Image+Not+Found'; }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Royal Taste?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to preserving Kerala's culinary heritage while delivering exceptional quality in every product.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group p-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Each product is made using time-honored Kerala recipes passed down through generations, ensuring authentic taste and quality.
              </p>
            </div>
            <div className="text-center group p-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <ChefHat className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kerala Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                From the heart of Palakkad, we bring you the authentic flavors of Kerala's rich culinary traditions and culture.
              </p>
            </div>
            <div className="text-center group p-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct from our facility in Thiruvazhiyode to your doorstep, ensuring maximum freshness and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              28 carefully crafted products across 4 traditional categories, each representing the essence of Kerala cuisine.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><span className="text-white font-bold text-lg">12</span></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Puttupodi</h3>
              <p className="text-gray-600 text-sm">Traditional puttu powders including steamed, ragi, and specialty blends</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><span className="text-white font-bold text-lg">13</span></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Powders</h3>
              <p className="text-gray-600 text-sm">Natural powders from vegetables, fruits, and traditional spices</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><span className="text-white font-bold text-lg">2</span></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rava</h3>
              <p className="text-gray-600 text-sm">Coarse-ground rava from ragi and corn for healthy breakfast options</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><span className="text-white font-bold text-lg">2</span></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready Mixes</h3>
              <p className="text-gray-600 text-sm">Instant mixes for popular Kerala dishes like dosa, idli, and appam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular products loved by customers across Kerala and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="#all-products" // This would link to the full product page
              className="bg-gradient-to-r from-amber-700 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-amber-800 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-bold mb-2">28</div><div className="text-amber-100">Traditional Products</div></div>
            <div><div className="text-5xl font-bold mb-2">4</div><div className="text-amber-100">Product Categories</div></div>
            <div><div className="text-5xl font-bold mb-2">100%</div><div className="text-amber-100">Kerala Heritage</div></div>
            <div><div className="text-5xl font-bold mb-2">1000+</div><div className="text-amber-100">Satisfied Customers</div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience Authentic Kerala Taste</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our family of satisfied customers who trust Royal Taste for authentic Kerala food products from Palakkad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-amber-700 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:from-amber-800 hover:to-orange-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <WhatsAppButton
              message="Hello! I'm interested in Royal Taste Food Products and would like to know more."
              className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-500 hover:text-white"
            >
              Quick Order on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
