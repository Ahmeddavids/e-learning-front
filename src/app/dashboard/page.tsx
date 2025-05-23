"use client";

import { MainContent } from "@/components/ui/organisms/main-content";
import { RightPanel } from "@/components/ui/organisms/right-panel";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#2D2F30] mb-3">
        Welcome, Benson!
      </h1>
      <p className="text-gray-600 mb-8">
        We&lsquo;ve shaped this experience just for your journey into Product
        Design.
      </p>
      <div className="flex-1 flex flex-col lg:flex-row  gap-x-14">
        <MainContent />
        <RightPanel />
      </div>
    </div>
  );
}
