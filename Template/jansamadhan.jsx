import { useState } from "react";
import { MapPin } from "lucide-react";

export default function JanSamadhanUI() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f7f1e1] flex justify-center px-4 py-6">
      <div className="bg-[#f7f1e1] w-full max-w-6xl rounded-2xl shadow-lg p-6 md:p-10">
        {/* Navbar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
          <h1 className="text-2xl font-bold text-orange-700">Jarsamthan</h1>

          <div className="flex flex-wrap gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-orange-700">Home</a>
            <a href="#" className="hover:text-orange-700">Source</a>
            <a href="#" className="hover:text-orange-700">Measure</a>
            <a href="#" className="hover:text-orange-700">Outline</a>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="border border-gray-400 rounded-lg px-3 py-1 flex-1 sm:w-auto"
            />
            <button className="bg-yellow-200 px-3 py-1 rounded-lg font-medium whitespace-nowrap">
              Sort time
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jata 博</h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              How issues, howselft, your plan the issue. <br />
              Jake is your main ability the hive and indi water, on better
              options.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg">
              Report Issue
            </button>
          </div>

          {/* Right Map */}
          <div className="relative w-full h-64 md:h-80 bg-[#f7f1e1] border rounded-lg flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="Map"
              className="w-full h-full object-contain opacity-70"
            />
            <MapPin className="absolute top-1/3 left-1/3 text-orange-600 w-8 h-8" />
            <MapPin className="absolute top-1/2 left-1/2 text-red-600 w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
