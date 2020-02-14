$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var purpose = $("input#purpose").val();
    var date = $("input#date").val();
    var start = $("input#start").val();
    var end = $("input#end").val();

event.preventDefault();
console.log(name);
console.log(purpose);
console.log(date);
console.log(start);
console.log(end);

    $(".nameconfirm").append(name);
    $(".purposeconfirm").append(purpose);
    $(".dateconfirm").append(date);
    $(".startconfirm").append(start);
    $(".endconfirm").append(end);

    $("#appointmentconfirm").show();

  });
});
