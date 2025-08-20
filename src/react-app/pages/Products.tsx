import { Star, Eye, Search } from 'lucide-react';
import React, { useState, useMemo } from 'react';

// --- TYPE DEFINITIONS ---
// For better type safety and code clarity
interface WeightOption {
  weight: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  weightOptions: WeightOption[];
  rating: number;
  image: string;
  description: string;
}

// --- MOCK DATA ---
// In a real application, this would come from an API or a Headless CMS
const products: Product[] = [
    // Puttupodi Collection - Different rates for 500g and 1kg
  {
    id: 1,
    name: "Steamed Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹55" },
      { weight: "1kg", price: "₹100" }
    ],
    rating: 4.8,
    image: "STEAMED PUTTU POWDER.jpg",
    description: "Traditional Kerala steamed puttu powder made from finest rice."
  },
  {
    id: 2,
    name: "Ragi Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹95" },
      { weight: "1kg", price: "₹180" }
    ],
    rating: 4.9,
    image: "RAGI PUTTU POWDER.jpg",
    description: "Nutritious finger millet puttu powder, rich in calcium and iron."
  },
  {
    id: 3,
    name: "Greengram Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹90" },
      { weight: "1kg", price: "₹170" }
    ],
    rating: 4.7,
    image: "GREENGRAM PUTTU POWDER.jpg",
    description: "High-protein green gram puttu powder for healthy breakfast."
  },
  {
    id: 4,
    name: "Beetroot Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹220" }
    ],
    rating: 4.8,
    image: "BEETROOT PUTTU POWDER.jpg",
    description: "Natural beetroot-infused puttu powder with vibrant color and taste."
  },
  {
    id: 5,
    name: "Muringa Leaves Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹220" }
    ],
    rating: 4.9,
    image: "MORINGA LEAVES PUTTU POWDER.jpg",
    description: "Superfood moringa leaves mixed puttu powder, packed with nutrients."
  },
  {
    id: 6,
    name: "Wheat Muringa Leaves Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹105" },
      { weight: "1kg", price: "₹200" }
    ],
    rating: 4.7,
    image: "WHEAT MORINGA PUTTU POWDER.jpg",
    description: "Wholesome wheat and moringa combination for nutritious puttu."
  },
  {
    id: 7,
    name: "Navara Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹150" },
      { weight: "1kg", price: "₹290" }
    ],
    rating: 4.9,
    image: "NAVARA PUTTU POWDER.jpg",
    description: "Premium Navara rice puttu powder, an ancient Kerala medicinal rice."
  },
  {
    id: 8,
    name: "Tapioca Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹220" }
    ],
    rating: 4.6,
    image: "15.png",
    description: "Traditional tapioca puttu powder, a Kerala breakfast staple."
  },
  {
    id: 9,
    name: "Appam/Idiappam Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹45" },
      { weight: "1kg", price: "₹85" }
    ],
    rating: 4.8,
    image: "APPAM.jpg",
    description: "Specially processed rice flour for making soft appam and idiappam."
  },
  {
    id: 10,
    name: "Groundnut Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹120" },
      { weight: "1kg", price: "₹230" }
    ],
    rating: 4.7,
    image: "GROUND NUT PUTTU POWDER.jpg",
    description: "Protein-rich groundnut puttu powder with authentic Kerala taste."
  },
  {
    id: 11,
    name: "Carrot Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹220" }
    ],
    rating: 4.8,
    image: "13.png",
    description: "Nutritious carrot-infused puttu powder with natural sweetness and vibrant color."
  },
  {
    id: 12,
    name: "Jackfruit Puttupodi",
    category: "Puttupodi",
    weightOptions: [
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹220" }
    ],
    rating: 4.9,
    image: "JACKFRUIT PUTTU POWDER.jpg",
    description: "Traditional jackfruit puttu powder with natural sweetness and rich flavor."
  },

  // Powder Collection
  {
    id: 13,
    name: "Carrot Rice Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹95" }
    ],
    rating: 4.8,
    image: "carrot rice powder.jpg",
    description: "Nutritious carrot-infused rice powder for baby food and health drinks."
  },
  {
    id: 14,
    name: "Jack Fruit Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹140" }
    ],
    rating: 4.9,
    image: "JACKFRUIT PUTTU POWDER.jpg",
    description: "Natural jackfruit powder, rich in vitamins and minerals."
  },
  {
    id: 15,
    name: "Sprouted Ragi Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹110" }
    ],
    rating: 4.8,
    image: "sprouted ragi powder.jpg",
    description: "Sprouted finger millet powder with enhanced nutritional value."
  },
  {
    id: 16,
    name: "Corn Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹85" }
    ],
    rating: 4.7,
    image: "corn powder.jpg",
    description: "Fine corn powder perfect for making traditional dishes."
  },
  {
    id: 17,
    name: "Banana Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹130" }
    ],
    rating: 4.9,
    image: "banana powder.jpg",
    description: "Natural banana powder, excellent for baby food and health drinks."
  },
  {
    id: 18,
    name: "Muringa Leaves Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹180" }
    ],
    rating: 4.9,
    image: "muringa leaves powder.jpg",
    description: "Pure moringa leaves powder, nature's multivitamin."
  },

  {
    id: 19,
    name: "Beetroot Powder",
    category: "Powders",
    weightOptions: [
      { weight: "250g", price: "₹115" }
    ],
    rating: 4.7,
    image: "beetroot podi.jpg",
    description: "Natural beetroot powder for coloring and nutrition."
  },
  {
    id: 20,
    name: "Chilli Powder",
    category: "Spices",
    weightOptions: [
      { weight: "250g", price: "₹60" }
    ],
    rating: 4.8,
    image: "CHILLI.jpg",
    description: "Authentic Kerala red chilli powder with perfect heat and flavor."
  },
  {
    id: 21,
    name: "Green Chilli Powder",
    category: "Spices",
    weightOptions: [
      { weight: "200g", price: "₹70" }
    ],
    rating: 4.7,
    image: "GREEN CHILLI.jpg",
    description: "Fresh green chilli powder for authentic Kerala cuisine."
  },
  {
    id: 22,
    name: "Turmeric Powder",
    category: "Spices",
    weightOptions: [
      { weight: "250g", price: "₹50" }
    ],
    rating: 4.9,
    image: "TURMERIC.jpg",
    description: "Pure Kerala turmeric powder with natural curcumin."
  },
  {
    id: 23,
    name: "Coriander Powder",
    category: "Spices",
    weightOptions: [
      { weight: "250g", price: "₹45" }
    ],
    rating: 4.8,
    image: "CORIANDER.jpg",
    description: "Freshly ground coriander powder with aromatic fragrance."
  },

  // Rava Collection
  {
    id: 24,
    name: "Ragi Rava",
    category: "Rava",
    weightOptions: [
      { weight: "500g", price: "₹75" }
    ],
    rating: 4.8,
    image: "ragi rava.jpg",
    description: "Coarse finger millet rava for upma and traditional breakfast dishes."
  },
  {
    id: 25,
    name: "Corn Rava",
    category: "Rava",
    weightOptions: [
      { weight: "500g", price: "₹70" }
    ],
    rating: 4.7,
    image: "corn rava.jpg",
    description: "Coarse corn rava perfect for upma and Kerala breakfast items."
  },

  // Ready Mixes Collection
  {
    id: 26,
    name: "Dosa/Idli Batter",
    category: "Ready Mixes",
    weightOptions: [
      { weight: "1kg", price: "₹45" }
    ],
    rating: 4.9,
    image: "DOSA.jpg",
    description: "Ready-to-use fermented batter for soft dosas and fluffy idlis."
  },
  {
    id: 27,
    name: "Appam/Idiappam Mix",
    category: "Ready Mixes",
    weightOptions: [
      { weight: "500g", price: "₹55" }
    ],
    rating: 4.8,
    image: "APPAM.jpg",
    description: "Instant mix for preparing authentic Kerala appam and idiappam."
  }
];
const categories = ["All", "Puttupodi", "Spices", "Ready Mixes", "Powders", "Rava"];

