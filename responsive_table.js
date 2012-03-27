$(document).ready(function() {   
  var switched = false;
  var updateTables = function() {
    console.info("window width == ", $(window).width());
    if (($(window).width() < 767) && !switched ){
      switched = true;
      $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    return false;
  }
   
  $(window).load(updateTables);
  $(window).bind("resize", updateTables);
   
	
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
