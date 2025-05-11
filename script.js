// script.js
document.addEventListener("DOMContentLoaded", () => {
  const taskBtn = document.getElementById("taskBtn");
  const taskDisplay = document.getElementById("taskDisplay");

  taskBtn.addEventListener("click", () => {
    const today = new Date().toLocaleDateString();
    const task = `Today's task (${today}): Conduct field intelligence review and prepare 6 PM status report.`;

    taskDisplay.textContent = task;
    taskDisplay.style.display = "block";
  });
});
