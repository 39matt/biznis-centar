import React from "react";
import Link from "next/link";
import Image from "next/image";

const avatars = [
   {
      src: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
      alt: "Korisnik 1",
      zIndex: "z-30",
   },
   {
      src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Korisnik 2",
      zIndex: "z-20",
   },
   {
      src: "https://images.pexels.com/photos/31302490/pexels-photo-31302490/free-photo-of-fashionable-woman-with-eyeglasses-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Korisnik 3",
      zIndex: "z-10",
   },
   {
      src: "https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75",
      alt: "Korisnik 4",
      zIndex: "z-0",
   },
];

const Join = () => {
   return (
       <div className="bg-blue-600 py-16 lg:py-24">
          <section className="max-w-7xl mx-auto px-4">
             <div className="max-w-2xl mx-auto text-center">
                <div className="flex justify-center -space-x-2 isolate">
                   {avatars.map((avatar, idx) => (
                       <div
                           key={idx}
                           className={`relative h-14 w-14 rounded-full ring-4 ring-white overflow-hidden ${avatar.zIndex}`}
                       >
                          <Image
                              src={avatar.src}
                              alt={avatar.alt}
                              fill
                              className="object-cover"
                          />
                       </div>
                   ))}
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-12">
                   Već <span className="border-b-4 border-white">1,482</span>{" "}
                   stručnjaka
                </h2>
                <p className="max-w-xl mx-auto mt-6 text-lg text-white/90 mb-8">
                   nudi svoje usluge na Biznis Centru. Pronađite nove klijente i
                   unapredite svoje poslovanje – registrujte se danas!
                </p>
                <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700"
                >
                   Pridruži se
                </Link>
             </div>
          </section>
       </div>
   );
};

export default Join;
