import React from "react";
import { IconBase } from "../index";

export function SearchBar() {
    return (
        <div className="flex items-center max-w-[385px] w-full h-12 bg-[#f7f7f7] rounded-lg outline-none">
            <div className="flex items-center pl-3">
                <span className="mr-2">
                    <IconBase iconName="search" size={20} color="#503e9d" />
                </span>
            </div>
            <input
                type="text"
                className="w-full py-0 px-3 text-sm font-light leading-6 text-[#333] bg-transparent border-none outline-none"
                placeholder="Pretraži..."
            />
        </div>
    );
}
