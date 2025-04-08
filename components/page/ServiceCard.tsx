import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({
                         id,
                         name,
                         price,
                         desc,
                         img,
                         rating,
                     }: {
    id: number;
    name: string;
    price: string;
    desc: string;
    img: string;
    rating: number;
}) => {
    return (
        <div className="font-bold w-full max-w-[300px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </div>

            <div className="flex justify-between text-sm mt-2">
                <h2 className="text-base">{name}</h2>
                <span className="text-blue-600">{price}</span>
            </div>

            <p className="text-sm font-normal text-gray-600 line-clamp-2">{desc}</p>

            <div className="flex justify-between items-center mt-2">
        <span className="flex items-center text-sm text-gray-700">
          <AiFillStar className="mr-1 text-blue-600" /> {rating}
        </span>

                <Link
                    href={`/product/${id}`}
                    className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                    Istraži
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
