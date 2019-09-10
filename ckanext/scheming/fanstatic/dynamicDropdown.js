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
        console.log("index:" +index);
        var chidren = this.childNodes;
        var parent = this.id;
        dic[parent] = [];
        chidren.forEach ( function (data){
           var id = data.id;
           var label = data.innerText;
           //dic[parent].push({"value":id,"lable":label});
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
			item = {}
			item[val] = text
			igl_reasons.push(item);
		}
	}
)


//initialize the child dropdown based on current UI is new dataset or edit dataset
var current = window.location.pathname;
if (current.endsWith("new")){
	$('#field-drf_program_inventory').empty();
} else if (current.startsWith('/dataset/edit/')){
	var savedParentValue= $('#field-program_alignment_architecture_to_drf_core_responsibilities').val()
	var savedChildValue = $('#field-drf_program_inventory').val()
	$('#field-drf_program_inventory').empty();
	buildChildrenDropdown(savedParentValue);
	$('#field-drf_program_inventory').val(savedChildValue)
    console.log("Edit!:" + current );
    console.log("Edit,saved child:" + savedChildValue + ",parent:"+ savedParentValue);
}



$("#field-program_alignment_architecture_to_drf_core_responsibilities").change(
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
    //console.log(currentSel);
  }
)

