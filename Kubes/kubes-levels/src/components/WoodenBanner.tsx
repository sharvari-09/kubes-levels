// WoodenBanner.tsx
import "../font.css"
import { motion } from "framer-motion";

const WoodenBanner = () => {
  return (
    <div
      className="absolute flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px] h-[50px] bg-cover bg-center z-20 mt-[-20]"
      style={{ backgroundImage: "url('/assets/titlebanner.png')" }}

    
    >
      <h1 className="title text-white text-2xl md:text-4xl font-old drop-shadow-lg z-20">
        Cluster Clash
      </h1>
     
    </div>
  );
};

export default WoodenBanner;
