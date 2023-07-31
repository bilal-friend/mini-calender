// Project : Mini Calendar
const [dayElement, weekdayElement, monthElement, yearElement] =
  document.querySelectorAll("p");

function updateMiniCalendar() {
  // Get the current date and format it
  let currentDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    weekday: "long",
  });

  // Split the formatted date into an array
  let dateParts = currentDate.split(" ");

  // Update the mini calendar elements with the formatted date
  monthElement.textContent = dateParts[0];
  yearElement.textContent = dateParts[1];
  weekdayElement.textContent = dateParts[2];
  dayElement.textContent = new Date().getDate();
}

// Call the function to update the mini calendar
updateMiniCalendar();
