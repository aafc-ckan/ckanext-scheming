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
        $("select#field-access_to_information").val("false");
	$("select#field-license_id").val("aafc-dsa");
	$("#field-date_published").val("1970-01-01");
	$("#field-subject option[value='other']").prop("selected", true);
        console.log("switched to internal");
}

function switchToOpenGovernment(){
        $("#group-Open-Data-Release-Criteria").removeClass("hidden");
        $("select#field-access_to_information").val("");
	$("select#field-license_id").val("");
	$("select#field-license_id option[value='aafc-dsa']").hide();
	$("#field-date_published").val(getToday());
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
if (window.location.pathname.endsWith("new")){
   if (pub_type == "open_government")
      switchToOpenGovernment();
   else
      switchToInternal();
}
