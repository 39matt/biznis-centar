import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-white">
         <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
               <div className="mb-8 md:mb-0">
                  <Link href="/" className="flex items-center">
                     <span className="text-2xl font-bold">
                        Biznis <span className="text-blue-600">Centar</span>
                        </span>
                  </Link>
                  <p className="mt-4 text-gray-600 max-w-md">
                     Pronađite najbolje majstore i uslužne delatnosti na jednom mestu. 
                     Vaš pouzdani partner za sve vrste usluga.
                  </p>
               </div>
               
               <div className="flex flex-col items-center md:items-end">
                  <div className="flex space-x-4">
                     <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                     >
                        <FaFacebook size={24} />
                     </a>
                     <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                     >
                        <FaTwitter size={24} />
                     </a>
                     <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                     >
                        <FaInstagram size={24} />
                     </a>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                     © 2024 Biznis Centar. Sva prava zadržana.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
