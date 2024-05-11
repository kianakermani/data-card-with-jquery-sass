$(document).ready(function() {
    // Add options to the theme selector
    $("#theme-selector").append("<option value='light'>روشن</option>");
    $("#theme-selector").append("<option value='dark'>تیره</option>");
  
    // Set the default theme
    $("#theme-selector").val("light");
  
    // Handle theme change
    $("#theme-selector").change(function () {
      var theme = $(this).val();
  
      // Toggle classes based on the selected theme
      if (theme === "light") {
        $("body").removeClass("dark-theme");
      } else {
        $("body").addClass("dark-theme");
      }
    });
  });