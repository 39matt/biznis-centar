import React from "react";
import Link from "next/link";
import { IconBase } from "../index";

type CategoryProps = {
  id: string;
  name: string;
  legend: string;
  iconName: string;
  backgroundColor: string;
};

export function Category({ id, name, legend, iconName, backgroundColor }: CategoryProps) {
  return (
      <Link href={`/categories/${id}`} passHref>
        <div className="w-full h-[152px] p-4 flex flex-col bg-gray-100 transition-colors duration-300 rounded-xl text-center hover:bg-gray-200 cursor-pointer">
          <div className="w-12 h-12 rounded-[9px] mb-4 mx-auto flex items-center justify-center" style={{ backgroundColor }}>
            <IconBase iconName={iconName} color="#fff" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 whitespace-nowrap overflow-hidden">{name}</h3>
          <p className="text-sm text-gray-600 font-normal whitespace-nowrap">{legend}</p>
        </div>
      </Link>
  );
}
