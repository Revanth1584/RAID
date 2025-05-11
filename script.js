// Animation Sequence
window.onload = () => {
  setTimeout(() => {
    document.getElementById("raidLogo").classList.remove("hidden");
  }, 2500);
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
    updateDateTime();
  }, 5000);
};

// Show current date & time
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById("datetime").innerText = formatted;
  setTimeout(updateDateTime, 1000);
}

// Store current selected unit
let currentUnit = "";

function openUnit(unitName) {
  currentUnit = unitName;
  document.getElementById("unitTitle").innerText = unitName;
  loadTasks();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText || !currentUnit) return;

  const allTasks = JSON.parse(localStorage.getItem("raidTasks") || "{}");
  if (!allTasks[currentUnit]) allTasks[currentUnit] = [];
  allTasks[currentUnit].push({
    text: taskText,
    time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  });
  localStorage.setItem("raidTasks", JSON.stringify(allTasks));

  input.value = "";
  loadTasks();
}

function loadTasks() {
  const allTasks = JSON.parse(localStorage.getItem("raidTasks") || "{}");
  const tasks = allTasks[currentUnit] || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.slice().reverse().forEach((task, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div style="margin-bottom:10px;padding:8px;border:1px solid #ccc;border-radius:5px;">
        <strong>🗂 ${task.time}</strong><br />${task.text}
      </div>
    `;
    taskList.appendChild(div);
  });
}
