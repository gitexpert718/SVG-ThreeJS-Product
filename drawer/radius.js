function radius() {
    this.Handle = "radius"

    this.draw = function(context) {

      var simpleParameter = [];
      simpleParameter = context.Parameters.filter((parameter, i) => { 
       return parameter.ParameterName === 'radius';
      })
      this.parameter = simpleParameter[0]


      this.r_luWidth = this.parameter.value[0].width;
      
      this.r_luHeight = this.parameter.value[0].height;
  
      this.r_ruWidth = this.parameter.value[1].width;

      this.r_ruHeight = this.parameter.value[1].height;

      this.r_lbWidth = this.parameter.value[2].width;
    
      this.r_lbHeight = this.parameter.value[2].height;

      this.r_rbWidth = this.parameter.value[3].width;

      this.r_rbHeight = this.parameter.value[3].height;
     

      var b = new initDraw(context);
      var ele = new definitionObject();

      // letter
      b.downletter = {x:ele.downmainGroup.getPosition().x +(this.r_lbWidth-this.r_rbWidth)*10*b.rate/2,y:ele.downmainGroup.getPosition().y}
      b.downnoteletter = {x:ele.downnote_Group.getPosition().x +(this.r_lbWidth-this.r_rbWidth)*10*b.rate/2,y:ele.downnote_Group.getPosition().y}
     
      b.upletter = {x:ele.upmainGroup.getPosition().x + (this.r_luWidth - this.r_ruWidth ) *10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
      b.topnoteletter= {x:ele.topnote_Group.getPosition().x + (this.r_luWidth - this.r_ruWidth ) *10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
    
      b.leftletter = {x:ele.leftmainGroup.getPosition().x,  y:ele.leftmainGroup.getPosition().y + (this.r_luHeight - this.r_lbHeight)*10*b.rate/2}
      b.leftnoteletter= {x:ele.leftnote_Group.getPosition().x,  y:ele.leftnote_Group.getPosition().y + (this.r_luHeight - this.r_lbHeight)*10*b.rate/2}
     
      b.rightletter = {x:ele.rightmainGroup.getPosition().x , y:ele.rightmainGroup.getPosition().y+ (this.r_ruHeight - this.r_rbHeight)*10*b.rate/2}
      b.rightnoteletter= {x:ele.rightnote_Group.getPosition().x , y:ele.rightnote_Group.getPosition().y+ (this.r_ruHeight - this.r_rbHeight)*10*b.rate/2}
  
      // mainline
      b.upline_pos =  [{x: ele.upLine.getPosition()[0].x + 10* this.r_luWidth * b.rate , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x -  10 * this.r_ruWidth * b.rate, y:ele.upLine.getPosition()[1].y},]
      b.downline_pos =  [{x:ele.downLine.getPosition()[0].x + 10 * b.rate * this.r_lbWidth, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * this.r_rbWidth * b.rate, y:ele.downLine.getPosition()[1].y},]
      b.leftline_pos =  [ {x:ele.leftLine.getPosition()[0].x, y:ele.leftLine.getPosition()[0].y + 10 * b.rate * this.r_luHeight}, {x:ele.leftLine.getPosition()[1].x, y:ele.leftLine.getPosition()[1].y - 10 * b.rate * this.r_lbHeight},]
      b.rightline_pos = [{x:ele.rightLine.getPosition()[0].x, y:ele.rightLine.getPosition()[0].y + 10 * b.rate * this.r_ruHeight},{x:ele.rightLine.getPosition()[1].x, y: ele.rightLine.getPosition()[1].y - 10 * b.rate * this.r_rbHeight},]
   
      b.logoMove =  {x:b.leftline_pos[1].x + 20, y:b.leftline_pos[1].y - 30}
     
    //  arrow
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

  // radius line && arrow
      if(this.r_luWidth || this.r_luHeight) {
        b.luRectmove = b.initSignle_pos;
        b.RL_upArrowline = [{x: 163, y:165}, {x:b.upline_pos[0].x , y:165},]
        b.RL_ulArrowP = [{x:163, y:175}, {x:163, y:155},]
        b.RL_ulTip = {x:163, y:165}
        b.RL_urTip = {x:b.upline_pos[0].x, y:165};
            
        b.RU_lArrowline =[{x:52, y:195}, {x:52, y:b.leftline_pos[0].y},]
        b.RU_lfupArrowP =[{x:40, y:195}, {x:65, y:195},]
        b.RU_lfupTip = {x:52, y:195}
        b.RU_lfdownTip = {x:52, y:b.leftline_pos[0].y}

        b.RLUW_Group = {x:133 + 10 * b.rate/2 * this.r_luWidth , y:130}
        b.RLUH_Group = {x:15 , y:26 + 10 *b.rate*this.r_luHeight/2}

        if(this.r_luWidth.n%this.r_luWidth.d == 0) {
          ele.R_LUW_Letter.changeletter('' + parseInt(this.r_luWidth.n/this.r_luWidth.d));
          } else {
          ele.R_LUW_Letter.changeletter(''+parseInt(this.r_luWidth.n/this.r_luWidth.d)+ '-'+this.r_luWidth.n%this.r_luWidth.d + '/' + this.r_luWidth.d);
        }

        if(this.r_luHeight.n%this.r_luHeight.d == 0) {
          ele.R_LUH_Letter.changeletter('' + parseInt(this.r_luHeight.n/this.r_luHeight.d));
          } else {
          ele.R_LUH_Letter.changeletter(''+parseInt(this.r_luHeight.n/this.r_luHeight.d)+ '-'+this.r_luHeight.n%this.r_luHeight.d + '/' + this.r_luHeight.d);
        }

        //curve
        // this.rl_u =  [{x:b.leftline_pos[0].x, y:b.leftline_pos[0].y},{x:163 + 10*this.r_luWidth*b.rate/4, y:195+10*b.rate*this.r_luHeight/4},{x:b.upline_pos[0].x, y:b.upline_pos[0].y}]
        this.rl_u =  [{x:b.leftline_pos[0].x, y:b.leftline_pos[0].y},{x:b.upline_pos[0].x, y:b.upline_pos[0].y}]

        ele.RL_u.drawCurve(this.rl_u)

      } else {
        ele.RL_u.drawCurve(b.init3d_pos)
      }

      if(this.r_ruWidth || this.r_ruHeight) {
        b.ruRectmove = b.initSignle_pos;
       
        b.RR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:443 + b.widthDifference, y:165},]
        b.RR_ulArrowP = [{x:443 + b.widthDifference, y:175}, {x:443 + b.widthDifference, y:155},]
        b.RR_ulTip = {x:b.upline_pos[1].x, y:165}
        b.RR_urTip = {x:443 + b.widthDifference , y:165}


        b.RU_rArrowline =[{x:520 + b.widthDifference, y:195}, {x:520 + b.widthDifference, y:b.rightline_pos[0].y},]
        b.RU_rgupArrowP = [{x:510 + b.widthDifference, y:195}, {x:530 + b.widthDifference, y:195},]
        b.RU_rgupTip = {x:520 + b.widthDifference, y:195}
        b.RU_rgdownTip = {x:520 + b.widthDifference, y:b.rightline_pos[0].y}
    
        
        b.RRUW_Group = {x:412 + b.widthDifference - 10 * this.r_ruWidth * b.rate/2 , y:130}
        b.RRUH_Group = {x:485 + b.widthDifference , y:26 + 10 * b.rate * this.r_ruHeight / 2}

        if(this.r_ruWidth.n%this.r_ruWidth.d == 0) {
          ele.R_RUW_Letter.changeletter('' + parseInt(this.r_ruWidth.n/this.r_ruWidth.d));
          } else {
          ele.R_RUW_Letter.changeletter(''+parseInt(this.r_ruWidth.n/this.r_ruWidth.d)+ '-'+this.r_ruWidth.n%this.r_ruWidth.d + '/' + this.r_ruWidth.d);

        }

        if(this.r_ruHeight.n%this.r_ruHeight.d == 0) {
          ele.R_RUH_Letter.changeletter('' + parseInt(this.r_ruHeight.n/this.r_ruHeight.d));
          } else {
          ele.R_RUH_Letter.changeletter(''+parseInt(this.r_ruHeight.n/this.r_ruHeight.d)+ '-'+this.r_ruHeight.n%this.r_ruHeight.d + '/' + this.r_ruHeight.d);
        }
     
        // this.rr_u = [{x:b.upline_pos[1].x, y:b.upline_pos[1].y},{x:443+b.widthDifference - 10*b.rate*this.r_ruWidth/4, y:195+10*b.rate*this.r_ruHeight/4},{x:b.rightline_pos[0].x, y:b.rightline_pos[0].y},]
        this.rr_u = [{x:b.rightline_pos[0].x, y:b.rightline_pos[0].y},{x:b.upline_pos[1].x, y:b.upline_pos[1].y},]
        ele.RR_u.drawCurve(this.rr_u);

       
      } else {
        ele.RR_u.drawCurve(b.init3d_pos)
      }

      if(this.r_lbWidth || this.r_lbHeight) {
        b.lbRectmove = b.initSignle_pos;

        b.RD_lArrowline = [{x:52, y:905}, {x:52, y:b.leftline_pos[1].y},]
        b.RD_lfdownArrowP =[{x:40, y:905}, {x:65, y:905},]
        b.RD_lfupTip = {x:52, y:b.leftline_pos[1].y}
        b.RD_lfdownTip = {x:52, y:905}

        b.RL_downArrowline = [{x:163, y:935}, {x:b.downline_pos[0].x, y:935},]
        b.RL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
        b.RL_dlTip = {x:163, y:935}
        b.RL_drTip = {x:b.downline_pos[0].x, y:935}

        
        b.RLBW_Group = {x:133 + 10*b.rate*this.r_lbWidth/2 , y:933}
        b.RLBH_Group = {x:15 , y:734 - 10 * b.rate * this.r_lbHeight/2}

        if(this.r_lbWidth.n%this.r_lbWidth.d == 0) {
          ele.R_LBW_Letter.changeletter('' + parseInt(this.r_lbWidth.n/this.r_lbWidth.d));
          } else {
          ele.R_LBW_Letter.changeletter(''+parseInt(this.r_lbWidth.n/this.r_lbWidth.d)+ '-'+this.r_lbWidth.n%this.r_lbWidth.d + '/' + this.r_lbWidth.d);
        }

        if(this.r_lbHeight.n%this.r_lbHeight.d == 0) {
          ele.R_LBH_letter.changeletter('' + parseInt(this.r_lbHeight.n/this.r_lbHeight.d));
          } else {
          ele.R_LBH_letter.changeletter(''+parseInt(this.r_lbHeight.n/this.r_lbHeight.d)+ '-'+this.r_lbHeight.n%this.r_lbHeight.d + '/' + this.r_lbHeight.d);
        }

        // this.rl_d = [{x:b.leftline_pos[1].x, y:b.leftline_pos[1].y},{x:163+this.r_lbWidth*10*b.rate/4, y:905-10*b.rate*this.r_lbHeight/4},{x:b.downline_pos[0].x, y:b.downline_pos[0].y}]
        this.rl_d = [{x:b.leftline_pos[1].x, y:b.leftline_pos[1].y},{x:b.downline_pos[0].x, y:b.downline_pos[0].y}]
         ele.RL_d.drawCurve(this.rl_d);


        } else {
          ele.RL_d.drawCurve(b.init3d_pos)
        }
  

      if(this.r_rbWidth || this.r_rbHeight) {
        b.rbRectmove = b.initSignle_pos;

        b.RR_downArrowline = [{x:b.downline_pos[1].x, y:935}, {x:443 + b.widthDifference, y:935},]
        b.RR_dlArrowP = [{x:443 + b.widthDifference, y:945}, {x:443 + b.widthDifference, y:925},]
        b.RR_dlTip ={x:b.downline_pos[1].x, y:935}
        b.RR_drTip = {x:443 + b.widthDifference, y:935}
       
        b.RD_rArrowline = [{x:520 + b.widthDifference, y:905}, {x:520 + b.widthDifference, y:b.rightline_pos[1].y},]
        b.RD_rgdownArrowP = [{x:510 + b.widthDifference, y:905}, {x:530 + b.widthDifference, y:905},]
        b.RD_rgupTip = {x:520 + b.widthDifference, y:b.rightline_pos[1].y}
        b.RD_rgdownTip = {x:520 + b.widthDifference, y:905}

        b.RRBW_Group = {x:412 + b.widthDifference -10*this.r_rbWidth/2*b.rate, y:933}
        b.RRBH_Group = {x:485 + b.widthDifference , y:734-10*b.rate*this.r_rbHeight/2}

        if(this.r_rbWidth.n%this.r_rbWidth.d == 0) {
          ele.R_RBW_Letter.changeletter('' + parseInt(this.r_rbWidth.n/this.r_rbWidth.d));
          } else {
          ele.R_RBW_Letter.changeletter(''+parseInt(this.r_rbWidth.n/this.r_rbWidth.d)+ '-'+this.r_rbWidth.n%this.r_rbWidth.d + '/' + this.r_rbWidth.d);
        }

        if(this.r_rbHeight.n%this.r_rbHeight.d == 0) {
          ele.R_RBH_Letter.changeletter('' + parseInt(this.r_rbHeight.n/this.r_rbHeight.d));
          } else {
          ele.R_RBH_Letter.changeletter(''+parseInt(this.r_rbHeight.n/this.r_rbHeight.d)+ '-'+this.r_rbHeight.n%this.r_rbHeight.d + '/' + this.r_rbHeight.d);
        }

        this.rr_d = [{x:b.rightline_pos[1].x, y:b.rightline_pos[1].y},{x:b.downline_pos[1].x, y:b.downline_pos[1].y},]
        ele.RR_d.drawCurve(this.rr_d);

        
      } else {
        ele.RR_d.drawCurve(b.init3d_pos)
      }

      b.dis_upWidth =  math.subtract(ele.up_Widthletter.returnValue(),(this.r_luWidth+this.r_ruWidth))
      b.dis_downWidth =  math.subtract(ele.down_Widthletter.returnValue(),(this.r_lbWidth+this.r_rbWidth))
      b.dis_leftHeight = math.subtract(ele.left_Heightletter.returnValue(),(this.r_luHeight+this.r_lbHeight))
      b.dis_rightHeight = math.subtract(ele.right_Heightletter.returnValue(),(this.r_ruHeight+this.r_rbHeight))
      
      b.draw();

  
     
    }
  }