/***
place holder
*/
function conditionalShow(){
	var selected = $(this).val();
	if(selected == "internal")
          $("#group-Open-Government-Dataset-Release-Information").addClass("hidden");
	else
          $("#group-Open-Government-Dataset-Release-Information").removeClass("hidden");

}
$("#group-Open-Government-Dataset-Release-Information").addClass("hidden");
$('#field-publication').change(conditionalShow);
$('#ctrl-Optional-Dataset-Information').addClass("collapsed");
$('#ctrl-Optional-Inventory-Information').addClass("collapsed");
