let lastSection = null;

function loadPage(page) {
  const mainContent = document.getElementById('main-content');
  
  if (mainContent) {
    // Add 'pages/' before the page to fetch files from the 'pages' folder: - fetch('pages/' + page + '.html')
    fetch(page + '.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then((data) => {
        // Create a new section for the new content
        const newSection = document.createElement('section');
        newSection.classList.add('section');
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
        const errorSection = document.createElement('section');
        errorSection.classList.add('section');
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

// function loadContent(page) {
//   const mainContent = document.getElementById('main-content');
  
//   if (mainContent) {
//     fetch(page + '.html')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Content not found');
//         }
//         return response.text();
//       })
//       .then((data) => {
//         // Create a new section for the new content
//         const newSection = document.createElement('section');
//         newSection.classList.add('section');
//         newSection.innerHTML = data;

//         // If there is already a section, replace it
//         if (lastSection) {
//           lastSection.replaceWith(newSection);
//         } else {
//           // Prepend the new content if no previous section exists
//           mainContent.prepend(newSection);
//         }

//         // Update the reference to the most recent section
//         lastSection = newSection;
//       })
//       .catch((error) => {
//         // Display an error message if the content is not found
//         const errorSection = document.createElement('section');
//         errorSection.classList.add('section');
//         errorSection.innerHTML = `<p>Error: ${error.message}</p>`;

//         // If there is already a section, replace it
//         if (lastSection) {
//           lastSection.replaceWith(errorSection);
//         } else {
//           mainContent.prepend(errorSection);
//         }

//         // Update the reference to the most recent section
//         lastSection = errorSection;
//       });
//   }
// }

/*
// Sample content for each section
const contentMap = {
    home: "<p>Welcome to the homepage!</p>",
    about: "<p>About us: We provide web design services.</p>",
    services: "<p>Our services include responsive design, development, and more.</p>",
    contact: "<p>Contact us at example@domain.com.</p>",
    link1: "<p>Details about Link 1: Lorem ipsum dolor sit amet.</p>",
    link2: "<p>Details about Link 2: Consectetur adipiscing elit.</p>",
    link3: "<p>Details about Link 3: Quisque vehicula, tortor eget.</p>"
};

// Function to load content into the main content area
function loadContent(section) {
    const mainContent = document.getElementById('side-content');
    mainContent.innerHTML = contentMap[section] || "<p>Content not found!</p>";
}
*/