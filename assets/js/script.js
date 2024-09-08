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

function loadContent(page) {
  const mainContent = document.getElementById('main-content');
  
  if (mainContent) {
    fetch(page + '.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Content not found');
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
        // Display an error message if the content is not found
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

// Each Unique Design
// Function to load HTML content into the main area
// function loadPage(page) {
//     fetch(`${page}.html`)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('main-content').innerHTML = data;
//         })
//         .catch(error => console.error('Error loading page:', error));
// }

/*
function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            
            // Example: Apply specific logic for the "services" page
            if (page === 'services') {
                applyServicesPageLogic();
            }
        })
        .catch(error => console.error('Error loading page:', error));
}

function applyServicesPageLogic() {
    // Additional JavaScript logic specific to the services page
    console.log("Services page loaded!");
}
*/

/*
//   Updated JavaScript for Loading Multiple Sections one after the other
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
  
    if (mainContent) {
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
  
          // Prepend the new section (add it before the existing content)
          const firstChild = mainContent.firstChild;
          mainContent.insertBefore(newSection, firstChild);  // Insert new section at the top
        })
        .catch((error) => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `${error.message}`;
          mainContent.insertBefore(errorMessage, mainContent.firstChild);
        });
    }
  }

  
  function loadContent(page) {
    const mainContent = document.getElementById('main-content');
  
    if (mainContent) {
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
  
          // Prepend the new section (add it before the existing content)
          const firstChild = mainContent.firstChild;
          mainContent.insertBefore(newSection, firstChild);  // Insert new section at the top
        })
        .catch((error) => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `${error.message}`;
          mainContent.insertBefore(errorMessage, mainContent.firstChild);
        });
    }
  }
  */


  /*
//   Updated JavaScript to Keep Existing Content and Show New Content at the Top
  function loadPage(page) {
    const mainContent = document.getElementById('main-content');
  
    if (mainContent) {
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
  
          // Prepend the new content to the main content area (keeps existing content)
          mainContent.prepend(newSection);
        })
        .catch((error) => {
          // Display an error message if the page is not found
          const errorSection = document.createElement('section');
          errorSection.innerHTML = `<p>Error: ${error.message}</p>`;
          mainContent.prepend(errorSection);
        });
    }
  }
  
  function loadContent(page) {
    const mainContent = document.getElementById('main-content');
  
    if (mainContent) {
      fetch(page + '.html')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Content not found');
          }
          return response.text();
        })
        .then((data) => {
          // Create a new section for the new content
          const newSection = document.createElement('section');
          newSection.classList.add('section');
          newSection.innerHTML = data;
  
          // Prepend the new content to the main content area (keeps existing content)
          mainContent.prepend(newSection);
        })
        .catch((error) => {
          // Display an error message if the content is not found
          const errorSection = document.createElement('section');
          errorSection.innerHTML = `<p>Error: ${error.message}</p>`;
          mainContent.prepend(errorSection);
        });
    }
  }
*/