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
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 2),
      info: "sdsds",
    },
    {
      title: "Событие 2",
      start: new Date(2024, 10, 3),
      end: new Date(2024, 10, 4),
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );

  // Обработчик события клика
  const handleSelectEvent = (event: any, e: any) => {
    setSelectedEvent(event);
    setTooltipPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        onSelectSlot={(slotInfo: any) => alert(`Вы выбрали: ${slotInfo.start}`)}
        onSelectEvent={(event: any, e: any) => handleSelectEvent(event, e)} // Передача события и клика
        selectable
      />
      {selectedEvent && tooltipPos && (
        <div
          style={{
            position: "absolute",
            top: tooltipPos.y + 10, 
            left: tooltipPos.x + 10, 
            padding: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 1000,
          }}
        >
          <p>
            <strong>Название:</strong> {selectedEvent["title"]}
          </p>
          <p>
            <strong>Начало:</strong>{" "}
            {moment(selectedEvent["start"]).format("LLL")}
          </p>
          <p>
            <strong>Конец:</strong> {moment(selectedEvent["end"]).format("LLL")}
          </p>
          {selectedEvent["info"] && (
            <p>
              <strong>Информация:</strong> {selectedEvent["info"]}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
