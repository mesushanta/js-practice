/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function updateData() {
      fetch('http://localhost:3000/heroes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let extra_data = new_hero();
        let id = data.length + 1;
        // console.log(id);
        let name = extra_data[0];
        let alterEgo = extra_data[1];
        let powers = extra_data[2].split(',');

        var newobj = {
          "id": id,
          "name": name,
          "alterEgo": alterEgo,
          "abilities": powers
        };

        data.push(newobj);
        console.log(data);
      })
  }

    const new_hero = () => {
      var name = document.getElementById('hero-name').value
      var alterEgo = document.getElementById('hero-alter-ego').value
      var powers = document.getElementById('hero-powers').value
      return [name, alterEgo, powers];
    }

    document.getElementById('run').addEventListener('click', updateData);

})();
