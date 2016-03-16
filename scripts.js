var MainModule = {
	init: function() {
		$('#addMore').on('click', function(){
			var newdiv = $("<div>", {class: "block"});
			$("#item-container").append(newdiv);
		});
	},
	addBlocks: function(container, count, template){
		
	}
}

$(document).ready(function () {
    MainModule.init();
});