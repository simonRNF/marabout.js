//BG_blur
        function BG_blur_resize(){
          $(".BG_blur").each(function(){
            var element=$(this);

            var parentposition=element.prev(".BG_blur_append").offset();
            var parentwidth=element.prev(".BG_blur_append").outerWidth();
            var parentheight=element.prev(".BG_blur_append").outerHeight();

            element.css({
              "width":parentwidth+"px",
              "height":parentheight+"px",
              "top":parentposition.top,
              "left":parentposition.left
            });
          });
        };

        function BG_blur_func(incrementation, interval, nb_colors, BG_wallpaper_color, items_size_px, blur_value){


          //generation elements
          $(".BG_blur_append").each(function(){
            var parent = $(this);
            var elements="<div class='BG_blur'><div class='BG_blur_wrapper_colors' style='width:calc(100% - "+(items_size_px/4)+"px); height:calc(100% - "+(items_size_px/4)+"px);'>";
            for (var i = 0; i < nb_colors.length; i++) {
              elements+="<div class='BG_blur_colors' style='background-color:"+nb_colors[i]+"' data-top='"+Math.floor((Math.random() * 100))+"' data-left='"+Math.floor((Math.random() * 100))+"' data-topway='"+Math.floor((Math.random() * 2))+"' data-leftway='"+Math.floor((Math.random() * 2))+"'></div>";
            }//boolean to 1 => left to right or top to bottom
            elements+="</div></div>";
            $(elements).insertAfter(parent);
          });
          $(".BG_blur_colors").each(function(){
            var element=$(this);
            element.css({
              "top":element.attr("data-top")+"%",
              "left":element.attr("data-left")+"%"
            })
          })
          $(".BG_blur_colors").css({
            "width":items_size_px,
            "height":items_size_px,
            "border-radius":parseInt(items_size_px)/2,
            "filter":"blur("+blur_value+"px)"
          });
          $(".BG_blur").css({
            "background-color": BG_wallpaper_color
          });
          BG_blur_resize();
        //end generation elements


        //time evolution
          var interval=setInterval(function(){
            $("div.BG_blur_colors").each(function(){
              var element=$(this);

        //switch way
          if ((parseInt(element.attr("data-top"))<=0)||(parseInt(element.attr("data-top"))>=100)) {

            if(element.attr("data-topway")=="1"){
              element.attr("data-topway", "0");
            }else{
              element.attr("data-topway", "1");
            }
          }
          if ((parseInt(element.attr("data-left"))<=0)||(parseInt(element.attr("data-left"))>=100)) {

            if(element.attr("data-leftway")=="1"){
              element.attr("data-leftway", "0");
            }else{
              element.attr("data-leftway", "1");
            }
          }
        //end switch way


        //translation in the right way
              switch (element.attr("data-topway")) { //switch translation in the right way
                case "1":
                element.attr("data-top", parseInt(element.attr("data-top"))+incrementation);
                  break;
                case "0":
                element.attr("data-top", parseInt(element.attr("data-top"))-incrementation);
                  break;
              }

              switch (element.attr("data-leftway")) {
                case "1":
                element.attr("data-left", parseInt(element.attr("data-left"))+incrementation);
                  break;
                case "0":
                element.attr("data-left", parseInt(element.attr("data-left"))-incrementation);
                  break;
              }
        //end translation in the right way

              element.css({
                "top":element.attr("data-top")+"%",
                "left":element.attr("data-left")+"%"
              })
            })
          }, interval);
        //end time evolution
          $(window).resize(function() {
            BG_blur_resize();
          });
          $(".BG_blur_append").resize(function() {
            BG_blur_resize();
          });
          $(".BG_blur_append").bind("reposition",function(){
            BG_blur_resize();
          });
        };
//end BG_blur
