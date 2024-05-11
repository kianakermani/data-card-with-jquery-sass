$(document).ready(function () {
  //direction
  $("#direction-selector").append("<option value='rtl'>راست به چپ</option>");
  $("#direction-selector").append("<option value='ltr'>چپ به راست</option>");

  $("#direction-selector").val("rtl");

  $("#direction-selector").change(function () {
    var theme = $(this).val();

    if (theme === "rtl") {
      $("body").removeClass("lDirection");
    } else {
      $("body").addClass("lDirection");
    }
  });
});
