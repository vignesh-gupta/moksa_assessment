import { EventData, eventDataSchema } from "@moksa_asses/utils";
import { useEffect, useState } from "react";

type EventStreamProp = {
  url: string;
  limit?: number;
  onMessage?: (data: EventData) => void;
};

export const useEventStream = ({
  url,
  limit = 10,
  onMessage,
}: EventStreamProp) => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(url);
    console.log("Connecting to SSE stream...");

    eventSource.onopen = () => {
      console.log("Connected to SSE stream");
    };

    eventSource.addEventListener("update", (event) => {
      const eventData = JSON.parse(event.data);
      const { success, data, error } = eventDataSchema.safeParse(eventData);
      if (!success) {
        console.error("Invalid event data:", error);
        return;
      }
      onMessage?.(data);
      if (events.length >= limit)
        setEvents((prevEvents) => [...prevEvents.slice(1), data]);
      else setEvents((prevEvents) => [...prevEvents, data]);
    });

    return () => {
      eventSource.close();
      eventSource.removeEventListener("update", () => {
        console.log("Disconnected from SSE stream");
      });
    };
  }, [limit, url, events.length, onMessage]);

  return { events };
};
