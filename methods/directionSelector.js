$(document).ready(function () {
  //direction
  $("#direction-selector").append("<option value='rtl'>راست به چپ</option>");
  $("#direction-selector").append("<option value='ltr'>چپ به راست</option>");

  $("#direction-selector").val("rtl");

  $("#direction-selector").change(function () {
    var dir = $(this).val();
    if (dir === "rtl") {
      $("#stylesheet2").attr("href", "./styles/RightDirection.css");
    } else {
      $("#stylesheet2").attr("href", "./styles/LeftDirection.css");
    }
  });
});
