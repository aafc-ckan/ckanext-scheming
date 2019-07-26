/***
place holder
*/
function switchToInternal(){
        $("#group-Open-Data-Release-Criteria").addClass("hidden");
        $("input#field-jurisdiction").val("N/A");
        $("input#field-access_restriction").val("N/A");
        $("select#field-access_to_information") .val("false");  
        console.log("switched to internal");
}

function switchToOpenGovernment(){
        $("#group-Open-Data-Release-Criteria").removeClass("hidden");
        $("input#field-jurisdiction").val("");
        $("input#field-access_restriction").val("");
        $("select#field-access_to_information") .val("");  
        console.log("switched to open gov");
}


function conditionalShow(){
	var selected = $(this).val();
	if(selected == "internal")
          //$("#group-Open-Data-Release-Criteria").addClass("hidden");
	  switchToInternal();
	else
          //$("#group-Open-Data-Release-Criteria").removeClass("hidden");
	  switchToOpenGovernment();

}
//$("#group-Open-Data-Release-Criteria").addClass("hidden");
$('#field-publication').change(conditionalShow);
$('#ctrl-Optional-Dataset-Information').addClass("collapsed");
$('#ctrl-Optional-Inventory-Information').addClass("collapsed");
switchToInternal();
