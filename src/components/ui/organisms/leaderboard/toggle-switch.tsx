"use client";

type ToggleValue = "weekly" | "all-time";

interface ToggleSwitchProps {
    value: ToggleValue;
    onChange: (val: ToggleValue) => void;
}

export default function ToggleSwitch({value, onChange}: ToggleSwitchProps) {
    return (
        <div className="relative w-max h-10 bg-[#FFE8D7] sm:text-sm text-xs rounded-sm flex p-1 justify-between">
            <div
                className={`absolute top-1 left-1 w-[calc(50%-4px)] h-8 bg-[#FB8500] rounded-sm transition-all duration-300 ease-in-out z-0 ${
                    value === "all-time"
                        ? "translate-x-[calc(100%+0px)]"
                        : "translate-x-0"
                }`}
            ></div>
            <button
                onClick={() => onChange("weekly")}
                className={`z-10 w-22 sm:w-26 h-8 rounded-sm flex items-center justify-center px-1 transition-all cursor-pointer duration-300 ${
                    value === "weekly" ? "text-white" : "text-[#FB8500]"
                }`}
            >
                Weekly Rank
            </button>
            <button
                onClick={() => onChange("all-time")}
                className={`z-10 w-22 sm:w-26 h-8 rounded-sm text-xs flex items-center justify-center px-1 transition-all cursor-pointer duration-300 ${
                    value === "all-time" ? "text-white" : "text-[#FB8500]"
                }`}
            >
                All Time Rank
            </button>
        </div>
    );
}
