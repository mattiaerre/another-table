(() => {
  const dollars = {
    1: '$',
    2: '$$',
    3: '$$$',
    4: '$$$$'
  };

  fetch('/search/api')
    .then(response => response.json())
    .then((data) => {
      const ul = document.getElementsByClassName('search-result')[0];
      data
        .map((element) => {
          const li = document.createElement('li');
          li.setAttribute('data-id', element.id);
          const html = `
          <div class="restaurant-profile">
            <img src="${element.image_url}" />
          </div>
          <div>
            <h2>${element.name}</h2>
            <span>${dollars[element.price]}</span>
          </div>
          `;
          li.innerHTML = html;
          ul.appendChild(li);
          return false;
        });
    });
})();
