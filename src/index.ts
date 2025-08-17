import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { initModalClose } from "./modal.js";

document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline") as HTMLElement;
  const modal = document.getElementById("modal") as HTMLElement;

  try {
    const events = await fetchEvents("../events.json");
    renderEvents(events, timeline, modal);
    initModalClose(modal);
  } catch (err) {
    console.error("Error loading events:", err);
  }
});
