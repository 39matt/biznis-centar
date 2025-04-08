import React from "react";
import Link from "next/link";
import { IconBase, SearchBar } from "../index";

interface NavbarProps {
    onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <div className="flex justify-around mb-12 mt-4">
            <button 
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
                <IconBase iconName="menu" size={24} color="#503e9d" />
            </button>
            <ul className="flex gap-4">
                <li className="flex items-center">
                    <Link href="/public" className="flex items-center">
                        <span className="mr-2">
                            <IconBase iconName="target-location" size={24} color="#fb6d3a" />
                        </span>
                        Niš, Srbija
                        <span className="ml-2">
                            <IconBase iconName="arrow-top-down" size={16} color="#503e9d" />
                        </span>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/categories" className="flex items-center">
                        <span className="mr-2">
                            <IconBase iconName="briefcase" color="#503e9d" />
                        </span>
                        Kategorije
                        <span className="ml-2">
                            <IconBase iconName="arrow-top-down" size={16} color="#503e9d" />
                        </span>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/public" className="flex items-center">
                        <span className="mr-2">
                            <IconBase iconName="star" color="#facd5d" />
                        </span>
                        Premium oglasi
                        <span className="ml-2">
                            <IconBase iconName="arrow-top-down" size={16} color="#503e9d" />
                        </span>
                    </Link>
                </li>
            </ul>
            <SearchBar />
        </div>
    );
}
