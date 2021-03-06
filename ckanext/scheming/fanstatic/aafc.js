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
	$("select#field-drf_core_responsibilities option[value='non_applicable']").remove();
        $("#group-Open-Data-Release-Criteria").addClass("hidden");
        $("select#field-access_to_information").val("false");
	$("select#field-license_id").val("aafc-dsa");
	$("#field-date_published").val("1970-01-01");
	if($("select#field-subject option[value='other']").length == 0)
	    $("select#field-subject").append('<option id="field-subject-other" value="other">Other</option>')
	$("#field-subject option[value='other']").prop("selected", true);
        console.log("switched to internal");
}

function switchToOpenGovernment(){
	$("select#field-drf_core_responsibilities option[value='non_applicable']").remove();
        $("#group-Open-Data-Release-Criteria").removeClass("hidden");
        $("select#field-license_id option[value='aafc-dsa']").remove();
        //Only apply placeholder values for new records
        if (current_path.indexOf("/new") != -1) {
            $("select#field-access_to_information").val("false");
            $("select#field-license_id").val("");
            //$("#field-date_published").val(getToday());
            $("#field-date_published").val('YYYY-MM-DD');
        }
        $("select#field-subject option[value='other']").remove(); 
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
var current_path = window.location.pathname; 
//if (current_path.endsWith("new") || current_path.includes("/edit/")){
if (current_path.indexOf("/new") != -1 || current_path.indexOf("/edit/") != -1 ){
   if (pub_type == "open_government")
      switchToOpenGovernment();
   else
      switchToInternal();
}
