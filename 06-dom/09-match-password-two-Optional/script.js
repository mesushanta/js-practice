/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
      elpwd1.classList.add('error');
      elpwd2.classList.add('error');
    }
    else {
      elpwd1.classList.remove('error');
      elpwd2.classList.remove('error');
    }
  });

})();
