$(document).ready(function() {
	
	if ($(window).width() < 767) {
		$("table.responsive").each(function(i, element) {
			splitTable($(element));
		});
	}
	
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
