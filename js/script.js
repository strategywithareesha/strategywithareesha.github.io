const SITE_CONFIG = {
  instagram: "https://www.instagram.com/strategywithareesha/",
  whatsapp: "[WHATSAPP_GROUP_LINK]",
  email: "[EMAIL]",
  name: "Areesha",
  brand: "Strategy with Areesha"
};

const resources = [
  {title:"Hook Library",category:"Content",type:"PDF",description:"A starting collection of hooks for social media content.",file:"resources/content/hook-library.pdf",downloadable:true},
  {title:"Content Ideas",category:"Content",type:"Guide",description:"Ideas to help you build a more consistent content pipeline.",file:"resources/content/content-ideas.pdf",downloadable:true},
  {title:"Content Pillar Guide",category:"Strategy",type:"Guide",description:"A simple framework for defining and organizing content pillars.",file:"resources/strategy/content-pillars.pdf",downloadable:true},
  {title:"SMM Beginner Roadmap",category:"Beginner",type:"Roadmap",description:"A structured starting point for learning social media marketing.",file:"resources/strategy/smm-beginner-roadmap.pdf",downloadable:true},
  {title:"Instagram Growth Checklist",category:"Growth",type:"Checklist",description:"A practical checklist for reviewing an Instagram growth workflow.",file:"resources/growth/instagram-growth-checklist.pdf",downloadable:true},
  {title:"Social Media Audit",category:"Analytics",type:"Template",description:"A template for reviewing a social profile and identifying opportunities.",file:"resources/analytics/social-media-audit.xlsx",downloadable:true},
  {title:"Caption Guide",category:"Copywriting",type:"Guide",description:"Useful caption structures and prompts for social content.",file:"resources/copywriting/caption-guide.pdf",downloadable:true},
  {title:"Content Calendar",category:"Templates",type:"Spreadsheet",description:"Plan content ideas, formats, dates and publishing status.",file:"resources/templates/content-calendar.xlsx",downloadable:true},
  {title:"SMM AI Prompts",category:"AI & Automation",type:"Prompt Library",description:"Prompts for brainstorming, planning and improving social content.",file:"resources/ai/smm-ai-prompts.pdf",downloadable:true}
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
