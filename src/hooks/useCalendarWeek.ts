import { useState } from "react";
import { getDaysForWeek, getStartOfWeek } from "@/helpers";

export function useCalendarWeek() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const navigateWeek = (direction: "prev" | "next") => {
    setCurrentWeek((prev) => (direction === "next" ? prev + 1 : prev - 1));
  };

  const today = new Date();
  const startOfWeek = getStartOfWeek(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + currentWeek * 7)
  );
  const days = getDaysForWeek(startOfWeek);

  const weekLabel = `${startOfWeek.toLocaleString("en-US", { month: "short" })} ${startOfWeek.getDate()} - ${days[6].date.getDate()} ${days[6].date.toLocaleString("en-US", { month: "short" })}, ${days[6].date.getFullYear()}`;

  return { days, weekLabel, navigateWeek };
}


