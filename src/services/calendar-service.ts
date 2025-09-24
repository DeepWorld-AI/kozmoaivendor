interface Event {
  id: string;
  event_name: string;
  description: string;
  stay_duration: string;
  start_time: string;
  end_time: string;
}

// service to add events
export const AddEvents = (newEvent: Event) => {
  const ExistingEvent: Event[] = JSON.parse(
    localStorage.getItem("events") || "[]"
  );
  ExistingEvent.push(newEvent);
  localStorage.setItem("events", JSON.stringify(ExistingEvent));
};

// service to get all events
export const GetEvents = () => {
  const AllEvents = localStorage.getItem("events") || "[]";
  return JSON.parse(AllEvents);
};

// services to delete the events
export const deleteEvent = (id: string) => {
  const allEvents = localStorage.getItem("events");

  if (allEvents) {
    const updatedEvents = JSON.parse(allEvents).filter(
      (event: any) => event.id !== id
    );

    // Update localStorage with the filtered events
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    return updatedEvents;
  }
  return [];
};
