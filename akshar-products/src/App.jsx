import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'

// Layout Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import SearchFilters from './components/SearchFilters'
import Footer from './components/Footer'

// Data
import productsData from './data/products.json'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(productsData.map(p => p.category))]
    return cats
  }, [])

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen font-outfit selection:bg-primary/20 bg-bg-cool">
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60]"
              style={{ background: 'rgba(15, 23, 42, 0.1)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 z-[70] shadow-2xl p-10 flex flex-col"
              style={{
                background: 'rgba(242, 247, 251, 0.9)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                borderLeft: '1px solid rgba(255,255,255,0.7)',
              }}
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-bold text-xs uppercase tracking-[0.3em] text-slate-400">Directory</span>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 hover:bg-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-black text-slate-800">
                {['Home', 'Catalog', 'Quality', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {item} <ChevronRight size={20} className="text-slate-200 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <button className="btn btn-primary w-full justify-center py-4">Inquire Now</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Hero />

      {/* ── Catalog Section ── */}
      <section id="catalog" className="py-24 relative overflow-hidden">
        {/* Subtle background blobs */}
        <div className="blob w-[600px] h-[600px] bg-secondary/10 top-[-100px] right-[-100px]" style={{ animationDelay: '0s' }} />
        <div className="blob w-[400px] h-[400px] bg-accent/10 bottom-[-50px] left-[-50px]" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-secondary mb-6"
              style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)' }}
            >
              Our Collection
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 tracking-tight"
            >
              Essential <span className="text-primary italic">Purity.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              Premium cleaning solutions meticulously crafted for superior care and lasting fresh whiteness.
            </motion.p>
          </div>

          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
          />

          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 rounded-[48px] border border-white bg-white/40 backdrop-blur-sm"
            >
              <div className="text-6xl mb-6 opacity-30">🔍</div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">No results found</h3>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto">Try refining your search or filter to discover our collections.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                className="text-primary font-bold hover:underline underline-offset-8"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="blob w-[800px] h-[800px] bg-white opacity-40 top-[-20%] left-[-10%]" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[64px] p-12 md:p-24 text-center border border-white"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 40px 100px rgba(14,165,233,0.08)',
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-8 tracking-tighter leading-none">
              Join the <br className="hidden md:block" />
              <span className="text-primary">network.</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-12 text-lg font-medium leading-relaxed">
              500+ distributors across India trust Akshar Excellence. Get wholesale pricing and dedicated partner support.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Business email address"
                className="flex-1 px-8 py-5 rounded-2xl bg-white border border-slate-100 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
              />
              <button className="btn btn-primary px-10 py-5">Apply Now</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
