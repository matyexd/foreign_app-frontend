import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // импорт стилей по умолчанию

// Локализация для календаря
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Пример событий
  const [events, setEvents] = useState([
    {
      title: 'Событие 1',
      start: new Date(2024, 8, 29),
      end: new Date(2024, 8, 29),
    },
    {
      title: 'Событие 2',
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 2),
    },
  ]);

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }} // делает календарь на всю страницу
        onSelectSlot={(slotInfo: any) => alert(`Вы выбрали: ${slotInfo.start}`)} // Обработка клика по дате
        selectable // Делает ячейки "выбираемыми"
      />
    </div>
  );
};

export default MyCalendar;
