$(document).ready(function() {
  $("#formation").submit(function(event) {
    var ladyInput = $("input#lady").val();
    var guyInput = $("input#guy").val();
    var actionInput = $("input#action").val();
    var itemInput = $("input#item").val();
    var monsterInput = $("input#monster").val();
    var verbInput = $("input#verb").val();

    event.preventDefault();
    $(".lady").text(ladyInput);
    $(".guy").text(guyInput);
    $(".action").text(actionInput);
    $(".item").text(itemInput);
    $(".monster").text(monsterInput);
    $(".verb").text(verbInput);

    $("#tragedy").show();
  });

});
