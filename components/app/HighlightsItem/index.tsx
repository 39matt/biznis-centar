import React from "react";
import Link from "next/link";
import { IconBase } from "../index";

interface HighlightsItemProps {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  price: string;
  bonus: string;
  imageUrl: string;
}

export function HighlightsItem({
  id,
  name,
  rating,
  reviews,
  category,
  price,
  bonus,
  imageUrl,
}: HighlightsItemProps) {
  return (
    <Link href={`/services/${id}`} className="block w-full" passHref>
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-2">
            <IconBase iconName="star" color="#facd5d" />
            <span className="text-sm font-medium text-white">{rating}</span>
            <span className="text-sm text-white/80">({reviews} ocena)</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#facd5d]">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-[#C0C0C0]/80">
            <span>{category}</span>
            <span>•</span>
            <span>{price}</span>
            {bonus && (
              <>
                <span>•</span>
                <span className="text-[#C0C0C0]">{bonus}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
