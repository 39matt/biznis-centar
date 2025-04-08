import React from "react";
import Link from "next/link";
import { IconBase, SearchBar } from "../index";

interface NavbarProps {
    onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8 mt-4 px-4">
            {/* Gornji red: meni dugme + linkovi */}
            <div className="flex items-center justify-between lg:justify-start gap-4 w-full">
                <button
                    onClick={onMenuClick}
                    className="block lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                    <IconBase iconName="menu" size={24} color="#503e9d" />
                </button>
                <ul className="flex flex-wrap gap-4 text-sm">
                    <li className="flex items-center">
                        <Link href="/public" className="flex items-center" passHref>
                            <span className="mr-1">
                                <IconBase iconName="target-location" size={20} color="#fb6d3a" />
                            </span>
                            Niš, Srbija
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/categories" className="flex items-center" passHref>
                            <span className="mr-1">
                                <IconBase iconName="briefcase" color="#503e9d" />
                            </span>
                            Kategorije
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/public" className="flex items-center" passHref>
                            <span className="mr-1">
                                <IconBase iconName="star" color="#facd5d" />
                            </span>
                            Premium oglasi
                        </Link>
                    </li>
                </ul>
            </div>

            {/* SearchBar ispod menija na mobile */}
            <div className="w-full lg:w-auto">
                <SearchBar />
            </div>
        </div>
    );
}