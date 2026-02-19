import { Search } from 'lucide-react'

export default function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  categories 
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-20 px-4">
      
      {/* Search Input — Fresh White Surface */}
      <div className="relative w-full lg:max-w-md group">
        <Search
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-secondary transition-colors"
          size={20}
        />
        <input
          type="text"
          placeholder="Search our brilliant collection..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-white border border-slate-100 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-secondary/20 transition-all font-bold text-sm shadow-[0_4px_24px_rgba(14,165,233,0.04)]"
        />
      </div>

      {/* Segmented Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 bg-white/40 backdrop-blur-sm p-2 rounded-[28px] border border-white">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-[20px] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
              activeCategory === cat 
              ? 'pill-active shadow-xl shadow-secondary/10' 
              : 'pill-inactive'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
