(function(){


	var robot = new Robot(config);

	$(document).on("change","#FileInputTag",function(){

		var reader = new FileReader();
		reader.readAsText(document.getElementById("FileInputTag").files[0]);
		reader.onload = function(){

			readConfig();
			
			robot.write(this.result);
		};
	});

	function readConfig(){

		$("#Name").text(config.name);

		if(config.sideBar){

			$("#SideBar").css("display","block");
		}
	};

})();