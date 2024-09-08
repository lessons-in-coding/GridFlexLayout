## Code Overview

The code is designed to load new content dynamically into an HTML element (with id="main-content") when the user clicks on different links or pages. It fetches the HTML from external files (like home.html, item1.html, etc.) and displays them. The code ensures that only one new section of content shows at a time, replacing the last section that was added.

## Key Concepts

1.	Variables:
	•	let lastSection = null;: This variable is used to keep track of the most recent content section that was added to the page. Initially, it’s null because no content has been loaded yet.
2.	Functions:
	•	There are two main functions: loadPage(page) and loadContent(page). Both functions do similar things: they load new content based on the page parameter and display it inside the main-content element.
3.	Main Steps in the Function:
	•	Check if main-content exists: The function first checks whether the element with the ID main-content exists in the DOM (Document Object Model). This is the container where new content will be displayed.
	•	Fetching the Content: It uses fetch() to retrieve an external HTML file (page.html). For example, if you call loadPage('home'), it will try to load home.html.
	•	Handling Errors: If the page cannot be loaded (for example, if the file doesn’t exist), an error message is shown.
	•	Replacing the Content: The code adds the new content in a <section> element, and if there is already a section loaded (tracked by lastSection), it replaces the old section with the new one.
	•	Storing the Latest Section: After displaying the new content, it updates lastSection so that the next time new content is loaded, it knows which section to replace.

## Code Explanation in Detail

### 1. let lastSection = null;

This variable is used to remember the last section of content displayed on the page. Initially, it’s set to null because no content has been loaded yet.

### 2. function loadPage(page) {

This function is responsible for loading a new HTML page and displaying it.

	•	const mainContent = document.getElementById('main-content');
This grabs the element with id="main-content". This is the container where the new content will be placed.
	•	if (mainContent) {
This checks whether the main-content element exists in the page before trying to load any new content. If the element doesn’t exist, the function won’t proceed.
	•	fetch(page + '.html')
This is where the function attempts to load the file, such as home.html or item1.html. It appends the .html extension to the page parameter, so when you call loadPage('home'), it fetches home.html.
	•	.then((response) => {
This waits for the HTML file to be fetched. The response object contains information about whether the file was successfully retrieved.
	•	if (!response.ok) { throw new Error('Page not found'); }
This checks if the fetch was successful. If not, it throws an error which will be handled later.
	•	.then((data) => {
This takes the content (HTML) from the fetched file and stores it in the data variable.
	•	const newSection = document.createElement('section');
Here, a new <section> element is created to hold the content from the fetched file. The content is added to this section using the innerHTML property.
	•	if (lastSection) { lastSection.replaceWith(newSection); }
If there’s already content displayed (lastSection is not null), the old content is replaced with the new section using the replaceWith() method.
	•	mainContent.prepend(newSection);
If there is no previous section, the new section is added at the top of main-content.
	•	lastSection = newSection;
After displaying the new content, the lastSection is updated to reference the newly loaded section. This way, when new content is loaded next time, the function knows what to replace.
	•	.catch((error) => {
If there is any error (like the page doesn’t exist), this block catches the error and displays an error message inside a newly created section.

### 3. function loadContent(page) {

This function is identical to loadPage(page) in structure and behavior. It fetches a different kind of content (like content.html), but the overall logic of replacing content and handling errors is the same.

## In Summary:

	•	Purpose: The code dynamically loads and replaces sections of content from external files (e.g., home.html, item1.html). Only one section is visible at a time, and the newest section always replaces the previous one.
	•	Key Concepts:
	•	fetch(): Used to retrieve external files.
	•	replaceWith(): Used to replace old content with new content.
	•	innerHTML: Used to add the HTML content fetched from the file into the page.
	•	Error Handling: If the file doesn’t exist, an error message is shown instead of breaking the page.