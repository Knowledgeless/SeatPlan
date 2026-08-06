
const seatData = {
  Math: [
    { room: "N-402", start: "2601-023", end: "2605-175" },
    { room: "N-404", start: "2605-180", end: "2606-103" },
  ],

  Science: [
    { room: "N-404", start: "2603-079", end: "2606-101" },
  ],

  Quiz: [
    { room: "N-302", start: "2600-003", end: "2603-032" },
    { room: "N-304", start: "2603-035", end: "2604-016" },
  ],

  Mathematics_and_Science: [
    { room: "S-401", start: "2601-024", end: "2605-039" },
    { room: "S-402", start: "2605-040", end: "2605-198" },
    { room: "S-403", start: "2605-202", end: "2606-105" },
  ],
};

function normalizeSeatValue(value) {
  const cleaned = String(value).replace(/[^0-9]/g, "");
  return Number(cleaned);
}

function normalizeCategory(value) {
  const key = String(value || "").trim().toLowerCase();
  const mapping = {
    math: "Math",
    science: "Science",
    quiz: "Quiz",
    mathematics_and_science: "Mathematics_and_Science",
    mathematics: "Mathematics_and_Science",
  };

  return mapping[key] || null;
}

function searchSeat() {
  const usernameInput = document.getElementById("username").value;
  const categoryInput = document.getElementById("category").value;
  const resultBox = document.getElementById("result");

  const username = normalizeSeatValue(usernameInput);
  const category = normalizeCategory(categoryInput);

  if (!usernameInput.trim() || !categoryInput) {
    resultBox.innerHTML = "<div class='alert alert-warning mb-0'>Please enter a seat number and select a category.</div>";
    return;
  }

  if (!Number.isFinite(username) || username <= 0) {
    resultBox.innerHTML = "<div class='alert alert-warning mb-0'>Please enter a valid seat number.</div>";
    return;
  }

  if (!category) {
    resultBox.innerHTML = "<div class='alert alert-danger mb-0'>Category not found.</div>";
    return;
  }

  const rooms = seatData[category];

  if (!rooms || rooms.length === 0) {
    resultBox.innerHTML = "<div class='alert alert-danger mb-0'>No seat data is available for this category.</div>";
    return;
  }

  for (const room of rooms) {
    const start = normalizeSeatValue(room.start);
    const end = normalizeSeatValue(room.end);

    if (username >= start && username <= end) {
      resultBox.innerHTML = `
        <div class='alert alert-success mb-0'>
          <p class='mb-2'>Your seat belongs to:</p>
          <h2 class='mb-0 fw-bold'>Room ${room.room}</h2>
        </div>
      `;
      return;
    }
  }

  resultBox.innerHTML = "<div class='alert alert-danger mb-0'>Seat not found in the selected category.</div>";
}
