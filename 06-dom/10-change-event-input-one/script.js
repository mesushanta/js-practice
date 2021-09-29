/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  const el = document.getElementById('pass-one');
  el.setAttribute('maxlength', 10);
  el.addEventListener('keyup', function(e) {
    str_length = el.value.length;
    document.getElementById("counter").innerHTML= str_length + "/10";
  });

})();
