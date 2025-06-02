// Helper to get the start of the week (Monday)
export function getStartOfWeek(date: Date) {
  const d = new Date(date);
  const day = d.getDay();
  // Adjust to Monday as the start of the week
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Generate days for the current week 
// This function returns an array of 7 day objects representing the week starting from startOfWeek (Monday), with each object containing the day’s name, number, date, and whether it’s today.

export function getDaysForWeek(startOfWeek: Date) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push({
      name: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      number: d.getDate(),
      date: d,
      isToday:
        d.toDateString() === new Date().toDateString(),
    });
  }
  return days;
}


