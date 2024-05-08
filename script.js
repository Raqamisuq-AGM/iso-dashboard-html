// Template Customizer
let icon = document.querySelector(".icons");
let icon2 = document.querySelector(".icons2");

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const icons = document.querySelector(".icons");
  const icons2 = document.querySelector(".icons2");

  // Function to check if body has dark-theme class
  function hasDarkTheme() {
    return body.classList.contains("dark-theme");
  }

  // Function to toggle visibility of icons based on theme
  function toggleIconsVisibility() {
    if (hasDarkTheme()) {
      icons.style.display = "none";
      icons2.style.display = "inline-block";
    } else {
      icons.style.display = "inline-block";
      icons2.style.display = "none";
    }
  }

  // Initial call to set icons visibility based on current theme
  toggleIconsVisibility();

  // MutationObserver to detect changes in body class
  const observer = new MutationObserver(toggleIconsVisibility);
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });
});

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkTheme = document.body.classList.contains("dark-theme");
  console.log("Icon Clicked");
});

icon2.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkTheme = document.body.classList.contains("dark-theme");
  console.log("Icon Clicked");
});

let customizerBtn = document.querySelector(".template-customizer");
let customizerCloseBtn = document.querySelector(".close-customizer");
let customizer = document.querySelector(".customizer");
let bodyDropShadow = document.querySelector(".body-drop-shadow");
let emailLogin = document.querySelector(".email-login");
customizerBtn.addEventListener("click", () => {
  bodyDropShadow.style.display = "block";
  customizer.style.transform = "translateX(0)";
});

bodyDropShadow.addEventListener("click", () => {
  bodyDropShadow.style.display = "none";
  customizer.style.transform = "translateX(-1000px)";
});

customizerCloseBtn.addEventListener("click", () => {
  bodyDropShadow.style.display = "none";
  customizer.style.transform = "translateX(-1000px)";
});

emailLogin.addEventListener("click", () => {
  bodyDropShadow.style.display = "none";
  customizer.style.transform = "translateX(-1000px)";
});

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card-wrapper");

  // Function to add attributes on hover
  function addAttributes() {
    card.setAttribute("data-bs-toggle", "modal");
    card.setAttribute("data-bs-target", "#exampleModal");
  }

  // Function to remove attributes when mouse leaves
  function removeAttributes() {
    card.removeAttribute("data-bs-toggle");
    card.removeAttribute("data-bs-target");
  }

  // Add event listeners for mouseenter and mouseleave
  card.addEventListener("mouseenter", addAttributes);
  card.addEventListener("mouseleave", removeAttributes);
});


// Chart ctx
const ctx1 = document.querySelectorAll(".Chart1");
const ctx2 = document.querySelector(".Chart2");
const ctx3 = document.querySelector(".Chart3");
const ctx4 = document.querySelector(".Chart4");
const ctx5 = document.querySelector(".Chart5");
const ctx6 = document.querySelector(".Chart6");
const ctx7 = document.querySelector(".Chart7");
const ctx8 = document.querySelector(".Chart8");
const ctx9 = document.querySelector(".Chart9");
const ctx10 = document.querySelector(".Chart10");
const ctx11 = document.querySelector(".Chart11");
const ctx12 = document.querySelector(".Chart12");
const ctx13 = document.querySelector(".Chart13");
const ctx14 = document.querySelector(".Chart14");
const ctx15 = document.querySelector(".Chart15");
const ctx16 = document.querySelector(".Chart16");
const ctx17 = document.querySelector(".Chart17");
const ctx18 = document.querySelector(".Chart18");
const ctx19 = document.querySelector(".Chart19");
const ctx20 = document.querySelector(".Chart20");
const ctx21 = document.querySelector(".Chart21");
const ctx22 = document.querySelector(".Chart22");
const ctx23 = document.querySelector(".Chart23");
const ctx24 = document.querySelector(".Chart24");
const ctx25 = document.querySelector(".Chart25");
const ctx26 = document.querySelector(".Chart26");
const ctx27 = document.querySelector(".Chart27");
const ctx28 = document.querySelector(".Chart28");
const ctx29 = document.querySelector(".Chart29");
const ctx30 = document.querySelector(".Chart30");
const ctx31 = document.querySelector(".Chart31");
const ctx32 = document.querySelector(".Chart32");

