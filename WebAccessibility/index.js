document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  let lastFocusedMarker = null;

  fetch("/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach((ev, idx) => {
        const eventBox = document.createElement("article");
        eventBox.className = "event";
        eventBox.setAttribute("data-year", ev.year);
        eventBox.setAttribute("tabindex", "0");
        eventBox.setAttribute("role", "listitem");
        eventBox.setAttribute("aria-label", `${ev.title} (${ev.year})`);
        if (idx === 0) eventBox.setAttribute("aria-current", "step");

        eventBox.innerHTML = `
          <figure>
            <img src="${ev.imageURL}" alt="${ev.title}" />
            <figcaption>${ev.title} (${ev.year})</figcaption>
          </figure>
          <h3>${ev.year}: ${ev.title}</h3>
          <p>${ev.description}</p>
        `;
        eventBox.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            eventBox.click();
          }
        });
        eventBox.addEventListener("click", function () {
          lastFocusedMarker = eventBox;
          showModal(ev);
        });
        timeline.appendChild(eventBox);
      });

      timeline.addEventListener("keydown", function (e) {
        const focusable = Array.from(timeline.querySelectorAll('.event'));
        const index = focusable.indexOf(document.activeElement);
        if (["ArrowRight", "ArrowDown"].includes(e.key)) {
          if (index < focusable.length - 1) focusable[index + 1].focus();
          e.preventDefault();
        }
        if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
          if (index > 0) focusable[index - 1].focus();
          e.preventDefault();
        }
      });
    });

  function showModal(ev) {
    modal.innerHTML = `
      <div class="modalContent" tabindex="-1">
        <button id="closeBtn" role="button" aria-label="Close modal" tabindex="0">X</button>
        <h2 id="modalTitle">${ev.title}</h2>
        <img src="${ev.imageURL}" alt="${ev.title}" style="width:100%; margin:10px 0;">
        <p>${ev.description}</p>
        <p><strong>Category:</strong> ${ev.category}</p>
      </div>
    `;
    modal.style.display = "block";
    const modalContent = modal.querySelector(".modalContent");
    const closeBtn = document.getElementById("closeBtn");

    let focusableEls = modal.querySelectorAll('[tabindex], button, [role="button"]');
    let firstFocusableEl = focusableEls[0];
    let lastFocusableEl = focusableEls[focusableEls.length - 1];
    modalContent.focus();

    function trapFocus(e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
      if (e.key === "Escape") {
        closeModal();
      }
    }
    modalContent.addEventListener("keydown", trapFocus);

    closeBtn.onclick = closeModal;
    closeBtn.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " ") closeModal();
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    function closeModal() {
      modal.style.display = "none";
      modalContent.removeEventListener("keydown", trapFocus);
      if (lastFocusedMarker) lastFocusedMarker.focus();
      modal.innerHTML = "";
    }
  }
});
