import React from "react";
import Image from "next/image";

const Hero = () => {
   return (
      <div className="relative -mt-8 bg-white lg:w-full">
         <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
               <div className="flex items-center p-1 space-x-2 bg-gray-100 rounded-full max-w-max">
                  {/*<div className="bg-white rounded-full ">*/}
                  {/*   <p className="text-sm font-medium">Let&apos;s eat</p>*/}
                  {/*</div>*/}
                  {/*<p className="text-sm font-medium">*/}
                  {/*   Join our Food Zone &rarr;*/}
                  {/*</p>*/}
               </div>
               <h1 className="mt-8 text-3xl font-normal tracking-tight text-black md:text-4xl lg:text-6xl">
                  Sve što vam treba
                  <div className="font-serif text-4xl font-bold text-yellow md:text-6xl">
                     {" "}
                     Na jednom mestu
                  </div>
               </h1>
               <p className="mt-8 text-lg text-gray-700">
                  Pronađite najbolje usluge na jednom mestu! Dobrodošli u {" "}
                  <span className="font-semibold text-yellow">Biznis Centar</span>,
                  gde lako možete pronaći i kontaktirati profesionalce iz različitih delatnosti
               </p>
               <form action="" className="flex items-start mt-8 space-x-2">
                  <div>
                     <input
                        className="flex w-full px-3 py-2 text-sm bg-transparent border rounded-md border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="search"
                        placeholder="Pretraga usluga"
                        id="search"></input>
                     <p className="mt-2 text-sm text-gray-500">
                        Unesite pretragu i pronađite stručnjake koji su vam potrebni.
                     </p>
                  </div>
                  <div>
                     <button
                        type="button"
                        className="rounded-md bg-yellow px-3 py-2.5 text-sm font-semibold hover:text-white text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Pretraži
                     </button>
                  </div>
               </form>
            </div>

            <div className="relative px-2 lg:col-span-5 xl:col-span-6 lg:mb-9">
               <Image
                  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[530px] xl:aspect-[1/1] lg:mt-14 rounded-3xl shadow-2xl "
                  src="https://as1.ftcdn.net/v2/jpg/06/22/04/22/1000_F_622042299_cvRYKTzOdvJQuwUdqtdzXpYr8A3Ll41J.jpg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
