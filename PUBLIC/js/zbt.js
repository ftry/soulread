       
          var getCoordInDocumentExample = function(){
            var coords = document.getElementById("coords");
            coords.onmousemove = function(e){
              var pointer = getCoordInDocument(e);
              var coord = document.getElementById("coord");
              coord.innerHTML = "X,Y=("+pointer.x+", "+pointer.y+")";
            }
          }
          var getCoordInDocument = function(e) {
            e = e || window.event;
            var x = e.pageX || (e.clientX +
              (document.documentElement.scrollLeft
              || document.body.scrollLeft));
            var y= e.pageY || (e.clientY +
              (document.documentElement.scrollTop
              || document.body.scrollTop));
            return {'x':x,'y':y};
          }
          window.onload = function(){
             getCoordInDocumentExample();
         };
       