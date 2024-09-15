let lastSection = null;

function loadPage(page) {
  const mainContent = document.getElementById("main-content");

  if (mainContent) {
    // Add 'pages/' before the page to fetch files from the 'pages' folder: - fetch('pages/' + page + '.html')
    fetch(page + ".html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Page not found");
        }
        return response.text();
      })
      .then((data) => {
        // Create a new section for the new content
        const newSection = document.createElement("section");
        newSection.classList.add("section");
        newSection.innerHTML = data;

        // If there is already a section, replace it
        if (lastSection) {
          lastSection.replaceWith(newSection);
        } else {
          // Prepend the new content if no previous section exists
          mainContent.prepend(newSection);
        }

        // Update the reference to the most recent section
        lastSection = newSection;
      })
      .catch((error) => {
        // Display an error message if the page is not found
        const errorSection = document.createElement("section");
        errorSection.classList.add("section");
        errorSection.innerHTML = `<p>Error: ${error.message}</p>`;

        // If there is already a section, replace it
        if (lastSection) {
          lastSection.replaceWith(errorSection);
        } else {
          mainContent.prepend(errorSection);
        }

        // Update the reference to the most recent section
        lastSection = errorSection;
      });
  }
}

// ReadMore
function toggleReadMore(btn) {
  const parent = btn.parentElement; // Get the parent <p> element
  const moreText = parent.querySelector(".more-text"); // Find the .more-text within the parent <p>

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.textContent = " Read Less <<<";
    btn.style.color = "orange";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More >>>";
    btn.style.color = "purple";
  }
}
