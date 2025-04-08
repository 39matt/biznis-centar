import React from "react";

const FAQ = () => {
   return (
       <section className="px-4 py-10 mx-auto max-w-7xl ">
          <div>
             <div className="max-w-3xl mx-auto lg:text-center">
                <h2 className="text-3xl font-bold text-black lg:leading-tight sm:text-4xl lg:text-5xl">
                   Često Postavljana{" "}
                   <span className="font-serif text-yellow">Pitanja</span>
                </h2>
             </div>
             <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 md:mt-16 md:grid-cols-2">
                <div>
                   <h2 className="text-xl font-semibold text-black">
                      Kako mogu da pronađem pružaoca usluga na Biznis Centru?
                   </h2>
                   <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                      Pružaoce usluga možete lako pronaći koristeći naš intuitivni pretraživač prema kategorijama, lokaciji ili ključnim rečima.
                   </p>
                </div>
                <div>
                   <h2 className="text-xl font-semibold text-black">
                      Kako mogu da kontaktiram pružaoca usluga?
                   </h2>
                   <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                      Nakon što pronađete pružaoca, možete ga direktno kontaktirati putem kontakt podataka koji su navedeni na njegovom profilu.
                   </p>
                </div>
                <div>
                   <h2 className="text-xl font-semibold text-black">
                      Da li su pružaoci usluga verifikovani?
                   </h2>
                   <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                      Da, brinemo da svaki pružalac usluga bude verifikovan kako bi se osigurala kvalitetna i pouzdana ponuda.
                   </p>
                </div>
                <div>
                   <h2 className="text-xl font-semibold text-black">
                      Mogu li ostaviti recenziju za pružaoca usluga?
                   </h2>
                   <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                      Naravno! Nakon korišćenja usluge, možete ostaviti recenziju na osnovu vašeg iskustva, što će pomoći drugim korisnicima da donesu informisane odluke.
                   </p>
                </div>
             </div>
          </div>
       </section>
   );
};

export default FAQ;
