import Link from "next/link"

export const Navbar = () => {
return (
    <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="container mz-auto flex items-center justify-between px-4 py-4">
         <Link href="/" className="hover:text-blue-600 text-3xl ">
           E-Com
         </Link>
         <div className="space-x-6">
            <Link href="/">Home</Link>
               <Link href="/products" className="hover:text-blue-600">Products</Link>
                  <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>

         </div>
        </div>
    </nav>
)
}
