/***
place holder
*/
function getToday(){
	var now = new Date(); 
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	return  now.getFullYear()+"-"+(month)+"-"+(day) ;
}


function switchToInternal(){
        $("#group-Open-Data-Release-Criteria").addClass("hidden");
        $("input#field-jurisdiction").val("N/A");
        $("input#field-access_restriction").val("N/A");
        $("select#field-access_to_information").val("false");
	$("select#field-license_id").val("aafc-dsa");
	$("#field-date_published").val(getToday())
        console.log("switched to internal");
}

function switchToOpenGovernment(){
        $("#group-Open-Data-Release-Criteria").removeClass("hidden");
        $("input#field-jurisdiction").val("");
        $("input#field-access_restriction").val("");
        $("select#field-access_to_information").val("");
	$("select#field-license_id").val("");
	$("#field-date_published").val(getToday())
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

var pub_type = $("#field-publication").val();
if (pub_type == "open_government")
   switchToOpenGovernment();
else
   switchToInternal();
