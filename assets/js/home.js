'use strict';
/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// 'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//   // Scroll-related functionality for header and go-top button
//   const header = document.querySelector("[data-header]");
//   const goTopBtn = document.querySelector("[data-go-top]");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= 400) {
//       header.classList.add("active");
//       goTopBtn.classList.add("active");
//     } else {
//       header.classList.remove("active");
//       goTopBtn.classList.remove("active");
//     }
//   });

//   // Table of Contents (ToC) functionality
//   const tocButton = document.getElementById('toc-button');
//   const tocList = document.getElementById('toc-list');
//   const tocItems = document.getElementById('toc-items');

//   if (tocButton && tocList && tocItems) { // Check if elements exist to avoid errors
//     // Toggle visibility of the ToC
//     tocButton.addEventListener('click', function () {
//       if (tocList.style.display === 'none' || tocList.style.display === '') {
//         tocList.style.display = 'block';  // Show the ToC
//       } else {
//         tocList.style.display = 'none';   // Hide the ToC
//       }
//     });

//     // Get all headings (h2, h3, h4) for the ToC
//     const headings = document.querySelectorAll('h2, h3, h4');
//     headings.forEach((heading, index) => {
//       const tocItem = document.createElement('li');
//       const tocLink = document.createElement('a');

//       // Create an ID for each heading if it doesn't have one
//       if (!heading.id) {
//         heading.id = `heading-${index}`;
//       }

//       tocLink.href = `#${heading.id}`;
//       tocLink.textContent = heading.textContent;

//       tocItem.appendChild(tocLink);
//       tocItems.appendChild(tocItem);
//     });
//   }
// });

