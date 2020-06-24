function simplePanel() {

    this.Handle = "simplePanel";

    this.draw = function (context) {
      var ele = new definitionObject();
      var b = new initDraw(context);


      b.upline_pos =  [{x:ele.upLine.getPosition()[0].x, y:ele.upLine.getPosition()[0].y},  {x:ele.upLine.getPosition()[1].x + b.widthDifference, y:ele.upLine.getPosition()[1].y},]
      b.downline_pos =  [{x:ele.downLine.getPosition()[0].x, y:ele.downLine.getPosition()[0].y},  {x:ele.downLine.getPosition()[1].x+ b.widthDifference, y:ele.downLine.getPosition()[1].y},]
      b.leftline_pos =  [{x:ele.leftLine.getPosition()[0].x, y:ele.leftLine.getPosition()[0].y}, {x:ele.leftLine.getPosition()[1].x, y:ele.leftLine.getPosition()[1].y},]
      b.rightline_pos =  [{x:ele.rightLine.getPosition()[0].x+ b.widthDifference, y:ele.rightLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+ b.widthDifference, y:ele.rightLine.getPosition()[1].y},]
    
      b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},]
      b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
      b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
      b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
      b.urTip_pos = {x:b.upline_pos[1].x, y:165};

      b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
      b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
      b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
      b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
      b.drTip_pos = {x:b.downline_pos[1].x, y:935};

      b.rArrowline_pos =  [{x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y},  {x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y},]
      b.rgupArrowP_pos = [{x:b.rightline_pos[0].x-10+77, y:b.rightline_pos[0].y}, {x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[0].y}]
      b.rgdownArrowP_pos = [{x:b.rightline_pos[1].x-10+77, y:b.rightline_pos[1].y},{x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[1].y}]
      b.rgupTip_pos = {x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y};
      b.rgdownTip_pos ={x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y};


      b.lArrowline_pos =  [{x:52, y:b.leftline_pos[0].y},  {x:52, y:b.leftline_pos[1].y},]
      b.lfupArrowP_pos = [{x:40 , y:b.leftline_pos[0].y}, {x:65, y:b.leftline_pos[0].y}]
      b.lfdownArrowP_pos = [{x:40, y:b.leftline_pos[1].y},{x:65, y:b.leftline_pos[1].y}]
      b.lfupTip_pos = {x:52, y:b.leftline_pos[0].y};
      b.lfdownTip_pos ={x:52, y:b.leftline_pos[1].y};
    
     
      b.upletter.x = ele.upmainGroup.getPosition().x+b.widthDifference/2
      b.downletter.x = ele.downmainGroup.getPosition().x+b.widthDifference/2;
      b.rightletter.x = ele.rightmainGroup.getPosition().x + b.widthDifference


      b.centernotletter.x = ele.centerGroup.getPosition().x+b.widthDifference/2
      
      b.topnoteletter.x = ele.topnote_Group.getPosition().x+b.widthDifference/2
      b.downnoteletter.x = ele.downnote_Group.getPosition().x+b.widthDifference/2
      b.rightnoteletter.x = ele.rightnote_Group.getPosition().x+b.widthDifference
      
      b.logoMove =  {x:ele.leftLine.getPosition()[1].x + 20, y:ele.leftLine.getPosition()[1].y - 30}


      b.ruRectmove = {x:ele.ruRect.getPosition().x + b.widthDifference, y:ele.ruRect.getPosition().y};
      b.rbRectmove = {x:ele.rbRect.getPosition().x + b.widthDifference, y:ele.rbRect.getPosition().y};
      b.luRectmove = {x:ele.luRect.getPosition().x, y:ele.luRect.getPosition().y};
      b.lbRectmove = {x:ele.lbRect.getPosition().x, y:ele.lbRect.getPosition().y};

      b.BULine =  [{x:ele.BULine.getPosition()[0].x,y:ele.BULine.getPosition()[0].y},{x:ele.BULine.getPosition()[1].x+b.widthDifference,y:ele.BULine.getPosition()[1].y}]

      b.BLLine =  [{x:ele.BLLine.getPosition()[0].x,y:ele.BLLine.getPosition()[0].y},{x:ele.BLLine.getPosition()[1].x,y:ele.BLLine.getPosition()[1].y}]
   
      b.BRLine =  [{x:ele.BRLine.getPosition()[0].x+b.widthDifference,y:45},{x:ele.BRLine.getPosition()[1].x+b.widthDifference,y:75}]
   
      b.BDLine = [{x:ele.BDLine.getPosition()[0].x,y:ele.BDLine.getPosition()[0].y},{x:ele.BDLine.getPosition()[1].x+b.widthDifference,y:ele.BDLine.getPosition()[1].y}]
   
   
      b.draw();
    };

    this.convertToPNG = function () {
      var d = new Date();
      function download(
          filename, // string
          blob // Blob
        ) {
          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
          } else {
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
          }
        }
        
        var svg = document.querySelector('svg');
        var data = (new XMLSerializer()).serializeToString(svg);
        var canvas = document.createElement('canvas');
      
        canvg(canvas, data, {
          renderCallback: function () {
            canvas.toBlob(function (blob) {
                download(`${d.getDate()}day-${d.getHours()}hour/${d.getMinutes()}min.png`, blob);
            });
          }
        });
      return "";
    };

    this.cleanUp = function () {
    };

    this.reset = function () {

    };
}
