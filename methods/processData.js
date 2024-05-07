(function ($) {
  $.fn.processData = function (xml) {
    const xml2 = $.parseXML(xml);
    var items = $(xml2).find("Receive");

    items.each(function () {
      var SenderName = $(this).find("Sender").attr("SenderName");
      var RoleName = $(this).find("Sender").attr("RoleName");
      var EntityTypeName = $(this).find("EntityTypeName").text();
      var Title = $(this).find("Title").text();
      var ActionName = $(this).find("ActionCode").attr("ActionName");
      var EntityNumber = $(this).find("EntityNumber").text();
      var ReceiveDate = $(this).find("ReceiveDate").text();
      var FollowingType = $(this).find("FollowingType").text();
      var ID = $(this).attr("ReceiverCode"); //as uniqueKey

      // Create the card element
      var card = $('<div class="card mb-3 mt-3">');
      card.attr("uKey", ID);

      // Card header
      var checkbox = $('<input class="checked" type="checkbox">');
      var cardHeader = $('<div class="card-header">')
        .append($("<span>").text(SenderName))
        .prepend(checkbox);
      card.append(cardHeader);

      // Card body
      var cardBody = $('<div class="card-body">');
      cardBody.append($("<p>").text("نام نقش : " + RoleName));
      cardBody.append($("<p>").text("نام نوع موحودیت : " + EntityTypeName));
      cardBody.append($("<p>").text("عنوان : " + Title));
      cardBody.append($("<p>").text("نام اقدام : " + ActionName));
      cardBody.append($("<p>").text("شماره موجودیت : " + EntityNumber));
      cardBody.append($("<p>").text("تاریخ دریافت : " + ReceiveDate));
      cardBody.append($("<p>").text("نوع : " + FollowingType));
      card.append(cardBody);
      card.data("uniqueKey", ID);

      // Card footer with icon button
      var cardFooter = $('<div class="card-footer text-muted">');
      cardFooter.append(
        '<button class="btn-action"><i class="fa-solid fa-circle-info "></i></button>'
      );
      card.append(cardFooter);

      var popupContent = $('<div id="popup' + ID + '" class="popup">');
      popupContent.append(
        '<ul><li><a href="#" id="info_' +
          ID +
          '">نمایش کارد انتخاب شده</a></li><li><a href="#" id="remove_' +
          ID +
          '">حذف کارد انتخاب شده</a></li></ul>'
      );
      card.append(popupContent);

      // Append the card to container
      $("#card-container").append(card);

      //info button on popup
      $("#info_" + ID + "").click(function () {
        event.preventDefault();
        $(this).toggleClass("is-active");
        if ($(this).hasClass("is-active")) {
          $("#filteredResults").empty();

          var clickedElement = $(this).closest(".card").attr("ukey");

          var ID = $('.card[ukey="' + clickedElement + '"]').attr("ukey");
          var SenderName = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-header > span")
            .text();
          var RoleName = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:first")
            .text();
          var EntityTypeName = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:nth-child(2)")
            .text();
          var Title = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:nth-child(3)")
            .text();
          var ActionName = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:nth-child(4)")
            .text();
          var EntityNumber = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:nth-child(5)")
            .text();
          var ReceiveDate = $('.card[ukey="' + clickedElement + '"]')
            .find(".card-body > p:nth-child(6)")
            .text();
          var FollowingType = $('.card[ukey="' + clickedElement + '"]')
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
        } else {
          $("#filteredResults").empty();
        }
      });

      // Click on remove(second) icon button
      $("#remove_" + ID + "").click(function () {
        event.preventDefault();
        var currentID = $(this).closest(".card").data("uniqueKey"); // Get the uniqueKey

        // Remove rows
        $(".card").each(function () {
          if ($(this).attr("ukey") == currentID) {
            $(this).remove();
          }
        });
      });
    });
  };
})(jQuery);
