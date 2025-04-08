import React from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import Footer from "../../page/Footer";

interface PageTemplateProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function PageTemplate({ children, title, description }: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 ml-[304px] overflow-x-hidden">
          <Navbar />
          <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
      <div className="ml-[304px]">
        <Footer />
      </div>
    </div>
  );
}
