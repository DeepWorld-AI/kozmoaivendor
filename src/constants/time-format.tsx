// Helper function to format the time
export const formattedTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const now = new Date();
  now.setHours(hours, minutes, 0, 0);

  return now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// Function to extract 'Month Day' (e.g., "Dec 15")
export function extractDatePart(inputString: string) {
  // For the first case
  if (inputString.includes("GMT+")) {
    const match = inputString.match(/([A-Z][a-z]{2} \d{1,2})/);
    return match ? match[1] : null;
  }

  // For the second case
  if (inputString.includes(",")) {
    const match = inputString.match(/, ([A-Z][a-z]{2} \d{1,2})/);
    return match ? match[1] : null;
  }
}
