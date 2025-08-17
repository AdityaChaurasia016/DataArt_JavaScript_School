import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderEvents(events: EventData[], timeline: HTMLElement, modal: HTMLElement): void {
  events.forEach(ev => {
    const eventBox = document.createElement("article");
    eventBox.className = "event";
    eventBox.setAttribute("data-year", ev.year.toString());

    eventBox.innerHTML = `
      <figure>
        <img src="${ev.imageURL}" alt="${ev.title}">
        <figcaption>${ev.title} (${ev.year})</figcaption>
      </figure>
      <h3>${ev.year}: ${ev.title}</h3>
      <p>${ev.description}</p>
    `;

    eventBox.addEventListener("click", () => openModal(ev, modal));
    timeline.appendChild(eventBox);
  });
}
