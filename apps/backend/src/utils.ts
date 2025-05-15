export function convertKafkaTimestampToDate(timeStamp: string): Date {
  const [hour, minute, second] = timeStamp.split(".").map(Number);

  const now = new Date();
  now.setHours(hour, minute, second, 0);
  return new Date(now);
}
