import { EventData, eventDataSchema } from "@moksa_asses/utils";
import { useEffect, useState } from "react";

export const useEventStream = (url: string, limit: number = 10) => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(url);
    console.log("Connecting to SSE stream...");

    eventSource.onopen = () => {
      console.log("Connected to SSE stream");
    };

    eventSource.addEventListener("update", (event) => {
      const eventData = JSON.parse(event.data);

      console.log("Received event data:", eventData);
      const { success, data, error } = eventDataSchema.safeParse(eventData);
      if (!success) {
        console.error("Invalid event data:", error);
        return;
      }
      console.log("Live update:", {
        data,
        bool: events.length >= limit,
        limit,
        len: events.length,
        events,
      });
      if (events.length >= limit) {
        console.log("Event limit reached, removing oldest event", {
          length: events.length,
          limit,
          events,
        });

        setEvents((prevEvents) => [...prevEvents.slice(1), data]);
      } else {
        setEvents((prevEvents) => [...prevEvents, data]);
      }
    });

    return () => {
      eventSource.close();
      eventSource.removeEventListener("update", () => {
        console.log("Disconnected from SSE stream");
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, url, events.length]);

  return { events };
};
