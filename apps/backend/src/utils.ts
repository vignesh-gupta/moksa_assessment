export function convertKafkaTimestampToDate(timeStamp: string): Date {
  const [hour, minute, second] = timeStamp.split(".").map(Number);

  console.log(`Hour: ${hour}, Minute: ${minute}, Second: ${second}`);

  const now = new Date();
  now.setHours(hour, minute, second, 0);
  return new Date(now);
}
