


    function Miter() {
      console.log("in Miter: cloneIdAdded", cloneIdAdded);

        this.Handle = "Miter";
        this.draw = function(context) {
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'Miter';
         })
  
            this.parameter = simpleParameter[0].value
            this.LMB_letter = this.parameter[0].LMB_letter;
            this.RMB_letter = this.parameter[0].RMB_letter;
            this.LMF_letter = this.parameter[0].LMF_letter;
            this.RMF_letter = this.parameter[0].RMF_letter;
  
            var b = new initDraw(context);
            var ele = new definitionObject();
  
            this.calTan1 = 0
            this.calTan2 = 0
            this.calTan3 = 0
            this.calTan4 = 0

          
            if(this.LMB_letter) {
              this.lmbtext = this.LMB_letter + "° front"
              this.lefttext = this.LMB_letter + "° Polished front Miter"
  
              
              this.LM_letterG = {x:90,y:44}
              ele.LM_letterG.moveGroup(this.LM_letterG)
          
              ele.LM_letter.changeletter(this.lmbtext)
              ele.leftnote.changeletter(this.lefttext)

              this.calTan1 = math.tan(this.LMB_letter*Math.PI/180)
              b.BULine = [{x:ele.BULine.getPosition()[0].x + 30* this.calTan1,y:45},{x:ele.BULine.getPosition()[1].x-30*this.calTan3,y:45}]

              b.BLLine = [{x:b.BULine[0].x,y:b.BULine[0].y},{x:163,y:75}]
              b.LM_dot = [{x:180,y:195},{x:180,y:905}]
              
  
            } else if(this.LMF_letter) {
              this.lmftext = this.LMF_letter + "° front"
              this.lefttext = this.LMF_letter + "° Polished front Miter"

  
              this.LM_letterG = {x:90,y:44}
              ele.LM_letterG.moveGroup(this.LM_letterG)
              ele.leftnote.changeletter(this.lefttext)
  
              ele.LM_letter.changeletter(this.lmftext)
              this.calTan2 = math.tan(this.LMF_letter*Math.PI/180)
              b.BDLine = [{x:ele.BDLine.getPosition()[0].x + 30*  this.calTan2,y:75},{x:ele.BDLine.getPosition()[1].x - 30* this.calTan4,y:75}]
            
              b.BLLine = [{x:b.BDLine[0].x,y:75},{x:163,y:45}]
              b.LM_dot = [{x:180,y:195},{x:180,y:905}]
              
            } else {
              ele.LM_letterG.moveGroup(b.initSignle_pos)
            }

            if(this.RMB_letter) {
              this.rmbtext = this.RMB_letter + "° back"
              this.righttext = this.RMB_letter + "° Polished back Miter"
  
              ele.RM_letter.changeletter(this.rmbtext)
              ele.rightnote.changeletter(this.righttext)
  
              this.RM_letterG = {x:470 + b.widthDifference,y:44};
              ele.RM_letterG.moveGroup(this.RM_letterG)
  
              this.calTan3 = math.tan(this.RMB_letter*Math.PI/180)
              b.BULine = [{x:ele.BULine.getPosition()[0].x + 30*  this.calTan1,y:45},{x:ele.BULine.getPosition()[1].x-30*this.calTan3,y:45}]
  
              b.BRLine = [b.BULine[1],{x:443+b.widthDifference,y:75}]
              b.RM_dot = [{x:425+b.widthDifference,y:195},{x:425+b.widthDifference,y:905}]
            } else if(this.RMF_letter) {
              this.rmftext = this.RMF_letter + "° back"
              this.righttext = this.RMF_letter + "° Polished back Miter"
  
              ele.RM_letter.changeletter(this.rmftext)
              ele.rightnote.changeletter(this.righttext)

              
              this.RM_letterG = {x:470 + b.widthDifference,y:44};
              ele.RM_letterG.moveGroup(this.RM_letterG)
  
              this.calTan4 = math.tan(this.RMF_letter*Math.PI/180)
              b.BDLine = [{x:ele.BDLine.getPosition()[0].x + 30*  this.calTan2,y:75},{x:ele.BDLine.getPosition()[1].x - 30* this.calTan4,y:75}]
              b.BRLine = [b.BDLine[1],{x:443+b.widthDifference,y:45}]
              b.RM_dot = [{x:425+b.widthDifference,y:195},{x:425+b.widthDifference,y:905}]
            } else {
              ele.RM_letterG.moveGroup(b.initSignle_pos)
            }
  
  
  
            b.dis_upWidth = ele.up_Widthletter.returnValue();
            b.dis_downWidth = ele.down_Widthletter.returnValue();
            b.dis_leftHeight = ele.left_Heightletter.returnValue();
            b.dis_rightHeight = ele.right_Heightletter.returnValue()
            b.draw()
        }
  
      }
  