//your JS code here. If required.
function onDOMLoaded() {
    // Create a new paragraph element
    var paragraph = document.createElement('p');
    // Set the text content of the paragraph
    paragraph.textContent = "DOM load success";
    // Append the paragraph to the body
    document.body.appendChild(paragraph);
}

// Add event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);