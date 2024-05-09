function buildCard(clickedElement, infoText) {
  var $checkedCard = $('.card[ukey="' + clickedElement + '"] > .card-body');

  var SenderName = $(
    '.card[ukey="' + clickedElement + '"] > .card-header > span'
  ).text();
  var RoleName = $checkedCard.find("p:first").text();
  var EntityTypeName = $checkedCard.find("p:nth-child(2)").text();
  var Title = $checkedCard.find("p:nth-child(3)").text();
  var ActionName = $checkedCard.find("p:nth-child(4)").text();
  var EntityNumber = $checkedCard.find("p:nth-child(5)").text();
  var ReceiveDate = $checkedCard.find("p:nth-child(6)").text();
  var FollowingType = $checkedCard.find("p:nth-child(7)").text();

  var card = $('<div class="card mb-3 mt-3">');
  card.attr("uKey", clickedElement);

  var cardHeader = $('<div class="card-header">').append(
    $("<span>").text(SenderName)
  );
  card.append(cardHeader);

  var cardBody = $('<div class="card-body">');
  cardBody.append(infoText(RoleName));
  cardBody.append(infoText(EntityTypeName));
  cardBody.append(infoText(Title));
  cardBody.append(infoText(ActionName));
  cardBody.append(infoText(EntityNumber));
  cardBody.append(infoText(ReceiveDate));
  cardBody.append(infoText(FollowingType));
  card.append(cardBody);
  card.data("uniqueKey", clickedElement);

  return card;
}
