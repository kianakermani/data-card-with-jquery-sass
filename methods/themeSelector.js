$(document).ready(function () {
  $("#theme-selector").append("<option value='light'>روشن</option>");
  $("#theme-selector").append("<option value='dark'>تیره</option>");

  $("#theme-selector").val("light");

  $("#theme-selector").change(function () {
    var theme = $(this).val();
    if (theme === "dark") {
      $("#stylesheet").attr("href", "./styles/dark.css");
    } else {
      $("#stylesheet").attr("href", "./styles/light.css");
    }
  });
});
