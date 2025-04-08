import React from "react";
import Link from "next/link";

const Join = () => {
   return (
      <div className="bg-blue-600 py-16 lg:py-24">
         <section className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
               <div className="flex justify-center -space-x-2 isolate">
                  <img
                     className="relative z-30 inline-block rounded-full h-14 w-14 ring-4 ring-white object-cover"
                     src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg"
                     alt="Korisnik 1"
                  />
                  <img
                     className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white object-cover"
                     src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="Korisnik 2"
                  />
                  <img
                     className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white object-cover"
                     src="https://images.pexels.com/photos/31302490/pexels-photo-31302490/free-photo-of-fashionable-woman-with-eyeglasses-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="Korisnik 3"
                  />
                  <img
                     className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white object-cover"
                     src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                     alt="Korisnik 4"
                  />
               </div>

               <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-12">
                  Već <span className="border-b-4 border-white">1,482</span>{" "}
                  stručnjaka
               </h2>
               <p className="max-w-xl mx-auto mt-6 text-lg text-white/90 mb-8">
                  nudi svoje usluge na Biznis Centru. Pronađite nove klijente i unapredite svoje poslovanje – registrujte se danas!
               </p>
               <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700">
                  Pridruži se
               </Link>
            </div>
         </section>
      </div>
   );
};

export default Join;
