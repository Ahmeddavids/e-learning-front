import { CalendarEvent } from "@/types/calendar";

// Function to generate events for a specific day
export function getEventsForDay(date: Date): CalendarEvent[] {
  const allEvents: CalendarEvent[] = [
    {
      id: "1",
      title: "Live class: Introduction to design",
      time: "10 - 11am",
      type: "live-class",
      day: 1,
    },
    {
      id: "2",
      title: "Assignment: Introduction to design",
      time: "10:00am",
      type: "assignment",
      day: 2,
    },
    {
      id: "3",
      title: "Assignment: Introduction to design",
      time: "10:00am",
      type: "assignment",
      day: 3,
    },
    {
      id: "4",
      title: "Project: Introduction to design",
      time: "10:00am",
      type: "project",
      day: 4,
    },
    {
      id: "5",
      title: "Assignment: Introduction to design",
      time: "10:00am",
      type: "assignment",
      day: 5,
    },
    {
      id: "6",
      title: "Project: Introduction to design",
      time: "10:00am",
      type: "project",
      day: 6,
    },
    {
      id: "6",
      title: "Project: Introduction to design",
      time: "10:00am",
      type: "project",
      day: 7,
    },
  ];
  // JS: Sunday is 0, so map to 7 for consistency with your data
  const jsDay = date.getDay() === 0 ? 7 : date.getDay();
  return allEvents.filter((event) => event.day === jsDay);
}

export const learningPath = [
  {
    week: "Week 1",
    completed: true,
    title: "Introduction to HTML",
    description:
      "If you've ever wanted to build a website or create a simple web page, HTML is the place to start. HTML stands for HyperText Markup Language, and it's the foundation of all web pages.",
  },
  {
    week: "Week 2",
    completed: false,
    title: "CSS Fundamentals",
    description:
      "Learn how to style your HTML elements with CSS. Understand selectors, properties, and values to make your web pages visually appealing and responsive.",
  },
  {
    week: "Week 3",
    completed: false,
    title: "JavaScript Basics",
    description:
      "Dive into JavaScript programming fundamentals. Learn variables, functions, and basic DOM manipulation to add interactivity to your web pages.",
  },
  {
    week: "Week 4",
    completed: false,
    title: "Responsive Design",
    description:
      "Master the art of creating responsive responsive responsive responsive responsive responsive responsive layouts that work on all devices. Learn about media queries, flexbox, and grid systems.",
  },
  {
    week: "Week 5",
    completed: false,
    title: "Advanced CSS",
    description:
      "Explore advanced CSS concepts including animations, transitions, pseudo-elements, and modern layout techniques like CSS Grid.",
  },
  {
    week: "Week 6",
    completed: true,
    title: "Project Development",
    description:
      "Put everything together by building a complete web project. Apply all the skills you've learned to create a professional portfolio website.",
  },
  {
    week: "Week 7",
    completed: false,
    title: "Advanced CSS",
    description:
      "Explore advanced CSS concepts including animations, transitions, pseudo-elements, and modern layout techniques like CSS Grid.",
  },
  {
    week: "Week 8",
    completed: false,
    title: "CSS Fundamentals",
    description:
      "Learn how to style your HTML elements with CSS. Understand selectors, properties, and values to make your web pages visually appealing and responsive.",
  },
];


export const badges = [
  {
    id: 1,
    src: "/icons/badge.svg",
    alt: "Top 3",
    width: 100,
    height: 100
  },
  {
    id: 2,
    src: "/icons/frame.svg",
    alt: "Quiz Master",
    width: 80,
    height: 80
  },
  {
    id: 3,
    src: "/icons/badge.svg",
    alt: "Top 3",
    width: 80,
    height: 80
  },
  {
    id: 4,
    src: "/icons/frame.svg",
    alt: "Quiz Master",
    width: 50,
    height: 50
  },
  {
    id: 5,
    src: "/icons/badge.svg",
    alt: "Top 3",
    width: 50,
    height: 50
  },
   {
    id: 6,
    src: "/icons/frame.svg",
    alt: "Quiz Master",
    width: 50,
    height: 50
  }
];