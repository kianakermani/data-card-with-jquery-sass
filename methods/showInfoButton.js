$.fn.showInfoButton = function () {
  $(this).toggleClass("is-active");
  if ($(this).hasClass("is-active")) {
    var checkedCards = [];
    $("#filteredResults").empty();

    $("input[type='checkbox']:checked").each(function () {
      var infoText = function (text) {
        return $("<p>").text(text);
      };
      var checkedUkey = $(this).closest(".card").attr("ukey");
      checkedCards.push(checkedUkey);

      var $checkedCard = $('.card[ukey="' + checkedUkey + '"] > .card-body');

      var SenderName = $(
        '.card[ukey="' + checkedUkey + '"] > .card-header > span'
      ).text();

      var RoleName = $checkedCard.find("p:first").text();
      var EntityTypeName = $checkedCard.find("p:nth-child(2)").text();
      var Title = $checkedCard.find("p:nth-child(3)").text();
      var ActionName = $checkedCard.find("p:nth-child(4)").text();
      var EntityNumber = $checkedCard.find("p:nth-child(5)").text();
      var ReceiveDate = $checkedCard.find("p:nth-child(6)").text();
      var FollowingType = $checkedCard.find("p:nth-child(7)").text();

      var card = $('<div class="card mb-3 mt-3">');
      card.attr("uKey", checkedUkey);

      var cardHeader = $('<div class="card-header">').append(
        $("<span>").text(SenderName)
      );
      card.append(cardHeader);

      // Card body
      var cardBody = $('<div class="card-body">');
      cardBody.append(infoText(RoleName));
      cardBody.append(infoText(EntityTypeName));
      cardBody.append(infoText(Title));
      cardBody.append(infoText(ActionName));
      cardBody.append(infoText(EntityNumber));
      cardBody.append(infoText(ReceiveDate));
      cardBody.append(infoText(FollowingType));
      card.append(cardBody);
      card.data("uniqueKey", checkedUkey);

      $("#filteredResults").append(card);
      window.scrollTo(0, document.body.scrollHeight);
    });
  } else {
    $("#filteredResults").empty();
  }
};
