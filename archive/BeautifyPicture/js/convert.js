(function(){


    $("button").click(function(){

        var action = $(this).attr("data-action");


        var canvasConfiguration = {

            canvasX: 0,
            canvasY: 0,
            canvasWidth:  0,
            canvasHeight: 0
        };

        // 获取 Canvas 画布
        var Canvas = document.getElementById("Canvas");


        // 创建一张图片
        var img = new Image();
        img.src = "../images/" + $(this).attr("data-img-name"); // 图片像素需要在 1200*1800之内
        img.onload = function(){
            
            // 设置宽高(注意：是 Canvas 设置宽高，而不是 CanvasContext ！！！！ )
            // Canvas.width = canvasConfiguration.canvasWidth = $("#OriginalImg").width() ;
            // Canvas.height = canvasConfiguration.canvasHeight = $("#OriginalImg").height() ;
            Canvas.width = canvasConfiguration.canvasWidth = this.width;
            Canvas.height = canvasConfiguration.canvasHeight = this.height ;

            // 获取 Canvas 上下文环境并存入配置中
            var CanvasContext = Canvas.getContext("2d");

            $("#AsciiPre").addClass("hidden");
            $("#AsciiImg").addClass("hidden");
            $("#Canvas").addClass("hidden");
            if(action=='inverse'){

                $("#Canvas").removeClass("hidden");
                window.CanvasConvertPkg.inverseImgRGB(this, canvasConfiguration,CanvasContext);
            }if(action=='grey'){

                $("#Canvas").removeClass("hidden");
                window.CanvasConvertPkg.convertImgToGrey(this, canvasConfiguration,CanvasContext);
            }else if(action=='ascii-text'){

                $("#AsciiPre").removeClass("hidden");
                window.CanvasConvertPkg.convertImgToAscii.start(this, canvasConfiguration,CanvasContext, false);
            }else if(action=='ascii-img'){

                $("#AsciiImg").removeClass("hidden");
                window.CanvasConvertPkg.convertImgToAscii.start(this, canvasConfiguration,CanvasContext, true);
            }

        };

    });
    
})();