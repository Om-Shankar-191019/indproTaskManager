export const formatDate = (isoString) => {
  const date = new Date(isoString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  return date.toLocaleString("en-IN", options);
};
