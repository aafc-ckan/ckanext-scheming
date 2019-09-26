/***
temp home for experimental code
*/

function changeLang( lang ){
   if (lang == "fr"){
      //$("#langFr").addClass("hidden");
      //$("#langEn").removeClass("hidden");
      console.log("now in fr branch");
   }
   else{
      //$("#langEn").addClass("hidden");
      //$("#langFr").removeClass("hidden");
   }
   console.log("switched to language: " +  lang);
}

$('#langEn').click(changeLang("fr"));
$('#langFr').click(changeLang("en"));
