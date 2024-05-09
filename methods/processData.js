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
      var infoText = function (text) {
        return $("<p>").text(text);
      };
      cardBody.append(infoText("نام نقش : " + RoleName));
      cardBody.append(infoText("نام نوع موحودیت : " + EntityTypeName));
      cardBody.append(infoText("عنوان : " + Title));
      cardBody.append(infoText("نام اقدام : " + ActionName));
      cardBody.append(infoText("شماره موجودیت : " + EntityNumber));
      cardBody.append(infoText("تاریخ دریافت : " + ReceiveDate));
      cardBody.append(infoText("نوع : " + FollowingType));
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

          // Call the buildCard function
          var card = buildCard(clickedElement, infoText);

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

        // Remove all
        $(".card").each(function () {
          if ($(this).attr("ukey") == currentID) {
            $(this).remove();
          }
        });
      });
    });
  };
})(jQuery);
