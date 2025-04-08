import Link from "next/link";
import React from "react";
import { IconBase, UserProfile } from "../index";
import { useRouter } from "next/router";

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                    onClick={onClose}
                />
            )}
            
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-[304px] bg-[#f7f7f7] rounded-l-[1.5rem] flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex items-center justify-between p-8 pb-[3.00125rem]">
                    <h3 className="text-xl font-bold text-[#182135]">Biznis Centar</h3>
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <IconBase iconName="close" size={24} color="#182135" />
                    </button>
                </div>

                <ul className="flex-1 px-[0.93rem] space-y-2">
                    <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/home" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/home" className={`flex p-4 font-bold text-base ${currentPath === "/home" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="home" color={currentPath === "/home" ? "#ffffff" : "#182135"} />
                            </span>
                            Početna
                        </Link>
                    </li>

                    <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/explore" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/explore" className={`flex p-4 font-bold text-base ${currentPath === "/explore" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="feed" color={currentPath === "/explore" ? "#ffffff" : "#182135"} />
                            </span>
                            Istraži
                        </Link>
                    </li>

                    <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/favorites" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/favorites" className={`flex p-4 font-bold text-base ${currentPath === "/favorites" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="bookmark" color={currentPath === "/favorites" ? "#ffffff" : "#182135"} />
                            </span>
                            Omiljeno
                        </Link>
                    </li>

                    {/* <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/orders" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/orders" className={`flex p-4 font-bold text-base ${currentPath === "/orders" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="document" color={currentPath === "/orders" ? "#ffffff" : "#182135"} />
                            </span>
                            Moji oglasi
                        </Link>
                    </li>

                    <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/messages" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/messages" className={`flex p-4 font-bold text-base ${currentPath === "/messages" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="letter" color={currentPath === "/messages" ? "#ffffff" : "#182135"} />
                            </span>
                            Poruke
                        </Link>
                    </li>

                    <li className={`h-[3.5rem] rounded-[0.75rem] transition-all hover:bg-[#3b82f6] ${currentPath === "/settings" ? "bg-[#3b82f6]" : ""}`}>
                        <Link href="/settings" className={`flex p-4 font-bold text-base ${currentPath === "/settings" ? "text-white" : "text-[#182135]"}`}>
                            <span className="mr-3">
                                <IconBase iconName="gear" color={currentPath === "/settings" ? "#ffffff" : "#182135"} />
                            </span>
                            Podešavanja
                        </Link>
                    </li> */}
                </ul>

                <div className="p-8">
                    <UserProfile />
                </div>
            </div>
        </>
    );
}
