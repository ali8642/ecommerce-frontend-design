import React, { useState } from "react";
import {
  Heart,
  Star,
  MapPin,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductDetails = ({ product, similarProducts = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  // Default product data if none provided
  const defaultProduct = {
    id: 8,
    title: "Wireless Bluetooth Headphones Premium",
    category: "Electronics, gadgets",
    rating: 4.5,
    reviews: 32,
    sold: 154,
    prices: [{ amount: 129.95, units: "50-100 pcs" }],
    supplier: "Quanjol Trading LLC",
    location: "Germany",
    productImages: [
      "https://via.placeholder.com/400x400?text=Product+Image+1",
      "https://via.placeholder.com/400x400?text=Product+Image+2",
      "https://via.placeholder.com/400x400?text=Product+Image+3",
    ],
    type: "Brand new",
    material: "Plastic",
    description:
      "Premium wireless headphones with active noise cancellation, superior sound quality, and long-lasting battery life. Perfect for music lovers and professionals.",
    specs: [
      { name: "Condition", value: "Brand new" },
      { name: "Material", value: "Premium Plastic & Metal" },
      { name: "Category", value: "Electronics, gadgets" },
      { name: "Item num", value: "23421" },
      { name: "Battery Life", value: "30 hours" },
      { name: "Connectivity", value: "Bluetooth 5.0" },
    ],
    features: [
      "Active Noise Cancellation",
      "Premium Sound Quality",
      "Long Battery Life",
    ],
    customization: "Logo printing available",
    protection: "Premium packaging",
    warranty: "2-year warranty",
  };

  const productData = product || defaultProduct;

  // Handle image paths properly
  const processImages = (images) => {
    if (!images || images.length === 0) {
      return ["https://via.placeholder.com/400x400?text=No+Image"];
    }

    return images.map((img) => {
      // Convert broken placeholder paths to working ones
      if (img.startsWith("/api/placeholder/")) {
        return "https://via.placeholder.com/400x400?text=Product+Image";
      }
      // Fix relative paths by removing the dot
      if (img.startsWith("./images/")) {
        return img.replace("./", "/");
      }
      // Keep other paths as they are
      return img;
    });
  };

  const images = processImages(productData.productImages);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Image Section */}
      <div className="bg-white relative">
        <div className="relative w-full h-80 bg-gray-100 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={productData.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x400?text=Image+Not+Found";
            }}
          />

          {/* Navigation arrows - only show if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white shadow-lg"
                    : "bg-white bg-opacity-60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="bg-white p-4 space-y-4">
        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            {renderStars(productData.rating)}
          </div>
          <span className="text-gray-600">{productData.rating}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{productData.reviews} reviews</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{productData.sold} sold</span>
        </div>

        {/* Product Title */}
        <h1 className="text-xl font-semibold text-gray-900 leading-tight">
          {productData.title}
        </h1>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-red-500">
            ${productData.prices[0]?.amount}
          </span>
          <span className="text-gray-500 text-sm">
            / {productData.prices[0]?.units}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Send inquiry
          </button>
          <button
            onClick={() => setIsHeartFilled(!isHeartFilled)}
            className="p-3 border-2 border-gray-300 hover:border-red-300 rounded-lg transition-colors"
          >
            <Heart
              size={20}
              className={
                isHeartFilled ? "fill-red-500 text-red-500" : "text-gray-400"
              }
            />
          </button>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-lg font-medium mb-3 text-gray-900">
          Specifications
        </h3>
        <div className="space-y-3">
          {productData.specs?.map((spec, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-600 font-medium">{spec.name}</span>
              <span className="text-gray-900 font-medium text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-lg font-medium mb-3 text-gray-900">Description</h3>
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            {productData.description}
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Read more
          </button>
        </div>
      </div>

      {/* Supplier Info */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-lg font-medium mb-3 text-gray-900">Supplier</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">
                {productData.supplier?.charAt(0) || "Q"}
              </span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {productData.supplier}
              </div>
              <div className="text-sm text-gray-600">Verified Supplier</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇩🇪</span>
            <span className="text-gray-700 font-medium">
              {productData.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-green-600" />
            <span className="text-gray-700">Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            <span className="text-gray-700">Ships Worldwide</span>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-lg font-medium mb-4 text-gray-900">
          Similar products
        </h3>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2">
            {[
              {
                id: 101,
                title: "Gaming Headset RGB",
                prices: [{ amount: 89.99 }],
                image:
                  "https://images.unsplash.com/photo-1599669454699-248893623440?w=150&h=150&fit=crop",
              },
              {
                id: 102,
                title: "Wireless Earbuds Pro",
                prices: [{ amount: 159.99 }],
                image:
                  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=150&h=150&fit=crop",
              },
              {
                id: 103,
                title: "Studio Monitor Headphones",
                prices: [{ amount: 249.99 }],
                image:
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&h=150&fit=crop",
              },
              {
                id: 104,
                title: "Bluetooth Speaker",
                prices: [{ amount: 79.99 }],
                image:
                  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-32 cursor-pointer group"
              >
                <div className="bg-gray-100 aspect-square rounded-lg overflow-hidden mb-2 group-hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop";
                    }}
                  />
                </div>
                <div className="text-sm font-bold mb-1 text-red-500">
                  ${item.prices[0].amount}
                </div>
                <div className="text-xs text-gray-700 line-clamp-2 leading-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
