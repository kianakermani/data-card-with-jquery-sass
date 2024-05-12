$(document).ready(function () {
  //direction
  $("#direction-selector").append("<option value='rtl'>راست به چپ</option>");
  $("#direction-selector").append("<option value='ltr'>چپ به راست</option>");

  $("body").addClass("rDirection");
  $("#direction-selector").val("rtl");

  $("#direction-selector").change(function () {
    var dir = $(this).val();

    if (dir === "rtl") {
      $("body").removeClass("lDirection");
    } else {
      $("body").addClass("lDirection");
    }
  });
});
