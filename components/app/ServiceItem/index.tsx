import React from "react";
import Link from "next/link";
import { IconBase } from "../index";
import Image from "next/image";

interface ServiceItemProps {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  price: string;
  bonus: string;
  imageUrl: string;
}

export function ServiceItem({
  id,
  name,
  rating,
  reviews,
  category,
  price,
  bonus,
  imageUrl,
}: ServiceItemProps) {
  return (
    <Link href={`/services/${id}`} className="block w-full" passHref>
      <div className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="relative h-[120px] sm:h-[140px]">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
            <IconBase iconName="star" size={12} color="#facd5d" />
            <span className="text-xs font-medium text-[#182135]">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>
        <div className="p-2 sm:p-3 pb-3 sm:pb-4">
          <h3 className="text-sm sm:text-base font-semibold text-[#182135] mb-1.5 truncate">{name}</h3>
          <div className="space-y-1">
            <div className="flex items-center text-gray-600">
              <span className="mr-1.5">
                <IconBase iconName="cutlery" size={12} color="#a3a3a4" />
              </span>
              <span className="text-xs">{category}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="mr-1.5">
                <IconBase iconName="money" size={12} color="#a3a3a4" />
              </span>
              <span className="text-xs">od {price} din</span>
            </div>
            {bonus && (
              <div className="flex items-center text-[#503e9d]">
                <span className="mr-1.5">
                  <IconBase iconName="gift" size={12} color="#503e9d" />
                </span>
                <span className="text-xs font-medium">{bonus}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
