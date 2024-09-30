import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru"; 
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MyCalendar.scss"; 
import { messages } from "../../constants/calendarMessages";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {

  const [events, setEvents] = useState([
    {
      title: "Событие 1",
      start: new Date(2024, 8, 29),
      end: new Date(2024, 8, 29),
    },
    {
      title: "Событие 2",
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 2),
    },
  ]);

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        onSelectSlot={(slotInfo: any) => alert(`Вы выбрали: ${slotInfo.start}`)} 
        selectable 
      />
    </div>
  );
};

export default MyCalendar;
