document.addEventListener("DOMContentLoaded", function () {
  // Template Customizer
  let icon = document.querySelector(".icons");
  let icon2 = document.querySelector(".icons2");
  const isDarkTheme = document.body.classList.contains("dark-theme");

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

  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    var closeButton = document.getElementById("modal-close-btn");
    closeButton.classList.toggle("btn-close-white");
    // Call function to update chart text color
    updateChartTextColor(isDarkTheme);
    console.log("Icon Clicked");
  });

  icon2.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    var closeButton = document.getElementById("modal-close-btn");
    closeButton.classList.toggle("btn-close-white");
    // Call function to update chart text color
    updateChartTextColor(isDarkTheme);
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

  let swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
    direction: "vertical",
    mousewheel: true,
    slidePreView: true,
  });

  let swiper2 = new Swiper(".swiper2", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    direction: "horizontal",
    mousewheel: true,
    slidePreView: 1,
  });

  // Get all elements with the card class
  var cards = document.querySelectorAll(".card");

  // Iterate over each card
  cards.forEach(function (card) {
    // Add event listener for mouseenter to show modal
    card.addEventListener("mouseenter", function () {
      // Add data-bs-toggle and data-bs-target attributes to the card
      card.setAttribute("data-bs-toggle", "modal");
      card.setAttribute("data-bs-target", "#exampleModal");
    });

    // Add event listener for mouseleave to remove modal attributes
    card.addEventListener("mouseleave", function () {
      // Remove data-bs-toggle and data-bs-target attributes from the card
      card.removeAttribute("data-bs-toggle");
      card.removeAttribute("data-bs-target");
    });

    // Add event listener for the "Submit Request" button within each card
    var submitButton = card.querySelector(".sub-btn");
    if (submitButton) {
      submitButton.addEventListener("mouseenter", function () {
        // Remove data-bs-toggle and data-bs-target attributes from the card
        card.removeAttribute("data-bs-toggle");
        card.removeAttribute("data-bs-target");
      });

      submitButton.addEventListener("mouseleave", function () {
        card.setAttribute("data-bs-toggle", "modal");
        card.setAttribute("data-bs-target", "#exampleModal");
      });

      submitButton.addEventListener("click", function (event) {
        // Prevent default navigation behavior
        event.preventDefault();
        // Navigate to page.html
        window.location.href = "page.html";
      });
    }
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
  const ctx33 = document.querySelector(".Chart33");
  const ctx34 = document.querySelector(".Chart34");
  const ct = document.querySelector(".canvas1").getContext("2d");
  const ctx = document.querySelector(".canvas").getContext("2d");

  // Generate Chart 1
  const chart1 = new Chart(ctx1, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 2
  const chart2 = new Chart(ctx2, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 3
  const chart3 = new Chart(ctx3, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 4
  const chart4 = new Chart(ctx4, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 5
  const chart5 = new Chart(ctx5, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 6
  const chart6 = new Chart(ctx6, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 7
  const chart7 = new Chart(ctx7, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 8
  const chart8 = new Chart(ctx8, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 9
  const chart9 = new Chart(ctx9, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 10
  const chart10 = new Chart(ctx10, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 11
  const chart11 = new Chart(ctx11, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 12
  const chart12 = new Chart(ctx12, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 13
  const chart13 = new Chart(ctx13, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 14
  const chart14 = new Chart(ctx14, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 15
  const chart15 = new Chart(ctx15, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 16
  const chart16 = new Chart(ctx16, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 17
  const chart17 = new Chart(ctx17, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 18
  const chart18 = new Chart(ctx18, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 19
  const chart19 = new Chart(ctx19, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 20
  const chart20 = new Chart(ctx20, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 21
  const chart21 = new Chart(ctx21, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 22
  const chart22 = new Chart(ctx22, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 23
  const chart23 = new Chart(ctx23, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 24
  const chart24 = new Chart(ctx24, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 25
  const chart25 = new Chart(ctx25, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 26
  const chart26 = new Chart(ctx26, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  }); // Generate Chart 27

  const chart27 = new Chart(ctx27, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 28
  const chart28 = new Chart(ctx28, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 29
  const chart29 = new Chart(ctx29, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 30
  const chart30 = new Chart(ctx30, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 31
  const chart31 = new Chart(ctx31, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 32
  const chart32 = new Chart(ctx32, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });
  // Generate Chart 33
  const chart33 = new Chart(ctx33, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate Chart 10
  const chart34 = new Chart(ctx34, {
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
      plugins: {
        legend: {
          labels: {
            color: isDarkTheme ? "white" : "#000", // set legend text color to white
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set y-axis labels color to white
          },
        },
        x: {
          ticks: {
            color: isDarkTheme ? "white" : "#000", // set x-axis labels color to white
          },
        },
      },
      tooltips: {
        bodyColor: isDarkTheme ? "white" : "#000", // set tooltip text color to white
      },
    },
  });

  // Generate WordCloud Chart 1
  const words1 = [
    { key: "mainland", value: 4 },
    { key: "bahrain", value: 9 },
    { key: "january", value: 9 },
    { key: "nabataeans", value: 3 },
    { key: "mecca", value: 4 },
    { key: "17H6L", value: 1 },
    { key: "reasons", value: 7 },
    { key: "political", value: 10 },
    { key: "unknown", value: 5 },
    { key: "ruler", value: 2 },
    { key: "arabia", value: 5 },
    { key: "tarout", value: 5 },
    { key: "shifted", value: 2 },
    { key: "islamic", value: 5 },
    { key: "island", value: 8 },
    { key: "saudi", value: 5 },
    { key: "however", value: 8 },
    { key: "hussein", value: 8 },
    { key: "bin known", value: 7 },
    { key: "developed", value: 5 },
    { key: "empire", value: 6 },
    { key: "nejd", value: 5 },
    { key: "fahd", value: 10 },
    { key: "led", value: 8 },
    { key: "arabian", value: 3 },
    { key: "government", value: 3 },
    { key: "royal", value: 4 },
    { key: "became", value: 10 },
    { key: "ibn", value: 2 },
    { key: "eye", value: 2 },
    { key: "hejaz", value: 8 },
    { key: "saud", value: 10 },
    { key: "dilmun", value: 3 },
    { key: "war", value: 4 },
    { key: "support", value: 4 },
    { key: "role", value: 10 },
    { key: "rule", value: 6 },
    { key: "sharif", value: 1 },
    { key: "bc", value: 8 },
    { key: "arab", value: 2 },
    { key: "revolt", value: 4 },
    { key: "centre", value: 4 },
    { key: "highly", value: 7 },
    { key: "large", value: 7 },
    { key: "kingdom", value: 9 },
    { key: "tribal", value: 1 },
    { key: "century", value: 9 },
    { key: "al", value: 4 },
    { key: "foreign", value: 10 },
    { key: "jeddah", value: 3 },
    { key: "17H61", value: 4 },
  ];

  const wordCloud1 = new Chart(ct, {
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
      color: isDarkTheme ? "#ffffff" : "#000000", // Set text color
    },
  });

  // Generate WordCloud Chart 2
  const words = [
    { key: "mainland", value: 4 },
    { key: "bahrain", value: 9 },
    { key: "january", value: 9 },
    { key: "nabataeans", value: 3 },
    { key: "mecca", value: 4 },
    { key: "17H6L", value: 1 },
    { key: "reasons", value: 7 },
    { key: "political", value: 10 },
    { key: "unknown", value: 5 },
    { key: "ruler", value: 2 },
    { key: "arabia", value: 5 },
    { key: "tarout", value: 5 },
    { key: "shifted", value: 2 },
    { key: "islamic", value: 5 },
    { key: "island", value: 8 },
    { key: "saudi", value: 5 },
    { key: "however", value: 8 },
    { key: "hussein", value: 8 },
    { key: "bin known", value: 7 },
    { key: "developed", value: 5 },
    { key: "empire", value: 6 },
    { key: "nejd", value: 5 },
    { key: "fahd", value: 10 },
    { key: "led", value: 8 },
    { key: "arabian", value: 3 },
    { key: "government", value: 3 },
    { key: "royal", value: 4 },
    { key: "became", value: 10 },
    { key: "ibn", value: 2 },
    { key: "eye", value: 2 },
    { key: "hejaz", value: 8 },
    { key: "saud", value: 10 },
    { key: "dilmun", value: 3 },
    { key: "war", value: 4 },
    { key: "support", value: 4 },
    { key: "role", value: 10 },
    { key: "rule", value: 6 },
    { key: "sharif", value: 1 },
    { key: "bc", value: 8 },
    { key: "arab", value: 2 },
    { key: "revolt", value: 4 },
    { key: "centre", value: 4 },
    { key: "highly", value: 7 },
    { key: "large", value: 7 },
    { key: "kingdom", value: 9 },
    { key: "tribal", value: 1 },
    { key: "century", value: 9 },
    { key: "al", value: 4 },
    { key: "foreign", value: 10 },
    { key: "jeddah", value: 3 },
    { key: "17H61", value: 4 },
  ];

  const wordCloud2 = new Chart(ctx, {
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
      color: isDarkTheme ? "#ffffff" : "#000000", // Set text color
    },
  });

  // Function to update chart text color based on theme
  function updateChartTextColor(isDarkTheme) {
    const chartOptions = {
      color: isDarkTheme ? "#ffffff" : "#000000", // Set color based on theme
    };

    // Update chart options for both charts
    // chart1
    chart1.options.plugins.legend.labels.color = chartOptions.color;
    chart1.options.scales.y.ticks.color = chartOptions.color;
    chart1.options.scales.x.ticks.color = chartOptions.color;
    // chart2
    chart2.options.plugins.legend.labels.color = chartOptions.color;
    chart2.options.scales.y.ticks.color = chartOptions.color;
    chart2.options.scales.x.ticks.color = chartOptions.color;

    // chart3
    chart3.options.plugins.legend.labels.color = chartOptions.color;
    chart3.options.scales.y.ticks.color = chartOptions.color;
    chart3.options.scales.x.ticks.color = chartOptions.color;

    // chart4
    chart4.options.plugins.legend.labels.color = chartOptions.color;
    chart4.options.scales.y.ticks.color = chartOptions.color;
    chart4.options.scales.x.ticks.color = chartOptions.color;

    // chart5
    chart5.options.plugins.legend.labels.color = chartOptions.color;
    chart5.options.scales.y.ticks.color = chartOptions.color;
    chart5.options.scales.x.ticks.color = chartOptions.color;

    // chart6
    chart6.options.plugins.legend.labels.color = chartOptions.color;
    chart6.options.scales.y.ticks.color = chartOptions.color;
    chart6.options.scales.x.ticks.color = chartOptions.color;

    // chart7
    chart7.options.plugins.legend.labels.color = chartOptions.color;
    chart7.options.scales.y.ticks.color = chartOptions.color;
    chart7.options.scales.x.ticks.color = chartOptions.color;

    // chart8
    chart8.options.plugins.legend.labels.color = chartOptions.color;
    chart8.options.scales.y.ticks.color = chartOptions.color;
    chart8.options.scales.x.ticks.color = chartOptions.color;

    // chart9
    chart9.options.plugins.legend.labels.color = chartOptions.color;
    chart9.options.scales.y.ticks.color = chartOptions.color;
    chart9.options.scales.x.ticks.color = chartOptions.color;

    // chart10
    chart10.options.plugins.legend.labels.color = chartOptions.color;
    chart10.options.scales.y.ticks.color = chartOptions.color;
    chart10.options.scales.x.ticks.color = chartOptions.color;

    // chart11
    chart11.options.plugins.legend.labels.color = chartOptions.color;
    chart11.options.scales.y.ticks.color = chartOptions.color;
    chart11.options.scales.x.ticks.color = chartOptions.color;

    // chart12
    chart12.options.plugins.legend.labels.color = chartOptions.color;
    chart12.options.scales.y.ticks.color = chartOptions.color;
    chart12.options.scales.x.ticks.color = chartOptions.color;

    // chart13
    chart13.options.plugins.legend.labels.color = chartOptions.color;
    chart13.options.scales.y.ticks.color = chartOptions.color;
    chart13.options.scales.x.ticks.color = chartOptions.color;

    // chart14
    chart14.options.plugins.legend.labels.color = chartOptions.color;
    chart14.options.scales.y.ticks.color = chartOptions.color;
    chart14.options.scales.x.ticks.color = chartOptions.color;

    // chart15
    chart15.options.plugins.legend.labels.color = chartOptions.color;
    chart15.options.scales.y.ticks.color = chartOptions.color;
    chart15.options.scales.x.ticks.color = chartOptions.color;

    // chart16
    chart16.options.plugins.legend.labels.color = chartOptions.color;
    chart16.options.scales.y.ticks.color = chartOptions.color;
    chart16.options.scales.x.ticks.color = chartOptions.color;

    // chart17
    chart17.options.plugins.legend.labels.color = chartOptions.color;
    chart17.options.scales.y.ticks.color = chartOptions.color;
    chart17.options.scales.x.ticks.color = chartOptions.color;

    // chart18
    chart18.options.plugins.legend.labels.color = chartOptions.color;
    chart18.options.scales.y.ticks.color = chartOptions.color;
    chart18.options.scales.x.ticks.color = chartOptions.color;

    // chart19
    chart19.options.plugins.legend.labels.color = chartOptions.color;
    chart19.options.scales.y.ticks.color = chartOptions.color;
    chart19.options.scales.x.ticks.color = chartOptions.color;

    // chart20
    chart20.options.plugins.legend.labels.color = chartOptions.color;
    chart20.options.scales.y.ticks.color = chartOptions.color;
    chart20.options.scales.x.ticks.color = chartOptions.color;

    // chart21
    chart21.options.plugins.legend.labels.color = chartOptions.color;
    chart21.options.scales.y.ticks.color = chartOptions.color;
    chart21.options.scales.x.ticks.color = chartOptions.color;

    // chart22
    chart22.options.plugins.legend.labels.color = chartOptions.color;
    chart22.options.scales.y.ticks.color = chartOptions.color;
    chart22.options.scales.x.ticks.color = chartOptions.color;

    // chart23
    chart23.options.plugins.legend.labels.color = chartOptions.color;
    chart23.options.scales.y.ticks.color = chartOptions.color;
    chart23.options.scales.x.ticks.color = chartOptions.color;

    // chart24
    chart24.options.plugins.legend.labels.color = chartOptions.color;
    chart24.options.scales.y.ticks.color = chartOptions.color;
    chart24.options.scales.x.ticks.color = chartOptions.color;

    // chart25
    chart25.options.plugins.legend.labels.color = chartOptions.color;
    chart25.options.scales.y.ticks.color = chartOptions.color;
    chart25.options.scales.x.ticks.color = chartOptions.color;

    // chart26
    chart26.options.plugins.legend.labels.color = chartOptions.color;
    chart26.options.scales.y.ticks.color = chartOptions.color;
    chart26.options.scales.x.ticks.color = chartOptions.color;

    // chart27
    chart27.options.plugins.legend.labels.color = chartOptions.color;
    chart27.options.scales.y.ticks.color = chartOptions.color;
    chart27.options.scales.x.ticks.color = chartOptions.color;

    // chart28
    chart28.options.plugins.legend.labels.color = chartOptions.color;
    chart28.options.scales.y.ticks.color = chartOptions.color;
    chart28.options.scales.x.ticks.color = chartOptions.color;

    // chart29
    chart29.options.plugins.legend.labels.color = chartOptions.color;
    chart29.options.scales.y.ticks.color = chartOptions.color;
    chart29.options.scales.x.ticks.color = chartOptions.color;

    // chart30
    chart30.options.plugins.legend.labels.color = chartOptions.color;
    chart30.options.scales.y.ticks.color = chartOptions.color;
    chart30.options.scales.x.ticks.color = chartOptions.color;

    // chart31
    chart31.options.plugins.legend.labels.color = chartOptions.color;
    chart31.options.scales.y.ticks.color = chartOptions.color;
    chart31.options.scales.x.ticks.color = chartOptions.color;

    // chart32
    chart32.options.plugins.legend.labels.color = chartOptions.color;
    chart32.options.scales.y.ticks.color = chartOptions.color;
    chart32.options.scales.x.ticks.color = chartOptions.color;

    // chart33
    chart33.options.plugins.legend.labels.color = chartOptions.color;
    chart33.options.scales.y.ticks.color = chartOptions.color;
    chart33.options.scales.x.ticks.color = chartOptions.color;

    // chart34
    chart34.options.plugins.legend.labels.color = chartOptions.color;
    chart34.options.scales.y.ticks.color = chartOptions.color;
    chart34.options.scales.x.ticks.color = chartOptions.color;

    wordCloud1.options.color = chartOptions.color;
    wordCloud2.options.color = chartOptions.color;

    chart1.update();
    chart2.update();
    chart3.update();
    chart4.update();
    chart5.update();
    chart6.update();
    chart7.update();
    chart8.update();
    chart9.update();
    chart10.update();
    chart11.update();
    chart12.update();
    chart13.update();
    chart14.update();
    chart15.update();
    chart16.update();
    chart17.update();
    chart18.update();
    chart19.update();
    chart20.update();
    chart21.update();
    chart22.update();
    chart23.update();
    chart24.update();
    chart25.update();
    chart26.update();
    chart27.update();
    chart28.update();
    chart29.update();
    chart30.update();
    chart31.update();
    chart32.update();
    chart33.update();
    chart34.update();
    wordCloud1.update();
    wordCloud2.update();
  }
});
