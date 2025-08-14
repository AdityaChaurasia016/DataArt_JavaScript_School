document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  fetch("/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(ev => {
        const eventBox = document.createElement("article");
        eventBox.className = "event";
        eventBox.setAttribute("data-year", ev.year);
        eventBox.innerHTML = `
          <figure>
            <img src="${ev.imageURL}" alt="${ev.title}">
            <figcaption>${ev.title} (${ev.year})</figcaption>
          </figure>
          <h3>${ev.year}: ${ev.title}</h3>
          <p>${ev.description}</p>
        `;
        eventBox.addEventListener("click", function () {
          modal.innerHTML = `
            <div style="background:white; color:black; padding:20px; max-width:400px; margin:100px auto; position:relative;">
              <span id="closeBtn" style="position:absolute; top:5px; right:10px; cursor:pointer;">X</span>
              <h2>${ev.title}</h2>
              <img src="${ev.imageURL}" alt="${ev.title}" style="width:100%; margin:10px 0;">
              <p>${ev.description}</p>
              <p><strong>Category:</strong> ${ev.category}</p>
            </div>
          `;
          modal.style.display = "block";
          document.getElementById("closeBtn").onclick = () => modal.style.display = "none";
        });
        timeline.appendChild(eventBox);
      });
    });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
