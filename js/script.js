 document.addEventListener("DOMContentLoaded", () => {
  showSection("home"); // Keeps Home as your landing page
  renderProducts();     // Still loads your products behind the scenes
});


  function showSection(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }

    if (id === "products") {
      document.querySelectorAll(".flip-card").forEach(card => {
      card.style.display = "block";
      });
    }
  }

  function showWorkshopTab(tabId) {
    const processTab = document.getElementById("processTab");
    const resultTab = document.getElementById("resultTab");
    const processBtn = document.getElementById("processBtn");
    const resultBtn = document.getElementById("resultBtn");

    [processTab, resultTab].forEach(tab => tab.classList.remove("active"));
    [processBtn, resultBtn].forEach(btn => btn.classList.remove("active"));

    if (tabId === "process") {
      processTab.classList.add("active");
      processBtn.classList.add("active");
    } else {
      resultTab.classList.add("active");
      resultBtn.classList.add("active");
    }
  }

 function toggleDropdown(event) {
  event.preventDefault();
  console.log("Dropdown clicked"); // ✅ Confirm it's triggered

  const dropdown = event.currentTarget.closest(".dropdown");
  const menu = dropdown.querySelector(".dropdown-menu");

  // Close all other dropdowns
  document.querySelectorAll(".dropdown-menu").forEach(m => {
    if (m !== menu) m.style.display = "none";
  });

  // Toggle this one
  if (menu) {
    const isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
  }
}
function filterProducts(keyword) {
  showSection("products");
  document.querySelectorAll(".flip-card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(keyword.toLowerCase()) ? "block" : "none";
  });
}


  document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");
    if (menu && dropdown && !dropdown.contains(e.target)) {
      menu.style.display = "none";
    }
  });
  const slides = document.querySelectorAll(".background-slideshow .slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); // change every 5 seconds

function showWorkshopGallery(type) {
  const gallery = document.getElementById("gallery-content");
  gallery.innerHTML = ""; // Clear previous

  if (type === "pictures") {
    gallery.innerHTML = `
      <h3>Workshop Gallery - Pictures</h3>
      <div class="product-grid">
        <div class="product-card"><img src="images/IMG-20250709-WA0010.jpg"></div>
        <div class="product-card"><img src="images/492025722_122202451862258593_8274135011812996197_n.jpg"></div>
        <div class="product-card"><img src="images/492764060_122202904868258593_8925710796442179107_n.jpg"></div>
        <div class="product-card"><img src="images/IMG-20250711-WA0021.jpg"></div>
        <div class="product-card"><img src="images/IMG-20250711-WA0024.jpg"></div>
        <div class="product-card"><img src="images/IMG-20250711-WA0030.jpg"></div>
        <div class="product-card"><img src="images/IMG-20250711-WA0034.jpg"></div>
        <div class="product-card"><img src="images/IMG-20250709-WA0002.jpg"></div>
        <div class="product-card"><img src="images/484009923_122193073322258593_2885395752269227633_n.jpg"></div>
      </div>
    `;
  } else if (type === "videos") {
    gallery.innerHTML = `
      <h3>Workshop Gallery - Videos</h3>
      <div class="product-grid">
        <div class="product-card"><video controls src="videos/VID-20250709-WA0013.mp4"></video><p>Basics</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0015.mp4"></video><p>Welding Tips</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0016.mp4"></video><p>Basics</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0017.mp4"></video><p>Basics</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0013.mp4"></video><p>Basics</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0018.mp4"></video><p>Basics</p></div>
        <div class="product-card"><video controls src="videos/VID-20250709-WA0019.mp4"></video><p>Basics</p></div>
      </div>
    `;
  }

  // ✨ Smooth scroll after loading
  setTimeout(() => {
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100); // Short delay to allow rendering
}
const products = [
  {
    name: "Adapters",
    image: "images/big-weld-on-and-bolt-on-adapters.jpg",
    details: [
      "J-Series Weld-on Adapters",
      "For Tractor-loade-backhoe, Front End Loader & Excavators",
      "Size: J200, J350, J460",
    ]
  },
  {
    name: "Bucket Teeth",
    image: "images/big-cat-j-series-teeth.jpg",
    details: [
      "We supply the worlds safest, most trusted Bucket Teeth guaranteed for long wear life",
      "Long lasting, high quality Teeth",
      "Size: J200, J350, J460",
    ]
  },
  {
    name: "Cutting Edge TLB",
    image: "images/4610e266-f50f-4010-b242-89f3233e579e.jpeg",
    details: [
      "Use: TLB bucket edge replacement",
      "Material: Heat-treated steel",
      "Sizes: Multiple widths available"
    ]
  },
  {
    name: "Bucket Pins",
    image: "images/H6a4c630cee124c308dc997eddf2240c72.jpg_300x300.jpeg",
    details: [
      "Use: Bucket linkage",
      "Finish: Zinc-coated",
      "Sizes: (80x550), (90x580)"
    ]
  },
  {
    name: "Lip Shrouds",
    image: "images/61f0f57a-e853-4d76-8d35-cc9c9db17a94.jpeg",
    details: [
      "Protection: Lip edge reinforcement",
      "Weight: 7 kg",
      "Mount: Weld-on"
    ]
  },
  {
    name: "Heel Shrouds",
    image: "images/558_proclaws_heel_shroud_3.jpg",
    details: [
      "Use: Heel protection",
      "Weight: 10.2 kg",
      "Mount: Weld on"
    ]
  },
  {
    name: "Pins and Retainers",
    image: "images/drawing_page-0001.jpg",
    details: [
      "Use: Tooth locking system",
      "Compatibility: CAT, Komatsu, etc.",
      "Size: J200, J350, J460"
    ]
  },
  {
    name: "Side Bar Protector",
    image: "images/164a2d30-a057-41f9-b751-cf54b132d940.jpeg",
    details: [
      "Use: Bucket side protection",
      "Mount: Weld-on",
      "Shape: Curved or straight"
    ]
  },
  {
    name: "Side Cutter TLB",
    image: "images/ec10b5bf-852a-4e18-9ab0-e12bfbe28c4c.jpeg",
    details: [
      "Use: TLB bucket edge",
      "Material: High-carbon steel",
      "Mount: Bolt-on"
    ]
  },
  {
    name: "Side Cutter",
    image: "images/51a9e7e1-5064-41ab-80ac-ef3c85e47f6a.jpeg",
    details: [
      "Use: Excavator bucket edge",
      "Design: Serrated or smooth",
      "Sizes: Custom options"
    ]
  },
  {
    name: "Bucket Bosses",
    image: "images/a0686ec1-ed23-484b-9c62-c4dfce356f93.jpeg",
    details: [
      "Use: Bucket pivot points",
      "Material: Machined steel",
      "Size: (80x140x80), (80x160x90), (90x160x90)"
    ]
  },
  {
    name: "Dipper Arm Boss",
    image: "images/e21111e9-0daa-4a66-bb45-cff21d9c364d.jpeg",
    details: [
      "Use: Dipper arm reinforcement",
      "Material: Forged steel",
      "Size: (80x180x310)"
    ]
  },
  {
    name: "Polyshims",
    image: "images/shims.jpg",
    details: [
      "Use: Wear compensation",
      "Material: Polyurethane",
      "Sizes: (80x5x140), (80x5x160), (90x5x160)"
    ]
  },
  {
    name: "Wear Strips",
    image: "images/ware strip.jpeg",
    details: [
      "Use: Surface protection",
      "Material: Chromium carbide",
      "Mount: Weld-on"
    ]
  },
  {
    name: "Wear Buttons",
    image: "images/buttond.jpeg",
    details: [
      "Use: Spot reinforcement",
      "Shape: Round or oval",
      "Material: Tungsten carbide"
    ]
  },
  {
    name: "Cutting Edge Half-Arrow",
    image: "images/Half-Arrows-1.jpg",
    details: [
      "Use: Excavator & TLB bucket edge",
      "Design: Half-arrow profile",
      "Durability: High abrasion resistance"
    ]
  },
  {
    name: "Cutting Edge Excavator",
    image: "images/images (1).jfif",
    details: [
      "Use: Excavator bucket edge",
      "Material: Hardened steel",
      "Sizes: Custom lengths"
    ]
  }
];

function renderProducts() {
  const container = document.querySelector(".product-grid");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "flip-card";

    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto; border-radius:10px;">
        </div>
        <div class="flip-card-back">
          <h3>${product.name}</h3>
          ${product.details.map(detail => `<p>${detail}</p>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("click", function(e) {
  const card = e.target.closest(".flip-card");
  if (card) {
    const inner = card.querySelector(".flip-card-inner");
    const alreadyFlipped = inner.classList.contains("flipped");

    // Toggle flip
    inner.classList.toggle("flipped");

    // If now flipped, set timeout to flip back
    if (!alreadyFlipped) {
      setTimeout(() => {
        inner.classList.remove("flipped");
      }, 10000); // 10 seconds
    }
  }
});


function toggleProductDetails(card) {
  const details = card.querySelector(".product-details");
  if (details) {
    const isVisible = details.style.display === "block";
    details.style.display = isVisible ? "none" : "block";
  }
}
function openQuotationForm() {
  const formWrapper = document.getElementById("quotation-form-wrapper");
  if (formWrapper.style.display === "none") {
    formWrapper.style.display = "block";
    formWrapper.scrollIntoView({ behavior: "smooth" });
  } else {
    formWrapper.style.display = "none";
  }
}
  function toggleMobileNav() {
    const nav = document.querySelector('.nav-block ul');
    nav.classList.toggle('show');
  }
document.querySelectorAll('.nav-block ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    const isDropdownToggle = link.closest('.dropdown') !== null;

    // Only close if it's NOT the dropdown toggle
    if (!isDropdownToggle) {
      const navMenu = document.querySelector('.nav-block ul');
      navMenu.classList.remove('show');
    }
  });
});
document.querySelectorAll('.dropdown-menu li a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-block ul');
    navMenu.classList.remove('show');
  });
});



