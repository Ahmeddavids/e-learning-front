
import { CalendarEvent } from '@/types/calendar';

interface EventCardProps {
  event: CalendarEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const getEventStyles = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'live-class':
        return 'bg-yellow-100 border-yellow-200 text-yellow-800';
      case 'assignment':
        return 'bg-green-100 border-green-200 text-green-800';
      case 'project':
        return 'bg-blue-100 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-100 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className={`
      p-2 sm:p-3 rounded-lg border transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer
      ${getEventStyles(event.type)}
    `}>
      <div className="text-xs sm:text-sm font-medium mb-1 leading-tight">
        {event.title}
      </div>
      <div className="text-xs opacity-75">
        {event.time}
      </div>
    </div>
  );
};

export default EventCard;