$(function() {
  function calculator(e) {
    e.preventDefault();
    var period = parseFloat($("#period").val());
    var duration = parseFloat($("#duration").val());
    var flight = $("#flight");
    var flightCost = parseFloat($("#flight").val());
    var discount = $("#discount");
    var cost = 0;

    if (discount.is(":checked")) {
      if (flight.is(":checked")) {
        cost = period + duration + flightCost;
        cost = cost - cost * 0.1;
      } else {
        cost = period + duration;
        cost = cost - cost * 0.1;
      }
    } else {
      if (flight.is(":checked")) {
        cost = period + duration + flightCost;
      } else {
        cost = period + duration;
      }
    }

    var costList = $(".cost").find("span");
    $(".cost").show();
    costList.text(cost);
  }

  $("#calc").on("click", calculator);
});
