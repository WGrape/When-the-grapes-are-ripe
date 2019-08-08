
(function(){

    window.CanvasConvertPkg = {

        inverseImgRGB: function(img, canvasConfiguration, CanvasContext){

            var canvasX = canvasConfiguration.canvasX,
                canvasY = canvasConfiguration.canvasY,
                canvasWidth = canvasConfiguration.canvasWidth,
                canvasHeight = canvasConfiguration.canvasHeight;

            // 绘制图片
            CanvasContext.drawImage(img, canvasX, canvasY);
            
            //获取绘制的图片对象以及元素点的数组
            var _img = CanvasContext.getImageData(canvasX, canvasY, canvasWidth, canvasHeight);
            var pixelData = _img.data;

            // 反转 RGBA
            for (var i = 0, len = pixelData.length; i < len; i += 4) {

                // R
                pixelData[i] = 255-pixelData[i];
                
                // G
                pixelData[i+1] = 255-pixelData[i+1];
                
                // B
                pixelData[i+2] = 255-pixelData[i+2];
                
                // A ( alpha ) 
                pixelData[i+3]=255;
            }

            CanvasContext.putImageData(_img, canvasX, canvasY);
        },


        convertImgToGrey: function(img, canvasConfiguration, CanvasContext){

            var canvasX = canvasConfiguration.canvasX,
                canvasY = canvasConfiguration.canvasY,
                canvasWidth = canvasConfiguration.canvasWidth,
                canvasHeight = canvasConfiguration.canvasHeight;

            // 绘制图片
            CanvasContext.drawImage(img, canvasX, canvasY);
            
            //获取绘制的图片对象以及元素点的数组
            var _img = CanvasContext.getImageData(canvasX, canvasY, canvasWidth, canvasHeight);
            var pixelData = _img.data;

            // 转成灰度图片
            for (var i = 0, len = pixelData.length; i < len; i += 4) {

                var avg=(pixelData[i]+pixelData[i+1]+pixelData[i+2])/3;
                pixelData[i]=avg;
                pixelData[i+1]=avg;
                pixelData[i+2]=avg;
            }

            CanvasContext.putImageData(_img, canvasX, canvasY);
        },


        convertImgToAscii: {


            // 生成 Ascii 文字
            getAsciiTextOfImg : function(img, canvasConfiguration, CanvasContext){

                var canvasX = canvasConfiguration.canvasX,
                    canvasY = canvasConfiguration.canvasY,
                    canvasWidth = canvasConfiguration.canvasWidth,
                    canvasHeight = canvasConfiguration.canvasHeight;

                // 暂时不知道是否做限制
                // if(canvasWidth>1200||canvasHeight>1800){

                    // alert("1200*1800像素之内的图片才能转成ASCII文本");
                    // return ;
                // }


                CanvasContext.drawImage(img, canvasX, canvasY);

                //获取图片对象以及元素点的数组
                var _img = CanvasContext.getImageData(canvasX, canvasY, canvasWidth, canvasHeight);
                var pixelData = _img.data;
                

                //转换灰度图
                var arr=["M","N","H","Q","$","O","C","?","7",">","!",":","–",";","."];

                var i, j, result="", len = pixelData.length, dividing=canvasWidth*4; // 因为图片的每个px有4个小像素点

                for(i=0;i<canvasHeight;++i){

                    for (j = i*canvasWidth*4; j < (canvasWidth*4)*(i+1); j += 4) {

                        var avg = (pixelData[j]+pixelData[j+1]+pixelData[j+2])/3 ;

                        // result.push(arr[ Math.floor(avg/22) ]); // 21 和 22 是最合适的
                        result += arr[ Math.floor(avg/22)];
                    }

                    // console.log("from "+ i*canvasWidth*4 + " to " + (canvasWidth*4)*(i+1) );
                    // result.push("\n");
                    result +='<br/>';
                }

                return result;
            
            },

            start: function(img, canvasConfiguration, CanvasContext, isImg){

                if(!isImg){

                    $("pre").html(this.getAsciiTextOfImg(img, canvasConfiguration, CanvasContext));
                    return;
                }

                if(isImg){

                    this.generateImg( result, canvasWidth, canvasHeight );
                }
            },

            generateImg: function(text, canvasWidth, canvasHeight ){

                $("#AsciiButton").text("loading...");

                $.ajax({

                    type:  "post" ,
                    url:   "api/generateImg.php",
                    async: true,
                    data: {"text":text, "width":canvasWidth, "height":canvasHeight } ,
                    success:function(data){

                        $("#AsciiImg").attr("src","../images/girl-ascii.jpg");
                        $("#AsciiButton").text("Ascii");
                    },
                    error:function( e ){

                        alert(e);
                    },
                    complete:function(){

                    }
                });

            }

        }

    };

})();



