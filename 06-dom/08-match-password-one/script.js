/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const checkpwd = (pwd1,pwd2) => {
      if(pwd1 != pwd2) {
        return false
      }
      return true;
    }

    const el = document.getElementById('run');
    const elpwd1 = document.getElementById('pass-one');
    const elpwd2 = document.getElementById('pass-two');
    const original_border = elpwd1.style.borderColor;
    el.addEventListener('click', function() {
      var pwd1 = elpwd1.value;
      var pwd2 = elpwd2.value;
      if(!checkpwd(pwd1,pwd2)) {
        elpwd1.style.borderColor = "red";
        elpwd2.style.borderColor = "red";
      }
      else {
        elpwd1.style.borderColor = original_border;
        elpwd2.style.borderColor = original_border;
      }
    });

})();
