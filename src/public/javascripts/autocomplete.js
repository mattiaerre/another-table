(({ cities, delay }) => {
  let timer;
  const input = document.getElementById('autocomplete-input');
  input.onkeyup = ev => {
    clearTimeout(timer);
    const value = ev.target.value;
    timer = setTimeout(() => {
      const results = cities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      console.log(results);
    }, delay);
  };
})(window.__AUTOCOMPLETE__);
