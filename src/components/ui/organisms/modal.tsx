import { useEffect, useRef } from "react";

type ModalSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const sizeClasses: Record<ModalSize, string> = {
    xs: "w-[20%] w-11/12",
    sm: "w-[30%] w-11/12",
    md: "w-[40%] w-11/12",
    lg: "lg:w-[50%] w-11/12",
    xl: "w-[60%] w-11/12",
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-90 backdrop-blur-sm"
    >
      <div
        className={`bg-white rounded-2xl shadow-lg ${sizeClasses[size]} p-6 animate-fadeIn scale-95 transition-all`}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
