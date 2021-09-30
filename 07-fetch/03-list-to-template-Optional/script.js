/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  async function getApiData() {
      fetch('http://localhost:3000/heroes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let html = '';
        data.forEach(movie =>   {
          html += `
            <li class="hero">
                <h4 class="title">
                    <strong class="name">${movie.name}</strong>
                    <em class="alter-ego">${movie.alterEgo}</em>
                </h4>
                <p class="powers">${movie.abilities}</p>
            </li>
          `
        });

        console.log(html);
        document.getElementById('target').innerHTML = html;
      })
  }

  document.getElementById('run').addEventListener('click', getApiData);

})();
