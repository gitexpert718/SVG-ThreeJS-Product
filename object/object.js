    //  =  = = = = = = = = Object = = = = = = = = =
    function Pathline(id) {

        this.drawPath = function (position) {
            $('#'+id).attr("d",'M ' + position[0].x + ' ' + position[0].y + ' L ' + position[1].x + ' '+ position[1].y)
        }
        this.getPosition = function() {
          this.path_pos = [{x:0,y:0},{x:0,y:0}]; 
          this.position = $('#'+id).attr("d").split(" ")
          this.path_pos[0].x = Number(this.position[1])
          this.path_pos[0].y = Number(this.position[2]);
          this.path_pos[1].x = Number(this.position[4]);
          this.path_pos[1].y = Number(this.position[5]);
           return this.path_pos;
        }
      }
  
      function Arrow(id,direction) {
  
        this.drawArrow = function(position) {
  
          switch(direction) {
            case "up": 
            $('#'+ id).attr("d",'M '+ position.x + ' ' + position.y +  ' L ' + Number( position.x + 5) + ' ' + Number(position.y + 10) +  ' L ' + position.x + ' ' + position.y +  ' L ' + Number(position.x - 5) + ' ' + Number(position.y + 10) +  'Z');
            break;
            case "down":
              $('#'+ id).attr("d",'M '+ position.x + ' ' + position.y +  ' L ' + Number(position.x - 5) + ' ' + Number(position.y - 10) +  ' L ' + position.x + ' ' + position.y +  ' L ' + Number(position.x + 5) + ' ' + Number(position.y - 10) +  'Z');
            break;
            case "left":
              $('#'+ id).attr("d",'M '  + position.x +  ' ' + position.y + ' L ' + Number(position.x + 10) + ' ' + Number(position.y + 5) + ' L ' + position.x + ' ' + position.y + ' L ' + Number(position.x + 10) + ' ' +  Number(position.y - 5) + 'Z')
            break;
            case "right":
            $('#'+ id).attr("d",'M '+ position.x + ' ' + position.y +  ' L ' + Number(position.x - 10) + ' ' + Number(position.y + 5) +  ' L ' + position.x + ' ' + position.y +  ' L ' + Number(position.x - 10) + ' ' + Number( position.y - 5) +  'Z');
            break;
            }
        }
  
        this.getPosition = function() {
          this.arrow_pos = {x:0,y:0}; 
          this.position = $('#'+id).attr("d").split(" ")
          this.arrow_pos.x = Number(this.position[1])
          this.arrow_pos.y = Number(this.position[2]);
         
           return this.arrow_pos;
        }
  
        
      }
      
      function Group(id,direction) {
  
        this.moveGroup = function(position){
          switch(direction) {
            case "horizon":
              $('#'+id).attr("transform", 'translate(' + position.x + ', ' + position.y + ' )');
              break;
            case "vertical":
              $('#'+id).attr("transform", 'translate(' + position.x + ', ' + position.y + '), rotate(-90 100 100)')
            break;
          }
          
        }
        this.getPosition = function() {
          this.position = {x:0, y:0}
           this.position.x = Number($('#'+id).attr("transform").split("(")[1].split(",")[0]);
           this.position.y = Number($('#'+id).attr("transform").split("(")[1].split(",")[1].split(" ")[1].split(")")[0]);
          return this.position;
        }
          this.changeletter = function(text) {
          $('#'+id).text(text)
        }
  
      }
      
      function Rect(id) {
        this.moveRect = function (position) {
          $('#'+id).attr({"x": position.x  ,"y": position.y })
          }
  
        this.getPosition = function() {
          this.rect_pos = {x:0,y:0}; 
           this.positionX = $('#'+id).attr('x')
        
          this.positionY = $('#'+id).attr('y')
          this.rect_pos.x = Number(this.positionX)
          this.rect_pos.y = Number(this.positionY);
            return this.rect_pos;
        }
        this.setSize = function(size) {
          $('#'+id).attr({"width":' '+size.width+'px' , "height": ' '+size.height+'px'})
        }
      }
  
      function letter(id) {
  
        this.moveletter = function(position) {
    
          $('#'+id).css('transform','translate(' + position.x +'px, '+ position.y +'px)');
    
        }
        this.changeletter = function(text) {
          $('#'+id).text(text)
        }

        this.returnValue = function() {
          var string =  $('#'+id).text().split("-");
          var realValue = string[1] ? math.fraction(string[0]+' ' +string[1]) : math.fraction(string[0]);
          return realValue
        }
  
      }
  
      function curve(id) {
  
        this.drawCurve = function (position) {
          $('#'+id).attr("d",'M ' + position[0].x + ' ' + position[0].y + ' Q ' + position[0].x + ' '+ position[1].y +' ' + position[1].x + ' '+ position[1].y)
        }
        }
  
      function circle(id) {
        this.moveCircle = function(position) {
          $('#'+id).attr({'cx':''+ position.x+'','cy':''+position.y+''});
    
        }
        this.setSize = function(size) {
          $('#'+id).attr({'rx':''+ size+'','ry':''+size+''});
        }
  
        this.getPosition = function() {
          this.circle_pos = {x:0,y:0}; 
           this.positionX = $('#'+id).attr('cx')
        
          this.positionY = $('#'+id).attr('cy')
          this.circle_pos.x = Number(this.positionX)
          this.circle_pos.y = Number(this.positionY);
            return this.circle_pos;
        }
      }