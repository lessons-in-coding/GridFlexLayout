document.addEventListener('DOMContentLoaded', function () {
    const tocButton = document.getElementById('toc-button');
    const tocList = document.getElementById('toc-list');
    const tocItems = document.getElementById('toc-items');
  
    // Toggle visibility of the Table of Contents
    tocButton.addEventListener('click', function () {
      //console.log('ToC button clicked'); // Debugging output
      if (tocList.style.display === 'none' || tocList.style.display === '') {
        tocList.style.display = 'block';  // Show the ToC
      } else {
        tocList.style.display = 'none';   // Hide the ToC
      }
    });
  
    // Get all headings (h2, h3, h4) for the table of contents
    const headings = document.querySelectorAll('h2, h3, h4');
    headings.forEach((heading, index) => {
      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
  
      // Create an ID for each heading if it doesn't have one
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
  
      tocLink.href = `#${heading.id}`;
      tocLink.textContent = heading.textContent;
  
      tocItem.appendChild(tocLink);
      tocItems.appendChild(tocItem);
    });
  });

  /*
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
  
    // Function to perform search
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();
  
      // Clear previous highlights and results
      clearHighlights();
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
  
      if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
      }
  
      // Get all page content (paragraphs, headings, etc.)
      const pageContent = document.body.querySelectorAll('h1, h2, h3, p, li');
      let found = false;
      let resultText = '';
      const uniqueElements = new Set(); // Track unique elements
  
      // Search through the content
      pageContent.forEach((element, index) => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm) && !uniqueElements.has(text)) { // Check for uniqueness
          uniqueElements.add(text); // Add the unique element text to the set
          found = true;
          highlightTerm(element, searchTerm, index);
          resultText += `<a href="#found-${index}" class="result-link">Found in: "${element.textContent.slice(0, 50)}..."</a><br/>`;
        }
      });
  
      // If found, show the result
      if (found) {
        searchResults.style.display = 'block';
        searchResults.innerHTML = resultText;
      } else {
        alert('No results found.');
      }
  
      // Clear the input field after search
      searchInput.value = '';
    }
  
    // Function to highlight the search term and make it a clickable link
    function highlightTerm(element, searchTerm, index) {
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      element.innerHTML = element.textContent.replace(regex, `<span class="highlight" id="found-${index}">$1</span>`);
    }
  
    // Function to clear previous highlights
    function clearHighlights() {
      const highlighted = document.querySelectorAll('.highlight');
      highlighted.forEach(span => {
        span.outerHTML = span.innerHTML; // Replace span with original text
      });
    }
  
    // Add event listener for button click
    searchButton.addEventListener('click', function () {
      performSearch();
    });
  
    // Add event listener for Enter key press
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  });
  */