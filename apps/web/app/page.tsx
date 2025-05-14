"use client";

import React, { useEffect, useState } from "react";

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/api/stream");
    console.log("Connecting to SSE stream...");

    eventSource.onopen = () => {
      console.log("Connected to SSE stream");
    };

    eventSource.addEventListener("update", (event) => {
      const data = JSON.parse(event.data);
      console.log("Live update:", data);
      setEvents((prevEvents) => [...prevEvents, data]);
    });

    return () => {
      eventSource.close();
      eventSource.removeEventListener("update", () => {
        console.log("Disconnected from SSE stream");
      });
    };
  }, []);
  return (
    <div>
      Hello
      {events.map((event, index) => (
        <div key={index}>
          <h3>Event {index + 1}</h3>
          <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
