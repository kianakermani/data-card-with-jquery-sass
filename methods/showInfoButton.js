$.fn.showInfoButton = function () {
  var infoText = function (text) {
    return $("<p>").text(text);
  };
  $(this).toggleClass("is-active");

  if ($(this).hasClass("is-active")) {
    var checkedCards = [];
    $("#filteredResults").empty();

    $("input[type='checkbox']:checked").each(function () {
      var clickedElement = $(this).closest(".card").attr("ukey");
      checkedCards.push(clickedElement);

      // Call the buildCard function
      var card = buildCard(clickedElement, infoText);

      $("#filteredResults").append(card);
      window.scrollTo(0, document.body.scrollHeight);
    });
  } else {
    $("#filteredResults").empty();
  }
};
