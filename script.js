// Select root container
const root = document.getElementById("root");

// Create main content container
const container = document.createElement("div");
container.style.padding = "40px";
container.style.fontFamily = "Arial, sans-serif";
container.style.color = "#fff";
container.style.background = "linear-gradient(to bottom right, #1F2937, #111827)";
container.style.minHeight = "100vh";

// Add RAID title
const title = document.createElement("h1");
title.textContent = "RAID Command Interface";
title.style.fontSize = "36px";
title.style.marginBottom = "20px";
title.style.color = "#FACC15";

// Add welcome message
const subtitle = document.createElement("p");
subtitle.textContent = "Welcome, Officer. You have access to the Rapid Action & Intelligence Directorate control panel.";
subtitle.style.fontSize = "18px";
subtitle.style.marginBottom = "30px";

// Add interaction button
const button = document.createElement("button");
button.textContent = "Access Command Module";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#2563EB";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.cursor = "pointer";
button.addEventListener("click", () => {
  alert("🔐 Secure Access Granted. Redirecting to Command Module...");
  // Redirect or logic can be placed here
});

// Append all to container
container.appendChild(title);
container.appendChild(subtitle);
container.appendChild(button);

// Inject into root
root.appendChild(container);
