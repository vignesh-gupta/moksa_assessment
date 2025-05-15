import { useEventStream } from "./use-event-stream";

export const useLiveCustomerData = (limit: number = 10) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/stream`;

  return useEventStream({
    url,
    limit,
  });
};
