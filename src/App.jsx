import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Chef from './components/Chef'
import Advantages from './components/Advantages'
import Plans from './components/Plans'
import Corporate from './components/Corporate'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import CartPage from './components/CartPage'
import PushBanner from './components/PushBanner'

function HomePage() {
  return (
    <>
      <Hero />
      <Menu />
      <Chef />
      <Advantages />
      <Plans />
      <Corporate />
      <Reviews />
    </>
  )
}

export default function App() {
  return (
    <CartProvider>
      <div className="bg-ink text-pearl min-h-screen">
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
        <PushBanner />
      </div>
    </CartProvider>
  )
}
