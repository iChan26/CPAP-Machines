"use client";
import { Await, Link } from "react-router";
import { Suspense, useState } from "react";

export default function AllCpapMachines({ products }) {
  const [sortOption, setSortOption] = useState("Best Sellers");

  const sortProducts = (list) => {
    const sorted = [...list];
    switch (sortOption) {
      case "Price: Low to High":
        return sorted.sort(
          (a, b) =>
            parseFloat(a.priceRange.minVariantPrice.amount) -
            parseFloat(b.priceRange.minVariantPrice.amount)
        );
      case "Price: High to Low":
        return sorted.sort(
          (a, b) =>
            parseFloat(b.priceRange.minVariantPrice.amount) -
            parseFloat(a.priceRange.minVariantPrice.amount)
        );
      case "Name":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted; // Best Sellers
    }
  };

  return (
    <section id="compare" className="bg-[#f9fafb]">
      <div className="recommended-products max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2>All CPAP Machines</h2>

          <div className="relative">
            <select
              className="appearance-none border border-gray-300 rounded-full px-5 py-2.5 pr-10 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         hover:border-blue-400 transition duration-200 cursor-pointer"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Best Sellers</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name</option>
            </select>

            <svg
              className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Products */}
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Await resolve={products}>
            {(response) => {
              const sortedList = sortProducts(response?.products?.nodes || []);
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {sortedList.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative group">
                        {product.featuredImage ? (
                          <img
                            src={product.featuredImage.url}
                            alt={product.featuredImage.altText || product.title}
                            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
                            No Image
                          </div>
                        )}
                        <span className="absolute top-3 right-3 bg-green-100 text-green-700 px-2 py-1 rounded-full shadow">
                          Insurance Eligible
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col flex-1 p-5">
                        <h3 className="line-clamp-2">{product.title}</h3>
                        <p className="text-gray-500 mt-1">{product.productType}</p>
                        <p className="text-[#3d9b15] mt-3">
                          ${product.priceRange.minVariantPrice.amount}
                        </p>

                        {/* Shop Button */}
                        <div className="mt-auto pt-4">
                          <a href={`/products/${product.handle}`} className="btn btn-block">
                            Shop Now
                          </a>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
