// Get DOM elements
const input1 = document.getElementById("ip-1");
const input2 = document.getElementById("ip-2");
const select = document.getElementById("select");
const record = document.getElementById("record");
const btn = document.getElementById("btn");

// Store tasks array
const data = [];

// Priority color mapping
const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

// Validate form inputs
function validateForm(title, date) {
  if (!title || !date || !select.value) {
    showError("All fields are required");
    return false;
  }

  // Check if date is in past
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    showError("Due date cannot be in the past");
    return false;
  }

  return true;
}

// Show error message
function showError(message) {
  alert(message); // You can replace this with a more elegant error display
}

// Format date to US format (MM/DD/YYYY)
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

// Add click event listener
btn.addEventListener("click", () => {
  const title = input1.value.trim();
  const date = input2.value;
  const priority = select.value;

  if (validateForm(title, date)) {
    addIntoTheTable(title, date, priority);

    // Clear inputs after successful add
    input1.value = "";
    input2.value = "";
    select.value = "";
  }
});

// Toggle task status
function toggleStatus(index) {
  data[index] = data[index]
    .replace(/pending|completed/g, (match) =>
      match === "pending" ? "completed" : "pending"
    )
    .replace(/bg-orange-300|bg-green-500/g, (match) =>
      match === "bg-orange-300" ? "bg-green-500" : "bg-orange-300"
    );

  // Update display
  record.innerHTML = data.join("");
}

function addIntoTheTable(title, date, priority) {
  // Add new record to data array
  data.push(recordComponent(title, date, priority, data.length));

  // Update the table with all records
  record.innerHTML = data.join("");
}

function recordComponent(title, date, priority, index) {
  const formattedDate = formatDate(date);
  const priorityColor = priorityColors[priority];

  return `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-all duration-300">
      <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${title}
      </td>
      <td class="px-6 py-4">${formattedDate}</td>
      <td class="px-6 py-4">
        <span class="${priorityColor}  p-2 rounded-lg">
          ${priority}
        </span>
      </td>
      <td class="px-6 py-4">
        <span onclick="toggleStatus(${index})" 
              class="bg-orange-300 text-white p-2 rounded-lg cursor-pointer transition-colors duration-300">
          pending
        </span>
      </td>
    </tr>
  `;
}

// Set min date to today for the date input
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  input2.min = today;
});
