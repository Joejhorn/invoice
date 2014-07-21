jQuery(document).ready(function(){
const headerTo = "To: ";
const headerDate = "Date: ";
const headerNumberofPeople = "Number of People: ";
const headerDelivery = "Delivery Time: ";
var num;

$("button").on("click", function(){

var nameBox = $("#name").val();
var name = headerTo + nameBox;
$("#customerName p").text(name);


var dateBox = $("#edate").val();
var date = headerDate + dateBox;
$("#deliveryDate").text(date);

var peopleBox = $("#people").val();
var people = headerNumberofPeople + peopleBox;
$("#deliveryPeople").text(people);

var timeBox = $("#time").val();
var time = headerDelivery+ timeBox;
$("#deliveryTime").text(time);

var pppBox = $("#ppp").val();

if (document.getElementById("Sand").checked){
	$("#item1").text("Assorted Sandwiches");
	$("#item2").text("Assorted Salad and Dressing");
}

if (document.getElementById("TriChick").checked){
	$("#item1").text("Tri Tip and Grilled Chicken");
	$("#item2").text("Assorted Rolls and Feta Spread and Horseradish");
}

if (document.getElementById("Custom").checked){
	var line1 = window.prompt("Please enter line #1");
		$("#item1").text(line1);
	var line2 = window.prompt("Please enter line #2");
		$("#item2").text(line2);

	var line3 = window.prompt("Please enter line #3");
		if (line3) {
			$("#item3").text(line3);
		}
	var line4 = window.prompt("Please enter line #4");
		if (line4) {
			$("#item4").text(line4);
		}
}


var deliveryFee = $("#deliveryFee").val();

if(document.getElementById("taxYN").checked) {
num = ((peopleBox * pppBox) + +deliveryFee)* 1.07725;
}
else {
num = ((peopleBox * pppBox) + +deliveryFee );	
}

var totalPaid = num.toFixed(2);

var ppp = "Total Due and Paid $" + pppBox + " per person with Delivery Fee is $ " + totalPaid;

$("#summaryPaid").text(ppp);

$("#input").hide();
$("fieldset").hide();
});


});

