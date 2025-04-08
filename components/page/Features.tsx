import React from "react";
import {Clock, List, Search, Shield} from "lucide-react";

const Features = () => {
   return (
       <div className="px-4 py-5 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
             <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Biznis  <span className="font-serif text-yellow">Centar</span> pomaže vam da pronađete
                <span className="font-serif text-yellow"> pravu uslugu </span>
                brzo i lako
             </h2>
             <p className="mt-4 text-base leading-relaxed text-gray-600">
                Bez obzira na to da li vam treba majstor, lekar ili pravnik – Biznis Centar je
                vaše mesto za pronalaženje pouzdanih usluga uz samo nekoliko klikova.
             </p>
          </div>
          <div className="grid grid-cols-1 p-4 mt-12 mb-6 text-center shadow-xl gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 rounded-2xl bg-gray">
             <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                   <Shield className="text-gray-700 h-9 w-9" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                   Pouzdani pružaoci usluga
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                   Svaki oglašivač prolazi kroz proveru kako biste dobili kvalitetnu i sigurnu uslugu.
                </p>
             </div>
             <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                   <Search className="text-gray-700 h-9 w-9" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                   Brza i laka pretraga
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                   Pronađite majstore, medicinske usluge, advokate i još mnogo toga u samo par sekundi.
                </p>
             </div>
             <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                   <Clock className="text-gray-700 h-9 w-9" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                   Dostupnost 24/7
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                   Hitna popravka, medicinska pomoć ili bilo koja druga usluga – dostupni u bilo koje doba dana.
                </p>
             </div>
             <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                   <List className="text-gray-700 h-9 w-9" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                   Filtriranje po kategorijama
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                   Lako pronađite tačno ono što vam treba – filtrirajte pretragu po tipu usluge, ceni i lokaciji.
                </p>
             </div>
          </div>
       </div>
   );
};

export default Features;
