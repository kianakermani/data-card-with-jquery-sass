(function ($) {
  $.fn.showPopup = function () {
    var parent = $(this).parent();
    // Find the sibling element popup
    var content = parent.siblings(".popup");
    $(".popup").hide();
    content.toggle();

    content
      .css({
        right: buttonOffset.right + "px",
        top: buttonOffset.top + "px",
      })
      .toggle();
  };

  $.fn.closePopup = function (event) {
    if (!$(event.target).closest(".btn-action").length) {
      $(".popup").hide();
    }
  };
})(jQuery);
