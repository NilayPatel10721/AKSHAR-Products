import { Search } from 'lucide-react'

export default function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  categories 
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
      {/* Search */}
      <div className="relative w-full lg:max-w-sm group">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
          size={18}
        />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-5 py-3.5 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-medium"
          style={{
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === cat ? 'pill-active' : 'pill-inactive'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
