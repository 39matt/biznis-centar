import React from "react";
import { AiFillStar } from "react-icons/ai";
import {redirect} from "next/navigation";
import Link from "next/link";

const ServiceCard = ({ id, name, price, desc, img, rating }: {id: number, name: string, price: string, desc:string, img:string, rating:number}) => {
   // const dispatch = useDispatch();

   return (
      <div
         className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-xl hover:shadow-2xl transition-all duration-300
      ">
         <img
            src={img}
            alt={name}
            className="w-full h-[180px] object-cover rounded-lg hover:scale-105 cursor-pointer transition-all duration-500 ease-in-out"
         />
         <div className="flex justify-between text-sm mt-2">
            <h2 className="text-base">{name}</h2>
            <span className="text-blue-600">{price}</span>
         </div>
         <p className="text-sm font-normal text-gray-600 line-clamp-2">{desc}</p>
         <div className="flex justify-between items-center mt-2">
            <span className="flex items-center justify-center text-sm">
               <AiFillStar className="mr-1 text-blue-600" /> {rating}
            </span>

            {/* Add to Cart */}
            <Link
               href={`/product/${id}`}
               className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
               Istraži
            </Link>
         </div>
      </div>
   );
};

export default ServiceCard;
