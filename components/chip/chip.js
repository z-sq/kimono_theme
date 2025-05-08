(function(Drupal) {

  Drupal.behaviors.chip = {
    attach(context) {
      console.log('@todo Replace me with the real JS behavior.');
      context.querySelectorAll('.chip--dismissable').forEach((chip) => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('chip--dismissed');
        })
      });
    },
  };

})(Drupal);
