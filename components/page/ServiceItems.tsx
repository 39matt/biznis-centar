import React from "react";
import toast, { Toaster } from "react-hot-toast";

import ServiceCard from "./ServiceCard";

const ServiceData = [
    {
        "id": 1,
        "img": "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Automehaničar",
        "price": "Po dogovoru",
        "desc": "Popravka i servis svih vrsta vozila. Kvalitetna usluga i brza dijagnostika problema.",
        "category": "Auto usluge",
        "rating": 4.8
    },
    {
        "id": 2,
        "img": "https://images.pexels.com/photos/5799140/pexels-photo-5799140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Molersko-farbarski radovi",
        "price": "Po dogovoru",
        "desc": "Profesionalno krečenje i farbanje enterijera i eksterijera. Brzo i čisto.",
        "category": "Građevinske usluge",
        "rating": 4.7
    },
    {
        "id": 3,
        "img": "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Stomatološke usluge",
        "price": "Po dogovoru",
        "desc": "Kompletna stomatološka zaštita – pregled, popravka, izbeljivanje i implantati.",
        "category": "Zdravstvene usluge",
        "rating": 4.9
    },
    {
        "id": 4,
        "img": "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Frizerske usluge",
        "price": "Od 800 RSD",
        "desc": "Moderno šišanje, farbanje i stilizovanje za žene i muškarce.",
        "category": "Lepota i nega",
        "rating": 4.6
    },
    {
        "id": 5,
        "img": "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Električar",
        "price": "Po dogovoru",
        "desc": "Popravka elektroinstalacija, ugradnja osvetljenja i održavanje električnih sistema.",
        "category": "Tehničke usluge",
        "rating": 4.7
    },
    {
        "id": 6,
        "img": "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Čišćenje prostora",
        "price": "Po dogovoru",
        "desc": "Generalno čišćenje stanova, poslovnih prostora i kuća.",
        "category": "Održavanje",
        "rating": 4.8
    },
    {
        "id": 7,
        "img": "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Pravne usluge",
        "price": "Po dogovoru",
        "desc": "Pravna pomoć, sastavljanje ugovora i zastupanje na sudu.",
        "category": "Pravne usluge",
        "rating": 4.9
    },
    {
        "id": 8,
        "img": "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Profesionalni vozač",
        "price": "Po dogovoru",
        "desc": "Siguran i udoban prevoz putnika na duže i kraće relacije.",
        "category": "Transport",
        "rating": 4.5
    }
];

const ServiceItems = () => {
   //const handleToast = (name) => toast.success(` added ${name} to cart`);

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h1 className="text-3xl font-bold lg:text-5xl">
                  Pronađite <span className="font-serif text-blue-600">najbolje</span>{" "}
                  usluge
               </h1>
               <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                  Istražite našu široku ponudu profesionalnih usluga. Svaki pružalac usluga je pažljivo odabran kako bi vam obezbedio najbolje moguće iskustvo.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {ServiceData.map((service) => (
                  <ServiceCard
                     key={service.id}
                     id={service.id}
                     name={service.name}
                     price={service.price}
                     desc={service.desc}
                     rating={service.rating}
                     img={service.img}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default ServiceItems;
