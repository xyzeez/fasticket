export const extractDate = (dateTimeString) => {
  try {
    // Parse the UTC datetime string
    const date = new Date(dateTimeString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    // Format the date as "DD Mon"
    const options = { day: "2-digit", month: "short" };
    return date.toLocaleDateString("en-US", options);
  } catch (error) {
    return "Invalid date format";
  }
};

export const extractTime = (dateTimeString) => {
  try {
    const date = new Date(dateTimeString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${hours}:${minutes} ${ampm}`;
  } catch (error) {
    return "Invalid time format";
  }
};
