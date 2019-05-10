/***
place holder
*/
function switchToInternal(){
        $("#group-Open-Government-Dataset-Release-Information").addClass("hidden");
        $("input#field-jurisdiction").val("N/A");
        $("input#field-access_restriction").val("N/A");
        $("select#field-access_to_information") .val("false");  
        console.log("switched to internal");
}

function conditionalShow(){
	var selected = $(this).val();
	if(selected == "internal")
          //$("#group-Open-Government-Dataset-Release-Information").addClass("hidden");
	  switchToInternal();
	else
          $("#group-Open-Government-Dataset-Release-Information").removeClass("hidden");

}
$("#group-Open-Government-Dataset-Release-Information").addClass("hidden");
$('#field-publication').change(conditionalShow);
$('#ctrl-Optional-Dataset-Information').addClass("collapsed");
$('#ctrl-Optional-Inventory-Information').addClass("collapsed");
