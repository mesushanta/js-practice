/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click", getAge);

    function getAge() {
      var today = new Date();
      var year = document.getElementById('dob-year').value;
      var month = document.getElementById('dob-month').value;
      var day = document.getElementById('dob-day').value;

      var dob = new Date(year, month, day);

      var ageDifMs = today.getTime() - dob.getTime();
      var ageDate = new Date(ageDifMs);
      var age = Math.abs(ageDate.getUTCFullYear() - 1970);
      
      alert("Your age is: " + age);

    }

})();
