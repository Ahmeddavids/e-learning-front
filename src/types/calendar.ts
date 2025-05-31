
export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  type: "live-class" | "assignment" | "project";
  day: number;
}


// Function to generate events for a specific day
export function getEventsForDay(date: Date): CalendarEvent[] {
  const allEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Live class: Introduction to design',
      time: '10 - 11am',
      type: 'live-class',
      day: 1
    },
    {
      id: '2',
      title: 'Assignment: Introduction to design',
      time: '10:00am',
      type: 'assignment',
      day: 2
    },
    {
      id: '3',
      title: 'Assignment: Introduction to design',
      time: '10:00am',
      type: 'assignment',
      day: 3
    },
    {
      id: '4',
      title: 'Project: Introduction to design',
      time: '10:00am',
      type: 'project',
      day: 4
    },
    {
      id: '5',
      title: 'Assignment: Introduction to design',
      time: '10:00am',
      type: 'assignment',
      day: 5
    },
    {
      id: '6',
      title: 'Project: Introduction to design',
      time: '10:00am',
      type: 'project',
      day: 6
    },
    {
      id: '6',
      title: 'Project: Introduction to design',
      time: '10:00am',
      type: 'project',
      day: 7
    }
  ];
  // JS: Sunday is 0, so map to 7 for consistency with your data
  const jsDay = date.getDay() === 0 ? 7 : date.getDay();
  return allEvents.filter(event => event.day === jsDay);
}


