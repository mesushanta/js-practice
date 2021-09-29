/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const el = document.querySelector('.material figure img');
    const original = el.getAttribute('src');
    const hovered = el.getAttribute('data-hover');
    el.addEventListener('mouseover', function(event) {
      el.setAttribute('src', hovered)
    });
    el.addEventListener('mouseleave', function(event) {
      el.setAttribute('src', original)
    });
})();
