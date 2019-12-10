/***
for selection of dropdown  
 Program Alignment Architecture to DRF Core Responsibilities
change the option of dropdown
 DRF Program Inventory

*/

var igl_reasons=[];
var dic = {}
$('ul.mdpd').each( 
    function(index) { 
        var chidren = this.childNodes;
        var parent = this.id;
        dic[parent] = [];
		//Condition for IE compatibility
		if (window.NodeList && !NodeList.prototype.forEach){
			NodeList.prototype.forEach = Array.prototype.forEach
		}
        chidren.forEach ( function (data){
           var id = data.id;
           var label = data.innerText;
	   var newItem = {};
	   newItem[id] = label;
           dic[parent].push(newItem);
        });
    }

 );

var paa2drfData = dic;

//build ineligilibity reasons
$("select#field-ineligibility_reason option").each(
	function(){
		var val =  $(this).val();
		var text = $(this).text();
		if( val != '' && val != 'na')
		{
			var item = {}
			item[val] = text
			igl_reasons.push(item);
		}
	}
)


//initialize the child dropdown based on current UI is new dataset or edit dataset
var current = window.location.pathname;
if (current.indexOf("/new") != -1){
	$('#field-drf_program_inventory').empty();
} else if (current.indexOf("/edit/") != -1){
	var savedParentValue= $('#field-drf_core_responsibilities').val()
	var savedChildValue = $('#field-drf_program_inventory').val()
	$('#field-drf_program_inventory').empty();
	buildChildrenDropdown(savedParentValue);
	$('#field-drf_program_inventory').val(savedChildValue)
    console.log("Edit!:" + current );
    console.log("Edit,saved child:" + savedChildValue + ",parent:"+ savedParentValue);
}



$("#field-drf_core_responsibilities").change(
    function(){
        $("#field-drf_program_inventory").empty();
        var parent = $(this).children("option:selected").val();
	buildChildrenDropdown(parent);
    }
);

function buildChildrenDropdown( parent){
        var children = paa2drfData[parent];
        children.forEach ( function(item) {
            var val = Object.keys(item)[0];
            var label = item[val];
            $("#field-drf_program_inventory").append(
                $('<option></option>').val(val).html(label)
            );
        })
}

//Ineligibility Reasons
//hide N/A option initially when page renders
$(function(){
  $("select#field-ineligibility_reason option[value='na']").detach();
});
//dynamically change the ineligibility reasons
$("select#field-elegible_for_release").change(function(){
    var currentSel = $(this).children("option:selected").val();
    $("#field-ineligibility_reason").empty();
    if (currentSel == "false"){
      igl_reasons.forEach(
        function(item){
            var val = Object.keys(item)[0];
            var label = item[val];
            $("#field-ineligibility_reason").append(
                $('<option></option>').val(val).html(label)
            );
        }
       )
    }
    else{
      $("#field-ineligibility_reason").append(
                $('<option></option>').val("na").html("N/A")
      );    	       
    }
  }
)

//dynamically change procured data organization name
$("#field-procured_data").change(
    function(){
        var selection = $(this).children("option:selected").val();
        if (selection == "false") {
                $("#field-procured_data_organization_name").val("N/A");
                $('#field-procured_data_organization_name').attr('readonly', true);
        } else {
                $("#field-procured_data_organization_name").val("");
                $('#field-procured_data_organization_name').attr('readonly', false);
    }
});
