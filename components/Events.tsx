import React, { useMemo, useState } from "react";
import { MapPin, Clock, X } from "lucide-react";

type EventDetails = {
  date: string;
  month: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  description: string;
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

  const events: EventDetails[] = useMemo(
    () => [
      {
        date: "16",
        month: "MAY 2026",
        title: "International Boy Child Day",
        subtitle: "Community Gathering",
        time: "May 16, 2026",
        location: "Port Harcourt, Rivers State, Nigeria",
        description:
          "This day is all about the young guys in our lives. It is a time to focus on the well-being and development of boys, ensuring they have the support and education they need to grow into happy, healthy men. We celebrate their potential and the unique perspectives they bring to our families and communities.",
      },
      {
        date: "21",
        month: "JUN 2026",
        title: "Father’s Day",
        subtitle: "Honoring Fathers",
        time: "June 21, 2026",
        location: "Port Harcourt, Rivers State, Nigeria",
        description:
          "Father’s Day in 2026 falls on the third Sunday of June. It is a moment to say thanks to the dads, grandfathers, and mentors who have shaped us. Whether it is through a bit of tough love or a well-timed joke, these father figures provide the guidance and stability that help us find our own path.",
      },
      {
        date: "19",
        month: "NOV 2026",
        title: "International Men's Day",
        subtitle: "Men of Purpose",
        time: "November 19, 2026",
        location: "Port Harcourt, Rivers State, Nigeria",
        description:
          "International Men’s Day is dedicated to celebrating the positive value men bring to the world. We use this day to talk about important topics like men’s health and the power of positive role models. It is an opportunity to recognize the quiet, everyday contributions men make to their families and to society at large.",
      },
    ],
    [],
  );

  const closeModal = () => setSelectedEvent(null);

  return (
    <>
      <section id="events" className="py-24 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">
              Upcoming Events
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto mb-4"></div>
            <p className="text-gray-400 text-xs italic">
              Learn more about each observance and what it represents.
            </p>
          </div>

          <div className="space-y-4">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-6 flex-shrink-0">
                  <div className="bg-brand-purple text-white p-3 rounded font-bold text-center min-w-[70px]">
                    <span className="block text-2xl">{event.date}</span>
                    <span className="text-[8px] uppercase tracking-widest">
                      {event.month}
                    </span>
                  </div>
                  <div className="max-w-[200px]">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 uppercase">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-gray-400 text-[10px] font-bold uppercase tracking-widest flex-grow">
                  <div className="flex items-center space-x-2">
                    <Clock size={12} className="text-brand-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={12} className="text-brand-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-6 py-2 rounded text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedEvent.title} details`}
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-purple mb-2">
                  Upcoming Event
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-gray-900">
                  {selectedEvent.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  <span className="font-bold text-gray-700">Date:</span>{" "}
                  {selectedEvent.time}{" "}
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="font-bold text-gray-700">
                    Location:
                  </span>{" "}
                  {selectedEvent.location}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 rounded-lg font-black text-[10px] tracking-widest uppercase bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 rounded-lg font-black text-[10px] tracking-widest uppercase bg-brand-purple text-white hover:bg-brand-purpleLight transition-colors"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
