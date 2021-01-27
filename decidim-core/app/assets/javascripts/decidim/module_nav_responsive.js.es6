/**
 * Responsive module navigation.
 */
$(() => {
  var $nav = $('.d-module-nav__content');
  var $btn = $('.d-module-nav__more');
  var $vlinks = $('.d-module-nav__links');
  var $hlinks = $('.d-module-nav__hidden-content ul');
  var breaks = [];

  function updateNav() {

    var availableSpace =  $nav.width() - $btn.width() - 20;

    // The visible list is overflowing the nav
    if($vlinks.width() > availableSpace) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children().last().prependTo($hlinks);

      // Show the dropdown btn
      if($btn.hasClass('is-hidden')) {
        $btn.removeClass('is-hidden');
      }

    // The visible list is not overflowing
    } else {

      // There is space for another item in the nav
      if(availableSpace > breaks[breaks.length-1]) {

        // Move the item to the visible list
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();
      }

      // Hide the dropdown btn if hidden list is empty
      if(breaks.length < 1) {
        $btn.addClass('is-hidden');
      }
    }

    // Keep counter updated

    // Recur if the visible list is still overflowing the nav
    if($vlinks.width() > availableSpace) {
      updateNav();
    }

  }

  // Window listeners

  $(window).on("resize", function() {
      updateNav();
  });

  $(document).ready(function() {
    updateNav();
});

  updateNav();

});