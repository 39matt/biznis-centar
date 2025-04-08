import Link from "next/link";
import React from "react";
import { Category, IconBase } from "../index";

export function Categories() {
  const categories = [
    {
      id: "1",
      name: "Popularno",
      legend: "+286 usluga",
      iconName: "fire",
      backgroundColor: "#fb6d3a",
    },
    {
      id: "2",
      name: "Dostava",
      legend: "+856 usluga",
      iconName: "bike",
      backgroundColor: "#503e9d",
    },
    {
      id: "3",
      name: "Visoka klasa",
      legend: "+25 usluga",
      iconName: "wallet",
      backgroundColor: "#facd5d",
    },
    {
      id: "4",
      name: "Restorani",
      legend: "+182 usluga",
      iconName: "cutlery",
      backgroundColor: "#fb6d3a",
    },
    {
      id: "5",
      name: "Preuzimanje",
      legend: "+542 usluga",
      iconName: "store",
      backgroundColor: "#503e9d",
    },
    {
      id: "6",
      name: "Najbliže",
      legend: "+55 usluga",
      iconName: "map",
      backgroundColor: "#facd5d",
    },
  ];

  return (
      <div className="mb-12">
        <div className="flex mb-8">
          {/*<h2 className="flex-grow text-2xl font-bold">Istraži kategorije</h2>*/}
          {/*<Link href="/categories/1" className="text-purple-700 text-lg font-semibold flex items-center" passHref>*/}
          {/*    Pogledaj sve*/}
          {/*    <IconBase iconName="chevron-right" color="#5b4aa3" size={12}  />*/}
          {/*</Link>*/}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between">
          {categories.map((category) => (
              <Category key={category.name} {...category} />
          ))}
        </div>
      </div>
  );
}
