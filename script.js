document.addEventListener('DOMContentLoaded', function () {
  // Get the form and input elements
  const form = document.getElementById('preferences-form');
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Load and apply user preferences from cookies
  if (localStorage.getItem('fontSize')) {
    const savedFontSize = localStorage.getItem('fontSize');
    document.body.style.fontSize = savedFontSize + 'px';
    fontSizeInput.value = savedFontSize;
  }

  if (localStorage.getItem('fontColor')) {
    const savedFontColor = localStorage.getItem('fontColor');
    document.body.style.color = savedFontColor;
    fontColorInput.value = savedFontColor;
  }

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user preferences from form
    const newFontSize = fontSizeInput.value;
    const newFontColor = fontColorInput.value;

    // Apply the new preferences to the page
    document.body.style.fontSize = newFontSize + 'px';
    document.body.style.color = newFontColor;

    // Store preferences in cookies
    localStorage.setItem('fontSize', newFontSize);
    localStorage.setItem('fontColor', newFontColor);
  });
});