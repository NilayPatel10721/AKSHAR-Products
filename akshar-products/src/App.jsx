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
    <div className="min-h-screen font-outfit selection:bg-primary/20 bg-bg-warm">
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
              style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(6px)' }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 z-[70] shadow-2xl p-8 flex flex-col"
              style={{
                background: 'rgba(253,246,238,0.85)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                borderLeft: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-xl text-slate-900">Navigation</span>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/60 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-5 text-xl font-bold text-slate-700">
                {['Home', 'Catalog', 'Quality', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-primary transition-colors flex items-center justify-between py-2 border-b border-white/40"
                  >
                    {item} <ChevronRight size={18} className="text-slate-300" />
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <button className="btn btn-primary w-full justify-center">Contact Expert</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Hero />

      {/* ── Catalog Section ── */}
      <section id="catalog" className="py-24 relative overflow-hidden">
        {/* Subtle background blobs */}
        <div className="blob w-[400px] h-[400px] bg-secondary/15 top-0 right-[-100px]" style={{ animationDelay: '2s' }} />
        <div className="blob w-[300px] h-[300px] bg-primary/10 bottom-0 left-[-80px]" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-primary mb-4"
              style={{ background: 'rgba(232,86,58,0.1)', border: '1px solid rgba(232,86,58,0.2)' }}
            >
              Our Collection
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
            >
              Choose your <span className="text-primary italic">clean</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg"
            >
              25+ premium cleaning products for every fabric and every need.
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
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 rounded-[40px]"
              style={{
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search or filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA / Newsletter ── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-primary/15 top-[-100px] left-[-100px]" />
        <div className="blob w-[400px] h-[400px] bg-secondary/20 bottom-[-80px] right-[-80px]" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(255,255,255,0.65)',
              boxShadow: '0 20px 60px rgba(232,86,58,0.12)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Join our distribution <br className="hidden md:block" />
              <span className="text-primary">network</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-10 text-lg">
              500+ distributors across India trust Akshar Products. Get wholesale pricing and dedicated support.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-6 py-4 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-medium"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.9)',
                }}
              />
              <button className="btn btn-primary whitespace-nowrap px-8 py-4">Apply Now</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
