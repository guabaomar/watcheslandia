
import Hero from "./components/Hero";
import Productlist from "./components/Productlist";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
     <div>
      <Hero />

      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">
        All Products
      </h2>
      <Productlist />
  
     </div>
  );
}
