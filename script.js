const dropdowns = [
  { selected: 'selectedText', dropdown: 'dropdownList' },
  { selected: 'countrySelectedText', dropdown: 'countryDropdownList' },
  { selected: 'stateSelectedText', dropdown: 'stateDropdownList' },
  { selected: 'deptSelectedText', dropdown: 'deptDropdownList' }
];

dropdowns.forEach(({ selected, dropdown }) => {
  const selectedElement = document.getElementById(selected);
  const dropdownElement = document.getElementById(dropdown);
  const listItems = dropdownElement.querySelectorAll('li');

  selectedElement.addEventListener('click', () => {
    dropdownElement.classList.toggle('hidden');
    selectedElement.classList.toggle('active');
  });

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      selectedElement.querySelector('.selected-text').textContent = item.textContent;
      dropdownElement.classList.add('hidden');
      selectedElement.classList.add('active');
      listItems.forEach(li => li.classList.remove('selected-option'));
      item.classList.add('selected-option');
    });
  });

  document.addEventListener('click', (e) => {
    if (!selectedElement.contains(e.target) && !dropdownElement.contains(e.target)) {
      dropdownElement.classList.add('hidden');
      selectedElement.classList.remove('active');
    }
  });
});
