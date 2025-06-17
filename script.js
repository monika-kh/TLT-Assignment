// Array of dropdown configurations: each has a 'selected' text element and a corresponding 'dropdown' list
const dropdowns = [
  { selected: 'selectedText', dropdown: 'dropdownList' },
  { selected: 'countrySelectedText', dropdown: 'countryDropdownList' },
  { selected: 'stateSelectedText', dropdown: 'stateDropdownList' },
  { selected: 'deptSelectedText', dropdown: 'deptDropdownList' }
];

// Loop through each dropdown configuration
dropdowns.forEach(({ selected, dropdown }) => {
  const selectedElement = document.getElementById(selected);     // The clickable area to show/hide dropdown
  const dropdownElement = document.getElementById(dropdown);     // The dropdown list
  const listItems = dropdownElement.querySelectorAll('li');      // All <li> items inside the dropdown

  // Toggle dropdown visibility when the selected element is clicked
  selectedElement.addEventListener('click', () => {
    dropdownElement.classList.toggle('hidden');   // Show/hide the dropdown
    selectedElement.classList.toggle('active');   // Add/remove active class for styling
  });

  // Handle option selection from the dropdown list
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Update selected text with clicked item's text
      selectedElement.querySelector('.selected-text').textContent = item.textContent;

      // Close the dropdown and mark the selected item visually
      dropdownElement.classList.add('hidden');
      selectedElement.classList.add('active');

      // Remove 'selected-option' class from all items and add it to the clicked one
      listItems.forEach(li => li.classList.remove('selected-option'));
      item.classList.add('selected-option');
    });
  });

  // Close the dropdown if the user clicks outside of it
  document.addEventListener('click', (e) => {
    const clickedOutside = !selectedElement.contains(e.target) && !dropdownElement.contains(e.target);
    if (clickedOutside) {
      dropdownElement.classList.add('hidden');        // Hide the dropdown
      selectedElement.classList.remove('active');     // Remove active styling
    }
  });
});
