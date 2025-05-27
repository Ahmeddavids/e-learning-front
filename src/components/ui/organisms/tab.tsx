import React, { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs?: Tab[];
  onTabChange?: (value: string) => void;
}

export default function Tabs({ tabs = [], onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.value || "");

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <div className="border-b flex space-x-6 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={`pb-2 font-medium transition-all duration-200 ${
            activeTab === tab.value
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