// --- UTILITY FUNCTIONS ---
function getImageUrl(filename: string): string {
  // Assuming images are in a public folder accessible from the root
  return `/product-images/${filename}`;
}

// --- DUMMY COMPONENTS (for self-containment) ---
// In a real app, these would be in their own files.
const AddToCartButton = ({ product }: { product: Product }) => (
  <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors">
    Add to Cart
  </button>
);

const QuickViewModal = ({ product, isOpen, onClose }: { product: (Product & { image: string }) | null, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen || !product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-xl font-bold text-amber-700 mb-4">
            {product.weightOptions.length > 1 
                ? `${product.weightOptions[0].price} - ${product.weightOptions[product.weightOptions.length - 1].price}`
                : product.weightOptions[0].price}
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

const WhatsAppButton = ({ phoneNumber, message, className, children }: { phoneNumber: string, message: string, className: string, children: React.ReactNode }) => (
  <a 
    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

// --- REUSABLE PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, onQuickView }: { product: Product, onQuickView: (product: Product) => void }) => {
  
  // Function to format the price display
  const getPriceDisplay = () => {
    if (product.weightOptions.length > 1) {
      const firstPrice = product.weightOptions[0].price;
      const lastPrice = product.weightOptions[product.weightOptions.length - 1].price;
      return `${firstPrice} - ${lastPrice}`;
    }
    return product.weightOptions[0].price;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-amber-100 flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={getImageUrl(product.image)} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/FFF0DB/333?text=Image+Not+Found'; }}
        />
        <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-gray-50"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-amber-700">
              {getPriceDisplay()}
            </div>
            {product.weightOptions.length > 1 && (
              <div className="text-sm text-gray-500">
                {product.weightOptions.length} weight options
              </div>
            )}
          </div>
        </div>
        
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Memoize filtered products to avoid re-calculating on every render
  const filteredProducts = useMemo(() => {
    return products
      .filter(product => selectedCategory === "All" || product.category === selectedCategory)
      .filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [selectedCategory, searchTerm]);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-amber-700">Traditional Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our carefully crafted collection of authentic Kerala food products, 
            made with traditional recipes from Thiruvazhiyode, Palakkad.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 mb-12 sticky top-0 bg-gradient-to-br from-amber-50 to-orange-50 py-4 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for products like 'Ragi' or 'Moringa'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border-2 border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm border-2 font-medium text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-white text-gray-700 hover:bg-amber-100 hover:border-amber-300 border-amber-200'
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({products.filter(p => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">No Products Found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={quickViewProduct ? { ...quickViewProduct, image: getImageUrl(quickViewProduct.image) } : null}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-700 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Looking for Custom Products?</h2>
          <p className="text-xl mb-8 opacity-90">
            We can create custom blends and products based on traditional Kerala recipes. Contact us for special orders.
          </p>
          <WhatsAppButton
            phoneNumber="919388051003"
            message="Hello! I'm interested in ordering Kerala food products from Royal Taste Food Products. Can you help me with the order process and pricing?"
            className="bg-white text-amber-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            📱 Order via WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
