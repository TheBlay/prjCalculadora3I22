// This is a JavaScript file



$(document).on("click", "#somar", function(){
    
   
    
            var x1 = parseInt( $("#valor1").val());
            var x2 = parseInt( $("#valor2").val());
            
   
            
            var resX = x1 + x2;
            $("#res").val(resX);
            
    
    });