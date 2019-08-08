(function(){

	window.onload=function(){

		$(document).on("change", "#ImgInputTag", function(){

	　　　　	// 接收上传的文件
			var formData = new FormData();
		　　　formData.append("file", document.getElementById('ImgInputTag').files[0]);
			$("#ImgInputTag").val("");
            $("#AsciiPre").html("");
            $("#Label").text("loading...");

			$.ajax({

                type:  "post" ,
                url:   "api/upload.php",
                async: true,
                data: formData ,
                processData: false ,
                contentType: false ,
                success:function(data){

                    var response = JSON.parse(data);

                    if(response.code<0){

                        alert(response.msg);
                        return;
                    }

                    $("#OriginalImg").attr("src","../images/"+response.data.name);

                    $("#AsciiTextButton").removeAttr("disabled").attr("data-img-name",response.data.name);
                    $("#AsciiImgButton").removeAttr("disabled").attr("data-img-name",response.data.name);
                    $("#InverseButton").removeAttr("disabled").attr("data-img-name",response.data.name);
                    $("#GreyButton").removeAttr("disabled").attr("data-img-name",response.data.name);

                },
                error:function( e ){

                    alert(e);
                },
                complete:function(){
                    
                    $("#Label").text("Upload");
                }
            });



		});

	}





})();