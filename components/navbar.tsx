import Link from "next/link"

export const Navbar = () => {
return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition-colors duration-300"
        >
          E-Com
        </Link>
         <div className="space-x-6">
<Link href="/" className="relative group hover:text-blue-700 transition-colors">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/products" className="relative group hover:text-blue-700 transition-colors">
            Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/checkout" className="relative group hover:text-blue-700 transition-colors">
            Checkout
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

         </div>
        </div>
    </nav>
)
}
