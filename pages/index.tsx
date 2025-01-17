import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Index: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 px-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {["Luxury Villa", "Pool", "Pet Friendly"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-blue-200 rounded-full text-sm font-medium"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div
            key={index}
            className="bg-white shadow rounded overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{property.name}</h3>
              <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="text-sm text-gray-600">${property.price} / night</p>
              <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;
