import React from 'react';

const PetCard = ({service}) => {
    return (
        <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.serviceName}
              className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.serviceName}
              </h3>

              {/* Rating + Price */}
              <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  ⭐ <span className="font-medium">{service.rating}</span>
                </span>
                <span className="text-[#FF7B54] font-semibold">
                  ${service.price}
                </span>
              </div>

              {/* Button */}
              <button
                className="mt-auto bg-[#FF7B54] text-white py-2 rounded-lg hover:bg-[#FF9B73] transition-colors duration-300"
                onClick={() => alert(`Viewing details for: ${service.serviceName}`)}
              >
                View Details
              </button>
            </div>
          </div>
    );
};

export default PetCard;