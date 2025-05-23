// components/ui/toggle-switch.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer gap-2">
        <input ref={ref} type="checkbox" className="sr-only peer" {...props} />
        <div
          className={cn(
            "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFE8D7] dark:peer-focus:ring-[#FB8500] rounded-full peer dark:bg-gray-700",
            "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full",
            "after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border",
            "after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FB8500]",
            className
          )}
        />
        {label && (
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
          </span>
        )}
      </label>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch };
