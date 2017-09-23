((cities) => {
  let typingTimer;
  const input = document.getElementById('autocomplete-input');
  input.onkeyup = ((ev) => {
    clearTimeout(typingTimer);
    const value = ev.target.value;
    typingTimer = setTimeout(() => {
      const results = cities.filter(city => (city.toLowerCase().includes(value.toLowerCase())));
      console.log(results);
    }, 500);
  });
})(__AUTOCOMPLETE__.cities);
