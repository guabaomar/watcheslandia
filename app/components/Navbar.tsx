import React from 'react'
import Link from 'next/link'





const Navbar = () => {
  return (

    <nav className="px-4 md:px-12 py-4 md:py-6 bg-white text-black">

        <div className="flex justify-between items-center">


        <Link href="/">Watches</Link>

           <div>
                

                <div>
                          
                </div>

                <input type="text" placeholder='Search'/>

           </div>




           <Link href="/add-product">
           
           
              <button>


                          Add Product


              </button>
           
           </Link>


      </div>


    </nav>
   
   
)}

export default Navbar

