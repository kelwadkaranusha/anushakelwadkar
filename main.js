// ANUSHA KELWADKAR — PORTFOLIO
// Handles the "click a square to see more" case study modal.

const projectData = {
  brandywine: {
    tag: "Brand identity",
    title: "Brandywine Bookshop",
    meta: [
      ["Role", "Designer, brand identity team"],
      ["Timeline", "Aug – Dec 2025"],
      ["Tools", "Figma, Adobe Creative Suite"]
    ],
    body: [
      "Worked as part of a small design team to build a complete brand identity for Brandywine Bookshop, a community bookshop in Wilmington, Delaware — including a logo system, merchandise designs, and a color palette meant to feel warm and literary rather than corporate.",
      "Beyond the identity system, I designed a mural concept intended for display in the Wilmington community, extending the brand into a physical, public-facing piece.",
      "The work was done fully remotely: I organized weekly client check-ins and kept the team on a shared timeline so we could hit our deliverable dates without ever being in the same room. This project became the anchor example in my graduate school application, since it's the clearest proof of how I take a brand from concept to something a real community actually sees and uses."
    ],
    link: null
  },
  podcast: {
    tag: "Research · audio",
    title: "Design Movements & Collective Consciousness",
    meta: [
      ["Format", "Podcast episode"],
      ["Focus", "Design history & theory"]
    ],
    body: [
      "A research-driven podcast episode exploring how design movements — Dada, the Swiss International Style, and flat design among them — surface as reflections of collective consciousness during periods of cultural distress.",
      "I grounded the episode in theoretical frameworks from Raymond Williams, Antonio Gramsci, Guy Debord, and Fredric Jameson, connecting visual history to the social and political conditions that produced it. It's a piece I'm proud of for tying my art history minor directly into a design practice."
    ],
    link: null
  },
  videoessay: {
    tag: "Research · film",
    title: "Neoliberalism & Overconsumption",
    meta: [
      ["Format", "Video essay"],
      ["Focus", "Anthropology & environment"]
    ],
    body: [
      "A video essay examining neoliberalism and overconsumption, and tracing their anthropological and environmental consequences.",
      "The project involved scholarly research, Chicago-style citations, script outlining, and multiple rounds of draft feedback — the kind of rigorous, source-backed process I bring to design research and synthesis work as well."
    ],
    link: null
  }
};

const dialog = document.getElementById("case-study");

if (dialog) {
  const modalBody = dialog.querySelector(".modal-inner");

  document.querySelectorAll("[data-project]").forEach((tile) => {
    tile.addEventListener("click", () => {
      const data = projectData[tile.dataset.project];
      if (!data) return;

      const metaHtml = data.meta
        .map(([label, value]) => `<span><strong>${label}:</strong> ${value}</span>`)
        .join("");

      const bodyHtml = data.body.map((para) => `<p>${para}</p>`).join("");

      const linkHtml = data.link
        ? `<a class="modal-link" href="${data.link}" target="_blank" rel="noopener">View more</a>`
        : "";

      modalBody.innerHTML = `
        <button class="modal-close" aria-label="Close">&times;</button>
        <span class="tile-tag">${data.tag}</span>
        <h3 id="case-study-title">${data.title}</h3>
        <div class="modal-meta">${metaHtml}</div>
        ${bodyHtml}
        ${linkHtml}
      `;

      modalBody.querySelector(".modal-close").addEventListener("click", () => dialog.close());

      dialog.showModal();
    });
  });

  // close when clicking the backdrop
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inDialog) dialog.close();
  });
}

// footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
