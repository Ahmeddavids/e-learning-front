import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, FileText, Moon, LogOut } from "lucide-react";
import { ToggleSwitch } from "./toggle";

export const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div
      className="relative mb-6 animate-fade-in"
      style={{ animationDelay: "150ms" }}
      ref={menuRef}
    >
      <div className="h-8 w-8 rounded-full bg-gray-200 flex justify-center -mb-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <User className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-6 w-64 bg-white rounded-lg shadow-lg border animate-scale-in z-50">
          <div className="p-3 border-b">
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-3 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/tesdt.png"
                  alt="Benson Ade"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="absolute inset-0 flex items-center justify-center font-semibold text-gray-600 bg-gray-300">
                  BA
                </span>
              </div>
              <div>
                <h3 className="font-medium text-left">Benson Ade</h3>
                <p className="text-sm text-gray-500">Frontend Development</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleNavigate("/account")}
            className="cursor-pointer px-4 py-3 hover:bg-gray-50 flex items-center transition-colors"
          >
            <User className="h-5 w-5 mr-3" />
            Account
          </div>

          <div
             onClick={() => handleNavigate("/certificate")}
            className="cursor-pointer px-4 py-3 hover:bg-gray-50 flex items-center transition-colors"
          >
            <FileText className="h-5 w-5 mr-3" />
            Certificate
          </div>

          <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <Moon className="h-5 w-5 mr-3" />
              <span>Dark mode</span>
            </div>x
            <ToggleSwitch defaultChecked />
          </div>

          <div className="cursor-pointer px-4 py-3 hover:bg-gray-50 flex items-center transition-colors">
            <LogOut className="h-5 w-5 mr-3" />
            Sign out
          </div>
        </div>
      )}
    </div>
  );
};
