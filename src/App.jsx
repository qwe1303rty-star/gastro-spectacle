import { CartProvider } from './context/CartContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Chef from './components/Chef'
import Advantages from './components/Advantages'
import Plans from './components/Plans'
import Corporate from './components/Corporate'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <div className="bg-ink text-pearl min-h-screen">
        <Nav />
        <main>
          <Hero />
          <Menu />
          <Chef />
          <Advantages />
          <Plans />
          <Corporate />
          <Reviews />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
