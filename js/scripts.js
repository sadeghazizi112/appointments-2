$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var purpose = $("input#purpose").val();
    var date = $("input#date").val();
    var start = $("input#start").val();
    var end = $("input#end").val();

    $(".name").text(nameInput);
    $(".purpose").text(purposeInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    event.preventDefault();
    
    $("#appointmentconfirm").show();

    event.preventDefault();
  });
});
