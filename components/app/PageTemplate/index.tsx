import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import Footer from "../../page/Footer";

interface PageTemplateProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export function PageTemplate({ children }: PageTemplateProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <div className="flex flex-1 w-full relative">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block fixed top-0 left-0 h-full w-[304px] z-40">
                    <Sidebar />
                </div>

                {/* Mobile Sidebar */}
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                {/* Main Content */}
                <div className="flex-1 w-full lg:ml-[304px] max-w-full overflow-x-hidden">
                    <Navbar onMenuClick={() => setSidebarOpen(true)} />
                    <main className="max-w-full overflow-x-hidden">
                        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full lg:ml-[304px]">
                <Footer />
            </div>
        </div>
    );
}
