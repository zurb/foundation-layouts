$(document).ready(function() {   
   function splitCondition() {
     return ($(window).width() < 767);
   }
   
   var switched = false;
   $(window).bind("resize", function(e) {
     if (splitCondition() && !switched) {
       $("table.responsive").each(function(i, element) {
          splitTable($(element));
          switched = true;
        });
     }
   });
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.addClass("pinned");
		
		original.closest(".table-wrapper").append(copy);
		original.wrap("<div class='scrollable' />");
	}

});
