(() => {
  const button = document.getElementById('find-a-table');
  button.addEventListener('click', () => {
    const partySelect = document.getElementById('party');
    const party = partySelect.options[partySelect.selectedIndex].value;

    const date = document.getElementById('date').value;

    const timeSelect = document.getElementById('time');
    const time = timeSelect.options[timeSelect.selectedIndex].value;

    const search = document.getElementById('search').value;

    console.log('party:', party, 'date:', date, 'time:', time, 'search:', search);
  });
})();