// Generate Chart 1
new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 2
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 3
new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 4
new Chart(ctx4, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 5
new Chart(ctx5, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 6
new Chart(ctx6, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 7
new Chart(ctx7, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 8
new Chart(ctx8, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 9
new Chart(ctx9, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 10
new Chart(ctx10, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 11
new Chart(ctx11, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 12
new Chart(ctx12, {
  type: "bar",
  data: {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Easy as",
        data: [1, 2, 3],
      },
    ],
  },
  options: {
    indexAxis: "y", // <-- here
    responsive: true,
  },
});

// Generate Chart 13
new Chart(ctx13, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 14
new Chart(ctx14, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 15
new Chart(ctx15, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 16
new Chart(ctx16, {
  type: "bar",
  data: {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Easy as",
        data: [1, 2, 3],
      },
    ],
  },
  options: {
    indexAxis: "y", // <-- here
    responsive: true,
  },
});

// Generate Chart 17
new Chart(ctx17, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 18
new Chart(ctx18, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 19
new Chart(ctx19, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Generate Chart 20
new Chart(ctx20, {
  type: "bar",
  data: {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Easy as",
        data: [1, 2, 3],
      },
    ],
  },
  options: {
    indexAxis: "y", // <-- here
    responsive: true,
  },
});
// Generate Chart 21
new Chart(ctx21, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 22
new Chart(ctx22, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 23
new Chart(ctx23, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 24
new Chart(ctx24, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 25
new Chart(ctx25, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 26
new Chart(ctx26, {
  type: "bar",
  data: {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Easy as",
        data: [1, 2, 3],
      },
    ],
  },
  options: {
    indexAxis: "y", // <-- here
    responsive: true,
  },
}); // Generate Chart 27

new Chart(ctx27, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 28
new Chart(ctx28, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 29
new Chart(ctx29, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 30
new Chart(ctx30, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 31
new Chart(ctx31, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate Chart 32
new Chart(ctx32, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Generate WordCloud Chart 1
const words1 = [
  { key: "word", value: 10 },
  { key: "words", value: 8 },
  { key: "sprite", value: 7 },
  { key: "placed", value: 5 },
  { key: "layout", value: 4 },
  { key: "algorithm", value: 4 },
  { key: "area", value: 4 },
  { key: "without", value: 3 },
  { key: "step", value: 3 },
  { key: "bounding", value: 3 },
  { key: "retrieve", value: 3 },
  { key: "operation", value: 3 },
  { key: "collision", value: 3 },
  { key: "candidate", value: 3 },
  { key: "32", value: 2 },
  { key: "placement", value: 2 },
  { key: "time", value: 2 },
  { key: "possible", value: 2 },
  { key: "even", value: 2 },
  { key: "simple", value: 2 },
  { key: "starting", value: 2 },
  { key: "previously", value: 2 },
  { key: "move", value: 2 },
  { key: "perform", value: 2 },
  { key: "hierarchical", value: 2 },
  { key: "draw", value: 2 },
  { key: "pixel", value: 2 },
  { key: "data", value: 2 },
  { key: "separately", value: 2 },
  { key: "expensive", value: 2 },
  { key: "pixels", value: 2 },
  { key: "masks", value: 2 },
  { key: "implementation", value: 2 },
  { key: "detection", value: 2 },
  { key: "larger", value: 2 },
  { key: "whole", value: 2 },
  { key: "comparing", value: 2 },
  { key: "box", value: 2 },
  { key: "large", value: 2 },
  { key: "think", value: 2 },
  { key: "version", value: 2 },
  { key: "single", value: 2 },
  { key: "tree", value: 2 },
  { key: "Cloud", value: 1 },
  { key: "Generator", value: 1 },
  { key: "Works", value: 1 },
  { key: "positioning", value: 1 },
  { key: "overlap", value: 1 },
  { key: "available", value: 1 },
  { key: "GitHub", value: 1 },
  { key: "open", value: 1 },
  { key: "source", value: 1 },
  { key: "license", value: 1 },
  { key: "d3cloud", value: 1 },
  { key: "Note", value: 1 },
  { key: "code", value: 1 },
  { key: "converting", value: 1 },
  { key: "text", value: 1 },
  { key: "rendering", value: 1 },
  { key: "final", value: 1 },
  { key: "output", value: 1 },
  { key: "requires", value: 1 },
  { key: "additional", value: 1 },
  { key: "development", value: 1 },
  { key: "quite", value: 1 },
  { key: "slow", value: 1 },
  { key: "hundred", value: 1 },
  { key: "run", value: 1 },
  { key: "asynchronously", value: 1 },
  { key: "configurable", value: 1 },
  { key: "size", value: 1 },
  { key: "makes", value: 1 },
  { key: "animate", value: 1 },
  { key: "stuttering", value: 1 },
  { key: "recommended", value: 1 },
  { key: "always", value: 1 },
  { key: "use", value: 1 },
  { key: "animations", value: 1 },
  { key: "prevents", value: 1 },
  { key: "browsers", value: 1 },
  { key: "event", value: 1 },
  { key: "loop", value: 1 },
  { key: "blocking", value: 1 },
  { key: "placing", value: 1 },
  { key: "incredibly", value: 1 },
  { key: "important", value: 1 },
  { key: "Attempt", value: 1 },
  { key: "place", value: 1 },
  { key: "point", value: 1 },
  { key: "usually", value: 1 },
  { key: "near", value: 1 },
  { key: "middle", value: 1 },
  { key: "somewhere", value: 1 },
  { key: "central", value: 1 },
  { key: "horizontal", value: 1 },
  { key: "line", value: 1 },
  { key: "intersects", value: 1 },
  { key: "one", value: 1 },
  { key: "along", value: 1 },
  { key: "increasing", value: 1 },
  { key: "spiral", value: 1 },
  { key: "Repeat", value: 1 },
  { key: "intersections", value: 1 },
  { key: "found", value: 1 },
  { key: "hard", value: 1 },
  { key: "part", value: 1 },
  { key: "making", value: 1 },
  { key: "efficiently", value: 1 },
  { key: "According", value: 1 },
  { key: "Jonathan", value: 1 },
  { key: "Feinberg", value: 1 },
  { key: "Wordle", value: 1 },
  { key: "uses", value: 1 },
  { key: "combination", value: 1 },
  { key: "boxes", value: 1 },
  { key: "quadtrees", value: 1 },
  { key: "achieve", value: 1 },
  { key: "reasonable", value: 1 },
  { key: "speeds", value: 1 },
  { key: "Glyphs", value: 1 },
  { key: "JavaScript", value: 1 },
  { key: "isnt", value: 1 },
  { key: "way", value: 1 },
  { key: "precise", value: 1 },
  { key: "glyph", value: 1 },
  { key: "shapes", value: 1 },
  { key: "via", value: 1 },
  { key: "DOM", value: 1 },
  { key: "except", value: 1 },
  { key: "perhaps", value: 1 },
  { key: "SVG", value: 1 },
  { key: "fonts", value: 1 },
  { key: "Instead", value: 1 },
  { key: "hidden", value: 1 },
  { key: "canvas", value: 1 },
  { key: "element", value: 1 },
  { key: "Retrieving", value: 1 },
  { key: "many", value: 1 },
  { key: "batch", value: 1 },
  { key: "Sprites", value: 1 },
  { key: "initial", value: 1 },
  { key: "performed", value: 1 },
  { key: "using", value: 1 },
  { key: "doesnt", value: 1 },
  { key: "copy", value: 1 },
  { key: "appropriate", value: 1 },
  { key: "position", value: 1 },
  { key: "representing", value: 1 },
  { key: "advantage", value: 1 },
  { key: "involves", value: 1 },
  { key: "relevant", value: 1 },
  { key: "rather", value: 1 },
  { key: "previous", value: 1 },
  { key: "Somewhat", value: 1 },
  { key: "surprisingly", value: 1 },
  { key: "lowlevel", value: 1 },
  { key: "hack", value: 1 },
  { key: "made", value: 1 },
  { key: "tremendous", value: 1 },
  { key: "difference", value: 1 },
  { key: "constructing", value: 1 },
  { key: "compressed", value: 1 },
  { key: "blocks", value: 1 },
  { key: "1bit", value: 1 },
  { key: "32bit", value: 1 },
  { key: "integers", value: 1 },
  { key: "thus", value: 1 },
  { key: "reducing", value: 1 },
  { key: "number", value: 1 },
  { key: "checks", value: 1 },
  { key: "memory", value: 1 },
  { key: "times", value: 1 },
  { key: "fact", value: 1 },
  { key: "turned", value: 1 },
  { key: "beat", value: 1 },
  { key: "quadtree", value: 1 },
  { key: "everything", value: 1 },
  { key: "tried", value: 1 },
  { key: "areas", value: 1 },
  { key: "font", value: 1 },
  { key: "sizes", value: 1 },
  { key: "primarily", value: 1 },
  { key: "needs", value: 1 },
  { key: "test", value: 1 },
  { key: "per", value: 1 },
  { key: "whereas", value: 1 },
  { key: "compare", value: 1 },
  { key: "every", value: 1 },
  { key: "overlaps", value: 1 },
  { key: "slightly", value: 1 },
  { key: "Another", value: 1 },
  { key: "possibility", value: 1 },
  { key: "merge", value: 1 },
  { key: "fairly", value: 1 },
  { key: "though", value: 1 },
  { key: "compared", value: 1 },
  { key: "analagous", value: 1 },
  { key: "mask", value: 1 },
  { key: "essentially", value: 1 },
  { key: "ORing", value: 1 },
  { key: "block", value: 1 },
];

document.addEventListener("DOMContentLoaded", function () {
  const ct = document.querySelector(".canvas1").getContext("2d");
  new Chart(ct, {
    type: "wordCloud",
    data: {
      labels: words1.map((d) => d.key),
      datasets: [
        {
          label: "",
          data: words1.map((d) => 10 + d.value * 4),
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Word Cloud",
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});

// Generate WordCloud Chart 2
const words = [
  { key: "word", value: 10 },
  { key: "words", value: 8 },
  { key: "sprite", value: 7 },
  { key: "placed", value: 5 },
  { key: "layout", value: 4 },
  { key: "algorithm", value: 4 },
  { key: "area", value: 4 },
  { key: "without", value: 3 },
  { key: "step", value: 3 },
  { key: "bounding", value: 3 },
  { key: "retrieve", value: 3 },
  { key: "operation", value: 3 },
  { key: "collision", value: 3 },
  { key: "candidate", value: 3 },
  { key: "32", value: 2 },
  { key: "placement", value: 2 },
  { key: "time", value: 2 },
  { key: "possible", value: 2 },
  { key: "even", value: 2 },
  { key: "simple", value: 2 },
  { key: "starting", value: 2 },
  { key: "previously", value: 2 },
  { key: "move", value: 2 },
  { key: "perform", value: 2 },
  { key: "hierarchical", value: 2 },
  { key: "draw", value: 2 },
  { key: "pixel", value: 2 },
  { key: "data", value: 2 },
  { key: "separately", value: 2 },
  { key: "expensive", value: 2 },
  { key: "pixels", value: 2 },
  { key: "masks", value: 2 },
  { key: "implementation", value: 2 },
  { key: "detection", value: 2 },
  { key: "larger", value: 2 },
  { key: "whole", value: 2 },
  { key: "comparing", value: 2 },
  { key: "box", value: 2 },
  { key: "large", value: 2 },
  { key: "think", value: 2 },
  { key: "version", value: 2 },
  { key: "single", value: 2 },
  { key: "tree", value: 2 },
  { key: "Cloud", value: 1 },
  { key: "Generator", value: 1 },
  { key: "Works", value: 1 },
  { key: "positioning", value: 1 },
  { key: "overlap", value: 1 },
  { key: "available", value: 1 },
  { key: "GitHub", value: 1 },
  { key: "open", value: 1 },
  { key: "source", value: 1 },
  { key: "license", value: 1 },
  { key: "d3cloud", value: 1 },
  { key: "Note", value: 1 },
  { key: "code", value: 1 },
  { key: "converting", value: 1 },
  { key: "text", value: 1 },
  { key: "rendering", value: 1 },
  { key: "final", value: 1 },
  { key: "output", value: 1 },
  { key: "requires", value: 1 },
  { key: "additional", value: 1 },
  { key: "development", value: 1 },
  { key: "quite", value: 1 },
  { key: "slow", value: 1 },
  { key: "hundred", value: 1 },
  { key: "run", value: 1 },
  { key: "asynchronously", value: 1 },
  { key: "configurable", value: 1 },
  { key: "size", value: 1 },
  { key: "makes", value: 1 },
  { key: "animate", value: 1 },
  { key: "stuttering", value: 1 },
  { key: "recommended", value: 1 },
  { key: "always", value: 1 },
  { key: "use", value: 1 },
  { key: "animations", value: 1 },
  { key: "prevents", value: 1 },
  { key: "browsers", value: 1 },
  { key: "event", value: 1 },
  { key: "loop", value: 1 },
  { key: "blocking", value: 1 },
  { key: "placing", value: 1 },
  { key: "incredibly", value: 1 },
  { key: "important", value: 1 },
  { key: "Attempt", value: 1 },
  { key: "place", value: 1 },
  { key: "point", value: 1 },
  { key: "usually", value: 1 },
  { key: "near", value: 1 },
  { key: "middle", value: 1 },
  { key: "somewhere", value: 1 },
  { key: "central", value: 1 },
  { key: "horizontal", value: 1 },
  { key: "line", value: 1 },
  { key: "intersects", value: 1 },
  { key: "one", value: 1 },
  { key: "along", value: 1 },
  { key: "increasing", value: 1 },
  { key: "spiral", value: 1 },
  { key: "Repeat", value: 1 },
  { key: "intersections", value: 1 },
  { key: "found", value: 1 },
  { key: "hard", value: 1 },
  { key: "part", value: 1 },
  { key: "making", value: 1 },
  { key: "efficiently", value: 1 },
  { key: "According", value: 1 },
  { key: "Jonathan", value: 1 },
  { key: "Feinberg", value: 1 },
  { key: "Wordle", value: 1 },
  { key: "uses", value: 1 },
  { key: "combination", value: 1 },
  { key: "boxes", value: 1 },
  { key: "quadtrees", value: 1 },
  { key: "achieve", value: 1 },
  { key: "reasonable", value: 1 },
  { key: "speeds", value: 1 },
  { key: "Glyphs", value: 1 },
  { key: "JavaScript", value: 1 },
  { key: "isnt", value: 1 },
  { key: "way", value: 1 },
  { key: "precise", value: 1 },
  { key: "glyph", value: 1 },
  { key: "shapes", value: 1 },
  { key: "via", value: 1 },
  { key: "DOM", value: 1 },
  { key: "except", value: 1 },
  { key: "perhaps", value: 1 },
  { key: "SVG", value: 1 },
  { key: "fonts", value: 1 },
  { key: "Instead", value: 1 },
  { key: "hidden", value: 1 },
  { key: "canvas", value: 1 },
  { key: "element", value: 1 },
  { key: "Retrieving", value: 1 },
  { key: "many", value: 1 },
  { key: "batch", value: 1 },
  { key: "Sprites", value: 1 },
  { key: "initial", value: 1 },
  { key: "performed", value: 1 },
  { key: "using", value: 1 },
  { key: "doesnt", value: 1 },
  { key: "copy", value: 1 },
  { key: "appropriate", value: 1 },
  { key: "position", value: 1 },
  { key: "representing", value: 1 },
  { key: "advantage", value: 1 },
  { key: "involves", value: 1 },
  { key: "relevant", value: 1 },
  { key: "rather", value: 1 },
  { key: "previous", value: 1 },
  { key: "Somewhat", value: 1 },
  { key: "surprisingly", value: 1 },
  { key: "lowlevel", value: 1 },
  { key: "hack", value: 1 },
  { key: "made", value: 1 },
  { key: "tremendous", value: 1 },
  { key: "difference", value: 1 },
  { key: "constructing", value: 1 },
  { key: "compressed", value: 1 },
  { key: "blocks", value: 1 },
  { key: "1bit", value: 1 },
  { key: "32bit", value: 1 },
  { key: "integers", value: 1 },
  { key: "thus", value: 1 },
  { key: "reducing", value: 1 },
  { key: "number", value: 1 },
  { key: "checks", value: 1 },
  { key: "memory", value: 1 },
  { key: "times", value: 1 },
  { key: "fact", value: 1 },
  { key: "turned", value: 1 },
  { key: "beat", value: 1 },
  { key: "quadtree", value: 1 },
  { key: "everything", value: 1 },
  { key: "tried", value: 1 },
  { key: "areas", value: 1 },
  { key: "font", value: 1 },
  { key: "sizes", value: 1 },
  { key: "primarily", value: 1 },
  { key: "needs", value: 1 },
  { key: "test", value: 1 },
  { key: "per", value: 1 },
  { key: "whereas", value: 1 },
  { key: "compare", value: 1 },
  { key: "every", value: 1 },
  { key: "overlaps", value: 1 },
  { key: "slightly", value: 1 },
  { key: "Another", value: 1 },
  { key: "possibility", value: 1 },
  { key: "merge", value: 1 },
  { key: "fairly", value: 1 },
  { key: "though", value: 1 },
  { key: "compared", value: 1 },
  { key: "analagous", value: 1 },
  { key: "mask", value: 1 },
  { key: "essentially", value: 1 },
  { key: "ORing", value: 1 },
  { key: "block", value: 1 },
];

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.querySelector(".canvas").getContext("2d");
  const chart = new Chart(ctx, {
    type: "wordCloud",
    data: {
      labels: words.map((d) => d.key),
      datasets: [
        {
          label: "",
          data: words.map((d) => 10 + d.value * 10),
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Word Cloud",
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});
