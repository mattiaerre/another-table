(({ cities, delay }) => {
  let timer;
  const input = document.getElementById('autocomplete-input');
  input.onkeyup = ev => {
    clearTimeout(timer);
    const { value } = ev.target;
    timer = setTimeout(() => {
      const results = cities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      console.log(results); // eslint-disable-line no-console
    }, delay);
  };
})(window.__AUTOCOMPLETE__);
