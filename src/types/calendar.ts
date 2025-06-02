
export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  type: "live-class" | "assignment" | "project";
  day: number;
}




