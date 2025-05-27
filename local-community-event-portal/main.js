// Log welcome message
console.log("Welcome to the Community Portal");

// Alert when page is fully loaded
window.onload = function () {
  alert("Page loaded successfully!");
};

// --- Module 2: Syntax, Data Types, and Operators ---
const eventName = "Community Yoga Session";
const eventDate = "2025-06-15";
let availableSeats = 30;

const eventInfo = `Upcoming Event: ${eventName} on ${eventDate}. Seats left: ${availableSeats}`;
console.log(eventInfo);

function register() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registered! Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, the event is full.");
  }
}

// --- Module 3: Conditionals, Loops, and Error Handling ---
const events = [
  { name: "Music Night", date: "2025-06-20", seats: 10, category: "music" },
  { name: "Art Workshop", date: "2024-12-01", seats: 0, category: "workshop" },
  { name: "Food Festival", date: "2025-05-10", seats: 25, category: "festival" },
  { name: "Book Fair", date: "2023-11-10", seats: 15, category: "education" }
];

const today = new Date();

console.log("--- Valid Events ---");
events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`${event.name} on ${event.date} (Seats: ${event.seats})`);
  }
});

function tryRegisterEvent(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
    } else {
      throw new Error("No seats left for this event.");
    }
  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

// --- Module 4: Functions, Scope, Closures, Higher-Order Functions ---
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

function createCategoryTracker() {
  const registrations = {};
  return function (category) {
    registrations[category] = (registrations[category] || 0) + 1;
    console.log(`Registrations in ${category}: ${registrations[category]}`);
  };
}

const trackRegistration = createCategoryTracker();

function dynamicFilter(events, callback) {
  return events.filter(callback);
}

// --- Module 5: Objects and Prototypes ---
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const yoga = new Event("Morning Yoga", "2025-06-30", 20);
console.log(Object.entries(yoga));

// --- Module 6: Arrays and Methods ---
const eventTitles = events.map(e => `Event: ${e.name}`);
console.log(eventTitles);

const musicEvents = events.filter(e => e.category === "music");
console.log(musicEvents);

// --- Module 7: DOM Manipulation ---
const eventSection = document.querySelector("#events");

function displayEvents() {
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.textContent = `${event.name} - ${event.date} (${event.seats} seats)`;
    eventSection.appendChild(card);
  });
}
displayEvents();

// --- Module 8: Event Handling ---
document.querySelectorAll(".eventCard").forEach(card => {
  card.onclick = () => alert("Registered!");
});

document.querySelector("select[name='eventType']").onchange = function () {
  console.log("Selected category:", this.value);
};

document.querySelector("textarea[name='message']").addEventListener("keydown", e => {
  console.log(`Key pressed: ${e.key}`);
});

// --- Module 9 & 12: Async JS, Fetch API ---
async function fetchEvents() {
  console.log("Loading events...");
  try {
    const response = await fetch("events.json");
    const data = await response.json();
    console.log("Fetched events:", data);
  } catch (err) {
    console.error("Error fetching events:", err);
  }
}
fetchEvents();

// --- Module 10: Modern JS Features ---
function logEvent({ name, date }) {
  console.log(`Event: ${name}, Date: ${date}`);
}
logEvent({ name: "Sample", date: "2025-01-01" });

const moreEvents = [...events];
console.log("Cloned event list:", moreEvents);

// --- Module 13: Debugging ---
console.log("Debug: Form submission setup complete.");

// --- Module 14: jQuery and Frameworks ---
// Assuming jQuery is loaded externally
// $('#registerBtn').click(() => alert('Registered via jQuery!'));
// $('.eventCard').fadeIn();
// Benefit of frameworks: Component-based architecture and state management

// --- Module 11: Working with Forms (already done) ---
const form = document.getElementById("registrationForm");
const output = document.getElementById("confirmationMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  register();
  output.textContent = "Thank you for registering!";
});
