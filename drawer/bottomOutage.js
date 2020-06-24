
    function bottomOutage() {
        this.Handle = "bottomOutage";
        this.draw = function(context) {
  
          var simpleParameter = [];
        
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'bottomOutage';
          })
          this.parameter = simpleParameter[0]
  
          this.leftRight = this.parameter.value[0].leftRight;
  
          this.rightLeft = this.parameter.value[0].rightLeft;
         
  
          var b = new initDraw(context);
          var ele = new definitionObject();
  
          if(this.leftRight) {
            b.lbRectmove = b.initSignle_pos;
            b.rbRectmove = b.initSignle_pos;
            b.downline_pos = b.init2d_pos;
  
            b.logoMove =  {x:b.leftline_pos[1].x, y:b.leftline_pos[1].y - this.leftRight*10*b.rate/4-30}
          
            b.downnoteletter = {x:ele.downnote_Group.getPosition().x , y: ele.downnote_Group.getPosition().y-this.leftRight*10*b.rate/2}



            b.rightletter = {x:ele.rightmainGroup.getPosition().x,y:ele.rightmainGroup.getPosition().y-this.leftRight*b.rate*10/2}
           
            b.rightline_pos = [{x:ele.rightLine.getPosition()[0].x,y:ele.rightLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x,y:ele.rightLine.getPosition()[1].y-this.leftRight*b.rate*10},]
           
            b.rArrowline_pos =  [{x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y},  {x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y},]
            b.rgupArrowP_pos = [{x:b.rightline_pos[0].x-10+77, y:b.rightline_pos[0].y}, {x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[0].y}]
            b.rgdownArrowP_pos = [{x:b.rightline_pos[1].x-10+77, y:b.rightline_pos[1].y},{x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[1].y}]
            b.rgupTip_pos = {x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y};
            b.rgdownTip_pos ={x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y};
  
  
            b.CD_rArrowline = [{x:520 + b.widthDifference, y:905}, {x:520 + b.widthDifference, y:b.rightline_pos[1].y},]
            b.CD_rgdownArrowP = [{x:510 + b.widthDifference, y:905}, {x:530 + b.widthDifference, y:905},]
            b.CD_rgupTip = {x:520 + b.widthDifference, y:b.rightline_pos[1].y}
            b.CD_rgdownTip = {x:520 + b.widthDifference, y:905}
  
            b.CRBH_Group = {x:485 + b.widthDifference , y:731-10*b.rate*this.leftRight/2}
  
            if(this.leftRight.n%this.leftRight.d == 0) {
              ele.C_RBH_Letter.changeletter('' + parseInt(this.leftRight.n/this.leftRight.d));
              } else {
              ele.C_RBH_Letter.changeletter(''+parseInt(this.leftRight.n/this.leftRight.d)+ '-'+this.leftRight.n%this.leftRight.d + '/' + this.leftRight.d);
            }
  
            this.cr_dline = [{x:b.leftline_pos[1].x,y:b.leftline_pos[1].y},{x:b.rightline_pos[1].x,y:b.rightline_pos[1].y}]
            this.D_dot_Line = ele.downLine.getPosition();
  
            ele.D_dot_Line.drawPath(this.D_dot_Line);
            ele.CR_dline.drawPath(this.cr_dline)
           
          }
  
          if(this.rightLeft) {
            b.lbRectmove = b.initSignle_pos;
            b.rbRectmove = b.initSignle_pos;
            b.downline_pos = b.init2d_pos;
  
            b.logoMove =  {x:b.leftline_pos[1].x, y:b.leftline_pos[1].y - this.rightLeft*10*b.rate-30}
            b.downnoteletter = {x:ele.downnote_Group.getPosition().x , y: ele.downnote_Group.getPosition().y-this.rightLeft*10*b.rate/2}


            b.leftletter =  {x:ele.leftmainGroup.getPosition().x,y:ele.leftmainGroup.getPosition().y-this.rightLeft*b.rate*10/2}
            b.leftline_pos = [{x:ele.leftLine.getPosition()[0].x,y:ele.leftLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[1].x,y:ele.leftLine.getPosition()[1].y-this.rightLeft*b.rate*10},]
         
            b.lArrowline_pos =  [{x:52, y:b.leftline_pos[0].y},  {x:52, y:b.leftline_pos[1].y},]
            b.lfupArrowP_pos = [{x:40 , y:b.leftline_pos[0].y}, {x:65, y:b.leftline_pos[0].y}]
            b.lfdownArrowP_pos = [{x:40, y:b.leftline_pos[1].y},{x:65, y:b.leftline_pos[1].y}]
            b.lfupTip_pos = {x:52, y:b.leftline_pos[0].y};
            b.lfdownTip_pos ={x:52, y:b.leftline_pos[1].y};
  
            b.CD_lArrowline = [{x:52, y:905}, {x:52, y:b.leftline_pos[1].y},]
            b.CD_lfdownArrowP =[{x:40, y:905}, {x:65, y:905},]
            b.CD_lfupTip = {x:52, y:b.leftline_pos[1].y}
            b.CD_lfdownTip = {x:52, y:905}
  
            b.CLBH_Group = {x:15 , y:731 - 10 * b.rate * this.rightLeft/2}
           
            if(this.rightLeft.n%this.rightLeft.d == 0) {
                ele.C_LBH_letter.changeletter('' + parseInt(this.rightLeft.n/this.rightLeft.d));
                } else {
                ele.C_LBH_Letter.changeletter(''+parseInt(this.rightLeft.n/this.rightLeft.d)+ '-'+this.rightLeft.n%this.rightLeft.d + '/' + this.rightLeft.d);
              }
  
              this.cl_dline = [{x:b.rightline_pos[1].x,y:b.rightline_pos[1].y},{x:b.leftline_pos[1].x,y:b.leftline_pos[1].y}]
              this.D_dot_Line = ele.downLine.getPosition();
    
              ele.D_dot_Line.drawPath(this.D_dot_Line);
              ele.CL_dline.drawPath(this.cl_dline)
          }
  
          b.dis_leftHeight = math.subtract(ele.left_Heightletter.returnValue(),this.rightLeft)
          b.dis_rightHeight = math.subtract(ele.right_Heightletter.returnValue(),this.leftRight)
          b.dis_upWidth = ele.up_Widthletter.returnValue()
          b.dis_downWidth =ele.down_Widthletter.returnValue()
          b.draw();
  
  
  
  
  
  
        }
      }
  