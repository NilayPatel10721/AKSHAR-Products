import { Search } from "lucide-react";

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 px-4">
      {/* Search Input — Aesthetic Line Styling */}
      <div className="relative w-full lg:max-w-md group">
        <Search
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#1F2326]/40 group-focus-within:text-[#D35400] transition-colors duration-500"
          size={20}
        />
        <input
          type="text"
          placeholder="Search Formulations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-0 py-4 bg-transparent border-b border-[#1F2326]/20 text-[#1F2326] placeholder:text-[#1F2326]/30 focus:outline-none focus:border-[#D35400] transition-all font-medium text-sm rounded-none"
        />
      </div>

      {/* Segmented Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <button
            onClick={() => setActiveCategory("")}
            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${
              activeCategory === ""
                ? "bg-[#1F2326] text-[#EAE6DF] shadow-lg"
                : "bg-transparent text-[#1F2326]/50 hover:text-[#1F2326] border border-[#1F2326]/10 hover:border-[#1F2326]/30"
            }`}
        >
          All Scents
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${
              activeCategory === cat
                ? "bg-[#1F2326] text-[#EAE6DF] shadow-lg"
                : "bg-transparent text-[#1F2326]/50 hover:text-[#1F2326] border border-[#1F2326]/10 hover:border-[#1F2326]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
