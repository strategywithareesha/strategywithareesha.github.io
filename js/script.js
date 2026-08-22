const SITE_CONFIG = {
  instagram: "https://www.instagram.com/strategywithareesha/",
  whatsapp: "[WHATSAPP_GROUP_LINK]",
  email: "[EMAIL]",
  name: "Areesha",
  brand: "Strategy with Areesha"
};

const resources = [
  {
  title: "30 Days SMM Skill Builder",
  category: "Strategy",
  type: "Spreadsheet",
  description: "A 30-day SMM skill-building plan covering content strategy, content creation, marketing, growth and more.",
  file: "resources/strategy/SMM-BY-AM.xlsx",
  downloadable: true
},
  {title:"SMM Beginner Roadmap",category:"Beginner",type:"Roadmap",description:"A structured starting point for learning social media marketing.",file:"resources/strategy/ROADMAP.docx",downloadable:true},
  {
    title: "Phase 1",
    category: "Strategy",
    type: "PDF",
    description: "A practical resource covering the first phase of the SMM learning journey.",
    file: "resources/strategy/Phase-1-from-AM.pdf",
    downloadable: true
},
  {title:"Social Media Audit",category:"Analytics",type:"Template",description:"A template for reviewing a social profile and identifying opportunities.",file:"resources/analytics/AUDIT-TEMPLATE.docx",downloadable:true},
  {title:"Content Calendar",category:"Templates",type:"Spreadsheet",description:"Plan content ideas, formats, dates and publishing status.",file:"resources/templates/CC-TEMPLATE.xlsx",downloadable:true},
];

const grid = document.getElementById("resourceGrid");
const search = document.getElementById("resourceSearch");
const filters = document.getElementById("filters");
const empty = document.getElementById("emptyState");
const categories = ["All", ...new Set(resources.map(r => r.category))];
let active = "All";

categories.forEach(category => {
  const b = document.createElement("button");
  b.className = "filter" + (category === "All" ? " active" : "");
  b.textContent = category;
  b.addEventListener("click", () => {
    active = category;
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    render();
  });
  filters.appendChild(b);
});

function render() {
  const q = search.value.trim().toLowerCase();
  const filtered = resources.filter(r => {
    const matchesCategory = active === "All" || r.category === active;
    const matchesSearch = !q || `${r.title} ${r.category} ${r.type} ${r.description}`.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(r => `
    <article class="resource-card">
      <span class="resource-tag">${r.category.toUpperCase()} · ${r.type.toUpperCase()}</span>
      <h3>${r.title}</h3>
      <p>${r.description}</p>
      <div class="resource-actions">
        <a href="${r.file}" target="_blank" rel="noopener">View ↗</a>
        ${r.downloadable ? `<a href="${r.file}" download>Download ↓</a>` : ""}
      </div>
    </article>
  `).join("");

  empty.hidden = filtered.length !== 0;
}
search.addEventListener("input", render);
render();

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open")));

document.querySelectorAll('a[href="[WHATSAPP_GROUP_LINK]"]').forEach(a => {
  a.addEventListener("click", e => {
    if (SITE_CONFIG.whatsapp === "[WHATSAPP_GROUP_LINK]") {
      e.preventDefault();
      alert("Replace [WHATSAPP_GROUP_LINK] in js/script.js with Areesha's real WhatsApp group link.");
    }
  });
});

const topButton = document.getElementById("topButton");
window.addEventListener("scroll", () => topButton.classList.toggle("show", window.scrollY > 600));
topButton.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
