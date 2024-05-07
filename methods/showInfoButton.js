$.fn.showInfoButton = function () {
  $(this).toggleClass("is-active");
  if ($(this).hasClass("is-active")) {
    var checkedCards = []; 
    $("#filteredResults").empty();

    $("input[type='checkbox']:checked").each(function () {
      var checkedUkey = $(this).closest(".card").attr("ukey");
      checkedCards.push(checkedUkey);

      var ID = $('.card[ukey="' + checkedUkey + '"]').attr("ukey");
      var SenderName = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-header > span")
        .text();
      var RoleName = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:first")
        .text();
      var EntityTypeName = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(2)")
        .text();
      var Title = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(3)")
        .text();
      var ActionName = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(4)")
        .text();
      var EntityNumber = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(5)")
        .text();
      var ReceiveDate = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(6)")
        .text();
      var FollowingType = $('.card[ukey="' + checkedUkey + '"]')
        .find(".card-body > p:nth-child(7)")
        .text();

      var card = $('<div class="card mb-3 mt-3">');
      card.attr("uKey", ID);

      var cardHeader = $('<div class="card-header">').append(
        $("<span>").text(SenderName)
      );
      card.append(cardHeader);

      // Card body
      var cardBody = $('<div class="card-body">');
      cardBody.append($("<p>").text(RoleName));
      cardBody.append($("<p>").text(EntityTypeName));
      cardBody.append($("<p>").text(Title));
      cardBody.append($("<p>").text(ActionName));
      cardBody.append($("<p>").text(EntityNumber));
      cardBody.append($("<p>").text(ReceiveDate));
      cardBody.append($("<p>").text(FollowingType));
      card.append(cardBody);
      card.data("uniqueKey", ID);

      $("#filteredResults").append(card);
      window.scrollTo(0, document.body.scrollHeight);
    });
  } else {
    $("#filteredResults").empty();
  }
};
