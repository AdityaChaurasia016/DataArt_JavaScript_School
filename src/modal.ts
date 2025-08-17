import { EventData } from "./types.js";

export function openModal(event: EventData, modal: HTMLElement): void {
  modal.innerHTML = `
    <div style="background:white; color:black; padding:20px; max-width:400px; margin:100px auto; position:relative;">
      <span id="closeBtn" style="position:absolute; top:5px; right:10px; cursor:pointer;">X</span>
      <h2>${event.title}</h2>
      <img src="${event.imageURL}" alt="${event.title}" style="width:100%; margin:10px 0;">
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;

  modal.style.display = "block";

  document.getElementById("closeBtn")!.onclick = () => {
    modal.style.display = "none";
  };
}

export function initModalClose(modal: HTMLElement): void {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
