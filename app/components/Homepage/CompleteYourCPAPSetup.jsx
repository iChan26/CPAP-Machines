"use client";

export default function CpapSetup() {
  const items = [
    {
      img: "/images/cpap-masks-collection.png",
      title: "CPAP Masks",
      description: "Full face, nasal, and nasal pillow masks",
      button: "Shop Masks",
      link: "/collections/cpap-masks"
    },
    {
      img: "/images/cpap-supplies.png",
      title: "CPAP Supplies",
      description: "Filters, tubing, and replacement parts",
      button: "Shop Supplies",
      link: "/collections/cpap-supplies"
    },
    {
      img: "/images/cpap-cleaning-equipment.png",
      title: "CPAP Cleaning",
      description: "Sanitizers and cleaning solutions",
      button: "Shop Cleaning",
      link: "/collections/cpap-cleaning"
    },
    {
      img: "/images/insurance-verification.png",
      title: "Insurance",
      description: "Verify coverage and benefits",
      button: "Check Coverage",
      link: "/insurance"
    }
  ];

  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold tracking-tight">Complete Your CPAP Setup</h2>
      <p className="text-gray-600 mt-2 text-base">
        Find everything you need for comfort, cleaning, and coverage
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg hover:border-blue-200 transition duration-300"
        >
          {/* Image Container */}
          <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-xl shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src={item.img}
              alt={item.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
          <p className="mb-6 text-gray-600 text-sm">{item.description}</p>
            <br/>
          {/* Button */}
          <a
            href={item.link}
            className="btn px-6 py-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition"
          >
            {item.button}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
